// — Configuration — 
var LOG_SHEET_ID   = "1m4vg1eLq-_VkEsQ37GlEIajHJna5jVVVeuL6VotCCw8";
var LOG_SHEET_NAME = "Cabinets_Log";
var SEL_PROP       = "LAST_SELECTION_VALUES";
var MAX_LEN        = 250;

// — Capture the user's selection before any edit — 
function onSelectionChange(e) {
  var sheet = e.range.getSheet();
  if (sheet.getName() !== "Cabinets") return;
  var a1   = e.range.getA1Notation();
  var vals = e.range.getValues();
  Logger.log("onSelectionChange ➔ range=%s, vals=%s", a1, JSON.stringify(vals));
  PropertiesService.getDocumentProperties()
    .setProperty(SEL_PROP, JSON.stringify({ a1: a1, vals: vals }));
}

// — Main edit logger — 
function onEdit(e) {
  Logger.log("=== onEdit start ===");
  var sheet = e.source.getActiveSheet();
  Logger.log("Active sheet: %s", sheet.getName());
  if (sheet.getName() !== "Cabinets") {
    Logger.log("Not Cabinets → exit");
    return;
  }

  // Retrieve last selection
  var docProps = PropertiesService.getDocumentProperties();
  var selRaw   = docProps.getProperty(SEL_PROP);
  var selData  = selRaw ? JSON.parse(selRaw) : null;
  Logger.log("selData: %s", selRaw);

  // Row insert/delete detection
  var oldRows     = Number(docProps.getProperty("ROW_COUNT") || sheet.getMaxRows());
  var newRows     = sheet.getMaxRows();
  var rowInserted = newRows > oldRows;
  var rowDeleted  = newRows < oldRows;
  Logger.log("Rows: old=%d new=%d inserted=%s deleted=%s",
             oldRows, newRows, rowInserted, rowDeleted);
  docProps.setProperty("ROW_COUNT", newRows);

  // Range details
  var range   = e.range;
  var row     = range.getRow();
  var col     = range.getColumn();
  var numRows = range.getNumRows();
  var numCols = range.getNumColumns();
  Logger.log("Edited range: %s (r=%d c=%d nr=%d nc=%d)",
             range.getA1Notation(), row, col, numRows, numCols);

  // Model ID column for product context
  var headers    = sheet.getRange(1,1,1,sheet.getLastColumn()).getValues()[0];
  var productCol = headers.indexOf("Model ID") + 1;
  Logger.log("Model ID at col %d", productCol);

  // Timestamp & user
  var tz        = e.source.getSpreadsheetTimeZone();
  var timestamp = Utilities.formatDate(new Date(), tz, "EEE M/d/yy h:mm:ss a");
  var user      = Session.getActiveUser().getEmail();
  Logger.log("Timestamp=%s, User=%s", timestamp, user);

  // — Single-cell edits — 
  if (numRows === 1 && numCols === 1) {
    Logger.log("→ single-cell branch");
    var a1      = getColumnLetter(col) + row;
    var cell    = sheet.getRange(a1);
    var origVal, newVal;

    // 1) Get original value from selData if it matches this cell
    if (selData && selData.a1 === a1
        && selData.vals.length === 1 && selData.vals[0].length === 1) {
      origVal = selData.vals[0][0];
      Logger.log("origVal from selData: '%s'", origVal);
      docProps.deleteProperty(SEL_PROP);
    } else {
      // fallback to e.oldValue (treat null as empty)
      origVal = (e.oldValue == null) ? "" : e.oldValue;
      Logger.log("origVal from e.oldValue: '%s'", origVal);
    }

    // 2) Get the new, post-edit value from the sheet
    newVal = cell.getValue();
    Logger.log("newVal from cell.getValue(): '%s'", newVal);

    // 3) Detect paste: both e.oldValue & e.value are null, and the value changed
    var isPaste = (e.oldValue == null && e.value == null && newVal != origVal);
    Logger.log("Paste? oldValue==null:%s, value==null:%s, newVal!=origVal:%s → %s",
               e.oldValue==null, e.value==null, newVal!=origVal, isPaste);

    // 4) Build before/after strings
    var beforeVal = origVal === "" ? "" : origVal;
    var afterVal  = (newVal === "" ? "[ ]" : newVal);

    // 5) If NOT a paste, run the normal single-cell logic (including deletes & formulas)
    if (!isPaste) {
      var oldF = cell.getFormula() && e.oldValue != null ? cell.getFormula() : "";
      var newF = cell.getFormula() && e.value    != null ? cell.getFormula() : "";
      if (e.oldValue == null && e.value != null) {
        beforeVal = "";
        afterVal  = e.value;
      } else if (e.oldValue != null) {
        beforeVal = oldF
          ? e.oldValue + " (" + oldF + ")"
          : e.oldValue;
        afterVal  = e.value || "[ ]";
      } else {
        beforeVal = "del";
        afterVal  = e.value || "del";
      }
      if (newF) afterVal = cell.getValue() + " (" + newF + ")";
      Logger.log("After normal logic, beforeVal='%s', afterVal='%s'", beforeVal, afterVal);
    }

    // 6) Truncate both at MAX_LEN
    if (beforeVal.length > MAX_LEN) beforeVal = beforeVal.substring(0,MAX_LEN) + "...";
    if (afterVal.length  > MAX_LEN) afterVal  = afterVal.substring(0,MAX_LEN)  + "...";
    Logger.log("After truncate, beforeVal='%s', afterVal='%s'", beforeVal, afterVal);

    // 7) Determine action
    var action;
    if (isPaste) {
      action = "Pasted copied data";
    } else {
      // reuse existing type logic
      var oldType = (e.oldValue!=null && cell.getFormula()) ? "Formula"
                  : (e.oldValue==null ? "Empty"
                  : (!isNaN(parseFloat(e.oldValue)) && e.oldValue==parseFloat(e.oldValue)
                     ? "Number":"Text"));
      var newType = (e.value   !=null && cell.getFormula()) ? "Formula"
                  : (e.value   ==null ? "Empty"
                  : (!isNaN(parseFloat(e.value)) && e.value==parseFloat(e.value)
                     ? "Number":"Text"));
      if      (oldType==="Empty")        action = newType + " added";
      else if (newType==="Empty")        action = oldType + "del";
      else if (oldType===newType)        action = oldType + " value changed";
      else                                action = oldType + " replaced with " + newType.toLowerCase();
    }
    Logger.log("Final action: %s", action);

    // 8) Write to log
    var product = (row===1)
      ? "Header Row"
      : (productCol>0 ? sheet.getRange(row,productCol).getValue() : "Not Found");
    var logSheet = _getLogSheet();
    _ensureHeader(logSheet);
    Logger.log("Appending: [%s, %s, %s, %s, %s, %s, %s]",
               timestamp, user, action, product, a1, beforeVal, afterVal);
    logSheet.appendRow([timestamp, user, action, product, a1, beforeVal, afterVal]);
    Logger.log("=== onEdit end (single) ===");
    return;
  }

  // — Multi-cell edits — (unchanged) —
  Logger.log("→ multi-cell branch");
  var product = "";
  if (row===1) {
    product = "Header Row";
    if (numRows>1 && productCol>0) {
      var ids = sheet.getRange(2,productCol,numRows-1,1).getValues().flat();
      if (ids.length) product += ", " + ids.join(", ");
    }
  } else {
    product = productCol>0
      ? sheet.getRange(row,productCol,numRows,1).getValues().flat().join(", ")
      : "Not Found";
  }
  Logger.log("Product: %s", product);

  var rangeA1  = getColumnLetter(col)+row + ":" +
                 getColumnLetter(col+numCols-1)+(row+numRows-1);
  var newVals   = sheet.getRange(row,col,numRows,numCols).getValues();
  var newForms  = sheet.getRange(row,col,numRows,numCols).getFormulas();
  var newType   = _getRangeType(newVals,newForms);
  var uniform   = _checkUniformity(newVals,newForms,newType);
  Logger.log("Range %s type=%s uniform=%s", rangeA1, newType, uniform);

  var beforeStr = "";
  if (newType==="empty" && selData && selData.vals) {
    beforeStr = selData.vals.flat().map(v=>v===""?"[ ]":v).join(", ");
    docProps.deleteProperty(SEL_PROP);
    Logger.log("beforeStr from selData: %s", beforeStr);
  } else if (typeof e.oldValue!=="undefined") {
    beforeStr = Array.isArray(e.oldValue)
      ? e.oldValue.flat().join(", ")
      : String(e.oldValue);
    Logger.log("beforeStr from e.oldValue: %s", beforeStr);
  }

  var afterStr = newVals.flat().map(v=>v===""?"[ ]":v).join(", ");
  Logger.log("afterStr raw: %s", afterStr);

  if (beforeStr.length>MAX_LEN) beforeStr = beforeStr.substring(0,MAX_LEN)+"...";
  if (afterStr.length >MAX_LEN) afterStr  = afterStr.substring(0,MAX_LEN)+"...";
  Logger.log("after truncate beforeStr='%s', afterStr='%s'", beforeStr, afterStr);

  var action = "";
  if      (rowInserted)        action = "Row Inserted";
  else if (rowDeleted)         action = "Row Deleted";
  else if (newType==="empty")  action = "Range deleted";
  else if (typeof e.value!=="undefined") {
    action = "Range replaced with " +
             (uniform?"uniform ":"different ")+newType;
    if (newType==="formulas" && _isDraggedFormulas(newForms)) {
      action = "Range replaced with " +
               (uniform?"uniform ":"different ")+"formulas dragged down";
    }
  } else {
    action = "Range updated to " +
             (uniform?"uniform ":"different ")+newType;
  }
  Logger.log("Final multi action: %s", action);

  var logSheet = _getLogSheet();
  _ensureHeader(logSheet);
  Logger.log("Appending multi: [%s,%s,%s,%s,%s,%s,%s]",
             timestamp,user,action,product,rangeA1,beforeStr,afterStr);
  logSheet.appendRow([timestamp,user,action,product,rangeA1,beforeStr,afterStr]);
  Logger.log("=== onEdit end (multi) ===");
}

// — Helpers — 

function _getLogSheet(){
  var ss = SpreadsheetApp.openById(LOG_SHEET_ID);
  return ss.getSheetByName(LOG_SHEET_NAME)
      || ss.insertSheet(LOG_SHEET_NAME);
}

function _ensureHeader(sh){
  if (sh.getLastRow() === 0) {
    Logger.log("Creating header");
    sh.appendRow([
      "Timestamp","User",
      "Action","Product",
      "Cell(s) Edited","BEFORE Edit Cell Content","AFTER Edit Cell Content"
    ]);
  }
}

function _getRangeType(vals, forms) {
  var hasNum=false,hasText=false,hasForm=false,hasEmpty=false;
  vals.forEach(function(r,i){
    r.forEach(function(v,j){
      if (forms[i][j])       hasForm = true;
      else if (v==="")       hasEmpty= true;
      else if (!isNaN(parseFloat(v))&&v==parseFloat(v)) hasNum=true;
      else                    hasText= true;
    });
  });
  if (hasForm&&!hasNum&&!hasText&&!hasEmpty) return "formulas";
  if (hasNum&&!hasText&&!hasForm&&!hasEmpty) return "numbers";
  if (hasText&&!hasNum&&!hasForm&&!hasEmpty) return "text";
  if (hasEmpty&&!hasNum&&!hasText&&!hasForm) return "empty";
  return "mixed content";
}

function _checkUniformity(vals, forms, type) {
  if (type==="empty"||type==="mixed content") return false;
  var first=null;
  for(var i=0;i<vals.length;i++){
    for(var j=0;j<vals[i].length;j++){
      var v = (type==="formulas"?forms[i][j]:vals[i][j]);
      if (v==="") continue;
      if (first===null) first=v;
      else if (v!==first) return false;
    }
  }
  return true;
}

function _isDraggedFormulas(forms) {
  if (forms.length<2) return false;
  var f0 = forms[0][0];
  if (!f0) return false;
  return forms.every(function(r,i){
    return r[0] && r[0].includes(String(i+1));
  });
}

function getColumnLetter(n) {
  var s="";
  while(n>0){
    var m=(n-1)%26;
    s=String.fromCharCode(65+m)+s;
    n=(n-m-1)/26;
  }
  return s;
}
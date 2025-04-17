function onChange(e) { 
  try {
    var sheet = e.source.getActiveSheet();
    if (sheet.getName() !== "Cabinets") return;

    var changeType = e.changeType;
    if (changeType !== "INSERT_COLUMN" && changeType !== "REMOVE_COLUMN") return;

    var timestamp = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "EEE M/d/yy h:mm:ss a");
    var user = Session.getActiveUser().getEmail();
    var logSheet = SpreadsheetApp.openById("1m4vg1eLq-_VkEsQ37GlEIajHJna5jVVVeuL6VotCCw8").getSheetByName("Cabinets_Log") || 
                   SpreadsheetApp.openById("1m4vg1eLq-_VkEsQ37GlEIajHJna5jVVVeuL6VotCCw8").insertSheet("Cabinets_Log");

    if (logSheet.getLastRow() === 0) {
      logSheet.appendRow(["Timestamp", "User", "Action", "Product", "Cell Edited", "Start Value", "New Value"]);
    }

    var range = sheet.getActiveRange();
    var col = range ? range.getColumn() : sheet.getLastColumn();
    var numCols = range ? range.getNumColumns() : 1;
    var startCol = getColumnLetter(col);
    var endCol = getColumnLetter(col + numCols - 1);
    var affectedRange = numCols > 1 ? startCol + "1:" + endCol : startCol + "1:" + startCol;
    var action = changeType === "INSERT_COLUMN"
      ? (numCols > 1 ? "Columns inserted" : "Column inserted")
      : (numCols > 1 ? "Columns deleted" : "Column deleted");

    logSheet.appendRow([timestamp, user, action, "", affectedRange, "", ""]);

  } catch (error) {
    var debugSheet = SpreadsheetApp.openById("1m4vg1eLq-_VkEsQ37GlEIajHJna5jVVVeuL6VotCCw8").getSheetByName("DebugLog") || 
                     SpreadsheetApp.openById("1m4vg1eLq-_VkEsQ37GlEIajHJna5jVVVeuL6VotCCw8").insertSheet("DebugLog");
    debugSheet.appendRow([Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "EEE M/d/yy h:mm:ss a"), "onChange Error", error.toString(), JSON.stringify(e)]);
  }
}

function getColumnLetter(colNum) {
  var temp, letter = '';
  while (colNum > 0) {
    temp = (colNum - 1) % 26;
    letter = String.fromCharCode(temp + 65) + letter;
    colNum = (colNum - temp - 1) / 26;
  }
  return letter;
}

function installOnChangeTrigger() {
  var spreadsheet = SpreadsheetApp.getActive();
  var triggers = ScriptApp.getProjectTriggers();
  for (var i = 0; i < triggers.length; i++) {
    if (triggers[i].getHandlerFunction() === "onChange") {
      ScriptApp.deleteTrigger(triggers[i]);
    }
  }
  ScriptApp.newTrigger("onChange")
    .forSpreadsheet(spreadsheet)
    .onChange()
    .create();
}
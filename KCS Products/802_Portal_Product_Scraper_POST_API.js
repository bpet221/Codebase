// Paste this entire script into the console and hit Enter to run:

// — Stop logic (do not edit) —
let STOP = false;
window.stop = window.Stop = () => { STOP = true; };

async function scrapeAndExport() {
  const logs = [];

  // Grab form key
  const formKey = document.querySelector('input[name="form_key"]')?.value;
  if (!formKey) {
    console.error("❌ form_key not found");
    return;
  }

  // SCRIPT 1: fetch all products
  const scriptTags = Array.from(document.querySelectorAll('script'));
  const categoryIDs = new Set();
  scriptTags.forEach(tag => {
    const text = tag.textContent || '';
    for (const [, id] of text.matchAll(/"category_id"\s*:\s*"(\d+)"/g)) {
      categoryIDs.add(id);
    }
  });
  const finalCategoryIDs = Array.from(categoryIDs);

  const stripQuotes = val =>
    typeof val === "string" ? val.replace(/^['"]+|['"]+$/g, "") : val;
  const delay = ms => new Promise(res => setTimeout(res, ms));

  const collectionMap = {
    5: "Stowe White",
    10: "Bolton White",
    1689: "Samples",
    1837: "Insert",
    1838: "Marketing",
    7: "Stowe Light Gray",
    11: "Bolton Green",
    8: "Stowe Natural",
    12: "Bolton Blue",
    9: "Stowe Driftwood"
  };

  const headers = [
    "id", "sku", "product_name", "category_id", "Category Name", "Collection Name",
    "description", "Image", "stock_status", "k_product_type", "Assembly Price",
    "Assembly Option ID", "Assembly Value ID", "selectedassebly", "selected_hinge",
    "hinge_options", "Hinge Left Option ID", "Hinge Left Value ID", "Hinge Left Price",
    "Hinge Right Option ID", "Hinge Right Value ID", "Hinge Right Price",
    "selected_finishEnd", "selected_finishedend", "finishEnd_options", "finishedend",
    "total_price", "unit_price", "finalPrice", "main_regular_price", "regular_price",
    "has_special_price", "show_modification", "selected_assembly_toggle", "cat_option_header",
    "scrape_script_data"
  ];

  const allProducts = [];
  const seen = new Set();
  const categoryMap = {};

  // Stage 1: fetch products
  for (const catID of finalCategoryIDs) {
    if (STOP) break;
    let page = 1, nextPage = true;
    while (nextPage) {
      if (STOP) break;
      console.log(`➡️ Fetching category ${catID}, page ${page}`);
      const res = await fetch("/kcheckout/ajax/getcurrentcategoryproducts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
          "X-Magento-Form-Key": formKey
        },
        body: JSON.stringify({
          category_id: catID,
          page_number: page,
          selected_assembly_toggle: "1"
        })
      });
      const json = await res.json();
      nextPage = json.next_page;
      for (const product of json.products || []) {
        if (STOP) break;
        const id = stripQuotes(product.id);
        if (seen.has(id)) continue;
        seen.add(id);

        const yesAssembly = Array.isArray(product.has_assebly)
          ? product.has_assebly.find(opt => opt.label === "Yes")
          : null;
        const imgMatch = product.description?.match(/<img\s+src=["']?([^"' >]+)["']?/i);
        const descMatch = product.description?.match(/<div[^>]*>(.*?)<\/div>/i);
        const rawImage = imgMatch?.[1] || "";
        const wrappedImage = rawImage ? `=image("${rawImage}")` : "";
        const shortDesc = descMatch?.[1] || "";
        const hingeOpts = Array.isArray(product.hinge_options) ? product.hinge_options : [];
        const hingeLeft = hingeOpts.find(o => (o.label || "").toLowerCase().includes("left"));
        const hingeRight = hingeOpts.find(o => (o.label || "").toLowerCase().includes("right"));
        const category_id = Array.isArray(product.category_id)
          ? product.category_id[0]
          : product.category_id;

        categoryMap[category_id] ||= `Category ${category_id}`;
        const collectionName = collectionMap[parseInt(category_id)] || "";

        allProducts.push({
          id,
          sku: stripQuotes(product.sku),
          product_name: stripQuotes(product.product_name),
          category_id: stripQuotes(category_id),
          "Category Name": categoryMap[stripQuotes(category_id)],
          "Collection Name": collectionName,
          description: stripQuotes(shortDesc),
          Image: wrappedImage,
          stock_status: stripQuotes(product.stock_status),
          k_product_type: stripQuotes(product.k_product_type),
          "Assembly Price": yesAssembly ? parseFloat(yesAssembly.price).toFixed(2) : "",
          "Assembly Option ID": stripQuotes(yesAssembly?.optionId),
          "Assembly Value ID": stripQuotes(yesAssembly?.valueId),
          selectedassebly: stripQuotes(product.selectedassebly),
          selected_hinge: stripQuotes(product.selected_hinge),
          hinge_options: hingeOpts.length,
          "Hinge Left Option ID": stripQuotes(hingeLeft?.optionId),
          "Hinge Left Value ID": stripQuotes(hingeLeft?.valueId),
          "Hinge Left Price": hingeLeft ? parseFloat(hingeLeft.price).toFixed(2) : "",
          "Hinge Right Option ID": stripQuotes(hingeRight?.optionId),
          "Hinge Right Value ID": stripQuotes(hingeRight?.valueId),
          "Hinge Right Price": hingeRight ? parseFloat(hingeRight.price).toFixed(2) : "",
          selected_finishEnd: stripQuotes(product.selected_finishEnd),
          selected_finishedend: stripQuotes(product.selected_finishedend),
          finishEnd_options: stripQuotes(product.finishEnd_options),
          finishedend: stripQuotes(product.finishedend),
          total_price: product.total_price ?? "",
          unit_price: product.unit_price ?? "",
          finalPrice: product.finalPrice ?? "",
          main_regular_price: product.main_regular_price ?? "",
          regular_price: product.regular_price ?? "",
          has_special_price: product.has_special_price ?? "",
          show_modification: product.show_modification ?? "",
          selected_assembly_toggle: product.selected_assembly_toggle ?? "",
          cat_option_header: stripQuotes(
            Array.isArray(product.cat_option_header)
              ? product.cat_option_header.join(",")
              : product.cat_option_header
          )
        });
      }
      if (STOP) break;
      page++;
      await delay(300);
    }
    if (STOP) break;
  }

  // — Capture your pasted script source exactly —
  const scriptSource = scrapeAndExport
    .toString()
    .replace(/\s+/g, ' ')
    .replace(/"/g, '""');

  // Build & download merged CSV
  const rows = [headers.join(",")];
  allProducts.forEach((prod, idx) => {
    const row = headers.map(h => {
      if (h === "scrape_script_data") {
        return idx === 0
          ? `"${scriptSource}"`
          : '""';
      }
      const val = prod[h] ?? "";
      return `"${String(val).replace(/"/g, '""')}"`;
    });
    rows.push(row.join(","));
  });

  const csv = rows.join("\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  // — Original filename logic reinserted —
  const prefixes = new Set();
  allProducts.forEach(p => {
    const dash = p.sku.indexOf("-");
    const pf = dash === 2 || dash === 3 ? p.sku.slice(0, dash) : "INSRT";
    prefixes.add(pf.toUpperCase() !== "PEG" ? pf : "INSRT");
  });
  const arr = Array.from(prefixes);
  if (arr.includes("INSRT")) {
    arr.splice(arr.indexOf("INSRT"), 1);
    arr.push("INSRT");
  }
  const prefixStr = arr.join(",");
  const now = new Date();
  const dateStr = `${now.getMonth() + 1}.${now.getDate()}.${String(now.getFullYear()).slice(-2)}`;
  const h = now.getHours(), m = String(now.getMinutes()).padStart(2, "0");
  const ampm = h >= 12 ? "p" : "a";
  const timeStr = `${h % 12 || 12}${m}${ampm}`;
  const filename = `Products_${prefixStr}(${allProducts.length})_${dateStr}_${timeStr}.csv`;

  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  console.log("✅ CSV downloaded:", filename);
}

// Kick it off
scrapeAndExport();
"""
generate_quote.py
-----------------
Reads all cabinet CSVs from Reference Product Data, then creates a fresh
empty KCS Quote Editor HTML file with all real product data baked in.

Usage:
    python generate_quote.py

Output:
    New KCS Quote - YYYY-MM-DD.html   (same folder as this script)
"""

import csv
import json
import os
import re
from datetime import datetime

# ── Paths ─────────────────────────────────────────────────────────────────────
BASE_DIR      = os.path.dirname(os.path.abspath(__file__))
REF_DIR       = os.path.join(BASE_DIR, "Reference Product Data")
TEMPLATE_FILE = os.path.join(BASE_DIR, "kcs-quote-template.html")
SPEC_CSV      = os.path.join(REF_DIR, "AI FULL SPEC SHEET REFERENCE DATA.csv")
MODS_CSV      = os.path.join(REF_DIR, "Cabinet Modifications.csv")
INSERTS_CSV   = os.path.join(REF_DIR, "Cabinet Insert Accessories.csv")


# ── Helpers ───────────────────────────────────────────────────────────────────
def parse_dim(val):
    """'34.5in' -> 34.5,  '36.0in' -> 36"""
    s = val.strip().replace("in", "").replace("½", ".5").strip()
    try:
        f = float(s)
        return int(f) if f == int(f) else f
    except ValueError:
        return 0


def js_str(s):
    """Escape a string for a JS double-quoted literal."""
    return s.replace("\\", "\\\\").replace('"', '\\"')


def price_val(s):
    """'78.4' -> 78.4,  '245' -> 245"""
    try:
        f = float(s.strip())
        return int(f) if f == int(f) else f
    except ValueError:
        return 0


# ── Step 1: Image URL map from spec sheet ────────────────────────────────────
# Base SKU (e.g. "BB-DB24-2") -> image URL
img_map = {}
with open(SPEC_CSV, newline="", encoding="utf-8-sig") as f:
    reader = csv.DictReader(f)
    for row in reader:
        base_sku = row["Base SKU"].strip()
        img_url  = row["Image Product Image URL"].strip()
        if base_sku and img_url:
            img_map[base_sku] = img_url


def get_img(sku):
    """Look up image URL by SKU, stripping -RTA / -ASM suffix if needed."""
    if sku in img_map:
        return img_map[sku]
    base = re.sub(r"-(RTA|ASM|ASSEMBLED)$", "", sku.strip(), flags=re.IGNORECASE)
    return img_map.get(base, "")


# ── Step 2: Cabinet product CSVs → KCS_DATA ──────────────────────────────────
CAB_PATTERN = re.compile(
    r"^(Belmont|Seaport)\s+(.+?)\s+(RTA|ASSEMBLED)\.csv$", re.IGNORECASE
)

KCS_LINES    = []
KCS_FINISHES = {}   # { "Belmont": ["White", "Blue", ...], ... }
KCS_TYPES    = []
KCS_DATA     = {}   # { "Seaport|White|RTA": [ {...}, ... ], ... }

for fname in sorted(os.listdir(REF_DIR)):
    m = CAB_PATTERN.match(fname)
    if not m:
        continue

    line   = m.group(1).title()
    finish = m.group(2).replace("-", " ").title()
    ctype  = m.group(3).upper()

    if line not in KCS_LINES:
        KCS_LINES.append(line)
    if ctype not in KCS_TYPES:
        KCS_TYPES.append(ctype)
    KCS_FINISHES.setdefault(line, [])
    if finish not in KCS_FINISHES[line]:
        KCS_FINISHES[line].append(finish)

    key = f"{line}|{finish}|{ctype}"
    KCS_DATA[key] = []

    fpath = os.path.join(REF_DIR, fname)
    with open(fpath, newline="", encoding="utf-8-sig") as f:
        reader = csv.DictReader(f)
        for row in reader:
            sku  = row["SKU"].strip()
            name = row["Cabinet Name"].strip()
            cat  = row["Cabinet Category"].strip()
            KCS_DATA[key].append({
                "sku":      sku,
                "name":     name,
                "category": cat,
                "price":    price_val(row["Price"]),
                "w":        parse_dim(row["Width"]),
                "h":        parse_dim(row["Height"]),
                "d":        parse_dim(row["Depth"]),
                "img":      get_img(sku),
            })

# Sort for display consistency
KCS_LINES.sort()
KCS_TYPES.sort()
for line in KCS_FINISHES:
    KCS_FINISHES[line].sort()


# ── Step 3: Modifications CSV → KCS_MODS ─────────────────────────────────────
KCS_MODS = []
with open(MODS_CSV, newline="", encoding="utf-8-sig") as f:
    reader = csv.DictReader(f)
    for row in reader:
        KCS_MODS.append({
            "sku":      row["SKU"].strip(),
            "name":     row["Modification Name"].strip(),
            "category": row["Cabinet Category"].strip(),
            "price":    price_val(row["Net Price"]),
        })


# ── Step 4: Insert Accessories CSV → KCS_INSERTS ─────────────────────────────
KCS_INSERTS = []
with open(INSERTS_CSV, newline="", encoding="utf-8-sig") as f:
    reader = csv.DictReader(f)
    for row in reader:
        sku = row["SKU"].strip()
        KCS_INSERTS.append({
            "sku":      sku,
            "name":     row["Cabinet Insert Name"].strip(),
            "category": row["Cabinet Category"].strip(),
            "price":    price_val(row["Price"]),
            "img":      get_img(sku),
        })


# ── Step 5: Render JS data block ──────────────────────────────────────────────
def render_product(item, indent):
    sp = " " * indent
    fields = []
    for k, v in item.items():
        if isinstance(v, str):
            fields.append(f'{k}: "{js_str(v)}"')
        else:
            fields.append(f"{k}: {v}")
    inner = f",\n{sp}  ".join(fields)
    return f"{{\n{sp}  {inner},\n{sp}}}"


lines_js    = f"const KCS_LINES = {json.dumps(KCS_LINES)};"
finishes_js = "const KCS_FINISHES = " + json.dumps(KCS_FINISHES, indent=2) + ";"
types_js    = f"const KCS_TYPES = {json.dumps(KCS_TYPES)};"

# KCS_DATA
data_parts = ["const KCS_DATA = {"]
for key in sorted(KCS_DATA.keys()):
    items = KCS_DATA[key]
    data_parts.append(f'  "{key}": [')
    for item in items:
        data_parts.append("    " + render_product(item, 4) + ",")
    data_parts.append("  ],")
data_parts.append("};")
data_js = "\n".join(data_parts)

# KCS_MODS
mods_parts = ["const KCS_MODS = ["]
for item in KCS_MODS:
    mods_parts.append("  " + render_product(item, 2) + ",")
mods_parts.append("];")
mods_js = "\n".join(mods_parts)

# KCS_INSERTS
ins_parts = ["const KCS_INSERTS = ["]
for item in KCS_INSERTS:
    ins_parts.append("  " + render_product(item, 2) + ",")
ins_parts.append("];")
inserts_js = "\n".join(ins_parts)

DATA_BLOCK = "\n".join([lines_js, finishes_js, types_js, data_js, mods_js, inserts_js])


# ── Step 6: Load template, swap data block, clear init block ─────────────────
with open(TEMPLATE_FILE, "r", encoding="utf-8") as f:
    html = f.read()

# --- Replace the first <script> block (the data block) ---
# It sits right after the TEST DATA comment
TEST_DATA_COMMENT_START = "<!--"
TEST_DATA_COMMENT_TEXT  = "TEST DATA"

# Find the comment that contains "TEST DATA"
search_from = 0
while True:
    idx = html.find(TEST_DATA_COMMENT_START, search_from)
    if idx == -1:
        raise RuntimeError("Could not find TEST DATA comment in template")
    comment_end = html.find("-->", idx)
    if comment_end == -1:
        raise RuntimeError("Unterminated comment in template")
    comment_text = html[idx:comment_end + 3]
    if TEST_DATA_COMMENT_TEXT in comment_text:
        break
    search_from = comment_end + 3

# The <script> block starts right after this comment
script_open = html.find("<script>", comment_end)
if script_open == -1:
    raise RuntimeError("Could not find <script> after TEST DATA comment")
script_close = html.find("</script>", script_open) + len("</script>")

new_script_block = f"<script>\n      {DATA_BLOCK.replace(chr(10), chr(10) + '      ')}\n    </script>"
html = html[:idx] + new_script_block + html[script_close:]

# --- Replace the init block with empty state ---
INIT_START = "/* KCS_QUOTE_INIT_START */"
INIT_END   = "/* KCS_QUOTE_INIT_END */"

idx_s = html.rfind(INIT_START)
idx_e = html.rfind(INIT_END)
if idx_s == -1 or idx_e == -1:
    raise RuntimeError("Could not find KCS_QUOTE_INIT_START/END markers in template")
idx_e += len(INIT_END)

empty_init = (
    f"{INIT_START}\n"
    f"      document.getElementById('clientName').value = '';\n"
    f"      runs = [];\n"
    f"      renderAll();\n"
    f"      {INIT_END}"
)
html = html[:idx_s] + empty_init + html[idx_e:]


# ── Step 7: Write output ──────────────────────────────────────────────────────
date_str = datetime.now().strftime("%Y-%m-%d")
out_path = os.path.join(BASE_DIR, f"New KCS Quote - {date_str}.html")

with open(out_path, "w", encoding="utf-8") as f:
    f.write(html)

total_products = sum(len(v) for v in KCS_DATA.values())
print(f"\n✅  Created: {out_path}")
print(f"    Lines:    {', '.join(KCS_LINES)}")
print(f"    Products: {total_products} across {len(KCS_DATA)} line/finish/type combos")
print(f"    Mods:     {len(KCS_MODS)}")
print(f"    Inserts:  {len(KCS_INSERTS)}")
print(f"    Images:   {sum(1 for v in KCS_DATA.values() for item in v if item['img'])} products with images")

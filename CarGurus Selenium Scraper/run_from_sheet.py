import gspread
import subprocess
from datetime import datetime
from oauth2client.service_account import ServiceAccountCredentials

# === CONFIG ===
SHEET_ID     = "1xObRuNidGZgvENb2LOVuNP0Rg6x19QAFYwpNWnETmWU"
PRICE_SHEET  = "Live Prices"
LOG_SHEET    = "Price Log"
INPUT_COL    = "A"
OUTPUT_COL   = "B"
START_ROW    = 2

# === AUTH ===
scope = [
    "https://spreadsheets.google.com/feeds",
    "https://www.googleapis.com/auth/drive"
]
creds = ServiceAccountCredentials.from_json_keyfile_name("creds.json", scope)
client = gspread.authorize(creds)
price_sheet = client.open_by_key(SHEET_ID).worksheet(PRICE_SHEET)
log_sheet   = client.open_by_key(SHEET_ID).worksheet(LOG_SHEET)

# === LOOP THROUGH PRICE SHEET ===
row = START_ROW
while True:
    input_cell = f"{INPUT_COL}{row}"
    output_cell = f"{OUTPUT_COL}{row}"
    url = price_sheet.acell(input_cell).value

    if not url or not url.strip():
        print(f"🛑 {input_cell} empty—stopping.")
        break

    url = url.strip()
    print(f"▶️  Row {row}: {url}")

    try:
        proc = subprocess.run(
            ["python3", "cargurus_scraper.py", url],
            capture_output=True, text=True, check=True
        )
        lines = proc.stdout.strip().splitlines()
        raw_price = next((l for l in lines if l.startswith("$")), None)

        if raw_price:
            price = int(raw_price.replace("$", "").replace(",", ""))
            print(f"✅ Row {row} → {price}")
            price_sheet.update(values=[[price]], range_name=output_cell)

            # Append to Price Log with formatted timestamp
            log_url_col = log_sheet.col_values(1)
            next_log_row = len(log_url_col) + 1
            timestamp = datetime.now().strftime("%Y-%m-%d %H:%M")
            log_sheet.update_cell(next_log_row, 1, url)
            log_sheet.update_cell(next_log_row, 2, price)
            log_sheet.update_cell(next_log_row, 3, timestamp)

        else:
            print(f"❌ Row {row}: no price found.")
            price_sheet.update(values=[["ERROR: No price"]], range_name=output_cell)

    except subprocess.CalledProcessError as e:
        err = (e.stdout or e.stderr).strip()
        print(f"❌ Row {row} error: {err}")
        price_sheet.update(values=[[f"ERROR: {err}"]], range_name=output_cell)

    row += 1
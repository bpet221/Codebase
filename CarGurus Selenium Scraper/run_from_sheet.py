import gspread
import subprocess
from oauth2client.service_account import ServiceAccountCredentials

# === CONFIG ===
SHEET_ID = "1xObRuNidGZgvENb2LOVuNP0Rg6x19QAFYwpNWnETmWU"
SHEET_NAME = "Data"
CELL_INPUT = "M2"
CELL_OUTPUT = "L2"

# === AUTH ===
scope = ["https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/drive"]
creds = ServiceAccountCredentials.from_json_keyfile_name("creds.json", scope)
client = gspread.authorize(creds)

# === FETCH URL ===
sheet = client.open_by_key(SHEET_ID).worksheet(SHEET_NAME)
url = sheet.acell(CELL_INPUT).value.strip()
print(f"🔗 URL from sheet: {url}")

# === Run Selenium script ===
try:
    result = subprocess.run(
        ["python3", "cargurus_scraper.py", url],
        capture_output=True,
        text=True,
        check=True
    )

    # Extract price
    lines = result.stdout.strip().splitlines()
    raw_price = next((line for line in lines if line.strip().startswith("$")), None)

    if raw_price:
        numeric_price = int(raw_price.replace("$", "").replace(",", ""))
        print("✅ Final price (numeric):", numeric_price)
        sheet.update(CELL_OUTPUT, [[numeric_price]])
    else:
        print("❌ Price not found in output.")
        sheet.update(CELL_OUTPUT, [["ERROR: Price not found"]])

except subprocess.CalledProcessError as e:
    print("❌ Scraper error:", e.stdout or e.stderr)
    sheet.update(CELL_OUTPUT, [[f"ERROR: {e.stdout or e.stderr}"]])
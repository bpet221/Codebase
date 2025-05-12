import sys
import time
import tempfile
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options

# === Read URL ===
if len(sys.argv) < 2:
    print("❌ No URL passed.")
    sys.exit(1)
url = sys.argv[1]

# === Chrome Setup ===
options = Options()
options.add_argument("--disable-blink-features=AutomationControlled")
options.add_experimental_option("excludeSwitches", ["enable-automation"])
options.add_experimental_option("useAutomationExtension", False)
options.add_argument("--window-size=1920,1080")
options.add_argument("--no-sandbox")
options.add_argument("--disable-dev-shm-usage")
options.add_argument("user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36")
options.add_argument(f"--user-data-dir={tempfile.mkdtemp()}")

driver = webdriver.Chrome(options=options)
driver.execute_cdp_cmd("Page.addScriptToEvaluateOnNewDocument", {
    "source": """
        Object.defineProperty(navigator, 'webdriver', { get: () => undefined })
    """
})

# === Scrape Page ===
try:
    print(f"🟢 Starting scrape for URL: {url}")
    driver.get(url)
    time.sleep(6)

    tiles = driver.find_elements(By.CLASS_NAME, "_listing_ho70j_12")
    if len(tiles) < 4:
        print("❌ Less than 4 listings found.")
        sys.exit(1)

    price = tiles[3].find_element(By.CSS_SELECTOR, '[data-testid="srp-tile-price"]').text.strip()
    print(price)

except Exception as e:
    print("❌ Error during scrape:", e)
    sys.exit(1)

finally:
    driver.quit()
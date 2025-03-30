from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
from datetime import datetime, timedelta
from io import StringIO
import time
import imaplib
import email
import re
import json
import requests
import os
import sys


# ℹ️ NOTES ON THIS CODE: This script loops through the gohighlevel Agent Reporting Tab and pulls the sales activity numbers for each rep individually for Yesterday. It then sends the data to a webhook in MAKE that updates a google sheet. It runs every hour 1030am-700pm via Chron commands on Blakes local computer. (This YESTEDAY version makes is a backup for days where the previous day did not update if blake was not on his computer)

# MAKE SCENARIO: 'https://us1.make.com/90032/scenarios/2210097/edit'
# GOOGLE SHEET DATA: 'https://docs.google.com/spreadsheets/d/1YVqDXmTGWRA25P9aScdRhN5CPchUcf2TDCZsIEoamN4/edit#gid=32717202'

# ✅/🚫 DYNAMIC VARIABLE: Set this variable to FALSE if you want to see the Chrome window, or TRUE for headless mode
HEADLESS_MODE = True

chrome_options = Options()
if HEADLESS_MODE:
    chrome_options.add_argument("--headless")
    
# Include other browser options as needed
chrome_options.add_argument("--no-sandbox")
chrome_options.add_argument("--disable-dev-shm-usage")

# Assuming chromedriver is in your PATH, or specify the path to chromedriver
driver = webdriver.Chrome(options=chrome_options)

def select_dropdown_option(option_text):
    try:
        dropdown_menu = WebDriverWait(driver, 20).until(
            EC.element_to_be_clickable((By.CSS_SELECTOR, ".btn.dropdown-toggle.btn-secondary"))
        )
        dropdown_menu.click()
        option = WebDriverWait(driver, 20).until(
            EC.element_to_be_clickable((By.XPATH, f"//a[contains(text(), '{option_text}')]"))
        )
        option.click()
    except TimeoutException:
        print(f"{option_text} option not found or not clickable.")
    except Exception as e:
        print(f"Error selecting {option_text}: {e}")

def get_security_code_and_delete(email_user, email_pass):
    mail = imaplib.IMAP4_SSL('imap.gmail.com')
    try:
        mail.login(email_user, email_pass)
        mail.select('inbox')
        status, messages = mail.search(None, '(UNSEEN SUBJECT "Login security code")')
        if status == 'OK':
            for num in messages[0].split()[-1:]:
                typ, data = mail.fetch(num, '(RFC822)')
                for response_part in data:
                    if isinstance(response_part, tuple):
                        msg = email.message_from_bytes(response_part[1])
                        email_body = msg.get_payload(decode=True).decode()
                        match = re.search(r'Your login security code:\s*(\d{6})', email_body)
                        if match:
                            # Mark the email for deletion
                            mail.store(num, '+FLAGS', '\\Deleted')
                            mail.expunge()  # Purge the marked email
                            return match.group(1)
        return None
    finally:
        mail.logout()

EMAIL = 'blakepetipas223@gmail.com'
PASSWORD = 'TZK3etr_qcm4pra7prm3/'
APP_PASSWORD = 'rhxy wlvl cgzc kfro'

# Backup the original stdout to restore later
original_stdout = sys.stdout
# Redirect stdout to capture print statements
sys.stdout = StringIO()

# Begin main Selenium script operations
driver.get("https://app.gohighlevel.com/")

# Log into the website
time.sleep(10)
driver.find_element(By.ID, 'email').send_keys(EMAIL)
driver.find_element(By.ID, 'password').send_keys(PASSWORD)
driver.find_element(By.CSS_SELECTOR, 'button.hl-btn').click()

# Trigger the "Send Security Code" button
time.sleep(5)
send_code_button = driver.find_element(By.CSS_SELECTOR, 'button.hl-btn.justify-center')
send_code_button.click()

# Wait for 30 seconds for the email to arrive
print("Waiting 30 seconds for the email to arrive...")
time.sleep(30)

# Retrieve the 2FA code from the email
security_code = get_security_code_and_delete(EMAIL, APP_PASSWORD)


# Enter the 2FA code into the webpage
if security_code and len(security_code) == 6:
    code_inputs = driver.find_elements(By.CSS_SELECTOR, "input.otp-input")
    if len(code_inputs) == 6:
        for i in range(6):
            code_inputs[i].send_keys(security_code[i])
            
# Find the "Confirm Code" button and click it
confirm_button = driver.find_element(By.CSS_SELECTOR, 'button.hl-btn.justify-center.w-full')
confirm_button.click()

# Wait for navigation after login
time.sleep(10)  # Adjust based on actual navigation time

# Navigate to the Reporting section
reporting_button = WebDriverWait(driver, 30).until(
    EC.element_to_be_clickable((By.ID, "sb_reporting"))
)
reporting_button.click()

# Wait for the Reporting page to load
time.sleep(5)  # Adjust based on actual loading time

# Navigate to the Agent Reporting section
agent_reporting_button = WebDriverWait(driver, 20).until(
    EC.element_to_be_clickable((By.ID, "tb_agent-reporting"))
)
agent_reporting_button.click()

# Wait for the Agent Reporting page to load
time.sleep(5)  # Adjust based on actual loading time



# 🗓️ DATE RANGE - Step 1: Open the date picker
datepicker_trigger = WebDriverWait(driver, 60).until(
    EC.element_to_be_clickable((By.CSS_SELECTOR, "div.mb-0 input"))
)
datepicker_trigger.click()

# 🗓️ DATE RANGE - Step 2: Click the "previous month" button 7 times to get to September 2023
for _ in range(1):
    prev_month_button = WebDriverWait(driver, 60).until(
        EC.element_to_be_clickable((By.CSS_SELECTOR, "button.datepicker-button.datepicker-prev"))
    )
    prev_month_button.click()
    time.sleep(5)  # Small pause to ensure the calendar has updated to the next month

    
# Determine if today is the first of the month
today = datetime.now()
is_first_of_month = today.day == 1

if is_first_of_month:
    # 🗓️ DATE RANGE - Step 3: Select the last day of the previous month
    try:
        # Calculate the last day of the previous month
        first_day_of_current_month = datetime(today.year, today.month, 1)
        last_day_of_previous_month = first_day_of_current_month - timedelta(days=1)
        last_day_str = last_day_of_previous_month.strftime('%d').lstrip('0')  # Remove leading zeros
        
        # Find all enabled 'datepicker-day' buttons
        day_buttons = WebDriverWait(driver, 60).until(
            EC.presence_of_all_elements_located((By.XPATH, "//button[contains(@class, 'datepicker-day') and not(contains(@class, 'disabled'))]"))
        )
        # Filter out and click the button with the day number for the last day of the previous month
        for button in day_buttons:
            day_number = button.find_element(By.CSS_SELECTOR, "span.datepicker-day-text").text.strip()
            if day_number == last_day_str:
                button.click()
                break
    except TimeoutException:
        print("Day button not found or not clickable.")
else:
    
    next_month_button = WebDriverWait(driver, 60).until(
        EC.element_to_be_clickable((By.CSS_SELECTOR, "button.datepicker-button.datepicker-next"))
    )
    next_month_button.click()
    time.sleep(5)  # Small pause to ensure the calendar has updated to the previous month
    
    # 🗓️ DATE RANGE - Step 3: Select Yesterday's date number
    try:
        # Calculate yesterday's date number
        yesterday_date = datetime.now() - timedelta(days=1)
        yesterday_str = yesterday_date.strftime('%d').lstrip('0')  # Remove leading zeros
        
        # Find all enabled 'datepicker-day' buttons
        day_buttons = WebDriverWait(driver, 60).until(
            EC.presence_of_all_elements_located((By.XPATH, "//button[contains(@class, 'datepicker-day') and not(contains(@class, 'disabled'))]"))
        )
        # Filter out and click the button with the day number for yesterday's date
        for button in day_buttons:
            day_number = button.find_element(By.CSS_SELECTOR, "span.datepicker-day-text").text.strip()
            if day_number == yesterday_str:
                button.click()
                break
    except TimeoutException:
        print("Day button not found or not clickable.")
    
    
    
    
# 🗓️ DATE RANGE - Step 4: Confirm the date selection
confirm_button = WebDriverWait(driver, 60).until(
    EC.element_to_be_clickable((By.CSS_SELECTOR, "button.datepicker-button.validate"))
)
confirm_button.click()    
    
    
# 🔁 LOOP THOUGH EACH SALES REP NAME STARTS BELOW THIS LINE 
    
# ✍️ 1. ADD SALES REPS NAME here you want in report report Loops.
for SALES_REP_NAME in ['Blake Petipas', 'Crystal Jane', 'Ernie Aiguier']:
    
    # Backup the original stdout to restore later
    original_stdout = sys.stdout
    # Redirect stdout to capture print statements
    sys.stdout = StringIO()
    
    print(f"Processing {SALES_REP_NAME}...")  # Diagnostic print statement
    
    try:
        # 1.2 Open the dropdown menu to reveal the sales rep names
        dropdown_toggle = WebDriverWait(driver, 20).until(
            EC.element_to_be_clickable((By.CSS_SELECTOR, "button[data-toggle='dropdown']"))
        )
        dropdown_toggle.click()
    except TimeoutException:
        print("Dropdown button not found or not clickable.")
        
    # 1.3 Click "Ok so t All" button
    try:
        deselect_all_button = WebDriverWait(driver, 60).until(
            EC.element_to_be_clickable((By.CSS_SELECTOR, "button.actions-btn.bs-deselect-all.btn.btn-light"))
        )
        driver.execute_script("arguments[0].click();", deselect_all_button)
    except TimeoutException:
        print("Deselect All button not found or not clickable.")
        
        
    # 1.4 Select Sales Rep Name from the dropdown list
    try:
        sales_rep_name_option = WebDriverWait(driver, 60).until(
            EC.element_to_be_clickable((By.XPATH, f"//span[contains(text(), '{SALES_REP_NAME}')]"))
        )
        driver.execute_script("arguments[0].click();", sales_rep_name_option)
    except TimeoutException:
        print(f"sales_rep_name_option '{SALES_REP_NAME}' not found or not clickable.")
        
        
    # 1.5 Click Esc then "Fetch" button
        
    driver.find_element(By.TAG_NAME, 'body').send_keys(Keys.ESCAPE)
    time.sleep(5)  # Adjust timing as necessary
    
    try:
        fetch_button = WebDriverWait(driver, 90).until(
            EC.element_to_be_clickable((By.CSS_SELECTOR, "button.btn.btn-blue"))
        )
        driver.execute_script("arguments[0].click();", fetch_button)
    except TimeoutException:
        print("Fetch button not found or not clickable.")
        
    time.sleep(10)  # Adjust based on your page's loading time
    
    # 1.6 Select "Sales Pipeline" from the CONVERIONS table dropdown list        
    select_dropdown_option('Sales Pipeline')
    time.sleep(10)  # Keep the sleep if necessary for the table updateron
    
    # 1.7 Initialize dictionaries for each table's data instead of lists
    opportunities = {}
    conversions = {}
    
    
    # 1.8 Scrape OPPORTUNITIES table data
    opportunities_table = driver.find_element(By.CSS_SELECTOR, "table.table")
    for row in opportunities_table.find_elements(By.CSS_SELECTOR, "tbody tr"):
        key = row.find_element(By.CSS_SELECTOR, "td:nth-of-type(1)").text.replace("”", "\"")  # Ensure correct quotation mark
        value = row.find_element(By.CSS_SELECTOR, "td:nth-of-type(2)").text
        value = int(value) if value.isdigit() else 0  # Convert to int if digit, else 0
        opportunities[key] = value
        
        
        
        
    # 1.9 Wait for the conversion table div to be present on the page, Once the div is found, proceed to find the table within this div 
    conversion_table_div = WebDriverWait(driver, 20).until(
        EC.presence_of_element_located((By.CSS_SELECTOR, "div.card-body.mt-2"))
    )
    
    # 1.10 Once the div is found, proceed to find the table within this div
    conversion_table = conversion_table_div.find_element(By.TAG_NAME, "table")
    
    # 1.11 Initialize the Sales Pipeline subtable & Wait for the 'Sales Pipeline' version to be visible.
    sales_pipeline = {}
    
    try:
        conversions_table = WebDriverWait(driver, 80).until(
            EC.visibility_of_element_located((By.CSS_SELECTOR, "div.card-body.mt-2 > table.table"))
        )
    except TimeoutException:
        print("Failed to find the 'Sales Pipeline' conversions table within the timeout period.")
        
    # 1.12 Scrape the Conversions table with it set to ‘Sales Pipeline’
    for row in conversion_table.find_elements(By.CSS_SELECTOR, "tbody tr"):
        status = row.find_element(By.CSS_SELECTOR, "td:nth-of-type(1)").text.replace("”", "\"")
        count = row.find_element(By.CSS_SELECTOR, "td:nth-of-type(2)").text
        count = int(count) if count.isdigit() else 0
        sales_pipeline[status] = count
        
    # 1.13 Add the Sales Pipeline subtable to the CONVERSIONS dictionary
    conversions["Sales Pipeline"] = sales_pipeline
    
    # 1.14 Change Conversions table dropdown to ‘Won Pipeline’ then Pause to allow Data to load.
    select_dropdown_option('Won Pipeline')
    time.sleep(10)  # Keep the sleep if necessary for the table update
    
    
    # 1.15 Wait for the "Conversions" table to be visible after changing the dropdown to "Won Pipeline"
    try:
        conversions_table = WebDriverWait(driver, 80).until(
            EC.visibility_of_element_located((By.CSS_SELECTOR, "div.card-body.mt-2 > table.table"))
        )
    except TimeoutException:
        print("Failed to find the 'Won Pipeline' conversions table within the timeout period.")
        
    # 1.16 Scraping CONVERSIONS table data after changing dropdown to 'Won Pipeline'
    conversions_won_pipeline = {}
    for row in conversions_table.find_elements(By.CSS_SELECTOR, "tbody tr"):
        status = row.find_element(By.CSS_SELECTOR, "td:nth-of-type(1)").text.replace("”", "\"")
        count_text = row.find_element(By.CSS_SELECTOR, "td:nth-of-type(2)").text.strip()
        count = int(count_text) if count_text.isdigit() else 0
        conversions_won_pipeline[status] = count
            
        
        
        
        
    # 1.17 Add the Won Pipeline subtable to the CONVERSIONS dictionary
    conversions["Won Pipeline"] = conversions_won_pipeline
    
    # 1.18 Scrape SMS table data
    sms_data = {}
    sms_table = driver.find_element(By.CSS_SELECTOR, "table[data-v-c058bc62]")  # Adjust selector if necessary
    for row in sms_table.find_elements(By.CSS_SELECTOR, "tbody tr"):
        key = row.find_element(By.CSS_SELECTOR, "td:nth-of-type(1)").text
        value = row.find_element(By.CSS_SELECTOR, "td:nth-of-type(2)").text
        sms_data[key] = int(value) if value.isdigit() else 0
        
    # 1.19 Scrape EMAIL table data
    email_data = {}
    email_table = driver.find_element(By.CSS_SELECTOR, "table[data-v-09b6a334]")  # Adjust selector if necessary
    for row in email_table.find_elements(By.CSS_SELECTOR, "tbody tr"):
        key = row.find_element(By.CSS_SELECTOR, "td:nth-of-type(1)").text
        value = row.find_element(By.CSS_SELECTOR, "td:nth-of-type(2)").text
        email_data[key] = int(value) if value.isdigit() else 0
        
    # 1.20 Extract CALL METRICS data
    # Function to convert duration string to HH:MM:SS format
    def format_duration(duration_str):
        # Split duration string into components
        parts = re.findall(r'\d+', duration_str)
        # Pad the parts list to ensure it has 3 elements (H:M:S)
        parts = [0] * (3 - len(parts)) + parts
        # Convert parts to integer and format each as two digits
        return ":".join(f"{int(part):02d}" for part in parts)
    
    # Updated helper function to extract call details
    def extract_call_details(table_element):
        details = {}
        rows = table_element.find_elements(By.CSS_SELECTOR, "tbody tr")
        for row in rows:
            category = row.find_element(By.CSS_SELECTOR, "td:first-child").text
            value = row.find_element(By.CSS_SELECTOR, "td:nth-child(2)").text
            # Check if value is a duration format and format it
            if 'h' in value or 'm' in value or 's' in value:
                value = format_duration(value)
            else:
                value = int(value) if value.isdigit() else value
            details[category] = value
        return details
    
    # Existing script parts remain unchanged
    call_metrics_data = {
        "Total Calls": 0,
        "Total Call Time": "",
        "Details": {}
    }
    
    # Extract total calls and total call time from CALL METRICS
    metrics_div = driver.find_element(By.CSS_SELECTOR, "div[data-v-2ee24f1c]")
    total_calls, total_call_time = metrics_div.find_elements(By.CSS_SELECTOR, "span.h5.px-3")
    call_metrics_data["Total Calls"] = int(total_calls.text)
    # Update total call time to new format
    call_metrics_data["Total Call Time"] = format_duration(total_call_time.text)
    
    # Loop through each call metric category to fill in details
    for category_div in metrics_div.find_elements(By.CSS_SELECTOR, "div[class*='col-lg-3']"):
        category_name = category_div.find_element(By.CSS_SELECTOR, "h5").text
        table_element = category_div.find_element(By.CSS_SELECTOR, "table")
        call_metrics_data["Details"][category_name] = extract_call_details(table_element)
        
    # Loop through each call metric category to fill in details
    for category_div in metrics_div.find_elements(By.CSS_SELECTOR, "div[class*='col-lg-3']"):
        category_name = category_div.find_element(By.CSS_SELECTOR, "h5").text
        table_element = category_div.find_element(By.CSS_SELECTOR, "table")
        call_metrics_data["Details"][category_name] = extract_call_details(table_element)
        
    # 1.21 Scrape EFFICIENCY table data
    # Function to convert complex duration formats to HH:MM:SS
    def convert_duration(duration_str):
        # Improved zero-duration check
        if not duration_str or duration_str.strip() in ['0', '0s']:
            return "00:00:00"
        multipliers = {
            'W': 7 * 24 * 60 * 60,  # Weeks to seconds
            'D': 24 * 60 * 60,      # Days to seconds
            'M': 30 * 24 * 60 * 60, # Months to seconds (approximating 1 month as 30 days)
            'h': 60 * 60,           # Hours to seconds
            'm': 60,                # Minutes to seconds
            's': 1                  # Seconds
        }
        parts = re.findall(r'(\d+)([WDMhms])', duration_str)
        total_seconds = sum(int(value) * multipliers[unit] for value, unit in parts)
        hours = total_seconds // 3600
        minutes = (total_seconds % 3600) // 60
        seconds = total_seconds % 60
        return f"{hours:02d}:{minutes:02d}:{seconds:02d}"
    
    # Updated script to use the new conversion function
    efficiency_data = {}
    efficiency_table = driver.find_element(By.CSS_SELECTOR, "table[data-v-6d399fd0]")  # Adjust selector if necessary
    for row in efficiency_table.find_elements(By.CSS_SELECTOR, "tbody tr"):
        key = row.find_element(By.CSS_SELECTOR, "td:nth-of-type(1)").text
        value = row.find_element(By.CSS_SELECTOR, "td:nth-of-type(2)").text
        # Specifically handle the "Average Sales Duration" with a robust check for duration formats
        if "Average Sales Duration" in key and any(unit in value for unit in "WDMhms"):
            efficiency_data[key] = convert_duration(value)
        elif "$" in value or "/" in value:
            # Handle currency values or rates directly
            efficiency_data[key] = value
        else:
            # For all other values, check if conversion is needed or not
            efficiency_data[key] = convert_duration(value) if any(unit in value for unit in "WDMhm") else value            
        
        
        
    # 1.22 Activate and make sure the date picker is visible on the page
    datepicker_input = WebDriverWait(driver, 50).until(
        EC.element_to_be_clickable((By.CSS_SELECTOR, "input[name='start_time']"))
    )
    datepicker_input.click()
    
    # Now wait for the 'header-picker-range' element to be visible
    date_range_element = WebDriverWait(driver, 50).until(
        EC.visibility_of_element_located((By.CSS_SELECTOR, "span.header-picker-range"))
    )
    date_range_text = date_range_element.text  # This will be something like "Apr 7, 2024 - Apr 7, 2024"
    
    # Extract start and end dates from the visible text
    start_date, end_date = date_range_text.split(' - ')
    
    
    # Get the current timestamp and script file name
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    script_file_name = os.path.basename(__file__)
    
    # 1.23 Capture the console outputs
    # 3
    console_outputs = sys.stdout.getvalue()
    # 4 Restore the original stdout
    sys.stdout = original_stdout
    
    # 5 Output captured for verification; remove or comment out in production
    print("Captured console outputs:\n", console_outputs)
    
    # 1.24 Combine all dictionaries into a single JSON object for output, including new variables
    formatted_data = [{
        "Sales Rep": SALES_REP_NAME,
        "OPPORTUNITIES": opportunities,
        "CONVERSIONS": conversions,
        "SMS": sms_data,
        "EMAIL": email_data,
        "CALL METRICS": call_metrics_data,
        "EFFICIENCY": efficiency_data,
        "Timestamp": timestamp,
        "Script File Name": script_file_name,
        "Start Date": start_date,
        "End Date": end_date,
        "Console Outputs": console_outputs
    }]
    
    # Convert to JSON format for sending
    formatted_output = json.dumps(formatted_data, indent=4)
    
    # 1.25 Send the combined data to the MAKE webhook directly
    webhook_url = 'https://hook.us1.make.com/02iisxyanqbk79j29i5l786jg5cfourj'
    headers = {'Content-Type': 'application/json'}
    response = requests.post(webhook_url, data=formatted_output, headers=headers)
    
    if response.status_code == 200:
        print("Data successfully sent to MAKE.")
    else:
        print(f"Failed to send data. Status code: {response.status_code}")
        
    # Ensure any subsequent actions have completed or wait for them to complete
    time.sleep(10)
    
    # 1.26 Loop back to top if there are more sales rep names this needs to run for
    
    
# Quit the driver to close the browser
driver.quit()
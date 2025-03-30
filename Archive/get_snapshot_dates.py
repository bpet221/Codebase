import csv
import requests
from datetime import datetime

# Define the function to get the first snapshot date from Wayback Machine CDX API
def get_first_snapshot(domain):
    url = f"http://web.archive.org/cdx/search/cdx?url={domain}&limit=1&output=json&fl=timestamp"
    try:
        response = requests.get(url).json()
        if len(response) > 1:
            # The first result after the header is the earliest snapshot
            timestamp = response[1][0]
            return datetime.strptime(timestamp, '%Y%m%d%H%M%S').strftime('%Y-%m')
        else:
            print(f"No snapshots found for {domain}")
            return "No Data"
    except Exception as e:
        print(f"Error retrieving data for {domain}: {e}")
        return "Error"

# Load domains from CSV and get first snapshot date
with open('/Users/blakepetipas/Downloads/BulkWaybackMachineKitchenSiteCreatedDateData.csv', mode='r') as infile, \
     open('/Users/blakepetipas/Downloads/output.csv', mode='w') as outfile:
    reader = csv.reader(infile)
    writer = csv.writer(outfile)
    writer.writerow(['Domain', 'First Ranking Date'])
    for row in reader:
        domain = row[0]
        print(f"Processing domain: {domain}")
        first_date = get_first_snapshot(domain)
        writer.writerow([domain, first_date])
        print(f"Result for {domain}: {first_date}")
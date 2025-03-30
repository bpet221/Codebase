#!/bin/bash

# Input JSON file
input_file="$HOME/Downloads/Ink Media leads 2024-05-14 02-00.json"
# Output CSV file
output_file="$HOME/Ink_Media_leads_2024-05-14.csv"

# Check if input file exists
if [ ! -f "$input_file" ]; then
  echo "Input file not found: $input_file"
  exit 1
fi

# Ensure the output directory exists
output_dir=$(dirname "$output_file")
mkdir -p "$output_dir"

# Use jq to parse JSON and extract keys for CSV header
header=$(jq -r 'map(keys) | add | unique | @csv' "$input_file")

# Write the header to the CSV file
echo "$header" > "$output_file"

# Extract each record and convert to CSV format
jq -r '
  .[] | 
  [
    .["created_by_name"],
    .["date_created"],
    .["updated_by"],
    .["custom"]["Available Offers"],
    .["custom"]["BULK DELETE"],
    .["custom"]["Lead ID Duplicate Count"],
    .["custom"]["Lead ID Priority (based on top down loc)"],
    .["custom"]["Lead Owner"],
    .["custom"]["Lead Score"],
    .["custom"]["Lead Status Priority (1-10)"],
    .["custom"]["Market"],
    .["custom"]["Phone Num Duplicate Count (all contacts)"],
    .["custom"]["Phone Num Priority (based on lead status)"],
    .["id"],
    .["status_id"],
    .["description"],
    .["date_updated"],
    .["status_label"],
    .["created_by"],
    .["display_name"],
    .["name"],
    .["url"],
    .["html_url"],
    (try .contacts[] | [
      .["date_created"],
      .["updated_by"],
      .["id"],
      .["organization_id"],
      .emails[0].email,
      .phones[0].phone_formatted,
      .phones[0].country,
      .phones[0].type,
      .phones[0].phone,
      .["display_name"],
      .["first_name"],
      .["last_name"]
    ] | @csv)
  ] | @csv' "$input_file" >> "$output_file"

echo "Data successfully written to $output_file"


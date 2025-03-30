#!/bin/bash

# Input JSON file
input_file="/Users/blakepetipas/Code/Code Archive/CloseInkLeadExportErrorSMsleads.json"
# Output CSV file
output_file="$HOME/detailed_info_with_id.csv"

# Check if input file exists
if [ ! -f "$input_file" ]; then
  echo "Input file not found: $input_file"
  exit 1
fi

# Ensure the output directory exists
output_dir=$(dirname "$output_file")
mkdir -p "$output_dir"

# Extract detailed information and save to CSV
jq -r '
  .[] | 
  {
    id: .id,
    name: .display_name,
    contact_name: (.contacts[]? | .display_name),
    lead_id: .custom["Lead ID Duplicate Count"],
    lead_status: .custom["Lead Status Priority (1-10)"],
    lead_owner: .custom["Lead Owner"],
    lead_score: .custom["Lead Score"],
    phone_formatted: (.contacts[]?.phones[]?.phone_formatted),
    phone_country: (.contacts[]?.phones[]?.country),
    phone_type: (.contacts[]?.phones[]?.type),
    phone: (.contacts[]?.phones[]?.phone)
  } | 
  [.id, .name, .contact_name, .lead_id, .lead_status, .lead_owner, .lead_score, .phone_formatted, .phone_country, .phone_type, .phone] | 
  @csv
' "$input_file" > "$output_file"

echo "Detailed information successfully written to $output_file"


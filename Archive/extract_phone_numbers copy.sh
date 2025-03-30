#!/bin/bash

# Input JSON file
input_file="$HOME/Code/CloseInkLeadExportErrorSMsleads.json"
# Output CSV file
output_file="$HOME/phone_numbers.csv"

# Check if input file exists
if [ ! -f "$input_file" ]; then
  echo "Input file not found: $input_file"
  exit 1
fi

# Ensure the output directory exists
output_dir=$(dirname "$output_file")
mkdir -p "$output_dir"

# Extract phone numbers and save to CSV
jq -r '
  .[] | 
  .contacts[]? |
  .phones[]? | 
  [.phone_formatted, .country, .type, .phone] |
  @csv
' "$input_file" > "$output_file"

echo "Phone numbers successfully written to $output_file"


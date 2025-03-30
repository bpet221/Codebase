#!/bin/zsh

# Function to get display information using system_profiler
get_display_info() {
    system_profiler SPDisplaysDataType | awk '
    /Display Type:/ {
        display_type = $3 " " $4 " " $5;
        getline;
        getline;
        if ($1 == "Resolution:") {
            display_resolution = $2 " " $3 " " $4;
        }
        print display_type, display_resolution;
    }'
}

# Get the display info
display_info=$(get_display_info)

# Output each display info
echo "$display_info" | while read -r line; do
    echo "$line"
done


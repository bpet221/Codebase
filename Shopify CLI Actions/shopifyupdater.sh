#!/bin/bash

# Auto Theme Checker & Updater
# Compares the most recent theme backup with the current working theme

echo "🔍 Shopify Theme Checker & Updater"
echo "=================================="
echo ""

# Get the directory where the actual script is located (resolve symlinks)
if [ -L "${BASH_SOURCE[0]}" ]; then
    # If it's a symlink, resolve it
    SCRIPT_PATH=$(readlink -f "${BASH_SOURCE[0]}")
else
    SCRIPT_PATH="${BASH_SOURCE[0]}"
fi
SCRIPT_DIR="$(cd "$(dirname "$SCRIPT_PATH")" && pwd)"

# Source the theme ID from the centralized config file
source "$SCRIPT_DIR/ACTIVEthemeid.sh"

# Confirm the active theme ID before proceeding
echo "🎯 Current active theme ID: $THEME_ID"
echo -n "Is this the correct working theme ID to analyze? (Y/N): "
read -r theme_confirm

if [[ ! "$theme_confirm" =~ ^[Yy]$ ]]; then
    echo ""
    echo "❌ Theme ID confirmation cancelled."
    echo "💡 To change the theme ID, edit: $SCRIPT_DIR/ACTIVEthemeid.sh"
    echo ""
    exit 1
fi

echo ""
echo "✅ Proceeding with theme ID: $THEME_ID"
echo ""

# Define paths
BACKUP_BASE_DIR="/Users/blakepetipas/Documents/KCS/KCS Shopify Store Themes"
WORKING_THEME_DIR="/Users/blakepetipas/Code Repos/KCS Shopify Theme"

# Check if backup directory exists
if [ ! -d "$BACKUP_BASE_DIR" ]; then
    echo "❌ Error: Backup directory not found: $BACKUP_BASE_DIR"
    exit 1
fi

# Check if working theme directory exists
if [ ! -d "$WORKING_THEME_DIR" ]; then
    echo "❌ Error: Working theme directory not found: $WORKING_THEME_DIR"
    exit 1
fi

echo "📁 Finding most recent backup..."

# Find the most recently created folder in the backup directory
MOST_RECENT_BACKUP=$(find "$BACKUP_BASE_DIR" -mindepth 1 -maxdepth 1 -type d -exec stat -f "%B %N" {} \; | sort -nr | head -1 | cut -d' ' -f2-)

if [ -z "$MOST_RECENT_BACKUP" ]; then
    echo "❌ Error: No backup folders found in $BACKUP_BASE_DIR"
    exit 1
fi

echo "✅ Most recent backup found: $(basename "$MOST_RECENT_BACKUP")"
echo "   Full path: $MOST_RECENT_BACKUP"
echo ""

echo "🔍 Comparing themes..."
echo "📦 Backup:  $MOST_RECENT_BACKUP"
echo "💻 Working: $WORKING_THEME_DIR"
echo ""

# Function to get relative paths and exclude README.md
get_file_list() {
    local dir="$1"
    find "$dir" -type f ! -name "README.md" ! -path "*/.*" | sed "s|^$dir/||" | sort
}

# Get file lists from both directories
BACKUP_FILES=$(get_file_list "$MOST_RECENT_BACKUP")
WORKING_FILES=$(get_file_list "$WORKING_THEME_DIR")

# Create temporary files for comparison
TEMP_BACKUP="/tmp/backup_files.txt"
TEMP_WORKING="/tmp/working_files.txt"

echo "$BACKUP_FILES" > "$TEMP_BACKUP"
echo "$WORKING_FILES" > "$TEMP_WORKING"

echo "📊 COMPARISON RESULTS:"
echo "===================="
echo ""

# Files only in backup (deleted from working)
ONLY_IN_BACKUP=$(comm -23 "$TEMP_BACKUP" "$TEMP_WORKING")
if [ ! -z "$ONLY_IN_BACKUP" ]; then
    echo "🗑️  FILES DELETED FROM WORKING THEME:"
    echo "$ONLY_IN_BACKUP" | sed 's/^/   - /'
    echo ""
fi

# Files only in working (new files)
ONLY_IN_WORKING=$(comm -13 "$TEMP_BACKUP" "$TEMP_WORKING")
if [ ! -z "$ONLY_IN_WORKING" ]; then
    echo "✨ NEW FILES IN WORKING THEME:"
    echo "$ONLY_IN_WORKING" | sed 's/^/   + /'
    echo ""
fi

# Files that exist in both - check for content differences
COMMON_FILES=$(comm -12 "$TEMP_BACKUP" "$TEMP_WORKING")
MODIFIED_FILES=""

if [ ! -z "$COMMON_FILES" ]; then
    echo "🔄 CHECKING FOR MODIFIED FILES..."
    
    while IFS= read -r file; do
        if [ -f "$MOST_RECENT_BACKUP/$file" ] && [ -f "$WORKING_THEME_DIR/$file" ]; then
            # Compare file content
            if ! diff -q "$MOST_RECENT_BACKUP/$file" "$WORKING_THEME_DIR/$file" > /dev/null 2>&1; then
                MODIFIED_FILES="$MODIFIED_FILES$file\n"
            fi
        fi
    done <<< "$COMMON_FILES"
    
    if [ ! -z "$MODIFIED_FILES" ]; then
        echo ""
        echo "📝 MODIFIED FILES:"
        echo -e "$MODIFIED_FILES" | sed 's/^/   ~ /'
    else
        echo "   ✅ No content differences found in common files"
    fi
fi

echo ""

# Specific analysis for layout/theme.liquid
echo "🎨 LAYOUT/THEME.LIQUID ANALYSIS:"
echo "================================"
echo ""

BACKUP_THEME_LIQUID="$MOST_RECENT_BACKUP/layout/theme.liquid"
WORKING_THEME_LIQUID="$WORKING_THEME_DIR/layout/theme.liquid"

# Global variables for KCS custom code section
KCS_CUSTOM_CODE_SECTION=""
KCS_CUSTOM_CODE_MISSING=false

if [ -f "$BACKUP_THEME_LIQUID" ] && [ -f "$WORKING_THEME_LIQUID" ]; then
    echo "📋 Analyzing theme.liquid differences..."
    echo ""
    
    # Check if working theme.liquid is missing the KCS custom code section
    START_MARKER="{%- comment -%} 🟢🟢🟢 START KITCHENCABSTORE CUSTOM CODE {%- endcomment -%}"
    END_MARKER="{%- comment -%} 🛑🛑🛑 END KITCHENCABSTORE CUSTOM CODE {%- endcomment -%}"
    
    if ! grep -Fq "$START_MARKER" "$WORKING_THEME_LIQUID" || ! grep -Fq "$END_MARKER" "$WORKING_THEME_LIQUID"; then
        echo "🔍 KITCHENCABSTORE CUSTOM CODE SECTION MISSING IN WORKING THEME!"
        echo "================================================================="
        
        # Check if the section exists in backup
        if grep -Fq "$START_MARKER" "$BACKUP_THEME_LIQUID" && grep -Fq "$END_MARKER" "$BACKUP_THEME_LIQUID"; then
            echo "✅ Found KCS custom code section in backup theme.liquid"
            
            # Extract the custom code section from backup (including the markers)
            KCS_CUSTOM_CODE_SECTION=$(sed -n "/$START_MARKER/,/$END_MARKER/p" "$BACKUP_THEME_LIQUID")
            KCS_CUSTOM_CODE_MISSING=true
            
            echo ""
            echo "📋 KCS CUSTOM CODE SECTION TO RESTORE:"
            echo "$KCS_CUSTOM_CODE_SECTION" | sed 's/^/   ✨ /'
            echo ""
        else
            echo "❌ KCS custom code section not found in backup either"
        fi
    else
        echo "✅ KITCHENCABSTORE CUSTOM CODE section found in working theme.liquid"
    fi
    
    echo ""
    
    # Regular missing content analysis (for other missing lines)
    echo "🔍 OTHER CONTENT IN BACKUP THEME.LIQUID NOT FOUND IN WORKING VERSION:"
    echo "====================================================================="
    
    # Use grep to find lines from backup that don't exist in working (excluding KCS custom code)
    MISSING_CONTENT=""
    
    while IFS= read -r line; do
        # Skip lines that are part of the KCS custom code section
        if [[ "$line" == *"🟢🟢🟢 START KITCHENCABSTORE CUSTOM CODE"* ]] || 
           [[ "$line" == *"🛑🛑🛑 END KITCHENCABSTORE CUSTOM CODE"* ]] ||
           [[ "$line" == *"'kcs_custom.css'"* ]] && [[ "$line" == *"asset_url"* ]]; then
            continue
        fi
        
        # Skip empty lines for cleaner output
        if [[ ! -z "$line" ]] && [[ ! "$line" =~ ^[[:space:]]*$ ]]; then
            # Check if this content exists in working file
            if ! grep -Fq "$line" "$WORKING_THEME_LIQUID" 2>/dev/null; then
                MISSING_CONTENT="$MISSING_CONTENT$line\n"
            fi
        fi
    done < <(cat "$BACKUP_THEME_LIQUID")
    
    if [ ! -z "$MISSING_CONTENT" ]; then
        echo -e "$MISSING_CONTENT" | head -50 | sed 's/^/   ❌ /'
        
        # Count missing lines
        MISSING_COUNT=$(echo -e "$MISSING_CONTENT" | grep -c . || echo "0")
        if [ "$MISSING_COUNT" -gt 50 ]; then
            echo "   ... and $((MISSING_COUNT - 50)) more lines"
        fi
        echo ""
        echo "   📊 Total other missing lines: $MISSING_COUNT"
    else
        echo "   ✅ No other missing content found"
    fi
    
    echo ""
    
    # Also show new content in working that wasn't in backup
    echo "🆕 NEW CONTENT IN WORKING THEME.LIQUID (NOT IN BACKUP):"
    echo "======================================================="
    
    NEW_CONTENT=""
    while IFS= read -r line; do
        # Skip empty lines for cleaner output
        if [[ ! -z "$line" ]] && [[ ! "$line" =~ ^[[:space:]]*$ ]]; then
            # Check if this content exists in backup file
            if ! grep -Fq "$line" "$BACKUP_THEME_LIQUID" 2>/dev/null; then
                NEW_CONTENT="$NEW_CONTENT$line\n"
            fi
        fi
    done < <(cat "$WORKING_THEME_LIQUID")
    
    if [ ! -z "$NEW_CONTENT" ]; then
        echo -e "$NEW_CONTENT" | head -50 | sed 's/^/   ✨ /'
        
        # Count new lines
        NEW_COUNT=$(echo -e "$NEW_CONTENT" | grep -c . || echo "0")
        if [ "$NEW_COUNT" -gt 50 ]; then
            echo "   ... and $((NEW_COUNT - 50)) more lines"
        fi
        echo ""
        echo "   📊 Total new lines: $NEW_COUNT"
    else
        echo "   ✅ No new content found - working version doesn't have additions"
    fi
    
elif [ -f "$BACKUP_THEME_LIQUID" ] && [ ! -f "$WORKING_THEME_LIQUID" ]; then
    echo "❌ layout/theme.liquid exists in backup but NOT in working theme!"
elif [ ! -f "$BACKUP_THEME_LIQUID" ] && [ -f "$WORKING_THEME_LIQUID" ]; then
    echo "✨ layout/theme.liquid exists in working theme but NOT in backup!"
else
    echo "❌ layout/theme.liquid not found in either backup or working theme!"
fi

echo ""

# Summary
BACKUP_COUNT=$(echo "$BACKUP_FILES" | wc -l | xargs)
WORKING_COUNT=$(echo "$WORKING_FILES" | wc -l | xargs)
DELETED_COUNT=$(echo "$ONLY_IN_BACKUP" | grep -c '^' 2>/dev/null || echo "0")
NEW_COUNT=$(echo "$ONLY_IN_WORKING" | grep -c '^' 2>/dev/null || echo "0")
MODIFIED_COUNT=$(echo -e "$MODIFIED_FILES" | grep -c '^' 2>/dev/null || echo "0")

echo "📈 SUMMARY:"
echo "==========="
echo "   Backup files:    $BACKUP_COUNT"
echo "   Working files:   $WORKING_COUNT (excluding README.md)"
echo "   Deleted files:   $DELETED_COUNT"
echo "   New files:       $NEW_COUNT"
echo "   Modified files:  $MODIFIED_COUNT"
echo ""

# Cleanup
rm -f "$TEMP_BACKUP" "$TEMP_WORKING"

if [ "$DELETED_COUNT" -eq 0 ] && [ "$NEW_COUNT" -eq 0 ] && [ "$MODIFIED_COUNT" -eq 0 ]; then
    echo "🎉 Themes are identical!"
else
    echo "ℹ️  Differences found between backup and working theme."
fi

echo ""

# Auto-restore KCS custom code if missing
if [ "$KCS_CUSTOM_CODE_MISSING" = true ] && [ ! -z "$KCS_CUSTOM_CODE_SECTION" ]; then
    echo "🔄 AUTO-RESTORING KCS CUSTOM CODE..."
    echo "===================================="
    echo ""

    # Create a temporary file for the modified content
    TEMP_FILE="/tmp/theme_liquid_temp.$$"

    # Write the KCS custom code to a temporary file first
    echo "$KCS_CUSTOM_CODE_SECTION" > "/tmp/kcs_code.$$"
    
    # Use awk to insert the KCS custom code right after the opening <head> tag
    awk '
    /<head[^>]*>/ {
        print $0
        print ""
        # Insert the KCS custom code from the temp file
        while ((getline line < "/tmp/kcs_code.'$$'") > 0) {
            print line
        }
        close("/tmp/kcs_code.'$$'")
        next
    }
    { print }
    ' "$WORKING_THEME_LIQUID" > "$TEMP_FILE"
    
    # Clean up the temporary KCS code file
    rm -f "/tmp/kcs_code.$$"

    # Replace the original file with the modified one
    mv "$TEMP_FILE" "$WORKING_THEME_LIQUID"

    # Verify the restoration
    if grep -Fq "$START_MARKER" "$WORKING_THEME_LIQUID" && grep -Fq "$END_MARKER" "$WORKING_THEME_LIQUID"; then
        echo "✅ KCS custom code successfully restored to working theme.liquid!"
        echo ""
        KCS_STATUS="KCS custom code restored"
    else
        echo "❌ Failed to restore KCS custom code. Please check manually."
        echo ""
    fi
fi

# Run README theme info updater at the end
echo "📋 Updating README with current theme information..."
README_UPDATER_SCRIPT="$SCRIPT_DIR/READMEactivethemeinfoupdater.sh"

if [ -f "$README_UPDATER_SCRIPT" ]; then
    "$README_UPDATER_SCRIPT"
    echo ""
else
    echo "❌ Error: README updater script not found: $README_UPDATER_SCRIPT"
    echo ""
fi

echo "✅ Comparison complete!"
echo ""

# Ask if user wants to push theme to Shopify
echo "🚀 PUSH TO SHOPIFY?"
echo "=================="
echo "Would you like to push the updated theme to Shopify?"
echo "Theme ID: $THEME_ID"
echo "Store: aeb786-12.myshopify.com"
echo ""
echo -n "Push to Shopify? (Y/N): "
read -r push_confirm

if [[ "$push_confirm" =~ ^[Yy]$ ]]; then
    echo ""
    echo "📤 Pushing theme to Shopify..."
    echo "============================="
    
    # Change to theme directory and push
    cd "$WORKING_THEME_DIR" || {
        echo "❌ Error: Cannot access theme directory: $WORKING_THEME_DIR"
        exit 1
    }
    
    # Run shopify theme push
    shopify theme push --theme "$THEME_ID" --store aeb786-12.myshopify.com
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "✅ Theme successfully pushed to Shopify!"
    else
        echo ""
        echo "❌ Error: Failed to push theme to Shopify"
        exit 1
    fi
else
    echo ""
    echo "⏭️  Skipping Shopify push."
fi

echo ""
echo "🎉 All operations complete!"

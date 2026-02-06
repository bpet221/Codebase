#!/bin/bash

# Auto Theme Checker & Updater
# Compares the most recent theme backup with the current working theme

# UPDATED 2025-11-25

# HOW TO UPDATE SHOPIFY THEME VERSION WITH THE shopifyupdater.sh
# 1. Run pullfromshop to sync local theme with Shopify.
# 2. Manually create a local backup: duplicate .../Code Repos/KCS Shopify Theme in Finder → move/rename to ...'/Documents/KCS/KCS Shopify Store Themes/...' Themes/{date} Backup - KCS Shopify Horizon (Tinker {version_num}).
# 3. Update the LIVE theme in Shopify Admin (auto-creates a duplicate) (do not publish yet).
# 4. Copy the new Theme ID.
# 5. Update ACTIVEthemeid.sh with the new Theme ID.
# 6. Run pullfromshop again to sync live theme files.
# 7. Run shopifyupdater: compares new live theme vs. your backup (select most recently updated backup).
# 8. Review terminal output; when done, type YES to push merged edits to Shopify.
# 9. Open prev & new theme editors side-by-side. Search for files w/ '%🟢🟢🟢' & 'kcs' in name, verify counts match.
# 10. Preview the new theme and verify basic functionality.
# 11. Publish the new theme in Admin.

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

# Find the most recent backup based on YYYY_MM_DD date format in folder name
# This targets folders like "2025_02_05 Backup - ..."
MOST_RECENT_BACKUP=$(find "$BACKUP_BASE_DIR" -mindepth 1 -maxdepth 1 -type d -name "[0-9][0-9][0-9][0-9]_[0-9][0-9]_[0-9][0-9]*" | \
    sed 's|.*/||' | \
    sort -t_ -k1,1nr -k2,2nr -k3,3nr | \
    head -1)

# Convert folder name back to full path
if [ -n "$MOST_RECENT_BACKUP" ]; then
    MOST_RECENT_BACKUP="$BACKUP_BASE_DIR/$MOST_RECENT_BACKUP"
fi

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

# ============================================
# CUSTOM CODE FILE SCANNING
# ============================================

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

# Summary of Step 1
BACKUP_COUNT=$(echo "$BACKUP_FILES" | wc -l | xargs)
WORKING_COUNT=$(echo "$WORKING_FILES" | wc -l | xargs)
DELETED_COUNT=$(echo "$ONLY_IN_BACKUP" | grep -c '^' 2>/dev/null || echo "0")
NEW_COUNT=$(echo "$ONLY_IN_WORKING" | grep -c '^' 2>/dev/null || echo "0")
MODIFIED_COUNT=$(echo -e "$MODIFIED_FILES" | grep -c '^' 2>/dev/null || echo "0")

echo "📈 STEP 1 SUMMARY:"
echo "=================="
echo "   Backup files:    $BACKUP_COUNT"
echo "   Working files:   $WORKING_COUNT (excluding README.md)"
echo "   Deleted files:   $DELETED_COUNT"
echo "   New files:       $NEW_COUNT"
echo "   Modified files:  $MODIFIED_COUNT"
echo ""

if [ "$DELETED_COUNT" -eq 0 ] && [ "$NEW_COUNT" -eq 0 ] && [ "$MODIFIED_COUNT" -eq 0 ]; then
    echo "🎉 Themes are identical!"
else
    echo "ℹ️  Differences found between backup and working theme."
fi
echo ""

echo ""
echo "🔍 STEP 2: SCANNING BACKUP FOR CUSTOM CODE MARKERS..."
echo "====================================================="
echo ""

# Find all files in backup with custom code markers (excluding kcs and ai_gen_block files)
echo "Searching backup for native theme files with 🟢🟢🟢 markers..."
CUSTOM_CODE_FILES=$(grep -rl "🟢🟢🟢" "$MOST_RECENT_BACKUP" 2>/dev/null | \
    sed "s|^$MOST_RECENT_BACKUP/||" | \
    grep -v "kcs" | \
    grep -v "ai_gen_block" | \
    grep -v "README.md" | \
    grep -v "\.claude" | \
    sort)

if [ -z "$CUSTOM_CODE_FILES" ]; then
    echo "✅ No native theme files found with custom code markers"
    echo "   All custom code is in upgrade-safe files (kcs* or ai_gen_block*)"
    echo ""
else
    CUSTOM_CODE_COUNT=$(echo "$CUSTOM_CODE_FILES" | wc -l | xargs)
    echo "⚠️  Found $CUSTOM_CODE_COUNT native theme file(s) with custom code:"
    echo ""
    echo "$CUSTOM_CODE_FILES" | sed 's/^/   - /'
    echo ""
    echo "═══════════════════════════════════════════════════════════════"
    echo "📋 MANUAL UPDATE REQUIRED"
    echo "═══════════════════════════════════════════════════════════════"
    echo ""
    echo "These files require manual updates in the Shopify Code Editor."
    echo ""
    echo "📖 INSTRUCTIONS:"
    echo ""
    echo "   1. Open Shopify Admin → Online Store → Themes"
    echo ""
    echo "   2. For EACH file listed above:"
    echo ""
    echo "      a) Open the file in the NEW theme (working theme)"
    echo ""
    echo "      b) Open the SAME file from your BACKUP theme:"
    echo "         Backup location: $(basename "$MOST_RECENT_BACKUP")"
    echo ""
    echo "      c) Look for custom code blocks wrapped in:"
    echo "         🟢🟢🟢 START KITCHENCABSTORE CUSTOM CODE"
    echo "         🛑🛑🛑 END KITCHENCABSTORE CUSTOM CODE"
    echo ""
    echo "      d) Copy each custom code block from backup"
    echo ""
    echo "      e) Paste into the correct location in new theme"
    echo "         💡 TIP: Use Shopify's side-by-side comparison"
    echo ""
    echo "   3. Save each file after updating"
    echo ""
    echo "   4. Verify all $CUSTOM_CODE_COUNT files have been updated"
    echo ""
    echo "═══════════════════════════════════════════════════════════════"
    echo ""
    echo "⏱️  Estimated time: 30-45 minutes for $CUSTOM_CODE_COUNT files"
    echo ""
fi

# Cleanup
rm -f "$TEMP_BACKUP" "$TEMP_WORKING"

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

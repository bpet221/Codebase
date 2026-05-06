#!/bin/bash

# Auto Theme Checker & Updater
# Compares the most recent theme backup with the current working theme

# UPDATED 2026-02-06

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

# ═══════════════════════════════════════════════════════════════

# Create temporary log file for changelog
TEMP_CHANGELOG="/tmp/shopify_updater_log_$.txt"

# Redirect all output to both terminal and log file
exec > >(tee "$TEMP_CHANGELOG")

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

# Function to get relative paths and exclude README.md and THEME_CHANGELOG.md
get_file_list() {
    local dir="$1"
    find "$dir" -type f ! -name "README.md" ! -name "THEME_CHANGELOG.md" ! -path "*/.*" | sed "s|^$dir/||" | sort
}

# ═══════════════════════════════════════════════════════════════
# STEP 1: FILE COMPARISON
# ═══════════════════════════════════════════════════════════════

echo ""
echo "═══════════════════════════════════════════════════════════════" 
echo "🔍 STEP 1: FILE COMPARISON"
echo "═══════════════════════════════════════════════════════════════"
echo ""

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

# Cleanup temp files
rm -f "$TEMP_BACKUP" "$TEMP_WORKING"

# ═══════════════════════════════════════════════════════════════
# STEP 2: AUTO-RESTORE LAYOUT/THEME.LIQUID
# ═══════════════════════════════════════════════════════════════

echo ""
echo "═══════════════════════════════════════════════════════════════"
echo "🔄 STEP 2: AUTO-RESTORE LAYOUT/THEME.LIQUID"
echo "═══════════════════════════════════════════════════════════════"
echo ""

BACKUP_THEME_LIQUID="$MOST_RECENT_BACKUP/layout/theme.liquid"
WORKING_THEME_LIQUID="$WORKING_THEME_DIR/layout/theme.liquid"

# Define markers
START_MARKER="{%- comment -%} 🟢🟢🟢 START KITCHENCABSTORE CUSTOM CODE {%- endcomment -%}"
END_MARKER="{%- comment -%} 🛑🛑🛑 END KITCHENCABSTORE CUSTOM CODE {%- endcomment -%}"

# Check if theme.liquid files exist
if [ ! -f "$BACKUP_THEME_LIQUID" ]; then
    echo "⚠️  Backup theme.liquid not found - skipping auto-restore"
    echo ""
elif [ ! -f "$WORKING_THEME_LIQUID" ]; then
    echo "⚠️  Working theme.liquid not found - skipping auto-restore"
    echo ""
else
    # Check if custom code is missing in working file
    if ! grep -Fq "$START_MARKER" "$WORKING_THEME_LIQUID" 2>/dev/null; then
        echo "🔍 KCS custom code section missing in working theme.liquid"
        
        # Check if section exists in backup
        if grep -Fq "$START_MARKER" "$BACKUP_THEME_LIQUID" && grep -Fq "$END_MARKER" "$BACKUP_THEME_LIQUID"; then
            echo "✅ Found KCS custom code section in backup"
            echo "🔄 Restoring to working theme..."
            echo ""
            
            # Extract the custom code section from backup
            KCS_CUSTOM_CODE_SECTION=$(sed -n "/$START_MARKER/,/$END_MARKER/p" "$BACKUP_THEME_LIQUID")
            
            # Create temporary files
            TEMP_FILE="/tmp/theme_liquid_temp.$"
            TEMP_KCS="/tmp/kcs_code.$"
            
            # Write the KCS custom code to a temporary file
            echo "$KCS_CUSTOM_CODE_SECTION" > "$TEMP_KCS"
            
            # Use awk to insert the KCS custom code right after the opening <head> tag
            awk -v temp_kcs="$TEMP_KCS" '
            /<head[^>]*>/ {
                print $0
                print ""
                # Insert the KCS custom code from the temp file
                while ((getline line < temp_kcs) > 0) {
                    print line
                }
                close(temp_kcs)
                next
            }
            { print }
            ' "$WORKING_THEME_LIQUID" > "$TEMP_FILE"
            
            # Clean up the temporary KCS code file
            rm -f "$TEMP_KCS"
            
            # Replace the original file with the modified one
            mv "$TEMP_FILE" "$WORKING_THEME_LIQUID"
            
            # Verify the restoration
            if grep -Fq "$START_MARKER" "$WORKING_THEME_LIQUID" && grep -Fq "$END_MARKER" "$WORKING_THEME_LIQUID"; then
                echo "✅ SUCCESS: KCS custom code restored to layout/theme.liquid!"
                echo ""
            else
                echo "❌ FAILED: Could not verify restoration. Please check manually."
                echo ""
            fi
        else
            echo "❌ KCS custom code section not found in backup either"
            echo ""
        fi
    else
        echo "✅ KCS custom code already exists in working theme.liquid - skipping"
        echo ""
    fi
fi

# ═══════════════════════════════════════════════════════════════
# STEP 3: CUSTOM CODE DETECTION
# ═══════════════════════════════════════════════════════════════

echo ""
echo "═══════════════════════════════════════════════════════════════"
echo "🔍 STEP 3: CUSTOM CODE DETECTION"
echo "═══════════════════════════════════════════════════════════════"
echo ""

# Find all files in backup with custom code markers (excluding kcs and ai_gen_block files)
echo "Searching backup for native theme files with 🟢🟢🟢 markers..."
CUSTOM_CODE_FILES=$(grep -rl "🟢🟢🟢" "$MOST_RECENT_BACKUP" 2>/dev/null | \
    sed "s|^$MOST_RECENT_BACKUP/||" | \
    grep -v "kcs" | \
    grep -v "ai_gen_block" | \
    grep -v "README.md" | \
    grep -v "THEME_CHANGELOG.md" | \
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
fi

# ═══════════════════════════════════════════════════════════════
# STEP 4: BROKEN REFERENCE CHECK
# ═══════════════════════════════════════════════════════════════

echo ""
echo "═══════════════════════════════════════════════════════════════"
echo "🔍 STEP 4: BROKEN REFERENCE CHECK"
echo "═══════════════════════════════════════════════════════════════"
echo ""

# Only run if there are deleted files
if [ ! -z "$ONLY_IN_BACKUP" ]; then
    DELETED_COUNT=$(echo "$ONLY_IN_BACKUP" | grep -c '^' 2>/dev/null || echo "0")
    echo "🗑️  Found $DELETED_COUNT deleted file(s) from Step 1"
    echo "🔍 Scanning custom code for references to deleted files..."
    echo ""
    
    # Get list of files to scan in working theme
    FILES_TO_SCAN=""

    # 1. Add all kcs* files from BACKUP theme (they contain custom code!)
    KCS_FILES=$(find "$MOST_RECENT_BACKUP" -type f -name "*kcs*" 2>/dev/null | sed "s|^$MOST_RECENT_BACKUP/||")

    if [ ! -z "$KCS_FILES" ]; then
        FILES_TO_SCAN="$KCS_FILES"
    fi
    
    # 2. Add custom code files (from Step 3)
    if [ ! -z "$CUSTOM_CODE_FILES" ]; then
        FILES_TO_SCAN="$FILES_TO_SCAN
$CUSTOM_CODE_FILES"
    fi
    
    # Remove duplicates, empty lines, and THEME_CHANGELOG.md
    FILES_TO_SCAN=$(echo "$FILES_TO_SCAN" | sort -u | grep -v '^$' | grep -v 'THEME_CHANGELOG.md')
    
    if [ -z "$FILES_TO_SCAN" ]; then
        echo "⚠️  No custom code files found to scan"
        echo ""
    else
        SCAN_COUNT=$(echo "$FILES_TO_SCAN" | wc -l | xargs)
        echo "📋 Scanning $SCAN_COUNT file(s) with custom code..."
        echo ""
        
        # Track if we find any broken references
        BROKEN_REFS_FOUND=false
        BROKEN_REFS_OUTPUT=""
        
        # For each deleted file, check if it's referenced anywhere
        while IFS= read -r deleted_file; do
            # Extract just the filename (without path)
            deleted_filename=$(basename "$deleted_file")
            
            # Remove .liquid extension and add quotes for Liquid file references
            deleted_filename_no_ext="${deleted_filename%.liquid}"
            search_pattern="'${deleted_filename_no_ext}'"
            
            # Search for references to this deleted file in all custom code files
            while IFS= read -r scan_file; do
                # Scan BACKUP versions because they have the custom code
                scan_file_path="$MOST_RECENT_BACKUP/$scan_file"
                
                 if [ -f "$scan_file_path" ]; then
                    # Check if this is a kcs file or native theme file
                    if [[ "$scan_file" == *"kcs"* ]]; then
                        # KCS file - scan entire file (all custom code)
                        custom_matches=$(grep -in "$search_pattern" "$scan_file_path" 2>/dev/null)
                        native_matches=""
                    else
                        # Native theme file - scan both custom and native sections separately
                        
                        # 1. Extract and scan CUSTOM code sections
                        TEMP_EXTRACT="/tmp/custom_extract_$$.txt"
                        awk '/🟢🟢🟢/,/🛑🛑🛑/' "$scan_file_path" > "$TEMP_EXTRACT" 2>/dev/null
                        
                        if [ -s "$TEMP_EXTRACT" ]; then
                            custom_matches=$(grep -in "$search_pattern" "$TEMP_EXTRACT" 2>/dev/null)
                        else
                            custom_matches=""
                        fi
                        rm -f "$TEMP_EXTRACT"
                        
                        # 2. Scan ENTIRE file to find native code references
                        all_matches=$(grep -in "$search_pattern" "$scan_file_path" 2>/dev/null)
                        
                        # 3. Get line numbers from custom matches
                        if [ ! -z "$custom_matches" ]; then
                            custom_line_numbers=$(echo "$custom_matches" | cut -d: -f1 | sort -n)
                        else
                            custom_line_numbers=""
                        fi
                        
                        # 4. Filter native matches (exclude custom line numbers)
                        native_matches=""
                        if [ ! -z "$all_matches" ]; then
                            while IFS= read -r match; do
                                match_line_num=$(echo "$match" | cut -d: -f1)
                                
                                # Check if this line is in custom sections
                                is_custom=false
                                if [ ! -z "$custom_line_numbers" ]; then
                                    while IFS= read -r custom_line; do
                                        if [ "$match_line_num" = "$custom_line" ]; then
                                            is_custom=true
                                            break
                                        fi
                                    done <<< "$custom_line_numbers"
                                fi
                                
                                # If not in custom sections, it's native code
                                if [ "$is_custom" = false ]; then
                                    native_matches="$native_matches$match
"
                                fi
                            done <<< "$all_matches"
                        fi
                    fi
                    
                    # Display custom code matches (action required)
                    if [ ! -z "$custom_matches" ]; then
                        BROKEN_REFS_FOUND=true
                        BROKEN_REFS_OUTPUT="$BROKEN_REFS_OUTPUT
⚠️  $scan_file references deleted file: $deleted_file [IN CUSTOM CODE]"
                        
                        # Show first 2 matching lines
                        echo "$custom_matches" | head -2 | while IFS= read -r match_line; do
                            BROKEN_REFS_OUTPUT="$BROKEN_REFS_OUTPUT
   🔍 Line: $match_line"
                        done
                        
                        BROKEN_REFS_OUTPUT="$BROKEN_REFS_OUTPUT
"
                    fi
                    
                    # Display native code matches (informational only)
                    if [ ! -z "$native_matches" ]; then
                        BROKEN_REFS_OUTPUT="$BROKEN_REFS_OUTPUT
ℹ️  $scan_file references deleted file: $deleted_file [IN NATIVE CODE - ignore]"
                        
                        # Show first 2 matching lines
                        echo "$native_matches" | head -2 | while IFS= read -r match_line; do
                            BROKEN_REFS_OUTPUT="$BROKEN_REFS_OUTPUT
   📄 Line: $match_line"
                        done
                        
                        BROKEN_REFS_OUTPUT="$BROKEN_REFS_OUTPUT
"
                    fi
                fi
            done <<< "$FILES_TO_SCAN"
        done <<< "$ONLY_IN_BACKUP"
        
        # Display results
        if [ "$BROKEN_REFS_FOUND" = true ]; then
            echo "❌ BROKEN REFERENCES DETECTED!"
            echo "═══════════════════════════════════════════════════════════════"
            echo ""
            echo "Your custom code references files that were deleted in the theme update:"
            echo ""
            echo -e "$BROKEN_REFS_OUTPUT"
            echo "═══════════════════════════════════════════════════════════════"
            echo ""
            echo "🔧 ACTION REQUIRED:"
            echo "   1. Review each file listed above"
            echo "   2. Update or remove references to deleted files"
            echo "   3. Test thoroughly before pushing to Shopify"
            echo ""
        else
            echo "✅ No broken file references detected"
            echo "   All custom code references appear valid"
            echo ""
        fi
    fi
else
    echo "✅ No files were deleted in this theme update"
    echo "   Skipping broken reference check"
    echo ""
fi

# ═══════════════════════════════════════════════════════════════
# STEP 5: MANUAL INSTRUCTIONS (if needed)
# ═══════════════════════════════════════════════════════════════

echo ""
echo "═══════════════════════════════════════════════════════════════"
echo "📋 STEP 5: MANUAL UPDATE INSTRUCTIONS"
echo "═══════════════════════════════════════════════════════════════"
echo ""

# Check if there are files requiring manual updates
if [ ! -z "$CUSTOM_CODE_FILES" ]; then
    CUSTOM_CODE_COUNT=$(echo "$CUSTOM_CODE_FILES" | wc -l | xargs)
    
    echo "These $CUSTOM_CODE_COUNT file(s) require manual updates in Shopify Code Editor:"
    echo ""
    echo "$CUSTOM_CODE_FILES" | sed 's/^/   - /'
    echo ""
    echo "📖 STEP-BY-STEP INSTRUCTIONS:"
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
    echo "⏱️  Estimated time: 5-7 minutes per file (~$(( CUSTOM_CODE_COUNT * 2 )) minutes total)"
    echo ""
else
    echo "✅ No manual updates required!"
    echo "   All custom code has been restored automatically."
    echo ""
fi

# ═══════════════════════════════════════════════════════════════
# STEP 6: README UPDATE
# ═══════════════════════════════════════════════════════════════

echo ""
echo "═══════════════════════════════════════════════════════════════"
echo "📋 STEP 6: UPDATING README"
echo "═══════════════════════════════════════════════════════════════"
echo ""

README_UPDATER_SCRIPT="$SCRIPT_DIR/READMEactivethemeinfoupdater.sh"

if [ -f "$README_UPDATER_SCRIPT" ]; then
    "$README_UPDATER_SCRIPT"
    echo ""
else
    echo "❌ Error: README updater script not found: $README_UPDATER_SCRIPT"
    echo ""
fi

# ═══════════════════════════════════════════════════════════════
# STEP 7: SAVE CHANGELOG
# ═══════════════════════════════════════════════════════════════

echo ""
echo "═══════════════════════════════════════════════════════════════"
echo "💾 STEP 7: SAVING CHANGELOG"
echo "═══════════════════════════════════════════════════════════════"
echo ""

# Define changelog file path in the backup folder
CHANGELOG_FILE="$MOST_RECENT_BACKUP/THEME_CHANGELOG.md"

# Wait a moment for tee to finish writing
sleep 0.5

# Copy the log to the backup folder as THEME_CHANGELOG.md
if [ -f "$TEMP_CHANGELOG" ]; then
    # Add header with metadata
    {
        echo "# Theme Update Changelog"
        echo ""
        echo "**Generated:** $(date '+%Y-%m-%d %H:%M:%S')"
        echo "**Backup Theme:** $(basename "$MOST_RECENT_BACKUP")"
        echo "**Working Theme:** KCS Shopify Theme"
        echo "**Theme ID:** $THEME_ID"
        echo ""
        echo "---"
        echo ""
        cat "$TEMP_CHANGELOG"
    } > "$CHANGELOG_FILE"
    
    if [ -f "$CHANGELOG_FILE" ]; then
        echo "✅ Changelog saved successfully!"
        echo "   Location: $CHANGELOG_FILE"
        echo ""
        
        # Clean up temp file
        rm -f "$TEMP_CHANGELOG"
    else
        echo "❌ Error: Failed to save changelog"
        echo ""
    fi
else
    echo "❌ Error: Temporary log file not found"
    echo ""
fi

# ═══════════════════════════════════════════════════════════════
# FINAL SUMMARY
# ═══════════════════════════════════════════════════════════════

echo ""
echo "═══════════════════════════════════════════════════════════════"
echo "🎉 ALL OPERATIONS COMPLETE!"
echo "═══════════════════════════════════════════════════════════════"
echo ""
echo "📋 NEXT STEPS:"
echo ""
echo "   1. Review the changelog: $CHANGELOG_FILE"
echo ""
if [ ! -z "$CUSTOM_CODE_FILES" ]; then
    echo "   2. Complete manual file updates (Step 5 instructions above)"
    echo ""
fi
if [ "$BROKEN_REFS_FOUND" = true ]; then
    echo "   3. Fix broken file references (see Step 4 warnings)"
    echo ""
fi
echo "   4. Test changes locally if needed"
echo ""
echo "   5. Push to Shopify: run 'push2shop' when ready"
echo ""
echo "═══════════════════════════════════════════════════════════════"
echo ""
echo "🎉 All operations complete!"
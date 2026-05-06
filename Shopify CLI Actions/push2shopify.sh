#!/bin/zsh

# ============================================================================
# SHOPIFY THEME PUSH FROM LOCAL TO SHOPIFY
# ============================================================================
# Triggered by alias: push2shop
# Alias defined in: ~/.zshrc
# Edit alias: nano ~/.zshrc (then run: source ~/.zshrc)
#
# What this script does:
# 1. Pushes local theme changes to Shopify (theme ID from ACTIVEthemeid.sh)
# 2. Analyzes git diff and sends to GPT-4 for semantic commit message
# 3. Auto-commits and pushes changes to Git (origin/main)
#
# Requirements: ANTHROPIC_API_KEY must be set in ~/.zshrc
# ============================================================================

# Get the directory where this script is located (zsh compatible)
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

# Source the theme ID from the centralized config file
source "$SCRIPT_DIR/ACTIVEthemeid.sh"

echo "Confirm theme ID to push to: $THEME_ID"
echo -n "Is this correct? (y/n): "
read confirm_theme

if [[ "$confirm_theme" =~ ^[Yy]$ ]]; then
    cd "/Users/blakepetipas/Code Repos/KCS Shopify Theme"
    
    # Push to Shopify
    shopify theme push --theme $THEME_ID --path . --store kitchencabinetstore.myshopify.com
    
    # Auto-commit and push to Git
    echo "\nAnalyzing changes..."
    
    # Get git diff information
    git_status=$(git status --porcelain)
    git_diff_stat=$(git diff --stat --no-color | head -20)
    git_diff_preview=$(git diff --no-color | head -200)
    file_names=$(git diff --name-only)
    
    # If no changes, skip AI and use simple message
    if [ -z "$git_status" ] && [ -z "$file_names" ]; then
        commit_summary="Pushed to Shopify: No changes detected"
    # Check if ANTHROPIC_API_KEY is set
    elif [ -n "$ANTHROPIC_API_KEY" ]; then
        echo "Using Claude to generate commit message..."
        
        # Escape newlines and quotes for JSON
        files_list=$(echo "$file_names" | tr '\n' ' ')
        diff_content=$(echo "$git_diff_preview" | sed 's/\\/\\\\/g' | sed 's/"/\\"/g' | awk '{printf "%s\\n", $0}')
        
        # Build JSON payload for Anthropic API
        json_payload=$(cat <<JSON
{
  "model": "claude-haiku-4-5-20251001",
  "max_tokens": 200,
  "system": "You are an expert at analyzing code diffs and writing semantic commit messages. Analyze the diff and describe WHAT changed functionally, not just which files. Focus on the business logic, UI changes, or features added/modified. Keep under 500 characters. Always start with 'Pushed to Shopify: '. Reply with the commit message only, no explanation.",
  "messages": [
    {
      "role": "user",
      "content": "Analyze this Shopify theme diff and write a semantic commit message describing what actually changed:\n\nFiles: $files_list\n\nDiff preview:\n$diff_content"
    }
  ]
}
JSON
)
        
        # Call Anthropic API
        response=$(curl -s https://api.anthropic.com/v1/messages \
          -H "Content-Type: application/json" \
          -H "x-api-key: $ANTHROPIC_API_KEY" \
          -H "anthropic-version: 2023-06-01" \
          -d "$json_payload")
        
        # Extract the commit message from response
        commit_summary=$(echo "$response" | sed -n 's/.*"text":[[:space:]]*"\([^"]*\)".*/\1/p' | head -1)
        
        # Debug output
        if [ -z "$commit_summary" ]; then
            echo "AI extraction failed. Response: $response"
        fi
        
        # Fallback if AI fails
        if [ -z "$commit_summary" ] || [[ "$commit_summary" == *"error"* ]]; then
            echo "AI generation failed, using fallback..."
            file_count=$(echo "$file_names" | wc -l | xargs)
            commit_summary="Pushed to Shopify: $file_count files updated"
        fi
    else
        # Original logic as fallback
        file_count=$(echo "$git_status" | grep -c "^" | xargs)
        if [ $file_count -eq 0 ]; then
            commit_summary="Pushed to Shopify: No local changes"
        else
            commit_summary="Pushed to Shopify: $file_count files updated"
        fi
    fi
        
    # Auto-push to Git with AI-generated commit message
    echo "\nAuto-generated commit message: $commit_summary"
    
    # Set the remote and branch
    remote="origin"
    branch="main"
    
    # Git operations
    git add .
    git commit -m "$commit_summary"
    git push $remote $branch
    
    echo "Changes pushed to Git successfully!"
else
    echo "Update ACTIVEthemeid.sh file to desired theme id and run again"
    exit 1
fi

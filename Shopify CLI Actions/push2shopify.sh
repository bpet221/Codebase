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
# Requirements: OPENAI_API_KEY must be set in ~/.zshrc
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
    shopify theme push --theme $THEME_ID --path . --store aeb786-12.myshopify.com
    
    # Auto-commit and push to Git
    echo "\nAnalyzing changes..."
    
    # Get git diff information
    git_status=$(git status --porcelain)
    git_diff_stat=$(git diff --stat --no-color | head -20)
    git_diff_preview=$(git diff --no-color | head -200)
    file_names=$(git diff --name-only)
    
    # Check if OPENAI_API_KEY is set
    if [ -n "$OPENAI_API_KEY" ]; then
        echo "Using AI to generate commit message..."
        
        # Create a prompt with actual diff content
        # Escape newlines and quotes for JSON
        files_list=$(echo "$file_names" | tr '\n' ' ')
        stats_summary=$(echo "$git_diff_stat" | tail -1)
        # Escape the diff for JSON (handle quotes and newlines)
        diff_content=$(echo "$git_diff_preview" | sed 's/\\/\\\\/g' | sed 's/"/\\"/g' | awk '{printf "%s\\n", $0}')
        
        # Build JSON payload
        json_payload=$(cat <<JSON
{
  "model": "gpt-4-turbo-preview",
  "messages": [
    {
      "role": "system",
      "content": "You are an expert at analyzing code diffs and writing semantic commit messages. Analyze the diff and describe WHAT changed functionally, not just which files. Focus on the business logic, UI changes, or features added/modified. Keep under 500 characters. Always start with 'Pushed to Shopify: '"
    },
    {
      "role": "user",
      "content": "Analyze this Shopify theme diff and write a semantic commit message describing what actually changed:\n\nFiles: $files_list\n\nDiff preview:\n$diff_content"
    }
  ],
  "temperature": 0.3,
  "max_tokens": 200
}
JSON
)
        
        # Call OpenAI API
        response=$(curl -s https://api.openai.com/v1/chat/completions \
          -H "Content-Type: application/json" \
          -H "Authorization: Bearer $OPENAI_API_KEY" \
          -d "$json_payload")
        
        # Extract the commit message from response using sed
        commit_summary=$(echo "$response" | sed -n 's/.*"content":[[:space:]]*"\([^"]*\)".*/\1/p' | head -1)
        
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

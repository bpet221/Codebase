#!/bin/bash

# Get the directory where this script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Source the theme ID from the centralized config file
source "$SCRIPT_DIR/ACTIVEthemeid.sh"

echo "Confirm theme ID to pull from: $THEME_ID"
read -p "Is this correct? (y/n): " confirm_theme

if [[ "$confirm_theme" =~ ^[Yy]$ ]]; then
    cd "/Users/blakepetipas/Code Repos/KCS Shopify Theme"
    
    # Run shopify theme pull
    shopify theme pull --theme $THEME_ID --store aeb786-12.myshopify.com
    
    # Analyze changes using Git commands
    echo "\nAnalyzing changes..."
    
    # Get git diff information
    git_status=$(git status --porcelain)
    git_diff_stat=$(git diff --stat --no-color | head -20)
    git_diff_preview=$(git diff --no-color | head -100)
    file_names=$(git diff --name-only)
    
    # Check if OPENAI_API_KEY is set
    if [ -n "$OPENAI_API_KEY" ]; then
        echo "Using AI to generate commit message..."
        
        # Create a simple prompt with just the essential info
        # Escape newlines and quotes for JSON
        files_list=$(echo "$file_names" | tr '\n' ' ')
        stats_summary=$(echo "$git_diff_stat" | tail -1)
        
        # Build JSON payload
        json_payload=$(cat <<JSON
{
  "model": "gpt-3.5-turbo",
  "messages": [
    {
      "role": "system",
      "content": "You are a git commit message writer. Write concise, informative commit messages under 200 characters. Always start with 'Pulled from Shopify: '"
    },
    {
      "role": "user",
      "content": "Write a commit message for these Shopify theme changes. Files: $files_list. Stats: $stats_summary"
    }
  ],
  "temperature": 0.3,
  "max_tokens": 100
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
            commit_summary="Pulled from Shopify: $file_count files updated"
        fi
    else
        # Original logic as fallback
        file_count=$(echo "$git_status" | grep -c "^" | xargs)
        if [ $file_count -eq 0 ]; then
            commit_summary="Pulled from Shopify: No changes"
        else
            commit_summary="Pulled from Shopify: $file_count files updated"
        fi
    fi
    
    # Ask if user wants to push to Git
    read -p "Also push to Git repo? (y/n): " push_git
    if [[ "$push_git" =~ ^[Yy]$ ]]; then
        # Set the remote and branch (adjust if needed)
        remote="origin"
        branch="main"
        
        # Git operations
        git add .
        
        # Show the auto-generated message and allow editing
        echo "Auto-generated commit message: $commit_summary"
        read -p "Use this message? (Y)es or (E)dit: " msg_choice
        
        if [[ "$msg_choice" =~ ^[Yy]$ ]]; then
            msg="$commit_summary"
        elif [[ "$msg_choice" =~ ^[Ee]$ ]]; then
            # Pre-fill with the auto-generated message for editing
            read -p "Edit message [$commit_summary]: " edited_msg
            # If user just hits enter, use the original message
            if [ -z "$edited_msg" ]; then
                msg="$commit_summary"
            else
                # Combine auto message with user's edit
                msg="$commit_summary - $edited_msg"
            fi
        else
            # If neither Y nor E, treat the input as a completely new message
            msg="$msg_choice"
        fi
        
        git commit -m "$msg"
        git push $remote $branch
        
        echo "Changes pushed to Git successfully!"
    fi
else
    echo "Update ACTIVEthemeid.sh file to desired theme id and run again"
    exit 1
fi

#!/bin/bash

# READMEactivethemeinfoupdater.sh
# Updates README.md with current theme information from Shopify CLI

# Configuration
THEME_DIR="/Users/blakepetipas/Code Repos/KCS Shopify Theme"
README_FILE="$THEME_DIR/README.md"
STORE="aeb786-12.myshopify.com"

# Source the active theme ID from configuration file
ACTIVE_THEME_CONFIG="/Users/blakepetipas/Code Repos/Codebase/Shopify CLI Actions/ACTIVEthemeid.sh"

if [ -f "$ACTIVE_THEME_CONFIG" ]; then
    source "$ACTIVE_THEME_CONFIG"
    echo -e "${GREEN}📋 Using theme ID from config: $THEME_ID${NC}"
else
    echo -e "${RED}❌ Error: Cannot find theme ID config file: $ACTIVE_THEME_CONFIG${NC}"
    exit 1
fi

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}=
 Getting theme information...${NC}"

# Change to theme directory and run shopify theme info
cd "$THEME_DIR" || {
    echo -e "${RED}L Error: Cannot access theme directory: $THEME_DIR${NC}"
    exit 1
}

# Get theme info and capture output
THEME_INFO=$(shopify theme info --theme "$THEME_ID" --store "$STORE" 2>&1)

if [ $? -ne 0 ]; then
    echo -e "${RED}L Error: Failed to get theme information${NC}"
    echo "$THEME_INFO"
    exit 1
fi

echo -e "${GREEN} Theme information retrieved successfully${NC}"

# Parse the theme name from the output
THEME_NAME=$(echo "$THEME_INFO" | grep -E "Name.*" | sed 's/.*Name[[:space:]]*\(.*\)/\1/' | xargs)

if [ -z "$THEME_NAME" ]; then
    echo -e "${RED}L Error: Could not parse theme name from output${NC}"
    exit 1
fi

# Get current date in format: YYYY_MM_DD
CURRENT_DATE=$(date "+%Y_%m_%d")

# Create README.md if it doesn't exist
if [ ! -f "$README_FILE" ]; then
    echo -e "${YELLOW}📝 README.md not found - creating new one...${NC}"
    cat > "$README_FILE" << 'EOF'
# Kitchen & Cabinet Store - Shopify Theme

**Current Theme Name & Version:** Unknown  
**Theme ID:** Unknown
**Last Updated:** Unknown
**Last Updated Note:** Auto-created by READMEactivethemeinfoupdater.sh script

**Store URL:** kitchenandcabinetstore.com  
**Owners:** Blake Petipas & Keith Petipas  
**Supplier:** 802 Cabinetry (White-labeled)

---

## 🏗️ Theme Architecture

### Base Theme
- **Publisher:** Shopify
- **Type:** Modern block-based theme
- **Features:** Responsive design, flexible sections, TypeScript support

### KCS Custom Structure
```
├── assets/                 # Stylesheets, JS, images
│   ├── kcs_custom.css     # Main KCS overrides
│   └── global.d.ts        # TypeScript definitions
├── blocks/                # Reusable content blocks
├── config/                # Theme settings & data
├── layout/
│   └── theme.liquid       # Main layout (🟢 KCS custom code added)
├── sections/              # Theme sections
├── snippets/              # Reusable code snippets
└── templates/             # Page templates
```

---

## 🔧 Development Guidelines

### KCS Naming Convention
All custom files use the `kcs_` prefix for easy identification.

### Custom Code Markers
When adding custom code to native theme files, always use:
```liquid
{%- comment -%} 🟢🟢🟢 START KITCHENCABSTORE CUSTOM CODE {%- endcomment -%}
<!-- Your custom code here -->
{%- comment -%} 🛑🛑🛑 END KITCHENCABSTORE CUSTOM CODE {%- endcomment -%}
```

### Best Practices
1. **Always duplicate theme before editing**
2. **Use sections & blocks, avoid hardcoded HTML**
3. **Keep custom files separate for easy migration**
EOF
    echo -e "${GREEN}✅ Created new README.md with template${NC}"
fi

# Backup README before modifying
cp "$README_FILE" "$README_FILE.backup"

echo -e "${YELLOW}=� Updating README.md...${NC}"

# Update the four fields in README.md
# Using | as delimiter instead of / to handle special characters in theme names
sed -i '' \
    -e "s|\*\*Current Theme Name & Version:\*\* .*|\*\*Current Theme Name \& Version:\*\* $THEME_NAME|" \
    -e "s|\*\*Theme ID:\*\* .*|\*\*Theme ID:\*\* $THEME_ID|" \
    -e "s|\*\*Last Updated:\*\* .*|\*\*Last Updated:\*\* $CURRENT_DATE|" \
    -e "s|\*\*Last Updated Note:\*\* .*|\*\*Last Updated Note:\*\* Auto-updated via READMEactivethemeinfoupdater.sh script|" \
    "$README_FILE"

if [ $? -eq 0 ]; then
    echo -e "${GREEN} README.md updated successfully!${NC}"
    echo -e "${GREEN}=� Updated information:${NC}"
    echo -e "   Theme Name: $THEME_NAME"
    echo -e "   Theme ID: $THEME_ID"
    echo -e "   Last Updated: $CURRENT_DATE"
    echo -e "   Note: Auto-updated via READMEactivethemeinfoupdater.sh script"
    
    # Clean up backup file
    rm "$README_FILE.backup"
else
    echo -e "${RED}L Error: Failed to update README.md${NC}"
    # Restore backup
    mv "$README_FILE.backup" "$README_FILE"
    exit 11
fi

echo -e "${GREEN}<� Script completed successfully!${NC}"
# Dynamic Product Options App for Shopify - User Guide

## 1. Introduction

The Dynamic Product Options (DPO) app for Shopify enables creation of complex option-based products with a simple and convenient configuration interface for custom options.

### Key Features

#### Product Options Editor
Simplifies creating custom options with unlimited sections and options, various field types, reordering capabilities, visibility management, and conditional logic.

#### Product Options per Product Variant
Create and manage custom options for individual product variants with different configurations for different variants.

#### Field Types
Available field types include:
- Input Box
- Textarea
- File
- Dropdown
- Radio Buttons
- Check Boxes
- Multiple Select
- Date
- Image
- DIV/HTML

Includes support for text, color, image, and rich-text swatches.

#### Dependent Custom Options
Enhanced conditional logic builder enables dependent fields (Hidden Option 2 depends on Visible Option 1) with unlimited dependent fields and section visibility management.

#### Associated Custom Options
Create bundle offers by associating custom options to existing products with full inventory support.

#### Product Options Templates and Mass Actions
- Add and manage option templates
- Update custom options within templates using mass action tools
- Copy and apply options to multiple products in bulk
- Replace or append options within templates

#### Advanced Options Pricing
- Individual pricing for custom options
- Tier pricing for bulk purchases
- Override, remove, or add option prices, SKUs, and weights
- Setup fees based on custom options (single charge independent of quantity)

#### Visual Enhancements
- Custom images for Dropdown, Radio Buttons, Check Boxes, and Multiple Select options
- Base image replacement with chosen options
- Solid colors per option using color selector
- Text and color swatches
- Tooltips with WYSIWYG editor for hints and additional information

#### Advanced Design Editors
Built-in CSS and JavaScript editors for customizing option appearance to match website design.

## 2. How to Use

### 2.1. Settings

Access settings via: **Apps > Dynamic Product Options > Settings**

#### General Settings

| Setting | Description |
|---------|-------------|
| App Enabled on Storefront | Yes/No - Enable or disable app functionality on storefront |

#### Storefront Theme Bindings

Contains jQuery selectors for binding app functionality to your theme. Default values work with most Shopify themes. Contact support for assistance with custom selectors if needed.

#### Storefront Translations

Modify customer-facing text for non-English sites. All translations can be configured here.

### 2.2. List of Products

Access via: **Apps > Dynamic Product Options > Product Options**

Features:
- Filterable and sortable product list
- "Has Options" column shows products with custom options
- Edit options via "Edit Options" button

#### 2.2.1. Mass Actions

Select multiple products and choose from available mass actions:

##### 2.2.1.1. Apply Template 1 to Many

Load custom options from template to multiple products with four methods:

| Method | Description |
|--------|-------------|
| Replace options and leave editable | Template replaces options; remain editable in products |
| Append options and leave editable | Options added to existing; remain editable; multiple templates possible |
| Replace options and associate to template | Options copied and associated; changes in template auto-apply to products |
| Append options and associate to template | Combines append and associate; multiple templates possible |

##### 2.2.1.2. Copy Custom Options 1 to Many

Copy options between products without templates. Copies both custom options and price formulas.

##### 2.2.1.3. Copy Formulas 1 to Many

Copies only formulas between products. Useful for same formulas with different custom options.

##### 2.2.1.4. Remove Options in Selected Products

Removes custom options and price formulas from selected products.

### 2.3. Product Options Configuration

Edit custom options via: **Apps > Product Options > {Edit Options}**

Page sections:
1. Custom options management
2. CSS and JavaScript editors
3. Price formula management
4. Product information and variant scope switcher
5. Form Settings
6. Option template management

#### 2.3.1. Product Information and Variant Scope Switcher

Displays product image, name, and price. For products with variants:
- "Default Config" - applies to all variants
- Select specific variant to override options individually

#### 2.3.2. Form Settings

##### 2.3.2.1. Form Style and Appearance

**Form Styles:**
| Style | Description |
|-------|-------------|
| List DIV-based | Simple structure, one option per row |
| Table-based | Table structure with rows and columns |
| Table-based with sections | Table structure divided into sections with titles and visibility conditions |

**Form Appearances:**
| Appearance | Description |
|------------|-------------|
| On Product View | Options displayed directly on product page |
| In Popup after "Add to Cart" | Options in popup after clicking Add to Cart |
| In Popup after "Configure" | Options in popup after clicking Configure button |

##### 2.3.2.2. Pricing Policies

| Policy | Description |
|--------|-------------|
| Relative Pricing | Final price = initial product price + paid custom options |
| Absolute Pricing | Final price = sum of paid custom options only |
| Fixed Pricing | Final price = product's initial price (ignores option prices) |

##### 2.3.2.3. SKU Policies

| Policy | Description |
|--------|-------------|
| Relative SKU | Combines product SKU with option SKUs: `{baseSku}-{option3Sku}-{option5Sku}` |
| Absolute SKU | Only option SKUs: `{option3SKU}-{option5SKU}` |
| Fixed SKU | Product's base SKU only |

##### 2.3.2.4. Weight Policies

| Policy | Description |
|--------|-------------|
| Relative Weight | Product base weight + selected option weights |
| Absolute Weight | Sum of selected option weights only |
| Fixed Weight | Product's base weight only |

#### 2.3.3. Option Template Management

| Action | Description |
|--------|-------------|
| Load Existing Template | Select and load template with four methods (see 2.2.1.1) |
| Update Existing Template | Update chosen template with current configuration |
| Create New Template | Create new template from current configuration |

#### 2.3.4. Options Configuration

Default setup: One section with 3x3 table
- Change table size with Columns/Rows dropdowns
- Add sections with "Add New Section" button
- Create options by clicking "pen" icon in empty cells
- Drag & drop to move options

**Section Properties:**
- Section Label - customer-visible title
- Visibility conditions - hide/show based on field selections
- Remove/reorder sections with respective links

##### 2.3.4.1. General Settings (All Field Types)

| Setting | Description |
|---------|-------------|
| Copy Configuration From | Copy configuration from another option |
| Title | Customer-visible option label |
| Field ID | Unique identifier for dependency rules |
| Required | Set as required or optional |
| Price | Positive or negative monetary value |
| Price Type | Fixed amount or percentage of base price |
| SKU | Option's SKU if needed |
| Customer Group | Control visibility by customer group |
| Visibility/Make it | Conditional branching settings |
| Tooltip | Hover information with WYSIWYG editor |
| Comment | Displayed below option on storefront |
| CSS Class | Custom CSS class for styling |
| HTML Argument | Additional HTML tag arguments |

##### 2.3.4.2. Input Box Properties

Additional settings:
- **Validation**: Email, Number, Money, Phone, Zip Code
- **Max Len**: Maximum character limit
- **Default Value**: Pre-filled text
- **Hide on focus**: Clear default text on focus

##### 2.3.4.3. Textarea Properties

Additional settings:
- **Default Value**: Pre-filled text
- **Hide on focus**: Clear default text on focus

##### 2.3.4.4. File Properties

Additional settings:
- **Allowed File Extensions**: Comma-separated list (e.g., `png, jpg, jpeg, gif`)

##### 2.3.4.5. Dropdown Properties

Each dropdown option includes:

| Setting | Description |
|---------|-------------|
| Title | Option label |
| Image SRC | Upload custom image |
| Color | Solid color via selector |
| Base Img? | Replace base product image |
| Price | Option price |
| Price Type | Fixed or percentage |
| Onetime Fee? | Single charge regardless of quantity |
| Tier | Tier pricing for bulk |
| SKU/Product ID | Fixed SKU or product association |
| Weight | Added to base weight for shipping |
| Qty | Show quantity field |
| Def | Set as default selection |
| Visibility conditions | Dependency rules |
| Tooltip | Hover information |
| User Groups | Group visibility |
| CSS Class | Custom styling |
| Order | Display order |

**Tier Pricing Configuration:**
```
Min QTY | Price | Price Type
--------|-------|------------
1       | 10.00 | Fixed
10      | 9.00  | Fixed
25      | 8.00  | Fixed
```

##### 2.3.4.6-8. Radio Buttons, Check Boxes, Multiple Select

Share same properties as Dropdown (see 2.3.4.5)

##### 2.3.4.9. Date Properties

Adds input box with date selector (calendar) on storefront.

##### 2.3.4.10. Image Properties

Additional settings:
- **Upload Image**: Select image file
- **Image ALT**: Alternate text
- **Image Title**: Image title

##### 2.3.4.11. DIV/HTML Properties

Add custom HTML elements: tables, images, videos, JS widgets, etc.

#### 2.3.5. CSS and JavaScript Editors

**CSS Adjustment**: Add custom styles for colors, fonts, margins, backgrounds, etc.

**Extra JavaScript**: Embed custom JS functionality, 3rd-party widgets, AJAX, custom validation (requires JavaScript experience).

### 2.4. Customer Groups

Access via: **Apps > Dynamic Product Options > Customer Groups**

System groups:
- NOT LOGGED IN
- Registered

Actions:
- Create new groups
- Edit existing groups
- Remove groups (except system groups)
- Mass remove multiple groups

#### 2.4.1. Create/Edit Group

Enter group name and click "Create Group" or "Remove Group" to delete.

#### 2.4.2. Add Customers to Group

1. Click "Add Customer"
2. Search by name or email
3. Click "+ Add Customer to Group"
4. Remove with "Remove from Group"

### 2.5. Product Option Templates

Access via: **Apps > Dynamic Product Options > Templates**

Features:
- Create new templates
- Edit existing templates
- Clone templates for variations
- Remove single or multiple templates

#### 2.5.1. Edit Template

Configuration blocks:
1. **Template Configuration**: Set unique name
2. **Settings**: Form style, appearance, pricing policies
3. **Custom Option Editor**: Configure options
4. **CSS/JavaScript editors**: Style adjustments

Actions:
- **Save**: Save changes
- **Save & Apply to Products**: Update all associated products (shows progress bar)

### 2.6. Dependent Custom Options

Create chains of dependent options to save space and show relevant options only.

**Configuration Steps:**

1. Select field to make dependent
2. Open field editor
3. Configure visibility settings:
   - **Visibility**: Hidden/Visible/Disabled
   - **Make it**: Visible/Hidden when conditions met
   - **If**: Set conditions

**Example Condition:**
```javascript
F2 == 'Leno Weave'
// Where F2 is field ID, == is condition, 'Leno Weave' is trigger value
```

Complex chains and multiple field dependencies supported.

### 2.7. Product Associated Options

Associate options to other products for bundle offers with inventory support.

**Setup Steps:**

1. Create option (checkbox, radio, dropdown, multiple select)
2. Click "+Link" in SKU/Product ID column
3. Select product to associate
4. Option properties auto-populate (image, title, price, SKU)
5. Edit properties if needed
6. Save changes

**Features:**
- Out-of-stock options grayed out and disabled
- Associated product inventory deducted on checkout
- Individual quantities per option supported
- Price calculation: `{option qty} × {option price}`

### 2.8. Text, Image, Color and Rich-Text Swatches

**Swatch Types:**

| Type | Configuration |
|------|--------------|
| Color | Use color selector, check "Swatch" |
| Image | Upload image, check "Swatch" |
| Text | No image/color, check "Swatch" only |
| Rich-Text | Click "pen" in Swatch column, use WYSIWYG editor |

**Base Image Replacement**: Check "Base Img?" to replace main product image with swatch selection.

### 2.9. Swatches in Dropdown

Create searchable dropdown with image/color swatches:
1. Create Dropdown option type
2. Configure color or image swatches
3. Options become searchable by keyword

### 2.10. Tooltips

Add hover information with WYSIWYG editor:
- Notes
- Links
- Tables
- Images
- Videos

Click "Edit" icon in Tooltip column to create.

### 2.11. Math Formula Pricing

Create custom mathematical formulas for price calculation based on customer selections.

**Use Cases:**
- Size/dimension-based pricing
- Complex tier pricing
- Single setup fees for bulk
- Multi-option dependent fees

#### 2.11.1. Formula Creation

Access: **Apps > Dynamic Product Options > {product} > Price Formulas**

#### 2.11.2. Formula Editor Elements

| Element | Description |
|---------|-------------|
| Name | Formula title (not visible to customers) |
| Position | Execution order for multiple formulas |
| Status | Enable/disable formula |
| Date From/To | Limited promotion date range |
| Customer Group | Groups formula applies to |
| Apply Formula To | Item Price or Row Total |
| Show Product Price as | Default or Multiplied by QTY |
| Condition | When formula executes |
| Run always | Disable conditions |
| Price= | Formula calculation |
| Weight override | Custom shipping weight formula |
| Else? | Fork conditions |
| Validation | Custom error criteria |

#### 2.11.3. Using Custom Options in Formulas

**Variable Format:** `{option_sku}`

**Variable Types:**

| Type | Returns | Example |
|------|---------|---------|
| Input/Textarea | String/Number | `{width}`, `{len}` |
| Dropdown/Checkbox/Radio | Sub-option title | `{red}`, `{blue}` |
| Option price | Price value | `{leather.price}` |
| Text length | Character count | `{custom_text.length}` |
| Option quantity | Quantity value | `{ram.qty}` |

**Example Formulas:**

```javascript
// Area calculation
{width} * {len} * 0.8

// Conditional pricing
if ({red} || {blue}) Price = 10;
else if ({green} && {qty} > 20) Price = 8;

// Text length pricing
if ({custom_text.length} > 0) Price = {custom_text.length} * 0.02;
```

#### 2.11.4. System Variables

| Variable | Description |
|----------|-------------|
| `{qty}` | Selected quantity |
| `{configured_price}` | Price after options selected |
| `{initial_price}` | Price before options |
| `{price}` | Price after calculations |

#### 2.11.5. Accumulative Price

Chain multiple formulas with position order:

```javascript
// Formula 1: Material price
if ({cloth} && {width} > 0 && {len} > 0) 
    Price = {width} * {len} * 5;
else if ({leather} && {width} > 0 && {len} > 0) 
    Price = {width} * {len} * 10;

// Formula 2: Additional items
if ({chair}) 
    Price = {price} + 50 * {chair.qty}

// Formula 3: Bulk discount
if ({qty} < 10) Price = {price} * 1;
else if ({qty} < 20) Price = {price} * 0.9;
else if ({qty} < 30) Price = {price} * 0.8;
else Price = {price} * 0.7;
```

#### 2.11.6. Sub-Conditions

Inline conditional syntax:

```javascript
Price = {price} + ({size10} ? 24.99 : 0) + ({size20} ? 44.99 : 0);
```

#### 2.11.7. Mathematical Functions

Example with trigonometry:

```javascript
if ({side1} > 0 && {side2} > 0 && {angle} > 10) 
    Price = 0.5 * {side1} * {side2} * sin({angle}) * {rate}
```

## Appendix A: Formula Reference

### Condition and Math Operators

| Operator | Explanation | Example |
|----------|-------------|---------|
| `()` | Sub condition | `({sku1} + {sku2}) / PI` |
| `+` | Addition | `{sku1} + 10` |
| `-` | Subtraction | `{sku1} - 10` |
| `*` | Multiplication | `2 * PI * {sku_radius}` |
| `/` | Division | `{sku1} / 1.5` |

### Math Functions

| Function | Explanation |
|----------|-------------|
| `abs(x)` | Absolute value of x |
| `acos(x)` | Arccosine of x (radians) |
| `asin(x)` | Arcsine of x (radians) |
| `atan(x)` | Arctangent of x (-PI/2 to PI/2) |
| `atan2(y,x)` | Arctangent of quotient |
| `ceil(x)` | Round up to nearest integer |
| `cos(x)` | Cosine of x (radians) |
| `exp(x)` | Value of E^x |
| `floor(x)` | Round down to nearest integer |
| `log(x)` | Natural logarithm (base E) |
| `max(x,y,z,...,n)` | Highest value |
| `min(x,y,z,...,n)` | Lowest value |
| `pow(x,y)` | x to power of y |
| `random()` | Random number 0-1 |
| `round(x)` | Round to nearest integer |
| `sin(x)` | Sine of x (radians) |
| `sqrt(x)` | Square root of x |
| `tan(x)` | Tangent of angle |

### Constants

| Constant | Value | Description |
|----------|-------|-------------|
| `E` | ~2.718 | Euler's number |
| `LN2` | ~0.693 | Natural log of 2 |
| `LN10` | ~2.302 | Natural log of 10 |
| `LOG2E` | ~1.442 | Base-2 log of E |
| `LOG10E` | ~0.434 | Base-10 log of E |
| `PI` | ~3.14 | Pi |
| `SQRT1_2` | ~0.707 | Square root of 1/2 |
| `SQRT2` | ~1.414 | Square root of 2 |

### Formula Variables

| Variable | Explanation |
|----------|-------------|
| `{configured_price}` | Price after product options selected |
| `{initial_price}` | Price before options selected |
| `{price}` | Price after all calculations applied |
| `{option_sku}` | Call any product option by its SKU |
| `{option_sku.qty}` | Quantity of sub-option |
| `{option_sku.price}` | Price of option by SKU |
| `{option_sku.length}` | Length of entered text |
| `{qty}` | Product quantity selected |

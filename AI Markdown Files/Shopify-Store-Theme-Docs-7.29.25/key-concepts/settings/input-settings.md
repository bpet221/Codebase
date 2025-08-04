---
title: "Input settings"
source: https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings
sections: Key concepts > Settings
created: 2025-07-29 15:23:43
---

Title: Input settings

URL Source: https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings

Markdown Content:
Input settings can hold a value and are configurable by merchants.

Input settings are generally composed of [standard attributes](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#standard-attributes), and there are two categories:

*   [Basic input settings](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#basic-input-settings)
*   [Specialized input settings](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#specialized-input-settings)

To learn how to access the values of these settings for use in your theme, refer to the [settings overview](https://shopify.dev/docs/storefronts/themes/architecture/settings#access-settings).

The following are standard attributes across input settings. However, depending on the input type, there might be extra attributes or some might not apply:

| Attribute | Description | Required |
| --- | --- | --- |
| `type` | The setting type, which can be any of the [basic](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#basic-input-settings) or [specialized](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#specialized-input-settings) input setting types. | Yes |
| `id` | The setting ID, which is used to access the setting value. | Yes |
| `label` | The setting label, which will show in the theme editor. | Yes |
| `default` | The default value for the setting. | No |
| `info` | An option for informational text about the setting. | No |

The following are the basic input setting types:

*   [checkbox](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#checkbox)
*   [number](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#number)
*   [radio](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#radio)
*   [range](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#range)
*   [select](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#select)
*   [text](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#text)
*   [textarea](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#textarea)

A setting of type `checkbox` outputs a checkbox field. This setting type can be used for toggling features on and off, such as whether to show an announcement bar.

For example, the following setting generates the following output:

Setting

Copy

Output

![Image 1: checkbox setting](https://shopify.dev/assets/themes/settings/basic/checkbox.png)

When accessing the value of a `checkbox` type setting, data is returned as a [boolean](https://shopify.dev/docs/api/liquid/basics/types#boolean).

A setting of type `number` outputs a single number field. In addition to the [standard attributes](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#standard-attributes) of an input setting, `number` type settings have the following attribute:

| Attribute | Description | Required |
| --- | --- | --- |
| `placeholder` | A placeholder value for the input. These values only appear for settings defined in `settings_schema.json`. They don't appear for settings defined in a section's schema. | No |

You can use this setting type to capture a varying numerical value, such as the number of products to show per page on a collection page.

For example, the following setting generates the following output:

Setting

Copy

Output

![Image 2: number setting](https://shopify.dev/assets/themes/settings/basic/number.png)

When accessing the value of a `number` type setting, data is returned in one of the following formats:

*   [A number](https://shopify.dev/docs/api/liquid/basics/types#number).
*   [nil](https://shopify.dev/docs/api/liquid/basics/types#nil), if nothing has been entered.

A setting of type `radio` outputs a radio option field. In addition to the [standard attributes](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#standard-attributes) of an input setting, `radio` type settings have a required `options` attribute that accepts an array of `value` and `label` definitions.

You can use this setting type to capture a multi-option selection, such as the alignment of a header logo.

For example, the following setting generates the following output:

Setting

Copy

Output

![Image 3: radio setting](https://shopify.dev/assets/themes/settings/basic/radio.png)

When accessing the value of a `radio` type setting, data is returned as a [string](https://shopify.dev/docs/api/liquid/basics/types#string).

A setting of type `range` outputs a range slider field with an input field. In addition to the [standard attributes](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#standard-attributes) of an input setting, `range` type settings have the following attributes:

| Attribute | Description | Required |
| --- | --- | --- |
| `min` | The minimum value of the input | Yes |
| `max` | The maximum value of the input | Yes |
| `step` | The increment size between steps of the slider. Defaults to `1` when omitted. | No |
| `unit` | The unit for the input. For example, you can set `px` for a font-size slider. | No |

You can use this setting type to capture a varying numerical value, such as font size.

You can update the `range` value using the provided slider, or by typing a value into the input field:

*   If you enter a value that doesn't respect the `step` definition, then the value rounds to the closest step.
*   If you enter a value outside of the given `min` and `max`, then the value reverts to the `min` or `max` value accordingly.

For example, the following setting generates the following output:

Setting

Copy

Output

![Image 4: range setting](https://shopify.dev/assets/themes/settings/basic/range.png)

When accessing the value of a `range` type setting, data is returned as a [number](https://shopify.dev/docs/api/liquid/basics/types#number).

A setting of type `select` outputs [different selector fields](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#selector-fields), depending on certain criteria. In addition to the [standard attributes](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#standard-attributes) of an input setting, `select` type settings have the following attributes:

The additional attributes that the select type settings supports| Attribute | Description | Required |
| --- | --- | --- |
| `options` | Takes an array of `value`/`label` definitions for each option in the drop-down. | Yes |
| `group` | An optional attribute that you can add to each option to create option groups in the drop-down. | No |

The following criteria render selector fields as either a `DropDown` or a `SegmentedControl`:

The rendering criteria for selector fields| Field | Rendering criteria | Output |
| --- | --- | --- |
| `Dropdown` | * The optional `group` attribute is used. * More than five options are provided. * The options are too long and might overflow their container. | ![Image 5: select setting](https://shopify.dev/assets/themes/settings/basic/select_dropdown.png) |
| `SegmentedControl` | * The optional `group` attribute isn't used. * Two to five options are provided. * All options fit within their container and don't overflow. | ![Image 6: select setting](https://shopify.dev/assets/themes/settings/basic/select_segmented_control.png) |

You can use this setting type to capture a multi-option selection, such as the vertical alignment of slideshow text.

For example, the following setting generates the following output:

Setting

Copy

Output

![Image 7: select setting](https://shopify.dev/assets/themes/settings/basic/select_segmented_control.png)

However, if your setting matches the criteria for a drop-down field (`DropDown`) because it has more than five options, then the following output is generated:

Setting

Copy

Output

![Image 8: select setting](https://shopify.dev/assets/themes/settings/basic/select_dropdown.png)

When accessing the value of a `select` type setting, data is returned as a [string](https://shopify.dev/docs/api/liquid/basics/types#string).

A setting of type `text` outputs a single-line text field. In addition to the [standard attributes](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#standard-attributes) of an input setting, `text` type settings have the following attribute:

| Attribute | Description | Required |
| --- | --- | --- |
| `placeholder` | A placeholder value for the input. These values only appear for settings defined in `settings_schema.json`. They don't appear for settings defined in a section's schema. | No |

You can use this setting type to capture short strings, such as titles.

For example, the following setting generates the following output

Setting

Copy

Output

![Image 9: text setting](https://shopify.dev/assets/themes/settings/basic/text.png)

When accessing the value of a `text` type setting, data is returned in one of the following formats:

*   A [string](https://shopify.dev/docs/api/liquid/basics/types#string).
*   An [`empty` object](https://shopify.dev/docs/api/liquid/basics/types#emptydrop), if nothing has been entered.

A setting of type `textarea` outputs a multi-line text field. In addition to the [standard attributes](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#standard-attributes) of an input setting, `textarea` type settings have the following attribute:

| Attribute | Description | Required |
| --- | --- | --- |
| `placeholder` | A placeholder value for the input. These values only appear for settings defined in `settings_schema.json`. They don't appear for settings defined in a section's schema. | No |

You can use this setting type to capture larger blocks of text, such as messages.

For example, the following setting generates the following output:

Setting

Copy

Output

![Image 10: textarea setting](https://shopify.dev/assets/themes/settings/basic/textarea.png)

When accessing the value of a `textarea` type setting, data is returned in one of the following formats:

*   A [string](https://shopify.dev/docs/api/liquid/basics/types#string).
*   An [`empty` object](https://shopify.dev/docs/api/liquid/basics/types#emptydrop), if nothing has been entered.

The following are the specialized input setting types:

*   [article](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#article)
*   [blog](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#blog)
*   [collection](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#collection)
*   [collection_list](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#collection_list)
*   [color](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#color)
*   [color_background](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#color_background)
*   [color_scheme](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#color_scheme)
*   [color_scheme_group](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#color_scheme_group)
*   [font_picker](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#font_picker)
*   [html](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#html)
*   [image_picker](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#image_picker)
*   [inline_richtext](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#inline_richtext)
*   [link_list](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#link_list)
*   [liquid](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#liquid)
*   [metaobject](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#metaobject)
*   [metaobject_list](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#metaobject_list)
*   [page](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#page)
*   [product](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#product)
*   [product_list](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#product_list)
*   [richtext](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#richtext)
*   [text_alignment](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#text_alignment)
*   [url](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#url)
*   [video](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#video)
*   [video_url](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#video_url)

A setting of type `article` outputs an article picker field that's automatically populated with the available articles for the store. You can use this setting type to capture an article selection, such as the article to feature on the homepage.

For example, the following setting generates the following output:

Setting

Copy

Output

![Image 11: article setting](https://shopify.dev/assets/themes/settings/specialized/article.png)

When accessing the value of an `article` type setting, data is returned in one of the following formats:

*   An [`article` object](https://shopify.dev/docs/api/liquid/objects/article).

To ensure backwards compatibility with [legacy resource-based settings](https://shopify.dev/docs/storefronts/themes/architecture/settings#legacy-resource-based-settings), outputting the setting directly will return the object's handle.

*   `blank` if no selection has been made, the selection isn't visible, or the selection no longer exists

A setting of type `blog` outputs a blog picker field that's automatically populated with the available blogs for the store. You can use this setting type to capture a blog selection, such as the blog to feature in the sidebar.

For example, the following setting generates the following output:

Setting

Copy

Output

![Image 12: blog setting](https://shopify.dev/assets/themes/settings/specialized/blog.png)

When accessing the value of a `blog` type setting, data is returned in one of the following formats:

*   A [`blog` object](https://shopify.dev/docs/api/liquid/objects/blog).

To ensure backwards compatibility with [legacy resource-based settings](https://shopify.dev/docs/storefronts/themes/architecture/settings#legacy-resource-based-settings), outputting the setting directly will return the object's handle.

*   `blank`, if either no selection has been made or the selection no longer exists.

A setting of type `collection` outputs a collection picker field that's automatically populated with the available collections for the store. You can use this setting type to capture a collection selection, such as a collection for featuring products on the homepage.

For example, the following setting generates the following output:

Setting

Copy

Output

![Image 13: collection setting](https://shopify.dev/assets/themes/settings/specialized/collection.png)

When accessing the value of a `collection` type setting, data is returned in one of the following formats:

*   A [`collection` object](https://shopify.dev/docs/api/liquid/objects/collection).

To ensure backwards compatibility with [legacy resource-based settings](https://shopify.dev/docs/storefronts/themes/architecture/settings#legacy-resource-based-settings), outputting the setting directly will return the object's handle.

*   `blank`, if no selection has been made, the selection isn't visible, or the selection no longer exists.

A setting of type `collection_list` outputs a collection picker field that's automatically populated with the available collections for the store. You can use this setting type to capture multiple collections, such as a group of collections to feature on the homepage.

In addition to the [standard attributes](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#standard-attributes) of an input setting, `collection_list` type settings have the following attributes:

| Attribute | Description | Required |
| --- | --- | --- |
| `limit` | The maximum number of collections that the merchant can select. The default limit, and the maximum limit you can set, is 50. | No |

Setting

Copy

Output

![Image 14: collection_list setting](https://shopify.dev/assets/themes/settings/specialized/collection_list.png)

Output

![Image 15: collection_list setting selector](https://shopify.dev/assets/themes/settings/specialized/collection_list-detail.png)

When accessing the value of a `collection_list` type setting, data is returned in one of the following formats:

*   An array of [`collection` objects](https://shopify.dev/docs/api/liquid/objects/collection)

The array supports pagination using the [paginate](https://shopify.dev/docs/api/liquid/tags/paginate#paginate-paginating-setting-arrays) tag. You can also append `.count` to the [setting key](https://shopify.dev/docs/storefronts/themes/architecture/settings#access-settings) to return the number of collections in the array.

*   `blank` if no selection has been made, the selection isn't visible, or the selection no longer exists

A setting of type `color` outputs a color picker field. You can use this setting type to capture a color selection for various theme elements, such as the body text color.

For example, the following setting generates the following output:

Setting

Copy

Output

![Image 16: color setting picker](https://shopify.dev/assets/themes/settings/specialized/color.png)

When accessing the value of a `color` type setting, data is returned in one of the following formats:

*   A [`color` object](https://shopify.dev/docs/api/liquid/objects/color).
*   `blank`, if no selection has been made.

A setting of type `color_background` outputs a text field for entering [CSS background](https://developer.mozilla.org/en-US/docs/Web/CSS/background) properties. You can use this setting type to capture background settings for various theme elements, such as the store background.

For example, the following setting generates the following output:

Setting

Copy

Output

![Image 17: color_background setting input](https://shopify.dev/assets/themes/settings/specialized/color-background-input.png)

When accessing the value of a `color_background` type setting, data is returned in one of the following formats:

*   A [string](https://shopify.dev/docs/api/liquid/basics/types#string).
*   An empty string, if nothing has been entered.

A setting of type `color_scheme` outputs a picker with all of the available theme color schemes, and a preview of the selected color scheme. Theme color schemes in the picker are defined using the [`color_scheme_group`](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#color_scheme_group) setting. You can apply a color scheme to sections, blocks and general theme settings. Color scheme settings aren't supported in app blocks.

For example, the following setting generates the following output:

Setting

Copy

Output

![Image 18: color scheme setting](https://shopify.dev/assets/themes/settings/specialized/color_scheme.png)

When accessing the value of a `color_scheme` type setting, Shopify returns the selected `color_scheme` object from `color_scheme_group`.

If no value was entered, or the value was invalid, then the default value from `color_scheme` is returned. If the default value is also invalid, then the first `color_scheme` from `color_scheme_group` is returned.

If the theme doesn't have `color_scheme_group` data in `settings_data.json`, then [nil](https://shopify.dev/docs/api/liquid/basics/types#nil) is returned.

A setting of type `color_scheme_group` outputs a color scheme which is composed of the following input setting types:

*   `header`
*   `color`
*   `color_background`

Color schemes can be added only in `settings_schema.json`.

For example, the following setting generates the following output:

Setting

Copy

Output

![Image 19: color_scheme_group setting input](https://shopify.dev/assets/themes/settings/specialized/color_scheme_group.png)

The `role` field outputs a color scheme preview. The color scheme previews are visible to merchants anywhere in the editor where they might pick a color scheme. You can assign roles to your color scheme definitions to map the color scheme to the previews. For example you can assign `role.background` to the `Background` definition. Role uses the following standardized mapping of the `color_scheme_group` definition to the color scheme preview:

| Role | Description | Required? | Gradient? |
| --- | --- | --- | --- |
| `role.background` | Renders the background color of the preview | Yes | Optional |
| `role.text` | Renders the text color of the preview | Yes | No |
| `role.primary_button``role.secondary_button` | Render the 1st and 2nd pills in the preview | Yes | Optional |
| `role.primary_button_border``role.secondary_button_border` | Render the 1st and 2nd pills' border in the preview | Yes | No |
| `role.on_primary_button``role.on_secondary_button` | Aren't used in the preview | Yes | No |
| `role.links``role.icons` | Aren't used in the preview | Yes | No |

![Image 20: color scheme mapping](https://shopify.dev/assets/themes/settings/specialized/color-scheme-mapping-792b4bfd1f60e6a04874a32faca6780c03759ad3cab979103615045dd5f5f25c.png)

A setting of type `font_picker` outputs a font picker field that's automatically populated with fonts from the [Shopify font library](https://shopify.dev/docs/storefronts/themes/architecture/settings/fonts#shopify-font-library). This library includes system fonts and a selection of Google Fonts.

You can use this setting type to capture a font selection for various theme elements, such as the base heading font.

For example, the following setting generates the following output:

Setting

Copy

Output

![Image 21: font setting](https://shopify.dev/assets/themes/settings/specialized/font_picker.png)

When accessing the value of a `font_picker` type setting, data is returned as a [`font` object](https://shopify.dev/docs/api/liquid/objects/font).

A setting of type `html` outputs a multi-line text field that accepts HTML markup. In addition to the [standard attributes](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#standard-attributes) of an input setting, `html` type settings have the following attribute:

| Attribute | Description | Required |
| --- | --- | --- |
| `placeholder` | A placeholder value for the input | No |

You can use this setting type to capture custom blocks of HTML content, such as a video embed.

For example, the following setting generates the following output:

Setting

Copy

Output

![Image 22: html setting](https://shopify.dev/assets/themes/settings/specialized/html.png)

The following HTML tags will be automatically removed:

*   `<html>`
*   `<head>`
*   `<body>`

When accessing the value of an `html` type setting, data is returned in one of the following formats:

*   A [string](https://shopify.dev/docs/api/liquid/basics/types#string) that contains the entered content.
*   An [`empty` object](https://shopify.dev/docs/api/liquid/basics/types#emptydrop), if nothing has been entered.

A setting of type `image_picker` outputs an image picker field that's automatically populated with the available images from the [Files](https://help.shopify.com/manual/shopify-admin/productivity-tools/file-uploads) section of Shopify admin, and has the option to upload new images. Merchants also have an opportunity to enter alt text and select a [focal point](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#image-focal-points) for their image.

You can use this setting type to capture an image selection, such as logos, favicons, and slideshow images.

For example, the following setting generates the following output:

Setting

Copy

Output

![Image 23: image setting](https://shopify.dev/assets/themes/settings/specialized/image.png)

Output (Preview and edit modal)

![Image 24: image setting](https://shopify.dev/assets/themes/settings/specialized/image_editor.png)

When accessing the value of an `image_picker` type setting, data is returned in one of the following formats:

*   An [`image` object](https://shopify.dev/docs/api/liquid/objects/image).
*   [nil](https://shopify.dev/docs/api/liquid/basics/types#nil), if either no selection has been made or the selection no longer exists.

Images selected using an `image_picker` setting support focal points. A focal point is a position in an image that the merchant wants to remain in view as the image is cropped and adjusted by the theme. Focal points can be set in the theme editor `image_picker` setting, or from the **Files** page.

To make sure that your theme respects the focal point of the image, do the following:

*   Render your images using the [`image_tag`](https://shopify.dev/docs/api/liquid/filters/image_tag) filter.
*   Consider positioning images within containers using `object-fit: cover`.

Using `image_tag`, if a focal point was provided, then an `object-position` style is added to the image tag, with the value set to the focal point.

Input

Copy

Output

Copy

If you need override the `object-position` style for a specific use case, then pass a `style: object-position: inherit;` property to the `image_tag` filter.

A setting of type `inline_richtext` outputs HTML markup that isn't wrapped in paragraph tags (`<p>`). The setting includes the following basic formatting options:

*   Bold
*   Italic
*   Link

You can use this setting type to capture formatted text content, such as introductory brand content on the homepage.

For example, the following setting generates the following output:

Setting

Copy

Output

![Image 25: inline_richtext setting](https://shopify.dev/assets/themes/settings/specialized/inline_rich_text.png)

When accessing the value of a `inline_richtext` type setting, data is returned in one of the following formats:

*   A [string](https://shopify.dev/docs/api/liquid/basics/types#string) that contains the entered content.
*   An [`empty` object](https://shopify.dev/docs/api/liquid/basics/types#emptydrop), if nothing has been entered.

A setting of type `link_list` outputs a menu picker field that's automatically populated with the available menus for the store. You can use this setting type to capture a menu selection, such as the menu to use for footer links.

For example, the following setting generates the following output:

Setting

Copy

Output

![Image 26: link_list setting](https://shopify.dev/assets/themes/settings/specialized/linklist.png)

When accessing the value of a `link_list` type setting, data is returned in one of the following formats:

*   A [`linklist` object](https://shopify.dev/docs/api/liquid/objects/linklist).
*   `blank`, if either no selection has been made or the selection no longer exists.

A setting of type `liquid` outputs a multi-line text field that accepts HTML and [limited](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#limitations) Liquid markup. You can use this setting type to capture custom blocks of HTML and Liquid content, such as a product-specific message. Merchants can also use a liquid setting to add the code needed to integrate certain types of [apps](https://shopify.dev/docs/apps/build/online-store) into your theme.

For example, the following setting generates the following output:

Setting

Copy

Output

![Image 27: liquid setting](https://shopify.dev/assets/themes/settings/specialized/liquid.png)

When accessing the value of a `liquid` type setting, data is returned in one of the following formats:

*   A [string](https://shopify.dev/docs/api/liquid/basics/types#string) that contains the entered content.
*   An [`empty` object](https://shopify.dev/docs/api/liquid/basics/types#emptydrop), if nothing has been entered.

Settings of type `liquid` don't have access to the following liquid objects/tags:

*   [layout](https://shopify.dev/docs/api/liquid/tags/layout)
*   [content_for_header](https://shopify.dev/docs/api/liquid/objects/content_for_header)
*   [content_for_layout](https://shopify.dev/docs/api/liquid/objects/content_for_layout)
*   [content_for_index](https://shopify.dev/docs/api/liquid/objects/content_for_index)
*   [section](https://shopify.dev/docs/api/liquid/tags/section)
*   [javascript](https://shopify.dev/docs/storefronts/themes/best-practices/javascript-and-stylesheet-tags#javascript)
*   [stylesheet](https://shopify.dev/docs/storefronts/themes/best-practices/javascript-and-stylesheet-tags#stylesheet)
*   [schema](https://shopify.dev/docs/storefronts/themes/architecture/sections/section-schema)
*   [settings](https://shopify.dev/docs/api/liquid/objects/settings)

However, `liquid` settings can access the following:

*   [Global Liquid objects](https://shopify.dev/docs/api/liquid/objects)
*   Template specific objects like `collection`, `product`, etc. (within their respective templates)
*   Standard Liquid [tags](https://shopify.dev/docs/api/liquid/tags) and [filters](https://shopify.dev/docs/api/liquid/filters)

If your content includes non-existent, or empty, Liquid tags, then they will be rendered as empty strings. For example, the following setting generates the following output:

Setting

Copy

Output

A `metaobject` setting allows merchants to select metaobject entries of a designated type through a picker interface. This setting supports both standard and custom metaobject definitions:

1.   Standard metaobject definitions: These are readily available in the theme editor and do not need to be pre-enabled on a shop. An example of a standard metaobject is the `product_review` metaobject. [Learn more](https://shopify.dev/docs/apps/build/custom-data/metaobjects/list-of-standard-definitions) about current standard metaobject definitions.
2.   Custom metaobject definitions: These are designed for custom themes and require the metaobject definition to already exist. Note that custom metaobject definitions are not allowed in themes listed on the Theme Store. An example of a custom metaobject would be an `author` metaobject.

Additionally, apps can utilize `metaobject` settings with their own app-owned metaobject definitions and entries.

`metaobject` type settings have the following attributes, in addition to the [standard attributes](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#standard-attributes) of an input setting:

| Attribute | Description | Required |
| --- | --- | --- |
| `metaobject_type` | The metaobject type allowed by the picker. | Yes |

A `metaobject` setting value can be either of the following formats:

*   A [`metaobject` object](https://shopify.dev/docs/api/liquid/objects/metaobject)
*   `blank` if no selection has been made, the selection isn't visible, or the selection no longer exists

Setting

Copy

Output

![Image 28: metaobject setting](https://shopify.dev/assets/themes/settings/specialized/metaobject.png)

Setting

Copy

Output

![Image 29: metaobject setting](https://shopify.dev/assets/themes/settings/specialized/custom_metaobject.png)

*   Only a single `metaobject_type` is supported at a time, as defined in the setting's schema.
*   In order for themes to meet [publishing guidelines](https://shopify.dev/docs/storefronts/themes/store/requirements#14-settings) for the Shopify Theme Store, only standard definitions can be used. Custom or app owned definitions cannot be used.
*   When referencing a **custom** or **app created**`metaobject_type`, the definition must exist on the shop and be available to the storefront. If either condition isn't met, the setting will show an error in the theme editor.

![Image 30: metaobject-list-missing-definition](https://shopify.dev/assets/themes/settings/specialized/metaobject_error-887e9fa5912de14070d31700909d75724977001f03fc5b3799c8a727b3cf4db7.png)

Apps can leverage `metaobject` settings in their app blocks or embeds to enhance theme functionality. By creating metaobject definitions under [reserved namespaces](https://shopify.dev/docs/apps/build/custom-data/ownership#create-metaobject-definitions-with-reserved-types), apps can offer advanced configuration options for merchants while maintaining a simple user experience.

Consider an app designed to improve brand storytelling through customer testimonials. Here's a potential implementation:

1.   Create a custom metaobject definition named `Customer Testimonial`
2.   Use app blocks to collect customer data on a post-purchase page
3.   Write this data as `Customer Testimonial` metaobject entries
4.   Provide a `Testimonial` app block with a `metaobject` setting that uses the `Customer Testimonial` metaobject type
5.   Access the `metaobject` setting value in Liquid to display the selected testimonials

Setting

Copy

A `metaobject_list` setting allows merchants to select multiple metaobject entries of a designated type through a picker interface. This setting supports both standard and custom metaobject definitions:

1.   Standard metaobject definitions: These are readily available in the theme editor and do not need to be pre-enabled on a shop. An example of a standard metaobject is the `product_review` metaobject. [Learn more](https://shopify.dev/docs/apps/build/custom-data/metaobjects/list-of-standard-definitions) about current standard metaobject definitions.
2.   Custom metaobject definitions: These are designed for custom themes and require the metaobject definition to already exist. Note that custom metaobject definitions are not allowed in themes listed on the Theme Store. An example of a custom metaobject would be an `author` metaobject.

Additionally, apps can utilize `metaobject_list` settings with their own app-owned metaobject definitions and entries.

`metaobject_list` type settings have the following attributes, in addition to the [standard attributes](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#standard-attributes) of an input setting:

| Attribute | Description | Required |
| --- | --- | --- |
| `limit` | The maximum number of products that the merchant can select. The default limit, and the maximum limit you can set, is 50. | No |
| `metaobject_type` | The metaobject type allowed by the picker. | Yes |

A `metaobject_list` setting value can be either of the following formats:

*   An array of [`metaobject` objects](https://shopify.dev/docs/api/liquid/objects/metaobject)

The array supports pagination using the [paginate](https://shopify.dev/docs/api/liquid/tags/paginate#paginate-paginating-setting-arrays) tag. You can also append `.count` to the [setting key](https://shopify.dev/docs/storefronts/themes/architecture/settings#access-settings) to return the number of metaobject entries in the array.

*   `blank` if no selection has been made, the selection isn't visible, or the selection no longer exists

### Standard metaobject list example

[Anchor link to section titled "Standard metaobject list example"](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#standard-metaobject-list-example)

Setting

Copy

Output

![Image 31: metaobject_list setting](https://shopify.dev/assets/themes/settings/specialized/metaobject_list.png)

Setting

Copy

Output

![Image 32: metaobject_list setting](https://shopify.dev/assets/themes/settings/specialized/custom_metaobject_list.png)

*   Only a single `metaobject_type` is supported at a time, as defined in the setting's schema.
*   In order for themes to meet [publishing guidelines](https://shopify.dev/docs/storefronts/themes/store/requirements#14-settings) for the Shopify Theme Store, custom or app owned definitions cannot be used.
*   When referencing a **custom** or **app created**`metaobject_type`, the definition must exist on the shop and be available to the storefront. If either condition isn't met, the setting will show an error in the theme editor.

![Image 33: metaobject-list-missing-definition](https://shopify.dev/assets/themes/settings/specialized/metaobject_error-887e9fa5912de14070d31700909d75724977001f03fc5b3799c8a727b3cf4db7.png)

Apps can leverage `metaobject_list` settings in their app blocks or embeds to enhance theme functionality. By creating metaobject definitions under [reserved namespaces](https://shopify.dev/docs/apps/build/custom-data/ownership#create-metaobject-definitions-with-reserved-types), apps can offer advanced configuration options for merchants while maintaining a simple user experience. Using the same [example](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#metaobject) as above, a `Testimonials` app-block could allow merchants to select multiple testimonial entries. The `metaobject_list` setting would make this implementation possible.

Setting

Copy

A setting of type `page` outputs a page picker field that's automatically populated with the available pages for the store. You can use this setting type to capture a page selection, such as the page to feature content for in a size-chart display.

For example, the following setting generates the following output:

Setting

Copy

Output

![Image 34: page setting](https://shopify.dev/assets/themes/settings/specialized/page.png)

When accessing the value of a `page` type setting, data is returned in one of the following formats:

*   A [`page` object](https://shopify.dev/docs/api/liquid/objects/page).

To ensure backwards compatibility with [legacy resource-based settings](https://shopify.dev/docs/storefronts/themes/architecture/settings#legacy-resource-based-settings), outputting the setting directly will return the object's handle.

*   `blank`, if no selection has been made, the selection isn't visible, or the selection no longer exists.

A setting of type `product` outputs a product picker field that's automatically populated with the available products for the store. You can use this setting type to capture a product selection, such as the product to feature on the homepage.

For example, the following setting generates the following output:

Setting

Copy

Output

![Image 35: product setting](https://shopify.dev/assets/themes/settings/specialized/product.png)

When accessing the value of a `product` type setting, data is returned in one of the following formats:

*   A [`product` object](https://shopify.dev/docs/api/liquid/objects/product).

To ensure backwards compatibility with [legacy resource-based settings](https://shopify.dev/docs/storefronts/themes/architecture/settings#legacy-resource-based-settings), outputting the setting directly will return the object's handle.

*   `blank` if no selection has been made, the selection isn't visible, or the selection no longer exists

A setting of type `product_list` outputs a product picker field that's automatically populated with the available products for the store. You can use this setting type to capture multiple products, such as a group of products to feature on the homepage.

In addition to the [standard attributes](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#standard-attributes) of an input setting, `product_list` type settings have the following attributes:

| Attribute | Description | Required |
| --- | --- | --- |
| `limit` | The maximum number of products that the merchant can select. The default limit, and the maximum limit you can set, is 50. | No |

Setting

Copy

Output

![Image 36: product_list setting](https://shopify.dev/assets/themes/settings/specialized/product_list.png)

When accessing the value of a `product_list` type setting, data is returned in one of the following formats:

*   An array of [`product` objects](https://shopify.dev/docs/api/liquid/objects/product)

The array supports pagination using the [paginate](https://shopify.dev/docs/api/liquid/tags/paginate#paginate-paginating-setting-arrays) tag. You can also append `.count` to the [setting key](https://shopify.dev/docs/storefronts/themes/architecture/settings#access-settings) to return the number of products in the array.

*   `blank` if no selection has been made, the selection isn't visible, or the selection no longer exists

A setting of type `richtext` outputs a multi-line text field with the following basic formatting options:

*   Bold
*   Italic
*   Underline
*   Link
*   Paragraph
*   Unordered list

You can use this setting type to capture formatted text content, such as introductory brand content on the homepage.

For example, the following setting generates the following output:

Setting

Copy

Output

![Image 37: richtext setting](https://shopify.dev/assets/themes/settings/specialized/richtext.png)

When accessing the value of a `richtext` type setting, data is returned in one of the following formats:

*   A [string](https://shopify.dev/docs/api/liquid/basics/types#string) that contains the entered content.
*   An [`empty` object](https://shopify.dev/docs/api/liquid/basics/types#emptydrop), if nothing has been entered.

The `default` attribute isn't required. However, if it's used, then only `<p>` or `<ul>` tags are supported as top-level elements.

The following HTML tags are also supported inside the parent `<p>` tag:

*   `<p>`
*   `<br>`
*   `<strong>`
*   `<b>`
*   `<em>`
*   `<i>`
*   `<u>`
*   `<span>`
*   `<a>`

A setting of type `text_alignment` outputs a `SegmentedControl` field with icons. In addition to the [standard attributes](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#standard-attributes) of an input setting, `text_alignment` type settings support the following attribute:

The additional attributes that the text_alignment type settings supports| Attribute | Description | Required |
| --- | --- | --- |
| Default | The initially selected value. Can be one of `left`, `right`, `center`. The default value is `left`. | No |

The following default values can't be changed to a different value:

| Value | Icon presentation |
| --- | --- |
| Left | ![Image 38](https://shopify.dev/assets/themes/settings/specialized/text-alignment-left.png) |
| Right | ![Image 39](https://shopify.dev/assets/themes/settings/specialized/text-alignment-right.png) |
| Center | ![Image 40](https://shopify.dev/assets/themes/settings/specialized/text-alignment-center.png) |

For example, the following setting generates the following output:

Setting

Copy

Output

![Image 41: text_alignment setting](https://shopify.dev/assets/themes/settings/specialized/text-alignment.png)

When you access the value of a `text_alignment` type setting, data is returned as a [string](https://shopify.dev/docs/api/liquid/basics/types#string).

A setting of type `url` outputs a URL entry field where you can manually enter external URLs and relative paths. It also has a picker that's automatically populated with the following available resources for the shop:

*   Articles
*   Blogs
*   Collections
*   Pages
*   Products

You can use this setting type to capture a URL selection, such as the URL to use for a slideshow button link.

For example, the following setting generates the following output:

Setting

Copy

Output

![Image 42: url setting](https://shopify.dev/assets/themes/settings/specialized/url.png)

When accessing the value of a `url` type setting, data is returned in one of the following formats:

*   A [string](https://shopify.dev/docs/api/liquid/basics/types#string) that contains the selected URL.
*   [nil](https://shopify.dev/docs/api/liquid/basics/types#nil), if nothing has been entered.

A setting of type `video` outputs a video picker that's automatically populated with the available videos from the [Files](https://help.shopify.com/en/manual/shopify-admin/productivity-tools/file-uploads) section of the Shopify admin. The merchant also has the option to upload new videos.

For example, the following setting generates the following output:

Setting

Copy

Output

![Image 43: video setting](https://shopify.dev/assets/themes/settings/specialized/video.png)

The `video` type setting also accepts metafields of type `file_reference` as a [dynamic source](https://shopify.dev/docs/storefronts/themes/architecture/settings/dynamic-sources).

When accessing the value of a `video` type setting, data is returned in one of the following formats:

*   A [`video` object](https://shopify.dev/docs/api/liquid/objects#video).
*   [nil](https://shopify.dev/docs/api/liquid/basics/types#nil), if: 
    *   no selection has been made,
    *   the selection no longer exists, or
    *   the selection is a `file_reference` metafield that points to a non-video file.

A setting of type `video_url` outputs a URL entry field. In addition to the [standard attributes](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#standard-attributes) of an input setting, `video_url` type settings have the following attributes:

| Attribute | Description | Required |
| --- | --- | --- |
| `accept` | Takes an array of accepted video providers. Valid values are `youtube`, `vimeo`, or both. | Yes |
| `placeholder` | A placeholder value for the input. | No |

this setting type can be used to capture a video URL from YouTube and/or Vimeo, such as the URL for a static video to show in the product description.

For example, the following setting generates the following output:

Setting

Copy

Output

![Image 44: video_url setting](https://shopify.dev/assets/themes/settings/specialized/video_url.png)

When accessing the value of a `video_url` type setting, data is returned in one of the following formats:

*   A [string](https://shopify.dev/docs/api/liquid/basics/types#string) that contains the entered URL.
*   [nil](https://shopify.dev/docs/api/liquid/basics/types#nil), if nothing has been entered.

Additionally, there's access to the `id` and `type` (YouTube or Vimeo) of the video.

For example, assuming you're using [this video](https://www.youtube.com/watch?v=_9VUPq3SxOc) with the above setting, the following Liquid generates the following output:

Setting

Copy

Output

You can [add links](https://www.markdownguide.org/basic-syntax/#links) to the `info` settings attribute by enclosing the link text in brackets and then following it immediately with the URL in parentheses.

For example, the following setting generates the following output:

Settings

Copy

Output

![Image 45: link setting](https://shopify.dev/assets/themes/create_links_input.png)

---
title: "Theme Store listings"
source: https://shopify.dev/docs/storefronts/themes/store/review-process/listings
sections: Sell themes > Review Process > Listings
created: 2025-07-29 15:41:43
---

Title: Theme Store listing page

URL Source: https://shopify.dev/docs/storefronts/themes/store/review-process/listings

Markdown Content:
Follow these guidelines for submitting your theme to the Shopify Theme Store and filling out your preset listing pages.

The first step to submitting your theme is uploading the theme ZIP file. Be sure to test your theme on your development store before you submit it to the Theme Store.

If you use a CLI tool, you can package the zip file using the [Shopify CLI](https://shopify.dev/docs/api/shopify-cli/theme) with the following command:

Copy

A ZIP validator assesses the contents of your .zip file, including the following:

*   the name of the theme as specified, in the `theme_name` attribute the `settings_schema.json`
*   the name and number of the presets included in your theme

You can’t change the theme or preset name after uploading, so ensure that you follow the [naming guidelines](https://shopify.dev/docs/storefronts/themes/store/requirements#naming-themes).

A separate listing form is generated for each preset that's included in your theme ZIP file. Each theme preset requires its own individual Theme Store listing page and must be tailored to a specific merchant segment to meet their unique needs.

For each preset, provide a link to a complete and fully functioning demo store that uses that preset. Ensure that your demo stores meet Shopify’s [demo store requirements](https://shopify.dev/docs/storefronts/themes/store/requirements#demo-stores) before linking.

For each demo store, provide one mobile and one desktop screenshot of the home page.

Screenshot requirements:

*   Desktop screenshot dimensions must be 1000px by 1248px or 2000px by 2496px.
*   Mobile screenshot dimensions must be 750px by 1334px.
*   Provide alt text for all images for accessibility and to improve SEO.
*   Don’t include desktop backgrounds, added text, and browser windows in your screenshots. Crop them so that your images aren’t cluttered and don’t distract merchants from your theme.
*   Your mobile screenshots can't be duplicates of your desktop screenshots.

This is a one-line advertisement for your theme preset, using 70 characters or less. Taglines should be short, succinct, and they should sum up what makes your theme preset unique. Effective approaches to writing theme taglines are:

*   Identify the unique purpose of the theme preset. For example, "Designed for your crowdfunding campaign" or "Tailor-made for modern apparel stores".
*   Describe the style and benefit of the theme preset. For example, "A minimalist theme that puts your photography front and center" or "An editorial-inspired design that’s perfect for publishers".
*   Avoid using the tagline to describe specific theme features.
*   Avoid using technical words that might not be clear.
*   Avoid overt uses of marketing language such as "world’s best", or overusing adjectives such as "stunning" or "amazing".

Choose the primary industry that your preset works best for. Demo store images should also represent the industry you select. This helps merchants set up quickly with minimal customization.

Industry tags are used for filters, search, and recommendations for merchants.

The following is the list of industries that you can select from for this field.

| Industry | Definition |
| --- | --- |
| Art | Artwork, photography, digital prints, art supplies, etc. |
| Auto | Cars, motorcycles, ATVs, vehicle parts, etc. |
| Bags | Backpacks, purses, luggage, wallets, etc. |
| Beauty | Skincare, makeup, hair, perfume, cosmetics, etc. |
| Clothing | Tshirts, hoodies, fashion, apparel, etc. |
| Electronics | Cameras, computers, headphones, phone accessories, etc. |
| Entertainment | Books, music, videos, podcasts, gaming, etc. |
| Food and drink | Food, beverages, restaurants, grocery, meal kits, etc. |
| Garden | Plants, plant pots, seeds, garden tools, etc. |
| Hardware | Tools, industrial equipment, building materials, electrical supplies, etc. |
| Home | Furniture, home decor, home appliances, dinnerware, etc. |
| Jewelry and accessories | Necklaces, watches, bracelets, belts, hats, etc. |
| Kids | Kids clothing, baby items, strollers, etc. |
| Office | Office supplies, stationery, work desks, etc. |
| Pets | Pet food, pet toys, pet accessories, etc. |
| Services | Classes, workshops, virtual appointments, etc. |
| Shoes | Sneakers, boots, dress shoes, sandals, etc. |
| Sports | Sports equipment, fitness, camping, recreation, etc. |
| Toys | Puzzles, dolls, plushies, wooden blocks, etc. |
| Wellness | Supplements, medicine, health, first aid, etc |

While presets can be customized for multiple catalog sizes, select the one best suited to the purpose of the preset. Catalog size tags are used for filters, search, and recommendations for merchants.

The following is the list of catalog sizes that you can select from for this field.

| Catalog size |
| --- |
| 1 product |
| Few (2-10) |
| Some (11-100+) |
| Lots (500+) |

Include three highlights that differentiate your theme preset for merchants. Your first highlight can be a video or a still image.

**Video guidelines:**

*   Use videos to help showcase interactive or animated aspects of the theme preset, or versatility in theme setup that can’t be expressed in screenshots.
*   Don’t use video for onboarding or tutorials. Save those for your theme documentation.
*   Recommended length of a video is 2 minutes or less.
*   Don't use the Shopify logo or name in your video.
*   The video must be hosted on YouTube. You can [turn off comments](https://support.google.com/youtube/answer/9482556) and [set your video to unlisted](https://support.google.com/youtubecreatorstudio/answer/6302665) to prevent unwanted monetization or replies.
*   You need to provide the embed URL for the video, for example, `https://www.youtube.com/embed/<video ID>`.

To find the embed URL:

    *   Click the **Share** tab of your YouTube video.
    *   Click **Embed**.
    *   Copy the `src` attribute from the iframe tag.

**Static image guidelines:**

*   Provide a title (maximum 30 characters) and description (maximum 140 characters).
*   Don’t use the Shopify logo or name in your images.
*   Image dimensions must be 1600px by 1200px.
*   Don't use animated gif images.

Get data on visits to your page.

The metadata description is used by external search, and is shown in search engine results and link previews. Include keywords that are relevant to your theme to help with SEO, but ensure that your description is still readable. Use grammatical sentences rather than a string of keywords.

To track page views for your theme preset listing using Google Analytics 4, enter your measurement ID. Learn more about [tracking your listing traffic](https://support.google.com/analytics/answer/9304153).

#### Full-funnel theme install attributions

[Anchor link to section titled "Full-funnel theme install attributions"](https://shopify.dev/docs/storefronts/themes/store/review-process/listings#full-funnel-theme-install-attributions)

To provide full details of the theme installation funnel, the Shopify Theme Store uses [Google Analytics 4's Measurement Protocol](https://developers.google.com/analytics/devguides/collection/protocol/ga4) for server-side events, on theme installation on purchase. To receive these events, you must use Google Analytics 4 with your theme listing, and have entered an API secret generated in the Google Analytics UI.

The following events are sent to Google Analytics and display in the real-time view. However, event parameters might take up to 24 hours to propagate and need to be added as an [event-scoped custom dimension](https://support.google.com/analytics/answer/10075209?hl=en#zippy=%2Ccreate-an-event-scoped-custom-dimension%2Ccreate-a-custom-metric%2Canalyze-an-event-scoped-custom-dimension).

Events sent to Google Analytics| Event name | Parameters | Description |
| --- | --- | --- |
| `shopify_theme_install` | * `shop_id` * `handle` * `style_handle` * `shop_name` * `shop_url` | Sent when a merchant finishes purchasing and installing a theme |

To generate an API secret:

1.   Log into [Google Analytics](https://analytics.google.com/analytics/web/#/).
2.   Click the **Admin** icon in the bottom left corner.
3.   Click **Data Streams** under **Property settings**.
4.   Select the measurement stream that corresponds to the **Measurement ID** which you've added to your app listing.
5.   Click **Measurement Protocol API secrets**.
6.   Click **Create** to generate a new API secret.

To add the API secret to your app listing:

1.   Log in to your [Partner Dashboard](https://partners.shopify.com/organizations).
2.   Click **Themes**.
3.   Click the name of your app.
4.   Click **Edit Theme**.
5.   In the **SEO and tracking** section for each preset, enter your Google Analytics 4 measurement ID.
6.   Enter your API secret.
7.   Click **Save** to save the changes as a draft.
8.   Click **Publish changes** to publish the changes.

To enhance tracking for e-commerce related interactions, the following events have been implemented:

E-commerce events sent to Google Analytics| Event name | Parameters | Description |
| --- | --- | --- |
| [`view_item`](https://developers.google.com/analytics/devguides/collection/ga4/reference/events?sjid=2649380085872637034-NC&client_type=gtag#view_item) | * `currency` * `value` * `items` * `item_id` * `item_name` * `price` * `quantity` | Sent when a merchant views a theme's details page |
| [`add_to_cart`](https://developers.google.com/analytics/devguides/collection/ga4/reference/events?sjid=2649380085872637034-NC&client_type=gtag#add_to_cart) | * `currency` * `value` * `items` * `item_id` * `item_name` * `price` * `quantity` | Sent when a merchant clicks the **Try theme** button |

To add Google remarketing code to your theme preset listing, enter the number that follows `var google_conversion_id =` in the remarketing tag that you received from Google. We don't currently support specific tag remarketing lists. Learn about [Google remarketing](https://support.google.com/google-ads/answer/2453998).

To add Facebook Pixel tracking to your theme preset listing, enter the ID number for your theme from the Facebook Event Manager. Learn about [Facebook pixels](https://www.facebook.com/business/help/952192354843755?id=1205376682832142).

To enhance tracking for e-commerce related interactions, the following events have been implemented:

E-commerce events sent to [Meta Pixel](https://developers.facebook.com/docs/meta-pixel/reference/)| Event name | Parameters | Description |
| --- | --- | --- |
| `ViewContent` | * `content_ids` * `content_name` * `currency` * `value` | Sent when a merchant views a theme's details page |
| `AddToCart` | * `content_ids` * `content_name` * `currency` * `value` | Sent when a merchant clicks the **Try theme** button |

Theme price and value proposition
---------------------------------

[Anchor link to section titled "Theme price and value proposition"](https://shopify.dev/docs/storefronts/themes/store/review-process/listings#theme-price-and-value-proposition)

You can price your theme from $100 USD to $500 USD in increments of $10. Gage the amount of settings, level of design, size of the catalog it's built for, and the amount of development it took to build your theme, and then price your theme accordingly. Make sure to include the cost of providing high quality support when considering how to price your theme. You'll be expected to provide bug fixes and to answer questions about your theme. The quality of support you provide can affect how merchants rate your theme.

Select the features that your theme supports without needing additional code. Having features that are associated with a particular industry or business type helps your theme rank higher in relevant categories and recommendations for merchants. However, to make setup easier for merchants, your theme should only contain the features that are most useful to your target merchant segment.

| Category | Feature tag | Description |
| --- | --- | --- |
| **Merchandising** |
| Image display | high resolution images | Theme is optimized for high quality, large images |
| image galleries | Display multiple images at once in a thumbnail grid or tiled mosaic-style layouts |
| image hotspot | Tag images with interactive hotspots for popups or additional information |
| image rollover | Show different images or info when hovering over an image |
| image zoom | Allow close-up view of images |
| lookbooks | Display a portfolio of images that feature a product line or collection |
| slideshow | Display multiple images one at a time in a carousel |
| Product details | color swatches | Display color options for a product on the product page |
| ingredients/nutritional information | Show an ingredients list or nutritional information for a product |
| product options | Show available product options such as finishes, brands, or colours on collection pages |
| product tabs | Present product details across multiple tabs or sheets on the product page |
| product videos | Include a video on the product page |
| shipping/delivery information | Show information such as shipping options and estimated delivery time |
| size chart | Display a size chart for products |
| usage information | Show usage information for a product |
| Visual effects | animation | Include animations, such as page transitions, scrolling, or animated cart actions |
| **Marketing and conversion** |
| Conversion optimization | cross-selling (complete the look) | Show products commonly purchased together |
| quick view | View product details in a popup without leaving the current page |
| recently viewed | Show products that a visitor has recently looked at |
| recommended products | Show products based on customer behavior or past purchases |
| stock counter | Show current stock levels for a product |
| store locator | Provide map or direction to physical location |
| Email capture | back-in-stock alert | Prompt to collect email info for notifying when product is back in stock |
| customizable contact form | Create a custom contact form with additional fields and content |
| Promotional content | blogs | Use advanced blogging features such as surfacing blog posts on product and collection pages, or support for muliple blogs and reader comments |
| event calendar | Show a feed or calendar of upcoming events |
| in-menu promos | Embed images and promotional content into your navigation |
| press coverage | Highlight media coverage and press mentions |
| product badges | Add stickers or labels to product images to highlight sales, new items, top sellers, or other product features |
| promo banners | Add a banner announcing sales, discounts, or events |
| promo popups | Add a popup announcing sales, discounts, or events |
| promo tiles | Add custom promo elements alongside product images |
| Trust/social proof | age verifier | Require age verfication before purchase or entering the site |
| FAQ page | Provide an FAQ page to answer visitor questions about anything from returns to shipping |
| product reviews | Automatically integrate with Shopify Product reviews app and display reviews on product pages |
| trust badges | Display badges indicating secure payment and checkout |
| **Cart and checkout optimization** |
| carts and checkout | cart notes | Allow customers to add notes to their order |
| gift wrapping | Allow customers to select gift wrapping as part of their order |
| in-store pickups | Allow customers to select a local pickup option instead of delivery |
| quick buy | Allow customers to add products to the cart without leaving the page |
| slide-out cart | Make cart accessible from any page |
| sticky cart | Keep add to cart button visible as customers browse and scroll |
| **Product discovery** |
| Navigation and filtering | back-to-top button | Provide a button that takes customers to the top of the page. |
| breadcrumbs | Show a set of links that tells the customer where they are in the site and allows them to return to a previous page |
| collection page navigation | Provide navigation menu or sidebar links on collection pages |
| enhanced search | Enable predictive or smart searching |
| infinite scroll | Continuously load content at the bottom of a page so that customers don't have to click to the next page |
| mega menu | Configure menu navigation that provides multi-column drop-down navigation |
| product filtering and sorting | Allow customers to filter products on the collection page by features such as size, color, or brand |
| sticky header | Provide a header that's visible in the same position as customers scroll down a page |
| Product highlights | recently viewed | Allow customers to see a set of products that they recently viewed |
| recommended products | Provide a set of recommended products that are associated with the product page or collection that a customer is currently looking at |

### Merchant stores using your theme

[Anchor link to section titled "Merchant stores using your theme"](https://shopify.dev/docs/storefronts/themes/store/review-process/listings#merchant-stores-using-your-theme)

After your theme is published and you've made some sales, then you can optionally provide URLs and screenshots of some of the shops that use your theme, up to a maximum of five stores. These examples can help showcase your theme in use.

Make sure that you have permission to feature these stores on your listing. Make sure to check on these stores occasionally, as stores can change or become inactive over time.

Screenshot guidelines:

*   Image dimensions must be 779px by 1000px.

The following types of stores can't be used to showcase samples of your theme:

*   adult product stores
*   stores with violent or hateful content
*   stores selling restricted substances
*   any stores that don’t meet our [Terms of Service](https://www.shopify.ca/legal/terms-payments-us) standards

You're required to provide a way for merchants to get help through a [contact form](https://shopify.dev/docs/storefronts/themes/store/requirements#documentation-and-contact-forms), as well as provide a link to the [documentation for your theme](https://shopify.dev/docs/storefronts/themes/store/requirements#documentation-and-contact-forms). We encourage partners to have a CRM software such as a help desk set up to help manage merchant tickets. A contact email address isn't sufficient for the long term. See [Supporting your theme](https://shopify.dev/docs/storefronts/themes/store/requirements#supporting-your-theme) for more details about how to successfully support merchants.

Provide an email address to notify you when a merchant reviews your theme, or when existing reviews are updated or deleted.

Provide a contact email address for the review team to communicate with you about your theme submission. If no contact email is provided, then the business email for your partner account is used. To prevent our email messages from being caught in spam filters, add `theme-submissions@shopify.com` and `noreply@shopify.com` to your email provider's allowed address list.

**Testing instructions:** Provide instructions for testing your theme. Include any special setup that's required, such as admin settings. Provide instructions on how to find the main features of your theme.

**Password for demo stores:** All demo stores must use the same password. Share your password for the demo stores so that reviewers can easily see and test the theme customization settings.

Provide details about your theme and development experience. Describe the type of merchant that your theme is built for, and how the features of this theme help merchants to be successful in engaging and converting customers. Tell us about your experience with developing themes. This information isn’t shown directly to merchants, but helps our reviewers understand your goals for the theme, and it helps our operations team curate themes for collections and recommendations for specific merchant segments.

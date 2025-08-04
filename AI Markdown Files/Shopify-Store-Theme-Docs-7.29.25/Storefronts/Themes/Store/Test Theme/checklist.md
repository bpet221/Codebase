---
title: "Checklist"
description: "Shopify theme documentation for checklist"
date: "2025-07-29"
source: "https://shopify.dev/docs/storefronts/themes/store/test-theme/checklist"
extraction_method: "jina_extended"
sections: ['Storefronts', 'Themes', 'Store', 'Test Theme']
tags: ["shopify", "themes", "documentation"]
---

Title: Testing your theme for the Shopify Theme Store

URL Source: https://shopify.dev/docs/storefronts/themes/store/test-theme/checklist

Markdown Content:
Use this checklist to ensure that your theme meets the functional requirements for the Shopify Theme Store. The checklist doesn't comprehensively represent all of the requirements for the Theme Store, but it can help you to make sure that your theme addresses edge cases that the theme review team will test as a part of the review process.

To run these tests, you need to populate your store with data, and configure some additional features. To download this data and learn learn about the additional configurations you need to make, refer to [Testing assets](https://shopify.dev/docs/storefronts/themes/store/test-theme/assets).

You should run these tests in both the theme editor and the storefront.

Add the following sections to the home page. After you add all of the sections, verify that they work properly.

Three slideshows

Five featured products, three of which are the same product

Three different featured collections

One collection list

Three image with text

One newsletter

One rich text

One blog post

Two video (if applicable)

Add additional sections until the homepage has 25 sections

Run the following tests on your header. For each of these tests, verify the following:

*   The store name or logo displays properly and is accessible
*   Header icons or links display properly and are accessible
*   The navigation functions properly, and navigation titles are fully visible

Add logo fallback text:

Long store name (30-40 characters, no spaces)

Add a logo:

Test different aspect ratios in portrait and landscape mode:

16:9

4:3

3:2

1:1

Transparent background on PNG image

Logo scaling

Different positions and alignments (if applicable)

Add navigation:

Long navigation menu (10+ menu items)

Single-level navigation

Two-level nested navigation

Three-level nested navigation

Long level one menu item titles (30-60 characters)

Long level two menu item titles (30-60 characters)

Long level three menu item titles (30-60 characters)

Mega menu (if applicable)

Run the following tests on your footer. For each of these tests, verify that footer text, icons, images are fully visible and functional.

Add five columns or blocks, or the maximum number of blocks

Add multiple menus

Add a long navigation menu (10+ menu items)

Add menu items with long titles (30-60 characters)

Add all social links

If your footer has a newsletter form, then test the following:

Input form text

Submit the form

Test error detection and handling

Test the submission success message

Test the following sections in your theme:

*   [Announcement bar](https://shopify.dev/docs/storefronts/themes/store/test-theme/checklist#announcement-bar)
*   [Slideshow](https://shopify.dev/docs/storefronts/themes/store/test-theme/checklist#slideshow)
*   [Featured product](https://shopify.dev/docs/storefronts/themes/store/test-theme/checklist#featured-product)
*   [Featured collection](https://shopify.dev/docs/storefronts/themes/store/test-theme/checklist#featured-collection)
*   [Collection list](https://shopify.dev/docs/storefronts/themes/store/test-theme/checklist#collection-list)
*   [Image with text](https://shopify.dev/docs/storefronts/themes/store/test-theme/checklist#image-with-text)
*   [Newsletter](https://shopify.dev/docs/storefronts/themes/store/test-theme/checklist#newsletter)
*   [Rich text](https://shopify.dev/docs/storefronts/themes/store/test-theme/checklist#rich-text)
*   [Blog posts](https://shopify.dev/docs/storefronts/themes/store/test-theme/checklist#blog-posts)
*   [Video](https://shopify.dev/docs/storefronts/themes/store/test-theme/checklist#video)
*   [Any sections unique to your theme](https://shopify.dev/docs/storefronts/themes/store/test-theme/checklist#unique-sections)

Run the following tests on your announcement bar section. For each of these tests, verify the following:

*   Text and icons are fully visible
*   Any links function properly
*   Link styling indicates that the text is clickable

If the text input is plain text, then add 60-100 characters of text, or the maximum character limit

If the text input is rich text, then add the following text:

Text with a single line break

Text with two line breaks

Text with three line breaks

A paragraph (40-50 words)

Add links:

An internal link

An external link

Link opens in the same window

Link opens in a new window

Run the following tests on your slideshow section.

Add three slideshow sections

Add the maximum number of slides. If there's no limit, then add 10 slides.

Test the following image sizes:

2048px for retina displays

1024px for standard widescreen displays

Test the following aspect ratios using 72ppi, portrait, and landscape:

16:9

4:3

3:2

1:1

Add video (if applicable)

Add text:

A heading

A subheading (60 characters)

A description

If the text input is a plain single line text, then add 60-100 characters of text

If the text input is rich text, then add the following text:

Text with a single line break (60-100 characters)

Text with two line breaks

Text with three line breaks

A paragraph (40-50 words)

Add links:

An internal link

An external link

Link opens in the same window

Link opens in a new window

Link styling indicates that the text is clickable

Add button text:

A single word label (30 characters, no spacing)

A multiple word label (30 characters)

Add button links:

Internal link

External link

Link opens in the same window

Link opens in a new window

Test autoplay behavior:

If multiple slideshows have autoplay enabled, then each slideshow autoplays as expected

Slideshow controls work as expected when slideshow is on autoplay

Run the following tests on your featured product section. For each of these tests, verify the following:

*   Adding duplicate featured products doesn't break the section or the page
*   Customers can add different featured products to the cart

Add five featured product sections, three of which are the same product

Select different variants for one of the duplicated products

Add one of the duplicated products to the cart

Perform tests from the [product page checklist](https://shopify.dev/docs/storefronts/themes/store/test-theme/checklist#product-page)

Run the following tests on your featured collection section. For each of these tests, verify the following:

*   All sections work as expected
*   Adding multiple featured collections doesn't break the section or the page

Add three featured collection sections, using collections of varying sizes

Perform tests from the [collection page checklist](https://shopify.dev/docs/storefronts/themes/store/test-theme/checklist#collection-page)

Run the following tests on your collection list section. For each of these tests, verify the following:

*   Collection titles are visible
*   Collections with no image display the first product in the collection, or the collection's title, in the image block
*   Adding multiple collection list sections doesn't break the section or the page

Add the maximum number of collections. If there's no limit, then add 10 collections.

Add a collection with a long title

Add a collection with a single word title (30 characters, no spacing)

Add a collection with a multi-word title (30 characters)

Add collections where the collection images have different aspect ratios, in portrait and landscape orientations

16:9

4:3

3:2

1:1

Add one collection with no featured collection image

Run the following tests on your image with text section. For each of these tests, verify the following:

*   All text is completely visible
*   Varying image qualities and ratios are supportedImages must support varying image qualities and ratios
*   Adding multiple image with text sections doesn't break the section or the page

Add three image with text sections

Add text:

A heading

A subheading (60 characters)

A description

If the text input is a plain single line text, then add 60-100 characters of text

If the text input is rich text, then add the following text:

Text with a single line break (60-100 characters)

Text with two line breaks

Text with three line breaks

A paragraph (40-50 words)

Add links:

An internal link

An external link

Link opens in the same window

Link opens in a new window

Link styling indicates that the text is clickable

Test the following image sizes:

2048px for retina displays

1024px for standard widescreen

Test the following aspect ratios using 72ppi, portrait, and landscape:

16:9

4:3

3:2

1:1

Run the following tests on your newsletter section. For each of these tests, verify the following:

*   All text is completely visible
*   The form outputs proper error and success messages

Test the following parts of the newsletter form:

Input form text

Submit the form

Test error detection and handling

Test the submission success message

Add a description:

If the text input is a plain single line text, then add 60-100 characters of text

If the text input is rich text, then add the following text:

Text with a single line break (60-100 characters)

Text with two line breaks

Text with three line breaks

A paragraph (40-50 words)

Add links:

An internal link

An external link

Link opens in the same window

Link opens in a new window

Link styling indicates that the text is clickable

Run the following tests on your rich text section. For each of these tests, verify that all of the text is visible.

Add a heading

Add a subheading (60 characters)

Add a description

Add multiple paragraphs (minimum 1000 characters)

Add links:

Internal link

External link

Link opens in the same window

Link opens in a new window

Link styling indicates that the text is clickable

Run the following tests on your blog posts section. For each of these tests, verify the following:

*   All text is visible
*   The blog post grid supports varying image ratios

Add blog posts with different image aspect ratios:

16:9

4:3

3:2

1:1

Add a blog post with a long title

Add a blog post with a single word title (30 characters, no spacing)

Add a blog post with a multi-word title (30 characters)

Add the following video types in a video section. For each of these tests, verify the following:

*   Adding multiple video sections doesn't break section or the page
*   Video controls are present and functional

Add a YouTube video

Add a Vimeo video

Add an MP4 video (if applicable)

If your theme has any additional sections then you need to test them as well. Run the tests that apply to your section. Verify the following:

*   Each section supports varying image qualities and ratios
*   All text is visible
*   Adding multiples of the same section doesn't break the section or the page

Add 2-3 instances of the same section

Add text:

A heading

A subheading (60 characters)

A description

If the text input is a plain single line text, then add 60-100 characters of text

If the text input is rich text, then add the following text:

Text with a single line break (60-100 characters)

Text with two line breaks

Text with three line breaks

A paragraph (40-50 words)

Add links:

An internal link

An external link

Link opens in the same window

Link opens in a new window

Link styling indicates that the text is clickable

Test the following image sizes:

2048px for retina displays

1024px for standard widescreen

Test the following aspect ratios using 72ppi, portrait, and landscape:

16:9

4:3

3:2

1:1

Test the following pages or elements in your theme:

*   [Password page](https://shopify.dev/docs/storefronts/themes/store/test-theme/checklist#password-page)
*   [Collection list page](https://shopify.dev/docs/storefronts/themes/store/test-theme/checklist#collection-list-page)
*   [Collection page](https://shopify.dev/docs/storefronts/themes/store/test-theme/checklist#collection-page)
*   [Product page](https://shopify.dev/docs/storefronts/themes/store/test-theme/checklist#product-page)
*   [Blog page](https://shopify.dev/docs/storefronts/themes/store/test-theme/checklist#blog-page)
*   [Blog post/article page](https://shopify.dev/docs/storefronts/themes/store/test-theme/checklist#blog-post-page-article)
*   [Cart](https://shopify.dev/docs/storefronts/themes/store/test-theme/checklist#cart-page-modal-or-drawer)
*   [Search page](https://shopify.dev/docs/storefronts/themes/store/test-theme/checklist#search-page)
*   [Pages](https://shopify.dev/docs/storefronts/themes/store/test-theme/checklist#pages)
*   [Page with a contact form](https://shopify.dev/docs/storefronts/themes/store/test-theme/checklist#pages-contact-form-template)
*   [Gift card page](https://shopify.dev/docs/storefronts/themes/store/test-theme/checklist#gift-card-page)

Run the following tests on your password page. For each of these tests, verify the following:

*   Customers are able to access the store with a password
*   The store logo or name and the password message are fully visible

Add logo fallback text:

Long store name (30-40 characters, no spaces)

Long store name with hyphens

Add a logo:

Test the following logo aspect ratios using portrait and landscape:

16:9

4:3

3:2

1:1

Transparent background on PNG image

Logo scales appropriately

Test the password form:

Fill the email field

Submit the form

Test error detection and handling

Test the submission success message

Add a password message (500+ characters)

Add different sized background images, if applicable:

2048px for retina displays

1024px for standard widescreen

Test the following aspect ratios using portrait and landscape:

16:9

4:3

3:2

1:1

Run the following tests on your collection list page. For each of these tests, verify the following:

*   Multiple collection image ratios are supported
*   A collection with no image displays the first product in that collection, or displays the collection's title in the image block

Add a collection with a long title

Add a collection with a single word title (30 characters, no spacing)

Add a collection with a multi-word title (30 characters)

Test the following aspect ratios using portrait and landscape:

16:9

4:3

3:2

1:1

Add a collection with no featured collection image

Run the following tests on your collection page. For each of these tests, verify the following:

*   All products in the collection are accessible
*   The collection can be sorted and filtered
*   Combining filter tags doesn't break the page
*   Product information in the product grid is fully visible

Test group filtering (if applicable)

Add a single word tag (30 characters, no spacing)

Add a long list of tags (20+ tags)

Verify that only a limited number of products are displayed on initial load

Test pagination (if applicable)

Pagination truncates on a collection with five or more pages

Test **View more** button (if applicable)

Test infinite scrolling (if applicable)

Add a product title:

A single word title (30 characters, no spacing)

A multi-word title (30-60 characters)

Add a product vendor:

A single word vendor (30 characters, no spacing)

A multi-word vendor (30-60 characters)

Test the way the grid responds to images of different aspect ratios, using portrait and landscape:

16:9

4:3

3:2

1:1

If the collection page has an **Add to cart** button, verify that it's replaced or disabled when a sold out or unavailable variant is selected.

Verify that the sold out message or badge is displayed when applicable.

Run the following tests on your product page, on each of the product configurations outlined. For each of these tests, verify the following:

*   Customers can add a selected variant to the cart
*   Variant information changes dynamically when different variants are selected
*   Customers are prevented from adding more than the available quantity of items to the cart

Single product (no variants)

On sale product

Product with one option

Product with more than 1 option with different variant quantity inventories (out of stock variant, unavailable variant).

Product with three options

Product with 100 variants

Product with no image

Product with varying product media (image, vidoe, 3D model. AR, MP4)

Product with unit price

Add a product title:

A single word title (30 characters, no spacing)

A multi-word title (30-60 characters)

Verify that when variants are selected from drop-down menus, product details are updated dynamically:

Variant prices

Variant media

Variant SKU

Action buttons (disable **Add to cart** and accelerated checkout buttons on sold out and unavailable variants)

Variant selectors (cross out or disable sold out and unavailable variants)

Unit price

[Shop Pay Installments banner](https://shopify.dev/docs/storefronts/themes/store/test-theme/assets#shop-pay-installments)

[Local pickup banner](https://shopify.dev/docs/storefronts/themes/store/test-theme/checklist#7-local-pickup)

Inventory quantity (if applicable)

Product images

No image

Test the following aspect ratios using portrait and landscape:

16:9

4:3

3:2

1:1

PNG image

Image zoom (if applicable)

Color swatches (if applicable)

Option to disable swatches

Clear instruction on how to upload custom swatches

Product description

Add multiple paragraphs (minimum 1000 characters)

Add links:

Internal link

External link

Link opens in the same window

Link opens in a new window

Link styling indicates that the text is clickable

Add images (images must display as they appear in the rich text editor)

Verify that an error message appears when customers try to add more than the available quantity of items to the cart

Run the following tests on your blog page. For each of these tests, verify the following:

*   All blog posts in the collection are accessible
*   Multiple blog post image ratios are supported
*   Must support varying blog post image ratios
*   Blog post information must be visible. This includes the title, excerpt, author, date, and comment count
*   If available, blog filtering works as expected and combining filter tags doesn't break the page

Test the way the grid responds to blog images of different aspect ratios, using portrait and landscape:

16:9

4:3

3:2

1:1

Test blog filtering (if applicable):

Filter by a single-word tag (30 characters, no spacing)

Filter by a long list of tags (20+ tags)

Test a blog with many posts:

Test pagination (if applicable)

Verify that only five pages show on initial load

Test the **View more** button (if applicable)

Test infinite scrolling (if applicable)

Run the following tests on your blog post page.

Add blog post content:

Add multiple paragraphs (minimum 1000 characters)

Add links:

Internal link

External link

Link opens in the same window

Link opens in a new window

Link styling indicates that the text is clickable

Add images (images must display as they appear in the rich text editor)

Add comments:

Input comment text

Submit the form

Test error detection and handling

Test the submission success message

Verify that comments over a certain limit are paginated

Test the following blog post image aspect ratios using portrait and landscape:

16:9

4:3

3:2

1:1

Run the following tests on your cart. For each of these tests, verify the following:

*   All products in the cart are fully visible
*   The customer must be able to update the product quantity
*   Automatic discounts must update dynamically

Add enough products to the cart to trigger scrolling

Setting 0 for quantity should remove the product

Verify that an error message appears when customers try to add more than the available quantity of items to the cart

Automatic discount

Cart notes

Run the following tests on your search page. For each of these tests, verify that search result attributes are fully visible.

Verify that the number of results displayed on first load is limited

Test pagination (if applicable):

Pagination truncates on search results with five or more pages

Test the **View more** button (if applicable)

Test infinite scrolling (if applicable)

Test filtering (if applicable)

Test both list and grid view (if applicable)

Test error detection and handling, for example, when no results are found

Run the following tests on a page that uses the generic page template. For each of these tests, verify that page content is fully visible.

Add a page title:

A single word title (30 characters, no spacing)

A multi-word title (30-60 characters)

Add multiple paragraphs (minimum 3000 characters)

Add links:

Internal link

External link

Link opens in the same window

Link opens in a new window

Link styling indicates that the text is clickable

Add image—must display imagery as inputted in the RTE

Repeat testing for all existing product templates

Run the following tests on a page that uses the contact form template. For each of these tests, verify that customers can send the merchant an email using the contact form.

Input text

Test mandatory fields, such as the message field

Submit the form

Test error detection and handling

Test the submission success message

Run the following tests on the gift card page. For each of these tests, verify that the gift card code and store name or logo is fully visible.

Add logo fallback text:

Long store name (30-40 characters, no spaces)

Long store name with hyphens

Add a logo:

Test the following logo aspect ratios using portrait and landscape:

16:9

4:3

3:2

1:1

Transparent background on PNG image

Logo scales appropriately

Varying positions/alignments (if applicable)

Gift card code must not be cut off

Share a link to the store where you're testing your theme on various social media platforms. Verify that the sharing image appears. You can use tools like the [Facebook sharing debugger](https://developers.facebook.com/tools/debug/) and the [Twitter card validator](https://cards-dev.twitter.com/validator) to perform this test.

Test your local pickup banner in the following scenarios. Before you start, [prepare your store to test local pickup](https://shopify.dev/docs/storefronts/themes/store/test-theme/assets).

**Variant 1** - available for pickup at five locations:

Verify that the pickup banner appears

![Image 1](https://cdn.shopify.com/s/files/1/0548/7057/3112/files/21-04-70y89-qya2s.png?v=1617725022)

When you click **Check availability at other stores**, verify that all locations are visible, and that you can scroll to see all location information

**Variant 2** - available for pickup at only one location:

Verify that the pickup banner appears

Verify that the **Check availability at other stores** text is updated to **View store information**

![Image 2](https://cdn.shopify.com/s/files/1/0548/7057/3112/files/21-04-76ddj-srkun.png?v=1617725882)

**Variant 3** - available for pickup at only two locations, and sold out one of those locations:

Verify that the pickup banner appears, and indicates that the item is available or unavailable at one of the locations.

Verify that the **Check availability at other stores** link is present

![Image 3](https://cdn.shopify.com/s/files/1/0548/7057/3112/files/21-04-nrv48-b86yx.png?v=1617726309)

Verify that clicking on **Check availability at other stores** brings up only two locations

![Image 4](https://cdn.shopify.com/s/files/1/0548/7057/3112/files/21-04-z25uz-m131m.png?v=1617726500)

**Variant 4** - only available at a location that doesn't offer pickup:

Verify that the pickup banner is removed

**Variant 5** - sold out at all locations:

Verify that the pickup banner is removed

Verify that the **Add to cart** button is changed to **Sold out**

Ensure the pickup banner changes dynamically when a new variant is selected

Test unit prices in your theme. Before you start, [prepare your store to test unit pricing](https://shopify.dev/docs/storefronts/themes/store/test-theme/assets).

Verify that unit prices change dynamically on variant change

Verify that unit prices appear in the following locations:

Product page

Collection page product cards

Cart drawer, page, or popup

Customer order page

Test rich media in your theme. Before you start, [prepare your store to test rich media](https://shopify.dev/docs/storefronts/themes/store/test-theme/assets).

Verify 3D/AR behavior:

Verify that you can view and move 3d models on desktop and mobile devices

![Image 5](https://screenshot.click/21-04-4kfdk-sd5jq.gif)

Verify that the **View in your space** button appears on mobile devices

![Image 6](https://screenshot.click/21-04-waepc-l7vby.png)

Verify that can view both AR objects on mobile devices

Verify video behavior (YouTube, Vimeo, MP4):

Verify that video controls are accessible

Verify that you can mute and unmute videos

Verify that you can play and pause videos

Verify that variant display when the associated variant is selected

Verify that rich media types don't break the product card layout of the collection page:

YouTube

Vimeo

MP4

3D models

Test selling plans in your theme. Before you start, [prepare your store to test selling plans](https://shopify.dev/docs/storefronts/themes/store/test-theme/assets).

Applied selling plans appear on the cart page

Applied selling plans appear on the customer order page

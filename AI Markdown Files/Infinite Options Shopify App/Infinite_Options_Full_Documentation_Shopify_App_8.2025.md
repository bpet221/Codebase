#Developer Documentation for Shopify App 'Infinite Options' by ShopPad

This single markdown file is a outline of all their documentation on this single file. 

## Getting Started

### Welcome to the Infinite Options app!

Infinite Options allows you to create as many custom option fields for your product pages as you need. You can specify exactly which product pages on your Shopify store that these custom options will appear on as well.

{% embed url="https://www.youtube-nocookie.com/embed/qlisoYB_89w?rel=0" %}

### Learning the app

The following guides will help you get familiar with the ins and outs of the Infinite Options app. ALL THESE GUIDES ARE LISTED BELOW IN MARKDOWN FILE:

* [Installing Infinite Options to your theme](welcome/how-to-install)
* [Creating your options](welcome/create-custom-options)
* [Creating a date picker](inputs-and-field-settings/add-a-date-picker-to-your-store)
* [Creating conditional logic for your options](conditional-logic)
* [Adding prices to your option selections](increase-the-cost-of-an-option)
* [Assigning your options to products](set-up-and-manage-options/assigning-options-excluding-a-few-products)
* [Styling your options](visual-changes-adding-styling/customize-options-using-css)
  * [Styling your swatch options](inputs-and-field-settings/create-swatches/customize-swatches-using-css)
* [Displaying your option selections in Shopify email templates](display-options-on-shopify-notifications/shopify-emails-and-packing-slip-templates)
* [Frequently Asked Questions](faqs-and-how-tos)



# Dashboard terms explained

**Option Set:** A grouping of option fields that display on a product page(s).

**Assign Options to Products:** Logic that specifies what product page(s) option sets appear on.

**Label on Product:** The text that appears above on the product page above the input type. Acts as a title for your option.&#x20;

**Label on Cart:** The name of the field that appears on orders to define the custom option.

**Input Type:** The type of form field you wish to use. Infinite Options currently supports text, number, large text, radio button, checkbox, and drop down menu inputs.

**Advanced Options:** More advanced features for your options.&#x20;

**Class Name:** An HTML class that will be appended to the parent element of an option. This is not a field that needs to be filled in otherwise.

**Required Field:** A control that makes the form field required before the product can be added to the cart.&#x20;

**Default Value:** A value that's already selected when navigating to a product page.&#x20;

**Placeholder Text:** Text that appears inside form fields before a value is entered.

**Character Limit:** A set number of characters that can be used within a textbox.&#x20;

**Conditional Logic:** A feature that allows you to have an option appear or hide based on the previous selection.&#x20;

**Conditional Rule:** A statement that expresses whether an option field will display or be hidden depending on whether the set condition(s) are met.

**Swatch(es):** An option that can attach an image or color.&#x20;


# How to Install

**Before Infinite Options starts working on your store, you will need to install the app onto your current theme.**

***

{% embed url="https://youtu.be/jrFaPVsHyEg" %}

### Installing Infinite Options on a 2.0 theme

Follow the step-by-step instructions below on how to install Infinite Options for your 2.0 theme. This is a [list of available Shopify 2.0 themes](https://themes.shopify.com/collections/free-themes).

If your theme is not a 2.0 theme, you can click on the the blue collapsable accordion at the top of this help document called: [**Not using a Shopify 2.0 theme? Click here to learn more on how to install Options directly in the theme.**](../install-infinite-options/installing-infinite-options-directly-in-the-theme-1.0-theme-1)

1\. Starting from your Shopify dashboard, click on **Online Store**, and then click on **Themes**.

2\. Click the **Customize** button on the theme.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-bce3450154746f15f4117eedf759251813795000%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c2677a51100a4414b4578efile-kuibfvneui.png?alt=media)

3\. Select **Products** from the dropdown menu in the header and then select a product template. **Default product** is the standard template for a theme.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-3bca4c798aa1b341821878376adf3dc54d44c3c5%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c267d16186b86a80db847efile-zdl8iftmdf.png?alt=media)

4\. Locate a section for product information in the left-hand toolbar. Then, hover below the variant picker, click + **Add block**, then select the **Infinite Options Fields** block on the Apps tab. If the block does not appear, then you are not using a 2.0 theme. Please refer to the instructions for non 2.0 themes above in a blue collapsable accordion.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-3fa3b4f25fb9250ae6918f0adc32a4998c029321%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c2680e8d85554a90d68ac8file-xjzmv65yld.png?alt=media)

5\. **Save** your changes.

6\. You can now start creating options for your products.

Please follow the instructions in [this article](broken-reference) to get started.

***

#### Creating an option that needs an additional cost for customization?

Our Product Bundles feature allows you to attach an add-on product to the option selection so you can add an extra cost to your main product. Create new products like a $5.00 gift wrapping and bundle it to your option. When selected, both products will be added to cart.

[Click here to learn more about the product bundles feature.](../increase-the-cost-of-an-option/product-bundles)

**Looking to add more features? Click on the name of the feature to learn more.**

[Date picker](https://infinite-options.docs.theshoppad.com/inputs-and-field-settings/add-a-date-picker-to-your-store/customize-the-date-picker): A calendar option that lets your customers easily select a date.

[Swatches:](https://infinite-options.docs.theshoppad.com/inputs-and-field-settings/swatches) Attach images or colors to options.

[Conditional Logic](../conditional-logic/conditional-logic): Display or hide options based on their previous option selections.

[Use Conditional Logic with Swatches](../conditional-logic/swatches): Display swatches based on a previous option selection and vice versa.\\

[Creating a Variety Pack](../popular-setups/mix-and-match-variety-pack-or-gift-pack-example): Set up multiple drop down menus so your customers can select different scents or flavors for a variety pack product.
# How to Install

**Before Infinite Options starts working on your store, you will need to install the app onto your current theme.**

***

{% embed url="https://youtu.be/jrFaPVsHyEg" %}

### Installing Infinite Options on a 2.0 theme

Follow the step-by-step instructions below on how to install Infinite Options for your 2.0 theme. This is a [list of available Shopify 2.0 themes](https://themes.shopify.com/collections/free-themes).

If your theme is not a 2.0 theme, you can click on the the blue collapsable accordion at the top of this help document called: [**Not using a Shopify 2.0 theme? Click here to learn more on how to install Options directly in the theme.**](../install-infinite-options/installing-infinite-options-directly-in-the-theme-1.0-theme-1)

1\. Starting from your Shopify dashboard, click on **Online Store**, and then click on **Themes**.

2\. Click the **Customize** button on the theme.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-bce3450154746f15f4117eedf759251813795000%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c2677a51100a4414b4578efile-kuibfvneui.png?alt=media)

3\. Select **Products** from the dropdown menu in the header and then select a product template. **Default product** is the standard template for a theme.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-3bca4c798aa1b341821878376adf3dc54d44c3c5%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c267d16186b86a80db847efile-zdl8iftmdf.png?alt=media)

4\. Locate a section for product information in the left-hand toolbar. Then, hover below the variant picker, click + **Add block**, then select the **Infinite Options Fields** block on the Apps tab. If the block does not appear, then you are not using a 2.0 theme. Please refer to the instructions for non 2.0 themes above in a blue collapsable accordion.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-3fa3b4f25fb9250ae6918f0adc32a4998c029321%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c2680e8d85554a90d68ac8file-xjzmv65yld.png?alt=media)

5\. **Save** your changes.

6\. You can now start creating options for your products.

Please follow the instructions in [this article](broken-reference) to get started.

***

#### Creating an option that needs an additional cost for customization?

Our Product Bundles feature allows you to attach an add-on product to the option selection so you can add an extra cost to your main product. Create new products like a $5.00 gift wrapping and bundle it to your option. When selected, both products will be added to cart.

[Click here to learn more about the product bundles feature.](../increase-the-cost-of-an-option/product-bundles)

# Create custom options

**Options are created and managed through the app's dashboard.**

\
To get started, take a look at the tutorial video below:

{% embed url="https://www.youtube.com/embed/wX7B9oKqBTQ" %}

***

#### Follow these step-by-step instructions to learn how to create options for your products:

1\. Starting from the Infinite Options dashboard, head into the **Option Sets** section of the app in the left sidebar and click on the **Create Option Set** button to create some options from scratch.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-31df594688770f0c4125ea2b9f4a666b6e5981b6%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c0f1ad25b3d36fdf434d50file-fkiyusabqi.png?alt=media)

> Infinite Options will sync your entire product catalog while on the dashboard, to which it will display Catalog Sync Complete when it is completed.

2\. After clicking on the **Create Option Set** button, you can click on and edit the **Option Set 1** text to name this Option Set, which is helpful for organization.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-72331aede9970dc16c5e6070f7ae6cd8812bb9c0%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c0f29966c50e0e7db92ef0file-xgh8gmq9se.png?alt=media)

3\. Start off by entering a value for the **Label on Product**, which will be the text that will appear above the option field on the storefront product page. It will act as a title for your option.

Clicking on the **gray arrow** or **Label on Product** will expand the option's configuration menu as well.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-5d3e340b3be2697b47c51ce5c3c56844ad0aec44%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c0f3d466c50e0e7db92ef7file-h3rbblp7hp.png?alt=media)

> Hovering over the ⓘ icon next to any field on the dashboard will bring up information detailing what the field is used for.

4\. The next step is to set the **Label on Cart** for your option. This will be the text that appears at the cart summary screen, checkout, and the order details page showing what the customer selected for this option.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2F63zOtOsJHxa432ckcPTV%2Ffile-IJIt2OZHOx.png?alt=media&#x26;token=effcdbc8-133c-4e41-b819-a647e91d3e02" alt=""><figcaption></figcaption></figure>

You will want to make sure the values for Label on Cart are **all unique** so that they can display in the order without conflict.

5\. Next, select an **Input Type** for the option. You can choose from a _Text, Large Text, Number, Radio Button, Checkbox, Drop-down Menu, or Swatches_ input type.

> Each will have their own series of configurations - [click here](https://github.com/shoppad/docs-infinite-options/blob/master/troubleshooting/dashboard-terms-explained/README.md) to learn more about any configuration settings for the input types.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-69f9655a9426e2d9bee2266bd4b3514b111e8159%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c0f539a5753e1285139b4dfile-8hpr9z87mx.png?alt=media)

6\. To add another value under the same option, you can click on **Add Another Option Value** button.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fg7FA5biAlccPCRkk9JM5%2Ffile-6jlQxjvUus.png?alt=media&#x26;token=c72a1f67-0a69-4cd8-80b6-901bda2c6d4f" alt=""><figcaption></figcaption></figure>

7\. You can create as many custom option fields as you'd like within your Option Set by clicking on the **Add Another Custom Field** button.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FKrnX0dqZvoOI0BJNAVnd%2Ffile-79acp0gabk.png?alt=media&#x26;token=b622aade-74cf-4a25-8c07-d5ea75911b3c" alt=""><figcaption></figcaption></figure>

8\. Click on **Show Advanced Options** hyperlink to see more advanced controls, different for each **Input Type**.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-80412a5990030de5e5ebdad7eeaf914c0908fd86%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c0f65525b3d36fdf434d5afile-3z8ijizh0m.png?alt=media)

The features that will be present for input types will be the following:

* **Class Name**: Used for custom coding. You may leave this blank if you don't plan on using any code to adjust the option field.
* **Default Value**: A value that's already selected when navigating to a product page.
* **Character Limit**: Maximum number of characters that can be entered.
* **Required Fields**: Select Yes to make the option field necessary to fill out before the customer can add the product to their cart. Select No to make it not necessary.
* **Placeholder Text**: Text that appears inside an option field before a value is entered.
* **Min/Max**: The minimum/maximum number value that can be entered within a number option.
* **Min/Max Selections**: The minimum/maximum number of checkboxes that must be selected. (Must be a required field)
* **Allow Multiple Selections**: For swatches, if No, they apply like radio buttons. If Yes, they apply like checkboxes.
* **Conditional Logic**: Enable logic to make certain option fields appear or disappear depending on the selections made on other fields. You can check out this link to learn more about this feature: [Click here!](https://github.com/shoppad/docs-infinite-options/blob/master/conditional-logic/conditional-logic/README.md)
* **Help Text:** Add extra text to further inform your customers about the option. You can display the extra text in a form of a question icon (tooltip) next to the label or below the option (below).

9\. After completing the option's configurations, you can head back to the light-blue section near the top of the Option Set.

10\. Specify the products you'd like the options to display on by defining an assignment rule. [Check out this other article](https://infinite-options.docs.theshoppad.com/set-up-and-manage-options/assigning-options-excluding-a-few-products) to learn more about assigning your options to your products.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-ed986bc5b7d934fbe9152618452e6c4e395e2b59%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c0f71ea5753e1285139b52file-6rwwhuno6v.png?alt=media)

11\. Lastly, don't forget to **Save** your changes.

Options may take a few minutes to display on your storefront once you've saved your changes. If your options are still not displaying on products after a few minutes, you may need to follow the installation process [explained in this article](https://github.com/shoppad/docs-infinite-options/blob/master/welcome/how-to-install/README.md).

***

**Creating an option that needs an additional cost for customization?**

Our Price Add-On feature allows you to attach an add-on product to the option selection so you can add an extra cost to your main product. Create new products like a $5.00 gift wrapping and bundle it to your option. When selected, both products will be added to cart.

[Click here to learn more about the price add-on feature.](https://github.com/shoppad/docs-infinite-options/blob/master/increase-the-cost-of-an-option/product-bundles/README.md)

# Show options on a product

Infinite Options allows assigning options to multiple products, but in some cases, you will want to display options on most of your products while excluding a few. Creating the same Option Set for many products one-by-one may not be the best option. Alternatively, using Infinite Options' Quick Start feature may not be efficient if you have hundreds of products available on your store.

Luckily, there is a workaround that can easily be done to display options on most of your products. Since Infinite Options allows you to [assign options by product tags](https://infinite-options.docs.theshoppad.com/set-up-and-manage-options/assigning-options-excluding-a-few-products), you can create tags for your products. Then add the same tag to all the products that need the same options, and ignore the products that don't need the options.

Follow the steps below to assign options with this workaround.

1\. Starting from your Shopify dashboard, click on the **Products** page.

2\. On the left-hand side, there will be a checkbox next to each product on your store.

You can do one of the following:

* Click on the checkboxes next to each product that needs the options.
* Click on the checkbox located next to the Product header and **unselect** each checkbox next to each product that **does not** need options.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-1b24c938ddf92189d6304432f638c9fad0f75893%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c1fb613f05740d9d368aa3file-shpj5kzwgx.png?alt=media)

3\. After selecting the products that need options, you can click on **"..."**, and then **Add tags**.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-744a6432d54bc284875d057b5b732799a86853c5%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c1fbc267dfc964971f7380file-qdeqoqf0cu.png?alt=media)

4\. Enter a new and descriptive tag to assign your products with, and then click **Save**. Shopify will let you know when it has successfully added the tag with the message at the bottom of your screen.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-3b36459b6aae0c77b10c25979ada34bf118d9b2d%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c1fbf04314ca4953e8c451file-yugtyehbyc.png?alt=media)

For more information about bulk actions using Shopify shortcuts, you can [click here for more information](https://help.shopify.com/en/manual/shopify-admin/productivity-tools/bulk-actions).

5\. Afterwards, head to the **Infinite Options** app and navigate to the **Option Sets** section in the left sidebar, you can then [create options](https://infinite-options.docs.theshoppad.com/welcome/create-custom-options) and [assign to products](https://infinite-options.docs.theshoppad.com/set-up-and-manage-options/assigning-options-excluding-a-few-products) for that new product tag that you just created.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-025600af642e6d77a6f6506263bbbc680d654942%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c1fc60a5753e1285139e7cfile-llbky0qo6o.png?alt=media)

You can use the **Preview matching products** feature that displays under the Option Set's assignment to see the products that have this tag.

6\. Save your changes! 🎉

# Assign Options by Tag

Infinite Options allows assigning options to multiple products, but in some cases, you will want to display options on most of your products while excluding a few. Creating the same Option Set for many products one-by-one may not be the best option. Alternatively, using Infinite Options' Quick Start feature may not be efficient if you have hundreds of products available on your store.

Luckily, there is a workaround that can easily be done to display options on most of your products. Since Infinite Options allows you to [assign options by product tags](https://infinite-options.docs.theshoppad.com/set-up-and-manage-options/assigning-options-excluding-a-few-products), you can create tags for your products. Then add the same tag to all the products that need the same options, and ignore the products that don't need the options.

**EMBED VIDEO**

Follow the steps below to assign options with this workaround.

1\. Starting from your Shopify dashboard, click on the **Products** page.

2\. On the left-hand side, there will be a checkbox next to each product on your store.

You can do one of the following:

* Click on the checkboxes next to each product that needs the options.
* Click on the checkbox located next to the Product header and **unselect** each checkbox next to each product that **does not** need options.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-1b24c938ddf92189d6304432f638c9fad0f75893%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c1fb613f05740d9d368aa3file-shpj5kzwgx.png?alt=media)

3\. After selecting the products that need options, you can click on **"..."**, and then **Add tags**.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-744a6432d54bc284875d057b5b732799a86853c5%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c1fbc267dfc964971f7380file-qdeqoqf0cu.png?alt=media)

4\. Enter a new and descriptive tag to assign your products with, and then click **Save**. Shopify will let you know when it has successfully added the tag with the message at the bottom of your screen.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-3b36459b6aae0c77b10c25979ada34bf118d9b2d%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c1fbf04314ca4953e8c451file-yugtyehbyc.png?alt=media)

For more information about bulk actions using Shopify shortcuts, you can [click here for more information](https://help.shopify.com/en/manual/shopify-admin/productivity-tools/bulk-actions).

5\. Afterwards, head to the **Infinite Options** app and navigate to the **Option Sets** section in the left sidebar, you can then [create options](../welcome/create-custom-options) and [assign to products](https://infinite-options.docs.theshoppad.com/set-up-and-manage-options/assigning-options-excluding-a-few-products) for that new product tag that you just created.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-025600af642e6d77a6f6506263bbbc680d654942%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c1fc60a5753e1285139e7cfile-llbky0qo6o.png?alt=media)

You can use the **Preview matching products** feature that displays under the Option Set's assignment to see the products that have this tag.

6\. Save your changes! 🎉
# Assigning Options: Excluding a few products

Infinite Options allows assigning options to multiple products, but in some cases, you will want to display options on most of your products while excluding a few.

{% embed url="https://www.youtube.com/watch?v=_GC-z_A0044" %}

Follow the steps below to assign options with this workaround.

1\. Starting from your Shopify dashboard, click on the **Products** page.

2\. On the left-hand side, there will be a checkbox next to each product on your store.

You can do one of the following:

* Click on the checkboxes next to each product that needs the options.
* Click on the checkbox located next to the Product header and **unselect** each checkbox next to each product that **does not** need options.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2F6qYzDapA8uA1abQeZgVO%2Fimage.png?alt=media&#x26;token=6e55dbee-3552-4cfd-bf04-fd9bf11bc126" alt=""><figcaption></figcaption></figure>

3\. After selecting the products that need options, you can click on **"..."**, and then **Add tags**.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2F6axoVmJnfHhqvUpomUlD%2Fimage.png?alt=media&#x26;token=d37bddf4-d02c-47f6-bfdc-1e8e7ed05771" alt=""><figcaption></figcaption></figure>

4\. Enter a new and descriptive tag to assign your products with, and then click **Save**. Shopify will let you know when it has successfully added the tag with the message at the bottom of your screen.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FsKK5CIjSn0gQycPj2PTk%2Fimage.png?alt=media&#x26;token=0b0b0957-8560-4103-b75b-5c1847980450" alt=""><figcaption></figcaption></figure>

5\. Afterwards, head to the **Infinite Options** app and navigate to the **Option Sets** section in the left sidebar, you can then [create options](../welcome/create-custom-options) and [assign to products](https://infinite-options.docs.theshoppad.com/set-up-and-manage-options/assigning-options-excluding-a-few-products) for that new product tag that you just created.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FJ6Zl6q2c3nElDGzHuohN%2Fimage.png?alt=media&#x26;token=90c3055e-c198-48a1-8f29-7f774435be0b" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
You can use the **Preview matching products** feature that displays under the Option Set's assignment to see the products that have this tag.
{% endhint %}

6\. Save your changes! 🎉
# Don't display options on certain products

{% embed url="https://www.youtube.com/watch?v=HymwhZLYHx0" %}

Before your options display on your store, you'll need to assign them to products.

Here, we'll explain a few different ways to assign options to products, so you can decide what suits your needs best. Follow the steps below or check out the video to get started.

***

* The **All Products** selection allows you to assign an option to all of your products.
* The **Selected Products** selection allows you to select specific products to assign options to.
* The **Products of a Specific Type** selections allows you to assign options to all products of a specific type.

1\. Once you have created an **Option Set**, you'll see a section in light-blue where you can specify which of your product pages that you would like the option to appear for.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-85b855068d68ba0695ce5ede9b206ac7e342c4cb%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c1289aa0a634459896d03ffile-teizwvjvs0.png?alt=media)

2\. The drop down menu within the light-blue box will give you the option to choose from different identifiers, such as **Tag**, Vendor, Type, URL, Handle, and All Products.

* **Tag** identifier is useful when you'd like to assign your options to products that have a certain tag set in Shopify. [Click here to learn how to add tags to your products](https://help.shopify.com/en/manual/productivity-tools/using-tags).
* The **Vendor** identifier is useful when you'd like to assign your options to all products within a certain vendor.
* The **Type** identifier is useful if there is a specific type of product you'd like to assign your options to.
* The **URL** identifier is useful when there is only one product you'd like to assign your options to.
* The **Handle** identifier is useful when you'd like a shortened version of the URL. For example, my product's URL is [https://demo-shoppad.myshopify.com/products/classic-varsity-top](https://demo-shoppad.myshopify.com/products/classic-varsity-top), which means the handle is **classic-varsity-top**.
* The **All Products** identifier is useful when you’d like to assign an option set to all of your products.

3\. Once you've selected an identifier, enter the text that matches the products you are looking for. If the text matches to a product, you will see it appear below your typed text. After you select the text, you will see how many product pages that will display these options right below.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2F4IF6V4wkAxvdTlXngkal%2Fimage.png?alt=media&#x26;token=6c6c01d7-5a80-406c-8823-f0756777bf3d" alt=""><figcaption></figcaption></figure>

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FffxNPAao0Ks39slFVQOk%2Fimage.png?alt=media&#x26;token=7dff946e-b36e-44c3-92cf-803fb3854ea1" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
Clicking the blue **preview** **link** will let you see how your options will appear on your products before saving them to your store.
{% endhint %}

4\. You can create additional rules to specify exactly which product pages you would like to assign the option fields for by clicking on **AND** and **OR** on the right.

* **AND** works best for displaying options on products that includes all of the assignments.
* **OR** works best for displaying options on products with any of the assignments.

Check out the video below to learn more about the AND & OR feature.

{% embed url="https://www.youtube.com/watch?t=103s&v=HymwhZLYHx0" %}

5\. Save your changes.

{% hint style="info" %}
Options may take a few minutes to display on your storefront once you've saved your changes.
{% endhint %}
# Don't display options on certain products

{% embed url="https://www.youtube.com/watch?v=HymwhZLYHx0" %}

Before your options display on your store, you'll need to assign them to products.

Here, we'll explain a few different ways to assign options to products, so you can decide what suits your needs best. Follow the steps below or check out the video to get started.

***

* The **All Products** selection allows you to assign an option to all of your products.
* The **Selected Products** selection allows you to select specific products to assign options to.
* The **Products of a Specific Type** selections allows you to assign options to all products of a specific type.

1\. Once you have created an **Option Set**, you'll see a section in light-blue where you can specify which of your product pages that you would like the option to appear for.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-85b855068d68ba0695ce5ede9b206ac7e342c4cb%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c1289aa0a634459896d03ffile-teizwvjvs0.png?alt=media)

2\. The drop down menu within the light-blue box will give you the option to choose from different identifiers, such as **Tag**, Vendor, Type, URL, Handle, and All Products.

* **Tag** identifier is useful when you'd like to assign your options to products that have a certain tag set in Shopify. [Click here to learn how to add tags to your products](https://help.shopify.com/en/manual/productivity-tools/using-tags).
* The **Vendor** identifier is useful when you'd like to assign your options to all products within a certain vendor.
* The **Type** identifier is useful if there is a specific type of product you'd like to assign your options to.
* The **URL** identifier is useful when there is only one product you'd like to assign your options to.
* The **Handle** identifier is useful when you'd like a shortened version of the URL. For example, my product's URL is [https://demo-shoppad.myshopify.com/products/classic-varsity-top](https://demo-shoppad.myshopify.com/products/classic-varsity-top), which means the handle is **classic-varsity-top**.
* The **All Products** identifier is useful when you’d like to assign an option set to all of your products.

3\. Once you've selected an identifier, enter the text that matches the products you are looking for. If the text matches to a product, you will see it appear below your typed text. After you select the text, you will see how many product pages that will display these options right below.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2F4IF6V4wkAxvdTlXngkal%2Fimage.png?alt=media&#x26;token=6c6c01d7-5a80-406c-8823-f0756777bf3d" alt=""><figcaption></figcaption></figure>

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FffxNPAao0Ks39slFVQOk%2Fimage.png?alt=media&#x26;token=7dff946e-b36e-44c3-92cf-803fb3854ea1" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
Clicking the blue **preview** **link** will let you see how your options will appear on your products before saving them to your store.
{% endhint %}

4\. You can create additional rules to specify exactly which product pages you would like to assign the option fields for by clicking on **AND** and **OR** on the right.

* **AND** works best for displaying options on products that includes all of the assignments.
* **OR** works best for displaying options on products with any of the assignments.

Check out the video below to learn more about the AND & OR feature.

{% embed url="https://www.youtube.com/watch?t=103s&v=HymwhZLYHx0" %}

5\. Save your changes.

{% hint style="info" %}
Options may take a few minutes to display on your storefront once you've saved your changes.
{% endhint %}
# Don't display options on certain products

{% embed url="https://www.youtube.com/watch?v=HymwhZLYHx0" %}

Before your options display on your store, you'll need to assign them to products.

Here, we'll explain a few different ways to assign options to products, so you can decide what suits your needs best. Follow the steps below or check out the video to get started.

***

* The **All Products** selection allows you to assign an option to all of your products.
* The **Selected Products** selection allows you to select specific products to assign options to.
* The **Products of a Specific Type** selections allows you to assign options to all products of a specific type.

1\. Once you have created an **Option Set**, you'll see a section in light-blue where you can specify which of your product pages that you would like the option to appear for.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-85b855068d68ba0695ce5ede9b206ac7e342c4cb%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c1289aa0a634459896d03ffile-teizwvjvs0.png?alt=media)

2\. The drop down menu within the light-blue box will give you the option to choose from different identifiers, such as **Tag**, Vendor, Type, URL, Handle, and All Products.

* **Tag** identifier is useful when you'd like to assign your options to products that have a certain tag set in Shopify. [Click here to learn how to add tags to your products](https://help.shopify.com/en/manual/productivity-tools/using-tags).
* The **Vendor** identifier is useful when you'd like to assign your options to all products within a certain vendor.
* The **Type** identifier is useful if there is a specific type of product you'd like to assign your options to.
* The **URL** identifier is useful when there is only one product you'd like to assign your options to.
* The **Handle** identifier is useful when you'd like a shortened version of the URL. For example, my product's URL is [https://demo-shoppad.myshopify.com/products/classic-varsity-top](https://demo-shoppad.myshopify.com/products/classic-varsity-top), which means the handle is **classic-varsity-top**.
* The **All Products** identifier is useful when you’d like to assign an option set to all of your products.

3\. Once you've selected an identifier, enter the text that matches the products you are looking for. If the text matches to a product, you will see it appear below your typed text. After you select the text, you will see how many product pages that will display these options right below.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2F4IF6V4wkAxvdTlXngkal%2Fimage.png?alt=media&#x26;token=6c6c01d7-5a80-406c-8823-f0756777bf3d" alt=""><figcaption></figcaption></figure>

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FffxNPAao0Ks39slFVQOk%2Fimage.png?alt=media&#x26;token=7dff946e-b36e-44c3-92cf-803fb3854ea1" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
Clicking the blue **preview** **link** will let you see how your options will appear on your products before saving them to your store.
{% endhint %}

4\. You can create additional rules to specify exactly which product pages you would like to assign the option fields for by clicking on **AND** and **OR** on the right.

* **AND** works best for displaying options on products that includes all of the assignments.
* **OR** works best for displaying options on products with any of the assignments.

Check out the video below to learn more about the AND & OR feature.

{% embed url="https://www.youtube.com/watch?t=103s&v=HymwhZLYHx0" %}

5\. Save your changes.

{% hint style="info" %}
Options may take a few minutes to display on your storefront once you've saved your changes.
{% endhint %}
# Don't display options on certain products

{% embed url="https://www.youtube.com/watch?v=HymwhZLYHx0" %}

Before your options display on your store, you'll need to assign them to products.

Here, we'll explain a few different ways to assign options to products, so you can decide what suits your needs best. Follow the steps below or check out the video to get started.

***

* The **All Products** selection allows you to assign an option to all of your products.
* The **Selected Products** selection allows you to select specific products to assign options to.
* The **Products of a Specific Type** selections allows you to assign options to all products of a specific type.

1\. Once you have created an **Option Set**, you'll see a section in light-blue where you can specify which of your product pages that you would like the option to appear for.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-85b855068d68ba0695ce5ede9b206ac7e342c4cb%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c1289aa0a634459896d03ffile-teizwvjvs0.png?alt=media)

2\. The drop down menu within the light-blue box will give you the option to choose from different identifiers, such as **Tag**, Vendor, Type, URL, Handle, and All Products.

* **Tag** identifier is useful when you'd like to assign your options to products that have a certain tag set in Shopify. [Click here to learn how to add tags to your products](https://help.shopify.com/en/manual/productivity-tools/using-tags).
* The **Vendor** identifier is useful when you'd like to assign your options to all products within a certain vendor.
* The **Type** identifier is useful if there is a specific type of product you'd like to assign your options to.
* The **URL** identifier is useful when there is only one product you'd like to assign your options to.
* The **Handle** identifier is useful when you'd like a shortened version of the URL. For example, my product's URL is [https://demo-shoppad.myshopify.com/products/classic-varsity-top](https://demo-shoppad.myshopify.com/products/classic-varsity-top), which means the handle is **classic-varsity-top**.
* The **All Products** identifier is useful when you’d like to assign an option set to all of your products.

3\. Once you've selected an identifier, enter the text that matches the products you are looking for. If the text matches to a product, you will see it appear below your typed text. After you select the text, you will see how many product pages that will display these options right below.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2F4IF6V4wkAxvdTlXngkal%2Fimage.png?alt=media&#x26;token=6c6c01d7-5a80-406c-8823-f0756777bf3d" alt=""><figcaption></figcaption></figure>

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FffxNPAao0Ks39slFVQOk%2Fimage.png?alt=media&#x26;token=7dff946e-b36e-44c3-92cf-803fb3854ea1" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
Clicking the blue **preview** **link** will let you see how your options will appear on your products before saving them to your store.
{% endhint %}

4\. You can create additional rules to specify exactly which product pages you would like to assign the option fields for by clicking on **AND** and **OR** on the right.

* **AND** works best for displaying options on products that includes all of the assignments.
* **OR** works best for displaying options on products with any of the assignments.

Check out the video below to learn more about the AND & OR feature.

{% embed url="https://www.youtube.com/watch?t=103s&v=HymwhZLYHx0" %}

5\. Save your changes.

{% hint style="info" %}
Options may take a few minutes to display on your storefront once you've saved your changes.
{% endhint %}
# Make drop-downs required

**NEEDS VIDEO EMBED**

In order for drop-down menu selections to be required, there must be a non-selectable value in place of the selectable options.

\
Follow the steps below to set up a drop-down menu that requires a customer's input:

1\. Navigate to the **Option Sets** section of the Infinite Options app in the left sidebar.

2\. Create a new Option Set if you have not done so already.

3\. Click on the grey arrow or **Label on Product** field to reveal the additional controls.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-0ad5fa495599deff1b44803e8733f99f5ad1111e%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c14b39a0a634459896d081file-9eqrlylipx.png?alt=media)

4\. Set the **Placeholder Text** to any value you'd like (this will be the non-selectable value).

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-dcde69a1696a70b618399ff1cb3bd1a9c61973e4%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c14bcba0a634459896d083file-qwbnsrlepz.png?alt=media)

5\. Click on **Show Advanced Options** hyperlink to see more advanced controls.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-07cde591812b393c418860e402dba01e3da69578%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c14c0aeb83be0e0d28c6e2file-ksffs5v6l4.png?alt=media)

6\. Select the **Yes** under the Required Field label.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-c574d8728766304ae0891b6918858a5a5407b75f%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c14c63eb83be0e0d28c6e3file-1rk7qwicnk.png?alt=media)

7\. Don't forget to **Save** your changes!
# Make drop-downs required

**NEEDS VIDEO EMBED**

In order for drop-down menu selections to be required, there must be a non-selectable value in place of the selectable options.

\
Follow the steps below to set up a drop-down menu that requires a customer's input:

1\. Navigate to the **Option Sets** section of the Infinite Options app in the left sidebar.

2\. Create a new Option Set if you have not done so already.

3\. Click on the grey arrow or **Label on Product** field to reveal the additional controls.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-0ad5fa495599deff1b44803e8733f99f5ad1111e%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c14b39a0a634459896d081file-9eqrlylipx.png?alt=media)

4\. Set the **Placeholder Text** to any value you'd like (this will be the non-selectable value).

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-dcde69a1696a70b618399ff1cb3bd1a9c61973e4%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c14bcba0a634459896d083file-qwbnsrlepz.png?alt=media)

5\. Click on **Show Advanced Options** hyperlink to see more advanced controls.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-07cde591812b393c418860e402dba01e3da69578%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c14c0aeb83be0e0d28c6e2file-ksffs5v6l4.png?alt=media)

6\. Select the **Yes** under the Required Field label.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-c574d8728766304ae0891b6918858a5a5407b75f%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c14c63eb83be0e0d28c6e3file-1rk7qwicnk.png?alt=media)

7\. Don't forget to **Save** your changes!
# Change where options display

If the options created by Infinite Options are displaying above your Shopify variants, you can add our Infinite Options app block, or install a snippet of code in your theme, so the options (Personalization text field) are displayed below the Shopify variant (Style) and above the Quantity Selector on the product page.

Here is an example:

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2F1NGay3dySOzf3CpuMDlP%2Fimage.png?alt=media&#x26;token=f58fe332-2787-4a41-84d0-510d53b3f008" alt=""><figcaption></figcaption></figure>

For instructions on placing the app block or snippet of code, follow the steps in this document or video: [Install Infinite Options](../welcome/how-to-install).

**Please note that Options created by Infinite Options can be located anywhere within the theme's product form, but it cannot be adjusted to display in between Shopify variants. This means you can only move Options above or below things like quantity, Shopify variants, or add to cart buttons.**


# Finding options on the admin side

Options selected through Infinite Options will display as line item properties within an order.

To locate them, first navigate to the order in question (within the Order on your Shopify Admin), then look below the product's title.&#x20;

In the image below, **Infinite\_options\_1** is the field name of the option, and **ABC** is the value the customer selected.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fw2ZlYc1PgKoQt0fnlFL7%2Fimage.png?alt=media&#x26;token=8ee3839a-c813-42d0-874d-a5934c3c29f5" alt=""><figcaption></figcaption></figure>

# Featured Product/Homepage

Follow the instructions below to use Infinite Options with a product on the homepage.

1\. Starting from your Shopify admin dashboard, click on **Online Store** to arrive at the **Themes** pag&#x65;**.**

2\. Find the theme you want to edit, click the **Actions** ▼ button, then click **Edit code.**

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-1687e08738673d0175261b4e8b989df329b92a3a%2Fdocsassets555e25e4e4b027e1978e1c9aimages59b1d5fc2c7d3a73488cb210file-s0chdozrng.png?alt=media)

3\. Click on the **featured-product.liquid** file located in the **Sections** folder.

Note that there may be a different filename depending on the theme on your store. Another common name is **home-product.liquid**.

4\. Copy the following code snippet.

```html
<script type="text/javascript"> window.productJSON = window.productJSON || {{ product | json }}; </script>
```

5\. Look for this code:

```
{%- assign product = all_products[section.settings.featured_product] -%}
```

6\. Paste the code snippet you copied in step 4 below the code in step 5 on the **featured-product.liquid** file.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-54fad00cd090e7d2d8223d823e4fa10c9f904b6e%2Fdocsassets555e25e4e4b027e1978e1c9aimages5a59126e2c7d3a19436830d9file-s2gv7kgdv3.png?alt=media)

7\. Save your changes.

# Dawn theme

Displaying options on a homepage's featured product on the Dawn theme

![](https://d33v4339jhl8k0.cloudfront.net/docs/assets/555e25e4e4b027e1978e1c9a/images/61c25796dbfe5a232d667acd/file-xUuiCZeBZM.png)

**Follow the instructions below to use Infinite Options with a product on the homepage.**

1\. Starting from your Shopify admin dashboard, click on Online Store to arrive at the Themes page.

2\. Find the theme you want to edit, click the  "three dots," then click Edit code.

![](https://d33v4339jhl8k0.cloudfront.net/docs/assets/555e25e4e4b027e1978e1c9a/images/65b931840b2b8f0dacd7f8a7/file-nVLI6LCXWZ.png)

3\. In the theme's files and under the Sections folder, navigate into the featured-product.liquid file.

4\. Search for this line of code:

```html
assign product = section.settings.product 
```

![](https://d33v4339jhl8k0.cloudfront.net/docs/assets/555e25e4e4b027e1978e1c9a/images/655e58bc79594218b99bbd7f/file-0oQFaSc1bv.png)

3\. Underneath the block of code found, paste the following code snippet.

```
<script type="text/javascript">
  window.productJSON = window.productJSON || {
    "handle": "{{ product.handle }}",
    "vendor": "{{ product.vendor }}",
    "tags": "{% if product.tags.size > 0 %}{{ product.tags | join: ", " }}{% else %}{% endif %}",
    "type": "{{ product.type }}",
    "product_type": "{{ product.product_type }}"
  };
</script>
```

![](https://d33v4339jhl8k0.cloudfront.net/docs/assets/555e25e4e4b027e1978e1c9a/images/655e58fa61a11f56e8753816/file-SdTVfCv3k3.png)\
\
4\. Save your changes.

5\. In the Shopify Theme Customizer, add the Infinite Options app block on the featured product.

![](https://d33v4339jhl8k0.cloudfront.net/docs/assets/555e25e4e4b027e1978e1c9a/images/655e595561a11f56e8753817/file-CPQzk403nc.png)

# Locating the Product Form

Select the instructions below to navigate to your **main-product.liquid**, **product.liquid**, or **product-template.liquid** file.

### Locate main-product.liquid file <a href="#main-product" id="main-product"></a>

1\. Starting from your Shopify dashboard, click on **Online Store**, and then click on **Themes**.

2\. Click the **Actions** icon, then select **Edit** code.

![](https://d33v4339jhl8k0.cloudfront.net/docs/assets/555e25e4e4b027e1978e1c9a/images/6228ea26c1e53608cf9e6881/file-0N0JO4xFjU.png)

3\. Click on the _main-product.liquid_ file located within the **Sections** folder.

![](https://d33v4339jhl8k0.cloudfront.net/docs/assets/555e25e4e4b027e1978e1c9a/images/6228ea77ab585b230a89ebcc/file-Ov7X7Z2tzy.png)

***

### Locate product.liquid file <a href="#product-liquid" id="product-liquid"></a>

1\. Starting from your Shopify dashboard, click on **Online Store**, and then click on **Themes**.

2\. Click the **Actions** icon, then select **Edit code.**

![](https://d33v4339jhl8k0.cloudfront.net/docs/assets/555e25e4e4b027e1978e1c9a/images/5f99dd1c52faff0016af4afb/file-TofTp1Y4e0.png)

3\. Click on the _product.liquid_ file located within the **Templates** folder.

![](https://d33v4339jhl8k0.cloudfront.net/docs/assets/555e25e4e4b027e1978e1c9a/images/5b733e630428631d7a89f94d/file-OJE5kFpzt8.png)

***

### Locate product-template.liquid file <a href="#product-template-liquid" id="product-template-liquid"></a>

1\. Starting from your Shopify dashboard, click on **Online Store**, and then click on **Themes**.

2\. Click the **Actions** icon, then select **Edit** code.

![](https://d33v4339jhl8k0.cloudfront.net/docs/assets/555e25e4e4b027e1978e1c9a/images/5f99dd1c52faff0016af4afb/file-TofTp1Y4e0.png)

3\. Click on the _product-template.liquid_ file located within the **Sections** folder.

![](https://d33v4339jhl8k0.cloudfront.net/docs/assets/555e25e4e4b027e1978e1c9a/images/5b733e3d0428631d7a89f948/file-ROEKmnkuy8.png)

# Show price changes on the product page

The Dynamic Bundle Price app block will display the product's price and adjust it accordingly on the product page based on the associated Shopify variant cost attached onto the Option set. This feature is only available on [Shopify 2.0 themes](https://help.shopify.com/en/manual/online-store/themes/managing-themes/upgrading-themes) and is not compatible with currency conversion apps or the Shopify Multicurrency feature.

Follow the steps below on how to add this app block.

1\. From your Shopify admin dashboard, navigate to **Online Store**, and then **Themes**.

2\. Next to your theme's name, hit the **Customize** button to go to the theme editor.

3\. In the drop-down menu at the top, select **Products**, and then your product template.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FfjOcnlFVqjLGCfP6NtfT%2Fimage.png?alt=media&#x26;token=06b60590-bc63-4da2-ad61-722742522ff5" alt=""><figcaption></figcaption></figure>

4\. In the left sidebar, hide or remove the Price theme block.

5\. Hover below the Price section and click **Add Block**.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FyTNJiETNLAVx1imqJizT%2Fadd-block-dynamic-price.png?alt=media&#x26;token=d1ea6a3a-b5c9-4f83-af8c-56b0f54a8a2f" alt=""><figcaption></figcaption></figure>

6\. The result should look like this.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2F9XBsbH43QsqzQQq3XspN%2Fdynamic-bundle-price-app-block.png?alt=media&#x26;token=baf639de-0351-4d6c-8def-6158f031e815" alt=""><figcaption></figcaption></figure>

7\. Click into the Dynamic Bundle Price block and adjust the styling settings.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FEUy482h2LZmd3xXXtf6a%2Fdynamic-bundle-styling.png?alt=media&#x26;token=898d6529-8348-407f-89aa-24e6446775f4" alt=""><figcaption></figcaption></figure>

8\. Hit the **Save** button at the top right of the theme editor to save your changes.

#### Limitations of the Dynamic Bundle Price app block <a href="#limitations-app-block" id="limitations-app-block"></a>

Listed below are some limitations related to the app block:

* It is strongly recommended to use the Dynamic Bundle Price app block [with the Infinite Options app block (discussed in this guide for Shopify 2.0 themes)](../welcome/how-to-install) together.
* It is strongly recommended to use this app block only with currencies that use the two-decimal value format. (i.e. 10.00)
* This is not compatible with the [Compare at price](https://help.shopify.com/en/manual/discounts/sales#set-a-compare-at-price-for-a-product) for Shopify products.
* This is not compatible with base currencies that use a comma separator for decimal values. As an alternative, you can adjust your store's currency formatting to `{{ amount }}` instead of using the `{{ amount_with_comma_separator }}` format. [Click here for more information.](https://help.shopify.com/en/manual/payments/currency-formatting)
* This is not compatible if your currency formatting contains a period.\
  For example: `{{ amount }} kr.`
* This is not compatible with currency conversion apps or the Shopify Multicurrency feature.

{% embed url="https://www.youtube-nocookie.com/embed/WVFyJyFzhl0?rel=0" %}

# Native Bundling

Native Bundling allows you to easily charge an additional cost for an option.

### What is Native Bundling?

Native Bundling is a feature that allows you to charge a cost for an option selection directly on the option value when bundling a product.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2F1mfKdivk3ue0AbCaJwmY%2Fimage.png?alt=media&#x26;token=88fd1baa-dc18-4770-a8a6-2a6a64f7d9fb" alt=""><figcaption></figcaption></figure>

When you bundle a product, set the price for the cost of the option selection in the price field to the right of the option value.

When that option is chosen, the cost of the order will adjust to reflect the price of the bundle you set.

### What is the new functionality in Native Bundling that differs from Legacy Product Bundling?

* Native bundled products do not need to be published on the Online Store sales channel.
* Prices for the bundles are set entirely in Infinite Options. The price of the bundled product is the static value that is set in the option value. Updates to the product price in Shopify will not affect the price in Infinite Options.
* If you use Shopify Markets to adjust prices, those adjustments will not be applied to bundled products. [Learn more](https://help.shopify.com/en/manual/international/pricing/price-adjustments).
* When initially creating the bundle, the product price will be used as the default value.
* On the order, products will appear bundled in the Shopify admin within a collapsible menu on the parent product that allows you to view the bundled products.
* \_io\_parent\_order\_group code will no longer be displayed in the cart, at checkout, or on the order.

### How to enable Native Bundling

In the Settings menu of the Infinite Options app, enable Native Bundling.

Any existing bundles or products will remain bundled if upgrading from legacy to the Native Bundling feature.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FoLuQ07TTMIwOqnf1FJUp%2Fimage.png?alt=media&#x26;token=0dd041a7-36c4-46bb-9d8a-bedf22195bc2" alt=""><figcaption></figcaption></figure>

### How do I display the add-on price changes on the product page?

\
Enable the dynamic bundle price block to display add on price changes directly on the product page.\
\
1\. From your Shopify admin dashboard, navigate to Online Store, and then Themes.

2\. Next to your theme's name, hit the Customize button to go to the theme editor.

3\. In the drop-down menu at the top, select Products, and then your product template.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FyPaVSO0WXYqNxWx9tr5K%2Fimage.png?alt=media&#x26;token=757ba6ea-2e5f-4d84-bf10-d1695705cad1" alt=""><figcaption></figcaption></figure>

4\. In the left sidebar, hide or remove the Price theme block.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FqImsdNG7HfLSivXZlJR9%2Fimage.png?alt=media&#x26;token=23aba654-12e9-40f6-a6b1-89b2822958d3" alt=""><figcaption></figcaption></figure>

5\. Hover below the Price section and click Add Block.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FXKwVxxGE87xNq9NYNezc%2Fimage.png?alt=media&#x26;token=bc84759c-0999-41e9-94c2-fe2e25e69666" alt=""><figcaption></figcaption></figure>

6\. The result should look like this.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FkvBSsGpI4WtlYaWazs0p%2Fimage.png?alt=media&#x26;token=0222f7a0-57bb-48af-b390-0799158ddc26" alt=""><figcaption></figcaption></figure>

7\. Click into the Dynamic Bundle Price block and adjust the styling settings.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FVwDaiLVgzb1ffI4OONiF%2Fimage.png?alt=media&#x26;token=403f6587-ce0c-4f82-b19a-2ee28cd3405a" alt=""><figcaption></figcaption></figure>

8\. Hit the Save button at the top right of the theme editor to save your changes.

# Product bundles

Infinite Options supports product bundles. A feature that allows you to attach an add-on product to the option selection so you can add an extra cost to your main product. You can create a new product like $5.00 gift wrapping and bundle to a radio button, checkbox, drop-down menu, or swatch input types. When selected, both products are added to cart.

{% hint style="info" %}
Not sure how this could help with your store? [Click here for some examples that showcase how this feature can benefit your store!](https://infinite-options.docs.theshoppad.com/popular-setups/add-on-gift-wrapping-option)
{% endhint %}

Follow the steps below on how to set up product bundles.

1\. From your Shopify admin dashboard in the [**Products**](https://help.shopify.com/en/manual/products/add-update-products#add-a-new-product) page, create a new product as the add-on product.

Ensure that you include an image for display purposes and add the appropriate price for the product. The add-on product must be available on the **Online Store Sales Channel** for the product bundles feature to function properly.

If you have already created an add-on product, you can skip this step.

2\. Navigate into the **Apps** page, and go into the **Infinite Options** dashboard.

3\. Create an Option Set and assign to your main product that needs the bundled option.

For a refresher on how to create and assign options with the app, we recommend [clicking here to learn more about creating options](../welcome/create-custom-options) and [clicking here to learn more about assigning options!](https://infinite-options.docs.theshoppad.com/set-up-and-manage-options/assigning-options-excluding-a-few-products)

4\. Add a descriptive **Label on Product** suggesting customers can add a complimentary product in addition to the main product.

5\. Change the **Label on Cart** value from **infinite\_options\_1** to something more descriptive. Be sure to keep the **Label on Cart** values unique, [as they will overwrite each other if they match.](../troubleshooting/why-are-option-selections-labeled-infinite_options_1)

6\. Create an option within an Option Set using the input type **Radio Buttons**, **Checkboxes**, **Drop-Down Menu**, or **Swatches.**

7\. Enter in a value that you would like to tie a product to.

{% hint style="info" %}
Having a value that states what the product is as well as how much it costs is **highly recommended**.
{% endhint %}

8\. Click on the price tag icon next to the option value.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FN89b4QiM1IH0AvacWRyZ%2FProduct-Bundle-IO-Update.png%20-%20Step%201.png?alt=media&#x26;token=1a1c85e4-f908-4772-8fc0-005f1d124a6e" alt=""><figcaption></figcaption></figure>

9\. Locate the add-on product (or specific variant) that you created in Step 1 and then click **Add**.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2F2R3dmfa5RvBLAnmk30ds%2FProduct-Bundle-IO-Update.png%20-%20Step%202.png?alt=media&#x26;token=4c6ff5a6-c053-41b7-84d9-c541d964aa4e" alt=""><figcaption></figcaption></figure>

11\. Click the **Save Changes** button at the top right.

Now when testing on your product page, selecting the add-on option will add that product to the cart, charging the additional cost as well. 🎉

{% hint style="info" %}
Seeing strange text under your product listings on the cart page under your product and add-on products (e.g. io\_)? [Click here to learn how to hide them.](https://github.com/shoppad/docs-infinite-options/blob/master/troubleshooting/performance-and-optimization/hide-_io_order_group-and-_io_parent_order_group-from-cart/README.md)
{% endhint %}

#### How do Bundled Options look on the backend? Which add-on goes with which selections?

Viewing the admin side of the order from your Shopify admin dashboard, you will see option selections paired with a line of code **\_io\_order\_group** so you can easily identify which selections pair with the add-on product.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FMzJBbrYyCJlDrCNx5Qrp%2FProduct-Bundle-Data-Example_png_-_Step_0.png?alt=media&#x26;token=48e32d8a-20d3-46a8-a20b-9f85504a025e" alt=""><figcaption></figcaption></figure>

### Add the Dynamic Bundle Price app block to your theme <a href="#dynamic-bundle-price" id="dynamic-bundle-price"></a>

The Dynamic Bundle Price app block will display the product's price and adjust it accordingly on the product page based on the associated Shopify variant cost attached onto the Option set. This feature is only available on [Shopify 2.0 themes](https://help.shopify.com/en/manual/online-store/themes/managing-themes/upgrading-themes) and is not compatible with currency conversion apps or the Shopify Multicurrency feature.

Follow the steps below on how to add this app block.

1\. From your Shopify admin dashboard, navigate to **Online Store**, and then **Themes**.

2\. Next to your theme's name, hit the **Customize** button to go to the theme editor.

3\. In the drop-down menu at the top, select **Products**, and then your product template.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2F0bcbGeRfkcf2Z0mIQc4Z%2FScreenshot%202025-06-13%20at%208.21.30%E2%80%AFAM.png?alt=media&#x26;token=8364bdb1-0f9e-475d-886b-9eb19a593c66" alt=""><figcaption></figcaption></figure>

4\. In the left sidebar, hide or remove the Price theme block.

5\. Hover below the Price section and click **Add Block**.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fp3dym3raCpF6dEFUUgnv%2FScreenshot%202025-06-13%20at%208.22.03%E2%80%AFAM.png?alt=media&#x26;token=f7d920a2-bca8-44b2-894c-5610704da1e9" alt=""><figcaption></figcaption></figure>

6\. The result should look like this.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2F27FUIPXUGm2KrHTiaqUg%2FScreenshot%202025-06-13%20at%208.22.40%E2%80%AFAM.png?alt=media&#x26;token=99fbcb88-dd89-40e1-a36f-183c30f72f8a" alt=""><figcaption></figcaption></figure>

7\. Click into the Dynamic Bundle Price block and adjust the styling settings.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FdrtxUgHHtxOVBL66sRgS%2FScreenshot%202025-06-13%20at%208.23.18%E2%80%AFAM.png?alt=media&#x26;token=76ec3707-4609-46c0-949d-202bb59587d9" alt=""><figcaption></figcaption></figure>

8\. Hit the **Save** button at the top right of the theme editor to save your changes.

#### Limitations of the Dynamic Bundle Price app block <a href="#limitations-app-block" id="limitations-app-block"></a>

Listed below are some limitations related to the app block:

* It is strongly recommended to use the Dynamic Bundle Price app block [with the Infinite Options app block (discussed in this guide for Shopify 2.0 themes)](../welcome/how-to-install) together.
* It is strongly recommended to use this app block only with currencies that use the two-decimal value format. (i.e. 10.00)
* This is not compatible with the [Compare at price](https://help.shopify.com/en/manual/discounts/sales#set-a-compare-at-price-for-a-product) for Shopify products.
* This is not compatible with base currencies that use a comma separator for decimal values. As an alternative, you can adjust your store's currency formatting to `{{ amount }}` instead of using the `{{ amount_with_comma_separator }}` format. [Click here for more information.](https://help.shopify.com/en/manual/payments/currency-formatting)
* This is not compatible if your currency formatting contains a period.\
  For example: `{{ amount }} kr.`
* This is not compatible with currency conversion apps or the Shopify Multicurrency feature.
# Conditional Logic

Infinite Options supports applying conditional logic between options. If you have a product with multiple options, this will allow you to use conditional rules to show or hide options depending on if a specific option is selected.

***

### Curious about the basic setup?

Let's say that you would like to show the text field only if the customer selected yes to adding an engraving text to a product, otherwise when they select no do not show the text field. Follow the steps below on how to set this up.

1\. In your Infinite Options dashboard, create **two options fields** within an Option Set. (learn all about setting up option fields with this tutorial video - [click here!](https://infinite-options.docs.theshoppad.com/welcome/create-custom-options))

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FUCJx9Wk0qrIEFxcEYYHo%2Fimage.png?alt=media&#x26;token=8524c056-6d4e-464f-986e-57ecd905af3e" alt=""><figcaption></figcaption></figure>

Conditional logic works between options fields in the **same** option set.

2\. In your first option field, select **Radio Buttons** as the input type and add in the values **Yes** and **No**.

3\. In your second option field, select **Text** as the input type.

4\. Click on **Show Advanced Options** link in your second option field.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FLCWWdTWWzqqF5mnehhVo%2Fimage.png?alt=media&#x26;token=28fd8155-21a7-48a5-95c0-cd7f523f7dab" alt=""><figcaption></figcaption></figure>

5\. Click on **Create a new conditional rule** in the Conditional Logic section.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FBAabQZDyj94TDW5uOh7S%2Fimage.png?alt=media&#x26;token=0b26cf31-c547-41f2-9942-0b0ddd767fdf" alt=""><figcaption></figcaption></figure>

By default, options are set to **show** depending on if **all** the following conditional rules match.

6\. Click on the **Field Name** drop down menu and select the field name and label that corresponds to your first option field. This will show a match from the first option field and you do not need to type anything in.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FgbWfuSLp3kJxOievThW8%2Fimage.png?alt=media&#x26;token=fc2dcb33-519f-4c05-8ea3-94df9c1fd8da" alt=""><figcaption></figcaption></figure>

7\. If you would like your second option field to display if "Yes" is selected on the first option field, then type **Yes** after the Contains drop down menu.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fr4MR2FiTPO6xeI023yRv%2Fimage.png?alt=media&#x26;token=54e2e974-e9a2-464c-852f-4747ac02a739" alt=""><figcaption></figcaption></figure>

8\. Click the **Save Changes** button in the header of your Option Sets menu.

You have now created a simple conditional logic flow. Good work! 👍
# Uploadery

## Show or hide Uploadery fields based on Infinite Option selections

You can use [Uploadery](https://apps.shopify.com/uploadery) along with [Infinite Options](https://apps.shopify.com/custom-options) to show or hide upload fields based on an Infinite Option's option selection. Follow the instructions below to set this up.

**Note**: Before proceeding, please have [Infinite Options](https://apps.shopify.com/custom-options) and [Uploadery](https://apps.shopify.com/uploadery) currently installed on your store.

1\. On the Uploadery app dashboard, in the **Option Sets** tab, create an upload set that you want to conditionally show or hide based on an option from Infinite Options. If you would like to use an existing upload set, that will work as well.

Make sure to assign the Option Set to Infinite Options by selecting **Show for Infinite Options** or else Infinite Options won't be able to locate your Option Set from Uploadery.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FczQgvjEdXjMJOnIndsnl%2FUploadery-IO-doc.png%20-%20Step%201.png?alt=media&#x26;token=b672004a-3d4c-4257-bb1c-4371ed050acc" alt=""><figcaption></figcaption></figure>

2\. Add a descriptive **Label** suggesting customers can upload their own file.

3\. Change the **Field Name** value from uploadery\_1 to something more descriptive. Be sure to keep the Field Name values unique, as they will overwrite each other if they match. Then, click on **Save Changes**.

4\. Click on **Apps** in the left sidebar of your Shopify admin.

5\. Navigate into the **Infinite Options** app dashboard and create an Option Set (if you haven't done so already). Repeat steps 2 and 3. Make sure to [assign the Option Set](https://docs.theshoppad.com/article/134-assign-options-to-products) to any products that apply.&#x20;

{% hint style="info" %}
**Note:** Please make sure to only create one Option Set on Infinite Options for the specified products with Uploadery involved. Creating multiple option sets while integrating with Uploadery will not work.&#x20;
{% endhint %}

6\. When you are ready to add the upload field from Uploadery into the Option Set, click on the **Import from Uploadery** button.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FeZfUeNGisw10akJbBMOl%2FImport-IO-Uploadery.png%20-%20Step%201.png?alt=media&#x26;token=f1f165fc-40de-46a8-ae9c-74e454379379" alt=""><figcaption></figcaption></figure>

7\. **Select** your desired upload field that you want to import into this Option Set.&#x20;

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FmvpCn87cPWlDt7a0xhX5%2FImport-IO-Uploadery.png%20-%20Step%202.png?alt=media&#x26;token=cd87e53c-23a9-4141-8a0c-14442b94c20a" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
You will not be able to edit the Upload Field on Infinite Options, but if you need to make any adjustments, you can head back to the Uploadery dashboard.
{% endhint %}

8\. Click to **Create a new conditional rule** in the newly imported upload field.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2F52boHHHpXMDxho3z3N4D%2FUploadery-IO-doc.png%20-%20Step%201%20(1).png?alt=media&#x26;token=f064c955-a249-4a3d-9ab7-7f53cad97425" alt=""><figcaption></figcaption></figure>

9\. You'll then want to create your desired [conditional rule](https://docs.theshoppad.com/article/612-conditional-logic).

10\. **Save** your changes.&#x20;

Now the upload field will show or hide based on the option selection! 🎉

{% hint style="info" %}
**Note:** Previewing the option set from the Infinite Options dashboard will not show this conditional logic properly. To avoid this, simply view the product as if you were a customer, without using the Preview feature.
{% endhint %}

# Dropdown menus

The [conditional logic]() feature allows you to create many different use cases. This guide shows how to create sub-menus for a phone case product.

Watch the video below or follow along with the step-by-step instructions on how to create sub-menus.

***

{% embed url="https://www.youtube-nocookie.com/embed/TNOTKjzTmg8?rel=0" %}

1\. We'll start by creating an option set assigned to the phone case product. The first option created is to select the type of phone, Android or iPhone. We are using the **Drop-Down Menu I**nput Type.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FQtcXcUHtfHnzrRSVoThI%2Fimage.png?alt=media&#x26;token=5ab62fda-0bd7-4922-b838-713cd8d9432a" alt=""><figcaption></figcaption></figure>

2\. Next, we will create some options for the sub-menus. In this case, the sub-menus will be the type of Android and iPhone models to choose from. Click on the **Add Another Custom Field** button to create these in the same option set.

Shown below is the **Android Model** option with Samsung and Google option values:

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FkeOUQr9ujoIbrcYIcPnR%2Fimage.png?alt=media&#x26;token=64e02b32-6646-40f9-b7b4-7aa64d22972c" alt=""><figcaption></figcaption></figure>

At the bottom of the option, click **Show Advanced Options** to view additional settings, including **Conditional Logic**.

Let's set up conditional logic to only display the **Android Model** option if "Android" is chosen in the previous **Phone Type** option.

3\. Once you click on **Create a new conditional rule**, you can set it up as follows:

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FFvHBIgK1DwvXZMTmRB7P%2Fimage.png?alt=media&#x26;token=e4151156-f3d3-40b3-a09a-81f4aee41ac1" alt=""><figcaption></figcaption></figure>

The first field, **Phone Type, "Phone Type"**, will automatically display when you click on the **Label on Cart** field. You'll then want to type out the exact value that you want the option to display on, in this case, **Android**.

4\. You can then create another field and follow the same steps for **iPhone**.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FV5x8nTtQJ1o0hFtlRBf7%2Fimage.png?alt=media&#x26;token=1dd5b76e-ed96-411b-bf6d-d3a6edde6b7d" alt=""><figcaption></figcaption></figure>

In this situation, the conditional logic rule has **iPhone** set for the value.

To create a cascading sub-menu option, we can create another sub-menu for Google devices within the Android Phone Type option.

5\. We would just need to add another option and set it up as follows:

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FgM7tlgOfWZuUfYgOIDLD%2Fimage.png?alt=media&#x26;token=3099a35a-d3d0-4818-823d-1be1789e9805" alt=""><figcaption></figcaption></figure>

Here, the conditional logic rule has **Android Model, "Android Model"** as the Label on Cart and **Google** as the value.

You can add as many cascading sub-menus as you'd like using conditional logic.

6\. Save your changes.

Be sure to test out your options to make sure they work just right! 🎉

# Swatches

Infinite Options supports applying conditional logic to swatches and vice versa.

### Scenario One

One example would be displaying a textbox option based on a specific swatch value option selection.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Ft5PTqOMkRIIqx9nPgmdt%2Fimage.png?alt=media&#x26;token=2d057fd0-be69-4464-9d3e-73f0cfe4eee0" alt=""><figcaption></figcaption></figure>

**Instructions**

Check out the following steps on how to get this set up. For a refresher on how create conditional logic, we recommend checking out this guide: [Click here!]() For a refresher on how to create swatches, we recommend checking out this guide: [Click here!](swatches)

1\. To start off, you will want to create your first option that will display the swatches. In this case, we created different types of swatch values displaying different fonts.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fc3EHaCkrd99p392DzUKl%2Fimage.png?alt=media&#x26;token=28dc3bf8-173b-4751-94d1-d81d9fd8ed66" alt=""><figcaption></figcaption></figure>

2\. Then, you will want to create the second option that will display depending on the swatch option value selection. In this case, we created a textbox option asking which custom font the customer would rather have.

3\. Lastly, you will want to click on **Show Advanced Options** under the second option. Then, click on the correct **Label on Cart** and make sure that it contains your affirmative value above. Pick the **Label on Cart** of the option that you would like your second option to depend on.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fo3I9vzSRFTfyZNhlGiib%2Fimage.png?alt=media&#x26;token=1639f97e-760e-4e1e-a904-dca20144c8c2" alt=""><figcaption></figcaption></figure>

4\. Save your changes. You are all set!

### Scenario Two

One example would be displaying colors based on the previous option value selection.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FQL16eXoDpInqi7VlmYIf%2Fimage.png?alt=media&#x26;token=91a92b03-c947-40d7-a3b1-6b53c59f7ed8" alt=""><figcaption></figcaption></figure>

**Instructions**

Check out the following steps on how to get this set up. For a refresher on how create conditional logic, we recommend checking out this guide: [Click here!]() For a refresher on how to create swatches, we recommend checking out this guide: [Click here!](swatches)

1\. To start off, you will want to create your primary option. In this case, we created a checkbox option asking whether the customer would like their case in a different color or not.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FsbpGHmjqpbprOZVLVJnU%2Fimage.png?alt=media&#x26;token=2a11432a-7289-43cc-9ec8-572311486ef9" alt=""><figcaption></figcaption></figure>

2\. Then, you will want to create the second option as a **Swatches** Input Type. Go through the process and upload images or pick colors per each swatch value.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FhnqXXXXHVh9g3iDugTOi%2Fimage.png?alt=media&#x26;token=87a1a15e-8fb7-4234-a870-b9d8123be7ea" alt=""><figcaption></figcaption></figure>

3\. Lastly, you will want to click on **Show Advanced Options** under the second option. Then, click on the correct **Label on Cart** and make sure that it contains your affirmative value above. Pick the **Label on Cart** of the option that you would like your second option to depend on.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FYvYVDDhCz5JRLZT4oYhj%2Fimage.png?alt=media&#x26;token=6c307d5b-53ac-4cac-87e6-12baaa92a822" alt=""><figcaption></figcaption></figure>

4\. Save your changes. You are all set!

# Up-charge Pricing + Text Box

This guide shows how to display an embroidery/engraving text box when a checkbox is selected, resulting in an additional cost.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-c329a6d35fc6563c142b70f8eb0e0a01eaf44f6c%2Fdocsassets555e25e4e4b027e1978e1c9aimages680ab542f072c45496107369file-bosuecfc3y.png?alt=media)

Please watch the video below or follow the step-by-step instructions to set this up for your products.

{% embed url="https://www.youtube-nocookie.com/embed/NdiuTXKBS8M?rel=0" %}

1\. Create a new option set with a checkbox, dropdown, or radio button option. This option should ask if the customer wants to add embroidery/engraving for an additional cost.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-0a58e8ccd375075670456844a63580115cc8f66c%2Fdocsassets555e25e4e4b027e1978e1c9aimages67e71af8a44cc41eebaa72e3file-fgwgwn5tob.png?alt=media)

2\. Click on the price tag icon to the right of the value. To include an additional cost, [bundle](https://infinite-options.docs.theshoppad.com/increase-the-cost-of-an-option/native-bundling) your engraving product to the option value that represents "yes".

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-074ffd8ebd1b407aff2039ca3ced99e54f4cce5d%2Fdocsassets555e25e4e4b027e1978e1c9aimages67e71f3b6659e6583855fa6cfile-swxonpowrb.png?alt=media)

We highly recommend adding the cost in the option value for customer transparency. (i.e. "Yes please +$5")

3\. Make sure you have a product created on your store for this add-on option. In this case, I will be using a product called Embroidery Add-on:

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-c900161c934bbfbbdaeaf58cec6425827a68db5b%2Fdocsassets555e25e4e4b027e1978e1c9aimages67e72095c43e86258f6f9a69file-xzfpdbe7fr.png?alt=media)

4\. Select the product that applies, click **Add**, and then click **Done** to complete set up.

5\. Open the **Advanced Options** and add **1** to **Max Selections**. This will prevent customers from selecting both checkbox options.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-ed3c1f08ed49252c59b1e829c27a8b529a577641%2Fdocsassets555e25e4e4b027e1978e1c9aimages67e724f36659e6583855fae9file-dmj2dnt6el.png?alt=media)

6\. Next, create the text box option for the embroidery/engraving text by selecting **Add Another Custom Field** at the bottom of your option set.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-0b9e90888869150b28cad15f6256a5f03c12c7e0%2Fdocsassets555e25e4e4b027e1978e1c9aimages67e72d1e9935550bd59a00ccfile-v4ru4j0ik2.png?alt=media)

7\. Input the desired Label on Product and Label on Cart. Here, we will label it "Custom Text".

8\. Open the **Advanced Options** to create the new conditional rule and mark the option as required.

The conditional rule will be to display this text option when a customer selects "Yes please! +$5". We can simply say Contains "Yes" for this rule.

Your option should look similar to the screenshot below:

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-ad91971cb0c810cc9706d1d0327bd8ad8286dad6%2Fdocsassets555e25e4e4b027e1978e1c9aimages67e730a2a44cc41eebaa7394file-qnorxeuwv0.png?alt=media)

9\. Save your changes! Now you have created a price add-on with a conditional text box. Well done!
# Mix & Match Variety Pack or Gift Pack Example

This guide will show you how to create mix-and-match options for four different candles in a variety pack. [Click here for a live example.](https://demo-shoppad.myshopify.com/products/candles-variety-pack)

{% embed url="https://www.youtube-nocookie.com/embed/gRHqI84sgG0?rel=0" %}

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-1e88eb4f72879197071c0511ca78a978fe9003dd%2Fdocsassets555e25e4e4b027e1978e1c9aimages67d8e7a6a1de7010254f850dfile-9t8w1zoorv.png?alt=media)

1\. First, create an option set and assign it to the mix and match product. Here, we assign our product using the "mix and match" tag.

2\. The first candle scent option will use the **drop-down menu** input type. Add a Label on Product and Label on Cart to specify the candle.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-a2d08b7c597f8760ce63a05dcf69c9604b755d73%2Fdocsassets555e25e4e4b027e1978e1c9aimages67d8df2aa1de7010254f8502file-owtqs8pbrz.png?alt=media)

3\. In the Advanced Options, you can set the option to be a required field.

If you select Yes for Required Field, you'll need to add **Placeholder Text**. Otherwise, the first drop-down option value will automatically be selected.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-d6dca986e3821b4301e750f3d25792a19ea93b4a%2Fdocsassets555e25e4e4b027e1978e1c9aimages67d8c8b9a1de7010254f84dbfile-zid5a65xnd.png?alt=media)

4\. Once your first option is created, you can **duplicate** the first option by clicking the "Duplicate" icon shown below.

5\. we will need to duplicate our first option three times. You will then see four duplicates of the first option.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-21418bc6e43db1dd27150122f5d7e743cb488313%2Fdocsassets555e25e4e4b027e1978e1c9aimages67d8cbb2a1de7010254f84ddfile-j8sumxzfds.png?alt=media)

6\. Open all of your options and change the Label on Product and Label on Cart to specify the candle in the variety pack. You'll notice that the Label on Cart will display "\_copy" for each duplicate created.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-59f52c501f17370688b078e3ba11123b832d0372%2Fdocsassets555e25e4e4b027e1978e1c9aimages67d8e52da1de7010254f8508file-bbj3ezaymh.png?alt=media)

7\. After you edit the Label on Product and Label on Cart of each option, you should have an option set that looks like this.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-7c1044f38b002334b3db1e81d3bffb40b16c3765%2Fdocsassets555e25e4e4b027e1978e1c9aimages67d8d1abfe139f563967619bfile-7oojicqyzt.png?alt=media)

8\. **Save** your changes and view your product. You are all set! 🎉

# Add on Gift Wrapping Option

Infinite Options allows for many different use cases. In this scenario, we'll be showcasing how to offer an up-charge gift wrapping option as an add-on to your main products.

{% hint style="info" %}
For a refresher on how to create and assign options with the app, we recommend checking out these helpful guides: [Click here to learn more about creating options](https://github.com/shoppad/docs-infinite-options/blob/master/welcome-to-infinite-options/create-custom-options/README.md) and [click here to learn more about assigning options!](https://docs.theshoppad.com/article/134-assign-options-to-products)
{% endhint %}

1\. Start by creating a Gift Wrapping product on your **Shopify Products** page. Ensure that you include an image for display purposes and add the appropriate price for the product. _This product must be available on the Online Store sales channel for the price add-on to function properly._

2\. In the dashboard, create an option set assigned to your main product that needs the gift wrapping option. Label your option set clearly so you can identify which existing option set corresponds to which for future reference.

3\. Change the **Label on Cart** value from infinite\_options\_1 to something more descriptive. _In this example, the field name is: **Gift Wrap**._

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FOt7G1nUAQjAhnFfJUXLY%2FGift-Wrap-Example-1.png%20-%20Step%201.png?alt=media&#x26;token=34cb707a-e4c9-43ad-9c70-da960e0d346d" alt=""><figcaption></figcaption></figure>

4\. Change the **Input Type** to **Swatches**.

5\. In the **Option Values** section, write a descriptive option telling customers that the gift wrapping option is an extra charge in addition to the main product.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FOOfKyAu7D882j73tsJNJ%2FGitbook%20Workflow%20-%20Step%205.png?alt=media&#x26;token=cf507308-2d23-46ba-874d-ece84f2a71e2" alt=""><figcaption></figcaption></figure>

6\. You will see an **Add Image** icon to the left of the option. Click on this icon.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FyB4vPC3nffyv5D3ztXw5%2FGitbook%20Workflow%20-%20Step%201.png?alt=media&#x26;token=d0eae4ed-f489-4954-a468-6b271cf5062d" alt=""><figcaption></figcaption></figure>

7\. To attach an image, you can click on **Image Upload**. Click on **Choose File** to upload your image.

{% hint style="info" %}
The maximum file upload size is 1 Megabyte. Additionally, square images are ideal for your swatches.
{% endhint %}

8\. Click the **Save Changes** button.

9\. Next, click on the **Price Tag** icon next to the option value.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FbTz4vxNOUANZX1GLaDYZ%2FGitbook%20Workflow%20-%20Step%203.png?alt=media&#x26;token=3eda4812-ae42-4c2e-9e5a-c25cab02fa49" alt=""><figcaption></figcaption></figure>

10\. Locate the Gift Wrapping product and then click **Add**.

11\. Click on the **Done** button to bundle the add-on product to the option value.

12\. Click on **Show Advanced Options** and select **Yes** to **Allow Multiple Selections**. That way, the swatch is not automatically selected when customers view your product page.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FBqbJs6PnDHSTjumcg1Vi%2FGift-Wrap-Example-2.png%20-%20Step%201.png?alt=media&#x26;token=dc70dbdf-0e2d-40be-aa22-c0a1d96530ea" alt=""><figcaption></figcaption></figure>

13\. **Save** your changes.

If you would like to customize the look of your swatch, [click here to learn more!](../inputs-and-field-settings/create-swatches/customize-swatches-using-css) 🎉

{% hint style="info" %}
Seeing strange text on the cart page under your product and add-on products (e.g. io\_)? [Click here to learn how to hide them](https://github.com/shoppad/docs-infinite-options/blob/master/troubleshooting/performance-and-optimization/hide-_io_order_group-and-_io_parent_order_group-from-cart/README.md).
{% endhint %}

# Multiple Engraving Initials

This example showcases how to create multiple initial text options based on the number of letters selected.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-5c0a61d462e4179964263611655b84908620cfec%2Fhelpscoutnetdocsassets555e25e4e4b027e1978e1c9aimages67e61c75a57d2d46d4108375file-tbxysy7zg9.png?alt=media)

This configuration requires setting up [conditional rules](../conditional-logic). Please watch the video or follow the instructions below to set this up for your products. 🎉

***

1\. Create a new option set with a drop-down menu option. Your option set and first option should look similar to the following:

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-fd720213e1c3e0d6ac3c0c4b4670a87689e5fe63%2Fhelpscoutnetdocsassets555e25e4e4b027e1978e1c9aimages67e5e3f79935550bd599fb99file-wseguvynhs.png?alt=media)

Since the Number of Letters option allows the customer to select 1, 2, or 3 initial letters, we'll need to make three additional custom fields to represent each initial.

2\. Create a custom text field for your first conditional option, 1st Initial. This is what the field should look like:

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-e4edceca917cc50ca3b7a17ec95ae96f416935e3%2Fhelpscoutnetdocsassets555e25e4e4b027e1978e1c9aimages67e61000c43e86258f6f95e4file-tyvqp7vwxl.png?alt=media)

3\. Select **Show** **Advanced Options** to reveal the Conditional Logic section, and add Placeholder Text with a Character Limit of 1.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-a3964ded7bb5943a1eca240ac48d97bca7d1943a%2Fhelpscoutnetdocsassets555e25e4e4b027e1978e1c9aimages67e6efbf9935550bd599ff3ffile-diyflp0tle.png?alt=media)

4\. Next, create a new conditional rule to display the 1st Initial when 1, 2, or 3 letters are selected.

To achieve this, we'll set it to show when the customer selects any "Number of Letters" value greater than 0:

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-256339bc7193362623e46023e7a5bf1d3e32b64f%2Fhelpscoutnetdocsassets555e25e4e4b027e1978e1c9aimages67e6f15e5cad390a94c045d2file-bp1ghgab46.png?alt=media)

5\. Now that we've set up the first option, we'll create a similar custom field for the 2nd Initial.

Here, we'll set the conditional rule so that the 2nd Initial displays when the "Number of Letters" value is greater than 1:

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-9907f203533d83e967a271d9c3699d7d433f0edf%2Fhelpscoutnetdocsassets555e25e4e4b027e1978e1c9aimages67e6f5e75cad390a94c045e9file-kcdkdkldyp.png?alt=media)

6\. Lastly, create the last custom field for the 3rd Initial conditional option.

The conditional rule for this will be to display the 3rd Initial option when the "Number of Letters" value is greater than 2:

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-01cf782bf078e37efd64f99dd49747ffda61da17%2Fhelpscoutnetdocsassets555e25e4e4b027e1978e1c9aimages67e6f608a44cc41eebaa71c1file-2nehl7juwl.png?alt=media)

8\. Save your changes! You are all set! 🎉


# TROUBLESHOOTING

# Why are option selections labeled "infinite\_options\_1"?

By default, **infinite\_options\_1** is the generated **Label on Cart** Infinite Options uses for options. This label is displayed at checkout with the customer's selection. Follow the instructions below to change the field name value(s) to better match your option(s).&#x20;

1\. Starting from the Infinite Options dashboard, navigate to the option in question.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fl1VzzNirkmfnI8WmrwuG%2Foption-set-1.png?alt=media&#x26;token=de3335d7-da5f-4855-a26d-0019865d0d04" alt=""><figcaption></figcaption></figure>

2\. Click on the **arrow** by the **Label on Product** to open up the additional settings.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FeD4E7TxsTPWm9B1bQfW2%2Fselect-arrow-more-options.png?alt=media&#x26;token=b7fa7378-5775-43d5-9105-de42690d7a8d" alt=""><figcaption></figcaption></figure>

3\. Change the **Label on Cart** value from **infinite\_options\_1** to something more descriptive of the option.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FyOBOdjsLwVH9KEB6w12o%2Fupdate-label-on-cart.png?alt=media&#x26;token=7dd6be3a-c588-42e5-a987-d6ca5e4efb3a" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
Be sure to keep the **Label on Cart** is unique for each option, as they will overwrite each other if they match.
{% endhint %}

4\. Save your changes.

# Options are showing on desktop and not mobile

By default, Shopify apps load after the page is generated, to ensure that options are loading and displaying on mobile we recommended adding the faster loading script to ensure the app and options are loaded promptly on the product page.

1\. From your Shopify admin, click Online Store to arrive at the Themes page.

2\. Find the theme you want to edit, click the Actions button, then click Edit code.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FJSbJnC9QFACIFPflJvbQ%2Fimage.png?alt=media&#x26;token=6e622e09-6f73-439a-a32b-5fa915ef4363" alt=""><figcaption></figcaption></figure>

3\. Click on the theme.liquid file that's located in Layouts folder.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FoT61eVS7oQUI9Xk0Io9x%2Fimage.png?alt=media&#x26;token=b58be72e-b37c-4665-9f05-c0050f5b4bef" alt=""><figcaption></figcaption></figure>

4\. Paste the following code snippet after the \<head> tag.

```html
<script src="//d1liekpayvooaz.cloudfront.net/apps/customizery/customizery.js?shop={{shop.permanent_domain}}"></script>
```

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FP5DZwIZg1DFdBagfwv2o%2Fimage.png?alt=media&#x26;token=15ee4496-7252-42f1-be93-03fcf31bd266" alt=""><figcaption></figcaption></figure>

5\. Save your changes.

# Options are not showing on the backend

**Possibility 1**

**Check that the App Block is in the Correct Location**

If your option selections aren’t showing on the backend of your orders, the app block may not be placed correctly in your theme.

To work properly, the Infinite Options app block must be added to the **product template** in your Shopify theme editor. Follow the steps in [\[this article](../install-infinite-options)] to confirm the app is installed in the correct location.

**Possibility 2**

If customers can click **Add to Cart** before the customization options appear, the app may be loading too late on the product page.

We recommend adding a short code snippet that helps prioritize the loading of Infinite Options. This ensures the option fields appear quickly when the page loads.

Follow the steps in \[[this article](performance-and-optimization/remove-loading-delays)] to add the snippet to your theme.

**Possibility 3**

Some themes use a feature called **Quick Shop** or **Quick View**, which lets customers add products to their cart directly from the collection or home page. This bypasses the full product page, so customers won’t see or fill out the option fields.

We recommend disabling this feature in your theme settings to ensure customers complete all required options.


## Resolving "Cannot Find Variant" Error

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FIrNoHyrR2dEfEZeKxd5Z%2Fimage.png?alt=media&#x26;token=8cf448f0-930d-4527-a77c-43a88ee3a872" alt=""><figcaption></figcaption></figure>

If an add-on product isn’t active or included in the Online Store Channel, Shopify won’t add it to the cart and will display the 'cannot find variant' message.

### To troubleshoot and resolve the error:

1\. Locate the option set that is displaying the add-on product\
\
Navigate to the app dashboard and select "Option Sets"

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FISqMZ31KdP9afOQ95Sr5%2Ffile-66SMQOcuvm.png?alt=media&#x26;token=c43390d5-19fc-4334-895f-4bcc7c093391" alt=""><figcaption></figcaption></figure>

2\. Locate the option set with the add-on product and click to examine the bundled product

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-2d904654fbddc3d2c43e5e4223e6a40f671eff80%2Fdocsassets555e25e4e4b027e1978e1c9aimages67d352d9f9d2af062999539ffile-su8nffjzrs.png?alt=media)

If clicking the bundled product displays "Sorry, no products match this option set to preview."

The original product has been deleted, and you will need to bundle the option to the updated or available version of the product.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fn70EgwRy8cRWyslp7Rbh%2Fimage.png?alt=media&#x26;token=01e3b4f7-4dea-44c9-a96d-870c3b7a4817" alt=""><figcaption></figcaption></figure>

If the bundled product is displayed in the editor, you will want to view the **Shopify Product Page**

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FNojbrmHPAbk9eWS9w8jZ%2Ffile-xdEYfwf3QR.png?alt=media&#x26;token=31ed2768-34bd-4aba-9f03-28ac1ce32d2e" alt=""><figcaption></figcaption></figure>

Navigate to your Shopify products and confirm the product has an "active" status and assigned to the Online Store Channel

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FvDAPgDoshl3g0GCf3ZxL%2Fimage.png?alt=media&#x26;token=961f0ccd-5d3d-4ed9-bac5-e7abe012363c" alt=""><figcaption></figcaption></figure>

Once you mark the product as "Active"\
\
Save your changes and test the product page to confirm the product and add-on products are successfully added to the cart.


# How to disable Infinite Options

If you ever need to disable the app momentarily, you can go to the **Settings** section of the Infinite Options app in the left sidebar.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-d2a1767acfc0f43017936347918491ba979f0f03%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c26d128d85554a90d68acbfile-hraca4guqd.png?alt=media)

Then, toggle the button off and click on **Save Changes**.

If you simply need to disable [Native Bundling](https://infinite-options.docs.theshoppad.com/increase-the-cost-of-an-option/native-bundling), you can toggle Native Bundling off via the Settings as well. Doing this will revert your product bundles to [legacy bundling functionality](https://docs.theshoppad.com/article/1905-moving-from-legacy-to-native-bundling).

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-57a58cebbff1f366eb2caaa7b785300c57b3bf5c%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c26c168d85554a90d68acafile-xuelocrmxn.png?alt=media)

# Display option selections in the cart page

Displaying the option selections in the cart page is a great way to assure your customers that their selections are added to the order and that you will receive it once they purchase the item. Follow the steps below to get started.

Before proceeding, it's a good idea to test whether or not your options are already appearing on the cart page. Most themes support this by default, so you may not need to add additional code.

### Getting Started...

1\. From your Shopify admin, click **Online Store** to arrive at the **Themes** page.

2\. Find the theme you want to edit, click the three dots to the left of the **Customize** button, then click **Edit code**.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FUt0Y6sg5f5CXCqTdntMm%2Fedit-code.png?alt=media&#x26;token=152e927c-9841-474e-8cdc-f74f9806944d" alt=""><figcaption></figcaption></figure>

3\. On the left side, under the **Templates** heading, click on the **cart.liquid** file.

4\. If you see that your cart.liquid file is guiding you to your cart-template.liquid file. Go into the **cart-template.liquid** file under the **Sections** folder. Otherwise, continue to the next step.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-94a6d17c3616eaa913b0f5fa6a681c23199f8d57%2Fdocsassets555e25e4e4b027e1978e1c9aimages5f18a5a22c7d3a10cbab2865file-yqrodrwddo.png?alt=media)

5\. Locate the product's title by searching for either **item.title** or **item.product.title**.

```liquid
item.title
```

```liquid
item.product.title
```

When searching for the product's title, if you notice a few lines below that start with **for p in item.properties** or **for p in properties**, this means your theme already supports displaying the option selections.

6\. Copy and paste the following code snippet below your product title or variants.

```liquid
{% for p in item.properties %}
  {% if p.first contains '_io_' %}
    {% continue %}
  {% endif %}
  {% unless p.last == blank %}
    <br />{{p.first}}: {{ p.last }}
  {% endunless %}
{% endfor %}
```

Product variants tend to appear below the product title. They can be found by looking for **\{{ item.variant.title \}}.**

7\. Save your changes.

Below is an example. Placement will vary depending on your theme.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-f92bdb3f828499300914356a43348447c998596e%2Fdocsassets555e25e4e4b027e1978e1c9aimages5f18a9a02c7d3a10cbab28a6file-nl1o4ybxr8.png?alt=media)

Option selections now display on your cart page!

Here is an example of a cart page where the selection **Bear** has been chosen for the **Cartoon design** option under the product's title.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-bafb240fd3b6dd75edfcb9617a7a1571e4ba9b56%2Fdocsassets555e25e4e4b027e1978e1c9aimages5f18ad692c7d3a10cbab28eefile-ov4hksgbbw.png?alt=media)


# Quick Shop Feature

Infinite Options cannot display custom options inside Quick Shop features. We recommend disabling this feature or modifying the view to only show the image, title, and description. Removing the "Add to Cart" button, Quantity and any variants from displaying will help minimize problems when orders are created yet options are missing.


# My options are not showing

In this article, we will go over how to resolve the issue with your options not displaying on the front end (product page) or the back end order (Shopify admin). There are a few different tools you can double-check.

#### If the options are not displaying on your product page:

* First and foremost you will want to make sure the application has been properly installed:
  * [Install Infinite Options](../install-infinite-options)
* Ensure you have read over the Create Options for Products support article
* Option Sets need to be assigned correctly to the products. We suggest taking a look at these support articles below if you haven't yet already:
  * [Assigning Options: Excluding a few products](../set-up-and-manage-options/assigning-options-excluding-a-few-products)
  * [Don’t display options on certain products](../set-up-and-manage-options/dont-display-options-on-certain-products)
* By default, Shopify apps load _after_ the product page is generated. You may need to decrease the time it takes to load the app by following the instructions in this support article:
  * [Decrease Infinite Options' load time](performance-and-optimization/remove-loading-delays)
* Make sure the product options are in an active status and have been added to the online store channel:

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FWbZS5Mv48pUttbrcLQ0O%2Fonline-store-active.png?alt=media&#x26;token=89b6f18c-42ce-4a4d-8e41-4e09d7b95664" alt=""><figcaption></figcaption></figure>

* If you happen to have Conditional Logic applied, you will want to make sure it has been set up correctly:
  * [Conditional Logic](../conditional-logic)
  * [Conditional Logic with Swatches](../conditional-logic/swatches)
  * [Charging more for custom text](../popular-setups/up-charge-pricing-and-text-box)
  * [Conditional Logic for drop-down menus](../conditional-logic/dropdown-menus)
  * [Conditional Logic for Engraving Initials](../popular-setups/multiple-engraving-initials)
* You will want to confirm that you are viewing the product page and are not viewing the theme preview/theme editor.

#### If the options are not displaying on your orders within Shopify Admin:

* First and foremost you will want to make sure the application has been properly installed:
  * [Install Infinite Options](../install-infinite-options)
* By default, Shopify apps load _after_ the product page is generated. You may need to decrease the time it takes to load the app by following the instructions in this support article:
  * [Decrease Infinite Options' load time](performance-and-optimization/remove-loading-delays)
* Ensure that you have[ bundled the product](../increase-the-cost-of-an-option/native-bundling) to your value, and you see all products at checkout


# PERFORMANCE & OPTIMIZATION

# Remove loading delays

By default, Shopify apps load after the page is generated. If you'd like to decrease the time it takes to load the app, follow the instructions below.

1\. From your Shopify admin, click **Online Store** to arrive at the **Themes** page.

2\. Find the theme you want to edit, click the **Actions** button, then click **Edit code**.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-c14f7a36bb4e361abd9bcf6177f9cafab5004d6f%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c264466186b86a80db847bfile-epnuyluzeb.png?alt=media)

3\. Click on the **theme.liquid** file that's located in **Layouts** folder.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-80a203e988f6ed936117c9ba96b5a16027b84015%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c269298d85554a90d68ac9file-y8zz5fwvci.png?alt=media)

4\. Paste the following code snippet after the **\<head>** tag.

```html
<script src="//d1liekpayvooaz.cloudfront.net/apps/customizery/customizery.js?shop={{shop.permanent_domain}}"></script>
```

**Note:** Please note that if you see an error once you paste this snippet of code (_Avoid parser blocking scripts.._), you can ignore this.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-fd6fab337c041d579dae11224a1b2a20ba3ca77a%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c2696ac1886c765c9a6465file-tmhqrdouic.png?alt=media)

5\. Save your changes.

# Bulk Add Values to Infinite Options

Infinite Options supports adding more than one value to an existing option set. To do so, click on **Bulk Add** under your existing option.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-59c48820a4e514f92d6bcc27ddb6376254388c04%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c1299dc9424c3da15eabfdfile-sgmnpjsrm8.png?alt=media)

Then, paste or type in the values as separate lines. Here is an example:

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FGCpr3FP2psM2dBfhl9Ij%2Fimage.png?alt=media&#x26;token=aa4748e4-9bf9-4237-bf8c-2cc45431bf40" alt=""><figcaption></figcaption></figure>

Lastly, click **Save Values.** Your option set should look like this afterward.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-544162a6b2fd01c19d08bed963afc4481c67c6a5%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c12a00c9424c3da15eabfffile-u7j65g9g4u.png?alt=media)

Watch the video below for an example:

{% embed url="https://www.youtube-nocookie.com/embed/4_BX6ooWLsA?rel=0" %}
# Hide \_io\_order\_group and \_io\_parent\_order\_group from cart

When using Infinite Options' Legacy Product Bundles feature, there may be some strange text (**e.g.** \_io\_order\_group, \_io\_parent\_order\_group) that appears at the cart screen.

Some themes hide this data by default. If it is displaying on your theme, follow these steps to hide the data.

{% hint style="info" %}
If you would like an option that doesn't display code on the backend, we recommend exploring [Native Bundling](../../increase-the-cost-of-an-option/native-bundling)
{% endhint %}

### Locate your theme's cart file

1\. From your Shopify admin, click **Online Store** to arrive at the Themes page.

2\. Find the theme you want to edit, click the  **Actions** ▼ button, then click **Edit code**.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FOJrv4KiYPrAaFzicN4Y6%2FCustomize-date-picker-IO.png%20-%20Step%201.png?alt=media&#x26;token=fe933ba0-1784-4e6c-8e83-148304426f9c" alt=""><figcaption></figcaption></figure>

3\. On the left side, under **Templates**, check to see if you have a **cart.liquid** file. If your theme's **cart.liquid** file doesn't contain much code, it may be pointing to a different file. In most cases, the code will be located in the **cart-template.liquid** file, within the **Sections** folder.

If your theme does not have a  **cart.liquid** file and if you see a **cart.json** file, locate a file called **main-cart-items.liquid** file in the **Sections** folder.&#x20;

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2F0cZeSdFIPX9OFN8w9l3Z%2FHide-Bundle-Data.png%20-%20Step%201.png?alt=media&#x26;token=2275d897-badb-41b4-8e36-ba360e6802e7" alt=""><figcaption></figcaption></figure>

### Edit your theme's cart file

1\. If you have found a **cart.liquid** file or **cart-template.liquid** file in your theme, perform a search using keyboard shortcuts (Ctrl F or ⌘ F) for:

```liquid
for p in item.properties
```

If you are using the Debut theme, please look for **for p in properties**.

If you have found a **main-cart-items.liquid** file in your theme, perform a search using keyboard shortcuts (Ctrl F or ⌘ F) for:

```liquid
for property in item.properties
```

2\. For the **cart.liquid** or **cart-template.liquid** file, copy and paste the following code snippet right under the line of code that we have just found, as seen below:

```liquid
{% if p.first contains '_io_' %}
  {% continue %}
{% endif %}
```

For the  **main-cart-items.liquid** file, copy and paste the following code snippet right under the line of code that we have just found, as seen below:

```liquid
{% if property.first contains '_io_' %}
  {% continue %}
{% endif %}
```

3\. **Save** your changes.

{% hint style="info" %}
If your cart is still displaying the product bundle data, please contact our support team for assistance and we'd be happy to help!
{% endhint %}

# Display option selections on customer account page

Follow the steps below on how to display option selections in each order on the customer account page.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-9c9a6df15ee7a7cff9d99192cb36aa6a7477a743%2Fdocsassets555e25e4e4b027e1978e1c9aimages5e18ca942c7d3a7e9ae60cc4file-nwzlawzsiu.png?alt=media)

1\. From your Shopify admin, click Online Store, then click Themes.

2\. Find the theme you want to edit, click the **Actions** button, then click **Edit code**.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FstG3DdpAnnwVArGFiCXj%2Fimage.png?alt=media&#x26;token=ea677d51-58f8-4c8b-9d94-599436d101db" alt=""><figcaption></figcaption></figure>

3\. Under the **Templates** folder, navigate into the **customers/order.liquid** file.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-983716f9c6bba0921b2b2eff913dcd72cb5d27f6%2Fdocsassets555e25e4e4b027e1978e1c9aimages5e18cd7304286364bc93be0dfile-wf894tfihd.png?alt=media)

4\. In this file, locate the following line of code.

```liquid
{{ line_item.title | link_to: line_item.product.url }}
```

5\. Copy and paste the following snippet after the line of code.

```liquid
{% for p in line_item.properties %}
  {% if p.first contains '_io_' %}
    {% continue %}
  {% endif %}
  {% unless p.last == blank %}
    <br />{{p.first}}: {{ p.last }}
  {% endunless %}
{% endfor %}
```

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-567427a19dba2dfe97ee81ac39666443a5628089%2Fdocsassets555e25e4e4b027e1978e1c9aimages5e18cc1104286364bc93bdf9file-sgpqe0iqpg.png?alt=media)

6\. Save your changes.


# Add a date picker to your store

Follow the steps below to add a date picker or calendar to your store.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-be63a3eb3705e9b1bb9429d60ffa408c312446cc%2Fdocsassets555e25e4e4b027e1978e1c9aimages57478bcd90336040f88d558cfile-8el9kjd0in.gif?alt=media)

**Note**: This feature only supports one date picker on a product page at this time.

### Create the date picker option

1\. Navigate to the **Option Sets** section of the Infinite Options app in the left sidebar.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fj66qCf4CJKTIq2cCOegi%2FDate-Picker.png%20-%20Step%201.png?alt=media&#x26;token=2d2cb89f-b9b2-4086-b01c-a9b918d34d40" alt=""><figcaption></figcaption></figure>

2\. Create an option with a **Text** input type.

3\. Click on the **arrow** or **Label on Product** field to display the additional settings.

4\. Set the **Class Name** to: **datepicker**

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FCGzSeQe7VNKWBES491wl%2FDate-Picker-2.png%20-%20Step%201.png?alt=media&#x26;token=0c056b48-eef4-416c-93dc-f62f0293c207" alt=""><figcaption></figcaption></figure>

5\. Click on **Save Changes**, locate at the top right corner.

### Edit your store's code

1\. From your Shopify admin, click **Online Store** to arrive at the **Themes** page.

2\. Find the theme you want to edit, click the **Actions** button, then click **Edit code**.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2F73Rho4Fgz3rzsenws09f%2FCustomize-date-picker-IO_png_-_Step_1.png?alt=media&#x26;token=d9803c92-74db-48ee-9098-f9119972d01a" alt=""><figcaption></figcaption></figure>

### Add the necessary scripts to your theme

1\. On the left side, under the **Layout** heading, click on the **theme.liquid** file.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FHvaAXta55qkFd93zHmFl%2FCustomize-date-picker-IO_png_-_Step_2.png?alt=media&#x26;token=8def3563-6e66-49ba-9008-98d8a37d74e1" alt=""><figcaption></figcaption></figure>

2\. Do a search using the keyboard shortcuts (ctrl F or ⌘ F) for the following word.

```
</head>
```

3\. Copy the following code snippet.

```
<script>
  window.Shoppad = window.Shoppad || {},
  window.Shoppad.apps = window.Shoppad.apps || {},
  window.Shoppad.apps.infiniteoptions = {
    ready: function() {
      
      function callback() {
        var jQ = window.$ && window.$().datepicker ? window.$ : window.Shoppad.$;

        jQ('#infiniteoptions-container .datepicker').datepicker({
          inline: true,
          altField: '#infiniteoptions-container .datepicker input[type=text]',
          onSelect: function() {
            jQ('#infiniteoptions-container .ui-datepicker-inline').hide();
	        var inputEvent = new Event('input', {
                bubbles: true
            });
            jQ('#infiniteoptions-container .datepicker input[type=text]')[0].dispatchEvent(inputEvent);
          }
        });

        jQ('#infiniteoptions-container .datepicker input[type=text]').change(function(){
          jQ('#infiniteoptions-container .datepicker').datepicker('setDate', $(this).val());
        });

        jQ('#infiniteoptions-container .datepicker').datepicker( "setDate", '' );

        jQ('#infiniteoptions-container .datepicker input[type=text]').attr('readonly','true');

        jQ('#infiniteoptions-container .datepicker input[type=text]').addClass('notranslate');
        jQ('#infiniteoptions-container .datepicker input[type=text]').attr('translate', 'no');

        jQ('#infiniteoptions-container .ui-datepicker-inline').hide();

        jQ('#infiniteoptions-container .datepicker input[type=text]').on('click touchstart', function (e) {
          jQ('#infiniteoptions-container .ui-datepicker-inline').show();
        });

        jQ(document).on('mouseup touchstart', function(e) {
          var isDatePickerInput = jQ('#infiniteoptions-container .datepicker input').is(e.target);
          var isDatePicker = jQ('#infiniteoptions-container .ui-datepicker-inline').is(e.target);
          var isChildOfDatePicker = jQ('#infiniteoptions-container .ui-datepicker-inline').has(e.target).length;
  
          // If the target of the click isn't the text input, the date picker, or a descendant of the date picker
          if (!isDatePickerInput && !isDatePicker && !isChildOfDatePicker) {
            jQ('#infiniteoptions-container .ui-datepicker-inline').hide();
          }
        });
      }

      if (window.jQuery && window.jQuery.fn && window.jQuery.fn.datepicker) {
        callback();
      } else {
        // Set jQuery on page
        window.jQuery = window.jQuery || window.Shoppad.$;
        var script = document.createElement('script');
        script.src = '//code.jquery.com/ui/1.10.2/jquery-ui.js';
        script.onload = callback;
        document.getElementsByTagName('head')[0].appendChild(script);
      }
    }
  };
</script>
```

4\. Paste the snippet BEFORE the closing **\</head>** tag.

5\. **Save** your changes.

### Add CSS styles

1\. Go back to the Infinite Options app and open the **Settings** section in the left sidebar.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FWrxptGdmwv1gFkndJ86m%2FCSS-IO-Doc.png%20-%20Step%201.png?alt=media&#x26;token=5a2f1715-b9ae-4a84-8b96-2701bf22ef4d" alt=""><figcaption></figcaption></figure>

2\. Locate the **Custom CSS** section.

3\. Copy and paste the code snippet below of any existing CSS.

```
/* Infinite Options by ShopPad - Styles for Date Picker */
#infiniteoptions-container .datepicker {
  position: relative;
  width: 100%;
}

#infiniteoptions-container .datepicker tr:after,
#infiniteoptions-container .datepicker tr:before,
#infiniteoptions-container .datepicker th:after,
#infiniteoptions-container .datepicker th:before,
#infiniteoptions-container .datepicker td:after,
#infiniteoptions-container .datepicker td:before {
  display: none !important;
}

#infiniteoptions-container .ui-datepicker-inline {
  margin: 0;
  padding-top: 0;
  background-color: #fff;
  color: #333;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
}

#infiniteoptions-container .ui-datepicker-calendar {
  margin: 0;
  padding: 0;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}

#infiniteoptions-container .ui-datepicker-calendar td,
#infiniteoptions-container .ui-datepicker-calendar th {
  cursor: pointer;
  text-align: center !important;
  padding: 5px !important;
  height: 10px !important;
  width: 10px !important;
  background-color: #fff;
  border: 1px solid #ddd;
}

#infiniteoptions-container .ui-datepicker-header {
  border: 1px solid #ddd;
  border-bottom: 0;
}

#infiniteoptions-container .ui-datepicker-title {
  text-align: center;
  padding: 10px;
}

#infiniteoptions-container .ui-datepicker-prev {
  float: left;
  padding: 10px;
}

#infiniteoptions-container .ui-datepicker-next {
  float: right;
  padding: 10px;
}

#infiniteoptions-container .ui-icon {
  cursor: pointer;
}

#infiniteoptions-container .ui-state-disabled {
  opacity: .5;
}
```

4\. **Save** your changes.

5\. For more customization options for the date picker, check out our guide: [Click here!](add-a-date-picker-to-your-store)

Need assistance? Our support team is here to help. All you have to do is request the [Expert Install Service](../welcome/expert-install-service) from your Infinite Options dashboard and we can get this feature added for you.


# Add a date picker to your store

Follow the steps below to add a date picker or calendar to your store.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-be63a3eb3705e9b1bb9429d60ffa408c312446cc%2Fdocsassets555e25e4e4b027e1978e1c9aimages57478bcd90336040f88d558cfile-8el9kjd0in.gif?alt=media)

**Note**: This feature only supports one date picker on a product page at this time.

### Create the date picker option

1\. Navigate to the **Option Sets** section of the Infinite Options app in the left sidebar.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fj66qCf4CJKTIq2cCOegi%2FDate-Picker.png%20-%20Step%201.png?alt=media&#x26;token=2d2cb89f-b9b2-4086-b01c-a9b918d34d40" alt=""><figcaption></figcaption></figure>

2\. Create an option with a **Text** input type.

3\. Click on the **arrow** or **Label on Product** field to display the additional settings.

4\. Set the **Class Name** to: **datepicker**

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FCGzSeQe7VNKWBES491wl%2FDate-Picker-2.png%20-%20Step%201.png?alt=media&#x26;token=0c056b48-eef4-416c-93dc-f62f0293c207" alt=""><figcaption></figcaption></figure>

5\. Click on **Save Changes**, locate at the top right corner.

### Edit your store's code

1\. From your Shopify admin, click **Online Store** to arrive at the **Themes** page.

2\. Find the theme you want to edit, click the **Actions** button, then click **Edit code**.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2F73Rho4Fgz3rzsenws09f%2FCustomize-date-picker-IO_png_-_Step_1.png?alt=media&#x26;token=d9803c92-74db-48ee-9098-f9119972d01a" alt=""><figcaption></figcaption></figure>

### Add the necessary scripts to your theme

1\. On the left side, under the **Layout** heading, click on the **theme.liquid** file.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FHvaAXta55qkFd93zHmFl%2FCustomize-date-picker-IO_png_-_Step_2.png?alt=media&#x26;token=8def3563-6e66-49ba-9008-98d8a37d74e1" alt=""><figcaption></figcaption></figure>

2\. Do a search using the keyboard shortcuts (ctrl F or ⌘ F) for the following word.

```
</head>
```

3\. Copy the following code snippet.

```
<script>
  window.Shoppad = window.Shoppad || {},
  window.Shoppad.apps = window.Shoppad.apps || {},
  window.Shoppad.apps.infiniteoptions = {
    ready: function() {
      
      function callback() {
        var jQ = window.$ && window.$().datepicker ? window.$ : window.Shoppad.$;

        jQ('#infiniteoptions-container .datepicker').datepicker({
          inline: true,
          altField: '#infiniteoptions-container .datepicker input[type=text]',
          onSelect: function() {
            jQ('#infiniteoptions-container .ui-datepicker-inline').hide();
	        var inputEvent = new Event('input', {
                bubbles: true
            });
            jQ('#infiniteoptions-container .datepicker input[type=text]')[0].dispatchEvent(inputEvent);
          }
        });

        jQ('#infiniteoptions-container .datepicker input[type=text]').change(function(){
          jQ('#infiniteoptions-container .datepicker').datepicker('setDate', $(this).val());
        });

        jQ('#infiniteoptions-container .datepicker').datepicker( "setDate", '' );

        jQ('#infiniteoptions-container .datepicker input[type=text]').attr('readonly','true');

        jQ('#infiniteoptions-container .datepicker input[type=text]').addClass('notranslate');
        jQ('#infiniteoptions-container .datepicker input[type=text]').attr('translate', 'no');

        jQ('#infiniteoptions-container .ui-datepicker-inline').hide();

        jQ('#infiniteoptions-container .datepicker input[type=text]').on('click touchstart', function (e) {
          jQ('#infiniteoptions-container .ui-datepicker-inline').show();
        });

        jQ(document).on('mouseup touchstart', function(e) {
          var isDatePickerInput = jQ('#infiniteoptions-container .datepicker input').is(e.target);
          var isDatePicker = jQ('#infiniteoptions-container .ui-datepicker-inline').is(e.target);
          var isChildOfDatePicker = jQ('#infiniteoptions-container .ui-datepicker-inline').has(e.target).length;
  
          // If the target of the click isn't the text input, the date picker, or a descendant of the date picker
          if (!isDatePickerInput && !isDatePicker && !isChildOfDatePicker) {
            jQ('#infiniteoptions-container .ui-datepicker-inline').hide();
          }
        });
      }

      if (window.jQuery && window.jQuery.fn && window.jQuery.fn.datepicker) {
        callback();
      } else {
        // Set jQuery on page
        window.jQuery = window.jQuery || window.Shoppad.$;
        var script = document.createElement('script');
        script.src = '//code.jquery.com/ui/1.10.2/jquery-ui.js';
        script.onload = callback;
        document.getElementsByTagName('head')[0].appendChild(script);
      }
    }
  };
</script>
```

4\. Paste the snippet BEFORE the closing **\</head>** tag.

5\. **Save** your changes.

### Add CSS styles

1\. Go back to the Infinite Options app and open the **Settings** section in the left sidebar.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FWrxptGdmwv1gFkndJ86m%2FCSS-IO-Doc.png%20-%20Step%201.png?alt=media&#x26;token=5a2f1715-b9ae-4a84-8b96-2701bf22ef4d" alt=""><figcaption></figcaption></figure>

2\. Locate the **Custom CSS** section.

3\. Copy and paste the code snippet below of any existing CSS.

```
/* Infinite Options by ShopPad - Styles for Date Picker */
#infiniteoptions-container .datepicker {
  position: relative;
  width: 100%;
}

#infiniteoptions-container .datepicker tr:after,
#infiniteoptions-container .datepicker tr:before,
#infiniteoptions-container .datepicker th:after,
#infiniteoptions-container .datepicker th:before,
#infiniteoptions-container .datepicker td:after,
#infiniteoptions-container .datepicker td:before {
  display: none !important;
}

#infiniteoptions-container .ui-datepicker-inline {
  margin: 0;
  padding-top: 0;
  background-color: #fff;
  color: #333;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
}

#infiniteoptions-container .ui-datepicker-calendar {
  margin: 0;
  padding: 0;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}

#infiniteoptions-container .ui-datepicker-calendar td,
#infiniteoptions-container .ui-datepicker-calendar th {
  cursor: pointer;
  text-align: center !important;
  padding: 5px !important;
  height: 10px !important;
  width: 10px !important;
  background-color: #fff;
  border: 1px solid #ddd;
}

#infiniteoptions-container .ui-datepicker-header {
  border: 1px solid #ddd;
  border-bottom: 0;
}

#infiniteoptions-container .ui-datepicker-title {
  text-align: center;
  padding: 10px;
}

#infiniteoptions-container .ui-datepicker-prev {
  float: left;
  padding: 10px;
}

#infiniteoptions-container .ui-datepicker-next {
  float: right;
  padding: 10px;
}

#infiniteoptions-container .ui-icon {
  cursor: pointer;
}

#infiniteoptions-container .ui-state-disabled {
  opacity: .5;
}
```

4\. **Save** your changes.

5\. For more customization options for the date picker, check out our guide: [Click here!](add-a-date-picker-to-your-store)

Need assistance? Our support team is here to help. All you have to do is request the [Expert Install Service](../welcome/expert-install-service) from your Infinite Options dashboard and we can get this feature added for you.

# Swatches

Create Swatches with Infinite Options

Infinite Options supports attaching colors or images to options. If you have a product with multiple variations, this will allow you to display an image or a color of what the variation would look like.

{% embed url="https://www.youtube.com/watch?v=0UWlgW3nRbM" %}

Follow the steps below on how to create swatches.

1\. In your Infinite Options dashboard, create an option field within an Option Set. For a refresher on how to create options, [click here!](https://infinite-options.docs.theshoppad.com/welcome/create-custom-options)

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FXt2bv6xWsiVN5U29uARd%2Ffile-4b5whDpaPj.png?alt=media&#x26;token=9a6b5981-0baa-4cb3-83f7-3be7eceaeddd" alt=""><figcaption></figcaption></figure>

2\. In your first option field, select **Swatches** as the input type. Then, type in your **Option Values**.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FRUJ2ud0vZviG8XpwEWmJ%2Fswatch-input-type.png?alt=media&#x26;token=0fa5c551-0fa4-453a-b948-84dc229ff1a8" alt=""><figcaption></figcaption></figure>

3\. You will see an **Add Image** icon to the left of the values.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2F49ymHp7yku9mpuEK11jK%2Fswatch-image-icon.png?alt=media&#x26;token=4d2a6742-e990-4db0-8eff-b57525f258fd" alt=""><figcaption></figcaption></figure>

4\. Click on that to attach an image or color to your option. You will be prompted to select a color or upload an image.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fw6ygsaT84f92inrI5Tr1%2Fswatch-image.png?alt=media&#x26;token=ff1e495c-2d89-42a1-ad9e-6efd8f9568b4" alt=""><figcaption></figcaption></figure>

### Attach a color to an option

To attach a color, you can select any color using the color picker on the right hand side. You can also enter the color hex value (i.e. #FFFFFF).

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FfTYlGt89rI4Tn5rkRetY%2Fred-color-swatch.png?alt=media&#x26;token=37682f47-406f-48c2-95c1-248da1cdcd67" alt=""><figcaption></figcaption></figure>

Then, click **Save Changes** and make sure to save your changes on the app dashboard as well!

### Attach an image to an option

To attach an image, you can click on **Image Upload**. Then, click on **Choose File** to upload your image.

{% hint style="info" %}
The maximum file upload size is 1 Megabyte. Also, square images are the best for your swatches.\
\
Please note that at this time, GIFs are not supported for swatches.
{% endhint %}

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FaYKAttw0ShqqEyCAyeKT%2Fadding-custom-swatch.png?alt=media&#x26;token=c12a49be-ae01-4d11-874f-89ac356a3e3b" alt=""><figcaption></figcaption></figure>

Then, click **Save Changes** and make sure to save your changes on the app dashboard as well!

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2F2CX52RjJN7Di3f4CdueD%2Ffile-A4VwOi2pDb.png?alt=media&#x26;token=4ba95014-19ac-44c0-a23b-6387a2dd434d" alt=""><figcaption></figcaption></figure>

Here is an example of how swatches would look on a store's product page:

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FMd8FqdBz4utwvCJ5Oh3l%2Ffile-XqpTf3Xcpt.png?alt=media&#x26;token=35ad8775-3599-4116-911d-1dc2539a6de6" alt=""><figcaption></figcaption></figure>

### Use Native Bundling with Swatches

Setting up this option set would be how you would with the swatches feature. You can follow the instructions above along with the instructions in this document, [click here!](../popular-setups/add-on-gift-wrapping-option)

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FGFGIBDjKowCUI3sYTdW3%2Ffile-3C8K4xWnSk.png?alt=media&#x26;token=605affec-271d-4aa7-bef5-8829dbee41ee" alt=""><figcaption></figcaption></figure>

Now you know how to create a swatch option! Well done! 🎉

{% hint style="info" %}
Want to customize your swatches' look? [Click here to learn more.](create-swatches/customize-swatches-using-css)
{% endhint %}

# Adjust Swatches - display the name once the swatch is hovered over

Displaying hover text over [swatches](https://docs.theshoppad.com/article/718-create-swatches-with-infinite-options) is a great way to showcase the colors you offer for your products and to display a large number of swatches in a more compact format. \
\
Follow the steps below to apply this change to your swatches.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2F3OHcVs0LSvQB22YJGPCi%2FAdjust-swatches-doc_png_-_Step_2.png?alt=media&#x26;token=d0e114c3-31ba-4cfc-90b4-ffcbb56d4714" alt=""><figcaption></figcaption></figure>

1\. Navigate to the **Settings** section of the Infinite Options app dashboard.

2\. Under the Swatch Snippets section, select the "Tooltips" option, then click **Add**.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FkTGBfSJNVi5wgPsFRlIc%2FAdd-tooltips-doc.png%20-%20Step%201.png?alt=media&#x26;token=e8ee0a3e-7597-42c9-b896-1e879d929803" alt=""><figcaption></figcaption></figure>

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FeOORKODBCT4CrVAs06t1%2FAdd-tooltips-doc.png%20-%20Step%202.png?alt=media&#x26;token=176a1390-3e94-47c3-be4d-407e01167098" alt=""><figcaption></figcaption></figure>

5\. Don't forget to **Save** your changes.

{% hint style="info" %}
View a product page with swatches or [click here to learn how to create swatches!](https://docs.theshoppad.com/article/718-create-swatches-with-infinite-options)
{% endhint %}

# Change or translate required pop-up message/characters remaining text

{% embed url="https://www.youtube-nocookie.com/embed/SSx2BBuBGaI?rel=0" %}

You can edit the required pop-up error messages and " **Character Remaining**" text in Infinite Options by adding code.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-cbc4b17995a587668c7bbd867a406a790a7a011d%2Fdocsassets555e25e4e4b027e1978e1c9aimages67d3a376f9d2af0629995411file-lvowjmlkep.png?alt=media)

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-6f3396bdee2ba5e46555754a19ec6be321b75c76%2Fdocsassets555e25e4e4b027e1978e1c9aimages67d3a4344cb91c68993d8d56file-dobadrne3s.png?alt=media)

* To change the "Character Remaining" text
* To change the required pop up error message for text input options only
* To change the required pop up error message for all input options
* To change the "Character Remaining" text and required pop up error message for all input options

**Please note:** If you are using a Shopify 2.0 theme, the following snippets of code should be placed before any of the **\{% schema %\}** code within your theme's product template files

#### 1. Locate your theme’s product file

Don't know where to find your theme's product file? [Click on this document for more information.](https://infinite-options.docs.theshoppad.com/install-infinite-options-1/installing-infinite-options-directly-in-the-theme-1.0-theme)

#### 2. Copy the code snippet that applies below and paste it at the bottom of your theme's product file

*

To change the **Character Remaining** text, copy the following code:

```html
<!-- Infinite Options by ShopPad -->
<script>

// OPTION 1
// Change the 'Characters remaining' text
window.Shoppad = window.Shoppad || {},     
window.Shoppad.apps = window.Shoppad.apps || {},     
window.Shoppad.apps.infiniteoptions = window.Shoppad.apps.infiniteoptions || {},     
window.Shoppad.apps.infiniteoptions.strings = window.Shoppad.apps.infiniteoptions.strings || {},   
// The actual text
window.Shoppad.apps.infiniteoptions.strings.charactersRemaining = 'Characters remaining';
</script>
```

*

To change the required message for **text input options only**, copy the following code:

```html
<!-- Infinite Options by ShopPad -->
<script>

// OPTION 2
// Change text input required error messages
window.Shoppad = window.Shoppad || {},     
window.Shoppad.apps = window.Shoppad.apps || {},     
window.Shoppad.apps.infiniteoptions = window.Shoppad.apps.infiniteoptions || {},     
window.Shoppad.apps.infiniteoptions.strings = window.Shoppad.apps.infiniteoptions.strings || {},   
window.Shoppad.apps.infiniteoptions.strings.errorMessages = window.Shoppad.apps.infiniteoptions.strings.errorMessages || {}, 
// The string
window.Shoppad.apps.infiniteoptions.strings.errorMessages.forTextInputs = "Please add your personalized text before adding this item to cart.";
</script>
```

*

To change the required message for **text inputs, number inputs, checkboxes, minimum values, dynamic checkouts, and drop-down menus options**, copy the following code:

```html
<!-- Infinite Options by ShopPad -->
<script>

// OPTION 3
// Change ALL required error messages
window.Shoppad = window.Shoppad || {},     
window.Shoppad.apps = window.Shoppad.apps || {},     
window.Shoppad.apps.infiniteoptions = window.Shoppad.apps.infiniteoptions || {},     
window.Shoppad.apps.infiniteoptions.strings = window.Shoppad.apps.infiniteoptions.strings || {},   
// The strings
window.Shoppad.apps.infiniteoptions.strings.errorMessages = {
  forTextInputs: "Please add your personalized text before adding this item to cart.",
  forNumberInputs: "Please enter a number before adding this item to cart",
  forCheckboxes: "Please select your options before adding this item to cart",
  forMinimumValues: "Please select at least %valuesmin options before adding this item to cart",
  forDynamicCheckout: "This product cannot be purchased using this checkout method. Please add the item to cart, then proceed to checkout from the cart.",
  forDropdowns: "Please select an option before adding this item to cart"
};
</script>
```

*

To change the required message for **"Character Remaining" text and text inputs, number inputs, checkboxes, minimum values, dynamic checkouts, and drop-down menus options**, copy the following code:

```html
<!-- Infinite Options by ShopPad -->
<script>

// OPTION 4
// Change the 'Characters remaining' text AND all required error messages
window.Shoppad = window.Shoppad || {},     
window.Shoppad.apps = window.Shoppad.apps || {},     
window.Shoppad.apps.infiniteoptions = window.Shoppad.apps.infiniteoptions || {},     
window.Shoppad.apps.infiniteoptions.strings = {
  charactersRemaining: 'Characters remaining',
  errorMessages: {
    forTextInputs: "Please add your personalized text before adding this item to cart.",
    forNumberInputs: "Please enter a number before adding this item to cart",
    forCheckboxes: "Please select your options before adding this item to cart",
    forMinimumValues: "Please select at least %valuesmin options before adding this item to cart",
    forDynamicCheckout: "This product cannot be purchased using this checkout method. Please add the item to cart, then proceed to checkout from the cart.",
    forDropdowns: "Please select an option before adding this item to cart"
  }
};
</script>
```

#### 3. Locate and modify the text within the quotations to your liking, and save your changes.

# Customize Swatches using CSS

Swatches can be styled with CSS code to change how they display on your product pages. Follow the steps below to customize the appearance of swatches.

1\. Starting with the Infinite Options app open, navigate to the **Settings** section in the left sidebar.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fy1Z8zDwusYf4hYASjAV2%2Fimage.png?alt=media&#x26;token=d3728818-b2cd-41a3-8e0a-2da1176e6b20" alt=""><figcaption></figcaption></figure>

2\. Locate the **Custom CSS** field.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2F4rQJWacpHPzXe32cOh4a%2Fimage.png?alt=media&#x26;token=7ae408ec-212e-453c-ae9e-b253f4e80bf9" alt=""><figcaption></figcaption></figure>

3\. Copy any of the customization snippets located at the bottom of this document.

4\. Insert the code snippet into the **Custom CSS** field.

5\. Save your changes.

Looking to add hover text over swatches? [Click here to learn more.](https://infinite-options.docs.theshoppad.com/inputs-and-field-settings/swatches/adjust-swatches-display-the-name-once-the-swatch-is-hovered-over)

***

### Customization Snippets

* [Large Swatches](#large)
* [Round Swatches](#round)
* [Vertically-displayed Swatches](#vertically-displayed)
* [Horizontal Swatches](#horizontal)
* [Horizontal Swatches without labels](#horizontal-nolabel)
* [Two-column Swatches](#two-column)
* [Three-column Swatches](#three-column)
* [Faded hover effect on swatches](#faded-hover)
* [Add bottom spacing to swatches](#bottom-spacing)
* [Change border color of swatches](#border-color)
* [Apply black border on selected swatch](#black-border)
* [Apply thicker border on selected swatch](#thicker-border)

***

#### Large Swatches <a href="#large" id="large"></a>

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fq5Io63vOE5yp9xdoi1XH%2Fimage.png?alt=media&#x26;token=d0c8fb8a-7ad2-4104-a980-12933ccc52f5" alt=""><figcaption></figcaption></figure>

```css
#infiniteoptions-container .spb-productoptionswatch {
  width: 40px !important;
  height: 40px !important;
}
```

Default width and height is 32px.

***

#### Round Swatches <a href="#round" id="round"></a>

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2F2oWd9z8IwTjKJ5Zxr1MV%2Fimage.png?alt=media&#x26;token=e67d22a6-ffb8-4e37-8cc4-52e00e9e546e" alt=""><figcaption></figcaption></figure>

```css
#infiniteoptions-container .spb-productoptionswatch {
  border-radius: 50%;
}
```

***

#### Vertically-displayed Swatches <a href="#vertically-displayed" id="vertically-displayed"></a>

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FD9xT325m66b67ql9fuq4%2Fimage.png?alt=media&#x26;token=3a61a930-f070-4083-a515-ec2555beb6a9" alt=""><figcaption></figcaption></figure>

```css
#infiniteoptions-container .spb-productoptionswatchwrapper {
  display: block !important;
}
```

***

#### Horizontal Swatches <a href="#horizontal" id="horizontal"></a>

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2F3PKuF4htK3gCn7CUdwAW%2Fimage.png?alt=media&#x26;token=1c70d6c5-1ded-4e26-9a2a-4fe1e4e86869" alt=""><figcaption></figcaption></figure>

```css
#infiniteoptions-container .spb-productoptionswatchwrapper {
  display: inline-block;
  margin-right: 5px;
}
```

***

#### Horizontal Swatches without labels <a href="#horizontal-nolabel" id="horizontal-nolabel"></a>

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FXfvVI9BnelDDCVsd8pF4%2Fimage.png?alt=media&#x26;token=b56b5c67-ea97-4dee-9803-da3dcecec686" alt=""><figcaption></figcaption></figure>

```css
#infiniteoptions-container .spb-productoptionswatchwrapper {
  text-indent: -1000px;
  overflow: hidden;
  display: inline-block;
  position: relative;
  width: 36px;
  height: 36px;
  margin: 0 5px 5px 0;
}

#infiniteoptions-container .spb-productoptionswatch {
  position: absolute;
  top: 1px;
  left: 1px;
}
```

The snippet above will work best if you did not adjust the size of your swatches. If you have adjusted your swatches to be smaller or larger using the [Large Swatches](https://github.com/shoppad/docs-infinite-options/blob/master/inputs-and-field-settings/swatches/customize-swatches-using-css/README.md#large) snippet, please adjust the width and height numbers in the first block of code to be 4px larger than your swatches.

***

#### Two-Column Swatches <a href="#two-column" id="two-column"></a>

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FgYgIdK4pcyXkvHsDoxEg%2Fimage.png?alt=media&#x26;token=8c78d41f-ede7-48af-9fbe-8696687c7b68" alt=""><figcaption></figcaption></figure>

```css
#infiniteoptions-container .spb-productoptionswatchwrapper {
  display: inline-block;
  width: 50%;
}
```

**Alignment not displaying like the example?**

***

#### Three-Column Swatches <a href="#three-column" id="three-column"></a>

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FLDLfqXA0UrO9yXCGeWZw%2Fimage.png?alt=media&#x26;token=c6f6051c-418a-460c-a8a8-d42e2f7d9583" alt=""><figcaption></figcaption></figure>

```css
#infiniteoptions-container .spb-productoptionswatchwrapper {
  display: inline-block;
  width: 33.3%;
}
```

**Alignment not displaying like the example?**

***

#### Faded hover effect on swatches <a href="#faded-hover" id="faded-hover"></a>

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FQgn77lhD2ttS33aubORd%2Fimage.png?alt=media&#x26;token=f201d187-a060-4f56-92c2-160134046de3" alt=""><figcaption></figcaption></figure>

```css
#infiniteoptions-container .spb-productoptionswatch:hover {
  opacity: 0.5;
}
```

***

#### Add bottom spacing to swatches <a href="#bottom-spacing" id="bottom-spacing"></a>

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FRaoudYADEbyo3IP1IyEc%2Fimage.png?alt=media&#x26;token=8f9ab7ac-023f-476d-83ba-9c8c0efc9ea3" alt=""><figcaption></figcaption></figure>

```css
#infiniteoptions-container .spb-productoptionswatchwrapper {
  padding-bottom: 5px !important;
}
```

***

#### Change border color of swatches <a href="#border-color" id="border-color"></a>

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FTtWKr9asscxpb1QOur32%2Fimage.png?alt=media&#x26;token=1726f979-3822-417f-8cb6-8b95cd5a17cf" alt=""><figcaption></figcaption></figure>

```css
#infiniteoptions-container .spb-productoptionswatch {
  border: 1px solid #000000 !important;
}
```

\#000000 is the hex color value for black.

***

#### Apply black border on selected swatch <a href="#black-border" id="black-border"></a>

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FdeKqZ2bM8QRL0zep5i1G%2Fimage.png?alt=media&#x26;token=25afe886-09b8-45b9-9676-bfa401b72001" alt=""><figcaption></figcaption></figure>

```css
#infiniteoptions-container .spb-productoptionswatchwrapper input[type="radio"]:checked + .spb-productoptionswatch,
#infiniteoptions-container .spb-productoptionswatchwrapper input[type="checkbox"]:checked + .spb-productoptionswatch {
  box-shadow: 0px 0px 0px 1px #000000 !important;
}
```

***

#### Apply thicker border on selected swatch <a href="#thicker-border" id="thicker-border"></a>

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FBZnyC0e3PV81A7QuorRu%2Fimage.png?alt=media&#x26;token=03f4ddb5-4d29-49f7-be21-bb59c1d39e9b" alt=""><figcaption></figcaption></figure>

```css
#infiniteoptions-container .spb-productoptionswatchwrapper input[type="radio"]:checked + .spb-productoptionswatch,
#infiniteoptions-container .spb-productoptionswatchwrapper input[type="checkbox"]:checked + .spb-productoptionswatch {
  box-shadow: 0px 0px 0px 2px currentColor !important;
}
```
# How to make Swatches required

**NEEDS VIDEO EMBEDDED**

With Infinite Options, you can create personalized swatches. Check out [this article](broken-reference) to discover more about this feature.\
\
You can make swatch options required using two different methods.

### Option 1

Do not **Allow for Multiple Selections**. This set up looks like this:

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-6bd5b42ecedf19a5a60681b245ac8636fb6d031c%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c2410367dfc964971f7489file-n29fufgsmi.png?alt=media)

Using this setting, your swatches will automatically be pre-selected when the product page is visited. There is no way to remove the selection and it can only be changed.

### Option 2

Allow for multiple selections **AND** make the options set a required field. This set up looks like this:

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-eef59029baf5ad47c150f42217bbc664ccea32df%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c241c4c1886c765c9a6436file-2ot2az3cic.png?alt=media)

With this selection, your swatches will not be pre-selected when the product page is opened. Customers must choose a swatch before adding the item to their cart, and you can also set minimum and maximum selection limits.

> By default, the minimum selection will be set to 1 with no maximum limit if no adjustment is made.


# INFINITE OPTIONS CSS AND CUSTOMIZING LOOK

# How to make Swatches required

**NEEDS VIDEO EMBEDDED**

With Infinite Options, you can create personalized swatches. Check out [this article](broken-reference) to discover more about this feature.\
\
You can make swatch options required using two different methods.

### Option 1

Do not **Allow for Multiple Selections**. This set up looks like this:

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-6bd5b42ecedf19a5a60681b245ac8636fb6d031c%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c2410367dfc964971f7489file-n29fufgsmi.png?alt=media)

Using this setting, your swatches will automatically be pre-selected when the product page is visited. There is no way to remove the selection and it can only be changed.

### Option 2

Allow for multiple selections **AND** make the options set a required field. This set up looks like this:

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-eef59029baf5ad47c150f42217bbc664ccea32df%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c241c4c1886c765c9a6436file-2ot2az3cic.png?alt=media)

With this selection, your swatches will not be pre-selected when the product page is opened. Customers must choose a swatch before adding the item to their cart, and you can also set minimum and maximum selection limits.

> By default, the minimum selection will be set to 1 with no maximum limit if no adjustment is made.


# BELOW ARE DAWN THEME CUSTOMIZATIONS.KCS USES THE NEW HORIZON THEME BUT NO DOCUMENTATION ON THIS THEME IS AVAILABLE. 

## Dawn theme

Copy the code below and paste it into the **Settings >** **Custom CSS** section in Infinite Options to style your options for the Dawn theme.

This code will help the options look better and match your theme and variants.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-43528136ff59904e64c9ec20c7a5e3a954648ef6%2Fdocsassets555e25e4e4b027e1978e1c9aimages647ea4cb936c7945969ed89afile-bpssv3hcdo.png?alt=media)

```css
/* Infinite Options by ShopPad */
#infiniteoptions-container {
  width: 100%;
  display: block;
  box-sizing: border-box;
}

#infiniteoptions-container > div {
  padding-bottom: 10px;
}

#infiniteoptions-container div > label,
#infiniteoptions-container .spb-label-tooltip {
  margin-bottom: 3px;
  font-size: 13px !important;
}

#infiniteoptions-container input[type="text"], 
#infiniteoptions-container input[type="number"], 
#infiniteoptions-container select,
#infiniteoptions-container textarea {
  display: block;
  width: 100%;
  font-family: var(--font-body-family);
  font-style: var(--font-body-style);
  font-weight: var(--font-body-weight);
  font-size: 1.4rem !important;
  color: rgb(var(--color-foreground));
  background-color: transparent;
  line-height: 1.6;
  border-radius: var(--inputs-radius);
  border: 1px solid #888888;
}

#infiniteoptions-container input[type="text"], 
#infiniteoptions-container input[type="number"], 
#infiniteoptions-container select {
  height: 4.5rem;
  padding: 0 4rem 0 1.5rem;
}

#infiniteoptions-container textarea {
  height: 9rem;
  padding: 10px;
}

#infiniteoptions-container select {
  display: inline-block;
  width: 100%;
  background-color: transparent;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iLTE3LjUgLTEuMyA1MC4xIDI3LjkiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwb2x5bGluZSBwb2ludHM9IiAxNi4xIDguNSA3LjYgMTcgLTAuOSA4LjUgIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MjtzdHJva2U6IzMwMkYyRkJGIi8+PC9zdmc+');
  background-repeat: no-repeat;
  background-position: right;
  background-size: 24px 24px;
  margin: 0;
  padding-right: 20px;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
}

#infiniteoptions-container select::-ms-expand {
  display: none;
}

#infiniteoptions-container .spb-productdescfont {
  font-size: 1.2rem;
  margin-top: 0;
}

#infiniteoptions-container input[type="checkbox"],
#infiniteoptions-container input[type="radio"] {
  margin: 3px 5px 0px 0px;
  min-height: initial !important;
}

#infiniteoptions-container span label {
  display: block;
}

#infiniteoptions-container fieldset {
  padding: 0 !important;
  border: 0;
  margin: 0 !important;
}

#infiniteoptions-container .spb-productoptionswatchwrapper {
  padding-bottom: 5px !important;
}

#infiniteoptions-container input[type="text"]:focus, 
#infiniteoptions-container input[type="number"]:focus, 
#infiniteoptions-container select:focus, 
#infiniteoptions-container textarea:focus{
  box-shadow: none !important;
  outline: unset !important;
}
```


# Shopify emails and packing slip templates

# Order Confirmation

Follow the steps below on how to display option selections in the order confirmation emails.

1\. Starting from your Shopify admin dashboard, navigate to the **Settings** tab, then click on **Notifications**.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-3a46ddaf28cd2c7e482e9e7952d7b71a22bc03e5%2Fdocsassets555e25e4e4b027e1978e1c9aimages67bfd9edc671313b703d24fbfile-nkorhxti81.png?alt=media)

2\. Select **Customer Notifications**.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-ab71cba8cf33504aec4d2a6d91f1740e391593a0%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c10abf66c50e0e7db92f28file-ovakcyai2k.png?alt=media)

3\. Click on the **Order Confirmation** email template.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-135315e95ac33cc75f0039f097540f13c2ce4e79%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c10b15e4316048fb4e7500file-nwtqm2cqkq.png?alt=media)

4\. Click **Edit Code** at the top right of the page.

5\. Locate the following line of code:

```html
<span class="order-list__item-title component">{{ component.quantity }}&nbsp;&times;&nbsp;{{ component_title }}</span><br>
```

You should see this code three separate times. Navigate to the one found at the bottom near line 1080:

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-051b8b12e6ce1b857d1ad48c828ca09fd3233a8e%2Fdocsassets555e25e4e4b027e1978e1c9aimages67fd91004973a25b3cec1dabfile-4dqdcgruum.png?alt=media)

6\. Copy and paste the following snippet after the **\{% endif %\}** and before **\</td>**.

```liquid
{% for p in component.properties %}
  {% if p.first contains '_io_' %}
    {% continue %}
  {% endif %}
  {% if p.last %}
    {% assign name = p.first %}
    {% assign value = p.last %}
  {% else %}
    {% assign name = p.name %}
    {% assign value = p.value %}
  {% endif %}
  {% unless value == blank %}
    <p style='margin-top: 0px; margin-bottom: 0px; font-size: 14px; color: #999;'>
      {{ name }}:
    {% if p.last contains '//uploadery.s3' %}
      <a style='font-size: 14px;' href="{{ value }}">Link to your file</a>
    {% else %}
      {{ value }}
    {% endif %}
    </p>
  {% endunless %}
{% endfor %}<br>
```

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-7a520b3f45d854ef04a2db7bc9c0de7a5e1b12ae%2Fdocsassets555e25e4e4b027e1978e1c9aimages67fd91e14973a25b3cec1daefile-n1a5qdumj9.png?alt=media)

7\. Click the **Save** button at the top of the page.


# Packing Slip

Follow the steps below on how to display option selections in the Packing slip template.

1\. Navigate into **Settings** of your Shopify admin.

2\. Click on **Shipping and delivery**.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-a637a04d95d4687a1acc4942a21bf152484ab90b%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c1209d9eae600126975abcfile-xvjckgz2ns.png?alt=media)

3\. Locate the **Packing Slip** template and click on it to edit.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-bde369ab7cb07557ef57723b83998f249d1e4a5f%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c120f666c50e0e7db92f44file-bptrezyckc.png?alt=media)

4\. Copy the following code snippet.

```liquid
{% if line_item.properties != blank %} 
<span class="line-item-description-line"> 
  {% for p in line_item.properties %}
  {% if p.first contains '_io_' %}
  {% continue %}
  {% endif %}
  {% unless p.last == blank %}
  {{p.first}}: {{ p.last }}<br />
  {% endunless %} 
  {% endfor %}
</span>
{% endif %}
<br>
```

5\. Paste the code that you just copied underneath the following code.

```liquid
{% if line_item.sku != blank %} 
<span class="line-item-description-line">
{{ line_item.sku }}
</span>
{% endif %}
```

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-d136dcc3ee432e45917f80123e6a688d8d077035%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c63688a44bcb2862ddf5e7file-k9ruwc2mxi.png?alt=media)

6\. Click the **Save** button at the top of the page.

# Shipping Confirmation

Follow the steps below to display option selections in the shipping confirmation emails.

1\. Starting from your Shopify admin dashboard, navigate to the **Settings**, then click on **Notifications**.

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FfBUWcvi3AfOZHrKik0Ta%2Fimage.png?alt=media&#x26;token=f3eebd7f-fdbf-4d1a-b33f-ce885205ee65" alt=""><figcaption></figcaption></figure>

2\. Select Customer Notifications then click on the link for the **Shipping Confirmation** email.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-8550fd51c729a5265a91ede7b8b5ce508ae34be0%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c1248143c46f4f2d1db780file-4lbjllxkbk.png?alt=media)

3\. Locate the following line of code (remove any unnecessary spaces at the end).

```html
<span class="order-list__item-variant">Part of: {{ group.display_title }}</span><br/>
```

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-34b1ac6a9a9a10d6aef4c7e3558e849b586be896%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c1f940a5753e1285139e64file-tstomrxqwq.png?alt=media)

4\. Copy and paste the following snippet after the section of code that ends with **\{% endif %\}**.

```liquid
{% for p in line.line_item.properties %}
  {% if p.first contains '_io_' %}
    {% continue %}
  {% endif %}
  {% if p.last %}
    {% assign name = p.first %}
    {% assign value = p.last %}
  {% else %}
    {% assign name = p.name %}
    {% assign value = p.value %}
  {% endif %}
  {% unless value == blank %}
    <p style='margin-top: 0px; margin-bottom: 0px; font-size: 14px; color: #999;'>
      {{ name }}:
    {% if p.last contains '//uploadery.s3' %}
      <a style='font-size: 14px;' href="{{ value }}">Link to your file</a>
    {% else %}
      {{ value }}
    {% endif %}
    </p>
  {% endunless %}
{% endfor %}
```

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-c2308d4261083512848663001f21221ac17b40db%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c1f9ac6186b86a80db833afile-1n4e6j5so9.png?alt=media)

5\. Click the **Save** button at the top of the page.

# New Order

Follow the steps below on how to display option selections in the new order emails.

1\. Make sure that you have notifications enabled. Please see [this article](https://help.shopify.com/manual/sell-online/notifications/order-notifications#add-a-notification-for-new-orders) to see how to enable that.

2\. Starting from your Shopify admin dashboard, navigate to the **Settings** tab, then click on **Notifications**.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-3a46ddaf28cd2c7e482e9e7952d7b71a22bc03e5%2Fdocsassets555e25e4e4b027e1978e1c9aimages67bfd9edc671313b703d24fbfile-nkorhxti81.png?alt=media)

3\. Select **Staff Notifications**.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-8c6ad405eee274321c4839b2ae8cbb8c8b0753a0%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c1225beb83be0e0d28c6abfile-v9obexuefn.png?alt=media)

4\. Click on the **New Order** email template.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-28ee6add68b054a4173b693a21b20c5855519700%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c122a1a0a634459896d034file-fjtiackuvd.png?alt=media)

4\. Locate the following line of code:

```html
<span class="order-list__item-title component">{{ component.quantity }}&nbsp;&times;&nbsp;{{ component_title }}</span><br>
```

You should see three separate results. Locate the last one (near line 913):

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-5a39cceeddb36bb7c6526eff091262e0fc2ab988%2Fdocsassets555e25e4e4b027e1978e1c9aimages67fef4303a43c03e6d9ab8bbfile-fhugplu5ex.png?alt=media)

5\. Copy and paste the following snippet after **`</div>`** and before **`</td>`**.

```liquid
{% for p in component.properties %}
  {% if p.first contains '_io_' %}
    {% continue %}
  {% endif %}
  {% if p.last %}
    {% assign name = p.first %}
    {% assign value = p.last %}
  {% else %}
    {% assign name = p.name %}
    {% assign value = p.value %}
  {% endif %}
  {% unless value == blank %}
    <p style='margin-top: 0px; margin-bottom: 0px; font-size: 14px; color: #999;'>
      {{ name }}:
    {% if p.last contains '//uploadery.s3' %}
      <a style='font-size: 14px;' href="{{ value }}">Link to your file</a>
    {% else %}
      {{ value }}
    {% endif %}
    </p>
  {% endunless %}
{% endfor %}<br>
		
```

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-f6e7bc2b58cced6b0141f3a2d867b84ccee21a1a%2Fdocsassets555e25e4e4b027e1978e1c9aimages67fef4a928312b17f77e90f4file-e7wmog88wt.png?alt=media)

6\. Click the **Save** button at the top of the page.

# Fulfillment Request

Follow the instructions below to display option selections in the fulfillment request emails.

1\. Starting from your Shopify admin dashboard, navigate to the **Settings** tab, then click on **Notifications**.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-3a46ddaf28cd2c7e482e9e7952d7b71a22bc03e5%2Fdocsassets555e25e4e4b027e1978e1c9aimages67bfd9edc671313b703d24fbfile-nkorhxti81.png?alt=media)

2\. Click on the link for the **Fulfillment request** notification template, then select edit code.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-3fa9d20339757e5179debdcf7a9d9b0a2e3db606%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c1259966c50e0e7db92f4ffile-3fo5hg01rt.png?alt=media)

3\. Locate the following line of code (remove any unnecessary spaces at the end).

```html
<p>Variant Title: {{ line.line_item.title }}</p>
```

4\. Copy and paste the following snippet after it.

```liquid
{% for p in line.line_item.properties %}
  {% if p.first contains '_io_' %}
    {% continue %}
  {% endif %}
  {% if p.last %}
    {% assign name = p.first %}
    {% assign value = p.last %}
  {% else %}
    {% assign name = p.name %}
    {% assign value = p.value %}
  {% endif %}
  {% unless value == blank %}
    <p>
      {{ name }}:
      {% if p.last contains '//uploadery.s3' %}
        <a style='font-size: 14px;' href="{{ value }}">Link to your file</a>
      {% else %}
        {{ value }}
      {% endif %}
    </p>
  {% endunless %}
{% endfor %}<br>
```

5\. Click the **Save** button at the top of the page.

# Abandoned Checkout

Follow the steps below to display option selections in the abandoned checkout emails.

1\. Starting from your Shopify admin dashboard, navigate to the **Settings** tab, click on **Notifications**, then **Customer notifications.**

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Ftmivb1b3W7Utj8SWGuV6%2Fimage.png?alt=media&#x26;token=a656fba5-f656-43c7-95f5-7e08e2656469" alt=""><figcaption></figcaption></figure>

2\. Search for the Order exceptions section and select the Abandoned checkout template.

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-47be77ec8ea45f9652e4d18d745208d9372c8ea6%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c645b1ca3e22041ff9d5dbfile-ntovhtojzp.png?alt=media)

3\. Select the **Edit code** button at the top right.

4\. Locate the following line of code (remove any unnecessary spaces at the end).

```liquid
{% if line.variant.title != 'Default Title'
```

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-a69b1057fc8280c6bbc216d63976d3bd5780b13a%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c64436401fe13c9d18a7fbfile-t6wcyjkf2v.png?alt=media)

5\. Copy and paste the following snippet after the section of code.

```liquid
{% for p in line.properties %}
  {% if p.first contains '_io_' %}
    {% continue %}
  {% endif %}
  {% if p.last %}
    {% assign name = p.first %}
    {% assign value = p.last %}
  {% else %}
    {% assign name = p.name %}
    {% assign value = p.value %}
  {% endif %}
  {% unless value == blank %}
    <p style='margin-top: 0px; margin-bottom: 0px; font-size: 14px; color: #999;'>
      {{ name }}:
    {% if p.last contains '//uploadery.s3' %}
      <a style='font-size: 14px;' href="{{ value }}">Link to your file</a>
    {% else %}
      {{ value }}
    {% endif %}
    </p>
  {% endunless %}
{% endfor %}<br>
```

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-c1a1eac77ce2a142b6e85edeed70c55def66c0f0%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c644f66fa01634df41ad9cfile-blng9ulgyw.png?alt=media)

6\. Click the **Save** button at the top of the page.


# Order Printer/Pro templates

## Order Printer

Follow the steps below to display option selections on the Order Printer app.

1\. Starting from the Order Printer app, click the **Templates** tab.

2\. Click on the **Invoice** template.

3\. Locate the **Code** editor and search for this code snippet below.

```liquid
<td>{{ line_item.title }}
```

4\. Replace that line of code with this code snippet below.

```liquid
<td>
{{ line_item.title }}
{% for property in line_item.properties %}
{% if property.first contains '_io_' %}{% continue %}{% endif %}
{% if property.last == blank  %}{% continue %}{% endif %}
<br>{{ property.first }}: {{ property.last }}
{% endfor %}
```

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-fbb5ffc5a14f89cd792138e1d576d31fbac7acd9%2Fdocsassets555e25e4e4b027e1978e1c9aimages67c26ae7a5753e1285139fc6file-ovkn8jkshg.png?alt=media)

5\. **Save** your changes.

## Order Printer Pro

If you have Order Printer Pro, you're in luck!

This app supports line item properties (options) on their templates. Simply navigate to the order in the app to view the products with options.

Here is an example of a **Receipt / Invoice** that includes options from our Infinite Options app:

![](https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2Fgit-blob-9da8f941e591ee7122d7e5d1e6051b5f0e63b9a9%2Fhelpscoutnetdocsassets555e25e4e4b027e1978e1c9aimages68017dd819b3e316d25a3acffile-rzqh73looj.png?alt=media)


# Event API

Infinite Options' Event API allows developers to tie in to and react to different processes that occur within Infinite Options. This article contains information on how to subscribe to certain actions, as well some context on what you can do with these events.

**Note**: This includes technical information. Knowledge of the JavaScript language is required.

## Subscribing to events

Events are subscribed to by calling the **subscribe** method before the app has ran. The **subscribe** method takes two arguments, a string matching the name of the event (events are listed below), and a callback function that takes a single argument, **event**. In order to access this method, you will need to tie into the **beforeReady** callback. Here's an example of this:

```html
<script>
  // Create "window.Shoppad.apps.infiniteoptions" object if it doesn't already exist
  "Shoppad.apps.infiniteoptions".split(".").reduce(function(o, x) { if (!o[x]) {o[x] ={};} return o[x] }, window);

  // Define beforeReady callback
  window.Shoppad.apps.infiniteoptions.beforeReady = function(subscribe) {
    subscribe('appLoad', function(event) {
      console.log('appLoad', event);
    });
  };
</script>
```

**Note**: You will need to define the beforeReady callback before the app has loaded. If you are explicitly loading the script using the instructions found in [this article](https://github.com/shoppad/docs-infinite-options/blob/master/troubleshooting/performance-and-optimization/remove-loading-delays/README.md), you will need to define the callback before that script is called. If you aren't explicitly loading the app, defining the callback anywhere in the `<head />` will suffice.

## Events

Here's a list of all the available events.

**appLoad**

Fired when all fields have been added to the DOM and the app has run its initial processing.

```javascript
/**
 * @param {object} event
 * @param {array} event.detail.fields An array of arrays, with each array being an option set that applies to the current product.
 * @param {boolean} event.detail.hasConditionalLogic True if conditional logic is active on this product, false if not.
 * @param {boolean} event.detail.hasBundledProducts True if the initial state of app has product bundles attached.
 */
subscribe('appLoad', function(event) {
  console.log('appLoad', event);
});
```

**fieldLoad**

Fired every time a field is added to the DOM.

```javascript
/**
 * @param {object} event
 * @param {string} event.detail.name The field name of the input.
 * @param {string} event.detail.value The value of the input.
 * @param {object} event.detail.element A jQuery object representing the element that added to the DOM (this is the parent <div> that wraps the input and label).
 * @param {object} event.detail.fieldConfig 
 * @param {boolean} event.detail.hasConditionalLogic True if the field utilizes conditional logic.
 * @param {boolean} event.detail.hasBundledProducts True if the field has product bundles attached in its initial state.
 */
subscribe('fieldLoad', function(event) {
  console.log('fieldLoad', event);
});
```

**fieldChange**

Fired every time a field is changed. To be specific, this is fired when the native **change** event is fired for select menus, checkboxes, radio button, and when the **keyup** / **touchend** event is fired for text areas, text inputs, and number inputs.

```javascript
/** 
 * @param {object} event
 * @param {string} event.detail.name The field name of the input.
 * @param {string} event.detail.value The value of the input.
 * @param {object} event.detail.element A jQuery object representing the element that added to the DOM (this is the parent <div> that wraps the input and label).
 */
subscribe('fieldChange', function(event) {
  console.log('fieldChange', event);
});
```

**productBundleAdd**

Fired when a product bundle is selected (can occur on page load).

```javascript
/**
 * @param {object} event
 * @param {string} event.detail.name The field name of the input.
 * @param {object} event.detail.element A jQuery object representing the element that added to the DOM (this is the parent <div> that wraps the input and label).
 * @param {object} event.detail.productBundle Details about the bundled product.
 */
subscribe('productBundleAdd', function(event) {
  console.log('productBundleAdd', event);

  // Note: The product variant price returned is cached. You may want to retrieve the latest price.
  window.Shoppad.apps.infiniteoptions.getLatestVariantPrice(event.detail.productBundle, function(productBundle) {
    console.log('Latest productBundle price', event);
  });
});
```

**productBundleRemove**

Fired when a product bundle is unselected (can occur on page load).

```javascript
/**
 * @param {object} event
 * @param {string} event.detail.name The field name of the input.
 * @param {object} event.detail.element A jQuery object representing the element that added to the DOM (this is the parent <div> that wraps the input and label).
 * @param {object} event.detail.productBundle Details about the bundled product.
 */
subscribe('productBundleRemove', function(event) {
  console.log('productBundleRemove', event);

  // Note: The product variant price returned is cached. You may want to retrieve the latest price.
  window.Shoppad.apps.infiniteoptions.getLatestVariantPrice(event.detail.productBundle, function(productBundle) {
    console.log('Latest productBundle price', event);
  });
});
```

**fieldShow**

Fired every time a field is shown.

```javascript
/**
 * @param {object} event
 * @param {string} event.detail.name The field name of the input.
 * @param {string} event.detail.value The value of the input.
 * @param {object} event.detail.element A jQuery object representing the element that added to the DOM (this is the parent <div> that wraps the input and label).
 */
subscribe('fieldShow', function(event) {
  console.log('fieldShow', event);
});
```

**fieldHide**

Fired every time a field is hidden (can occur on page load).

```javascript
/**
 * @param {object} event
 * @param {string} event.detail.name The field name of the input.
 * @param {string} event.detail.value The value of the input.
 * @param {object} event.detail.element A jQuery object representing the element that added to the DOM (this is the parent <div> that wraps the input and label).
 */
subscribe('fieldHide', function(event) {
  console.log('fieldHide', event);
});
```

**productBundleCartSubmit**

Fired when product bundles are attached and the user submits the main product's cart.

**Note**: This event is cancelable. Call `event.preventDefault();` to prevent the app from submitting the main product's form after product bundles have been submitted.

```javascript
/**
 * @param {object} event
 * @param {array} event.detail.submittedProducts The products that were submitted to the cart.
 */
subscribe('productBundleCartSubmit', function(event) {
  console.log('productBundleCartSubmit', event);
});
			
```

**validationSuccess**

Fired when validation for fields has passed.

```javascript
/**
 * @param {object} event
 */
subscribe('validationSuccess', function(event) {
  console.log('validationSuccess', event);
});
			
```

**validationFail**

Fired when validation for fields has failed.

**Note**: This event is cancelable. Call `event.preventDefault();` to prevent an alert with the error message from showing.

```javascript
/**
 * @param {object} event
 * @param {string} event.detail.error The error message for the input that failed validation first.
 * @param {object} event.detail.element A jQuery object representing the element that added to the DOM (this is the parent <div> that wraps the input and label).
 */
subscribe('validationFail', function(event) {
  console.log('validationFail', event);
});
	
```


# Development Store/Affiliate Store Plans

ShopPad allows all of our apps to be installed for free on any Shopify website on an Affiliate plan. All apps will be fully functional while your store remains on the Affiliate plan. When you install the app, you will see a warning at the top of the dashboard:

<figure><img src="https://24152052-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FglwgaFVh2VmGBjtIbnDb%2Fuploads%2FjEwxD1Z9Ic81Uk9UHN7T%2FDevelopment%20Store-Affiliate%20Store%20Plans-doc.png%20-%20Step%201.png?alt=media&#x26;token=0ad5cc7c-4938-40a9-98ee-52d2d54dd6e7" alt=""><figcaption></figcaption></figure>

When you change your plan to a paid Shopify plan, the app will immediately stop working.  You will need to revisit your app dashboard and approve the recurring fee:

![](https://d33v4339jhl8k0.cloudfront.net/docs/assets/555e25e4e4b027e1978e1c9a/images/5a1e5cd6042863319924d5a8/file-TN4tS8AyKL.png)

### Frequently Asked Questions

**How can I sign up for a monthly payment plan?**

We cannot sign you up for a payment plan until you have added your credit card to your account information and your store is on a paid Shopify plan. Once you are on a paid Shopify plan, visit your ShopPad app's dashboard and you will be prompted to approve the Shopify recurring fee.

**How will I know that my app is not working because I need to upgrade to a paid plan?**

If your website used to be on an Affiliate plan, you changed plans, and your ShopPad app if no longer working, it is probably because you need to sign up for a monthly payment plan. You can tell for sure by opening the Network tab in your browser's JavaScript debug console and hitting Refresh. You will see a `401: Unauthorized` error for the asset from cloudfront.com:

![](https://d33v4339jhl8k0.cloudfront.net/docs/assets/555e25e4e4b027e1978e1c9a/images/5a1e5c6a042863319924d5a6/file-BOq9pXjB1B.png)



# Integration Apps Available

Fablet store
Ecomposer
GemPages
PageFly
Replo Page Builder
UpOrder
Weglot
Zipify Pages
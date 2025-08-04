---
title: "Pre-orders and TBYB UX guidelines"
source: https://shopify.dev/docs/storefronts/themes/pricing-payments/preorder-tbyb/preorder-tbyb-ux-guidelines
sections: Theme features > Preorder Tbyb > Preorder Tbyb Ux Guidelines
created: 2025-07-29 15:38:21
---

Title: Pre-orders and Try Before You Buy (TBYB) UX guidelines

URL Source: https://shopify.dev/docs/storefronts/themes/pricing-payments/preorder-tbyb/preorder-tbyb-ux-guidelines

Markdown Content:
A great customer-facing user experience (UX) for pre-orders and TBYB is important for the success of our merchants because it enables them to offer customers a more flexible purchasing process.

A pre-order or a TBYB is any transaction where the payment or fulfillment doesn't happen at the time of purchase.

This guide explains the key principles and component-level guidelines for implementing pre-order and TBYB UIs. and TBYB user interfaces (UIs).

To provide a good experience with pre-order or TBYB options and gain trust from customers, make sure to implement the following UX principles:

*   **Be clear and up front about important information**: Customers should be able to clearly identify the options and make a choice, such as try now, pay later.
*   **Provide clarity around money**: Customers should be able to clearly identify how much they will pay at checkout, the total cost of the product, when they’ll be charged a remaining balance amount (when applicable), and when their payment method will be charged.
*   **Offer as much clarity around delivery timelines as possible**: When possible, provide exact dates or a range, if exact dates are unavailable, for when customers can expect to receive their products, or the duration of the trial period.
*   **Provide a seamless integration**: The UI for options should be integrated into the theme’s existing design system.
*   **Use clear language**: Use language that customers can understand and that refers to the actual purchase terms. For example, use "pre-order", "back-order", and "TBYB".

Before you integrate your pre-order and TBYB options app into a theme, familiarize yourself with the UX guidelines and best practices that are associated with each component.

Apps should consider that products with different ways of purchasing are displayed in the following places on the online store:

*   Product pages
*   Collection pages
*   Search results
*   Featured product sections on the home page
*   Quick view modals on product cards

When customers can see available ways of purchasing at relevant points in the shopping process, they're more likely to utilize them. Ensure that all relevant information is always included, such as the deposit amount and fulfillment date, estimate for pre-orders, or the trial period length for TBYB.

Pre-order and TBYB information is displayed in the following components of the online store:

*   Product forms
*   Cart items
*   Order details

The following sections include guidance for displaying prices, styling UI components for pre-orders and TBYB, and presenting multiple purchasing options. In each section, the relevant [Liquid](https://shopify.dev/docs/api/liquid) properties that are required to create each component are also referenced.

The product form enables a customer to select their pre-order or TBYB option. This form is where the merchant can provide clarity and more details for a product and its available variants. Product forms are used in product pages, featured product sections on home pages, and quick view modals on product cards.

The subcomponents of a product form include the following:

*   A. Price
*   B. Selling plan selection
*   C. Selling plan details
*   D. Main call-to-action

**Example: Product form (pre-order)**

![Image 1: Pre-order product form subcomponents screenshot](https://shopify.dev/assets/api/purchase-options/pre-order-product-form-7b70494b8c1801ea36a31f5eb24d83721c8cd4f3d533ea6cf65a88216192133c.png)

**Example: Product form (TBYB)**

![Image 2: TBYB product form subcomponents screenshot](https://shopify.dev/assets/api/purchase-options/tbyb-product-form-a6f1aa1b69d46e836c02739e9763a89ca9597d8a439bc674bd2a91dcc143556b.png)

Customers should be able to clearly identify the full price of the product, and the type of purchasing option that the product is.

**Example: Price (pre-order)**

![Image 3: Price for pre-order](https://cdn.shopify.com/shopifycloud/shopify_dev/assets/api/purchase-options/pre-order-price-4950076a7cfbdd247e784d50fab09b5039d778983045a90b09ab3e0d9d4e5f17.png)
Product form: Price| # | UI element | Liquid properties and information | UI guidelines |
| --- | --- | --- | --- |
| 1 | Price | `price` | Reflect the price details from the selected pre-order. |
| 2 | Pre-order badge | `selling_plan_group.name` Reflect the price details from the selected pre-order. | Provide a contextual pre-order badge or label to help differentiate against a one-time pre-order. The badge or label will help customers quickly understand that this product can be bought as a pre-order. |

Pre-orders and TBYB options don’t usually come with savings to encourage customers to purchase products.

The main price component should always display the total cost of an item. When a customer selects a selling plan or a product variant, the main price component should reflect their changes.

To help customers understand what purchasing option they have selected, do the following:

*   Clearly display the product's full price.
*   Add the appropriate pre-order or TBYB badge to the component to help clarify to customers that they aren't buying a regular one-time product.

**Example: Main price component (pre-order)**

![Image 4: Price main component for pre-order](https://cdn.shopify.com/shopifycloud/shopify_dev/assets/api/purchase-options/pre-order-main-price-component-207a800141cc5bd7c3e3a5c57e7771d2976c10a9d1ca8c1bad045348eb96fa52.png)
**Example: Main price component (TBYB)**

![Image 5: Price main component for TBYB](https://cdn.shopify.com/shopifycloud/shopify_dev/assets/api/purchase-options/tbyb-main-price-component-tbyb-a7f615afbb5dea4a55b97d511a459e91c0629c6fb991251a49011d583586436b.png)
Customers should be able to clearly identify their pre-order or TBYB options.

**Example: Selling plan selection (pre-order)**

![Image 6: Selling plan selection for pre-order with deposit and pay in full](https://cdn.shopify.com/shopifycloud/shopify_dev/assets/api/purchase-options/pre-order-selling-plan-selection-719502eacf89536cddd5c1614866d91278f514949c3aecceb3e86c228003cb4d.png)
**Example: Selling plan selection (TBYB)**

![Image 7: Selling plan selection for TBYB](https://cdn.shopify.com/shopifycloud/shopify_dev/assets/api/purchase-options/tbyb-selling-plan-selection-bd6f09db58456f99ffd0bb17e996100052bc8e00e47c4fefa56fbc05dc6a8ca2.png)
Selling plan selection| # | UI element | Liquid properties and information | UI guidelines |
| --- | --- | --- | --- |
| 1 | Purchase options | `product.selling_plan_groups` | One-time purchases and selling plan groups are considered different types of purchasing options. Use the term **Purchase options** in your own designs. |
| 2 | One-time purchase | `product.requires_selling_plan` If the property is `false`, then at least one variant can be purchased as a one-time purchase, and the one-time purchase option should be presented in the UI. | **Group behavior** On the first page load, select the one-time option by default. When the customer interacts with the UI, consider collapsing the unselected group to make good use of the space. Disable the selling plan group selection when it isn’t available for a given variant. **Group layout** Prioritize displaying purchasing options in a vertically stacked list to make them readable on all devices. When displayed side-by-side, the information can be crowded on smaller screens. **Group style** Consider displaying purchasing options as radio inputs instead of buttons. Buttons can easily compete with the product form’s call-to-action. For example, a submit button. |
| 3 | Selling plan group name | `selling_plan_group.name` Always make this value visible. For more information, refer to [selling_plan_group.name](https://shopify.dev/docs/api/liquid/objects/selling_plan_group#selling_plan_group-name). |
| 4 | Selling plan option value | `selling_plan_option.value` | Don’t express exact prices in option values, such as “$50 deposit”, because the values won’t be accurate if the currency changes. Expressing percentages is possible because they stay consistent even if the currency changes. For more information refer to [Considerations for currency switching and price rounding](https://shopify.dev/docs/storefronts/themes/pricing-payments/preorder-tbyb/preorder-tbyb-ux-guidelines#considerations-for-currency-switching-and-price-rounding). |

Show the **Purchase options** label when the following conditions apply:

*   A one-time purchase exists and there's at least one `sellingPlanGroup` object.
*   A one-time purchase isn't available, but there are multiple `sellingPlanGroup` objects of different types.

Shopify doesn't show the **Purchase options** label when the following conditions apply:

*   There are no selling plan groups.
*   The product can only be purchased with a selling plan and there's only one selling plan group. In this case, the `sellingPlanGroup` name remains in its position, but without the radio input.

Selling plan names should make clear the benefit of choosing that option. For example, "Pre-order".

Because the `SellingPlan` object can be associated with multiple selling plan groups on a product, selling plan group names are used to differentiate purchase options.

#### Display selling plan option values

[Anchor link to section titled "Display selling plan option values"](https://shopify.dev/docs/storefronts/themes/pricing-payments/preorder-tbyb/preorder-tbyb-ux-guidelines#display-selling-plan-option-values)

All the option values must be displayed at a glance from a group. Consider adapting the component layout to optimize readability.

Components should adapt to the number of options being shown. When there are many options to choose from, an appropriate component should be selected to enable customers to view all options easily. When there are fewer options, a different component may be used. When possible, apply the appropriate layout to all values within a selling plan group for consistency:

*   Four options or less: Show each option as a radio button to allow customers to view what’s available.
*   More than four options: Use a select dropdown to emphasize the customer's selection and hide other options within the collapsed dropdown.

A product’s variants might not all support the same purchasing options. As a customer changes their variant selection, the components should update to make clear which options are available and unavailable.

When a selected option within a selling plan group is unavailable, the following events should happen:

*   The unavailable options are unselected, and the customer must make a new selection to successfully submit the form.
*   The unavailable options for the selected variant are disabled.
*   The form submission button is enabled. Disabling the button removes the ability to display an error message and instead displays the product as unavailable, which is false. Let the customer click the button but prevent them from adding the product to the cart. Then, anchor and scroll back to the faulty UI area and display a message that describes why the process can't complete and what the customer needs to do to proceed.

Display important deferred pre-order and TBYB terms and selections to customers. The summary confirms a customer's selections, shows any conditions, and helps build trust in the brand.

**Example: Selling plan details (pre-order)**

![Image 8: Selling plan details for pre-order](https://cdn.shopify.com/shopifycloud/shopify_dev/assets/api/purchase-options/pre-order-selling-plan-details-0464a7d43f5e3ff2a797a349616b003e9b7a6cf9038021d92e648dd7480089ec.png)
Selling plan details| # | UI element | Liquid properties and information | UI guidelines |
| --- | --- | --- | --- |
| 1 | Selling plan description | `selling_plan.description` | Don't express exact prices in option values, for example, "$100 deposit". For more information, refer to [Considerations for currency switching and price rounding](https://shopify.dev/docs/storefronts/themes/pricing-payments/preorder-tbyb/preorder-tbyb-ux-guidelines#considerations-for-currency-switching-and-price-rounding). Consider including a link to the returns or billing policies in the description. Merchants might have more detailed policies that need to be accessed by customers. |

Having a call-to-action (main button text) that reflects the purchasing option type helps customers differentiate between a pre-order or a TBYB and a one-time purchase, even if there's only one option available.

**Example: Shop has accelerated checkout (pre-order and TBYB)**

![Image 9: Shop has accelerated checkout for pre-order](https://cdn.shopify.com/shopifycloud/shopify_dev/assets/api/purchase-options/pre-order-main-call-to-action-acc-fd7312e2c575958524f03940f48208eafd7869caaf161dd5bdea7d85af0b8bce.png)![Image 10: Shop has accelerated checkout for TBYB](https://cdn.shopify.com/shopifycloud/shopify_dev/assets/api/purchase-options/tbyb-main-call-to-action-acc-f0fde83237e5b9cd7a2a8b5def47893a42da32403ac9cdad7be0f8b0a86b98c1.png)
**Example: Shop doesn’t have accelerated checkout (pre-order and TBYB)**

![Image 11: Shop has no accelerated checkout for pre-order](https://cdn.shopify.com/shopifycloud/shopify_dev/assets/api/purchase-options/pre-order-main-call-to-action-df8e82de074e3eeb8dbada4313e22fb1a5882d7d139a2ef22249310cdf306847.png)![Image 12: Shop has no accelerated checkout for TBYB](https://cdn.shopify.com/shopifycloud/shopify_dev/assets/api/purchase-options/tbyb-main-call-to-action-dcde7eb26e2298973791cda67f88259d8c7c8780bc0f74b5e1ce625c66db6af5.png)
Main call-to-action| # | UI element | Liquid properties and information | UI guidelines |
| --- | --- | --- | --- |
| 1 | Call-to-action | On first page load, if the product requires a selling plan or one is selected, then switch the call-to-action string to something purchase option-specific that merchants can customize. | Update the call-to-action label to the accelerated checkout button for a deferred purchase option, and keep the add to cart button as is. |

Each pre-order or TBYB option item displays the most important details to help customers understand their purchase.

*   For pre-order items, make sure that the customer understands the fulfillment date and relevant payment information, such as a deposit amount and future payments.
*   For TBYB items, customers should see the trial period length. The price should also match what's represented on the product page.

A cart item includes the following subcomponents:

*   Cart page
*   Cart notification

Customers tend to scan the cart page and review the information before proceeding to checkout, so it’s important that the following elements are clearly represented.

**Example: Cart page (pre-order)**

![Image 13: Cart page for pre-order](https://cdn.shopify.com/shopifycloud/shopify_dev/assets/api/purchase-options/pre-order-cart-39f18caba9216b2b21356458ec6fb47d63255912e7e220364baf59db120fa22b.png)
**Example: Cart page (TBYB)**

![Image 14: Cart page for TBYB](https://cdn.shopify.com/shopifycloud/shopify_dev/assets/api/purchase-options/tbyb-cart-24bb36b7e0b9ac2488c4fa154fde6e6a0c20955bc6c91b58246f28ddbdaeeaec.png)
Cart page| # | UI element | Liquid properties and information | UI guidelines |
| --- | --- | --- | --- |
| 1 | Selling plan information | `line_item.selling_plan_allocation.selling_plan.name` Use `selling_plan.name` in the cart line item. This same text is used at checkout. For more information, refer to [Using the selling plan name](https://shopify.dev/docs/storefronts/themes/pricing-payments/preorder-tbyb/preorder-tbyb-ux-guidelines#using-the-selling-plan-name). | Because the selling plan name is meant to accurately summarize the deferred purchase option, don't list the individual selling plan option values alongside the selling plan name. |
| 2 | Price | `price` | Display the full price of the product so that the customer is reminded of the total cost of the item they’re buying. |
| 3 | Price at checkout | `selling_plan.checkout_charge.value` | The price customers will pay at checkout. For pre-order items, this price usually represents the deposit amount. For TBYB items, the price will usually be $0 to indicate to customers that they won’t need to pay anything at checkout. |

The cart notification returns information about the item that was just added to the cart.

**Example: Cart notification (pre-order)**

![Image 15: Cart notification for pre-order](https://cdn.shopify.com/shopifycloud/shopify_dev/assets/api/purchase-options/pre-order-cart-notification-d79095e2c4e705a3e2b3b3f37cd53fe44863f18cc86a4209a24a584d113ba36d.png)
Cart notification| # | UI element | Liquid properties and information | UI guidelines |
| --- | --- | --- | --- |
| 1 | Selling plan information | `line_item.selling_plan_allocation.selling_plan.name` Use `selling_plan.name` in the cart line item. This same text is used at checkout. For more information, refer to [Using the selling plan name](https://shopify.dev/docs/storefronts/themes/pricing-payments/preorder-tbyb/preorder-tbyb-ux-guidelines#using-the-selling-plan-name). | Because the selling plan name is meant to accurately summarize the deferred purchase option, don't list the individual selling plan option values alongside the selling plan name. |
| 2 | Price | `price` | Display the full price of the product so that the customer is reminded of the total cost of the item that they’re buying. |

The `selling_plan.name` should be a succinct description of the selling plan that can be easily understood by customers. The text is displayed in multiple areas of the online store, such as cart line items, checkout, and past order details. The value is also displayed in the merchant’s internal admin on order pages.

Shopify doesn't control the value of the name, which means that merchants can enter any text value they want using an app.

When creating selling plan names, implement the following recommended guidelines:

*   State the type of deferred purchase option.
*   Write the deposit amount and payment due date of the product in order for the customer to keep a reference of it throughout the purchase journey.

#### Considerations for currency switching and price rounding

[Anchor link to section titled "Considerations for currency switching and price rounding"](https://shopify.dev/docs/storefronts/themes/pricing-payments/preorder-tbyb/preorder-tbyb-ux-guidelines#considerations-for-currency-switching-and-price-rounding)

Merchants can sell in [multiple currencies on their online store](https://help.shopify.com/en/manual/payments/shopify-payments/multi-currency/setup).

When a customer visits the online store, Shopify presents the currency that's determined appropriate for the customer. Online stores can offer a [currency selector](https://shopify.dev/docs/api/liquid/tags/form#form-localization) to customers to enable them to manually switch the currency. Shopify also offers a price rounding feature to merchants, which enables merchants to set custom rounding rules for converted prices.

Customers logged in to the store can view the details of each past order. It's important to let the customer easily identify orders with pre-order or TBYB products.

**Example: Order details (pre-order)**

![Image 16: Order details for pre-order](https://cdn.shopify.com/shopifycloud/shopify_dev/assets/api/purchase-options/pre-order-order-details-115425f8269dafb2d2d59c58f3424d38669210b692e25a19fffcd71c775bcfac.png)
Order details| # | UI element | Liquid properties and information | UI guidelines |
| --- | --- | --- | --- |
| 1 | Selling plan information | `line_item.selling_plan_allocation.selling_plan.name` Use `selling_plan.name` in the cart line item. This same text is used at checkout. For more information, refer to [Using the selling plan name](https://shopify.dev/docs/storefronts/themes/pricing-payments/preorder-tbyb/preorder-tbyb-ux-guidelines#using-the-selling-plan-name). | Because the selling plan name is meant to accurately summarize the pre-order or TBYB option, don't list the individual selling plan option values alongside the selling plan name. |
| 2 | Price | `price` | Display the full price of the product so that the customer is reminded of the total cost of the item they’re buying. |
| 3 | Price at checkout | `selling_plan.checkout_charge.value` | The price customers will pay at checkout. For pre-order items, this price usually represents the deposit amount. For TBYB items, the price will usually be $0 to indicate to customers that they won’t need to pay anything at checkout. |

*   [Create and manage pre-order and TBYB](https://shopify.dev/docs/apps/build/purchase-options/deferred/build-deferment-solution)
*   [Getting started with a pre-order or TBYB app](https://shopify.dev/docs/apps/build/purchase-options/deferred/create-deferred-purchase-app/start-building)
*   [Get started with product subscription app extensions](https://shopify.dev/docs/apps/build/purchase-options/product-subscription-app-extensions/start-building)

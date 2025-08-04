---
title: "Subscription UX guidelines"
source: https://shopify.dev/docs/storefronts/themes/pricing-payments/subscriptions/subscription-ux-guidelines
sections: Theme features > Subscriptions > Subscription Ux Guidelines
created: 2025-07-29 15:38:17
---

Title: Subscription UX guidelines

URL Source: https://shopify.dev/docs/storefronts/themes/pricing-payments/subscriptions/subscription-ux-guidelines

Markdown Content:
A great customer-facing user experience (UX) for purchasing a subscription is important to the success of our merchants. This guide explains the key principles of subscription needs and component-level guidelines for implementing subscription user interfaces (UIs).

To provide a good experience when purchasing subscriptions and gain trust from customers, make sure to implement the following UX principles:

*   **Create a visible hierarchy**: Customers should be able to clearly identify the savings of a subscription plan, the selling plan options, and the terms and conditions.
*   **Disclose information progressively and logically**: Customers should have a sense of progression in subscription selection as their decisions clearly influence subsequent choices. Adapt the information shown in the customer flow to communicate subscriptions clearly and concisely.
*   **Provide a seamless integration**: The subscriptions UI should be integrated into the theme’s existing design system.
*   **Work with merchants' existing workflows**: Shopify provides the tooling for apps to build subscription experiences. Subscription experiences can be accessed directly from the Shopify admin. This allows merchants to access your app from the surface areas they are familiar with.
*   **If a resource exists in Shopify, don't duplicate it in your app**: Shopify-managed resources such as customers, discounts, and products should be managed in a single place to reduce complex workflows and duplication.

Before you integrate your subscription app into a theme, familiarize yourself with the UI guidelines and best practices that are associated with each component.

Apps should consider how subscription products appear in multiple places on the online store, such as product pages, collection pages, search results, featured product sections on the home page, and quick view modals on product cards. Surfacing potential subscription savings and pricing in these areas can further encourage customers to subscribe.

Subscription information is displayed in the following components of the online store:

*   [Product forms](https://shopify.dev/docs/storefronts/themes/pricing-payments/subscriptions/subscription-ux-guidelines#product-forms)
*   [Cart items](https://shopify.dev/docs/storefronts/themes/pricing-payments/subscriptions/subscription-ux-guidelines#cart-items)
*   [Order details](https://shopify.dev/docs/storefronts/themes/pricing-payments/subscriptions/subscription-ux-guidelines#order-details)

The following sections include guidance for displaying prices, styling subscription UI components, and presenting multiple subscriptions. In each section, the relevant [Liquid](https://shopify.dev/docs/api/liquid) properties needed to create each component are also referenced.

The product form allows a customer to select their subscription. This is where the merchant can provide clarity and more details for a product and its available variants. Product forms are used in product pages, featured product sections on home pages, and quick view modals on product cards.

The subcomponents of a product form include the following:

*   A. [Price](https://shopify.dev/docs/storefronts/themes/pricing-payments/subscriptions/subscription-ux-guidelines#price)
*   B. [Selling plan selection](https://shopify.dev/docs/storefronts/themes/pricing-payments/subscriptions/subscription-ux-guidelines#selling-plan-selection)
*   C. [Selling plan details](https://shopify.dev/docs/storefronts/themes/pricing-payments/subscriptions/subscription-ux-guidelines#selling-plan-details)
*   D. [Main call-to-action](https://shopify.dev/docs/storefronts/themes/pricing-payments/subscriptions/subscription-ux-guidelines#main-call-to-action)

![Image 1: Product form subcomponents screenshot](https://shopify.dev/assets/api/subscriptions/product-form-subcomponents-8c0326d4bf414da4d72e3456960648280bb4b5e21c00c407a5e5b11a5038568a.png)

Customers should be able to clearly identify the price of a subscription.

![Image 2: Price subcomponent screenshot](https://shopify.dev/assets/api/subscriptions/price-subcomponent-20b9b19401de02ce4c8a633db8005d4f464ee263e6bf6bd1b8c62e7a971a1e96.png)

| # | UI element | Liquid properties and information | UI guidelines |
| --- | --- | --- | --- |
| 1 | Price | `selling_plan_allocation.price` | Reflect the price details from the selected subscription. |
| 2 | Compare at price | `selling_plan_allocation.compare_at_price` |
| 3 | Per delivery price | `selling_plan_allocation.per_delivery_price` Displays only when the value is different from `price`. This occurs when the selling plan is a prepaid subscription. |
| 4 | Unit price | `selling_plan_allocation.unit_price` Unit price values may differ between `sellingPlanAllocations`. Unit measurement information is on the `variant` object, as it does not change based on `sellingPlan`. |
| 5 | Subscription badge | `selling_plan.recurring_deliveries` The badge shown when the selling plan involves recurring deliveries (subscription). | Provide a contextual subscription badge or label to help differentiate against a one-time subscription. To reduce the clutter on a product page, don't display a badge when the item can only be purchased as a subscription. Rely on other ways to express this detail. |
| 6 | Price adjustment | `selling_plan.price_adjustment` The object includes information on whether the adjustment is price or percentage based. This is used instead of sale price. | Consider adding "subscription savings" details to highlight the subscription's value. For example, "Subscription - Save $3.00" or "Subscription - Save 10%". For subscriptions with a pricing policy that changes over time, express the largest savings. For example, "Save up to 30%". For more information, refer to [Communicating changes in price over time](https://shopify.dev/docs/storefronts/themes/pricing-payments/subscriptions/subscription-ux-guidelines#communicating-changes-in-price-over-time). |

A subscription usually comes with savings to encourage customers to purchase products. Two common patterns for displaying a subscription's pricing information are a [main price component](https://shopify.dev/docs/storefronts/themes/pricing-payments/subscriptions/subscription-ux-guidelines#main-price-component) and [inline pricing](https://shopify.dev/docs/storefronts/themes/pricing-payments/subscriptions/subscription-ux-guidelines#inline-pricing). These patterns can be implemented at the same time in a design, but this can be a challenge in situations where you don't have control over the codebase for both the app and the theme.

Regardless of your approach to displaying prices to customers, the following points should guide your implementation:

*   The price of a subscription is clearly visible when a customer has selected a selling plan from a product form.
*   For products with [unit pricing](https://help.shopify.com/en/manual/intro-to-shopify/initial-setup/sell-in-germany/price-per-unit), ensure that any change to the unit price from a subscription is displayed.
*   If an item is a prepaid item, then display the price per delivery. This enables customers to better compare the price difference between one-time purchases and prepaid items.

In this approach, there is a main price component on the page that's updated when a customer interacts with a selling plan selector and product variant selection.

To help customers understand the price of products that they purchase, do the following:

*   Clearly display the subscription item's price and any applicable savings compared to the price of a one-time purchase.
*   Add a subscription badge to the component to help clarify that the savings are conditional to the purchase of a subscription.

![Image 3: Main price component screenshot](https://shopify.dev/assets/api/subscriptions/main-price-component-9887a759ee24ee753f356edb5033641b4dcfe371b79d56bd9dfa3b784925dac2.png)

In this approach, pricing information is displayed inline or close to the selling plan selection. The price updates in response to changes in selling plan and product variant selection.

![Image 4: Inline pricing screenshot](https://shopify.dev/assets/api/subscriptions/inline-pricing-cc4ded879d3f47a1aa9c5b83e56e8b5175b13a64165fcfd732e77ce28bf57c34.png)

This approach makes a strong association between the effects of choosing a selling plan and the price. The positioning of the price is also preferable for mobile shopping, where smaller screen sizes mean that the main price component and price updates might not be in view.

This approach is useful for [subscription apps](https://shopify.dev/docs/apps/build/purchase-options/subscriptions) that integrate into the codebase of third-party themes. Because the pricing information is contained within a selling plan selector that the app controls and injects, this approach can help to avoid conflicts between the app's and the theme's respective scripts.

Customers should be able to clearly identify their subscription options:

![Image 5: Selling plan selection subcomponent screenshot](https://shopify.dev/assets/api/subscriptions/selling-plan-selection-subcomponent-6020208cecc20e14a58c18a575a5dd870bf518245e4baf8bdd071fb7e30db7dc.png)

| # | UI element | Liquid properties and information | UI guidelines |
| --- | --- | --- | --- |
| 1 | subscriptions label | `product.requires_selling_plan` `product.selling_plan_groups` | One-time subscriptions and selling plan groups are considered different subscriptions. Use the term **subscriptions** in your own designs. |
| 2 | One-time subscription | `product.requires_selling_plan` If the property is `false`, then at least 1 variant can be purchased as a one-time purchase and the one-time subscription should be presented in the UI. | **Group behavior** On the first page load, select the one-time subscription by default. When the customer interacts with the UI, consider collapsing the unselected group to make good usage of space. Disable the selling plan group selection when it isn't available for a given variant. **Group layout** Prioritize displaying subscriptions in a vertically stacked list to make them readable on all devices. When displayed side-by-side, the information can be crowded on smaller screens. **Group style** Consider displaying subscriptions as radio inputs instead of buttons. Buttons can easily compete with the product form’s call-to-action (submit button). |
| 3 | Selling plan group name | `selling_plan_group.name` Always make this value visible. For more information, refer to [Selling plan group name](https://shopify.dev/docs/storefronts/themes/pricing-payments/subscriptions/subscription-ux-guidelines#selling-plan-group-name). |
| 4 | Inline price | `selling_plan_allocation.per_delivery_price` Using the `per_delivery_price` is a more relevant comparison between prepaid subscriptions and one-time purchases. | Showing the price of selling plans inline makes it easier for customers to compare subscriptions. Show "each" next to the price for both one-time subscriptions and selling plan groups to maintain consistency and clarity among similar text information. For subscriptions with a pricing policy that changes over time, add "from" before the inline pricing to clearly communicate the lowest price of the selling plan group. For example, "from $7.00". For more information, refer to [Communicating changes in price over time](https://shopify.dev/docs/storefronts/themes/pricing-payments/subscriptions/subscription-ux-guidelines#communicating-changes-in-price-over-time). |
| 5 | Selling plan option name | `selling_plan_option.name` | Contextualize the type of selling plan option. **Displaying selling plan options** Selling plan option values are often written in a way that assumes that the option name is also visible to the customer. For example: * Name: "Delivery every" * Option: "Month" * Option: "Week" Never hide the option names. Certain site designs will hide form labels to make a page look clean, but this can result in the values being presented with no context. |
| 6 | Selling plan option value | `selling_plan_option.value` For more information, refer to [Display selling plan option values](https://shopify.dev/docs/storefronts/themes/pricing-payments/subscriptions/subscription-ux-guidelines#display-selling-plan-option-values). | Don't express exact prices in option values, such as "Save $5 a week", because the values won't be accurate if the currency changes. Expressing percentages is possible because they stay consistent even if the currency changes. For more information, refer to [Considerations for currency switching and price rounding](https://shopify.dev/docs/storefronts/themes/pricing-payments/subscriptions/subscription-ux-guidelines#considerations-for-currency-switching-and-price-rounding). |

Show the **subscriptions** label when the following conditions apply:

*   A one-time purchase exists and there's at least one `sellingPlanGroups`.
*   A one-time purchase isn't an option, but there are multiple `sellingPlanGroups`.

Shopify doesn't show the **subscriptions** label when the following conditions apply:

*   There are no selling plan groups.
*   The product is subscription-only and there's only 1 selling plan group. In this case, the `sellingPlanGroup`’s name remains in its position, but without the radio input.

Keep the selling group name and the inline price within the selector container. This sustains a stronger relationship between subscription selection and `per_delivery_price`, and maintains a consistent approach across different use cases:

![Image 6: Subscription-only use case screenshot](https://shopify.dev/assets/api/subscriptions/subscription-only-use-case-df71e227285cc132913b528d55e91a65eec354e9388c5d558eb3040fb4edd592.png)

Selling plan names should make clear the benefit of signing up for a subscription. For example, "Subscribe and save 10%". This incentivizes customers to make a bigger commitment in comparison to one-time subscriptions.

Because the [Selling plan API](https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplan) allows for multiple selling plan groups on a product, selling plan group names are used to differentiate subscriptions.

#### Display selling plan option values

[Anchor link to section titled "Display selling plan option values"](https://shopify.dev/docs/storefronts/themes/pricing-payments/subscriptions/subscription-ux-guidelines#display-selling-plan-option-values)

It's required to display all of the option values at a glance from a group. Consider adapting the component layout to optimize readability.

Components should adapt to the number of options being shown. When there are many options to choose from, an appropriate component should be selected to enable customers to view all options easily. Where there is a small number of options, a different component may be used. When possible, apply the appropriate layout to all values within a selling plan group for consistency:

*   **4 options or less**: Show each option as a radio button to allow customers to view what’s available.
*   **More than 4 options**: Use a select dropdown to emphasize the customer's selection and hide other options within the collapsed dropdown.

A product’s variants might not all support the same subscription options. As a customer changes their variant selection, the components should update to make clear which subscription options are available and unavailable.

When a selected option within a selling plan group is unavailable, three events should happen:

*   The unavailable options become unselected and require the customer to make a new selection to successfully submit the form.
*   The unavailable options for the selected variant are disabled.
*   The form submission button is enabled. Disabling the button removes the ability to display an error message and instead displays the product as unavailable, which is false. Let the customer click the button but prevent them from adding the product to the cart. Then, anchor and scroll back to the faulty UI area and display a message that describes why the process can't complete and what the customer needs to do to proceed.

Display important subscription terms and selections to customers. The subscription summary confirms a customer's selections, shows any conditions, and helps build trust in the brand.

![Image 7: Selling plan details subcomponent screenshot](https://shopify.dev/assets/api/subscriptions/selling-plan-details-subcomponent-a6f9692a4fda5d527ecf0187875423cce06dd9118d2d21d42f6b23372b0d8f62.png)

| # | UI element | API properties and information | UI guidelines |
| --- | --- | --- | --- |
| 1 | Recurring price line | `selling_plan_allocation.price_adjustments` `selling_plan.price_adjustments` The `selling_plan` contains information on how a plan affects product prices, while the `selling_plan_allocation` describes the price for the variant to which the selling plan is applied. | Express the number of payment cycles at the current price, and communicate what the price will be in the future. For example, first payment $6.00, then $9.00. Include the word "each" to clarify when the number of independent recurring payment cycles is greater than 1. For example, first 3 payments $7.00 each, then $9.00. Use "free" when the value is $0.00. This mirrors natural speech and helps customers understand the element. For example, first payment free, then $9.00. |
| 2 | Selling plan description | `selling_plan.description` Merchants might use this field for promotional text. For example, they might use it for marketing terms, a call-to-action, or preemptively answering questions about cancellation policies or refunds. For more information, refer to [Subscription policy link](https://shopify.dev/docs/storefronts/themes/pricing-payments/subscriptions/subscription-ux-guidelines#subscription-policy-link). | Don't express exact prices in option values, for example, "Save $5 a week". For more information, refer to [Considerations for currency switching and price rounding](https://shopify.dev/docs/storefronts/themes/pricing-payments/subscriptions/subscription-ux-guidelines#considerations-for-currency-switching-and-price-rounding). Consider including a link to the subscription policy in the description. Merchants might have a more detailed subscription policy that needs to be accessed by customers. For subscriptions with a pricing policy that changes over time, for example, "First month free, then save 10% on renewals", communicate any future price changes clearly on the product page. For more information, refer to [Communicating changes in price over time](https://shopify.dev/docs/storefronts/themes/pricing-payments/subscriptions/subscription-ux-guidelines#communicating-changes-in-price-over-time). |

#### Communicating changes in price over time

[Anchor link to section titled "Communicating changes in price over time"](https://shopify.dev/docs/storefronts/themes/pricing-payments/subscriptions/subscription-ux-guidelines#communicating-changes-in-price-over-time)

Selling plans can have multiple price policies, which allows for the price of a subscription item to change after a certain period. A common approach is to encourage purchases with a lower initial price, for example, "Save $10 on the first 3 deliveries."

If an initial price incentive is applied to a subscription, then explain the current payment and how payments will change in the future.

It’s important to be transparent. A lack of information can cause customer mistrust and might appear misleading. Certain states and countries have laws around price clarity, which means that merchants might be subject to lawsuits.

In the [mockup](https://shopify.dev/docs/storefronts/themes/pricing-payments/subscriptions/subscription-ux-guidelines#selling-plan-details), the link to **View subscription policy** is part of the selling plan description and therefore in the merchant’s or app’s control to provide. The intention is to allow individual selling plans to provide a link out to a dedicated URL, if available.

The`shop.subscription_policy` object available in Liquid makes it possible to link to a dedicated `/policies/subscription-policy` page. The content of the page is editable by the merchant in the Shopify admin under Legal settings (`/admin/settings/legal`). The content of the subscription policy is also available at checkout.

Having a call-to-action that reflects the subscription type helps customers differentiate between subscription options and the one-time subscription.

![Image 8: Main call to action subcomponent screenshot](https://shopify.dev/assets/api/subscriptions/main-call-to-action-subcomponent-8d773bc1f7f979137c31911911adb1d5cd6a5c127c83d41fee6364a7b0758af7.png)

| # | UI element | API properties and information | UI guidelines |
| --- | --- | --- | --- |
| 1 | Call-to-action | On first page load, if the product requires a selling plan or one is selected, then switch the call-to-action string to something subscription-specific that merchants can customize. | Update the call-to-action label to **Add subscription to cart** for a subscription subscription. |

Each subscription item displays the most important subscription details to help customers understand their purchase. Customers should be able to understand a subscription’s delivery frequency and, if applicable, the commitment period. The price should also match what is represented on the product page.

The subcomponents of a cart item include the following:

*   [Cart page](https://shopify.dev/docs/storefronts/themes/pricing-payments/subscriptions/subscription-ux-guidelines#cart-page)
*   [Cart notification](https://shopify.dev/docs/storefronts/themes/pricing-payments/subscriptions/subscription-ux-guidelines#cart-notification)

Customers tend to scan the cart page and review the information before proceeding to checkout:

![Image 9: Cart page screenshot](https://shopify.dev/assets/api/subscriptions/cart-page-5a19689d391aefe2e7035e03d933a2e6eb50ec1e6289e5408d4542f63dccb562.png)

| # | UI element | API properties and information | UI guidelines |
| --- | --- | --- | --- |
| 1 | Selling plan information | `line_item.selling_plan_allocation.selling_plan.name` Use `selling_plan.name` in the cart line item. This same text is used at checkout. For more information, refer to [Using the selling plan name](https://shopify.dev/docs/storefronts/themes/pricing-payments/subscriptions/subscription-ux-guidelines#using-the-selling-plan-name). | Because the selling plan name is meant to accurately summarize the subscription, don't list the individual selling plan option values alongside the selling plan name. |

The cart notification returns information about the item that was just added to the cart:

![Image 10: Cart notification screenshot](https://shopify.dev/assets/api/subscriptions/cart-notification-58897f01c492bc18f59c4b3307c0354752a88048d4fec88ad8e991fd17afea34.png)

| # | UI element | API properties and information | UI guidelines |
| --- | --- | --- | --- |
| 1 | Selling plan information | `line_item.selling_plan_allocation.selling_plan.name` This information comes from a Cart API JSON response. Use `selling_plan.name` in the order line item. The same text is used at checkout. For more information, refer to [Using the selling plan name](https://shopify.dev/docs/storefronts/themes/pricing-payments/subscriptions/subscription-ux-guidelines#using-the-selling-plan-name). | Because the selling plan name is meant to accurately summarize the subscription, don't list the individual selling plan option values alongside the selling plan name. |

The `selling_plan.name` should be a succinct description of the selling plan that can be easily understood by customers. The text is displayed in multiple areas of the online store, such as cart line items, checkout, and past order details. The value is also displayed in the merchant’s internal admin on order pages.

Shopify doesn't control the value of the name, which means that merchants can enter any text value they want using an app.

When creating selling plan names, implement the following recommended guidelines:

*   State the delivery frequency and a prepaid period, if applicable.
*   Don't state exact dollars amounts, for example, "$9 a month". Use percentages when applicable.

#### Considerations for currency switching and price rounding

[Anchor link to section titled "Considerations for currency switching and price rounding"](https://shopify.dev/docs/storefronts/themes/pricing-payments/subscriptions/subscription-ux-guidelines#considerations-for-currency-switching-and-price-rounding)

Merchants can sell in [multiple currencies on their online store](https://help.shopify.com/en/manual/payments/shopify-payments/multi-currency/setup).

When a customer visits the online store, Shopify presents the currency that's determined appropriate for the customer. Online stores can offer [a currency selector](https://shopify.dev/docs/api/liquid/tags/form#form-localization) to customers to enable them to manually switch the currency. Shopify also offers a price rounding feature to merchants, which allows merchants to set custom rounding rules for converted prices.

Apps and merchants shouldn't write any prices in the various strings that are shown to customers, for example, selling plan names that say "$9.99 a month" or "Save $5". Any prices that are written in these strings won't reflect currency switching or price rounding, and might be incorrect or misleading to customers.

When an app or merchant wants to express savings in a text field, use percentages whenever possible. For example, `"Deliver every week (Save 20%)"`.

Customers logged in to the store can view the details of each past order. It's important to let the customer easily identify the subscription product.

![Image 11: Order details screenshot](https://shopify.dev/assets/api/subscriptions/order-details-19662b97fc485b2290cb889b25a467fb6c285f59c3f4f808d95bfa99b129d9e7.png)

| # | UI element | API properties and information | UI guidelines |
| --- | --- | --- | --- |
| 1 | Selling plan information | `line_item.selling_plan_allocation.selling_plan.name` Use `selling_plan.name` in the cart notification line item. The same text is used at checkout. For more information, refer to [Using the selling plan name](https://shopify.dev/docs/storefronts/themes/pricing-payments/subscriptions/subscription-ux-guidelines#using-the-selling-plan-name). | Because the selling plan name is meant to accurately summarize the subscription, don't list the individual selling plan option values alongside the selling plan name. |

*   [Create and manage selling plans](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans): Follow a step-by-step workflow to create and manage selling plans in your subscription app.
*   [Getting started building a product subscription app extension](https://shopify.dev/docs/apps/build/purchase-options/product-subscription-app-extensions/start-building): Learn how to create a new product subscription app extension with App Bridge Admin, connect the extension to Shopify, and render your working code inside Shopify's UI.

---
title: "UserError"
description: "Shopify GraphQL Admin API documentation for usererror"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/usererror"
extraction_method: "jina"
sections: ['GraphQL Types', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: UserError - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/usererror

Markdown Content:
Choose a version:

Represents an error in the input of a mutation.

The path to the input field that caused the error.

The error message.

* * *

Was this section helpful?

Charges a shop for features or services one time. This type of charge is recommended for apps that aren't billed on a recurring basis. Test and demo shops aren't charged.

Cancels an app subscription on a store.

Allows an app to charge a store for features or services on a recurring basis.

Updates the capped amount on the usage pricing plan of an app subscription line item.

Enables an app to charge a store for features or services on a per-use basis. The usage charge value is counted towards the `cappedAmount` limit that was specified in the `appUsagePricingDetails` field when the app subscription was created. If you create an app usage charge that causes the total usage charges in a billing interval to exceed the capped amount, then a `Total price exceeds balance remaining` error is returned.

Starts the cancelation process of a running bulk operation.

There may be a short delay from when a cancelation starts until the operation is actually canceled.

Adds products to a collection.

Creates a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) to group [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) together in the [online store](https://shopify.dev/docs/apps/build/online-store) and other [sales channels](https://shopify.dev/docs/apps/build/sales-channels). For example, an athletics store might create different collections for running attire, shoes, and accessories.

There are two types of collections:

*   **[Custom (manual) collections](https://help.shopify.com/manual/products/collections/manual-shopify-collection)**: You specify the products to include in a collection.
*   **[Smart (automated) collections](https://help.shopify.com/manual/products/collections/automated-collections)**: You define rules, and products matching those rules are automatically included in the collection.

Use the `collectionCreate` mutation when you need to:

*   Create a new collection for a product launch or campaign
*   Organize products by category, season, or promotion
*   Automate product grouping using rules (for example, by tag, type, or price)

* * *

Note

The created collection is unpublished by default. To make it available to customers, use the [`publishablePublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish) mutation after creation.

* * *

Learn more about [using metafields with smart collections](https://shopify.dev/docs/apps/build/custom-data/metafields/use-metafield-capabilities).

Deletes a collection.

Removes a set of products from a given collection. The mutation can take a long time to run. Instead of returning an updated collection the mutation returns a job, which should be [polled](https://shopify.dev/api/admin-graphql/latest/queries/job). For use with manual collections only.

Asynchronously reorders a set of products within a specified collection. Instead of returning an updated collection, this mutation returns a job, which should be [polled](https://shopify.dev/api/admin-graphql/latest/queries/job). The [`Collection.sortOrder`](https://shopify.dev/api/admin-graphql/latest/objects/Collection#field-collection-sortorder) must be `MANUAL`. Displaced products will have their position altered in a consistent manner, with no gaps.

Updates a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection), modifying its properties, products, or publication settings. Collections help organize [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) together in the [online store](https://shopify.dev/docs/apps/build/online-store) and other [sales channels](https://shopify.dev/docs/apps/build/sales-channels).

Use the `collectionUpdate` mutation to programmatically modify collections in scenarios such as:

*   Updating collection details, like title, description, or image
*   Modifying SEO metadata for better search visibility
*   Changing which products are included (using rule updates for smart collections)
*   Publishing or unpublishing collections across different sales channels
*   Updating custom data using [metafields](https://shopify.dev/docs/apps/build/custom-data/metafields)

There are two types of collections with different update capabilities:

*   **[Custom (manual) collections](https://help.shopify.com/manual/products/collections/manual-shopify-collection)**: You can update collection properties, but rule sets can't be modified since products are manually selected.
*   **[Smart (automated) collections](https://help.shopify.com/manual/products/collections/automated-collections)**: You can update both collection properties and the rules that automatically determine which products are included. When updating [rule sets](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionRuleConditions) for smart collections, the operation might be processed asynchronously. In these cases, the mutation returns a [`job`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job) object that you can use to track the progress of the update.

To publish or unpublish collections to specific sales channels, use the dedicated [`publishablePublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish) and [`publishableUnpublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishableUnpublish) mutations.

Learn more about [using metafields with smart collections](https://shopify.dev/docs/apps/build/custom-data/metafields/use-metafield-capabilities).

Create a new customer address.

Deletes a customer's address.

Update a customer's address information.

Add tax exemptions for the customer.

Create a new customer. As of API version 2022-10, apps using protected customer data must meet the protected customer data [requirements](https://shopify.dev/apps/store/data-protection/protected-customer-data).

Delete a customer. As of API version 2022-10, apps using protected customer data must meet the protected customer data [requirements](https://shopify.dev/apps/store/data-protection/protected-customer-data).

Generate an account activation URL for a customer.

Creates a credit card payment method for a customer using a session id. These values are only obtained through card imports happening from a PCI compliant environment. Please use customerPaymentMethodRemoteCreate if you are not managing credit cards directly.

Updates the credit card payment method for a customer.

Revokes a customer's payment method.

Sends a link to the customer so they can update a specific payment method.

Remove tax exemptions from a customer.

Replace tax exemptions for a customer.

Update a customer's attributes. As of API version 2022-10, apps using protected customer data must meet the protected customer data [requirements](https://shopify.dev/apps/store/data-protection/protected-customer-data).

Updates a customer's default address.

Create a delivery profile.

Enqueue the removal of a delivery profile.

Update a delivery profile.

Updates the delivery promise participants by adding or removing owners based on a branded promise handle.

Set the delivery settings for a shop.

Assigns a location as the shipping origin while using legacy compatibility mode for multi-location delivery profiles.

Adds tags to multiple draft orders.

Deletes multiple draft orders.

Removes tags from multiple draft orders.

Calculates the properties of a draft order. Useful for determining information such as total taxes or price without actually creating a draft order.

Completes a [draft order](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder) and converts it into a [regular order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). The order appears in the merchant's orders list, and the customer can be notified about their order.

Use the `draftOrderComplete` mutation when a merchant is ready to finalize a draft order and create a real order in their store. The `draftOrderComplete` mutation also supports sales channel attribution for tracking order sources using the [`sourceName`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderComplete#arguments-sourceName) argument, [cart validation](https://shopify.dev/docs/apps/build/checkout/cart-checkout-validation) controls for app integrations, and detailed error reporting for failed completions.

You can complete a draft order with different [payment scenarios](https://help.shopify.com/manual/fulfillment/managing-orders/payments):

*   Mark the order as paid immediately.
*   Set the order as payment pending using [payment terms](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms).
*   Specify a custom payment amount.
*   Select a specific payment gateway.

* * *

Note

When completing a draft order, inventory is [reserved](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps#inventory-states) for the items in the order. This means the items will no longer be available for other customers to purchase. Make sure to verify inventory availability before completing the draft order.

* * *

Creates a [draft order](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder) with attributes such as customer information, line items, shipping and billing addresses, and payment terms. Draft orders are useful for merchants that need to:

*   Create new orders for sales made by phone, in person, by chat, or elsewhere. When a merchant accepts payment for a draft order, an order is created.
*   Send invoices to customers with a secure checkout link.
*   Use custom items to represent additional costs or products not in inventory.
*   Re-create orders manually from active sales channels.
*   Sell products at discount or wholesale rates.
*   Take pre-orders.

After creating a draft order, you can:

*   Send an invoice to the customer using the [`draftOrderInvoiceSend`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderInvoiceSend) mutation.
*   Complete the draft order using the [`draftOrderComplete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderComplete) mutation.
*   Update the draft order using the [`draftOrderUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderUpdate) mutation.
*   Duplicate a draft order using the [`draftOrderDuplicate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderDuplicate) mutation.
*   Delete the draft order using the [`draftOrderDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderDelete) mutation.

* * *

* * *

Creates a draft order from order.

Deletes a draft order.

Duplicates a draft order.

Previews a draft order invoice email.

Sends an email invoice for a draft order.

Updates a draft order.

If a checkout has been started for a draft order, any update to the draft will unlink the checkout. Checkouts are created but not immediately completed when opening the merchant credit card modal in the admin, and when a buyer opens the invoice URL. This is usually fine, but there is an edge case where a checkout is in progress and the draft is updated before the checkout completes. This will not interfere with the checkout and order creation, but if the link from draft to checkout is broken the draft will remain open even after the order is created.

Cancels a fulfillment.

Creates a fulfillment for one or many fulfillment orders. The fulfillment orders are associated with the same order and are assigned to the same location.

Creates a fulfillment event for a specified fulfillment.

Accept a cancellation request sent to a fulfillment service for a fulfillment order.

Accepts a fulfillment request sent to a fulfillment service for a fulfillment order.

Marks a fulfillment order as canceled.

Marks an in-progress fulfillment order as incomplete, indicating the fulfillment service is unable to ship any remaining items, and closes the fulfillment request.

This mutation can only be called for fulfillment orders that meet the following criteria:

*   Assigned to a fulfillment service location,
*   The fulfillment request has been accepted,
*   The fulfillment order status is `IN_PROGRESS`.

This mutation can only be called by the fulfillment service app that accepted the fulfillment request. Calling this mutation returns the control of the fulfillment order to the merchant, allowing them to move the fulfillment order line items to another location and fulfill from there, remove and refund the line items, or to request fulfillment from the same fulfillment service again.

Closing a fulfillment order is explained in [the fulfillment service guide](https://shopify.dev/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services#step-7-optional-close-a-fulfillment-order).

Changes the location which is assigned to fulfill a number of unfulfilled fulfillment order line items.

Moving a fulfillment order will fail in the following circumstances:

*   The fulfillment order is closed.
*   The destination location doesn't stock the requested inventory item.
*   The API client doesn't have the correct permissions.

Line items which have already been fulfilled can't be re-assigned and will always remain assigned to the original location.

You can't change the assigned location while a fulfillment order has a [request status](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrderRequestStatus) of `SUBMITTED`, `ACCEPTED`, `CANCELLATION_REQUESTED`, or `CANCELLATION_REJECTED`. These request statuses mean that a fulfillment order is awaiting action by a fulfillment service and can't be re-assigned without first having the fulfillment service accept a cancellation request. This behavior is intended to prevent items from being fulfilled by multiple locations or fulfillment services.

### How re-assigning line items affects fulfillment orders

**First scenario:** Re-assign all line items belonging to a fulfillment order to a new location.

In this case, the [assignedLocation](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#field-fulfillmentorder-assignedlocation) of the original fulfillment order will be updated to the new location.

**Second scenario:** Re-assign a subset of the line items belonging to a fulfillment order to a new location. You can specify a subset of line items using the `fulfillmentOrderLineItems` parameter (available as of the `2023-04` API version), or specify that the original fulfillment order contains line items which have already been fulfilled.

If the new location is already assigned to another active fulfillment order, on the same order, then a new fulfillment order is created. The existing fulfillment order is closed and line items are recreated in a new fulfillment order.

Marks a scheduled fulfillment order as open.

Rejects a cancellation request sent to a fulfillment service for a fulfillment order.

Rejects a fulfillment request sent to a fulfillment service for a fulfillment order.

Sends a cancellation request to the fulfillment service of a fulfillment order.

Sends a fulfillment request to the fulfillment service of a fulfillment order.

Creates a fulfillment service.

Fulfillment service location
----------------------------

When creating a fulfillment service, a new location will be automatically created on the shop and will be associated with this fulfillment service. This location will be named after the fulfillment service and inherit the shop's address.

If you are using API version `2023-10` or later, and you need to specify custom attributes for the fulfillment service location (for example, to change its address to a country different from the shop's country), use the [LocationEdit](https://shopify.dev/api/admin-graphql/latest/mutations/locationEdit) mutation after creating the fulfillment service.

Deletes a fulfillment service.

Updates a fulfillment service.

If you are using API version `2023-10` or later, and you need to update the location managed by the fulfillment service (for example, to change the address of a fulfillment service), use the [LocationEdit](https://shopify.dev/api/admin-graphql/latest/mutations/locationEdit) mutation.

Updates tracking information for a fulfillment.

Update a gift card.

Activate an inventory item at a location.

Removes an inventory item's quantities from a location, and turns off inventory at the location.

Updates an inventory item.

Create new marketing activity. Marketing activity app extensions are deprecated and will be removed in the near future.

Updates a marketing activity with the latest information. Marketing activity app extensions are deprecated and will be removed in the near future.

Deletes multiple metafields in bulk.

Cancels an order, with options for refunding, restocking inventory, and customer notification.

* * *

Caution

Order cancellation is irreversible. An order that has been cancelled can't be restored to its original state.

* * *

Use the `orderCancel` mutation to programmatically cancel orders in scenarios such as:

*   Customer-requested cancellations due to size, color, or other preference changes
*   Payment processing failures or declined transactions
*   Fraud detection and prevention
*   Insufficient inventory availability
*   Staff errors in order processing
*   Wholesale or B2B order management workflows

The `orderCancel` mutation provides flexible refund options including refunding to original payment methods or issuing store credit. If a payment was only authorized (temporarily held) but not yet charged, that hold will be automatically released when the order is cancelled, even if you choose not to refund other payments.

The mutation supports different cancellation reasons: customer requests, payment declines, fraud, inventory issues, staff errors, or other unspecified reasons. Each cancellation can include optional staff notes for internal documentation (notes aren't visible to customers).

An order can only be cancelled if it meets the following criteria:

*   The order hasn't already been cancelled.
*   The order has no pending payment authorizations.
*   The order has no active returns in progress.
*   The order has no outstanding fulfillments that can't be cancelled.

Orders might be assigned to locations that become [deactivated](https://help.shopify.com/manual/fulfillment/setup/locations-management#deactivate-and-reactivate-locations) after the order was created. When cancelling such orders, inventory behavior depends on payment status:

*   **Paid orders**: Cancellation will fail with an error if restocking is enabled, since inventory can't be returned to deactivated locations.
*   **Unpaid orders**: Cancellation succeeds but inventory is not restocked anywhere, even when the restock option is enabled. The committed inventory effectively becomes unavailable rather than being returned to stock at the deactivated location.

After you cancel an order, you can still make limited updates to certain fields (like notes and tags) using the [`orderUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderUpdate).

For partial refunds or more complex refund scenarios on active orders, such as refunding only specific line items while keeping the rest of the order fulfilled, consider using the [`refundCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/refundCreate) mutation instead of full order cancellation.

Learn how to build apps that integrate with [order management and fulfillment processes](https://shopify.dev/docs/apps/build/orders-fulfillment).

Captures payment for an authorized transaction on an order. Use this mutation to claim the money that was previously reserved by an authorization transaction.

The `orderCapture` mutation can be used in the following scenarios:

*   To capture the full amount of an authorized transaction
*   To capture a partial payment by specifying an amount less than the total order amount
*   To perform multiple captures on the same order, as long as the order transaction is [multi-capturable](https://shopify.dev/docs/api/admin-graphql/latest/objects/ordertransaction#field-OrderTransaction.fields.multiCapturable)

* * *

Note

Multi-capture functionality is only available to stores on a [Shopify Plus plan](https://help.shopify.com/manual/intro-to-shopify/pricing-plans/plans-features/shopify-plus-plan). For multi-currency orders, the [`currency`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCapture#arguments-input.fields.currency) field is required and should match the presentment currency from the order.

* * *

After capturing a payment, you can:

*   View the transaction details including status, amount, and processing information.
*   Track the captured amount in both shop and presentment currencies.
*   Monitor the transaction's settlement status.

Learn more about [order transactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction).

Closes an open order.

Adds a discount to a line item on the current order edit. For more information on how to use the GraphQL Admin API to edit an existing order, refer to [Edit existing orders](https://shopify.dev/apps/fulfillment/order-management-apps/order-editing).

Adds a line item from an existing product variant. As of API version 2025-04, the [orderEditAddVariant](https://shopify.dev/api/admin-graphql/latest/mutations/ordereditaddvariant) API will respect the contextual pricing of the variant.

Starts editing an order. Mutations are operating on `OrderEdit`. All order edits start with `orderEditBegin`, have any number of `orderEdit`* mutations made, and end with `orderEditCommit`.

Applies and saves staged changes to an order. Mutations are operating on `OrderEdit`. All order edits start with `orderEditBegin`, have any number of `orderEdit`* mutations made, and end with `orderEditCommit`.

Sets the quantity of a line item on an order that is being edited. For more information on how to use the GraphQL Admin API to edit an existing order, refer to [Edit existing orders](https://shopify.dev/apps/fulfillment/order-management-apps/order-editing).

Marks an order as paid by recording a payment transaction for the outstanding amount.

Use the `orderMarkAsPaid` mutation to record payments received outside the standard checkout process. The `orderMarkAsPaid` mutation is particularly useful in scenarios where:

*   Orders were created with manual payment methods (cash on delivery, bank deposit, money order)
*   Payments were received offline and need to be recorded in the system
*   Previously authorized payments need to be captured manually
*   Orders require manual payment reconciliation due to external payment processing

The mutation validates that the order can be marked as paid before processing. An order can be marked as paid only if it has a positive outstanding balance and its [financial status](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.displayFinancialStatus) isn't already `PAID`. The mutation will either create a new sale transaction for the full outstanding amount or capture an existing authorized transaction, depending on the order's current payment state.

After successfully marking an order as paid, the order's financial status is updated to reflect the payment, and payment events are logged for tracking and analytics purposes.

Learn more about [managing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps) in apps.

Opens a closed order.

Updates the attributes of an order, such as the customer's email, the shipping address for the order, tags, and [metafields](https://shopify.dev/docs/apps/build/custom-data) associated with the order.

If you need to make significant updates to an order, such as adding or removing line items, changing quantities, or modifying discounts, then use the [`orderEditBegin`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditBegin) mutation instead. The `orderEditBegin` mutation initiates an order editing session, allowing you to make multiple changes before finalizing them. Learn more about using the `orderEditBegin` mutation to [edit existing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders).

If you need to remove a customer from an order, then use the [`orderCustomerRemove`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCustomerRemove) mutation instead.

Learn how to build apps that integrate with [order management and fulfillment processes](https://shopify.dev/docs/apps/build/orders-fulfillment).

Creates a new componentized product.

Updates a componentized product.

Creates a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) with attributes such as title, description, vendor, and media.

The `productCreate` mutation helps you create many products at once, avoiding the tedious or time-consuming process of adding them one by one in the Shopify admin. Common examples include creating products for a new collection, launching a new product line, or adding seasonal products.

You can define product [options](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption) and [values](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionValue), allowing you to create products with different variations like sizes or colors. You can also associate media files to your products, including images and videos.

The `productCreate` mutation only supports creating a product with its initial [product variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant). To create multiple product variants for a single product and manage prices, use the [`productVariantsBulkCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkCreate) mutation.

* * *

Note

The `productCreate` mutation has a [throttle](https://shopify.dev/docs/api/usage/rate-limits#resource-based-rate-limits) that takes effect when a store has 50,000 product variants. After this threshold is reached, no more than 1,000 new product variants can be created per day.

* * *

After you create a product, you can make subsequent edits to the product using one of the following mutations:

*   [`publishablePublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish): Used to publish the product and make it available to customers. The `productCreate` mutation creates products in an unpublished state by default, so you must perform a separate operation to publish the product.
*   [`productUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productUpdate): Used to update a single product, such as changing the product's title, description, vendor, or associated media.
*   [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet): Used to perform multiple operations on products, such as creating or modifying product options and variants.

Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model) and [adding product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

Permanently deletes a product and all its associated data, including variants, media, publications, and inventory items.

Use the `productDelete` mutation to programmatically remove products from your store when they need to be permanently deleted from your catalog, such as when removing discontinued items, cleaning up test data, or synchronizing with external inventory management systems.

The `productDelete` mutation removes the product from all associated collections, and removes all associated data for the product, including:

*   All product variants and their inventory items
*   Product media (images, videos) that are not referenced by other products
*   [Product options](https://shopify.dev/api/admin-graphql/latest/objects/ProductOption) and [option values](https://shopify.dev/api/admin-graphql/latest/objects/ProductOptionValue)
*   Product publications across all sales channels
*   Product tags and metadata associations

The `productDelete` mutation also has the following effects on existing orders and transactions:

*   **Draft orders**: Existing draft orders that reference this product will retain the product information as stored data, but the product reference will be removed. Draft orders can still be completed with the stored product details.
*   **Completed orders and refunds**: Previously completed orders that included this product aren't affected. The product information in completed orders is preserved for record-keeping, and existing refunds for this product remain valid and processable.

* * *

Caution

Product deletion is irreversible. After a product is deleted, it can't be recovered. Consider archiving or unpublishing products instead if you might need to restore them later.

* * *

If you need to delete a large product, such as one that has many [variants](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant) that are active at several [locations](https://shopify.dev/api/admin-graphql/latest/objects/Location), you might encounter timeout errors. To avoid these timeout errors, you can set the [`synchronous`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productDelete#arguments-synchronous) parameter to `false` to run the deletion asynchronously, which returns a [`ProductDeleteOperation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductDeleteOperation) that you can monitor for completion status.

If you need more granular control over product cleanup, consider using these alternative mutations:

*   [`productUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productUpdate): Update the product status to archived or unpublished instead of deleting.
*   [`productVariantsBulkDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkDelete): Delete specific variants while keeping the product.
*   [`productOptionsDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete): Delete the choices available for a product, such as size, color, or material.

Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model).

Duplicates a product.

If you need to duplicate a large product, such as one that has many [variants](https://shopify.dev/api/admin-graphql/latest/input-objects/ProductVariantInput) that are active at several [locations](https://shopify.dev/api/admin-graphql/latest/input-objects/InventoryLevelInput), you might encounter timeout errors.

To avoid these timeout errors, you can instead duplicate the product asynchronously.

In API version 2024-10 and higher, include `synchronous: false` argument in this mutation to perform the duplication asynchronously.

In API version 2024-07 and lower, use the asynchronous [`ProductDuplicateAsyncV2`](https://shopify.dev/api/admin-graphql/2024-07/mutations/productDuplicateAsyncV2).

Metafield values are not duplicated if the unique values capability is enabled.

Asynchronously reorders the media attached to a product.

Updates a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) with attributes such as title, description, vendor, and media.

The `productUpdate` mutation helps you modify many products at once, avoiding the tedious or time-consuming process of updating them one by one in the Shopify admin. Common examples including updating product details like status or tags.

The `productUpdate` mutation doesn't support updating [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant). To update multiple product variants for a single product and manage prices, use the [`productVariantsBulkUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate) mutation.

* * *

Note

The `productUpdate` mutation has a [throttle](https://shopify.dev/docs/api/usage/rate-limits#resource-based-rate-limits) that takes effect when a store has 50,000 product variants. After this threshold is reached, no more than 1,000 new product variants can be updated per day.

* * *

After updating a product, you can make additional changes using one of the following mutations:

*   [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet): Used to perform multiple operations on products, such as creating or modifying product options and variants.
*   [`publishablePublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish): Used to publish the product and make it available to customers, if the product is currently unpublished.

Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model) and [adding product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

Publishes a resource to a channel. If the resource is a product, then it's visible in the channel only if the product status is `active`. Products that are sold exclusively on subscription (`requiresSellingPlan: true`) can be published only on online stores.

Publishes a resource to current channel. If the resource is a product, then it's visible in the channel only if the product status is `active`. Products that are sold exclusively on subscription (`requiresSellingPlan: true`) can be published only on online stores.

Unpublishes a resource from a channel. If the resource is a product, then it's visible in the channel only if the product status is `active`.

Unpublishes a resource from the current channel. If the resource is a product, then it's visible in the channel only if the product status is `active`.

Creates a refund for an order, allowing you to process returns and issue payments back to customers.

Use the `refundCreate` mutation to programmatically process refunds in scenarios where you need to return money to customers, such as when handling returns, processing chargebacks, or correcting order errors.

The `refundCreate` mutation supports various refund scenarios:

*   Refunding line items with optional restocking
*   Refunding shipping costs
*   Refunding duties and import taxes
*   Refunding additional fees
*   Processing refunds through different payment methods
*   Issuing store credit refunds (when enabled)

You can create both full and partial refunds, and optionally allow over-refunding in specific cases.

After creating a refund, you can track its status and details through the order's [`refunds`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.refunds) field. The refund is associated with the order and can be used for reporting and reconciliation purposes.

Learn more about [managing returns](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management) and [refunding duties](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/view-and-refund-duties).

* * *

Note

The refunding behavior of the `refundCreate` mutation is similar to the [`refundReturn`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnRefund) mutation. The key difference is that the `refundCreate` mutation lets you to specify restocking behavior for line items, whereas the `returnRefund` mutation focuses solely on handling the financial refund without any restocking input.

* * *

Creates a saved search.

Delete a saved search.

Updates a saved search.

Theme app extensions

If your app integrates with a Shopify theme and you plan to submit it to the Shopify App Store, you must use theme app extensions instead of Script tags. Script tags can only be used with vintage themes. [Learn more](https://shopify.dev/apps/online-store#what-integration-method-should-i-use).

Script tag deprecation

Script tags will be sunset for the **Order status** page on August 28, 2025. [Upgrade to Checkout Extensibility](https://www.shopify.com/plus/upgrading-to-checkout-extensibility) before this date. [Shopify Scripts](https://shopify.dev/docs/api/liquid/objects#script) will continue to work alongside Checkout Extensibility until August 28, 2025.

Creates a new script tag.

Theme app extensions

If your app integrates with a Shopify theme and you plan to submit it to the Shopify App Store, you must use theme app extensions instead of Script tags. Script tags can only be used with vintage themes. [Learn more](https://shopify.dev/apps/online-store#what-integration-method-should-i-use).

Script tag deprecation

Script tags will be sunset for the **Order status** page on August 28, 2025. [Upgrade to Checkout Extensibility](https://www.shopify.com/plus/upgrading-to-checkout-extensibility) before this date. [Shopify Scripts](https://shopify.dev/docs/api/liquid/objects#script) will continue to work alongside Checkout Extensibility until August 28, 2025.

Deletes a script tag.

Theme app extensions

If your app integrates with a Shopify theme and you plan to submit it to the Shopify App Store, you must use theme app extensions instead of Script tags. Script tags can only be used with vintage themes. [Learn more](https://shopify.dev/apps/online-store#what-integration-method-should-i-use).

Script tag deprecation

Script tags will be sunset for the **Order status** page on August 28, 2025. [Upgrade to Checkout Extensibility](https://www.shopify.com/plus/upgrading-to-checkout-extensibility) before this date. [Shopify Scripts](https://shopify.dev/docs/api/liquid/objects#script) will continue to work alongside Checkout Extensibility until August 28, 2025.

Updates a script tag.

Creates a segment.

Deletes a segment.

Updates a segment.

Deletes a shipping package.

Set a shipping package as the default. The default shipping package is the one used to calculate shipping costs on checkout.

Updates a shipping package.

Deletes a locale for a shop. This also deletes all translations of this locale.

Adds a locale for a shop. The newly added locale is in the unpublished state.

Updates a locale for a shop.

Creates staged upload targets for file uploads such as images, videos, and 3D models.

Use the `stagedUploadsCreate` mutation instead of direct file creation mutations when:

*   **Uploading large files**: Files over a few MB benefit from staged uploads for better reliability
*   **Uploading media files**: Videos, 3D models, and high-resolution images
*   **Bulk importing**: CSV files, product catalogs, or other bulk data
*   **Using external file sources**: When files are stored remotely and need to be transferred to Shopify

For small files or simple use cases, you can use [`fileCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileCreate) directly by providing the file content inline.

The `stagedUploadsCreate` mutation is the first step in Shopify's secure two-step upload process:

**Step 1: Create staged upload targets** (this mutation)

*   Generate secure, temporary upload URLs for your files.
*   Receive authentication parameters for the upload.

**Step 2: Upload files and create assets**

*   Upload your files directly to the provided URLs using the authentication parameters.
*   Use the returned `resourceUrl` as the `originalSource` in subsequent mutations like `fileCreate`.

This approach provides better performance for large files, handles network interruptions gracefully, and ensures secure file transfers to Shopify's storage infrastructure.

* * *

Note

File size is required when uploading [`VIDEO`](https://shopify.dev/docs/api/admin-graphql/latest/enums/StagedUploadTargetGenerateUploadResource#enums-VIDEO) or [`MODEL_3D`](https://shopify.dev/docs/api/admin-graphql/latest/enums/StagedUploadTargetGenerateUploadResource#enums-MODEL_3D) resources.

* * *

After creating staged upload targets, complete the process by:

1.   **Uploading files**: Send your files to the returned [`url`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StagedMediaUploadTarget#field-StagedMediaUploadTarget.fields.url) using the provided [`parameters`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StagedMediaUploadTarget#field-StagedMediaUploadTarget.fields.parameters) for authentication
2.   **Creating file assets**: Use the [`resourceUrl`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StagedMediaUploadTarget#field-StagedMediaUploadTarget.fields.resourceUrl) as the `originalSource` in mutations such as:

*   [`fileCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileCreate): Creates file assets from staged uploads
*   [`productUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productUpdate): Updates products with new media from staged uploads

Learn more about [uploading media to Shopify](https://shopify.dev/apps/online-store/media/products).

Deletes a storefront access token.

Add tags to an order, a draft order, a customer, a product, or an online store article.

Remove tags from an order, a draft order, a customer, a product, or an online store article.

Creates a new webhook subscription.

Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe).

Deletes a webhook subscription.

Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe).

Updates a webhook subscription.

Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe).

* * *

Was this section helpful?

* * *

Was this section helpful?

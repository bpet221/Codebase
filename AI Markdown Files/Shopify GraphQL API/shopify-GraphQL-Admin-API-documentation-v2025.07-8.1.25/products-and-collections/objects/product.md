---
title: "Product"
description: "Shopify GraphQL Admin API documentation for product"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/product"
extraction_method: "jina"
sections: ['Products and collections', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: Product - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/product

Markdown Content:
Choose a version:

Requires `read_products` access scope.

The `Product` object lets you manage products in a merchant’s store.

Products are the goods and services that merchants offer to customers. They can include various details such as title, description, price, images, and options such as size or color. You can use [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant) to create or update different versions of the same product. You can also add or update product [media](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/media). Products can be organized by grouping them into a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection).

Learn more about working with [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components), including limitations and considerations.

A list of [components](https://shopify.dev/docs/apps/build/product-merchandising/bundles/add-product-fixed-bundle) that are associated with a product in a bundle.

A special product type that combines separate products from a store into a single product listing. [Combined listings](https://shopify.dev/apps/build/product-merchandising/combined-listings) are connected by a shared option, such as color, model, or dimension.

The [role of the product](https://shopify.dev/docs/apps/build/product-merchandising/combined-listings/build-for-combined-listings) in a combined listing.

If `null`, then the product isn't part of any combined listing.

The pricing that applies to a customer in a specific context. For example, a price might vary depending on the customer's location. Only active markets are considered in the price resolution.

The date and time when the product was created.

A default [cursor](https://shopify.dev/api/usage/pagination-graphql) that returns the single next record, sorted ascending by ID.

A single-line description of the product, with [HTML tags](https://developer.mozilla.org/en-US/docs/Web/HTML) removed.

### Arguments

Truncates a string after the given length.

* * *

The description of the product, with HTML tags. For example, the description might include bold `<strong></strong>` and italic `<i></i>` text.

The paginated list of events associated with the host subject.

The featured [media](https://shopify.dev/docs/apps/build/online-store/product-media) associated with the product.

The information that lets merchants know what steps they need to take to make sure that the app is set up correctly.

For example, if a merchant hasn't set up a product correctly in the app, then the feedback might include a message that says "You need to add a price to this product".

The [theme template](https://shopify.dev/docs/storefronts/themes/architecture/templates) that's used when customers view the gift card in a store.

A unique, human-readable string of the product's title. A handle can contain letters, hyphens (`-`), and numbers, but no spaces. The handle is used in the online store URL for the product.

Whether the product has only a single variant with the default option and value.

Whether the product has variants that are out of stock.

A globally-unique ID.

Whether the product is in a specified [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection).

### Arguments

The ID of the collection to check. For example, `id: "gid://shopify/Collection/123"`.

* * *

Whether the product is a gift card.

The ID of the corresponding resource in the REST Admin API.

The [media](https://shopify.dev/docs/apps/build/online-store/product-media) associated with the product. Valid media are images, 3D models, videos.

The total count of [media](https://shopify.dev/docs/apps/build/online-store/product-media) that's associated with a product.

A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information.

A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data) that a merchant associates with a Shopify resource.

The product's URL on the online store. If `null`, then the product isn't published to the online store sales channel.

The minimum and maximum prices of a product, expressed in decimal numbers. For example, if the product is priced between $10.00 and $50.00, then the price range is $10.00 - $50.00.

A list of products that contain at least one variant associated with at least one of the current products' variants via group relationship.

A count of unique products that contain at least one variant associated with at least one of the current products' variants via group relationship.

A list of products that has a variant that contains any of this product's variants as a component.

The date and time when the product was published to the online store.

Whether the product is published for a customer only in a specified context. For example, a product might be published for a customer only in a specific location.

### Arguments

The context used to determine publication status.

* * *

Whether the resource is published to the app's [publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication). For example, the resource might be published to the app's online store channel.

Whether the resource is published to a specified [publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication).

### Arguments

The ID of the publication to check. For example, `id: "gid://shopify/Publication/123"`.

* * *

Whether the product can only be purchased with a [selling plan](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans). Products that are sold on subscription (`requiresSellingPlan: true`) can be updated only for online stores. If you update a product to be subscription-only (`requiresSellingPlan:false`), then the product is unpublished from all channels, except the online store.

The resource that's either published or staged to be published to the [publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication).

The list of resources that are published to a [publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication).

The list of resources that are either published or staged to be published to a [publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication).

Whether the merchant can make changes to the product when they [edit the order](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders) associated with the product. For example, a merchant might be restricted from changing product details when they edit an order.

A list of all [selling plan groups](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans/build-a-selling-plan) that are associated with the product either directly, or through the product's variants.

The [product status](https://help.shopify.com/manual/products/details/product-details-page#product-status), which controls visibility across all sales channels.

A comma-separated list of searchable keywords that are associated with the product. For example, a merchant might apply the `sports` and `summer` tags to products that are associated with sportwear for summer.

Updating `tags` overwrites any existing tags that were previously added to the product. To add new tags without overwriting existing tags, use the [`tagsAdd`](https://shopify.dev/api/admin-graphql/latest/mutations/tagsadd) mutation.

The [theme template](https://shopify.dev/docs/storefronts/themes/architecture/templates) that's used when customers view the product in a store.

The name for the product that displays to customers. The title is used to construct the product's handle. For example, if a product is titled "Black Sunglasses", then the handle is `black-sunglasses`.

The quantity of inventory that's in stock.

The published translations associated with the resource.

The list of [publications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication) that the resource isn't published to.

The date and time when the product was last modified. A product's `updatedAt` value can change for different reasons. For example, if an order is placed for a product that has inventory tracking set up, then the inventory adjustment is counted as an update.

A list of [variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) associated with the product. If querying a single product at the root, you can fetch up to 2000 variants.

The number of [variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) that are associated with the product.

The name of the product's vendor.

### Arguments

Include only the resource's publications that are published. If false, then return all the resource's publications including future publications.

* * *

### Arguments

The ID of the channel to check.

* * *

* * *

Was this section helpful?

Retrieves a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) by its ID. A product is an item that a merchant can sell in their store.

Use the `product` query when you need to:

*   Access essential product data (for example, title, description, price, images, SEO metadata, and metafields).
*   Build product detail pages and manage inventory.
*   Handle international sales with localized pricing and content.
*   Manage product variants and product options.

Learn more about working with [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components).

Return a product by an identifier.

Retrieves a list of [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) in a store. Products are the items that merchants can sell in their store.

Use the `products` query when you need to:

*   Build a browsing interface for a product catalog.
*   Create product [searching](https://shopify.dev/docs/api/usage/search-syntax), [sorting](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#arguments-sortKey), and [filtering](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#arguments-query) experiences.
*   Implement product recommendations.
*   Sync product data with external systems.

The `products` query supports [pagination](https://shopify.dev/docs/api/usage/pagination-graphql) to handle large product catalogs and [saved searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#arguments-savedSearchId) for frequently used product queries.

The `products` query returns products with their associated metadata, including:

*   Basic product information (for example, title, description, vendor, and type)
*   Product options and product variants, with their prices and inventory
*   Media attachments (for example, images and videos)
*   SEO metadata
*   Product categories and tags
*   Product availability and publishing statuses

Learn more about working with [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components).

* * *

Was this section helpful?

Add, remove and update `CombinedListing`s of a given Product.

`CombinedListing`s are comprised of multiple products to create a single listing. There are two kinds of products used in a `CombinedListing`:

1.   Parent products
2.   Child products

The parent product is created with a `productCreate` with a `CombinedListingRole` of `PARENT`. Once created, you can associate child products with the parent product using this mutation. Parent products represent the idea of a product (e.g. Shoe).

Child products represent a particular option value (or combination of option values) of a parent product. For instance, with your Shoe parent product, you may have several child products representing specific colors of the shoe (e.g. Shoe - Blue). You could also have child products representing more than a single option (e.g. Shoe - Blue/Canvas, Shoe - Blue/Leather, etc...).

The combined listing is the association of parent product to one or more child products.

Learn more about [Combined Listings](https://shopify.dev/apps/selling-strategies/combined-listings).

Updates the fixed prices for all variants for a product on a price list. You can use the `priceListFixedPricesByProductUpdate` mutation to set or remove a fixed price for all variants of a product associated with the price list.

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

Duplicates a product.

If you need to duplicate a large product, such as one that has many [variants](https://shopify.dev/api/admin-graphql/latest/input-objects/ProductVariantInput) that are active at several [locations](https://shopify.dev/api/admin-graphql/latest/input-objects/InventoryLevelInput), you might encounter timeout errors.

To avoid these timeout errors, you can instead duplicate the product asynchronously.

In API version 2024-10 and higher, include `synchronous: false` argument in this mutation to perform the duplication asynchronously.

In API version 2024-07 and lower, use the asynchronous [`ProductDuplicateAsyncV2`](https://shopify.dev/api/admin-graphql/2024-07/mutations/productDuplicateAsyncV2).

Metafield values are not duplicated if the unique values capability is enabled.

Adds multiple selling plan groups to a product.

Removes multiple groups from a product.

Creates one or more [options](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption) on a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), such as size, color, or material. Each option includes a name, position, and a list of values. The combination of a product option and value creates a [product variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant).

Use the `productOptionsCreate` mutation for the following use cases:

*   **Add product choices**: Add a new option, like "Size" (Small, Medium, Large) or "Color" (Red, Blue, Green), to an existing product so customers can select their preferred variant.
*   **Enable personalization features**: Add options such as "Engraving text" to let customers customize their purchase.
*   **Offer seasonal or limited edition products**: Add a new value (for example, "Holiday red") to an existing option to support limited-time or seasonal variants.
*   **Integrate with apps that manage product configuration**: Allow third-party apps to add options, like "Bundle size", when customers select or customize [product bundles](https://shopify.dev/docs/apps/build/product-merchandising/bundles).
*   **Link options to metafields**: Associate a product option with a custom [metafield](https://shopify.dev/docs/apps/build/custom-data), like "Fabric code", for richer integrations with other systems or apps.

* * *

Note

The `productOptionsCreate` mutation enforces strict data integrity for product options and variants. All option positions must be sequential, and every option should be used by at least one variant. If you use the [`CREATE` variant strategy](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate#arguments-variantStrategy.enums.CREATE), consider the maximum allowed number of variants for each product (100 by default, and 2,048 if you've [enabled the **Extended Variants** developer preview](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/migrate-and-test#create-a-development-store-that-allows-2-048-variants-per-product)).

* * *

After you create product options, you can further manage a product's configuration using related mutations:

*   [`productOptionUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionUpdate)
*   [`productOptionsReorder`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsReorder)
*   [`productOptionsDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete)
*   [`productVariantsBulkCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkCreate)
*   [`productVariantsBulkUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate)
*   [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet)

Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model) and [adding product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

Deletes one or more [options](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption) from a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product). Product options define the choices available for a product, such as size, color, or material.

* * *

Caution

Removing an option can affect a product's [variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) and their configuration. Deleting an option might also delete associated option values and, depending on the chosen [strategy](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionsdelete#arguments-strategy), might affect variants.

* * *

Use the `productOptionsDelete` mutation for the following use cases:

*   **Simplify product configuration**: Remove obsolete or unnecessary options (for example, discontinue "Material" if all variants are now the same material).
*   **Clean up after seasonal or limited-time offerings**: Delete options that are no longer relevant (for example, "Holiday edition").
*   **Automate catalog management**: Enable apps or integrations to programmatically remove options as product data changes.

* * *

Note

The `productOptionsDelete` mutation enforces strict data integrity for product options and variants. All option positions must remain sequential, and every remaining option must be used by at least one variant.

* * *

After you delete a product option, you can further manage a product's configuration using related mutations:

*   [`productOptionsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate)
*   [`productOptionUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionUpdate)
*   [`productOptionsReorder`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsReorder)
*   [`productVariantsBulkCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkCreate)
*   [`productVariantsBulkUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate)
*   [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet)

Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model) and [adding product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

Reorders the [options](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption) and [option values](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionValue) on a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), updating the order in which [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) are presented to customers.

The `productOptionsReorder` mutation accepts a list of product options, each identified by `id` or `name`, and an optional list of values (also by `id` or `name`) specifying the new order. The order of options in the mutation's input determines their new positions (for example, the first option becomes `option1`). The order of values within each option determines their new positions. The mutation recalculates the order of variants based on the new option and value order.

Suppose a product has the following variants:

1.   `"Red / Small"`
2.   `"Green / Medium"`
3.   `"Blue / Small"`

You reorder options and values:

```
options: [
{ name: "Size", values: [{ name: "Small" }, { name: "Medium" }] },
{ name: "Color", values: [{ name: "Green" }, { name: "Red" }, { name: "Blue" }] }
]
```

The resulting variant order will be:

1.   `"Small / Green"`
2.   `"Small / Red"`
3.   `"Small / Blue"`
4.   `"Medium / Green"`

Use the `productOptionsReorder` mutation for the following use cases:

*   **Change the order of product options**: For example, display "Color" before "Size" in a store.
*   **Reorder option values within an option**: For example, show "Red" before "Blue" in a color picker.
*   **Control the order of product variants**: The order of options and their values determines the sequence in which variants are listed and selected.
*   **Highlight best-selling options**: Present the most popular or relevant options and values first.
*   **Promote merchandising strategies**: Highlight seasonal colors, limited editions, or featured sizes.

* * *

Note

The `productOptionsReorder` mutation enforces strict data integrity for product options and variants. All option positions must be sequential, and every option should be used by at least one variant.

* * *

After you reorder product options, you can further manage a product's configuration using related mutations:

*   [`productOptionsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate)
*   [`productOptionsDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete)
*   [`productVariantsBulkCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkCreate)
*   [`productVariantsBulkUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate)
*   [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet)

Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model) and [managing product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

Updates an [option](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption) on a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), such as size, color, or material. Each option includes a name, position, and a list of values. The combination of a product option and value creates a [product variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant).

Use the `productOptionUpdate` mutation for the following use cases:

*   **Update product choices**: Modify an existing option, like "Size" (Small, Medium, Large) or "Color" (Red, Blue, Green), so customers can select their preferred variant.
*   **Enable personalization features**: Update an option (for example, "Engraving text") to let customers customize their purchase.
*   **Offer seasonal or limited edition products**: Update a value (for example, "Holiday red") on an existing option to support limited-time or seasonal variants.
*   **Integrate with apps that manage product configuration**: Allow third-party apps to update options, like "Bundle size", when customers select or customize [product bundles](https://shopify.dev/docs/apps/build/product-merchandising/bundles).
*   **Link options to metafields**: Associate a product option with a custom [metafield](https://shopify.dev/docs/apps/build/custom-data), like "Fabric code", for richer integrations with other systems or apps.

* * *

Note

The `productOptionUpdate` mutation enforces strict data integrity for product options and variants. All option positions must be sequential, and every option should be used by at least one variant.

* * *

After you update a product option, you can further manage a product's configuration using related mutations:

*   [`productOptionsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate)
*   [`productOptionsDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete)
*   [`productOptionsReorder`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsReorder)
*   [`productVariantsBulkCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkCreate)
*   [`productVariantsBulkUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate)
*   [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet)

Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model) and [adding product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

Performs multiple operations to create or update products in a single request.

Use the `productSet` mutation to sync information from an external data source into Shopify, manage large product catalogs, and perform batch updates. The mutation is helpful for bulk product management, including price adjustments, inventory updates, and product lifecycle management.

The behavior of `productSet` depends on the type of field it's modifying:

*   **For list fields**: Creates new entries, updates existing entries, and deletes existing entries that aren't included in the mutation's input. Common examples of list fields include [`collections`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet#arguments-input.fields.collections), [`metafields`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet#arguments-input.fields.metafields), and [`variants`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet#arguments-input.fields.variants).

*   **For all other field types**: Updates only the included fields. Any omitted fields will remain unchanged.

* * *

Note

By default, stores have a limit of 100 product variants for each product. You can create a development store and [enable the **Extended Variants** developer preview](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/migrate-and-test#create-a-development-store-that-allows-2-048-variants-per-product) to create or update a maximum of 2,048 product variants in a single operation.

* * *

You can run `productSet` in one of the following modes:

*   **Synchronously**: Returns the updated product in the response.
*   **Asynchronously**: Returns a [`ProductSetOperation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductSetOperation) object. Use the [`productOperation`](https://shopify.dev/api/admin-graphql/latest/queries/productOperation) query to check the status of the operation and retrieve details of the updated product and its product variants.

If you need to only manage product variants, then use one of the following mutations:

*   [`productVariantsBulkCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkCreate)
*   [`productVariantsBulkUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate)
*   [`productVariantsBulkDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkDelete)

If you need to only manage product options, then use one of the following mutations:

*   [`productOptionsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate)
*   [`productOptionUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionUpdate)
*   [`productOptionsReorder`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsReorder)
*   [`productOptionsDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete)

Learn more about [syncing product data from an external source](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/sync-data).

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

Appends media from a product to variants of the product.

Detaches media from product variants.

Creates multiple [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) for a single [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) in one operation. You can run this mutation directly or as part of a [bulk operation](https://shopify.dev/docs/api/usage/bulk-operations/imports) for large-scale catalog updates.

Use the `productVariantsBulkCreate` mutation to efficiently add new product variants—such as different sizes, colors, or materials—to an existing product. The mutation is helpful if you need to add product variants in bulk, such as importing from an external system.

The mutation supports:

*   Creating variants with custom options and values
*   Associating media (for example, images, videos, and 3D models) with the product or its variants
*   Handling complex product configurations

* * *

Note

By default, stores have a limit of 100 product variants for each product. You can create a development store and [enable the **Extended Variants** developer preview](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/migrate-and-test#create-a-development-store-that-allows-2-048-variants-per-product) to create a maximum of 2,048 product variants in a single operation.

* * *

After creating variants, you can make additional changes using one of the following mutations:

*   [`productVariantsBulkUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate): Updates multiple product variants for a single product in one operation.
*   [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet): Used to perform multiple operations on products, such as creating or modifying product options and variants.

You can also specifically manage product options through related mutations:

*   [`productOptionsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate)
*   [`productOptionUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionUpdate)
*   [`productOptionsReorder`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsReorder)
*   [`productOptionsDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete)

Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model) and [adding product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

Deletes multiple variants in a single product. This mutation can be called directly or via the bulkOperation.

Reorders multiple variants in a single product. This mutation can be called directly or via the bulkOperation.

Updates multiple [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) for a single [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) in one operation. You can run this mutation directly or as part of a [bulk operation](https://shopify.dev/docs/api/usage/bulk-operations/imports) for large-scale catalog updates.

Use the `productVariantsBulkUpdate` mutation to efficiently modify product variants—such as different sizes, colors, or materials—associated with an existing product. The mutation is helpful if you need to update a product's variants in bulk, such as importing from an external system.

The mutation supports:

*   Updating variants with custom options and values
*   Associating media (for example, images, videos, and 3D models) with the product or its variants
*   Handling complex product configurations

* * *

Note

By default, stores have a limit of 100 product variants for each product. You can create a development store and [enable the **Extended Variants** developer preview](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/migrate-and-test#create-a-development-store-that-allows-2-048-variants-per-product) to update a maximum of 2,048 product variants in a single operation.

* * *

After creating variants, you can make additional changes using the [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet) mutation, which is used to perform multiple operations on products, such as creating or modifying product options and variants.

You can also specifically manage product options through related mutations:

*   [`productOptionsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate)
*   [`productOptionUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionUpdate)
*   [`productOptionsReorder`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsReorder)
*   [`productOptionsDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete)

Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model) and [adding product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

* * *

Was this section helpful?

* * *

Was this section helpful?

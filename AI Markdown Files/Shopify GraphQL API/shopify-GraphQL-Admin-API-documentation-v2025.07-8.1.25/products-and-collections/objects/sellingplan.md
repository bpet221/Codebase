---
title: "SellingPlan"
description: "Shopify GraphQL Admin API documentation for sellingplan"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplan"
extraction_method: "jina"
sections: ['Products and collections', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: SellingPlan - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplan

Markdown Content:
SellingPlan - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplan#main-content)

[![Image 1: Docs page](https://cdn.shopify.com/shopifycloud/shopify-dev/production/assets/dev-docs-logo-2-light-CrZnRVR7.svg)![Image 2: Docs page](https://cdn.shopify.com/shopifycloud/shopify-dev/production/assets/dev-docs-logo-2-dark-BhuAYNm7.svg)](https://shopify.dev/docs)

*   [Apps](https://shopify.dev/docs/apps/build)
*   [Storefronts](https://shopify.dev/docs/storefronts)
*   APIs and references

*   search + assistant

[Log in](https://partners.shopify.com/organizations?shpxid=222dd762-CA08-48FF-E4D4-FF926B8FFCAD)[Sign up](https://partners.shopify.com/signup/developer?shpxid=222dd762-CA08-48FF-E4D4-FF926B8FFCAD)

Collapse sidebar

GraphQL Admin API

Choose a version: 

2025-07 latest

*   [Overview](https://shopify.dev/docs/api/admin-graphql/latest)
*   [Client libraries](https://shopify.dev/docs/api/admin-graphql/latest#client-libraries)
*   [Authentication](https://shopify.dev/docs/api/admin-graphql/latest#authentication)
*   [Endpoints and queries](https://shopify.dev/docs/api/admin-graphql/latest#endpoints-and-queries)
*   [Rate limits](https://shopify.dev/docs/api/admin-graphql/latest#rate-limits)
*   [Status and error codes](https://shopify.dev/docs/api/admin-graphql/latest#status-and-error-codes)

* * *

*   Access   
*   Apps   
*   B2b   
*   Billing   
*   Bulk Operations   
*   Cart   
*   Checkout Branding   
*   Common Objects   
*   Customers   
*   Discounts And Marketing   
*   Events   
*   Inventory   
*   Localizations   
*   Metafields   
*   Metaobjects   
*   Online Store   
*   Orders   
*   Privacy   
*   
Products And Collections

    *   Queries   
    *   Mutations   
    *   
Objects

        *   [Add All Products Operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/addallproductsoperation)
        *   [App Catalog](https://shopify.dev/docs/api/admin-graphql/latest/objects/appcatalog)
        *   [Bundles Feature](https://shopify.dev/docs/api/admin-graphql/latest/objects/bundlesfeature)
        *   [Catalog Csv Operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/catalogcsvoperation)
        *   [Collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection)
        *   [Collection Publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/collectionpublication)
        *   [Collection Rule](https://shopify.dev/docs/api/admin-graphql/latest/objects/collectionrule)
        *   [Collection Rule Category Condition](https://shopify.dev/docs/api/admin-graphql/latest/objects/collectionrulecategorycondition)
        *   [Collection Rule Conditions](https://shopify.dev/docs/api/admin-graphql/latest/objects/collectionruleconditions)
        *   [Collection Rule Metafield Condition](https://shopify.dev/docs/api/admin-graphql/latest/objects/collectionrulemetafieldcondition)
        *   [Collection Rule Product Category Condition](https://shopify.dev/docs/api/admin-graphql/latest/objects/collectionruleproductcategorycondition)
        *   [Collection Rule Set](https://shopify.dev/docs/api/admin-graphql/latest/objects/collectionruleset)
        *   [Collection Rule Text Condition](https://shopify.dev/docs/api/admin-graphql/latest/objects/collectionruletextcondition)
        *   [Combined Listing](https://shopify.dev/docs/api/admin-graphql/latest/objects/combinedlisting)
        *   [Combined Listing Child](https://shopify.dev/docs/api/admin-graphql/latest/objects/combinedlistingchild)
        *   [Company Location Catalog](https://shopify.dev/docs/api/admin-graphql/latest/objects/companylocationcatalog)
        *   [External Video](https://shopify.dev/docs/api/admin-graphql/latest/objects/externalvideo)
        *   [File Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/fileerror)
        *   [Generic File](https://shopify.dev/docs/api/admin-graphql/latest/objects/genericfile)
        *   [Linked Metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/linkedmetafield)
        *   [Market Catalog](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketcatalog)
        *   [Markets Catalogs Entitlement](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketscatalogsentitlement)
        *   [Media Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/mediaerror)
        *   [Media Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/mediaimage)
        *   [Media Image Original Source](https://shopify.dev/docs/api/admin-graphql/latest/objects/mediaimageoriginalsource)
        *   [Media Preview Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/mediapreviewimage)
        *   [Media Warning](https://shopify.dev/docs/api/admin-graphql/latest/objects/mediawarning)
        *   [Metafield Capability Smart Collection Condition](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafieldcapabilitysmartcollectioncondition)
        *   [Model3d](https://shopify.dev/docs/api/admin-graphql/latest/objects/model3d)
        *   [Model3d Bounding Box](https://shopify.dev/docs/api/admin-graphql/latest/objects/model3dboundingbox)
        *   [Model3d Source](https://shopify.dev/docs/api/admin-graphql/latest/objects/model3dsource)
        *   [Price List](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricelist)
        *   [Price List Adjustment](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricelistadjustment)
        *   [Price List Adjustment Settings](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricelistadjustmentsettings)
        *   [Price List Parent](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricelistparent)
        *   [Price List Price](https://shopify.dev/docs/api/admin-graphql/latest/objects/pricelistprice)
        *   [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/product)
        *   [Product Bundle Component](https://shopify.dev/docs/api/admin-graphql/latest/objects/productbundlecomponent)
        *   [Product Bundle Component Option Selection](https://shopify.dev/docs/api/admin-graphql/latest/objects/productbundlecomponentoptionselection)
        *   [Product Bundle Component Option Selection Value](https://shopify.dev/docs/api/admin-graphql/latest/objects/productbundlecomponentoptionselectionvalue)
        *   [Product Bundle Component Quantity Option](https://shopify.dev/docs/api/admin-graphql/latest/objects/productbundlecomponentquantityoption)
        *   [Product Bundle Component Quantity Option Value](https://shopify.dev/docs/api/admin-graphql/latest/objects/productbundlecomponentquantityoptionvalue)
        *   [Product Bundle Operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/productbundleoperation)
        *   [Product Category](https://shopify.dev/docs/api/admin-graphql/latest/objects/productcategory)
        *   [Product Compare At Price Range](https://shopify.dev/docs/api/admin-graphql/latest/objects/productcompareatpricerange)
        *   [Product Component Type](https://shopify.dev/docs/api/admin-graphql/latest/objects/productcomponenttype)
        *   [Product Contextual Pricing](https://shopify.dev/docs/api/admin-graphql/latest/objects/productcontextualpricing)
        *   [Product Delete Operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/productdeleteoperation)
        *   [Product Duplicate Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/productduplicatejob)
        *   [Product Duplicate Operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/productduplicateoperation)
        *   [Product Option](https://shopify.dev/docs/api/admin-graphql/latest/objects/productoption)
        *   [Product Option Value](https://shopify.dev/docs/api/admin-graphql/latest/objects/productoptionvalue)
        *   [Product Option Value Swatch](https://shopify.dev/docs/api/admin-graphql/latest/objects/productoptionvalueswatch)
        *   [Product Price Range](https://shopify.dev/docs/api/admin-graphql/latest/objects/productpricerange)
        *   [Product Price Range V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/productpricerangev2)
        *   [Product Publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/productpublication)
        *   [Product Set Operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/productsetoperation)
        *   [Product Taxonomy Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/producttaxonomynode)
        *   [Product Variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant)
        *   [Product Variant Component](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariantcomponent)
        *   [Product Variant Contextual Pricing](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariantcontextualpricing)
        *   [Product Variant Price Pair](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariantpricepair)
        *   [Publication Resource Operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/publicationresourceoperation)
        *   [Quantity Price Break](https://shopify.dev/docs/api/admin-graphql/latest/objects/quantitypricebreak)
        *   [Quantity Rule](https://shopify.dev/docs/api/admin-graphql/latest/objects/quantityrule)
        *   [Resource Publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/resourcepublication)
        *   [Resource Publication V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/resourcepublicationv2)
        *   [Restricted For Resource](https://shopify.dev/docs/api/admin-graphql/latest/objects/restrictedforresource)
        *   [Row Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/rowcount)
        *   [Selected Option](https://shopify.dev/docs/api/admin-graphql/latest/objects/selectedoption)
        *   [Selling Plan](https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplan)
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplan#fields)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplan#interfaces)
        *   [Selling Plan Anchor](https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplananchor)
        *   [Selling Plan Checkout Charge](https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplancheckoutcharge)
        *   [Selling Plan Checkout Charge Percentage Value](https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplancheckoutchargepercentagevalue)
        *   [Selling Plan Fixed Billing Policy](https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplanfixedbillingpolicy)
        *   [Selling Plan Fixed Delivery Policy](https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplanfixeddeliverypolicy)
        *   [Selling Plan Fixed Pricing Policy](https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplanfixedpricingpolicy)
        *   [Selling Plan Group](https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplangroup)
        *   [Selling Plan Inventory Policy](https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplaninventorypolicy)
        *   [Selling Plan Pricing Policy Percentage Value](https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplanpricingpolicypercentagevalue)
        *   [Selling Plan Recurring Billing Policy](https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplanrecurringbillingpolicy)
        *   [Selling Plan Recurring Delivery Policy](https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplanrecurringdeliverypolicy)
        *   [Selling Plan Recurring Pricing Policy](https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplanrecurringpricingpolicy)
        *   [Staged Media Upload Target](https://shopify.dev/docs/api/admin-graphql/latest/objects/stagedmediauploadtarget)
        *   [Standardized Product Type](https://shopify.dev/docs/api/admin-graphql/latest/objects/standardizedproducttype)
        *   [Taxonomy](https://shopify.dev/docs/api/admin-graphql/latest/objects/taxonomy)
        *   [Taxonomy Attribute](https://shopify.dev/docs/api/admin-graphql/latest/objects/taxonomyattribute)
        *   [Taxonomy Category](https://shopify.dev/docs/api/admin-graphql/latest/objects/taxonomycategory)
        *   [Taxonomy Choice List Attribute](https://shopify.dev/docs/api/admin-graphql/latest/objects/taxonomychoicelistattribute)
        *   [Taxonomy Measurement Attribute](https://shopify.dev/docs/api/admin-graphql/latest/objects/taxonomymeasurementattribute)
        *   [Taxonomy Value](https://shopify.dev/docs/api/admin-graphql/latest/objects/taxonomyvalue)
        *   [Unit Price Measurement](https://shopify.dev/docs/api/admin-graphql/latest/objects/unitpricemeasurement)
        *   [Vector3](https://shopify.dev/docs/api/admin-graphql/latest/objects/vector3)
        *   [Video](https://shopify.dev/docs/api/admin-graphql/latest/objects/video)
        *   [Video Source](https://shopify.dev/docs/api/admin-graphql/latest/objects/videosource)
        *   [Weight](https://shopify.dev/docs/api/admin-graphql/latest/objects/weight)

*   Retail   
*   Shipping And Fulfillment   
*   Shopify Markets   
*   Shopify Payments   
*   Store Properties   
*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to SellingPlan](https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplan#top)
Selling Plan
============

object

Requires `read_products` access scope.

Represents how a product can be sold and purchased. Selling plans and associated records (selling plan groups and policies) are deleted 48 hours after a merchant uninstalls their subscriptions app. We recommend backing up these records if you need to restore them later.

For more information on selling plans, refer to [_Creating and managing selling plans_](https://shopify.dev/docs/apps/selling-strategies/subscriptions/selling-plans).

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplan#fields)Fields
------------------------------------------------------------------------------------------------------

[Anchor to billingPolicy](https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplan#field-SellingPlan.fields.billingPolicy)billing Policy

•[Selling Plan Billing Policy!](https://shopify.dev/docs/api/admin-graphql/latest/unions/SellingPlanBillingPolicy)

non-null

A selling plan policy which describes the recurring billing details.

Show union types

[Anchor to category](https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplan#field-SellingPlan.fields.category)category

•[Selling Plan Category](https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanCategory)

The category used to classify the selling plan for reporting purposes.

Show enum values

[Anchor to createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplan#field-SellingPlan.fields.createdAt)created At

•[Date Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

non-null

The date and time when the selling plan was created.

[Anchor to deliveryPolicy](https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplan#field-SellingPlan.fields.deliveryPolicy)delivery Policy

•[Selling Plan Delivery Policy!](https://shopify.dev/docs/api/admin-graphql/latest/unions/SellingPlanDeliveryPolicy)

non-null

A selling plan policy which describes the delivery details.

Show union types

[Anchor to description](https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplan#field-SellingPlan.fields.description)description

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

Buyer facing string which describes the selling plan commitment.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplan#field-SellingPlan.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to inventoryPolicy](https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplan#field-SellingPlan.fields.inventoryPolicy)inventory Policy

•[Selling Plan Inventory Policy](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanInventoryPolicy)

When to reserve inventory for a selling plan.

Show fields

[Anchor to metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplan#field-SellingPlan.fields.metafield)metafield

•[Metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield)

A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information.

Show fields

[Anchor to metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplan#field-SellingPlan.fields.metafields)metafields

•[Metafield Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldConnection)

non-null

A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data) that a merchant associates with a Shopify resource.

Show fields

[Anchor to name](https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplan#field-SellingPlan.fields.name)name

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

A customer-facing description of the selling plan.

If your store supports multiple currencies, then don't include country-specific pricing content, such as "Buy monthly, get 10$ CAD off". This field won't be converted to reflect different currencies.

[Anchor to options](https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplan#field-SellingPlan.fields.options)options

•[[String!]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The values of all options available on the selling plan. Selling plans are grouped together in Liquid when they're created by the same app, and have the same `selling_plan_group.name` and `selling_plan_group.options` values.

[Anchor to position](https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplan#field-SellingPlan.fields.position)position

•[Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

Relative position of the selling plan for display. A lower position will be displayed before a higher position.

[Anchor to pricingPolicies](https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplan#field-SellingPlan.fields.pricingPolicies)pricing Policies

•[[Selling Plan Pricing Policy!]!](https://shopify.dev/docs/api/admin-graphql/latest/unions/SellingPlanPricingPolicy)

non-null

Selling plan pricing details.

Show union types

[Anchor to translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplan#field-SellingPlan.fields.translations)translations

•[[Translation!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Translation)

non-null

The published translations associated with the resource.

Show fields

[Anchor to metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplan#field-SellingPlan.fields.metafieldDefinitions)metafield Definitions

•[Metafield Definition Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldDefinitionConnection)

non-null Deprecated

Show fields

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   <->[SellingPlanConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/SellingPlanConnection#field-nodes)
*   {}[SellingPlanEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanEdge#field-node)
*   {}[SellingPlanGroup.sellingPlans](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup#field-sellingPlans)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplan#interfaces)Interfaces
------------------------------------------------------------------------------------------------------------------

[Anchor to HasMetafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplan#interface-HasMetafieldDefinitions)[Has Metafield Definitions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafieldDefinitions)

•interface

[Anchor to HasMetafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplan#interface-HasMetafields)[Has Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)

•interface

[Anchor to HasPublishedTranslations](https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplan#interface-HasPublishedTranslations)[Has Published Translations](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasPublishedTranslations)

•interface

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/sellingplan#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-SellingPlan Implements
-------------------------

### Implements

*   ||-[Has Metafield Definitions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafieldDefinitions)
*   ||-[Has Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)
*   ||-[Has Published Translations](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasPublishedTranslations)
*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*
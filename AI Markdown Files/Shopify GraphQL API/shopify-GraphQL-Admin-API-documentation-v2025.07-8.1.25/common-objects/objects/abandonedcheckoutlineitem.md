---
title: "AbandonedCheckoutLineItem"
description: "Shopify GraphQL Admin API documentation for abandonedcheckoutlineitem"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonedcheckoutlineitem"
extraction_method: "jina"
sections: ['Common objects', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: AbandonedCheckoutLineItem - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonedcheckoutlineitem

Markdown Content:
AbandonedCheckoutLineItem - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonedcheckoutlineitem#main-content)

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
*   
Common Objects

    *   Queries   
    *   Mutations   
    *   
Objects

        *   [Abandoned Checkout](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonedcheckout)
        *   [Abandoned Checkout Line Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonedcheckoutlineitem)
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonedcheckoutlineitem#fields)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonedcheckoutlineitem#interfaces)
        *   [Abandoned Checkout Line Item Component](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonedcheckoutlineitemcomponent)
        *   [Api Version](https://shopify.dev/docs/api/admin-graphql/latest/objects/apiversion)
        *   [App Revoke Access Scopes App Revoke Scope Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/apprevokeaccessscopesapprevokescopeerror)
        *   [App Uninstall App Uninstall Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/appuninstallappuninstallerror)
        *   [Available Channel Definitions By Channel](https://shopify.dev/docs/api/admin-graphql/latest/objects/availablechanneldefinitionsbychannel)
        *   [Buyer Experience Configuration](https://shopify.dev/docs/api/admin-graphql/latest/objects/buyerexperienceconfiguration)
        *   [Channel](https://shopify.dev/docs/api/admin-graphql/latest/objects/channel)
        *   [Channel Definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/channeldefinition)
        *   [Channel Information](https://shopify.dev/docs/api/admin-graphql/latest/objects/channelinformation)
        *   [Checkout Branding Button](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingbutton)
        *   [Checkout Branding Button Color Roles](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingbuttoncolorroles)
        *   [Checkout Branding Buyer Journey](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingbuyerjourney)
        *   [Checkout Branding Cart Link](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingcartlink)
        *   [Checkout Branding Checkbox](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingcheckbox)
        *   [Checkout Branding Choice List](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingchoicelist)
        *   [Checkout Branding Choice List Group](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingchoicelistgroup)
        *   [Checkout Branding Color Global](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingcolorglobal)
        *   [Checkout Branding Color Roles](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingcolorroles)
        *   [Checkout Branding Colors](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingcolors)
        *   [Checkout Branding Color Scheme](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingcolorscheme)
        *   [Checkout Branding Color Schemes](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingcolorschemes)
        *   [Checkout Branding Container Divider](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingcontainerdivider)
        *   [Checkout Branding Content](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingcontent)
        *   [Checkout Branding Control Color Roles](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingcontrolcolorroles)
        *   [Checkout Branding Corner Radius Variables](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingcornerradiusvariables)
        *   [Checkout Branding Custom Font](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingcustomfont)
        *   [Checkout Branding Divider Style](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingdividerstyle)
        *   [Checkout Branding Express Checkout](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingexpresscheckout)
        *   [Checkout Branding Express Checkout Button](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingexpresscheckoutbutton)
        *   [Checkout Branding Footer](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingfooter)
        *   [Checkout Branding Footer Content](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingfootercontent)
        *   [Checkout Branding Global](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingglobal)
        *   [Checkout Branding Header Cart Link](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingheadercartlink)
        *   [Checkout Branding Heading Level](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingheadinglevel)
        *   [Checkout Branding Main Section](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingmainsection)
        *   [Checkout Branding Merchandise Thumbnail](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingmerchandisethumbnail)
        *   [Checkout Branding Merchandise Thumbnail Badge](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingmerchandisethumbnailbadge)
        *   [Checkout Branding Order Summary Section](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingordersummarysection)
        *   [Checkout Branding Select](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingselect)
        *   [Checkout Branding Shopify Font](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingshopifyfont)
        *   [Checkout Branding Text Field](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingtextfield)
        *   [Checkout Branding Typography Style](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingtypographystyle)
        *   [Checkout Branding Typography Style Global](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutbrandingtypographystyleglobal)
        *   [Checkout Profile](https://shopify.dev/docs/api/admin-graphql/latest/objects/checkoutprofile)
        *   [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/count)
        *   [Customer Credit Card](https://shopify.dev/docs/api/admin-graphql/latest/objects/customercreditcard)
        *   [Customer Payment Instrument Billing Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/customerpaymentinstrumentbillingaddress)
        *   [Customer Payment Method](https://shopify.dev/docs/api/admin-graphql/latest/objects/customerpaymentmethod)
        *   [Customer Paypal Billing Agreement](https://shopify.dev/docs/api/admin-graphql/latest/objects/customerpaypalbillingagreement)
        *   [Customer Shop Pay Agreement](https://shopify.dev/docs/api/admin-graphql/latest/objects/customershoppayagreement)
        *   [Deposit Percentage](https://shopify.dev/docs/api/admin-graphql/latest/objects/depositpercentage)
        *   [Distance](https://shopify.dev/docs/api/admin-graphql/latest/objects/distance)
        *   [Domain](https://shopify.dev/docs/api/admin-graphql/latest/objects/domain)
        *   [Domain Localization](https://shopify.dev/docs/api/admin-graphql/latest/objects/domainlocalization)
        *   [Finance App Access Policy](https://shopify.dev/docs/api/admin-graphql/latest/objects/financeappaccesspolicy)
        *   [Fulfillment Constraint Rule](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentconstraintrule)
        *   [Functions App Bridge](https://shopify.dev/docs/api/admin-graphql/latest/objects/functionsappbridge)
        *   [Functions Error History](https://shopify.dev/docs/api/admin-graphql/latest/objects/functionserrorhistory)
        *   [Gift Card](https://shopify.dev/docs/api/admin-graphql/latest/objects/giftcard)
        *   [Gift Card Configuration](https://shopify.dev/docs/api/admin-graphql/latest/objects/giftcardconfiguration)
        *   [Gift Card Credit Transaction](https://shopify.dev/docs/api/admin-graphql/latest/objects/giftcardcredittransaction)
        *   [Gift Card Debit Transaction](https://shopify.dev/docs/api/admin-graphql/latest/objects/giftcarddebittransaction)
        *   [Gift Card Recipient](https://shopify.dev/docs/api/admin-graphql/latest/objects/giftcardrecipient)
        *   [Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/image)
        *   [Image Upload Parameter](https://shopify.dev/docs/api/admin-graphql/latest/objects/imageuploadparameter)
        *   [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/job)
        *   [Localized Field](https://shopify.dev/docs/api/admin-graphql/latest/objects/localizedfield)
        *   [Mailing Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/mailingaddress)
        *   [Merchant Approval Signals](https://shopify.dev/docs/api/admin-graphql/latest/objects/merchantapprovalsignals)
        *   [Metafield Access](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafieldaccess)
        *   [Metafield Capabilities](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafieldcapabilities)
        *   [Metafield Capability Admin Filterable](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafieldcapabilityadminfilterable)
        *   [Metafield Capability Unique Values](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafieldcapabilityuniquevalues)
        *   [Metafield Definition Constraints](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinitionconstraints)
        *   [Metafield Definition Constraint Value](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinitionconstraintvalue)
        *   [Metafield Definition Identifier](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafielddefinitionidentifier)
        *   [Metafield Identifier](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafieldidentifier)
        *   [Metafield Relation](https://shopify.dev/docs/api/admin-graphql/latest/objects/metafieldrelation)
        *   [Metaobject Thumbnail](https://shopify.dev/docs/api/admin-graphql/latest/objects/metaobjectthumbnail)
        *   [Money Bag](https://shopify.dev/docs/api/admin-graphql/latest/objects/moneybag)
        *   [Money V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/moneyv2)
        *   [Mutation](https://shopify.dev/docs/api/admin-graphql/latest/objects/mutation)
        *   [Mutations Staged Upload Target Generate Upload Parameter](https://shopify.dev/docs/api/admin-graphql/latest/objects/mutationsstageduploadtargetgenerateuploadparameter)
        *   [Order Payment Status](https://shopify.dev/docs/api/admin-graphql/latest/objects/orderpaymentstatus)
        *   [Page Info](https://shopify.dev/docs/api/admin-graphql/latest/objects/pageinfo)
        *   [Payment Customization](https://shopify.dev/docs/api/admin-graphql/latest/objects/paymentcustomization)
        *   [Payment Customization Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/paymentcustomizationerror)
        *   [Payment Mandate](https://shopify.dev/docs/api/admin-graphql/latest/objects/paymentmandate)
        *   [Payment Schedule](https://shopify.dev/docs/api/admin-graphql/latest/objects/paymentschedule)
        *   [Payment Terms](https://shopify.dev/docs/api/admin-graphql/latest/objects/paymentterms)
        *   [Payment Terms Template](https://shopify.dev/docs/api/admin-graphql/latest/objects/paymenttermstemplate)
        *   [Product Feed](https://shopify.dev/docs/api/admin-graphql/latest/objects/productfeed)
        *   [Product Resource Feedback](https://shopify.dev/docs/api/admin-graphql/latest/objects/productresourcefeedback)
        *   [Query Root](https://shopify.dev/docs/api/admin-graphql/latest/objects/queryroot)
        *   [Saved Search](https://shopify.dev/docs/api/admin-graphql/latest/objects/savedsearch)
        *   [Search Filter](https://shopify.dev/docs/api/admin-graphql/latest/objects/searchfilter)
        *   [Search Filter Options](https://shopify.dev/docs/api/admin-graphql/latest/objects/searchfilteroptions)
        *   [Search Result](https://shopify.dev/docs/api/admin-graphql/latest/objects/searchresult)
        *   [Shopify Function](https://shopify.dev/docs/api/admin-graphql/latest/objects/shopifyfunction)
        *   [Shop Pay Payment Request](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoppaypaymentrequest)
        *   [Shop Pay Payment Request Contact Field](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoppaypaymentrequestcontactfield)
        *   [Shop Pay Payment Request Discount](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoppaypaymentrequestdiscount)
        *   [Shop Pay Payment Request Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoppaypaymentrequestimage)
        *   [Shop Pay Payment Request Line Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoppaypaymentrequestlineitem)
        *   [Shop Pay Payment Request Receipt](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoppaypaymentrequestreceipt)
        *   [Shop Pay Payment Request Receipt Processing Status](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoppaypaymentrequestreceiptprocessingstatus)
        *   [Shop Pay Payment Request Shipping Line](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoppaypaymentrequestshippingline)
        *   [Shop Pay Payment Request Total Shipping Price](https://shopify.dev/docs/api/admin-graphql/latest/objects/shoppaypaymentrequesttotalshippingprice)
        *   [Staff Member](https://shopify.dev/docs/api/admin-graphql/latest/objects/staffmember)
        *   [Staff Member Private Data](https://shopify.dev/docs/api/admin-graphql/latest/objects/staffmemberprivatedata)
        *   [Staged Upload Parameter](https://shopify.dev/docs/api/admin-graphql/latest/objects/stageduploadparameter)
        *   [Staged Upload Target](https://shopify.dev/docs/api/admin-graphql/latest/objects/stageduploadtarget)
        *   [Standard Metaobject Capability Template](https://shopify.dev/docs/api/admin-graphql/latest/objects/standardmetaobjectcapabilitytemplate)
        *   [Standard Metaobject Definition Field Template](https://shopify.dev/docs/api/admin-graphql/latest/objects/standardmetaobjectdefinitionfieldtemplate)
        *   [Standard Metaobject Definition Template](https://shopify.dev/docs/api/admin-graphql/latest/objects/standardmetaobjectdefinitiontemplate)
        *   [Store Credit Account](https://shopify.dev/docs/api/admin-graphql/latest/objects/storecreditaccount)
        *   [Store Credit Account Credit Transaction](https://shopify.dev/docs/api/admin-graphql/latest/objects/storecreditaccountcredittransaction)
        *   [Store Credit Account Debit Revert Transaction](https://shopify.dev/docs/api/admin-graphql/latest/objects/storecreditaccountdebitreverttransaction)
        *   [Store Credit Account Debit Transaction](https://shopify.dev/docs/api/admin-graphql/latest/objects/storecreditaccountdebittransaction)
        *   [Store Credit Account Expiration Transaction](https://shopify.dev/docs/api/admin-graphql/latest/objects/storecreditaccountexpirationtransaction)
        *   [Typed Attribute](https://shopify.dev/docs/api/admin-graphql/latest/objects/typedattribute)
        *   [Validation](https://shopify.dev/docs/api/admin-graphql/latest/objects/validation)
        *   [Vault Credit Card](https://shopify.dev/docs/api/admin-graphql/latest/objects/vaultcreditcard)
        *   [Vault Paypal Billing Agreement](https://shopify.dev/docs/api/admin-graphql/latest/objects/vaultpaypalbillingagreement)
        *   [Webhook Subscription Metafield Identifier](https://shopify.dev/docs/api/admin-graphql/latest/objects/webhooksubscriptionmetafieldidentifier)

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
*   Products And Collections   
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

[Anchor to AbandonedCheckoutLineItem](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonedcheckoutlineitem#top)
Abandoned Checkout Line Item
============================

object

Requires `read_orders` access scope. Also: The user must have manage_abandoned_checkouts permission.

A single line item in an abandoned checkout.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonedcheckoutlineitem#fields)Fields
--------------------------------------------------------------------------------------------------------------------

[Anchor to components](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonedcheckoutlineitem#field-AbandonedCheckoutLineItem.fields.components)components

•[[Abandoned Checkout Line Item Component!]](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItemComponent)

A list of line item components for this line item.

Show fields

[Anchor to customAttributes](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonedcheckoutlineitem#field-AbandonedCheckoutLineItem.fields.customAttributes)custom Attributes

•[[Attribute!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Attribute)

non-null

A list of extra information that has been added to the line item.

Show fields

[Anchor to discountAllocations](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonedcheckoutlineitem#field-AbandonedCheckoutLineItem.fields.discountAllocations)discount Allocations

•[Discount Allocation Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountAllocationConnection)

non-null

Discount allocations that have been applied on the line item.

Show fields

[Anchor to discountedTotalPriceSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonedcheckoutlineitem#field-AbandonedCheckoutLineItem.fields.discountedTotalPriceSet)discounted Total Price Set

•[Money Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

non-null

Final total price for the entire quantity of this line item, including discounts.

Show fields

[Anchor to discountedTotalPriceWithCodeDiscount](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonedcheckoutlineitem#field-AbandonedCheckoutLineItem.fields.discountedTotalPriceWithCodeDiscount)discounted Total Price With Code Discount

•[Money Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

non-null

The total price for the entire quantity of this line item, after all discounts are applied, at both the line item and code-based line item level.

Show fields

[Anchor to discountedUnitPriceSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonedcheckoutlineitem#field-AbandonedCheckoutLineItem.fields.discountedUnitPriceSet)discounted Unit Price Set

•[Money Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

non-null

The price of a single variant unit after discounts are applied at the line item level, in shop and presentment currencies.

Show fields

[Anchor to discountedUnitPriceWithCodeDiscount](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonedcheckoutlineitem#field-AbandonedCheckoutLineItem.fields.discountedUnitPriceWithCodeDiscount)discounted Unit Price With Code Discount

•[Money Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

non-null

The price of a single variant unit after all discounts are applied, at both the line item and code-based line item level.

Show fields

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonedcheckoutlineitem#field-AbandonedCheckoutLineItem.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to image](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonedcheckoutlineitem#field-AbandonedCheckoutLineItem.fields.image)image

•[Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image)

The image associated with the line item's variant or product. NULL if the line item has no product, or if neither the variant nor the product have an image.

Show fields

[Anchor to originalTotalPriceSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonedcheckoutlineitem#field-AbandonedCheckoutLineItem.fields.originalTotalPriceSet)original Total Price Set

•[Money Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

non-null

Original total price for the entire quantity of this line item, before discounts.

Show fields

[Anchor to originalUnitPriceSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonedcheckoutlineitem#field-AbandonedCheckoutLineItem.fields.originalUnitPriceSet)original Unit Price Set

•[Money Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

non-null

Original price for a single unit of this line item, before discounts.

Show fields

[Anchor to product](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonedcheckoutlineitem#field-AbandonedCheckoutLineItem.fields.product)product

•[Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

Product for this line item. NULL for custom line items and products that were deleted after checkout began.

Show fields

[Anchor to quantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonedcheckoutlineitem#field-AbandonedCheckoutLineItem.fields.quantity)quantity

•[Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

non-null

The quantity of the line item.

[Anchor to sku](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonedcheckoutlineitem#field-AbandonedCheckoutLineItem.fields.sku)sku

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

SKU for the inventory item associated with the variant, if any.

[Anchor to title](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonedcheckoutlineitem#field-AbandonedCheckoutLineItem.fields.title)title

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

Title of the line item. Defaults to the product's title.

[Anchor to variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonedcheckoutlineitem#field-AbandonedCheckoutLineItem.fields.variant)variant

•[Product Variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

Product variant for this line item. NULL for custom line items and variants that were deleted after checkout began.

Show fields

[Anchor to variantTitle](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonedcheckoutlineitem#field-AbandonedCheckoutLineItem.fields.variantTitle)variant Title

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

Title of the variant for this line item. NULL for custom line items and products that don't have distinct variants.

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   {}[AbandonedCheckout.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckout#field-lineItems)
*   <->[AbandonedCheckoutLineItemConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/AbandonedCheckoutLineItemConnection#field-nodes)
*   {}[AbandonedCheckoutLineItemEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItemEdge#field-node)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonedcheckoutlineitem#interfaces)Interfaces
--------------------------------------------------------------------------------------------------------------------------------

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/abandonedcheckoutlineitem#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-AbandonedCheckoutLineItem Implements
---------------------------------------

### Implements

*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*
---
title: "StaffMember"
description: "Shopify GraphQL Admin API documentation for staffmember"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/staffmember"
extraction_method: "jina"
sections: ['Common objects', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: StaffMember - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/staffmember

Markdown Content:
StaffMember - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/staffmember#main-content)

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
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/staffmember#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/staffmember#queries)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/staffmember#interfaces)
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

[Anchor to StaffMember](https://shopify.dev/docs/api/admin-graphql/latest/objects/staffmember#top)
Staff Member
============

object

Requires `read_users` access scope. Also: The app must be a finance embedded app or installed on a Shopify Plus or Advanced store. Contact Shopify Support to enable this scope for your app.

Represents the data about a staff member's Shopify account. Merchants can use staff member data to get more information about the staff members in their store.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/staffmember#fields)Fields
------------------------------------------------------------------------------------------------------

[Anchor to accountType](https://shopify.dev/docs/api/admin-graphql/latest/objects/staffmember#field-StaffMember.fields.accountType)account Type

•[Account Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/AccountType)

The type of account the staff member has.

Show enum values

[Anchor to active](https://shopify.dev/docs/api/admin-graphql/latest/objects/staffmember#field-StaffMember.fields.active)active

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the staff member is active.

[Anchor to avatar](https://shopify.dev/docs/api/admin-graphql/latest/objects/staffmember#field-StaffMember.fields.avatar)avatar

•[Image!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image)

non-null

The image used as the staff member's avatar in the Shopify admin.

Show fields

[Anchor to email](https://shopify.dev/docs/api/admin-graphql/latest/objects/staffmember#field-StaffMember.fields.email)email

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The staff member's email address.

[Anchor to exists](https://shopify.dev/docs/api/admin-graphql/latest/objects/staffmember#field-StaffMember.fields.exists)exists

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the staff member's account exists.

[Anchor to firstName](https://shopify.dev/docs/api/admin-graphql/latest/objects/staffmember#field-StaffMember.fields.firstName)first Name

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The staff member's first name.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/staffmember#field-StaffMember.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

A globally-unique ID.

[Anchor to initials](https://shopify.dev/docs/api/admin-graphql/latest/objects/staffmember#field-StaffMember.fields.initials)initials

•[[String!]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The staff member's initials, if available.

[Anchor to isShopOwner](https://shopify.dev/docs/api/admin-graphql/latest/objects/staffmember#field-StaffMember.fields.isShopOwner)is Shop Owner

•[Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

non-null

Whether the staff member is the shop owner.

[Anchor to lastName](https://shopify.dev/docs/api/admin-graphql/latest/objects/staffmember#field-StaffMember.fields.lastName)last Name

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The staff member's last name.

[Anchor to locale](https://shopify.dev/docs/api/admin-graphql/latest/objects/staffmember#field-StaffMember.fields.locale)locale

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The staff member's preferred locale. Locale values use the format `language` or `language-COUNTRY`, where `language` is a two-letter language code, and `COUNTRY` is a two-letter country code. For example: `en` or `en-US`

[Anchor to name](https://shopify.dev/docs/api/admin-graphql/latest/objects/staffmember#field-StaffMember.fields.name)name

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The staff member's full name.

[Anchor to phone](https://shopify.dev/docs/api/admin-graphql/latest/objects/staffmember#field-StaffMember.fields.phone)phone

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The staff member's phone number.

[Anchor to privateData](https://shopify.dev/docs/api/admin-graphql/latest/objects/staffmember#field-StaffMember.fields.privateData)private Data

•[Staff Member Private Data!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMemberPrivateData)

non-null

The data used to customize the Shopify admin experience for the staff member.

Show fields

* * *

Was this section helpful?

Yes No

Map
---

### Fields and connections with this object

*   {}[CashTrackingAdjustment.staffMember](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingAdjustment#field-staffMember)
*   {}[CashTrackingSession.closingStaffMember](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingSession#field-closingStaffMember)
*   {}[CashTrackingSession.openingStaffMember](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingSession#field-openingStaffMember)
*   {}[CommentEvent.author](https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentEvent#field-author)
*   {}[CompanyLocationStaffMemberAssignment.staffMember](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocationStaffMemberAssignment#field-staffMember)
*   {}[InventoryAdjustmentGroup.staffMember](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryAdjustmentGroup#field-staffMember)
*   {}[LineItem.staffMember](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem#field-staffMember)
*   {}[Metaobject.createdByStaff](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject#field-createdByStaff)
*   {}[MetaobjectDefinition.createdByStaff](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition#field-createdByStaff)
*   {}[Order.staffMember](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-staffMember)
*   {}[OrderAgreement.user](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderAgreement#field-user)
*   {}[OrderEditAgreement.user](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditAgreement#field-user)
*   {}[OrderTransaction.user](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction#field-user)
*   {}[Refund.staffMember](https://shopify.dev/docs/api/admin-graphql/latest/objects/Refund#field-staffMember)
*   {}[RefundAgreement.user](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundAgreement#field-user)
*   {}[ReturnAgreement.user](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnAgreement#field-user)
*   ||-[SalesAgreement.user](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SalesAgreement#field-user)
*   {}[Shop.accountOwner](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-accountOwner)
*   <->[StaffMemberConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/StaffMemberConnection#field-nodes)
*   {}[StaffMemberEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMemberEdge#field-node)
*   {}[TenderTransaction.user](https://shopify.dev/docs/api/admin-graphql/latest/objects/TenderTransaction#field-user)

Show deprecations

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/staffmember#queries)Queries
---------------------------------------------------------------------------------------------------------

[Anchor to currentStaffMember](https://shopify.dev/docs/api/admin-graphql/latest/objects/staffmember#query-currentStaffMember)[current Staff Member](https://shopify.dev/docs/api/admin-graphql/latest/queries/currentStaffMember)

•query

The staff member making the API request.

Show fields

[Anchor to staffMember](https://shopify.dev/docs/api/admin-graphql/latest/objects/staffmember#query-staffMember)[staff Member](https://shopify.dev/docs/api/admin-graphql/latest/queries/staffMember)

•query

The StaffMember resource, by ID.

Show fields

[Anchor to staffMembers](https://shopify.dev/docs/api/admin-graphql/latest/objects/staffmember#query-staffMembers)[staff Members](https://shopify.dev/docs/api/admin-graphql/latest/queries/staffMembers)

•query

The shop staff members.

Show fields

* * *

Was this section helpful?

Yes No

<?>StaffMember Queries
----------------------

### Queried by

*   <?>[current Staff Member](https://shopify.dev/docs/api/admin-graphql/latest/queries/StaffMember)
*   <?>[staff Member](https://shopify.dev/docs/api/admin-graphql/latest/queries/StaffMember)
*   <?>[staff Members](https://shopify.dev/docs/api/admin-graphql/latest/queries/StaffMemberConnection)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/staffmember#interfaces)Interfaces
------------------------------------------------------------------------------------------------------------------

[Anchor to Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/staffmember#interface-Node)[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

•interface

* * *

Was this section helpful?

Yes No

||-StaffMember Implements
-------------------------

### Implements

*   ||-[Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)


---
*Content truncated at "Updates" section*
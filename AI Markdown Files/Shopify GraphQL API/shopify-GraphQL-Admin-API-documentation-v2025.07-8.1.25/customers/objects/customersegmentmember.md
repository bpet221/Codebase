---
title: "CustomerSegmentMember"
description: "Shopify GraphQL Admin API documentation for customersegmentmember"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/objects/customersegmentmember"
extraction_method: "jina"
sections: ['Customers', 'Objects']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: CustomerSegmentMember - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/objects/customersegmentmember

Markdown Content:
CustomerSegmentMember - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersegmentmember#main-content)

[![Image 1: Docs page](https://cdn.shopify.com/shopifycloud/shopify-dev/production/assets/dev-docs-logo-2-light-CrZnRVR7.svg)![Image 2: Docs page](https://cdn.shopify.com/shopifycloud/shopify-dev/production/assets/dev-docs-logo-2-dark-BhuAYNm7.svg)](https://shopify.dev/docs)

*   [Apps](https://shopify.dev/docs/apps/build)
*   [Storefronts](https://shopify.dev/docs/storefronts)
*   APIs and references

*   search + assistant

[Log in](https://partners.shopify.com/organizations?shpxid=222dd762-CA08-48FF-E4D4-FF926B8FFCAD)[Sign up](https://partners.shopify.com/signup/developer?shpxid=222dd762-CA08-48FF-E4D4-FF926B8FFCAD)

.dev Assistant

Shopify uses cookies to provide necessary site functionality and improve your experience. By using our website, you agree to our [privacy policy](https://www.shopify.com/legal/privacy) and our [cookie policy](https://www.shopify.com/legal/cookies).

OK

Opens in a new window

Expand sidebar

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
*   B2B   
*   Billing   
*   Bulk operations   
*   Cart   
*   Checkout branding   
*   Common objects   
*   
Customers

    *   Queries   
    *   Mutations   
    *   
Objects

        *   [Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/customer)
        *   [Customer Accounts V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/customeraccountsv2)
        *   [Customer Credit Card Billing Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/customercreditcardbillingaddress)
        *   [Customer Email Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/customeremailaddress)
        *   [Customer Email Marketing Consent State](https://shopify.dev/docs/api/admin-graphql/latest/objects/customeremailmarketingconsentstate)
        *   [Customer Mergeable](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergeable)
        *   [Customer Merge Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergeerror)
        *   [Customer Merge Preview](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergepreview)
        *   [Customer Merge Preview Alternate Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergepreviewalternatefields)
        *   [Customer Merge Preview Blocking Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergepreviewblockingfields)
        *   [Customer Merge Preview Default Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergepreviewdefaultfields)
        *   [Customer Merge Request](https://shopify.dev/docs/api/admin-graphql/latest/objects/customermergerequest)
        *   [Customer Phone Number](https://shopify.dev/docs/api/admin-graphql/latest/objects/customerphonenumber)
        *   [Customer Segment Member](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersegmentmember)
        *   [Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersegmentmember#fields)
        *   [Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersegmentmember#queries)
        *   [Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersegmentmember#interfaces)
        *   [Customer Segment Members Query](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersegmentmembersquery)
        *   [Customer Sms Marketing Consent Error](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersmsmarketingconsenterror)
        *   [Customer Sms Marketing Consent State](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersmsmarketingconsentstate)
        *   [Customer Statistics](https://shopify.dev/docs/api/admin-graphql/latest/objects/customerstatistics)
        *   [Market Price Inclusions](https://shopify.dev/docs/api/admin-graphql/latest/objects/marketpriceinclusions)
        *   [Segment](https://shopify.dev/docs/api/admin-graphql/latest/objects/segment)
        *   [Segment Association Filter](https://shopify.dev/docs/api/admin-graphql/latest/objects/segmentassociationfilter)
        *   [Segment Attribute Statistics](https://shopify.dev/docs/api/admin-graphql/latest/objects/segmentattributestatistics)
        *   [Segment Boolean Filter](https://shopify.dev/docs/api/admin-graphql/latest/objects/segmentbooleanfilter)
        *   [Segment Date Filter](https://shopify.dev/docs/api/admin-graphql/latest/objects/segmentdatefilter)
        *   [Segment Enum Filter](https://shopify.dev/docs/api/admin-graphql/latest/objects/segmentenumfilter)
        *   [Segment Event Filter](https://shopify.dev/docs/api/admin-graphql/latest/objects/segmenteventfilter)
        *   [Segment Event Filter Parameter](https://shopify.dev/docs/api/admin-graphql/latest/objects/segmenteventfilterparameter)
        *   [Segment Float Filter](https://shopify.dev/docs/api/admin-graphql/latest/objects/segmentfloatfilter)
        *   [Segment Integer Filter](https://shopify.dev/docs/api/admin-graphql/latest/objects/segmentintegerfilter)
        *   [Segment Membership](https://shopify.dev/docs/api/admin-graphql/latest/objects/segmentmembership)
        *   [Segment Membership Response](https://shopify.dev/docs/api/admin-graphql/latest/objects/segmentmembershipresponse)
        *   [Segment Migration](https://shopify.dev/docs/api/admin-graphql/latest/objects/segmentmigration)
        *   [Segment Statistics](https://shopify.dev/docs/api/admin-graphql/latest/objects/segmentstatistics)
        *   [Segment String Filter](https://shopify.dev/docs/api/admin-graphql/latest/objects/segmentstringfilter)
        *   [Segment Value](https://shopify.dev/docs/api/admin-graphql/latest/objects/segmentvalue)
        *   [Tax App Configuration](https://shopify.dev/docs/api/admin-graphql/latest/objects/taxappconfiguration)

*   Discounts and marketing   
*   Events   
*   Inventory   
*   Localizations   
*   Metafields   
*   Metaobjects   
*   Online store   
*   Orders   
*   Privacy   
*   Products and collections   
*   Retail   
*   Shipping and fulfillment   
*   Shopify Markets   
*   Shopify Payments   
*   Store properties   
*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to CustomerSegmentMember](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersegmentmember#top)
Customer Segment Member
=======================

object

Requires `read_customers` access scope. Also: The user must not have restricted access.

The member of a segment.

[Anchor to Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersegmentmember#fields)Fields
----------------------------------------------------------------------------------------------------------------

[Anchor to amountSpent](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersegmentmember#field-CustomerSegmentMember.fields.amountSpent)amount Spent

•[Money V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

The total amount of money that the member has spent on orders.

Show fields

[Anchor to defaultAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersegmentmember#field-CustomerSegmentMember.fields.defaultAddress)default Address

•[Mailing Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress)

The member's default address.

Show fields

[Anchor to defaultEmailAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersegmentmember#field-CustomerSegmentMember.fields.defaultEmailAddress)default Email Address

•[Customer Email Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailAddress)

The member's default email address.

Show fields

[Anchor to defaultPhoneNumber](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersegmentmember#field-CustomerSegmentMember.fields.defaultPhoneNumber)default Phone Number

•[Customer Phone Number](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPhoneNumber)

The member's default phone number.

Show fields

[Anchor to displayName](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersegmentmember#field-CustomerSegmentMember.fields.displayName)display Name

•[String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

non-null

The full name of the member, which is based on the values of the `first_name` and `last_name` fields. If the member's first name and last name aren't available, then the customer's email address is used. If the customer's email address isn't available, then the customer's phone number is used.

[Anchor to firstName](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersegmentmember#field-CustomerSegmentMember.fields.firstName)first Name

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The member's first name.

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersegmentmember#field-CustomerSegmentMember.fields.id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

non-null

The member’s ID.

[Anchor to lastName](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersegmentmember#field-CustomerSegmentMember.fields.lastName)last Name

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

The member's last name.

[Anchor to lastOrderId](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersegmentmember#field-CustomerSegmentMember.fields.lastOrderId)last Order Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The ID of the member's most recent order.

[Anchor to mergeable](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersegmentmember#field-CustomerSegmentMember.fields.mergeable)mergeable

•[Customer Mergeable!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergeable)

non-null

Whether the customer can be merged with another customer.

Show fields

[Anchor to metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersegmentmember#field-CustomerSegmentMember.fields.metafield)metafield

•[Metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield)

A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information.

Show fields

[Anchor to metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersegmentmember#field-CustomerSegmentMember.fields.metafields)metafields

•[Metafield Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldConnection)

non-null

A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data) that a merchant associates with a Shopify resource.

Show fields

[Anchor to note](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersegmentmember#field-CustomerSegmentMember.fields.note)note

•[String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

A note about the member.

[Anchor to numberOfOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersegmentmember#field-CustomerSegmentMember.fields.numberOfOrders)number Of Orders

•[Unsigned Int64](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

The total number of orders that the member has made.

* * *

Was this section helpful?

Yes No

Map
---

### Fields with this object

*   {}[CustomerSegmentMemberEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSegmentMemberEdge#field-node)

* * *

[Anchor to Queries](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersegmentmember#queries)Queries
-------------------------------------------------------------------------------------------------------------------

[Anchor to customerSegmentMembers](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersegmentmember#query-customerSegmentMembers)[customer Segment Members](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerSegmentMembers)

•query

The list of members, such as customers, that's associated with an individual segment. The maximum page size is 1000.

Show fields

* * *

Was this section helpful?

Yes No

<?>CustomerSegmentMember Queries
--------------------------------

### Queried by

*   <?>[customer Segment Members](https://shopify.dev/docs/api/admin-graphql/latest/queries/CustomerSegmentMemberConnection)

* * *

[Anchor to Interfaces](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersegmentmember#interfaces)Interfaces
----------------------------------------------------------------------------------------------------------------------------

[Anchor to HasMetafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/customersegmentmember#interface-HasMetafields)[Has Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)

•interface

* * *

Was this section helpful?

Yes No

||-CustomerSegmentMember Implements
-----------------------------------

### Implements

*   ||-[Has Metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields)


---
*Content truncated at "Updates" section*
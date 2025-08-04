---
title: "Migration guide"
source: https://shopify.dev/docs/storefronts/themes/os20/migration
sections: Theme features > Migration
created: 2025-07-29 15:40:38
---

Title: Migrating templates to Online Store 2.0

URL Source: https://shopify.dev/docs/storefronts/themes/os20/migration

Markdown Content:
Migrating templates to Online Store 2.0

===============

[Skip to main content](https://shopify.dev/docs/storefronts/themes/os20/migration#Main)

[![Image 1: shopify.dev](https://cdn.shopify.com/shopifycloud/shopify_dev/bundles/4fad754688bb9dbf6b7d91bd294fd7c00200db68aaf55f416ad2fb01850e48a9.svg)](https://shopify.dev/docs)

*   [Apps](https://shopify.dev/docs/apps/build)
*   [Storefronts](https://shopify.dev/docs/storefronts)
*   APIs and references

*   search + assistant

*   [Log in](https://partners.shopify.com/organizations)
*   [Sign up](https://partners.shopify.com/signup/developer)

Storefronts

*   [Overview](https://shopify.dev/docs/storefronts)
*   [Themes](https://shopify.dev/docs/storefronts/themes)
*   [Web API / Headless](https://shopify.dev/docs/storefronts/headless)
*   [Mobile](https://shopify.dev/docs/storefronts/mobile)

Expand sidebar

*   Getting started

*   [Overview](https://shopify.dev/docs/storefronts/themes)

    *    Quick start   

        *   [Create a theme](https://shopify.dev/docs/storefronts/themes/getting-started/create)
        *   [Customize a merchant theme](https://shopify.dev/docs/storefronts/themes/getting-started/customize)
        *   [Build your business](https://shopify.dev/docs/storefronts/themes/getting-started/build-your-business)

*   Key concepts

*   [Architecture](https://shopify.dev/docs/storefronts/themes/architecture)

    *    Layouts   

        *   [Overview](https://shopify.dev/docs/storefronts/themes/architecture/layouts)

        
            *    checkout.liquid   

                *   [Overview](https://shopify.dev/docs/storefronts/themes/architecture/layouts/checkout-liquid)
                *   [Customize checkout.liquid](https://shopify.dev/docs/storefronts/themes/architecture/layouts/checkout-liquid/customize-checkout)
                *   [Checkout CSS](https://shopify.dev/docs/storefronts/themes/architecture/layouts/checkout-liquid/checkout-css)

    *    Templates   

        *   [Overview](https://shopify.dev/docs/storefronts/themes/architecture/templates)
        *   [JSON templates](https://shopify.dev/docs/storefronts/themes/architecture/templates/json-templates)
        *   [Liquid templates](https://shopify.dev/docs/storefronts/themes/architecture/templates/liquid-templates)
        *   [Alternate templates](https://shopify.dev/docs/storefronts/themes/architecture/templates/alternate-templates)

        
            *    Template types   

                *   [article](https://shopify.dev/docs/storefronts/themes/architecture/templates/article)
                *   [blog](https://shopify.dev/docs/storefronts/themes/architecture/templates/blog)
                *   [cart](https://shopify.dev/docs/storefronts/themes/architecture/templates/cart)
                *   [collection](https://shopify.dev/docs/storefronts/themes/architecture/templates/collection)
                *   [customers/account](https://shopify.dev/docs/storefronts/themes/architecture/templates/customers-account)
                *   [customers/activate _ account](https://shopify.dev/docs/storefronts/themes/architecture/templates/customers-activate-account)
                *   [customers/addresses](https://shopify.dev/docs/storefronts/themes/architecture/templates/customers-addresses)
                *   [customers/login](https://shopify.dev/docs/storefronts/themes/architecture/templates/customers-login)
                *   [customers/order](https://shopify.dev/docs/storefronts/themes/architecture/templates/customers-order)
                *   [customers/register](https://shopify.dev/docs/storefronts/themes/architecture/templates/customers-register)
                *   [customers/reset _ password](https://shopify.dev/docs/storefronts/themes/architecture/templates/customers-reset-password)
                *   [gift _ card.liquid](https://shopify.dev/docs/storefronts/themes/architecture/templates/gift-card-liquid)
                *   [index](https://shopify.dev/docs/storefronts/themes/architecture/templates/index-template)
                *   [list-collections](https://shopify.dev/docs/storefronts/themes/architecture/templates/list-collections)
                *   [metaobject](https://shopify.dev/docs/storefronts/themes/architecture/templates/metaobject)
                *   [page](https://shopify.dev/docs/storefronts/themes/architecture/templates/page)
                *   [password](https://shopify.dev/docs/storefronts/themes/architecture/templates/password)
                *   [product](https://shopify.dev/docs/storefronts/themes/architecture/templates/product)
                *   [robots.txt.liquid](https://shopify.dev/docs/storefronts/themes/architecture/templates/robots-txt-liquid)
                *   [search](https://shopify.dev/docs/storefronts/themes/architecture/templates/search)
                *   [404](https://shopify.dev/docs/storefronts/themes/architecture/templates/404)

    *    Sections   

        *   [Overview](https://shopify.dev/docs/storefronts/themes/architecture/sections)
        *   [Section schema](https://shopify.dev/docs/storefronts/themes/architecture/sections/section-schema)

    *    Section groups   

        *   [Overview](https://shopify.dev/docs/storefronts/themes/architecture/section-groups)
        *   [Migrate](https://shopify.dev/docs/storefronts/themes/architecture/section-groups/migrate)

    *    Blocks   

        *   [Overview](https://shopify.dev/docs/storefronts/themes/architecture/blocks)

        
            *    Theme blocks   

                *   [Quick Start](https://shopify.dev/docs/storefronts/themes/architecture/blocks/theme-blocks/quick-start)
                *   [Block schema](https://shopify.dev/docs/storefronts/themes/architecture/blocks/theme-blocks/schema)
                *   [Block targeting](https://shopify.dev/docs/storefronts/themes/architecture/blocks/theme-blocks/targeting)
                *   [Static blocks](https://shopify.dev/docs/storefronts/themes/architecture/blocks/theme-blocks/static-blocks)
                *   [Dynamic sources](https://shopify.dev/docs/storefronts/themes/architecture/blocks/theme-blocks/dynamic-sources)

        *   [Section blocks](https://shopify.dev/docs/storefronts/themes/architecture/blocks/section-blocks)
        *   [App blocks](https://shopify.dev/docs/storefronts/themes/architecture/blocks/app-blocks)
        *   [AI generated blocks](https://shopify.dev/docs/storefronts/themes/architecture/blocks/ai-generated-theme-blocks)

*   [Snippets](https://shopify.dev/docs/storefronts/themes/architecture/snippets)

    *    Settings   

        *   [Overview](https://shopify.dev/docs/storefronts/themes/architecture/settings)
        *   [Input settings](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings)
        *   [Sidebar settings](https://shopify.dev/docs/storefronts/themes/architecture/settings/sidebar-settings)
        *   [Dynamic sources](https://shopify.dev/docs/storefronts/themes/architecture/settings/dynamic-sources)
        *   [Fonts](https://shopify.dev/docs/storefronts/themes/architecture/settings/fonts)
        *   [Deprecated settings](https://shopify.dev/docs/storefronts/themes/architecture/settings/deprecated-settings)

    *    Config   

        *   [Overview](https://shopify.dev/docs/storefronts/themes/architecture/config)
        *   [settings _ schema.json](https://shopify.dev/docs/storefronts/themes/architecture/config/settings-schema-json)
        *   [settings _ data.json](https://shopify.dev/docs/storefronts/themes/architecture/config/settings-data-json)
        *   [markets.json](https://shopify.dev/docs/storefronts/themes/architecture/config/markets-json)

    *    Locales   

        *   [Overview](https://shopify.dev/docs/storefronts/themes/architecture/locales)
        *   [Schema locale files](https://shopify.dev/docs/storefronts/themes/architecture/locales/schema-locale-files)
        *   [Storefront locale files](https://shopify.dev/docs/storefronts/themes/architecture/locales/storefront-locale-files)

*   Best practices

*   [Overview](https://shopify.dev/docs/storefronts/themes/best-practices)
*   [Sections and blocks](https://shopify.dev/docs/storefronts/themes/best-practices/templates-sections-blocks)
*   [Java Script and stylesheet tags](https://shopify.dev/docs/storefronts/themes/best-practices/javascript-and-stylesheet-tags)

    *    Performance   

        *   [Overview](https://shopify.dev/docs/storefronts/themes/best-practices/performance)
        *   [Platform](https://shopify.dev/docs/storefronts/themes/best-practices/performance/platform)

*   [Accessibility](https://shopify.dev/docs/storefronts/themes/best-practices/accessibility)

    *    Theme editor   

        *   [Overview](https://shopify.dev/docs/storefronts/themes/best-practices/editor)
        *   [Integrate sections and blocks](https://shopify.dev/docs/storefronts/themes/best-practices/editor/integrate-sections-and-blocks)
        *   [Preview inspector](https://shopify.dev/docs/storefronts/themes/best-practices/editor/preview-inspector)

    *    Design   

        *   [Overview](https://shopify.dev/docs/storefronts/themes/best-practices/design)
        *   [Color system](https://shopify.dev/docs/storefronts/themes/best-practices/design/color-system)

*   [Merchant stores](https://shopify.dev/docs/storefronts/themes/best-practices/merchant-stores)
*   [Version control](https://shopify.dev/docs/storefronts/themes/best-practices/version-control)
*   [File transformation](https://shopify.dev/docs/storefronts/themes/best-practices/file-transformation)
*   [Deceptive code](https://shopify.dev/docs/storefronts/themes/best-practices/deceptive-code)

*   Developer Tools

*   [Overview](https://shopify.dev/docs/storefronts/themes/tools)

    *    CLI   

        *   [Overview](https://shopify.dev/docs/storefronts/themes/tools/cli)
        *   [CI/CD](https://shopify.dev/docs/storefronts/themes/tools/cli/ci-cd)
        *   [Commands](https://shopify.dev/docs/api/shopify-cli/theme)
        *   [Language Server](https://shopify.dev/docs/storefronts/themes/tools/cli/language-server)
        *   [Environments](https://shopify.dev/docs/storefronts/themes/tools/cli/environments)
        *   [Migrate](https://shopify.dev/docs/storefronts/themes/tools/cli/migrate)

        
            *    CLI 2.x   

                *   [Overview](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2)
                *   [Commands](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/commands)
                *   [Install, upgrade, or uninstall](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/upgrade-uninstall)

*   [Git Hub integration](https://shopify.dev/docs/storefronts/themes/tools/github)
*   [VS Code extension](https://shopify.dev/docs/storefronts/themes/tools/shopify-liquid-vscode)
*   [Prettier plugin](https://shopify.dev/docs/storefronts/themes/tools/liquid-prettier-plugin)
*   [Liquid Doc](https://shopify.dev/docs/storefronts/themes/tools/liquid-doc)

    *    Theme Check   

        *   [Overview](https://shopify.dev/docs/storefronts/themes/tools/theme-check)
        *   [Commands](https://shopify.dev/docs/storefronts/themes/tools/theme-check/commands)
        *   [Configuration](https://shopify.dev/docs/storefronts/themes/tools/theme-check/configuration)

        
            *    Checks reference   

                *   [Overview](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks)
                *   [App Block Missing Schema](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/app-block-missing-schema)
                *   [App Block Valid Tags](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/app-block-valid-tags)
                *   [Asset Preload](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/asset-preload)
                *   [Asset Size App Block CSS](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/asset-size-app-block-css)
                *   [Asset Size App Block Javascript](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/asset-size-app-block-javascript)
                *   [Asset Size CSS](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/asset-size-css)
                *   [Asset Size Javascript](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/asset-size-javascript)
                *   [Block Id Usage](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/block-id-usage)
                *   [Capture On Content For Block](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/capture-on-content-for-block)
                *   [Cdn Preconnect](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/cdn-preconnect)
                *   [Content For Header Modification](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/content-for-header-modification)
                *   [Deprecate Bgsizes](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/deprecate-bgsizes)
                *   [Deprecate Lazysizes](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/deprecate-lazysizes)
                *   [Deprecated Filter](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/deprecated-filter)
                *   [Deprecated Fonts On Sections And Blocks](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/deprecated-fonts-on-sections-and-blocks)
                *   [Deprecated Fonts On Settings Schema](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/deprecated-fonts-on-settings-schema)
                *   [Deprecated Tag](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/deprecated-tag)
                *   [Duplicate Content For Arguments](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/duplicate-content-for-arguments)
                *   [Duplicate Render Snippet Arguments](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/duplicate-render-snippet-arguments)
                *   [Empty Block Content](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/empty-block-content)
                *   [Hardcoded Routes](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/hardcoded-routes)
                *   [Img Width And Height](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/img-width-and-height)
                *   [JSON Missing Block](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/json-missing-block)
                *   [JSON Syntax Error](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/json-syntax-error)
                *   [Liquid Free Settings](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/liquid-free-settings)
                *   [Liquid HTML Syntax Error](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/liquid-html-syntax-error)
                *   [Matching Translations](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/matching-translations)
                *   [Matching Schema Translations](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/matching-schema-translations)
                *   [Missing Asset](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/missing-asset)
                *   [Missing Content For Arguments](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/missing-content-for-arguments)
                *   [Missing Render Snippet Arguments](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/missing-render-snippet-arguments)
                *   [Missing Template](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/missing-template)
                *   [Pagination Size](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/pagination-size)
                *   [Parser Blocking Java Script](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/parser-blocking-javascript)
                *   [Remote Asset](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/remote-asset)
                *   [Required Layout Theme Object](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/required-layout-theme-object)
                *   [Schema Presets Block Order](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/schema-presets-block-order)
                *   [Schema Presets Static Blocks](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/schema-presets-static-blocks)
                *   [Static Stylesheet And Javascript Tags](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/static-stylesheet-and-javascript-tags)
                *   [Translation Key Exists](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/translation-key-exists)
                *   [Unclosed HTML Element](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/unclosed-html-element)
                *   [Undefined Object](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/undefined-object)
                *   [Unique Doc Param Names](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/unique-doc-param-names)
                *   [Unique Static Block Id](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/unique-static-block-id)
                *   [Unknown Filter](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/unknown-filter)
                *   [Unrecognized Content For Arguments](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/unrecognized-content-for-arguments)
                *   [Unrecognized Render Snippet Arguments](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/unrecognized-render-snippet-arguments)
                *   [Unsupported Doc Tag](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/unsupported-doc-tag)
                *   [Unused Assign](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/unused-assign)
                *   [Unused Doc Param](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/unused-doc-param)
                *   [Valid Block Target](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/valid-block-target)
                *   [Valid Content For Arguments](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/valid-content-for-arguments)
                *   [Valid Content For Argument Types](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/valid-content-for-argument-types)
                *   [Valid Doc Param Names](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/valid-doc-param-names)
                *   [Valid Doc Param Types](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/valid-doc-param-types)
                *   [Valid HTML Translation](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/valid-html-translation)
                *   [Valid Local Blocks](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/valid-local-blocks)
                *   [Valid Render Snippet Argument Types](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/valid-render-snippet-argument-types)
                *   [Valid Schema](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/valid-schema)
                *   [Valid Schema Name](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/valid-schema-name)
                *   [Valid Settings Key](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/valid-settings-key)
                *   [Valid Static Block Type](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/valid-static-block-type)
                *   [Variable Name](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/variable-name)

        *   [Migrate](https://shopify.dev/docs/storefronts/themes/tools/theme-check/migrate)

*   [Theme editor](https://shopify.dev/docs/storefronts/themes/tools/online-editor)
*   [Code editor](https://shopify.dev/docs/storefronts/themes/tools/code-editor)
*   [Theme Access app](https://shopify.dev/docs/storefronts/themes/tools/theme-access)

    *    Development stores   

        *   [Overview](https://shopify.dev/docs/storefronts/themes/tools/development-stores)
        *   [Test data](https://shopify.dev/docs/storefronts/themes/tools/development-stores/generated-data)
        *   [Transfer a development store](https://shopify.dev/docs/storefronts/themes/tools/development-stores/transfer-development-stores)

*   [Collaborator accounts](https://shopify.dev/docs/storefronts/themes/tools/collaborator-accounts)

    *    Theme Inspector   

        *   [Overview](https://shopify.dev/docs/storefronts/themes/tools/theme-inspector)
        *   [Optimizing themes using Theme Inspector](https://shopify.dev/docs/storefronts/themes/tools/theme-inspector/using-the-theme-inspector)

*   [Lighthouse CI](https://shopify.dev/docs/storefronts/themes/tools/lighthouse-ci)

*   Theme features

*   [Overview](https://shopify.dev/docs/storefronts/themes/theme-features)
*   [Integrating apps](https://shopify.dev/docs/apps/online-store)

    *    Product merchandising   

        *   [Overview](https://shopify.dev/docs/storefronts/themes/product-merchandising)

        
            *    Product variants   

                *   [Overview](https://shopify.dev/docs/storefronts/themes/product-merchandising/variants)
                *   [Support high-variant products](https://shopify.dev/docs/storefronts/themes/product-merchandising/variants/support-high-variant-products)

        
            *    Product recommendations   

                *   [Overview](https://shopify.dev/docs/storefronts/themes/product-merchandising/recommendations)
                *   [Related products](https://shopify.dev/docs/storefronts/themes/product-merchandising/recommendations/related-products)
                *   [Complementary products](https://shopify.dev/docs/storefronts/themes/product-merchandising/recommendations/complementary-products)

        
            *    Media and images   

                *   [Overview](https://shopify.dev/docs/storefronts/themes/product-merchandising/media)
                *   [Support product media](https://shopify.dev/docs/storefronts/themes/product-merchandising/media/support-media)
                *   [Product media UX guidelines](https://shopify.dev/docs/storefronts/themes/product-merchandising/media/media-ux)

        *   [Gift cards](https://shopify.dev/docs/storefronts/themes/product-merchandising/gift-cards)
        *   [Grouped view Bundle emails](https://shopify.dev/docs/storefronts/themes/product-merchandising/bundles-emails)

    *    Pricing and payments   

        *   [Overview](https://shopify.dev/docs/storefronts/themes/pricing-payments)
        *   [Discounts](https://shopify.dev/docs/storefronts/themes/pricing-payments/discounts)

        
            *    Subscriptions   

                *   [Overview](https://shopify.dev/docs/storefronts/themes/pricing-payments/subscriptions)
                *   [Add subscriptions to your theme](https://shopify.dev/docs/storefronts/themes/pricing-payments/subscriptions/add-subscriptions-to-your-theme)
                *   [Subscription UX guidelines](https://shopify.dev/docs/storefronts/themes/pricing-payments/subscriptions/subscription-ux-guidelines)

        
            *    Pre-orders and Try Before You Buy   

                *   [Overview](https://shopify.dev/docs/storefronts/themes/pricing-payments/preorder-tbyb)
                *   [Add pre-orders and TBYB to your theme](https://shopify.dev/docs/storefronts/themes/pricing-payments/preorder-tbyb/add-preorder-tbyb-to-your-theme)
                *   [Pre-orders and TBYB UX guidelines](https://shopify.dev/docs/storefronts/themes/pricing-payments/preorder-tbyb/preorder-tbyb-ux-guidelines)

        *   [Shop Pay Installments](https://shopify.dev/docs/storefronts/themes/pricing-payments/installments)

        
            *    Accelerated checkout   

                *   [About accelerated checkout](https://shopify.dev/docs/storefronts/themes/pricing-payments/accelerated-checkout)
                *   [Upgrade accelerated checkout](https://shopify.dev/docs/storefronts/themes/pricing-payments/accelerated-checkout/upgrade-accelerated-checkout)

        *   [B2B](https://shopify.dev/docs/storefronts/themes/pricing-payments/b2b)
        *   [Unit pricing](https://shopify.dev/docs/storefronts/themes/pricing-payments/unit-pricing)
        *   [Explicit currency formatting](https://shopify.dev/docs/storefronts/themes/pricing-payments/currency-formatting)

    *    Delivery and fulfillment   

        *   [Overview](https://shopify.dev/docs/storefronts/themes/delivery-fulfillment)
        *   [Pickup availability](https://shopify.dev/docs/storefronts/themes/delivery-fulfillment/pickup-availability)

    *    Customer engagement   

        *   [Overview](https://shopify.dev/docs/storefronts/themes/customer-engagement)
        *   [Email consent](https://shopify.dev/docs/storefronts/themes/customer-engagement/email-consent)
        *   [Additional customer information](https://shopify.dev/docs/storefronts/themes/customer-engagement/additional-customer-information)
        *   [Add a contact form](https://shopify.dev/docs/storefronts/themes/customer-engagement/add-contact-form)

    *    Markets   

        *   [Overview](https://shopify.dev/docs/storefronts/themes/markets)
        *   [Support multiple currencies and languages](https://shopify.dev/docs/storefronts/themes/markets/multiple-currencies-languages)
        *   [Detect and set a visitor's optimal localization](https://shopify.dev/docs/storefronts/themes/markets/localization-discovery)
        *   [Country and language selector UX guidelines](https://shopify.dev/docs/storefronts/themes/markets/country-language-ux)

    *    Site navigation and search   

        *   [Overview](https://shopify.dev/docs/storefronts/themes/navigation-search)
        *   [Navigation](https://shopify.dev/docs/storefronts/themes/navigation-search/navigation)

        
            *    Storefront search   

                *   [Overview](https://shopify.dev/docs/storefronts/themes/navigation-search/search)
                *   [Predictive search](https://shopify.dev/docs/storefronts/themes/navigation-search/search/predictive-search)
                *   [Predictive search UX guidelines](https://shopify.dev/docs/storefronts/themes/navigation-search/search/predictive-search-ux)

        
            *    Filtering   

                *   [Overview](https://shopify.dev/docs/storefronts/themes/navigation-search/filtering)

                
                    *    Storefront filtering   

                        *   [Overview](https://shopify.dev/docs/storefronts/themes/navigation-search/filtering/storefront-filtering)
                        *   [Support storefront filtering](https://shopify.dev/docs/storefronts/themes/navigation-search/filtering/storefront-filtering/support-storefront-filtering)
                        *   [Storefront filtering UX guidelines](https://shopify.dev/docs/storefronts/themes/navigation-search/filtering/storefront-filtering/storefront-filtering-ux)

                *   [Tag filtering](https://shopify.dev/docs/storefronts/themes/navigation-search/filtering/tag-filtering)

    *    SEO   

        *   [Overview](https://shopify.dev/docs/storefronts/themes/seo)
        *   [Metadata](https://shopify.dev/docs/storefronts/themes/seo/metadata)
        *   [hreflang tags](https://shopify.dev/docs/storefronts/themes/seo/hreflang)
        *   [robots.txt](https://shopify.dev/docs/storefronts/themes/seo/robots-txt)

    *    Trust and security   

        *   [Overview](https://shopify.dev/docs/storefronts/themes/trust-security)
        *   [Security badges](https://shopify.dev/docs/storefronts/themes/trust-security/security-badges)
        *   [Captcha](https://shopify.dev/docs/storefronts/themes/trust-security/captcha)

    *    Migrating to Online Store 2.0   

        *   [Overview](https://shopify.dev/docs/storefronts/themes/os20)
        *   [Assessment](https://shopify.dev/docs/storefronts/themes/os20/assessment)
        *   [Migration guide](https://shopify.dev/docs/storefronts/themes/os20/migration)

*   [Login redirects](https://shopify.dev/docs/storefronts/themes/login)
*   [Troubleshooting](https://shopify.dev/docs/storefronts/themes/troubleshooting)

*   Sell themes

    *    Theme Store   

        *   [Overview](https://shopify.dev/docs/storefronts/themes/store)
        *   [Requirements](https://shopify.dev/docs/storefronts/themes/store/requirements)

        
            *    Testing   

                *   [Overview](https://shopify.dev/docs/storefronts/themes/store/test-theme)
                *   [Testing assets](https://shopify.dev/docs/storefronts/themes/store/test-theme/assets)
                *   [Testing checklist](https://shopify.dev/docs/storefronts/themes/store/test-theme/checklist)

        
            *    Review process   

                *   [Submitting a theme](https://shopify.dev/docs/storefronts/themes/store/review-process/submit-theme)
                *   [Theme Store listings](https://shopify.dev/docs/storefronts/themes/store/review-process/listings)
                *   [Common theme rejections](https://shopify.dev/docs/storefronts/themes/store/review-process/common-theme-rejections)

        
            *    Theme success   

                *   [Overview](https://shopify.dev/docs/storefronts/themes/store/success)
                *   [Prohibited actions](https://shopify.dev/docs/storefronts/themes/store/success/prohibited-actions)
                *   [Managing theme reviews](https://shopify.dev/docs/storefronts/themes/store/success/managing-theme-reviews)
                *   [Brand asset guidance](https://shopify.dev/docs/storefronts/themes/store/success/brand-assets)
                *   [Updating your theme](https://shopify.dev/docs/storefronts/themes/store/success/updates)
                *   [Removing a theme](https://shopify.dev/docs/storefronts/themes/store/success/remove-theme)

        *   [Theme revenue share](https://shopify.dev/docs/storefronts/themes/store/revenue-share)

On this page

Migrating templates to Online Store 2.0
=======================================

Many Online Store 2.0 features rely on [JSON templates](https://shopify.dev/docs/storefronts/themes/architecture/templates). You can migrate your theme to add support for these features by converting a Liquid template into a JSON template, and moving any required Liquid code or HTML into sections that you can include in the new JSON template.

In this tutorial, you'll move the code from a Liquid template file into a section file, and then include that section file in a new JSON template. You'll also add support for app blocks to your sections.

This tutorial uses Debut as an example, and moves code from a `product.liquid` template file into a `product-template.liquid` section file, which can then be included in a new `product.json` template.

You can perform all of these steps using [Shopify CLI](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/commands) or the [code editor](https://shopify.dev/docs/storefronts/themes/tools/code-editor).

Requirements
------------

[Anchor link to section titled "Requirements"](https://shopify.dev/docs/storefronts/themes/os20/migration#requirements)

Before you start, do the following:

*   Identify the theme that you want to migrate.
*   If you want to migrate your theme using your local development environment and Shopify CLI: 
    *   [Install](https://shopify.dev/docs/api/shopify-cli) Shopify CLI.
    *   Make sure that you have a [collaborator account](https://shopify.dev/docs/storefronts/themes/tools/collaborator-accounts) or a [staff account](https://help.shopify.com/manual/your-account/staff-accounts) for the store you want to work on, or you're the owner of the store. If you have a collaborator account or staff account, then you must be granted the **Manage themes** permission or **Themes** permission for the store. Store owners have these permissions by default.
    *   Note the URL of the store that you want to work on.

Step 1: Back up the theme
-------------------------

[Anchor link to section titled "Step 1: Back up the theme"](https://shopify.dev/docs/storefronts/themes/os20/migration#step-1-back-up-the-theme)

After you identify the theme that you want to work on, make a copy of it.

If you're editing the theme using the code editor, then [duplicate](https://help.shopify.com/manual/online-store/themes/managing-themes/duplicating-themes) the theme. Make sure that the theme is unpublished while you're editing it. This is because you'll be removing files from the theme, which would impact the live storefront. You might also need a back-up copy to reference or revert to later.

If you're editing the theme locally using Shopify CLI, then download the theme files using the [`shopify theme pull`](https://shopify.dev/docs/api/shopify-cli/theme/theme-pull) command.

Step 2: Identify sections and remove section references
-------------------------------------------------------

[Anchor link to section titled "Step 2: Identify sections and remove section references"](https://shopify.dev/docs/storefronts/themes/os20/migration#step-2-identify-sections-and-remove-section-references)

To start converting your Liquid template into a JSON template, you must make note of and then remove any `{% section %}` tags.

You need to remove these references so that you can move the rest of the code into a section file. Section files can't contain references to other section files.

1.   Open your theme in the code editor or your local development environment.
2.   Locate the `product.liquid` file in the `/templates` directory.
3.   Search for any `{% section %}` tags where sections are being included. Note their names and where they are located.

For example, in Debut, there are two sections included at the top of the template:

Copy   9 1 2   {%section'product-template'%} {%section'product-recommendations'%}           
The first section tag references the `product-template` section, which contains most of the markup needed to render the product page. That includes the product title, product images, add to cart button, and more.

Next is a reference to the `product-recommendations` section, which displays a list of products automatically selected as suggestions for customers.

4.   After you've found any `{% section %}` tags and made a note of their location, delete the tags from the `product.liquid` file.

Step 3: Move code from the template into a section
--------------------------------------------------

[Anchor link to section titled "Step 3: Move code from the template into a section"](https://shopify.dev/docs/storefronts/themes/os20/migration#step-3-move-code-from-the-template-into-a-section)

After you remove the `{% section %}` tags from the template code, you need to decide where to move it. You can move this code to an existing section or a new section.

### Option 1: Add code to an existing section

[Anchor link to section titled "Option 1: Add code to an existing section"](https://shopify.dev/docs/storefronts/themes/os20/migration#option-1-add-code-to-an-existing-section)

You might already have a section that renders a large portion of the code for a page. For example, in Debut, the `product-template` section contains a portion of the code for the product page.

1.   Open the section file where you want to add the template code.
2.   Copy the remaining code from `product.liquid`.
3.   Paste the code into the section file above the opening `{% schema %}` tags.

### Option 2: Add code to a new section

[Anchor link to section titled "Option 2: Add code to a new section"](https://shopify.dev/docs/storefronts/themes/os20/migration#option-2-add-code-to-a-new-section)

If none of the existing section files in your theme are appropriate, then you can create a new section to host your Liquid template code.

1.   Create a new file in the `/sections` directory. For example, `product-content.liquid`. If you're creating the section through the code editor, then delete the placeholder code for the section.
2.   After you create your new section file, copy the remaining code from the `product.liquid` file and paste it into the empty section file.

Step 4: Delete the Liquid template file
---------------------------------------

[Anchor link to section titled "Step 4: Delete the Liquid template file"](https://shopify.dev/docs/storefronts/themes/os20/migration#step-4-delete-the-liquid-template-file)

After you copy the code from `product.liquid`, delete `product.liquid` from the `/templates` directory. This is because it will be replaced with a `product.json` file, and a `product.liquid` and `product.json` file can't be stored in the `/templates` directory at the same time.

Step 5: Create a JSON template file
-----------------------------------

[Anchor link to section titled "Step 5: Create a JSON template file"](https://shopify.dev/docs/storefronts/themes/os20/migration#step-5-create-a-json-template-file)

After the `product.liquid` file has been deleted, you can create the replacement JSON template.

1.   Create a new file in the `/templates` directory called `product.json`:

    *   If you're using the code editor: 
        1.   Select **Add a new template**.
        2.   From the **Create a template for** drop-down menu, choose **Product**.
        3.   Select **JSON** as the template type.

    *   If you're editing the theme locally, then create a new file called `product.json` and save it in the `/templates` directory.

2.   After you create the `product.json` file, replace any default code inside this file with the following:

Copy   99 1 2 3 4 5 6 7 8 9 10   { "sections": { "main": { "type": "product-template" } }, "order": [ "main" ] }           
The `type` property should reference the name of the section file where you transferred the markup of the product template file in step 3.

3.   Save the file.

Step 6: Test the template
-------------------------

[Anchor link to section titled "Step 6: Test the template"](https://shopify.dev/docs/storefronts/themes/os20/migration#step-6-test-the-template)

After you create your new template, open it in the theme editor to make sure that it renders correctly.

To access the theme editor using Shopify CLI:

1.   In a terminal, type `shopify login --store <DOMAIN>`, where `<DOMAIN>` is the store that you want to log in to. Click the link to finish the login process.
2.   Navigate to the working directory for the theme.
3.   Type `shopify theme dev`. The dev command returns a link to the Shopify admin theme editor.

Open the theme editor and navigate to a product page. An **Add section** button should appear in the left sidebar. All the sections that were previously accessible only from the home page should now appear in the **Add section** menu.

Step 7: Add references to sections
----------------------------------

[Anchor link to section titled "Step 7: Add references to sections"](https://shopify.dev/docs/storefronts/themes/os20/migration#step-7-add-references-to-sections)

If the original `product.liquid` template file contained references to additional sections, such as a product recommendations section, then you can define these within the `product.json` file, and then define their order.

1.   Open `product.json`. The file currently references only a main section, the section that contains your migrated code.

Copy   99 1 2 3 4 5 6 7 8 9 10   { "sections": { "main": { "type": "product-template" } }, "order": [ "main" ] }           
2.   Add additional sections using this structure. For example, you can add a reference to a `product-recommendations` section.

In this example, below the `main` object, you can insert a second object called `recommendations`. The `type` property contains the filename of this section:

Copy   99 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15   { "sections": { "main": { "type": "product-template" }, "recommendations": { "type": "product-recommendations" }  }, "order": [ "main"  ] }           
3.   Define the order in which the sections appear.

For example, you can order the `recommendation` section relative to the `main` section.

Within the `order` array, add `recommendations` where the section should appear. In this case, the section should appear below the existing `main` section.

After you define the order, your `product.json` file should look like this:

Copy   99 1 2 3 4 5 6 7 8 9 10 11 12 13 14   { "sections": { "main": { "type": "product-template" }, "recommendations": { "type": "product-recommendations" } }, "order": [ "main", "recommendations" ] }           

When you navigate to the theme editor and select a product page, the product recommendations section should now appear on the page below the product template section.

#### Tip

You can also add a section, or adjust the order of the sections, using the theme editor.

Step 8: Add support for app blocks to sections
----------------------------------------------

[Anchor link to section titled "Step 8: Add support for app blocks to sections"](https://shopify.dev/docs/storefronts/themes/os20/migration#step-8-add-support-for-app-blocks-to-sections)

If you want to let merchants add app blocks to sections in your theme, then you need to make the following changes to your section code:

*   [Add the necessary schema](https://shopify.dev/docs/storefronts/themes/os20/migration#enable-app-blocks-in-the-section-schema)
*   [Render the block content](https://shopify.dev/docs/storefronts/themes/os20/migration#render-app-blocks)

You need to make these changes for every section where you want to support app blocks. [Learn more about supporting app blocks in your theme](https://shopify.dev/docs/storefronts/themes/architecture/blocks/app-blocks).

#### Note

App blocks are built using [theme app extensions](https://shopify.dev/docs/apps/build/online-store/theme-app-extensions), which are currently available only as a developer preview. You can test your updated section code by adding the [product reviews sample app](https://github.com/Shopify/product-reviews-sample-app).

### Enable app blocks in the section schema

[Anchor link to section titled "Enable app blocks in the section schema"](https://shopify.dev/docs/storefronts/themes/os20/migration#enable-app-blocks-in-the-section-schema)

To let merchants add an app block to a section, you need to add blocks of type `@app` to the section's schema. Blocks of type `@app` aren't supported in [statically rendered sections](https://shopify.dev/docs/storefronts/themes/architecture/sections#statically-render-a-section).

For example, to add support for app blocks to the Debut `product-template` section, you can add the code below. Because the section doesn't contain any blocks, you can add a new `blocks` node after the schema's `settings` node.

Copy

9

1

2

3

4

5

6

7

8

"settings": [

 ...

]

"blocks": [

{

"type": "@app"

}

]

### Render app blocks

[Anchor link to section titled "Render app blocks"](https://shopify.dev/docs/storefronts/themes/os20/migration#render-app-blocks)

To render an app block in your theme, check for the appropriate type, and then render the block using a `{% render block %}` tag. You can add this code wherever it makes sense for your section.

For example:

Copy

9

1

2

3

4

5

6

7

{%for block in section.blocks%}

{%case block.type%}

{%when'@app'%}

{%render block%}

 ...

{%endcase%}

{%endfor%}

Step 9: Repeat the process
--------------------------

[Anchor link to section titled "Step 9: Repeat the process"](https://shopify.dev/docs/storefronts/themes/os20/migration#step-9-repeat-the-process)

You can repeat the process outlined above to convert all of the sections in your theme.

Next steps
----------

[Anchor link to section titled "Next steps"](https://shopify.dev/docs/storefronts/themes/os20/migration#next-steps)

After you create new JSON templates based off your Liquid templates, consider enhancing your theme further:

*   **Make your template more modular** - You can extract functionality that existed in the core template code into sections and blocks. For example, you can convert a `Show vendor` checkbox into a block that represents the vendor. [Learn some best practices for using sections and blocks](https://shopify.dev/docs/storefronts/themes/best-practices/templates-sections-blocks).
*   **Connect theme settings to dynamic sources** - You can update your theme's default settings to reference dynamic sources. For example, you can reference a product attribute as a default value of a text box. [Learn about dynamic sources](https://shopify.dev/docs/storefronts/themes/architecture/settings/dynamic-sources).
*   **Add version control to your theme** - To make later theme updates simpler, and to track theme changes made in the theme editor, code editor, and more, you [can connect your theme to a GitHub repository](https://shopify.dev/docs/storefronts/themes/tools/github).
*   **Explore tools for building Shopify themes** - As a part of Online Store 2.0, Shopify released a new suite of developer tools that help you to streamline your theme development and testing process. [Learn more about the tools that are now available](https://shopify.dev/docs/storefronts/themes/tools).

### On this page

*   [Requirements](https://shopify.dev/docs/storefronts/themes/os20/migration#requirements)
*   [Step 1: Back up the theme](https://shopify.dev/docs/storefronts/themes/os20/migration#step-1-back-up-the-theme)
*   [Step 2: Identify sections and remove section references](https://shopify.dev/docs/storefronts/themes/os20/migration#step-2-identify-sections-and-remove-section-references)
*   [Step 3: Move code from the template into a section](https://shopify.dev/docs/storefronts/themes/os20/migration#step-3-move-code-from-the-template-into-a-section)
*   [Step 4: Delete the Liquid template file](https://shopify.dev/docs/storefronts/themes/os20/migration#step-4-delete-the-liquid-template-file)
*   [Step 5: Create a JSON template file](https://shopify.dev/docs/storefronts/themes/os20/migration#step-5-create-a-json-template-file)
*   [Step 6: Test the template](https://shopify.dev/docs/storefronts/themes/os20/migration#step-6-test-the-template)
*   [Step 7: Add references to sections](https://shopify.dev/docs/storefronts/themes/os20/migration#step-7-add-references-to-sections)
*   [Step 8: Add support for app blocks to sections](https://shopify.dev/docs/storefronts/themes/os20/migration#step-8-add-support-for-app-blocks-to-sections)
*   [Step 9: Repeat the process](https://shopify.dev/docs/storefronts/themes/os20/migration#step-9-repeat-the-process)
*   [Next steps](https://shopify.dev/docs/storefronts/themes/os20/migration#next-steps)

### Updates

*   [Developer changelog](https://shopify.dev/changelog)
*   [Shopify Partners Slack](https://shopifypartners.slack.com/)
*   [Shopify Editions](https://www.shopify.com/editions)

### Business growth

*   [Shopify Partners Program](https://www.shopify.com/partners)
*   [Shopify App Store](https://apps.shopify.com/)
*   [Shopify Academy](https://academy.shopify.com/page/developers?itcat=shopifydev-footer-business-growth&itterm=developers)

### Legal

*   [Terms of service](https://www.shopify.com/legal/terms)
*   [API terms of use](https://www.shopify.com/legal/api-terms)
*   [Privacy policy](https://www.shopify.com/legal/privacy)
*   [Partners Program Agreement](https://www.shopify.com/partners/terms)

### Shopify

*   [About Shopify](https://www.shopify.com/about)
*   [Shopify Plus](https://www.shopify.com/plus)
*   [Careers](https://www.shopify.com/careers)
*   [Investors](https://investors.shopify.com/home/default.aspx)
*   [Press and media](https://shopify.com/news)

.dev Assistant

Shopify uses cookies to provide necessary site functionality and improve your experience. By using our website, you agree to our [privacy policy](https://www.shopify.com/legal/privacy) and our [cookie policy](https://www.shopify.com/legal/cookies).

OK

Opens in a new window

---
title: "Customize Checkout"
description: "Shopify theme documentation for customize checkout"
date: "2025-07-29"
source: "https://shopify.dev/docs/storefronts/themes/architecture/layouts/checkout-liquid/customize-checkout"
sections: ['Storefronts', 'Themes', 'Architecture', 'Layouts', 'Checkout Liquid']
tags: ["shopify", "themes", "documentation"]
---

Title: Best practices for editing checkout.liquid

URL Source: https://shopify.dev/docs/storefronts/themes/architecture/layouts/checkout-liquid/customize-checkout

Markdown Content:
Best practices for editing checkout.liquid

===============

[Skip to main content](https://shopify.dev/docs/storefronts/themes/architecture/layouts/checkout-liquid/customize-checkout#Main)

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

Best practices for editing checkout.liquid
==========================================

#### Deprecated

`checkout.liquid` is now unsupported for the Information, Shipping, and Payment checkout steps. `checkout.liquid`, additional scripts, and script tags are deprecated for the **Thank you** and **Order status** pages and will be sunset on August 28, 2025.

Stores that currently use `checkout.liquid` for the **Thank you** and **Order status** pages need to [upgrade to Shopify Extensions in Checkout](https://www.shopify.com/checkout#advanced-customizations) before the deadline.

[Shopify Scripts](https://shopify.dev/docs/api/liquid/objects#script) will continue to work alongside Shopify Extensions in Checkout until June 30, 2026.

Learn [how to build checkout extensions](https://shopify.dev/docs/apps/build/checkout/technologies) that extend the functionality of Shopify checkout.

#### Caution

Before you make changes to your checkout, it's recommended that you back up the current version of the code in your `checkout.liquid` file. To learn more about backing up your theme, refer to [Downloading themes](https://help.shopify.com/manual/online-store/themes/managing-themes/downloading-themes) or [Duplicating themes](https://help.shopify.com/manual/online-store/themes/managing-themes/duplicating-themes).

If you're on Shopify Plus, then you can get access to the `checkout.liquid` layout. However, if you make changes to this layout, then you'll need to [manually upgrade it](https://help.shopify.com/en/manual/checkout-settings/checkout-upgrade) whenever Shopify releases an upgrade.

Document Object Model (DOM) dependency
--------------------------------------

[Anchor link to section titled "Document Object Model (DOM) dependency"](https://shopify.dev/docs/storefronts/themes/architecture/layouts/checkout-liquid/customize-checkout#document-object-model-dom-dependency)

One of the biggest considerations to make when implementing checkout modifications is how DOM-dependent your code is. As Shopify releases checkout upgrades, the content output by the Liquid drops in `checkout.liquid`, and in some cases by the `checkout.liquid` content itself, is updated. This means that if your customizations depend on that content, then they could break with new upgrades. It’s always best to minimize DOM dependency to reduce future support debt for your team.

#### Tip

Other than adding content only outside of the Liquid drops, the most DOM-independent method for accessing elements is to reference `data` and `name` attributes, as these are less likely to be changed across upgrades.

Add custom code
---------------

[Anchor link to section titled "Add custom code"](https://shopify.dev/docs/storefronts/themes/architecture/layouts/checkout-liquid/customize-checkout#add-custom-code)

When making changes, you should keep all of the relevant code for a specific customization in a single snippet. This reduces the risk of conflict with other code, and generally makes the code easier to read.

Also, any time that a change is made, it's recommended that you place a comment at the beginning of the change noting who made it, and when.

Example

Copy

9

1

{% comment %} Added by Name from Company on September 21 2018 {% endcomment %}

Add killswitches
----------------

[Anchor link to section titled "Add killswitches"](https://shopify.dev/docs/storefronts/themes/architecture/layouts/checkout-liquid/customize-checkout#add-killswitches)

When customizing `checkout.liquid`, you're more likely to run into issues or conflicts in the checkout, possibly preventing sales, so it's a good idea to wrap your customizations in a killswitch (a theme setting). This allows you to temporarily disable the customization to get the checkout functioning quickly, which gives you time to troubleshoot issues.

General customization approach
------------------------------

[Anchor link to section titled "General customization approach"](https://shopify.dev/docs/storefronts/themes/architecture/layouts/checkout-liquid/customize-checkout#general-customization-approach)

In general, the approach for making customizations is the following:

*   Create a killswitch theme setting
*   Create a snippet to host your customization
*   Include your snippet, wrapped in your killswitch, in `checkout.liquid`

The following examples show a killswitch theme setting and a snippet inclusion wrapped in a conditional based on the killswitch:

config/settings_schema.json

Copy

9

1

2

3

4

5

{

"type": "checkbox",

"id": "checkout_customization",

"label": "Enables a checkout customization"

},

layout/checkout.liquid

Copy

9

1

2

3

4

{% comment %}Added by Name at Company on September 21, 2018{% endcomment %}

{%if settings.checkout_customization%}

{%render'checkout-customization'%}

{%endif%}

In your snippet, you can do the following:

*   Use the checkout's version of jQuery
*   Watch for the `page:load` and `page:change` events to set up your customization
*   Scope your customization to the appropriate step or page by referencing the following objects: 
    *   `Shopify.Checkout.step`
    *   `Shopify.Checkout.page`
    *   `Shopify.Checkout.OrderStatus`

Copy

9

1

2

3

4

5

6

7

(function($){

$(document).on("page:load page:change",function(){

if(Shopify.Checkout.step==="contact_information"){

// Add content

}

});

})(Checkout.$);

Form submit
-----------

[Anchor link to section titled "Form submit"](https://shopify.dev/docs/storefronts/themes/architecture/layouts/checkout-liquid/customize-checkout#form-submit)

Many checkout customizations require validating data before allowing the customer to move to the next step. Due to the functionality around the main form submit button, the easiest approach is watch for the `click` event on this button, rather than the `submit` field on the form. You should also watch for the use of the enter key and re-route that functionality into a `click` event on the submit button.

#### Caution

All selectors used in the snippet below are placeholders. You'll need to decide on the selector you want to use. Try to avoid [DOM dependency](https://shopify.dev/docs/storefronts/themes/architecture/layouts/checkout-liquid/customize-checkout#document-object-model-dom-dependency).

Copy

99

1

2

3

4

5

6

7

8

9

10

11

12

13

14

15

16

17

18

19

20

21

22

(function($){

$(document).on("page:load page:change",function(){

if(Shopify.Checkout.step==="contact_information"){

$("DEFINE_YOUR_SUBMIT_BUTTON_SELECTOR").on("click",function(e){

e.preventDefault();

if(data is valid){

$("DEFINE_YOUR_MAIN_FORM_SELECTOR").submit();

}else{

// Show an error

}

});

$("DEFINE_YOUR_MAIN_FORM_SELECTOR").on("keyup",function(e){

if(e.keycode===13){

e.preventDefault();

$("DEFINE_YOUR_SUBMIT_BUTTON_SELECTOR").trigger("click");

}

});

}

});

})(Checkout.$);

Common customizations
---------------------

[Anchor link to section titled "Common customizations"](https://shopify.dev/docs/storefronts/themes/architecture/layouts/checkout-liquid/customize-checkout#common-customizations)

The following examples are commonly requested customizations. They all use the [general customization approach](https://shopify.dev/docs/storefronts/themes/architecture/layouts/checkout-liquid/customize-checkout#general-customization-approach) as a starting point.

### Block the use of specific characters in address fields

[Anchor link to section titled "Block the use of specific characters in address fields"](https://shopify.dev/docs/storefronts/themes/architecture/layouts/checkout-liquid/customize-checkout#block-the-use-of-specific-characters-in-address-fields)

To block the use of specific characters in address fields, you need to consider the following cases:

1.   Updates to the associated address fields, such as the `blur` event.

2.   The [form submit](https://shopify.dev/docs/storefronts/themes/architecture/layouts/checkout-liquid/customize-checkout#form-submit) event.

For each of these cases, execute your validation. For example, you could compare any field values with a Regular Expression (Regex). If the data isn't valid, you can show an error and prevent the default functionality.

### Limit the number of characters in address fields

[Anchor link to section titled "Limit the number of characters in address fields"](https://shopify.dev/docs/storefronts/themes/architecture/layouts/checkout-liquid/customize-checkout#limit-the-number-of-characters-in-address-fields)

To limit the number of characters in address fields, add a `maxlength` attribute to any associated fields, as shown in the following example.

#### Note

The selector used below is a placeholder. You'll need to decide on the selector you want to use. Try to avoid [DOM dependency](https://shopify.dev/docs/storefronts/themes/architecture/layouts/checkout-liquid/customize-checkout#document-object-model-dom-dependency).

Copy

9

1

$("DEFINE_YOUR_FIELD_SELECTOR").attr("maxlength",your_value);

The `maxlength` attribute only prevents additional characters from being entered. To ensure a good user experience, you should add a message that appears when a customer hits the character limit.

### Add a required Terms of Service checkbox

[Anchor link to section titled "Add a required Terms of Service checkbox"](https://shopify.dev/docs/storefronts/themes/architecture/layouts/checkout-liquid/customize-checkout#add-a-required-terms-of-service-checkbox)

To add a required checkbox for agreeing to Terms of Service, create a checkbox on the page, then follow the [form submit](https://shopify.dev/docs/storefronts/themes/architecture/layouts/checkout-liquid/customize-checkout#form-submit) event to check whether the checkbox has been checked before allowing the customer to proceed. It's also a good idea to use a [checkout attribute](https://shopify.dev/docs/storefronts/themes/architecture/layouts/checkout-liquid#capture-checkout-attributes) to save the value of the checkbox.

### On this page

*   [Document Object Model (DOM) dependency](https://shopify.dev/docs/storefronts/themes/architecture/layouts/checkout-liquid/customize-checkout#document-object-model-dom-dependency)
*   [Add custom code](https://shopify.dev/docs/storefronts/themes/architecture/layouts/checkout-liquid/customize-checkout#add-custom-code)
*   [Add killswitches](https://shopify.dev/docs/storefronts/themes/architecture/layouts/checkout-liquid/customize-checkout#add-killswitches)
*   [General customization approach](https://shopify.dev/docs/storefronts/themes/architecture/layouts/checkout-liquid/customize-checkout#general-customization-approach)
*   [Form submit](https://shopify.dev/docs/storefronts/themes/architecture/layouts/checkout-liquid/customize-checkout#form-submit)
*   [Common customizations](https://shopify.dev/docs/storefronts/themes/architecture/layouts/checkout-liquid/customize-checkout#common-customizations)

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

---
title: "CI/CD"
source: https://shopify.dev/docs/storefronts/themes/tools/cli/ci-cd
sections: Developer Tools > Cli
created: 2025-07-29 15:27:54
---

Title: Use Shopify CLI in a CI/CD pipeline

URL Source: https://shopify.dev/docs/storefronts/themes/tools/cli/ci-cd

Markdown Content:
Use Shopify CLI in a CI/CD pipeline

===============

[Skip to main content](https://shopify.dev/docs/storefronts/themes/tools/cli/ci-cd#Main)

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

Use Shopify CLI in a CI/CD pipeline
===================================

If you have a theme that you want to work with programmatically, then you can integrate Shopify CLI into your CI/CD pipeline to perform actions like pushing, pulling, and publishing a theme.

What you'll learn
-----------------

[Anchor link to section titled "What you'll learn"](https://shopify.dev/docs/storefronts/themes/tools/cli/ci-cd#what-youll-learn)

In this tutorial, you'll learn how to set up your CI/CD pipeline to work with themes programmatically. To do so, you'll gather the credentials necessary to run the CLI commands, and then add a step to your CI/CD pipeline that installs Shopify CLI and runs CLI commands.

Requirements
------------

[Anchor link to section titled "Requirements"](https://shopify.dev/docs/storefronts/themes/tools/cli/ci-cd#requirements)

*   [Shopify CLI 3.20 or higher](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/commands)

#### Tip

[Learn how to check your Shopify CLI version](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/commands#version).

Step 1: Get a Theme Access password for the store
-------------------------------------------------

[Anchor link to section titled "Step 1: Get a Theme Access password for the store"](https://shopify.dev/docs/storefronts/themes/tools/cli/ci-cd#step-1-get-a-theme-access-password-for-the-store)

For each store that you want to interact with programmatically using Shopify CLI, you need to get a Theme Access password. These are generated using the [Theme Access](https://apps.shopify.com/theme-access) app.

To learn about the requirements for installing and using the Theme Access app, and instructions on how to generate a new password, refer to [Manage theme access](https://shopify.dev/docs/storefronts/themes/tools/theme-access).

Step 2: Integrate Shopify CLI into your pipeline
------------------------------------------------

[Anchor link to section titled "Step 2: Integrate Shopify CLI into your pipeline"](https://shopify.dev/docs/storefronts/themes/tools/cli/ci-cd#step-2-integrate-shopify-cli-into-your-pipeline)

After you get a Theme Access password for the store, you can integrate Shopify CLI into your continuous deployment pipeline using your CI/CD provider.

The CD pipeline step should install Shopify CLI and all of its [dependencies](https://shopify.dev/docs/api/shopify-cli#requirements).

To run Shopify CLI theme commands programmatically using your CD pipeline step, include the following:

*   Environment variables (or equivalent flags):

| Name | Required? | Value |
| --- | --- | --- |
| `SHOPIFY_CLI_THEME_TOKEN` | Yes | The [Theme Access password](https://shopify.dev/docs/storefronts/themes/tools/cli/ci-cd#step-1-get-a-theme-access-password-for-the-store) that you generated or were given by a merchant |
| `SHOPIFY_FLAG_STORE` | Yes | The store that you want to interact with |
| `SHOPIFY_FLAG_FORCE` | No | Pass this variable with a value of `1` to turn off interactive prompts. You may want to use this variable if your Shopify CLI pipeline step is timing out. | 
Where possible, you should protect the Theme Access password by masking it or storing it as a secret.

*   A step that sets up Node.js.

*   A step that installs Shopify CLI globally.

*   A step that runs the CLI command that you want to execute.

### Example (GitHub Actions)

[Anchor link to section titled "Example (GitHub Actions)"](https://shopify.dev/docs/storefronts/themes/tools/cli/ci-cd#example-github-actions)

Below is an example of a step that you might add to your GitHub Actions workflow. It pushes a theme to a Shopify store when code is pushed to the `main` branch.

.github/workflows/deploy-theme.yml

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

23

24

name: Theme deploy

on: [push]

jobs:

 deploy:

 name: Deploy

 runs-on: ubuntu-latest

 steps:

 - uses: actions/checkout@v4

 - uses: actions/setup-node@v4

 with:

 node-version: 20

 - name: Install Shopify CLI

 run: npm install -g @shopify/cli

 - name: Upload theme

 run: |

 shopify theme push \

 --json \

 --theme your-theme-name-or-id \

 --store ${{ secrets.SHOPIFY_FLAG_STORE }} \

 --password ${{ secrets.SHOPIFY_CLI_THEME_TOKEN }}

### On this page

*   [What you'll learn](https://shopify.dev/docs/storefronts/themes/tools/cli/ci-cd#what-youll-learn)
*   [Requirements](https://shopify.dev/docs/storefronts/themes/tools/cli/ci-cd#requirements)
*   [Step 1: Get a Theme Access password for the store](https://shopify.dev/docs/storefronts/themes/tools/cli/ci-cd#step-1-get-a-theme-access-password-for-the-store)
*   [Step 2: Integrate Shopify CLI into your pipeline](https://shopify.dev/docs/storefronts/themes/tools/cli/ci-cd#step-2-integrate-shopify-cli-into-your-pipeline)

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

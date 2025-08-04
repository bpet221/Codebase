---
title: "Install, upgrade, or uninstall"
source: https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/upgrade-uninstall
sections: Developer Tools > Cli > Cli 2
created: 2025-07-29 15:28:21
---

Title: Install, upgrade, or uninstall Shopify CLI 2.x

URL Source: https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/upgrade-uninstall

Markdown Content:
Install, upgrade, or uninstall Shopify CLI 2.x

===============

[Skip to main content](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/upgrade-uninstall#Main)

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

Install, upgrade, or uninstall Shopify CLI 2.x
==============================================

This reference guide contains information about upgrading Shopify CLI, migrating from a legacy version, and uninstalling Shopify CLI.

#### Deprecated

This documentation is for the previous major version of Shopify CLI. Unless specifically instructed, you should use [the new version of Shopify CLI](https://shopify.dev/docs/api/shopify-cli/theme) (version 3), which provides a more streamlined theme development experience.

Shopify CLI 2.x is deprecated, and no longer supported by Shopify.

[Learn how to migrate to Shopify CLI 3.x](https://shopify.dev/docs/storefronts/themes/tools/cli/migrate).

Install Shopify CLI 2.x
-----------------------

[Anchor link to section titled "Install Shopify CLI 2.x"](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/upgrade-uninstall#install-shopify-cli-2-x)

If you need to, you can install Shopify CLI 2.x. You can install Shopify CLI 2.x on [Windows](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/upgrade-uninstall#windows), [macOS](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/upgrade-uninstall#macos), or [Linux](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/upgrade-uninstall#linux). Use your computer's command line to install Shopify CLI from one of the supported package managers.

### Requirements

[Anchor link to section titled "Requirements"](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/upgrade-uninstall#requirements)

To install and run Shopify CLI, you need to have the following installed on your computer:

*   [Ruby](https://www.ruby-lang.org/en/) or [Ruby+Devkit using RubyInstaller for Windows](https://rubyinstaller.org/downloads/) 2.7 or higher
*   [Git](https://git-scm.com/downloads)

### Windows

[Anchor link to section titled "Windows"](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/upgrade-uninstall#windows)

If you want to use Shopify CLI natively on Windows 10, then first make sure that you've installed Ruby+Devkit using [RubyInstaller for Windows](https://rubyinstaller.org/downloads/) (version 2.7 or higher).

Alternatively, you can use Shopify CLI using Windows Subsystem for Linux, in which case you need to install the following:

*   [Windows Subsystem for Linux](https://docs.microsoft.com/windows/wsl/install-win10)
*   [Ubuntu VM](https://www.microsoft.com/p/ubuntu/9nblggh4msv6)

After you install the prerequisites, you can install Shopify CLI as a Ruby gem using the [RubyGems.org](https://rubygems.org/) package manager. In a new terminal window, navigate to your home directory and run the following command:

Terminal

Copy

 $

 $

gem install shopify-cli

### MacOS

[Anchor link to section titled "MacOS"](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/upgrade-uninstall#macos)

Shopify CLI is available for macOS through [RubyGems.org](https://rubygems.org/).

#### RubyGems.org

[Anchor link to section titled "RubyGems.org"](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/upgrade-uninstall#rubygems-org)

In a new terminal window, navigate to your home directory and run the following command:

Terminal

Copy

 $

 $

gem install shopify-cli

### Linux

[Anchor link to section titled "Linux"](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/upgrade-uninstall#linux)

Shopify CLI is available for Linux distributions through [RubyGems.org](https://rubygems.org/), as well as through **apt** or **yum**.

#### RubyGems.org

[Anchor link to section titled "RubyGems.org"](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/upgrade-uninstall#rubygems-org)

In a new terminal window, navigate to your home directory and run the following command:

Terminal

Copy

 $

 $

gem install shopify-cli

#### apt (Debian, Ubuntu)

[Anchor link to section titled "apt (Debian, Ubuntu)"](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/upgrade-uninstall#apt-debian-ubuntu)

On Debian-based Linux systems, Shopify CLI is available to install with `apt`.

1.   Download the latest Shopify CLI `.deb` file from the [releases page](https://github.com/Shopify/shopify-cli/releases) on GitHub. Note the file’s location for the next step.
2.   Run the following command. Make sure to replace `/path/to/download/shopify-cli-x.y.z.deb` with the path to your file's location.

Terminal Copy    $  $   sudo apt install/path/to/download/shopify-cli-x.y.z.deb           

#### yum (CentOS 8+, Fedora, Red Hat, SUSE Linux)

[Anchor link to section titled "yum (CentOS 8+, Fedora, Red Hat, SUSE Linux)"](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/upgrade-uninstall#yum-centos-8-fedora-red-hat-suse-linux)

On RPM-based Linux systems, Shopify CLI is available to install with `yum`.

1.   Download the latest Shopify CLI `.rpm` file from the [releases page](https://github.com/Shopify/shopify-cli/releases) on GitHub. Note the file’s location for the next step.
2.   Run the following command. Make sure to replace `/path/to/download/shopify-cli-x.y.z.rpm` with the path to your file's location.

Terminal Copy    $  $   sudo yum install/path/to/download/shopify-cli-x.y.z.rpm           

### Verify the installation

[Anchor link to section titled "Verify the installation"](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/upgrade-uninstall#verify-the-installation)

To verify that Shopify CLI 2.x is installed properly, run the following command:

Terminal

Copy

 $

 $

shopify version

The command returns a version number.

Upgrade Shopify CLI
-------------------

[Anchor link to section titled "Upgrade Shopify CLI"](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/upgrade-uninstall#upgrade-shopify-cli)

You can manage upgrades to Shopify CLI with the package manager for your platform. You must use the same package manager to upgrade that you originally used to install Shopify CLI.

For extension development, you might also need to [update specific node modules manually](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/upgrade-uninstall#update-node-modules-for-extension-development) to use all of the latest features.

### Homebrew (macOS)

[Anchor link to section titled "Homebrew (macOS)"](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/upgrade-uninstall#homebrew-macos)

Terminal

Copy

 $

 $

 $

brew update

brew upgrade shopify-cli@2

#### Caution

As of Shopify CLI version 3.20.1, running `brew upgrade shopify-cli` installs Shopify CLI 3.x. If you want to keep using Shopify CLI 2, then you need to install it again using `brew install shopify-cli@2`.

If you install Shopify CLI using this formula, then you need to run commands using the `shopify2` program name (for example, `shopify2 theme push` or `shopify2 extension push`).

### apt (Debian, Ubuntu)

[Anchor link to section titled "apt (Debian, Ubuntu)"](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/upgrade-uninstall#apt-debian-ubuntu)

1.   Download the latest `.deb` file for Shopify CLI from the [releases page](https://github.com/Shopify/shopify-cli/releases).
2.   Install the downloaded file and make sure to replace `/path/to/download/shopify-cli-x.y.z.deb` with the path to your file's location:

Terminal Copy    $  $   sudo apt install/path/to/downloaded/shopify-cli-x.y.z.deb           

### yum (CentOS 8+, Fedora, Red Hat, SUSE)

[Anchor link to section titled "yum (CentOS 8+, Fedora, Red Hat, SUSE)"](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/upgrade-uninstall#yum-centos-8-fedora-red-hat-suse)

1.   Download the latest `.rpm` file for Shopify CLI from the [releases page](https://github.com/Shopify/shopify-cli/releases).
2.   Install the downloaded file and make sure to replace `/path/to/downloaded/shopify-cli-x.y.x.rpm` with the path to your file's location.

Terminal Copy    $  $   sudo yum install/path/to/downloaded/shopify-cli-x.y.x.rpm           

### RubyGems (macOS, Linux, Windows 10)

[Anchor link to section titled "RubyGems (macOS, Linux, Windows 10)"](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/upgrade-uninstall#rubygems-macos-linux-windows-10)

Terminal

Copy

 $

 $

gem update shopify-cli

Migrate from a legacy version
-----------------------------

[Anchor link to section titled "Migrate from a legacy version"](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/upgrade-uninstall#migrate-from-a-legacy-version)

As of version 0.9.0, Shopify CLI is installed and managed as a software package, instead of as a Git repository. If you’re using a version prior to 0.9.0, then you need to perform a one-time migration to keep using the CLI.

Complete the following steps to remove the legacy version and reinstall Shopify CLI as a package:

1.   [Check if you are using the legacy version](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/upgrade-uninstall#check-if-you-are-using-the-legacy-version).
2.   [Uninstall the legacy Shopify CLI](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/upgrade-uninstall#uninstall-the-legacy-shopify-app-cli).
3.   [Install the new version](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/upgrade-uninstall#install-the-new-version).
4.   [Re-authenticate the CLI](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/upgrade-uninstall#re-authenticate-the-cli).

### Check if you are using the legacy version

[Anchor link to section titled "Check if you are using the legacy version"](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/upgrade-uninstall#check-if-you-are-using-the-legacy-version)

You can determine if you’re using a legacy version by running the following command. If you get a `command not found` error, then you’re using a legacy version.

Terminal

Copy

 $

 $

shopify version

### Uninstall the legacy Shopify App CLI

[Anchor link to section titled "Uninstall the legacy Shopify App CLI"](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/upgrade-uninstall#uninstall-the-legacy-shopify-app-cli)

To uninstall a legacy version of Shopify CLI, complete the following steps:

1.   [Delete the legacy CLI files](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/upgrade-uninstall#delete-the-legacy-cli-files).
2.   [Remove the legacy `shopify` command from your shell profile](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/upgrade-uninstall#remove-the-legacy-shopify-command-from-your-shell-profile).
3.   [Reload your terminal](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/upgrade-uninstall#reload-your-terminal).

#### Delete the legacy CLI files

[Anchor link to section titled "Delete the legacy CLI files"](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/upgrade-uninstall#delete-the-legacy-cli-files)

By default, Shopify CLI was installed in your home directory. All the files are contained in a hidden directory called `.shopify-app-cli`. Run the following command to delete the directory:

Terminal

Copy

 $

 $

rm-rf~/.shopify-app-cli/

#### Remove the legacy `shopify` command from your shell profile

[Anchor link to section titled "Remove the legacy shopify command from your shell profile"](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/upgrade-uninstall#remove-the-legacy-shopify-command-from-your-shell-profile)

During the install process, Shopify CLI added a line to your shell configuration. This line could be located in one of the following files in your home directory:

*   `~/.bash_profile`
*   `~/.zshrc`
*   `~/.bash_login`
*   `~/.profile`
*   `~/.config/fish/config.fish`

The line will look similar to one of the following examples. The exact syntax depends on your system. Deleting or commenting out the relevant line in your shell profile removes `shopify` as a command.

Copy

9

1

2

3

4

5

# The line won’t look *exactly* like this. `HOME_DIR` will instead be the absolute path to your home directory.

if [[ -f /HOME_DIR/.shopify-cli/shopify.sh ]]; then source /HOME_DIR/.shopify-cli/shopify.sh; fi

# The line might not be wrapped in an `if` statement. Example:

[ -f "/HOME_DIR/.shopify-app-cli/shopify.sh" ] && source "/HOME_DIR/.shopify-app-cli/shopify.sh"

#### Reload your terminal

[Anchor link to section titled "Reload your terminal"](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/upgrade-uninstall#reload-your-terminal)

For the changes made to your shell profile to take effect, exit your terminal, and start a new one.

*   If you try running `shopify`, then you should get a `command not found` error.
*   If you have the `shopify_api` gem installed, then you might see the following response:

Copy

9

1

2

shopify command is no longer bundled with shopify_api.

if you need these tools, install the shopify_cli gem

If so, then you also need to upgrade the `shopify_api` gem to v9.2.0 or higher to remove a deprecated `shopify` command that is contained in that gem.

If you also have the `shopify_app` gem (which depends on `shopify_api` gem), then you need to install or update `shopify_api` first, and then uninstall the older version.

To get a list of the versions of `shopify_api` currently installed, run the following command:

Terminal

Copy

 $

 $

gem list shopify_api

To install the latest version, run the following command:

Terminal

Copy

 $

 $

gem install shopify_api

To uninstall the older version, run the following command. Replace `x.y.z` with a version number listed from the `gem list` command. Repeat as needed.

Terminal

Copy

 $

 $

gem uninstall shopify_api-v x.y.z

### Install the new version

[Anchor link to section titled "Install the new version"](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/upgrade-uninstall#install-the-new-version)

After you've finished uninstalling the legacy version, you can install the most recent version of Shopify CLI. Follow the [installation instructions](https://shopify.dev/docs/api/shopify-cli) for your platform.

### Re-authenticate the CLI

[Anchor link to section titled "Re-authenticate the CLI"](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/upgrade-uninstall#re-authenticate-the-cli)

To reauthenticate, with Shopify CLI, enter `shopify login`.

Uninstall Shopify CLI
---------------------

[Anchor link to section titled "Uninstall Shopify CLI"](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/upgrade-uninstall#uninstall-shopify-cli)

Shopify CLI can be removed from your system using the same package manager that you used to install it.

### Homebrew (macOS)

[Anchor link to section titled "Homebrew (macOS)"](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/upgrade-uninstall#homebrew-macos)

Terminal

Copy

 $

 $

 $

brew uninstall shopify-cli# 2.2x or lower

brew uninstall shopify-cli@2# 2.3 or higher

### apt (Debian, Ubuntu)

[Anchor link to section titled "apt (Debian, Ubuntu)"](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/upgrade-uninstall#apt-debian-ubuntu)

Terminal

Copy

 $

 $

sudo apt remove shopify-cli

### yum (CentOS 8+, Fedora, Red Hat, SUSE)

[Anchor link to section titled "yum (CentOS 8+, Fedora, Red Hat, SUSE)"](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/upgrade-uninstall#yum-centos-8-fedora-red-hat-suse)

Terminal

Copy

 $

 $

sudo yum remove shopify-cli

### RubyGems (macOS, Linux, Windows 10)

[Anchor link to section titled "RubyGems (macOS, Linux, Windows 10)"](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/upgrade-uninstall#rubygems-macos-linux-windows-10)

Terminal

Copy

 $

 $

gem uninstall shopify-cli

### Uninstall a legacy version

[Anchor link to section titled "Uninstall a legacy version"](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/upgrade-uninstall#uninstall-a-legacy-version)

If you’re using a legacy version of Shopify CLI (lower than `0.9.0`), then you need to [uninstall it manually](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/upgrade-uninstall#uninstall-the-legacy-shopify-app-cli).

Next steps
----------

[Anchor link to section titled "Next steps"](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/upgrade-uninstall#next-steps)

*   Review the [commands](https://shopify.dev/docs/api/shopify-cli/theme) for Shopify CLI.

### On this page

*   [Install Shopify CLI 2.x](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/upgrade-uninstall#install-shopify-cli-2-x)
*   [Upgrade Shopify CLI](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/upgrade-uninstall#upgrade-shopify-cli)
*   [Migrate from a legacy version](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/upgrade-uninstall#migrate-from-a-legacy-version)
*   [Uninstall Shopify CLI](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/upgrade-uninstall#uninstall-shopify-cli)
*   [Next steps](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/upgrade-uninstall#next-steps)

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

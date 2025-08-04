---
title: "Quick Start"
source: https://shopify.dev/docs/storefronts/themes/architecture/blocks/theme-blocks/quick-start
sections: Key concepts > Blocks > Theme Blocks
created: 2025-07-29 15:23:38
---

Title: Quick Start

URL Source: https://shopify.dev/docs/storefronts/themes/architecture/blocks/theme-blocks/quick-start

Markdown Content:
Quick Start

===============

&lt;Picker name=&quot;framework&quot;&gt; &lt;PickerOption name=&quot;liquid&quot; label=&quot;Liquid&quot; /&gt; &lt;/Picker&gt; &lt;Overview&gt; Learn how to build a basic theme block and add it to a section and another block file. Theme blocks are blocks that are defined at the theme level. You can reuse theme blocks across different sections of the theme, unlike [section-defined blocks](/docs/storefronts/themes/architecture/blocks/section-blocks) that can only be used within the section where they&#39;re defined. Additionally, theme blocks can be nested within other theme blocks to create hierarchy. &lt;/Overview&gt; &lt;Requirements&gt; &lt;Requirement href=&quot;/docs/storefronts/themes/architecture/blocks&quot; label=&quot;Understand Blocks at Shopify&quot; /&gt; &lt;Requirement href=&quot;/docs/storefronts/themes/getting-started/create&quot; label=&quot;Create a Theme&quot; /&gt; &lt;/Requirements&gt; &lt;StepSection&gt; &lt;Step&gt; ## Create a theme block At the end of this tutorial, you should have a text block that can be reused across different sections and blocks of the theme. You will add it to a Custom Section and a Group block. &lt;Substep&gt; ### Add a blocks folder Theme blocks are Liquid files that are defined in the `blocks` directory of the theme. To create a theme block, add a Liquid file in the `/blocks` folder of your theme. If your theme doesn&#39;t have a `/blocks` folder yet, then add one at the root of your theme. Add a `text.liquid` file to the `/blocks` folder. &lt;CodeRef href=&quot;https://github.com/Shopify/liquid-docs-code-samples/blob/main/blocks/text.liquid&quot; /&gt; &lt;/Substep&gt; &lt;Substep&gt; ### Write the markup Theme block files contain markup. The markup is any HTML or Liquid content that you want to include in the block. &lt;CodeRef tag=&quot;block.markup&quot; href=&quot;https://github.com/Shopify/liquid-docs-code-samples/blob/main/blocks/text.liquid&quot; /&gt; &lt;/Substep&gt; &lt;Substep&gt; ### Write the schema Theme block files contain a schema. The schema is the ```{% schema %}``` Liquid tag, which is used to configure settings and attributes of the block. [Learn how to write block schema](/docs/storefronts/themes/architecture/blocks/theme-blocks/schema). &lt;Notice type=&quot;info&quot; title=&quot;Tip&quot;&gt;At this step, you&#39;ll be able to reference the theme block in a section file with [block targeting](/docs/storefronts/themes/architecture/blocks/theme-blocks/targeting). To make this block display in the theme editor&#39;s block picker, you need to [add a block preset](/docs/storefronts/themes/architecture/blocks/theme-blocks?extension=liquid#add-a-block-preset).&lt;/Notice&gt; &lt;CodeRef tag=&quot;block.preset&quot; href=&quot;https://github.com/Shopify/liquid-docs-code-samples/blob/main/blocks/text.liquid&quot; /&gt; &lt;/Substep&gt; &lt;Substep&gt; ### Use Liquid objects in blocks Blocks use a few key liquid objects: * Theme blocks reference a [`block`](https://shopify.dev/docs/api/liquid/objects/block) object, which contains the properties and setting values of the block. * Theme blocks can reference the [`section`](https://shopify.dev/docs/api/liquid/objects/section) object of the section that rendered the theme block. * Theme blocks have access to [global objects](https://shopify.dev/docs/api/liquid/objects). In this Text block example, this block references the settings attribute of the block object. Theme blocks cannot access variables created outside the block and cannot be passed variables like when using a [snippet](https://shopify.dev/docs/storefronts/themes/architecture/snippets). &lt;CodeRef tag=&quot;block.markup&quot; href=&quot;https://github.com/Shopify/liquid-docs-code-samples/blob/main/blocks/text.liquid&quot; /&gt; &lt;/Substep&gt; &lt;Substep&gt; ### Add a block preset [Presets](/docs/storefronts/themes/architecture/blocks/theme-blocks/schema#presets) need to be defined in order for the theme block to be available for merchants in the theme editor block picker. You can author multiple presets for the same theme block. In this example, the text theme blocks has two presets called Text and Content. &lt;Codeblock title=&quot;Block presets&quot;&gt; ```json &quot;presets&quot;: [ { &quot;name&quot;: &quot;Text&quot; }, { &quot;name&quot;: &quot;Content&quot;, &quot;settings&quot;: { &quot;text&quot;: &quot;Hello, World!&quot; } } ] ``` &lt;/Codeblock&gt; &lt;CodeRef tag=&quot;block.preset&quot; href=&quot;https://github.com/Shopify/liquid-docs-code-samples/blob/main/blocks/text.liquid&quot; /&gt; &lt;/Substep&gt; &lt;/Step&gt; &lt;Step&gt; ## Use theme blocks in sections After theme blocks are defined in your theme, you need to update the theme&#39;s sections to render blocks. &lt;Notice type=&quot;info&quot; title=&quot;Tip&quot;&gt;Sections can either [define blocks locally](/docs/storefronts/themes/architecture/blocks/section-blocks) or opt-in to supporting theme blocks, but they can&#39;t support both simultaneously.&lt;/Notice&gt; &lt;Substep&gt; ### Render the blocks in Liquid Render the blocks in Liquid using &lt;Codeblock title=&quot;Render blocks in liquid&quot;&gt; ```javascript {% content_for &#39;blocks&#39; %} ``` &lt;/Codeblock&gt; &lt;CodeRef tag=&quot;section.render_blocks&quot; href=&quot;https://github.com/Shopify/liquid-docs-code-samples/blob/main/sections/custom-section.liquid&quot; /&gt; &lt;/Substep&gt; &lt;Substep&gt; ### Update the section schema To accept all theme blocks in a section, add the type `@theme` to the [blocks attribute](/docs/storefronts/themes/architecture/sections/section-schema#blocks) of the [schema](/docs/storefronts/themes/architecture/sections/section-schema) of that section. To be more restrictive about which blocks can be use in specific sections, use [block targeting](/docs/storefronts/themes/architecture/blocks/theme-blocks/targeting). &lt;Codeblock title=&quot;blocks attribute&quot;&gt; ```json &quot;blocks&quot;: [{ &quot;type&quot;: &quot;@theme&quot; }, { &quot;type&quot;: &quot;@app&quot; }], ``` &lt;/Codeblock&gt; &lt;CodeRef tag=&quot;section.blocks&quot; href=&quot;https://github.com/Shopify/liquid-docs-code-samples/blob/main/sections/custom-section.liquid&quot; /&gt; &lt;/Substep&gt; &lt;/Step&gt; &lt;Step&gt; ## Nest blocks in theme blocks Theme blocks can accept other theme and app blocks as children. ![Theme blocks can contain multiple levels of nested blocks](/assets/themes/architecture/nested-blocks-example.png) &lt;Substep&gt; Theme blocks use the [`blocks` attribute](/docs/storefronts/themes/architecture/blocks/theme-blocks/schema#blocks) of their schema and assemble different configurations of these child blocks using the [`presets` attribute](/docs/storefronts/themes/architecture/blocks/theme-blocks/schema#presets). In this example, the Group block has a preset called Column which is nesting the Text block using the `presets` attribute. &lt;Codeblock title=&quot;Group block&#39;s Column preset nests Text blocks&quot;&gt; ```json { &quot;name&quot;: &quot;Column&quot;, &quot;settings&quot;: { &quot;color_scheme&quot;: &quot;scheme-3&quot; }, &quot;blocks&quot;: [ { &quot;type&quot;: &quot;text&quot;, &quot;settings&quot;: { &quot;text&quot;: &quot;&lt;h3&gt;Hello, world!&lt;/h3&gt;&quot; } }, { &quot;type&quot;: &quot;text&quot;, &quot;settings&quot;: { &quot;text&quot;: &quot;&lt;p&gt;How&#39;s it going?&lt;\/p&gt;&quot; } } ] } ``` &lt;/Codeblock&gt; &lt;CodeRef tag=&quot;nesting.block_schema&quot; href=&quot;https://github.com/Shopify/liquid-docs-code-samples/blob/main/blocks/group.liquid&quot; /&gt; &lt;/Substep&gt; &lt;Substep&gt; Each block&#39;s content is rendered by the liquid tag &lt;Codeblock title=&quot;Render blocks in liquid&quot;&gt; ```javascript {% content_for &#39;blocks&#39; %} ``` &lt;/Codeblock&gt; The content is rendered in the order that&#39;s stored in the [JSON template](/docs/storefronts/themes/architecture/templates/json-templates). This is the same rendering mechanism sections use for blocks. &lt;CodeRef tag=&quot;nesting.block_render&quot; href=&quot;https://github.com/Shopify/liquid-docs-code-samples/blob/main/blocks/group.liquid&quot; /&gt; &lt;/Substep&gt; &lt;Notice type=&quot;info&quot; title=&quot;Tip&quot;&gt;Block presets can refer to other theme blocks within the theme. This example refers to the `/blocks/text.liquid` Liquid file created earlier in this tutorial. Learn more about [theme block presets](/docs/storefronts/themes/architecture/blocks/theme-blocks/schema).&lt;/Notice&gt; &lt;/Step&gt; &lt;/StepSection&gt; &lt;NextSteps&gt; ## Next Steps The examples above demonstrate basic theme blocks usage. Theme blocks support several more advanced features to enhance the merchant experience as well as provide flexibility to theme developers. &lt;CardGrid&gt; &lt;LinkCard href=&quot;/docs/storefronts/themes/architecture/blocks/theme-blocks/schema&quot;&gt; #### Theme block schema Learn how to configure theme block settings and attributes through their schema. &lt;/LinkCard&gt; &lt;LinkCard href=&quot;/docs/storefronts/themes/architecture/blocks/theme-blocks/targeting&quot;&gt; #### Theme block availability with targeting Learn how to use targeting in order to restrict which theme blocks can be added by merchants to sections and blocks that accept nested blocks. &lt;/LinkCard&gt; &lt;LinkCard href=&quot;/docs/storefronts/themes/architecture/blocks/theme-blocks/static-blocks&quot;&gt; #### Layout control with static blocks Learn how to have stricter control over the layout of theme blocks and sections using static blocks. &lt;/LinkCard&gt; &lt;LinkCard href=&quot;/docs/storefronts/themes/architecture/blocks/theme-blocks/dynamic-sources&quot;&gt; #### Dynamic sources Learn how to enable more flexibility for merchants by connecting theme blocks to dynamic sources. &lt;/LinkCard&gt; &lt;/CardGrid&gt; &lt;/NextSteps&gt; 

[Skip to main content](https://shopify.dev/docs/storefronts/themes/architecture/blocks/theme-blocks/quick-start#Main)

[![Image 2: shopify.dev](https://cdn.shopify.com/shopifycloud/shopify_dev/bundles/4fad754688bb9dbf6b7d91bd294fd7c00200db68aaf55f416ad2fb01850e48a9.svg)](https://shopify.dev/docs)

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

Quick Start
===========

Learn how to build a basic theme block and add it to a section and another block file.

Theme blocks are blocks that are defined at the theme level. You can reuse theme blocks across different sections of the theme, unlike [section-defined blocks](https://shopify.dev/docs/storefronts/themes/architecture/blocks/section-blocks) that can only be used within the section where they're defined. Additionally, theme blocks can be nested within other theme blocks to create hierarchy.

Requirements
------------

[Understand Blocks at Shopify](https://shopify.dev/docs/storefronts/themes/architecture/blocks)

[Create a Theme](https://shopify.dev/docs/storefronts/themes/getting-started/create)

Project
-------

Framework: 

Liquid

[Anchor link to section titled 'Create a theme block'](https://shopify.dev/docs/storefronts/themes/architecture/blocks/theme-blocks/quick-start#create-a-theme-block)Create a theme block
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

At the end of this tutorial, you should have a text block that can be reused across different sections and blocks of the theme. You will add it to a Custom Section and a Group block.

### [Anchor link to section titled 'Add a blocks folder'](https://shopify.dev/docs/storefronts/themes/architecture/blocks/theme-blocks/quick-start#add-a-blocks-folder)Add a blocks folder

Theme blocks are Liquid files that are defined in the `blocks` directory of the theme. To create a theme block, add a Liquid file in the `/blocks` folder of your theme.

If your theme doesn't have a `/blocks` folder yet, then add one at the root of your theme. Add a `text.liquid` file to the `/blocks` folder.

### [Anchor link to section titled 'Write the markup'](https://shopify.dev/docs/storefronts/themes/architecture/blocks/theme-blocks/quick-start#write-the-markup)Write the markup

Theme block files contain markup.

The markup is any HTML or Liquid content that you want to include in the block.

### [Anchor link to section titled 'Write the schema'](https://shopify.dev/docs/storefronts/themes/architecture/blocks/theme-blocks/quick-start#write-the-schema)Write the schema

Theme block files contain a schema.

The schema is the `{% schema %}` Liquid tag, which is used to configure settings and attributes of the block. [Learn how to write block schema](https://shopify.dev/docs/storefronts/themes/architecture/blocks/theme-blocks/schema).

Tip 

At this step, you'll be able to reference the theme block in a section file with [block targeting](https://shopify.dev/docs/storefronts/themes/architecture/blocks/theme-blocks/targeting). To make this block display in the theme editor's block picker, you need to [add a block preset](https://shopify.dev/docs/storefronts/themes/architecture/blocks/theme-blocks?extension=liquid#add-a-block-preset).

### [Anchor link to section titled 'Use Liquid objects in blocks'](https://shopify.dev/docs/storefronts/themes/architecture/blocks/theme-blocks/quick-start#use-liquid-objects-in-blocks)Use Liquid objects in blocks

Blocks use a few key liquid objects:

*   Theme blocks reference a [`block`](https://shopify.dev/docs/api/liquid/objects/block) object, which contains the properties and setting values of the block.
*   Theme blocks can reference the [`section`](https://shopify.dev/docs/api/liquid/objects/section) object of the section that rendered the theme block.
*   Theme blocks have access to [global objects](https://shopify.dev/docs/api/liquid/objects).

In this Text block example, this block references the settings attribute of the block object.

Theme blocks cannot access variables created outside the block and cannot be passed variables like when using a [snippet](https://shopify.dev/docs/storefronts/themes/architecture/snippets).

### [Anchor link to section titled 'Add a block preset'](https://shopify.dev/docs/storefronts/themes/architecture/blocks/theme-blocks/quick-start#add-a-block-preset)Add a block preset

[Presets](https://shopify.dev/docs/storefronts/themes/architecture/blocks/theme-blocks/schema#presets) need to be defined in order for the theme block to be available for merchants in the theme editor block picker. You can author multiple presets for the same theme block.

In this example, the text theme blocks has two presets called Text and Content.

Block presets

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

9

"presets": [

{"name": "Text"},

{

"name": "Content",

"settings": {

"text": "Hello, World!"

}

}

]

[Anchor link to section titled 'Use theme blocks in sections'](https://shopify.dev/docs/storefronts/themes/architecture/blocks/theme-blocks/quick-start#use-theme-blocks-in-sections)Use theme blocks in sections
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

After theme blocks are defined in your theme, you need to update the theme's sections to render blocks.

Tip 

Sections can either [define blocks locally](https://shopify.dev/docs/storefronts/themes/architecture/blocks/section-blocks) or opt-in to supporting theme blocks, but they can't support both simultaneously.

### [Anchor link to section titled 'Render the blocks in Liquid'](https://shopify.dev/docs/storefronts/themes/architecture/blocks/theme-blocks/quick-start#render-the-blocks-in-liquid)Render the blocks in Liquid

Render the blocks in Liquid using

Render blocks in liquid

Copy

9

1

{% content_for 'blocks'%}

### [Anchor link to section titled 'Update the section schema'](https://shopify.dev/docs/storefronts/themes/architecture/blocks/theme-blocks/quick-start#update-the-section-schema)Update the section schema

To accept all theme blocks in a section, add the type `@theme` to the [blocks attribute](https://shopify.dev/docs/storefronts/themes/architecture/sections/section-schema#blocks) of the [schema](https://shopify.dev/docs/storefronts/themes/architecture/sections/section-schema) of that section. To be more restrictive about which blocks can be use in specific sections, use [block targeting](https://shopify.dev/docs/storefronts/themes/architecture/blocks/theme-blocks/targeting).

Blocks attribute

Copy

9

1

"blocks": [{"type": "@theme"}, {"type": "@app"}],

[Anchor link to section titled 'Nest blocks in theme blocks'](https://shopify.dev/docs/storefronts/themes/architecture/blocks/theme-blocks/quick-start#nest-blocks-in-theme-blocks)Nest blocks in theme blocks
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Theme blocks can accept other theme and app blocks as children. 

![Image 3: Theme blocks can contain multiple levels of nested blocks](https://shopify.dev/assets/themes/architecture/nested-blocks-example.png)

Theme blocks use the [`blocks` attribute](https://shopify.dev/docs/storefronts/themes/architecture/blocks/theme-blocks/schema#blocks) of their schema and assemble different configurations of these child blocks using the [`presets` attribute](https://shopify.dev/docs/storefronts/themes/architecture/blocks/theme-blocks/schema#presets).

In this example, the Group block has a preset called Column which is nesting the Text block using the `presets` attribute.

Group block's Column preset nests Text blocks

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

{

"name": "Column",

"settings": {

"color_scheme": "scheme-3"

},

"blocks": [

{

"type": "text",

"settings": {

"text": "<h3>Hello, world!</h3>"

}

},

{

"type": "text",

"settings": {

"text": "<p>How's it going?<\/p>"

}

}

]

}

Each block's content is rendered by the liquid tag

Render blocks in liquid

Copy

9

1

{% content_for 'blocks'%}

The content is rendered in the order that's stored in the [JSON template](https://shopify.dev/docs/storefronts/themes/architecture/templates/json-templates). This is the same rendering mechanism sections use for blocks.

Tip 

Block presets can refer to other theme blocks within the theme. This example refers to the `/blocks/text.liquid` Liquid file created earlier in this tutorial. Learn more about [theme block presets](https://shopify.dev/docs/storefronts/themes/architecture/blocks/theme-blocks/schema).

Was this page helpful?

Yes No

text.liquid custom-section.liquid group.liquid

Copy

/blocks/text.liquid

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

25

26

27

28

29

30

31

32

33

34

35

36

<div class="text-block text-{{block.settings.alignment}}">

{{block.settings.text}}

</div>

{%stylesheet%}

 .text-left{

text-align:left;

}

 .text-center{

text-align:center;

}

 .text-right{

text-align:right;

}

{%endstylesheet%}

{%schema%}

{

"name": "Text",

"settings": [

{

"type": "richtext",

"id": "text",

"label": "Text"

},

{

"type": "text_alignment",

"id": "alignment",

"label": "Alignment"

},

],

"presets": [

{"name": "Text"},

{

[Anchor link to section titled 'Next Steps'](https://shopify.dev/docs/storefronts/themes/architecture/blocks/theme-blocks/quick-start#next-steps)Next Steps
-----------------------------------------------------------------------------------------------------------------------------------------------------------

The examples above demonstrate basic theme blocks usage. Theme blocks support several more advanced features to enhance the merchant experience as well as provide flexibility to theme developers.

[#### Theme block schema Learn how to configure theme block settings and attributes through their schema.](https://shopify.dev/docs/storefronts/themes/architecture/blocks/theme-blocks/schema)[#### Theme block availability with targeting Learn how to use targeting in order to restrict which theme blocks can be added by merchants to sections and blocks that accept nested blocks.](https://shopify.dev/docs/storefronts/themes/architecture/blocks/theme-blocks/targeting)[#### Layout control with static blocks Learn how to have stricter control over the layout of theme blocks and sections using static blocks.](https://shopify.dev/docs/storefronts/themes/architecture/blocks/theme-blocks/static-blocks)[#### Dynamic sources Learn how to enable more flexibility for merchants by connecting theme blocks to dynamic sources.](https://shopify.dev/docs/storefronts/themes/architecture/blocks/theme-blocks/dynamic-sources)

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

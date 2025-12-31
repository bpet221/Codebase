---
title: Test apps locally
description: How to use the 'shopify app dev' command to test your app locally.
source_url:
  html: 'https://shopify.dev/docs/apps/build/cli-for-apps/test-apps-locally'
  md: 'https://shopify.dev/docs/apps/build/cli-for-apps/test-apps-locally.md'
---

ExpandOn this page

* [Overview of app dev](https://shopify.dev/docs/apps/build/cli-for-apps/test-apps-locally.md#overview-of-app-dev)
* [Develop and test apps as a team](https://shopify.dev/docs/apps/build/cli-for-apps/test-apps-locally.md#develop-and-test-apps-as-a-team)
* [Changes introduced in the Next-Gen Dev Platform](https://shopify.dev/docs/apps/build/cli-for-apps/test-apps-locally.md#changes-introduced-in-the-next-gen-dev-platform)

# Test apps locally

Note

With the Next-Gen Dev Platform, `app dev` allows previewing changes to your app configuration and extensions, fully isolated on your chosen dev store.

[Read more about the improvements to `app dev`](#changes-introduced-in-the-next-gen-dev-platform)

The [`app dev`](https://shopify.dev/docs/api/shopify-cli/app/app-dev) command lets you test your app changes in real-time on a dev store without deploying. This enables you to iterate quickly while developing extensions, modifying app configuration, and building app functionality.

## Terminal

```terminal
shopify app dev
```

***

## Overview of `app dev`

To preview your app on a dev store, Shopify CLI prompts you to select a dev store to use for testing. If you have only one store, then it's selected automatically.

While running, `app dev` performs the following tasks:

* For apps with local app configuration and/or extensions, it creates an app preview on your chosen dev store, and a file watcher to sync local changes with that app preview.
* For apps with [web files](https://shopify.dev/docs/apps/build/cli-for-apps/app-structure#shopify-web-toml), such as those based on the React Router app template, it serves your self-hosted embedded app.
* For apps with extensions that support browser-based preview, such as UI extensions, it starts a local development server for hot module reloading.
* It serves a reverse proxy that routes to these local servers.
* It sets up [external networking](https://shopify.dev/docs/apps/build/cli-for-apps/networking-options) for that proxy server.
* If [enabled in your app config](https://shopify.dev/docs/apps/build/cli-for-apps/app-configuration#build), it updates your app URL to reflect the current tunnel or localhost URL.
  * This change is isolated to the chosen dev store and does not affect the app URL on other stores.
* It serves [GraphiQL for the Admin API](https://shopify.dev/docs/api/usage/api-exploration/admin-graphiql-explorer) using your app's credentials and access scopes.

### When `app dev` stops

When you stop the `app dev` command, the app preview remains on your store. Your app configuration and extensions will remain active there, unless you run [`app dev clean`](https://shopify.dev/docs/api/shopify-cli/app/app-dev-clean):

## Terminal

```terminal
shopify app dev clean
```

The `app dev clean` command restores the active released version of your app on your store. If any extensions or configuration are removed in this process, their related data is deleted as well. For example:

* A Discount function you added during `app dev` isn't in the active app version. Any discounts referencing it are deleted.
* A UI extension you placed and configured via the Checkout Editor isn't in the active app version. This placement and configuration are deleted.

### Reset `app dev` configuration

You can reset the active organization, app instance, and store used by `app dev` via the `--reset` flag:

## Terminal

```terminal
shopify app dev --reset
```

***

## Develop and test apps as a team

Because changes are isolated to a single dev store, app development teams can safely share a single development instance of an app. The recommended approach for app development teams is:

### Step 1: Create a shared development app instance

If necessary, [create a development instance and configuration file](https://shopify.dev/docs/apps/build/cli-for-apps/manage-app-config-files#test-your-app-functionality) for your app using [`app config link`](https://shopify.dev/docs/api/shopify-cli/app/app-config-link). This development instance will be shared by all team members.

Note

For safety, Shopify recommends that the default `shopify.app.toml` file is used for your development instance.

### Step 2: Onboard individual team members

As a team member, you should:

1. Create your own dev store in the Dev Dashboard.

   Note

   The `app dev` command will push configuration and extension changes to your chosen dev store. It's important to have your own store, so that you can work in isolation from other team members.

2. If necessary, switch to the development configuration of your app with [`app config use`](https://shopify.dev/docs/api/shopify-cli/app/app-config-use).

3. Run `app dev` and choose your dev store:

   ## Terminal

   ```terminal
   shopify app dev
   ```

***

## Changes introduced in the Next-Gen Dev Platform

With the Next-Gen Dev Platform, the `app dev` command significantly improves the experience, safety, and functionality of testing your app locally.

| Behavior                                | Dev Platform                                                                                                                                                                                                              | Partner Dashboard                                                                                                                                 |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Isolation of changes                    | Changes made during `app dev` are visible only to the chosen dev store.                                                                                                                                                   | Changes made during `app dev` were visible to any dev store in the organization.                                                                  |
| App URL updates                         | Updates the app preview to use the current tunnel or localhost URL, only for the chosen dev store. The URL is visible in CLI output and the **Dev Console** in Shopify admin. It's not updated in the `shopify.app.toml`. | Updated the app URL for all installed shops and in the `shopify.app.toml`.                                                                        |
| Inclusion of app configuration          | All changes to app configuration are available in the app preview.                                                                                                                                                        | Changes to app configuration required `app deploy`.                                                                                               |
| Inclusion of new and removed extensions | Adding and removing extensions updates the app preview.                                                                                                                                                                   | The `app dev` command required a restart when extensions were added or removed.                                                                   |
| Shopify plan support                    | Supports any Shopify plan that is available for [dev stores](https://shopify.dev/docs/beta/next-gen-dev-platform/development-stores).                                                                                     | Full support for Partner Test stores, partial support for Plus Sandbox stores.                                                                    |
| App installation                        | The app is automatically installed on the chosen dev store.                                                                                                                                                               | You needed to install the app manually.                                                                                                           |
| Access scopes                           | Changes to access scopes are automatically accepted on the chosen dev store.                                                                                                                                              | You had to `app deploy` and accept the scope changes.                                                                                             |
| Shutdown behavior                       | The app preview remains active on the dev store.                                                                                                                                                                          | The dev store reverted to the current released version of the app. Objects with references to extensions not in this version were non-functional. |
| App preview status                      | The **Dev Console** in Shopify admin alerts you of active app previews.                                                                                                                                                   | There was no indication of an active preview.                                                                                                     |

***

* [Overview of app dev](https://shopify.dev/docs/apps/build/cli-for-apps/test-apps-locally.md#overview-of-app-dev)
* [Develop and test apps as a team](https://shopify.dev/docs/apps/build/cli-for-apps/test-apps-locally.md#develop-and-test-apps-as-a-team)
* [Changes introduced in the Next-Gen Dev Platform](https://shopify.dev/docs/apps/build/cli-for-apps/test-apps-locally.md#changes-introduced-in-the-next-gen-dev-platform)
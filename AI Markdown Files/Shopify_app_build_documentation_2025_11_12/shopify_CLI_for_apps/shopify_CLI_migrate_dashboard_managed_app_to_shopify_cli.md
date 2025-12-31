---
title: Migrate from a Dev Dashboard-managed app to Shopify CLI
description: Learn how to set-up a CLI environment for your Dashboard-managed Shopify app.
source_url:
  html: 'https://shopify.dev/docs/apps/build/cli-for-apps/migrate-from-dashboard'
  md: 'https://shopify.dev/docs/apps/build/cli-for-apps/migrate-from-dashboard.md'
---

ExpandOn this page

* [Requirements](https://shopify.dev/docs/apps/build/cli-for-apps/migrate-from-dashboard.md#requirements)
* [What you'll learn](https://shopify.dev/docs/apps/build/cli-for-apps/migrate-from-dashboard.md#what-youll-learn)
* [Step 1: Create a new app](https://shopify.dev/docs/apps/build/cli-for-apps/migrate-from-dashboard.md#step-1-create-a-new-app)
* [Step 2: Import the configuration from your existing app](https://shopify.dev/docs/apps/build/cli-for-apps/migrate-from-dashboard.md#step-2-import-the-configuration-from-your-existing-app)
* [Next steps](https://shopify.dev/docs/apps/build/cli-for-apps/migrate-from-dashboard.md#next-steps)

# Migrate from a Dev Dashboard-managed app to Shopify CLI

If you've been using the Dev Dashboard to manage your app, then you should consider importing it and using Shopify CLI to manage it instead for the following reasons:

* You can use familiar version control (like Git) to manage changes to your configuration over time because your app configuration is defined in code.
* CLI-managed apps can can use features like extensions or Shopify functions.
* Certain elements of app configuration can only be managed using the CLI, such as handles.
* You don't need to port your web app and focus only on app configuration.
* If you have multiple apps for different environments, such as staging and production, you can manage everything in a single local project.

***

## Requirements

* You've installed [Shopify CLI](https://shopify.dev/docs/api/shopify-cli)
* The latest version of [Chrome](https://www.google.com/chrome/) or [Firefox](https://www.mozilla.org/)

***

## What you'll learn

In this tutorial, you'll learn the following:

* How to set up a new local project for an existing app
* How to add Shopify CLI as a project dependency

***

## Step 1: Create a new app

Set up a new local project using Shopify CLI.

## Terminal

```terminal
shopify app init
```

Create a new app and choose **Build an extension-only app** in the set up process.

Note

This empty app is an [extension-only app](https://shopify.dev/docs/apps/build/app-extensions/build-extension-only-app), which doesn't have an app home. You can change the configuration to add an app home later.

***

## Step 2: Import the configuration from your existing app

Connect the new app project to your existing app.

## Terminal

```terminal
shopify app config link
```

1. Run the `shopify app config link` command and select **connect it to an existing app**.
2. Inspect the `shopify.app.toml` file to make sure you have correctly imported the configuration from your existing app. You can always run the command again to link to a different app.

Tip

If you have multiple apps representing different environments, then select a staging or development app at this point because `shopify.app.toml` acts as a default target for commands. You can [add the production app](#manage-multiple-environments) later.

You've successfully moved your app to Shopify CLI. Instead of going to the Dev Dashboard, you can now make changes by updating the [`shopify.app.toml`](https://shopify.dev/docs/apps/build/cli-for-apps/app-structure#root-configuration-files) file and then running the `shopify app deploy` command. This command releases a new app version to app users.

## Terminal

```terminal
shopify app deploy
```

Find out more about [deploying and releasing app versions](https://shopify.dev/docs/apps/launch/deployment/deploy-app-versions).

***

## Next steps

You now have a local project that's linked to your existing Shopify app. What's next?

### Manage multiple environments

If you have multiple apps that represent different environments, you can manage these through a single app project. Run the `shopify app config link` command, select **connect it to an existing app**, and choose the additional environment. You can give the imported `app.toml` config file a different name.

You can switch between multiple configuration files that represent different environments by providing the `--config` flag to CLI commands, or using the `shopify app config use` command to set the default environment.

Find out more about [managing multiple app configurations and environments](https://shopify.dev/docs/apps/build/cli-for-apps/manage-app-config-files).

### Add your first extension

With a local project set up with Shopify CLI, you can start to introduce app extensions. You can build a checkout or storefront customization, or Shopify function. You can add your first extension by running [`shopify app generate extension`](https://shopify.dev/docs/api/shopify-cli/app/app-generate-extension). To preview your extension during development, run [`shopify app dev`](https://shopify.dev/docs/api/shopify-cli/app/app-dev).

Find out more about [app extensions](https://shopify.dev/docs/apps/build/app-extensions).

***

* [Requirements](https://shopify.dev/docs/apps/build/cli-for-apps/migrate-from-dashboard.md#requirements)
* [What you'll learn](https://shopify.dev/docs/apps/build/cli-for-apps/migrate-from-dashboard.md#what-youll-learn)
* [Step 1: Create a new app](https://shopify.dev/docs/apps/build/cli-for-apps/migrate-from-dashboard.md#step-1-create-a-new-app)
* [Step 2: Import the configuration from your existing app](https://shopify.dev/docs/apps/build/cli-for-apps/migrate-from-dashboard.md#step-2-import-the-configuration-from-your-existing-app)
* [Next steps](https://shopify.dev/docs/apps/build/cli-for-apps/migrate-from-dashboard.md#next-steps)
---
title: Manage app config files
description: >-
  This guide shows you how to get started with Shopify CLI, manage and update
  your app configuration, and safely test your app’s behavior.
source_url:
  html: 'https://shopify.dev/docs/apps/build/cli-for-apps/manage-app-config-files'
  md: 'https://shopify.dev/docs/apps/build/cli-for-apps/manage-app-config-files.md'
---

ExpandOn this page

* [What you'll learn](https://shopify.dev/docs/apps/build/cli-for-apps/manage-app-config-files.md#what-youll-learn)
* [Requirements](https://shopify.dev/docs/apps/build/cli-for-apps/manage-app-config-files.md#requirements)
* [Link and configure apps](https://shopify.dev/docs/apps/build/cli-for-apps/manage-app-config-files.md#link-and-configure-apps)
* [Test your app functionality](https://shopify.dev/docs/apps/build/cli-for-apps/manage-app-config-files.md#test-your-app-functionality)
* [Port changes across different app configurations](https://shopify.dev/docs/apps/build/cli-for-apps/manage-app-config-files.md#port-changes-across-different-app-configurations)

# Manage app config files

This guide shows you how to get started with Shopify CLI, manage and update your app configuration, and safely test your app’s behavior.

***

## What you'll learn

After you've finished this tutorial, you'll understand:

* How to configure and manage Shopify apps from your terminal or IDE
* How to safely test and update your app configuration

***

## Requirements

* You've created a [Shopify Partner account](https://www.shopify.com/partners).
* You've created a dev store.
* Your app uses [Shopify CLI](https://shopify.dev/docs/api/shopify-cli) 3.0 or higher.

If you have an app that doesn't use Shopify CLI, then you should consider [migrating your app to use Shopify CLI](https://shopify.dev/docs/apps/build/cli-for-apps/migrate-from-dashboard).

***

## Link and configure apps

You can create, link, and configure Shopify apps directly from your preferred terminal or IDE using Shopify CLI. You can either create a new Shopify app or link to any existing apps. This generates a configuration file in the root directory of your app.

## Terminal

```terminal
shopify app config link
```

You can use your configuration file to view and modify your app’s configuration on Shopify. After you've made changes to your configuration file, you can run the `deploy` command to create and release a new app version.

## Terminal

```terminal
shopify app deploy
```

Learn more about the [configuration file format](https://shopify.dev/docs/apps/build/cli-for-apps/app-configuration).

***

## Test your app functionality

After your app has been installed on a live store, avoid doing active development against it so that end-users are not affected by possible breaking changes. Shopify CLI makes this easy by allowing you to link multiple Shopify apps to your codebase, so that you can dedicate specific apps and their configuration for various development, staging, and production workflows.

Use `shopify app config link` to generate additional configuration files for development or staging apps. You can also re-link upstream Shopify apps if your configuration file gets deleted, corrupted, or out-of-sync. If you already have a `shopify.app.toml` in your root directory, then you’ll be prompted to give your configuration file a name, and a file `shopify.app.{your-config-name}.toml` is generated in your root directory. Learn more about [configuration names](https://shopify.dev/docs/apps/build/cli-for-apps/app-configuration).

## Terminal

```terminal
shopify app config link
```

Tip

You don’t need to commit every Shopify configuration file to your git repository. Depending on your workflow preferences, you might want to gitignore certain development configurations, or only commit your production configuration file(s) to your repository.

When you link to a Shopify app, it becomes your default configuration. This means that when you run `shopify app dev` or other commands that reference a configuration file, your default configuration is selected. If you’d like to change your default configuration, then you can run `shopify app config use` and pass in either your configuration name, or the file name:

## Terminal

```terminal
shopify app config use development
```

You can also override your default configuration by passing a `--config` flag to your command. This syntax can be used to leverage CLI behavior in scripts, CI/CD, or other automated processes:

## Terminal

```terminal
shopify app dev --config staging
```

Using different configuration files is a great way to quickly and safely test functionality across multiple apps and stores as your app grows in complexity.

***

## Port changes across different app configurations

Shopify configuration files make it easy to push and manage changes across development, staging, and production apps. After your configuration changes have been tested, you can copy and paste your blocks of configuration to any of your other configuration files, and deploy those changes.

## Terminal

```terminal
shopify app deploy --config staging
```

Tip

Make sure to pass the correct config, or run `shopify app use`, before pushing a new configuration. When you run the `deploy` command, you'll be presented with a summary of the changes to your app configuration, which you can confirm before deploying.

***

* [What you'll learn](https://shopify.dev/docs/apps/build/cli-for-apps/manage-app-config-files.md#what-youll-learn)
* [Requirements](https://shopify.dev/docs/apps/build/cli-for-apps/manage-app-config-files.md#requirements)
* [Link and configure apps](https://shopify.dev/docs/apps/build/cli-for-apps/manage-app-config-files.md#link-and-configure-apps)
* [Test your app functionality](https://shopify.dev/docs/apps/build/cli-for-apps/manage-app-config-files.md#test-your-app-functionality)
* [Port changes across different app configurations](https://shopify.dev/docs/apps/build/cli-for-apps/manage-app-config-files.md#port-changes-across-different-app-configurations)
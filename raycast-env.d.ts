/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Platform Base URL - The HTTPS origin that serves /api/v1, without a trailing API path. */
  "baseUrl": string,
  /** API Key - A member API key created in Tinkerer Club Settings. It is sent in the x-api-key header. */
  "authorizationValue": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `search-tinkerer` command */
  export type SearchTinkerer = ExtensionPreferences & {}
  /** Preferences accessible in the `browse-prompts` command */
  export type BrowsePrompts = ExtensionPreferences & {}
  /** Preferences accessible in the `browse-feed` command */
  export type BrowseFeed = ExtensionPreferences & {}
  /** Preferences accessible in the `browse-articles` command */
  export type BrowseArticles = ExtensionPreferences & {}
  /** Preferences accessible in the `quick-post` command */
  export type QuickPost = ExtensionPreferences & {}
  /** Preferences accessible in the `browse-api` command */
  export type BrowseApi = ExtensionPreferences & {}
  /** Preferences accessible in the `menu-bar` command */
  export type MenuBar = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `search-tinkerer` command */
  export type SearchTinkerer = {}
  /** Arguments passed to the `browse-prompts` command */
  export type BrowsePrompts = {}
  /** Arguments passed to the `browse-feed` command */
  export type BrowseFeed = {}
  /** Arguments passed to the `browse-articles` command */
  export type BrowseArticles = {}
  /** Arguments passed to the `quick-post` command */
  export type QuickPost = {}
  /** Arguments passed to the `browse-api` command */
  export type BrowseApi = {}
  /** Arguments passed to the `menu-bar` command */
  export type MenuBar = {}
}


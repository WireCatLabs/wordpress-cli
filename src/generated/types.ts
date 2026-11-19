// GENERATED. DO NOT EDIT.
// Source: spec/wordpress/, checked against provenance.json
// Run: pnpm generate

export type BlockDirectoryItem = {
  /** The number sites that have activated this block. */
  active_installs?: number
  /** The WordPress.org username of the block author. */
  author?: string
  /** The number of blocks published by the same author. */
  author_block_count?: number
  /** The average rating of blocks published by the same author. */
  author_block_rating?: number
  /** A short description of the block, in human readable format. */
  description?: string
  /** The date when the block was last updated, in human readable format. */
  humanized_updated?: string
  /** The block icon. */
  icon?: string
  /** The block slug. */
  id?: string
  /** The date when the block was last updated. */
  last_updated?: string
  /** The block name, in namespace/block-name format. */
  name?: string
  /** The star rating of the block. */
  rating?: number
  /** The number of ratings. */
  rating_count?: number
  /** The block title, in human readable format. */
  title?: string
}

export type BlockPatternCategory = {
  /** The category description, in human readable format. */
  description?: string
  /** The category label, in human readable format. */
  label?: string
  /** The category name. */
  name?: string
}

export type BlockPattern = {
  /** Block types that the pattern is intended to be used with. */
  block_types?: Array<unknown>
  /** The pattern category slugs. */
  categories?: Array<unknown>
  /** The pattern content. */
  content?: string
  /** The pattern detailed description. */
  description?: string
  /** Determines whether the pattern is visible in inserter. */
  inserter?: boolean
  /** The pattern keywords. */
  keywords?: Array<unknown>
  /** The pattern name. */
  name?: string
  /** An array of post types that the pattern is restricted to be used with. */
  post_types?: Array<unknown>
  /** Where the pattern comes from e.g. core */
  source?:
    | "core"
    | "plugin"
    | "theme"
    | "pattern-directory/core"
    | "pattern-directory/theme"
    | "pattern-directory/featured"
  /** An array of template types where the pattern fits. */
  template_types?: Array<unknown>
  /** The pattern title, in human readable format. */
  title?: string
  /** The pattern viewport width for inserter preview. */
  viewport_width?: number
}

export type BlockType = {
  /** Allowed child block types. */
  allowed_blocks?: Array<string> | null
  /** Ancestor blocks. */
  ancestor?: Array<string> | null
  /** Version of block API. */
  api_version?: number
  /** Block attributes. */
  attributes?: { [key: string]: Record<string, unknown> } | null
  /** This block is automatically inserted near any occurrence of the block types used as keys of this map, into a relative position given by the corresponding value. */
  block_hooks?: { [key: string]: "before" | "after" | "first_child" | "last_child" }
  /** Block category. */
  category?: string | null
  /** Description of block type. */
  description?: string
  /** Editor script handle. DEPRECATED: Use `editor_script_handles` instead. */
  editor_script?: string | null
  /** Editor script handles. */
  editor_script_handles?: Array<string>
  /** Editor style handle. DEPRECATED: Use `editor_style_handles` instead. */
  editor_style?: string | null
  /** Editor style handles. */
  editor_style_handles?: Array<string>
  /** Block example. */
  example?: {
    /** The attributes used in the example. */
    attributes?: Record<string, unknown>
    /** The list of inner blocks used in the example. */
    innerBlocks?: Array<{
      /** The attributes of the inner block. */
      attributes?: Record<string, unknown>
      /** A list of the inner block's own inner blocks. This is a recursive definition following the parent innerBlocks schema. */
      innerBlocks?: Array<unknown>
      /** The name of the inner block. */
      name: string
    }>
  } | null
  /** Icon of block type. */
  icon?: string | null
  /** Is the block dynamically rendered. */
  is_dynamic?: boolean
  /** Block keywords. */
  keywords?: Array<string>
  /** Unique name identifying the block type. */
  name: string
  /** Parent blocks. */
  parent?: Array<string> | null
  /** Context provided by blocks of this type. */
  provides_context?: { [key: string]: string }
  /** Public facing and editor script handle. DEPRECATED: Use `script_handles` instead. */
  script?: string | null
  /** Public facing and editor script handles. */
  script_handles?: Array<string>
  /** Custom CSS selectors. */
  selectors?: Record<string, unknown>
  /** Public facing and editor style handle. DEPRECATED: Use `style_handles` instead. */
  style?: string | null
  /** Public facing and editor style handles. */
  style_handles?: Array<string>
  /** Block style variations. */
  styles?: Array<{
    /** Inline CSS code that registers the CSS class required for the style. */
    inline_style?: string
    /** The human-readable label for the style. */
    label?: string
    /** Unique name identifying the style. */
    name: string
    /** Contains the handle that defines the block style. */
    style_handle?: string
  }>
  /** Block supports. */
  supports?: Record<string, unknown>
  /** Public text domain. */
  textdomain?: string | null
  /** Title of block type. */
  title?: string
  /** Context values inherited by blocks of this type. */
  uses_context?: Array<string>
  /** Block variations. */
  variations?: Array<{
    /** The initial values for attributes. */
    attributes?: Record<string, unknown>
    /** Block category. */
    category?: string | null
    /** A detailed variation description. */
    description?: string
    /** Block example. */
    example?: {
      /** The attributes used in the example. */
      attributes?: Record<string, unknown>
      /** The list of inner blocks used in the example. */
      innerBlocks?: Array<{
        /** The attributes of the inner block. */
        attributes?: Record<string, unknown>
        /** A list of the inner block's own inner blocks. This is a recursive definition following the parent innerBlocks schema. */
        innerBlocks?: Array<unknown>
        /** The name of the inner block. */
        name: string
      }>
    } | null
    /** Icon of block type. */
    icon?: string | null
    /** The list of inner blocks used in the example. */
    innerBlocks?: Array<{
      /** The attributes of the inner block. */
      attributes?: Record<string, unknown>
      /** A list of the inner block's own inner blocks. This is a recursive definition following the parent innerBlocks schema. */
      innerBlocks?: Array<unknown>
      /** The name of the inner block. */
      name: string
    }>
    /** Indicates whether the current variation is the default one. */
    isDefault?: boolean
    /** Block keywords. */
    keywords?: Array<string>
    /** The unique and machine-readable name. */
    name: string
    /** The list of scopes where the variation is applicable. When not provided, it assumes all available scopes. */
    scope?: Array<"block" | "inserter" | "transform"> | null
    /** A human-readable variation title. */
    title: string
  }>
  /** Public facing script handle. DEPRECATED: Use `view_script_handles` instead. */
  view_script?: string | null
  /** Public facing script handles. */
  view_script_handles?: Array<string>
  /** Public facing script module IDs. */
  view_script_module_ids?: Array<string>
  /** Public facing style handles. */
  view_style_handles?: Array<string>
}

export type WpBlock = {
  /** The content for the post. */
  content?: {
    /** Version of the content block format used by the post. */
    block_version?: number
    /** Whether the content is protected with a password. */
    protected?: boolean
    /** Content for the post, as it exists in the database. */
    raw?: string
  }
  /** The date the post was published, in the site's timezone. */
  date?: string | null
  /** The date the post was published, as GMT. */
  date_gmt?: string | null
  /** The excerpt for the post. */
  excerpt?: {
    /** Whether the excerpt is protected with a password. */
    protected?: boolean
    /** Excerpt for the post, as it exists in the database. */
    raw?: string
    /** HTML excerpt for the post, transformed for display. */
    rendered?: string
  }
  /** The globally unique identifier for the post. */
  guid?: {
    /** GUID for the post, as it exists in the database. */
    raw?: string
    /** GUID for the post, transformed for display. */
    rendered?: string
  }
  /** Unique identifier for the post. */
  id?: number
  /** URL to the post. */
  link?: string
  /** Meta fields. */
  meta?: {
    footnotes?: string
    wp_pattern_sync_status?: "partial" | "unsynced"
  }
  /** The date the post was last modified, in the site's timezone. */
  modified?: string
  /** The date the post was last modified, as GMT. */
  modified_gmt?: string
  /** A password to protect access to the content and excerpt. */
  password?: string
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string
  /** A named status for the post. */
  status?: "publish" | "future" | "draft" | "pending" | "private"
  /** The theme file to use to display the post. */
  template?: string
  /** The title for the post. */
  title?: {
    /** Title for the post, as it exists in the database. */
    raw?: string
  }
  /** Type of post. */
  type?: string
  /** The terms assigned to the post in the wp_pattern_category taxonomy. */
  wp_pattern_category?: Array<number>
}

export type WpBlockRevision = {
  /** The ID for the author of the revision. */
  author?: number
  /** The content for the post. */
  content?: {
    /** Version of the content block format used by the post. */
    block_version?: number
    /** Whether the content is protected with a password. */
    protected?: boolean
    /** Content for the post, as it exists in the database. */
    raw?: string
  }
  /** The date the revision was published, in the site's timezone. */
  date?: string
  /** The date the revision was published, as GMT. */
  date_gmt?: string
  /** The excerpt for the post. */
  excerpt?: {
    /** Whether the excerpt is protected with a password. */
    protected?: boolean
    /** Excerpt for the post, as it exists in the database. */
    raw?: string
    /** HTML excerpt for the post, transformed for display. */
    rendered?: string
  }
  /** The globally unique identifier for the post. */
  guid?: {
    /** GUID for the post, as it exists in the database. */
    raw?: string
    /** GUID for the post, transformed for display. */
    rendered?: string
  }
  /** Unique identifier for the revision. */
  id?: number
  /** Meta fields. */
  meta?: {
    footnotes?: string
    wp_pattern_sync_status?: "partial" | "unsynced"
  }
  /** The date the revision was last modified, in the site's timezone. */
  modified?: string
  /** The date the revision was last modified, as GMT. */
  modified_gmt?: string
  /** The ID for the parent of the revision. */
  parent?: number
  /** Preview link for the post. */
  preview_link?: string
  /** An alphanumeric identifier for the revision unique to its type. */
  slug?: string
  /** The title for the post. */
  title?: {
    /** Title for the post, as it exists in the database. */
    raw?: string
  }
}

export type WpBlockRevision2 = {
  /** The ID for the author of the revision. */
  author?: number
  /** The content for the post. */
  content?: {
    /** Version of the content block format used by the post. */
    block_version?: number
    /** Whether the content is protected with a password. */
    protected?: boolean
    /** Content for the post, as it exists in the database. */
    raw?: string
  }
  /** The date the revision was published, in the site's timezone. */
  date?: string
  /** The date the revision was published, as GMT. */
  date_gmt?: string
  /** The excerpt for the post. */
  excerpt?: {
    /** Whether the excerpt is protected with a password. */
    protected?: boolean
    /** Excerpt for the post, as it exists in the database. */
    raw?: string
    /** HTML excerpt for the post, transformed for display. */
    rendered?: string
  }
  /** The globally unique identifier for the post. */
  guid?: {
    /** GUID for the post, as it exists in the database. */
    raw?: string
    /** GUID for the post, transformed for display. */
    rendered?: string
  }
  /** Unique identifier for the revision. */
  id?: number
  /** Meta fields. */
  meta?: {
    footnotes?: string
    wp_pattern_sync_status?: "partial" | "unsynced"
  }
  /** The date the revision was last modified, in the site's timezone. */
  modified?: string
  /** The date the revision was last modified, as GMT. */
  modified_gmt?: string
  /** The ID for the parent of the revision. */
  parent?: number
  /** An alphanumeric identifier for the revision unique to its type. */
  slug?: string
  /** The title for the post. */
  title?: {
    /** Title for the post, as it exists in the database. */
    raw?: string
  }
}

export type Category = {
  /** Number of published posts for the term. */
  count?: number
  /** HTML description of the term. */
  description?: string
  /** Unique identifier for the term. */
  id?: number
  /** URL of the term. */
  link?: string
  /** Meta fields. */
  meta?: Record<string, unknown>
  /** HTML title for the term. */
  name: string
  /** The parent term ID. */
  parent?: number
  /** An alphanumeric identifier for the term unique to its type. */
  slug?: string
  /** Type attribution for the term. */
  taxonomy?: "category"
}

export type Comment = {
  /** The ID of the user object, if author was a user. */
  author?: number
  /** Avatar URLs for the comment author. */
  author_avatar_urls?: {
    /** Avatar URL with image size of 24 pixels. */
    "24"?: string
    /** Avatar URL with image size of 48 pixels. */
    "48"?: string
    /** Avatar URL with image size of 96 pixels. */
    "96"?: string
  }
  /** Email address for the comment author. */
  author_email?: string
  /** IP address for the comment author. */
  author_ip?: string
  /** Display name for the comment author. */
  author_name?: string
  /** URL for the comment author. */
  author_url?: string
  /** User agent for the comment author. */
  author_user_agent?: string
  /** The content for the comment. */
  content?: {
    /** Content for the comment, as it exists in the database. */
    raw?: string
    /** HTML content for the comment, transformed for display. */
    rendered?: string
  }
  /** The date the comment was published, in the site's timezone. */
  date?: string
  /** The date the comment was published, as GMT. */
  date_gmt?: string
  /** Unique identifier for the comment. */
  id?: number
  /** URL to the comment. */
  link?: string
  /** Meta fields. */
  meta?: {
    /** Note resolution status */
    _wp_note_status?: "resolved" | "reopen"
  }
  /** The ID for the parent of the comment. */
  parent?: number
  /** The ID of the associated post object. */
  post?: number
  /** State of the comment. */
  status?: string
  /** Type of the comment. */
  type?: string
}

export type FontCollection = {
  /** The categories for the font collection. */
  categories?: Array<unknown>
  /** The description for the font collection. */
  description?: string
  /** The font families for the font collection. */
  font_families?: Array<unknown>
  /** The name for the font collection. */
  name?: string
  /** Unique identifier for the font collection. */
  slug?: string
}

export type WpFontFamily = {
  /** The IDs of the child font faces in the font family. */
  font_faces?: Array<number>
  /** font-face definition in theme.json format. */
  font_family_settings?: {
    /** CSS font-family value. */
    fontFamily: string
    /** Name of the font family preset, translatable. */
    name: string
    /** URL to a preview image of the font family. */
    preview?: string
    /** Kebab-case unique identifier for the font family preset. */
    slug: string
  }
  /** Unique identifier for the post. */
  id?: number
  /** Version of the theme.json schema used for the typography settings. */
  theme_json_version?: number
}

export type WpFontFace = {
  /** font-face declaration in theme.json format. */
  font_face_settings?: {
    /** CSS ascent-override value. */
    ascentOverride?: string
    /** CSS descent-override value. */
    descentOverride?: string
    /** CSS font-display value. */
    fontDisplay?: "auto" | "block" | "fallback" | "swap" | "optional"
    /** CSS font-family value. */
    fontFamily: string
    /** CSS font-feature-settings value. */
    fontFeatureSettings?: string
    /** CSS font-stretch value. */
    fontStretch?: string
    /** CSS font-style value. */
    fontStyle?: string
    /** CSS font-variant value. */
    fontVariant?: string
    /** CSS font-variation-settings value. */
    fontVariationSettings?: string
    /** List of available font weights, separated by a space. */
    fontWeight?: string | number
    /** CSS line-gap-override value. */
    lineGapOverride?: string
    /** URL to a preview image of the font face. */
    preview?: string
    /** CSS size-adjust value. */
    sizeAdjust?: string
    /** Paths or URLs to the font files. */
    src: string | Array<string>
    /** CSS unicode-range value. */
    unicodeRange?: string
  }
  /** Unique identifier for the post. */
  id?: number
  /** The ID for the parent font family of the font face. */
  parent?: number
  /** Version of the theme.json schema used for the typography settings. */
  theme_json_version?: number
}

export type WpGlobalStylesRevision = {
  /** The ID for the author of the revision. */
  author?: number
  /** The date the revision was published, in the site's timezone. */
  date?: string
  /** The date the revision was published, as GMT. */
  date_gmt?: string
  /** ID of global styles config. */
  id?: number
  /** The date the revision was last modified, in the site's timezone. */
  modified?: string
  /** The date the revision was last modified, as GMT. */
  modified_gmt?: string
  /** The ID for the parent of the revision. */
  parent?: number
  /** Global settings. */
  settings?: Record<string, unknown>
  /** Global styles. */
  styles?: Record<string, unknown>
}

export type Attachment = {
  /** Alternative text to display when attachment is not displayed. */
  alt_text?: string
  /** The ID for the author of the post. */
  author?: number
  /** The attachment caption. */
  caption?: {
    /** Caption for the attachment, as it exists in the database. */
    raw?: string
    /** HTML caption for the attachment, transformed for display. */
    rendered?: string
  }
  /** An array of the class names for the post container element. */
  class_list?: Array<string>
  /** Whether or not comments are open on the post. */
  comment_status?: "open" | "closed"
  /** The date the post was published, in the site's timezone. */
  date?: string | null
  /** The date the post was published, as GMT. */
  date_gmt?: string | null
  /** The attachment description. */
  description?: {
    /** Description for the attachment, as it exists in the database. */
    raw?: string
    /** HTML description for the attachment, transformed for display. */
    rendered?: string
  }
  /** The ID of the featured media for the post. */
  featured_media?: number
  /** Slug automatically generated from the post title. */
  generated_slug?: string
  /** The globally unique identifier for the post. */
  guid?: {
    /** GUID for the post, as it exists in the database. */
    raw?: string
    /** GUID for the post, transformed for display. */
    rendered?: string
  }
  /** Unique identifier for the post. */
  id?: number
  /** URL to the post. */
  link?: string
  /** Details about the media file, specific to its type. */
  media_details?: Record<string, unknown>
  /** Attachment type. */
  media_type?: "image" | "file"
  /** Meta fields. */
  meta?: Record<string, unknown>
  /** The attachment MIME type. */
  mime_type?: string
  /** List of the missing image sizes of the attachment. */
  missing_image_sizes?: Array<string>
  /** The date the post was last modified, in the site's timezone. */
  modified?: string
  /** The date the post was last modified, as GMT. */
  modified_gmt?: string
  /** Permalink template for the post. */
  permalink_template?: string
  /** Whether or not the post can be pinged. */
  ping_status?: "open" | "closed"
  /** The ID for the associated post of the attachment. */
  post?: number
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string
  /** URL to the original attachment file. */
  source_url?: string
  /** A named status for the post. */
  status?: "publish" | "future" | "draft" | "pending" | "private"
  /** The theme file to use to display the post. */
  template?: string
  /** The title for the post. */
  title?: {
    /** Title for the post, as it exists in the database. */
    raw?: string
    /** HTML title for the post, transformed for display. */
    rendered?: string
  }
  /** Type of post. */
  type?: string
}

export type NavMenuItem = {
  /** Text for the title attribute of the link element for this menu item. */
  attr_title?: string
  /** Class names for the link element of this menu item. */
  classes?: Array<string>
  /** The description of this menu item. */
  description?: string
  /** Unique identifier for the object. */
  id?: number
  /** Whether the menu item represents an object that no longer exists. */
  invalid?: boolean
  /** The DB ID of the nav_menu_item that is this item's menu parent, if any, otherwise 0. */
  menu_order?: number
  /** The terms assigned to the object in the nav_menu taxonomy. */
  menus?: number
  /** Meta fields. */
  meta?: Record<string, unknown>
  /** The type of object originally represented, such as "category", "post", or "attachment". */
  object?: string
  /** The database ID of the original object this menu item represents, for example the ID for posts or the term_id for categories. */
  object_id?: number
  /** The ID for the parent of the object. */
  parent?: number
  /** A named status for the object. */
  status?: "publish" | "future" | "draft" | "pending" | "private"
  /** The target attribute of the link element for this menu item. */
  target?: "_blank" | ""
  /** The title for the object. */
  title?:
    | string
    | {
        /** Title for the object, as it exists in the database. */
        raw?: string
        /** HTML title for the object, transformed for display. */
        rendered?: string
      }
  /** The family of objects originally represented, such as "post_type" or "taxonomy". */
  type?: "taxonomy" | "post_type" | "post_type_archive" | "custom"
  /** The singular label used to describe this type of menu item. */
  type_label?: string
  /** The URL to which this menu item points. */
  url?: string
  /** The XFN relationship expressed in the link of this menu item. */
  xfn?: Array<string>
}

export type NavMenuItemRevision = {
  /** The ID for the author of the revision. */
  author?: number
  /** The date the revision was published, in the site's timezone. */
  date?: string
  /** The date the revision was published, as GMT. */
  date_gmt?: string
  /** GUID for the revision, as it exists in the database. */
  guid?: string
  /** Unique identifier for the revision. */
  id?: number
  /** Meta fields. */
  meta?: Record<string, unknown>
  /** The date the revision was last modified, in the site's timezone. */
  modified?: string
  /** The date the revision was last modified, as GMT. */
  modified_gmt?: string
  /** The ID for the parent of the revision. */
  parent?: number
  /** Preview link for the post. */
  preview_link?: string
  /** An alphanumeric identifier for the revision unique to its type. */
  slug?: string
  /** The title for the object. */
  title?:
    | string
    | {
        /** Title for the object, as it exists in the database. */
        raw?: string
        /** HTML title for the object, transformed for display. */
        rendered?: string
      }
}

export type MenuLocation = {
  /** The description of the menu location. */
  description?: string
  /** The ID of the assigned menu. */
  menu?: number
  /** The name of the menu location. */
  name?: string
}

export type NavMenu = {
  /** Whether to automatically add top level pages to this menu. */
  auto_add?: boolean
  /** HTML description of the term. */
  description?: string
  /** Unique identifier for the term. */
  id?: number
  /** The locations assigned to the menu. */
  locations?: Array<string>
  /** Meta fields. */
  meta?: Record<string, unknown>
  /** HTML title for the term. */
  name: string
  /** An alphanumeric identifier for the term unique to its type. */
  slug?: string
}

export type WpNavigation = {
  /** The content for the post. */
  content?: {
    /** Version of the content block format used by the post. */
    block_version?: number
    /** Whether the content is protected with a password. */
    protected?: boolean
    /** Content for the post, as it exists in the database. */
    raw?: string
    /** HTML content for the post, transformed for display. */
    rendered?: string
  }
  /** The date the post was published, in the site's timezone. */
  date?: string | null
  /** The date the post was published, as GMT. */
  date_gmt?: string | null
  /** The globally unique identifier for the post. */
  guid?: {
    /** GUID for the post, as it exists in the database. */
    raw?: string
    /** GUID for the post, transformed for display. */
    rendered?: string
  }
  /** Unique identifier for the post. */
  id?: number
  /** URL to the post. */
  link?: string
  /** The date the post was last modified, in the site's timezone. */
  modified?: string
  /** The date the post was last modified, as GMT. */
  modified_gmt?: string
  /** A password to protect access to the content and excerpt. */
  password?: string
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string
  /** A named status for the post. */
  status?: "publish" | "future" | "draft" | "pending" | "private"
  /** The theme file to use to display the post. */
  template?: string
  /** The title for the post. */
  title?: {
    /** Title for the post, as it exists in the database. */
    raw?: string
    /** HTML title for the post, transformed for display. */
    rendered?: string
  }
  /** Type of post. */
  type?: string
}

export type WpNavigationRevision = {
  /** The ID for the author of the revision. */
  author?: number
  /** The content for the post. */
  content?: {
    /** Version of the content block format used by the post. */
    block_version?: number
    /** Whether the content is protected with a password. */
    protected?: boolean
    /** Content for the post, as it exists in the database. */
    raw?: string
    /** HTML content for the post, transformed for display. */
    rendered?: string
  }
  /** The date the revision was published, in the site's timezone. */
  date?: string
  /** The date the revision was published, as GMT. */
  date_gmt?: string
  /** The globally unique identifier for the post. */
  guid?: {
    /** GUID for the post, as it exists in the database. */
    raw?: string
    /** GUID for the post, transformed for display. */
    rendered?: string
  }
  /** Unique identifier for the revision. */
  id?: number
  /** Meta fields. */
  meta?: Record<string, unknown>
  /** The date the revision was last modified, in the site's timezone. */
  modified?: string
  /** The date the revision was last modified, as GMT. */
  modified_gmt?: string
  /** The ID for the parent of the revision. */
  parent?: number
  /** Preview link for the post. */
  preview_link?: string
  /** An alphanumeric identifier for the revision unique to its type. */
  slug?: string
  /** The title for the post. */
  title?: {
    /** Title for the post, as it exists in the database. */
    raw?: string
    /** HTML title for the post, transformed for display. */
    rendered?: string
  }
}

export type WpNavigationRevision2 = {
  /** The ID for the author of the revision. */
  author?: number
  /** The content for the post. */
  content?: {
    /** Version of the content block format used by the post. */
    block_version?: number
    /** Whether the content is protected with a password. */
    protected?: boolean
    /** Content for the post, as it exists in the database. */
    raw?: string
    /** HTML content for the post, transformed for display. */
    rendered?: string
  }
  /** The date the revision was published, in the site's timezone. */
  date?: string
  /** The date the revision was published, as GMT. */
  date_gmt?: string
  /** The globally unique identifier for the post. */
  guid?: {
    /** GUID for the post, as it exists in the database. */
    raw?: string
    /** GUID for the post, transformed for display. */
    rendered?: string
  }
  /** Unique identifier for the revision. */
  id?: number
  /** Meta fields. */
  meta?: Record<string, unknown>
  /** The date the revision was last modified, in the site's timezone. */
  modified?: string
  /** The date the revision was last modified, as GMT. */
  modified_gmt?: string
  /** The ID for the parent of the revision. */
  parent?: number
  /** An alphanumeric identifier for the revision unique to its type. */
  slug?: string
  /** The title for the post. */
  title?: {
    /** Title for the post, as it exists in the database. */
    raw?: string
    /** HTML title for the post, transformed for display. */
    rendered?: string
  }
}

export type Page = {
  /** The ID for the author of the post. */
  author?: number
  /** An array of the class names for the post container element. */
  class_list?: Array<string>
  /** Whether or not comments are open on the post. */
  comment_status?: "open" | "closed"
  /** The content for the post. */
  content?: {
    /** Version of the content block format used by the post. */
    block_version?: number
    /** Whether the content is protected with a password. */
    protected?: boolean
    /** Content for the post, as it exists in the database. */
    raw?: string
    /** HTML content for the post, transformed for display. */
    rendered?: string
  }
  /** The date the post was published, in the site's timezone. */
  date?: string | null
  /** The date the post was published, as GMT. */
  date_gmt?: string | null
  /** The excerpt for the post. */
  excerpt?: {
    /** Whether the excerpt is protected with a password. */
    protected?: boolean
    /** Excerpt for the post, as it exists in the database. */
    raw?: string
    /** HTML excerpt for the post, transformed for display. */
    rendered?: string
  }
  /** The ID of the featured media for the post. */
  featured_media?: number
  /** Slug automatically generated from the post title. */
  generated_slug?: string
  /** The globally unique identifier for the post. */
  guid?: {
    /** GUID for the post, as it exists in the database. */
    raw?: string
    /** GUID for the post, transformed for display. */
    rendered?: string
  }
  /** Unique identifier for the post. */
  id?: number
  /** URL to the post. */
  link?: string
  /** The order of the post in relation to other posts. */
  menu_order?: number
  /** Meta fields. */
  meta?: {
    footnotes?: string
  }
  /** The date the post was last modified, in the site's timezone. */
  modified?: string
  /** The date the post was last modified, as GMT. */
  modified_gmt?: string
  /** The ID for the parent of the post. */
  parent?: number
  /** A password to protect access to the content and excerpt. */
  password?: string
  /** Permalink template for the post. */
  permalink_template?: string
  /** Whether or not the post can be pinged. */
  ping_status?: "open" | "closed"
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string
  /** A named status for the post. */
  status?: "publish" | "future" | "draft" | "pending" | "private"
  /** The theme file to use to display the post. */
  template?: string
  /** The title for the post. */
  title?: {
    /** Title for the post, as it exists in the database. */
    raw?: string
    /** HTML title for the post, transformed for display. */
    rendered?: string
  }
  /** Type of post. */
  type?: string
}

export type PageRevision = {
  /** The ID for the author of the revision. */
  author?: number
  /** The content for the post. */
  content?: {
    /** Version of the content block format used by the post. */
    block_version?: number
    /** Whether the content is protected with a password. */
    protected?: boolean
    /** Content for the post, as it exists in the database. */
    raw?: string
    /** HTML content for the post, transformed for display. */
    rendered?: string
  }
  /** The date the revision was published, in the site's timezone. */
  date?: string
  /** The date the revision was published, as GMT. */
  date_gmt?: string
  /** The excerpt for the post. */
  excerpt?: {
    /** Whether the excerpt is protected with a password. */
    protected?: boolean
    /** Excerpt for the post, as it exists in the database. */
    raw?: string
    /** HTML excerpt for the post, transformed for display. */
    rendered?: string
  }
  /** The globally unique identifier for the post. */
  guid?: {
    /** GUID for the post, as it exists in the database. */
    raw?: string
    /** GUID for the post, transformed for display. */
    rendered?: string
  }
  /** Unique identifier for the revision. */
  id?: number
  /** Meta fields. */
  meta?: {
    footnotes?: string
  }
  /** The date the revision was last modified, in the site's timezone. */
  modified?: string
  /** The date the revision was last modified, as GMT. */
  modified_gmt?: string
  /** The ID for the parent of the revision. */
  parent?: number
  /** Preview link for the post. */
  preview_link?: string
  /** An alphanumeric identifier for the revision unique to its type. */
  slug?: string
  /** The title for the post. */
  title?: {
    /** Title for the post, as it exists in the database. */
    raw?: string
    /** HTML title for the post, transformed for display. */
    rendered?: string
  }
}

export type PageRevision2 = {
  /** The ID for the author of the revision. */
  author?: number
  /** The content for the post. */
  content?: {
    /** Version of the content block format used by the post. */
    block_version?: number
    /** Whether the content is protected with a password. */
    protected?: boolean
    /** Content for the post, as it exists in the database. */
    raw?: string
    /** HTML content for the post, transformed for display. */
    rendered?: string
  }
  /** The date the revision was published, in the site's timezone. */
  date?: string
  /** The date the revision was published, as GMT. */
  date_gmt?: string
  /** The excerpt for the post. */
  excerpt?: {
    /** Whether the excerpt is protected with a password. */
    protected?: boolean
    /** Excerpt for the post, as it exists in the database. */
    raw?: string
    /** HTML excerpt for the post, transformed for display. */
    rendered?: string
  }
  /** The globally unique identifier for the post. */
  guid?: {
    /** GUID for the post, as it exists in the database. */
    raw?: string
    /** GUID for the post, transformed for display. */
    rendered?: string
  }
  /** Unique identifier for the revision. */
  id?: number
  /** Meta fields. */
  meta?: {
    footnotes?: string
  }
  /** The date the revision was last modified, in the site's timezone. */
  modified?: string
  /** The date the revision was last modified, as GMT. */
  modified_gmt?: string
  /** The ID for the parent of the revision. */
  parent?: number
  /** An alphanumeric identifier for the revision unique to its type. */
  slug?: string
  /** The title for the post. */
  title?: {
    /** Title for the post, as it exists in the database. */
    raw?: string
    /** HTML title for the post, transformed for display. */
    rendered?: string
  }
}

export type PatternDirectoryItem = {
  /** The block types which can use this pattern. */
  block_types?: Array<string>
  /** The pattern's category slugs. */
  categories?: Array<string>
  /** The pattern content. */
  content?: string
  /** A description of the pattern. */
  description?: string
  /** The pattern ID. */
  id?: number
  /** The pattern's keywords. */
  keywords?: Array<string>
  /** The pattern title, in human readable format. */
  title?: string
  /** The preferred width of the viewport when previewing a pattern, in pixels. */
  viewport_width?: number
}

export type Plugin = {
  /** The plugin author. */
  author?: string
  /** Plugin author's website address. */
  author_uri?: string
  /** The plugin description. */
  description?: {
    /** The raw plugin description. */
    raw?: string
    /** The plugin description formatted for display. */
    rendered?: string
  }
  /** The plugin name. */
  name?: string
  /** Whether the plugin can only be activated network-wide. */
  network_only?: boolean
  /** The plugin file. */
  plugin?: string
  /** The plugin's website address. */
  plugin_uri?: string
  /** Minimum required version of PHP. */
  requires_php?: string
  /** Minimum required version of WordPress. */
  requires_wp?: string
  /** The plugin activation status. */
  status?: "inactive" | "active"
  /** The plugin's text domain. */
  textdomain?: string
  /** The plugin version number. */
  version?: string
}

export type Post = {
  /** The ID for the author of the post. */
  author?: number
  /** The terms assigned to the post in the category taxonomy. */
  categories?: Array<number>
  /** An array of the class names for the post container element. */
  class_list?: Array<string>
  /** Whether or not comments are open on the post. */
  comment_status?: "open" | "closed"
  /** The content for the post. */
  content?: {
    /** Version of the content block format used by the post. */
    block_version?: number
    /** Whether the content is protected with a password. */
    protected?: boolean
    /** Content for the post, as it exists in the database. */
    raw?: string
    /** HTML content for the post, transformed for display. */
    rendered?: string
  }
  /** The date the post was published, in the site's timezone. */
  date?: string | null
  /** The date the post was published, as GMT. */
  date_gmt?: string | null
  /** The excerpt for the post. */
  excerpt?: {
    /** Whether the excerpt is protected with a password. */
    protected?: boolean
    /** Excerpt for the post, as it exists in the database. */
    raw?: string
    /** HTML excerpt for the post, transformed for display. */
    rendered?: string
  }
  /** The ID of the featured media for the post. */
  featured_media?: number
  /** The format for the post. */
  format?: "standard" | "aside" | "chat" | "gallery" | "link" | "image" | "quote" | "status" | "video" | "audio"
  /** Slug automatically generated from the post title. */
  generated_slug?: string
  /** The globally unique identifier for the post. */
  guid?: {
    /** GUID for the post, as it exists in the database. */
    raw?: string
    /** GUID for the post, transformed for display. */
    rendered?: string
  }
  /** Unique identifier for the post. */
  id?: number
  /** URL to the post. */
  link?: string
  /** Meta fields. */
  meta?: {
    footnotes?: string
  }
  /** The date the post was last modified, in the site's timezone. */
  modified?: string
  /** The date the post was last modified, as GMT. */
  modified_gmt?: string
  /** A password to protect access to the content and excerpt. */
  password?: string
  /** Permalink template for the post. */
  permalink_template?: string
  /** Whether or not the post can be pinged. */
  ping_status?: "open" | "closed"
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string
  /** A named status for the post. */
  status?: "publish" | "future" | "draft" | "pending" | "private"
  /** Whether or not the post should be treated as sticky. */
  sticky?: boolean
  /** The terms assigned to the post in the post_tag taxonomy. */
  tags?: Array<number>
  /** The theme file to use to display the post. */
  template?: string
  /** The title for the post. */
  title?: {
    /** Title for the post, as it exists in the database. */
    raw?: string
    /** HTML title for the post, transformed for display. */
    rendered?: string
  }
  /** Type of post. */
  type?: string
}

export type PostRevision = {
  /** The ID for the author of the revision. */
  author?: number
  /** The content for the post. */
  content?: {
    /** Version of the content block format used by the post. */
    block_version?: number
    /** Whether the content is protected with a password. */
    protected?: boolean
    /** Content for the post, as it exists in the database. */
    raw?: string
    /** HTML content for the post, transformed for display. */
    rendered?: string
  }
  /** The date the revision was published, in the site's timezone. */
  date?: string
  /** The date the revision was published, as GMT. */
  date_gmt?: string
  /** The excerpt for the post. */
  excerpt?: {
    /** Whether the excerpt is protected with a password. */
    protected?: boolean
    /** Excerpt for the post, as it exists in the database. */
    raw?: string
    /** HTML excerpt for the post, transformed for display. */
    rendered?: string
  }
  /** The globally unique identifier for the post. */
  guid?: {
    /** GUID for the post, as it exists in the database. */
    raw?: string
    /** GUID for the post, transformed for display. */
    rendered?: string
  }
  /** Unique identifier for the revision. */
  id?: number
  /** Meta fields. */
  meta?: {
    footnotes?: string
  }
  /** The date the revision was last modified, in the site's timezone. */
  modified?: string
  /** The date the revision was last modified, as GMT. */
  modified_gmt?: string
  /** The ID for the parent of the revision. */
  parent?: number
  /** Preview link for the post. */
  preview_link?: string
  /** An alphanumeric identifier for the revision unique to its type. */
  slug?: string
  /** The title for the post. */
  title?: {
    /** Title for the post, as it exists in the database. */
    raw?: string
    /** HTML title for the post, transformed for display. */
    rendered?: string
  }
}

export type PostRevision2 = {
  /** The ID for the author of the revision. */
  author?: number
  /** The content for the post. */
  content?: {
    /** Version of the content block format used by the post. */
    block_version?: number
    /** Whether the content is protected with a password. */
    protected?: boolean
    /** Content for the post, as it exists in the database. */
    raw?: string
    /** HTML content for the post, transformed for display. */
    rendered?: string
  }
  /** The date the revision was published, in the site's timezone. */
  date?: string
  /** The date the revision was published, as GMT. */
  date_gmt?: string
  /** The excerpt for the post. */
  excerpt?: {
    /** Whether the excerpt is protected with a password. */
    protected?: boolean
    /** Excerpt for the post, as it exists in the database. */
    raw?: string
    /** HTML excerpt for the post, transformed for display. */
    rendered?: string
  }
  /** The globally unique identifier for the post. */
  guid?: {
    /** GUID for the post, as it exists in the database. */
    raw?: string
    /** GUID for the post, transformed for display. */
    rendered?: string
  }
  /** Unique identifier for the revision. */
  id?: number
  /** Meta fields. */
  meta?: {
    footnotes?: string
  }
  /** The date the revision was last modified, in the site's timezone. */
  modified?: string
  /** The date the revision was last modified, as GMT. */
  modified_gmt?: string
  /** The ID for the parent of the revision. */
  parent?: number
  /** An alphanumeric identifier for the revision unique to its type. */
  slug?: string
  /** The title for the post. */
  title?: {
    /** Title for the post, as it exists in the database. */
    raw?: string
    /** HTML title for the post, transformed for display. */
    rendered?: string
  }
}

export type SearchResult = {
  /** Unique identifier for the object. */
  id?: number | string
  /** Object subtype. */
  subtype?: "post" | "page" | "category" | "post_tag"
  /** The title for the object. */
  title?: string
  /** Object type. */
  type?: "post" | "term" | "post-format"
  /** URL to the object. */
  url?: string
}

export type Settings = {
  /** A date format for all date strings. */
  date_format?: string
  /** Default post category. */
  default_category?: number
  /** Allow people to submit comments on new posts. */
  default_comment_status?: "open" | "closed"
  /** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
  default_ping_status?: "open" | "closed"
  /** Default post format. */
  default_post_format?: string
  /** Site tagline. */
  description?: string
  /** This address is used for admin purposes, like new user notification. */
  email?: string
  /** WordPress locale code. */
  language?: string
  /** The ID of the page that should display the latest posts */
  page_for_posts?: number
  /** The ID of the page that should be displayed on the front page */
  page_on_front?: number
  /** Blog pages show at most. */
  posts_per_page?: number
  /** What to show on the front page */
  show_on_front?: string
  /** Site icon. */
  site_icon?: number
  /** Site logo. */
  site_logo?: number
  /** A day number of the week that the week should start on. */
  start_of_week?: number
  /** A time format for all time strings. */
  time_format?: string
  /** A city in the same timezone as you. */
  timezone?: string
  /** Site title. */
  title?: string
  /** Site URL. */
  url?: string
  /** Convert emoticons like :-) and :-P to graphics on display. */
  use_smilies?: boolean
}

export type Sidebar = {
  /** HTML content to append to the sidebar title when displayed. Default is a closing h2 element. */
  after_title?: string
  /** HTML content to append to each widget's HTML output when assigned to this sidebar. Default is a closing list item element. */
  after_widget?: string
  /** HTML content to prepend to the sidebar title when displayed. Default is an opening h2 element. */
  before_title?: string
  /** HTML content to prepend to each widget's HTML output when assigned to this sidebar. Default is an opening list item element. */
  before_widget?: string
  /** Extra CSS class to assign to the sidebar in the Widgets interface. */
  class?: string
  /** Description of sidebar. */
  description?: string
  /** ID of sidebar. */
  id?: string
  /** Unique name identifying the sidebar. */
  name?: string
  /** Status of sidebar. */
  status?: "active" | "inactive"
  /** Nested widgets. */
  widgets?: Array<Record<string, unknown> | string>
}

export type Status = {
  /** Whether posts of this status may have floating published dates. */
  date_floating?: boolean
  /** The title for the status. */
  name?: string
  /** Whether posts with this status should be private. */
  private?: boolean
  /** Whether posts with this status should be protected. */
  protected?: boolean
  /** Whether posts of this status should be shown in the front end of the site. */
  public?: boolean
  /** Whether posts with this status should be publicly-queryable. */
  queryable?: boolean
  /** Whether to include posts in the edit listing for their post type. */
  show_in_list?: boolean
  /** An alphanumeric identifier for the status. */
  slug?: string
}

export type Tag = {
  /** Number of published posts for the term. */
  count?: number
  /** HTML description of the term. */
  description?: string
  /** Unique identifier for the term. */
  id?: number
  /** URL of the term. */
  link?: string
  /** Meta fields. */
  meta?: Record<string, unknown>
  /** HTML title for the term. */
  name: string
  /** An alphanumeric identifier for the term unique to its type. */
  slug?: string
  /** Type attribution for the term. */
  taxonomy?: "post_tag"
}

export type Taxonomy = {
  /** All capabilities used by the taxonomy. */
  capabilities?: Record<string, unknown>
  /** A human-readable description of the taxonomy. */
  description?: string
  /** Whether or not the taxonomy should have children. */
  hierarchical?: boolean
  /** Human-readable labels for the taxonomy for various contexts. */
  labels?: Record<string, unknown>
  /** The title for the taxonomy. */
  name?: string
  /** REST base route for the taxonomy. */
  rest_base?: string
  /** REST namespace route for the taxonomy. */
  rest_namespace?: string
  /** Whether or not the term cloud should be displayed. */
  show_cloud?: boolean
  /** An alphanumeric identifier for the taxonomy. */
  slug?: string
  /** Types associated with the taxonomy. */
  types?: Array<string>
  /** The visibility settings for the taxonomy. */
  visibility?: {
    /** Whether a taxonomy is intended for use publicly either via the admin interface or by front-end users. */
    public?: boolean
    /** Whether the taxonomy is publicly queryable. */
    publicly_queryable?: boolean
    /** Whether to allow automatic creation of taxonomy columns on associated post-types table. */
    show_admin_column?: boolean
    /** Whether to make the taxonomy available for selection in navigation menus. */
    show_in_nav_menus?: boolean
    /** Whether to show the taxonomy in the quick/bulk edit panel. */
    show_in_quick_edit?: boolean
    /** Whether to generate a default UI for managing this taxonomy. */
    show_ui?: boolean
  }
}

export type WpTemplatePart = {
  /** Where the template part is intended for use (header, footer, etc.) */
  area?: string
  /** The ID for the author of the template. */
  author?: number
  /** Human readable text for the author. */
  author_text?: string
  /** Content of template. */
  content?:
    | {
        /** Version of the content block format used by the template. */
        block_version?: number
        /** Content for the template, as it exists in the database. */
        raw?: string
      }
    | string
  /** Description of template. */
  description?: string
  /** Theme file exists. */
  has_theme_file?: boolean
  /** ID of template. */
  id?: string
  /** The date the template was last modified, in the site's timezone. */
  modified?: string
  /** Source of a customized template */
  origin?: string
  /** Where the template originally comes from e.g. 'theme' */
  original_source?: "theme" | "plugin" | "site" | "user"
  /** Unique slug identifying the template. */
  slug: string
  /** Source of template */
  source?: string
  /** Status of template. */
  status?: "publish" | "future" | "draft" | "pending" | "private"
  /** Theme identifier for the template. */
  theme?: string
  /** Title of template. */
  title?:
    | {
        /** Title for the template, as it exists in the database. */
        raw?: string
        /** HTML title for the template, transformed for display. */
        rendered?: string
      }
    | string
  /** Type of template. */
  type?: string
  /** Post ID. */
  wp_id?: number
}

export type WpTemplate = {
  /** The ID for the author of the template. */
  author?: number
  /** Human readable text for the author. */
  author_text?: string
  /** Content of template. */
  content?:
    | {
        /** Version of the content block format used by the template. */
        block_version?: number
        /** Content for the template, as it exists in the database. */
        raw?: string
      }
    | string
  /** Description of template. */
  description?: string
  /** Theme file exists. */
  has_theme_file?: boolean
  /** ID of template. */
  id?: string
  /** Whether a template is a custom template. */
  is_custom?: boolean
  /** The date the template was last modified, in the site's timezone. */
  modified?: string
  /** Source of a customized template */
  origin?: string
  /** Where the template originally comes from e.g. 'theme' */
  original_source?: "theme" | "plugin" | "site" | "user"
  /** Plugin that registered the template. */
  plugin?: string
  /** Unique slug identifying the template. */
  slug: string
  /** Source of template */
  source?: string
  /** Status of template. */
  status?: "publish" | "future" | "draft" | "pending" | "private"
  /** Theme identifier for the template. */
  theme?: string
  /** Title of template. */
  title?:
    | {
        /** Title for the template, as it exists in the database. */
        raw?: string
        /** HTML title for the template, transformed for display. */
        rendered?: string
      }
    | string
  /** Type of template. */
  type?: string
  /** Post ID. */
  wp_id?: number
}

export type Theme = {
  /** The theme author. */
  author?: {
    /** The theme author's name, as found in the theme header. */
    raw?: string
    /** HTML for the theme author, transformed for display. */
    rendered?: string
  }
  /** The website of the theme author. */
  author_uri?: {
    /** The website of the theme author, as found in the theme header. */
    raw?: string
    /** The website of the theme author, transformed for display. */
    rendered?: string
  }
  /** A list of allowed area values for template parts. */
  default_template_part_areas?: Array<{
    area?: string
    area_tag?: string
    description?: string
    icon?: string
    label?: string
  }>
  /** A list of default template types. */
  default_template_types?: Array<{
    description?: string
    slug?: string
    title?: string
  }>
  /** A description of the theme. */
  description?: {
    /** The theme description, as found in the theme header. */
    raw?: string
    /** The theme description, transformed for display. */
    rendered?: string
  }
  /** Whether the theme is a block-based theme. */
  is_block_theme?: boolean
  /** The name of the theme. */
  name?: {
    /** The theme name, as found in the theme header. */
    raw?: string
    /** The theme name, transformed for display. */
    rendered?: string
  }
  /** The minimum PHP version required for the theme to work. */
  requires_php?: string
  /** The minimum WordPress version required for the theme to work. */
  requires_wp?: string
  /** The theme's screenshot URL. */
  screenshot?: string
  /** A named status for the theme. */
  status?: "inactive" | "active"
  /** The theme's stylesheet. This uniquely identifies the theme. */
  stylesheet?: string
  /** The uri for the theme's stylesheet directory. */
  stylesheet_uri?: string
  /** Tags indicating styles and features of the theme. */
  tags?: {
    /** The theme tags, as found in the theme header. */
    raw?: Array<string>
    /** The theme tags, transformed for display. */
    rendered?: string
  }
  /** The theme's template. If this is a child theme, this refers to the parent theme, otherwise this is the same as the theme's stylesheet. */
  template?: string
  /** The uri for the theme's template directory. If this is a child theme, this refers to the parent theme, otherwise this is the same as the theme's stylesheet directory. */
  template_uri?: string
  /** The theme's text domain. */
  textdomain?: string
  /** Features supported by this theme. */
  theme_supports?: {
    /** Whether theme opts in to wide alignment CSS class. */
    "align-wide"?: boolean
    /** Whether posts and comments RSS feed links are added to head. */
    "automatic-feed-links"?: boolean
    /** Whether a theme uses block-based template parts. */
    "block-template-parts"?: boolean
    /** Whether a theme uses block-based templates. */
    "block-templates"?: boolean
    /** Custom background if defined by the theme. */
    "custom-background"?:
      | boolean
      | {
          "default-attachment"?: "scroll" | "fixed"
          "default-color"?: string
          "default-image"?: string
          "default-position-x"?: "left" | "center" | "right"
          "default-position-y"?: "left" | "center" | "right"
          "default-preset"?: "default" | "fill" | "fit" | "repeat" | "custom"
          "default-repeat"?: "repeat-x" | "repeat-y" | "repeat" | "no-repeat"
          "default-size"?: "auto" | "contain" | "cover"
        }
    /** Custom header if defined by the theme. */
    "custom-header"?:
      | boolean
      | {
          "default-image"?: string
          "default-text-color"?: string
          "flex-height"?: boolean
          "flex-width"?: boolean
          "header-text"?: boolean
          height?: number
          "random-default"?: boolean
          uploads?: boolean
          video?: boolean
          width?: number
        }
    /** Custom logo if defined by the theme. */
    "custom-logo"?:
      | boolean
      | {
          "flex-height"?: boolean
          "flex-width"?: boolean
          "header-text"?: Array<string>
          height?: number
          "unlink-homepage-logo"?: boolean
          width?: number
        }
    /** Whether the theme enables Selective Refresh for Widgets being managed with the Customizer. */
    "customize-selective-refresh-widgets"?: boolean
    /** Whether theme opts in to the dark editor style UI. */
    "dark-editor-style"?: boolean
    /** Whether the theme disables custom colors. */
    "disable-custom-colors"?: boolean
    /** Whether the theme disables custom font sizes. */
    "disable-custom-font-sizes"?: boolean
    /** Whether the theme disables custom gradients. */
    "disable-custom-gradients"?: boolean
    /** Whether the theme disables generated layout styles. */
    "disable-layout-styles"?: boolean
    /** Custom color palette if defined by the theme. */
    "editor-color-palette"?:
      | boolean
      | Array<{
          color?: string
          name?: string
          slug?: string
        }>
    /** Custom font sizes if defined by the theme. */
    "editor-font-sizes"?:
      | boolean
      | Array<{
          name?: string
          size?: number
          slug?: string
        }>
    /** Custom gradient presets if defined by the theme. */
    "editor-gradient-presets"?:
      | boolean
      | Array<{
          gradient?: string
          name?: string
          slug?: string
        }>
    /** Custom spacing sizes if defined by the theme. */
    "editor-spacing-sizes"?:
      | boolean
      | Array<{
          name?: string
          size?: string
          slug?: string
        }>
    /** Whether theme opts in to the editor styles CSS wrapper. */
    "editor-styles"?: boolean
    /** Post formats supported. */
    formats?: Array<string>
    /** Allows use of HTML5 markup for search forms, comment forms, comment lists, gallery, and caption. */
    html5?:
      | boolean
      | Array<"search-form" | "comment-form" | "comment-list" | "gallery" | "caption" | "script" | "style">
    /** The post types that support thumbnails or true if all post types are supported. */
    "post-thumbnails"?: boolean | Array<string>
    /** Whether the theme supports responsive embedded content. */
    "responsive-embeds"?: boolean
    /** Whether the theme can manage the document title tag. */
    "title-tag"?: boolean
    /** Whether theme opts in to default WordPress block styles for viewing. */
    "wp-block-styles"?: boolean
  }
  /** The URI of the theme's webpage. */
  theme_uri?: {
    /** The URI of the theme's webpage, as found in the theme header. */
    raw?: string
    /** The URI of the theme's webpage, transformed for display. */
    rendered?: string
  }
  /** The theme's current version. */
  version?: string
}

export type Type = {
  /** All capabilities used by the post type. */
  capabilities?: Record<string, unknown>
  /** A human-readable description of the post type. */
  description?: string
  /** If the value is a string, the value will be used as the archive slug. If the value is false the post type has no archive. */
  has_archive?: string | boolean
  /** Whether or not the post type should have children. */
  hierarchical?: boolean
  /** The icon for the post type. */
  icon?: string | null
  /** Human-readable labels for the post type for various contexts. */
  labels?: Record<string, unknown>
  /** The title for the post type. */
  name?: string
  /** REST base route for the post type. */
  rest_base?: string
  /** REST route's namespace for the post type. */
  rest_namespace?: string
  /** An alphanumeric identifier for the post type. */
  slug?: string
  /** All features, supported by the post type. */
  supports?: Record<string, unknown>
  /** Taxonomies associated with post type. */
  taxonomies?: Array<string>
  /** The block template associated with the post type. */
  template?: Array<unknown>
  /** The template_lock associated with the post type, or false if none. */
  template_lock?: "all" | "insert" | "contentOnly" | false
  /** Whether or not the post type can be viewed. */
  viewable?: boolean
  /** The visibility settings for the post type. */
  visibility?: {
    /** Whether to make the post type available for selection in navigation menus. */
    show_in_nav_menus?: boolean
    /** Whether to generate a default UI for managing this post type. */
    show_ui?: boolean
  }
}

export type User = {
  /** Avatar URLs for the user. */
  avatar_urls?: {
    /** Avatar URL with image size of 24 pixels. */
    "24"?: string
    /** Avatar URL with image size of 48 pixels. */
    "48"?: string
    /** Avatar URL with image size of 96 pixels. */
    "96"?: string
  }
  /** All capabilities assigned to the user. */
  capabilities?: Record<string, unknown>
  /** Description of the user. */
  description?: string
  /** The email address for the user. */
  email: string
  /** Any extra capabilities assigned to the user. */
  extra_capabilities?: Record<string, unknown>
  /** First name for the user. */
  first_name?: string
  /** Unique identifier for the user. */
  id?: number
  /** Last name for the user. */
  last_name?: string
  /** Author URL of the user. */
  link?: string
  /** Locale for the user. */
  locale?: "" | "en_US"
  /** Meta fields. */
  meta?: {
    persisted_preferences?: {
      /** The date and time the preferences were updated. */
      _modified?: string
    } & { [key: string]: unknown }
  }
  /** Display name for the user. */
  name?: string
  /** The nickname for the user. */
  nickname?: string
  /** Password for the user (never included). */
  password: string
  /** Registration date for the user. */
  registered_date?: string
  /** Roles assigned to the user. */
  roles?: Array<string>
  /** An alphanumeric identifier for the user. */
  slug?: string
  /** URL of the user. */
  url?: string
  /** Login name for the user. */
  username: string
}

export type ApplicationPassword = {
  /** A UUID provided by the application to uniquely identify it. It is recommended to use an UUID v5 with the URL or DNS namespace. */
  app_id?: string | ""
  /** The GMT date the application password was created. */
  created?: string
  /** The IP address the application password was last used by. */
  last_ip?: string | null
  /** The GMT date the application password was last used. */
  last_used?: string | null
  /** The name of the application password. */
  name: string
  /** The generated password. Only available after adding an application. */
  password?: string
  /** The unique identifier for the application password. */
  uuid?: string
}

export type WidgetType = {
  /** Class name */
  classname?: string
  /** Description of the widget. */
  description?: string
  /** Unique slug identifying the widget type. */
  id?: string
  /** Whether the widget supports multiple instances */
  is_multi?: boolean
  /** Human-readable name identifying the widget type. */
  name?: string
}

export type Widget = {
  /** URL-encoded form data from the widget admin form. Used to update a widget that does not support instance. Write only. */
  form_data?: string
  /** Unique identifier for the widget. */
  id?: string
  /** The type of the widget. Corresponds to ID in widget-types endpoint. */
  id_base?: string
  /** Instance settings of the widget, if supported. */
  instance?: {
    /** Base64 encoded representation of the instance settings. */
    encoded?: string
    /** Cryptographic hash of the instance settings. */
    hash?: string
    /** Unencoded instance settings, if supported. */
    raw?: Record<string, unknown>
  }
  /** HTML representation of the widget. */
  rendered?: string
  /** HTML representation of the widget admin form. */
  rendered_form?: string
  /** The sidebar the widget belongs to. */
  sidebar: string
}

export type WpPatternCategory = {
  /** Number of published posts for the term. */
  count?: number
  /** HTML description of the term. */
  description?: string
  /** Unique identifier for the term. */
  id?: number
  /** URL of the term. */
  link?: string
  /** Meta fields. */
  meta?: Record<string, unknown>
  /** HTML title for the term. */
  name: string
  /** An alphanumeric identifier for the term unique to its type. */
  slug?: string
  /** Type attribution for the term. */
  taxonomy?: "wp_pattern_category"
}

export type GetWpV2BlockDirectorySearchResponse = Array<BlockDirectoryItem>

export type GetWpV2BlocksResponse = Array<WpBlock>

export type PostWpV2BlocksRequest = {
  /** The content for the post. */
  content?: {
    /** Version of the content block format used by the post. */
    block_version?: number
    /** Whether the content is protected with a password. */
    protected?: boolean
    /** Content for the post, as it exists in the database. */
    raw?: string
  }
  /** The date the post was published, in the site's timezone. */
  date?: string | null
  /** The date the post was published, as GMT. */
  date_gmt?: string | null
  /** The excerpt for the post. */
  excerpt?: {
    /** Whether the excerpt is protected with a password. */
    protected?: boolean
    /** Excerpt for the post, as it exists in the database. */
    raw?: string
    /** HTML excerpt for the post, transformed for display. */
    rendered?: string
  }
  /** Meta fields. */
  meta?: {
    footnotes?: string
    wp_pattern_sync_status?: "partial" | "unsynced"
  }
  /** A password to protect access to the content and excerpt. */
  password?: string
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string
  /** A named status for the post. */
  status?: "publish" | "future" | "draft" | "pending" | "private"
  /** The theme file to use to display the post. */
  template?: string
  /** The title for the post. */
  title?: {
    /** Title for the post, as it exists in the database. */
    raw?: string
  }
  /** The terms assigned to the post in the wp_pattern_category taxonomy. */
  wp_pattern_category?: Array<number>
}

export type PostWpV2BlocksByIdRequest = {
  /** The content for the post. */
  content?: {
    /** Version of the content block format used by the post. */
    block_version?: number
    /** Whether the content is protected with a password. */
    protected?: boolean
    /** Content for the post, as it exists in the database. */
    raw?: string
  }
  /** The date the post was published, in the site's timezone. */
  date?: string | null
  /** The date the post was published, as GMT. */
  date_gmt?: string | null
  /** The excerpt for the post. */
  excerpt?: {
    /** Whether the excerpt is protected with a password. */
    protected?: boolean
    /** Excerpt for the post, as it exists in the database. */
    raw?: string
    /** HTML excerpt for the post, transformed for display. */
    rendered?: string
  }
  /** Meta fields. */
  meta?: {
    footnotes?: string
    wp_pattern_sync_status?: "partial" | "unsynced"
  }
  /** A password to protect access to the content and excerpt. */
  password?: string
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string
  /** A named status for the post. */
  status?: "publish" | "future" | "draft" | "pending" | "private"
  /** The theme file to use to display the post. */
  template?: string
  /** The title for the post. */
  title?: {
    /** Title for the post, as it exists in the database. */
    raw?: string
  }
  /** The terms assigned to the post in the wp_pattern_category taxonomy. */
  wp_pattern_category?: Array<number>
}

export type PostWpV2BlocksByIdAutosavesRequest = {
  /** The content for the post. */
  content?: {
    /** Version of the content block format used by the post. */
    block_version?: number
    /** Whether the content is protected with a password. */
    protected?: boolean
    /** Content for the post, as it exists in the database. */
    raw?: string
  }
  /** The date the post was published, in the site's timezone. */
  date?: string | null
  /** The date the post was published, as GMT. */
  date_gmt?: string | null
  /** The excerpt for the post. */
  excerpt?: {
    /** Whether the excerpt is protected with a password. */
    protected?: boolean
    /** Excerpt for the post, as it exists in the database. */
    raw?: string
    /** HTML excerpt for the post, transformed for display. */
    rendered?: string
  }
  /** Meta fields. */
  meta?: {
    footnotes?: string
    wp_pattern_sync_status?: "partial" | "unsynced"
  }
  /** The ID for the parent of the autosave. */
  parent?: number
  /** A password to protect access to the content and excerpt. */
  password?: string
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string
  /** A named status for the post. */
  status?: "publish" | "future" | "draft" | "pending" | "private"
  /** The theme file to use to display the post. */
  template?: string
  /** The title for the post. */
  title?: {
    /** Title for the post, as it exists in the database. */
    raw?: string
  }
  /** The terms assigned to the post in the wp_pattern_category taxonomy. */
  wp_pattern_category?: Array<number>
}

export type GetWpV2BlocksByParentRevisionsResponse = Array<WpBlockRevision2>

export type GetWpV2CategoriesResponse = Array<Category>

export type PostWpV2CategoriesRequest = {
  /** HTML description of the term. */
  description?: string
  /** Meta fields. */
  meta?: Record<string, unknown>
  /** HTML title for the term. */
  name: string
  /** The parent term ID. */
  parent?: number
  /** An alphanumeric identifier for the term unique to its type. */
  slug?: string
}

export type PostWpV2CategoriesByIdRequest = {
  /** HTML description of the term. */
  description?: string
  /** Meta fields. */
  meta?: Record<string, unknown>
  /** HTML title for the term. */
  name?: string
  /** The parent term ID. */
  parent?: number
  /** An alphanumeric identifier for the term unique to its type. */
  slug?: string
}

export type GetWpV2CommentsResponse = Array<Comment>

export type PostWpV2CommentsRequest = {
  /** The ID of the user object, if author was a user. */
  author?: number
  /** Email address for the comment author. */
  author_email?: string
  /** IP address for the comment author. */
  author_ip?: string
  /** Display name for the comment author. */
  author_name?: string
  /** URL for the comment author. */
  author_url?: string
  /** User agent for the comment author. */
  author_user_agent?: string
  /** The content for the comment. */
  content?: {
    /** Content for the comment, as it exists in the database. */
    raw?: string
    /** HTML content for the comment, transformed for display. */
    rendered?: string
  }
  /** The date the comment was published, in the site's timezone. */
  date?: string
  /** The date the comment was published, as GMT. */
  date_gmt?: string
  /** Meta fields. */
  meta?: {
    /** Note resolution status */
    _wp_note_status?: "resolved" | "reopen"
  }
  /** The ID for the parent of the comment. */
  parent?: number
  /** The ID of the associated post object. */
  post?: number
  /** State of the comment. */
  status?: string
}

export type PostWpV2CommentsByIdRequest = {
  /** The ID of the user object, if author was a user. */
  author?: number
  /** Email address for the comment author. */
  author_email?: string
  /** IP address for the comment author. */
  author_ip?: string
  /** Display name for the comment author. */
  author_name?: string
  /** URL for the comment author. */
  author_url?: string
  /** User agent for the comment author. */
  author_user_agent?: string
  /** The content for the comment. */
  content?: {
    /** Content for the comment, as it exists in the database. */
    raw?: string
    /** HTML content for the comment, transformed for display. */
    rendered?: string
  }
  /** The date the comment was published, in the site's timezone. */
  date?: string
  /** The date the comment was published, as GMT. */
  date_gmt?: string
  /** Meta fields. */
  meta?: {
    /** Note resolution status */
    _wp_note_status?: "resolved" | "reopen"
  }
  /** The ID for the parent of the comment. */
  parent?: number
  /** The ID of the associated post object. */
  post?: number
  /** State of the comment. */
  status?: string
}

export type GetWpV2FontCollectionsResponse = Array<FontCollection>

export type GetWpV2FontFamiliesResponse = Array<WpFontFamily>

export type PostWpV2FontFamiliesRequest = {
  /** font-family declaration in theme.json format, encoded as a string. */
  font_family_settings: string
  /** Version of the theme.json schema used for the typography settings. */
  theme_json_version?: number
}

export type GetWpV2FontFamiliesByFontFamilyIdFontFacesResponse = Array<WpFontFace>

export type PostWpV2FontFamiliesByFontFamilyIdFontFacesRequest = {
  /** font-face declaration in theme.json format, encoded as a string. */
  font_face_settings: string
  /** Version of the theme.json schema used for the typography settings. */
  theme_json_version?: number
}

export type PostWpV2FontFamiliesByIdRequest = {
  /** font-family declaration in theme.json format, encoded as a string. */
  font_family_settings: string
  /** Version of the theme.json schema used for the typography settings. */
  theme_json_version?: number
}

export type GetWpV2GlobalStylesByParentRevisionsResponse = Array<WpGlobalStylesRevision>

export type GetWpV2MediaResponse = Array<Attachment>

export type PostWpV2MediaRequest = {
  /** Alternative text to display when attachment is not displayed. */
  alt_text?: string
  /** The ID for the author of the post. */
  author?: number
  /** The attachment caption. */
  caption?: {
    /** Caption for the attachment, as it exists in the database. */
    raw?: string
    /** HTML caption for the attachment, transformed for display. */
    rendered?: string
  }
  /** Whether or not comments are open on the post. */
  comment_status?: "open" | "closed"
  /** The date the post was published, in the site's timezone. */
  date?: string | null
  /** The date the post was published, as GMT. */
  date_gmt?: string | null
  /** The attachment description. */
  description?: {
    /** Description for the attachment, as it exists in the database. */
    raw?: string
    /** HTML description for the attachment, transformed for display. */
    rendered?: string
  }
  /** The ID of the featured media for the post. */
  featured_media?: number
  /** Meta fields. */
  meta?: Record<string, unknown>
  /** Whether or not the post can be pinged. */
  ping_status?: "open" | "closed"
  /** The ID for the associated post of the attachment. */
  post?: number
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string
  /** A named status for the post. */
  status?: "publish" | "future" | "draft" | "pending" | "private"
  /** The theme file to use to display the post. */
  template?: string
  /** The title for the post. */
  title?: {
    /** Title for the post, as it exists in the database. */
    raw?: string
    /** HTML title for the post, transformed for display. */
    rendered?: string
  }
}

export type PostWpV2MediaByIdRequest = {
  /** Alternative text to display when attachment is not displayed. */
  alt_text?: string
  /** The ID for the author of the post. */
  author?: number
  /** The attachment caption. */
  caption?: {
    /** Caption for the attachment, as it exists in the database. */
    raw?: string
    /** HTML caption for the attachment, transformed for display. */
    rendered?: string
  }
  /** Whether or not comments are open on the post. */
  comment_status?: "open" | "closed"
  /** The date the post was published, in the site's timezone. */
  date?: string | null
  /** The date the post was published, as GMT. */
  date_gmt?: string | null
  /** The attachment description. */
  description?: {
    /** Description for the attachment, as it exists in the database. */
    raw?: string
    /** HTML description for the attachment, transformed for display. */
    rendered?: string
  }
  /** The ID of the featured media for the post. */
  featured_media?: number
  /** Meta fields. */
  meta?: Record<string, unknown>
  /** Whether or not the post can be pinged. */
  ping_status?: "open" | "closed"
  /** The ID for the associated post of the attachment. */
  post?: number
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string
  /** A named status for the post. */
  status?: "publish" | "future" | "draft" | "pending" | "private"
  /** The theme file to use to display the post. */
  template?: string
  /** The title for the post. */
  title?: {
    /** Title for the post, as it exists in the database. */
    raw?: string
    /** HTML title for the post, transformed for display. */
    rendered?: string
  }
}

export type PostWpV2MediaByIdEditRequest = {
  /** Alternative text to display when attachment is not displayed. */
  alt_text?: string
  /** The attachment caption. */
  caption?: {
    /** Caption for the attachment, as it exists in the database. */
    raw?: string
    /** HTML caption for the attachment, transformed for display. */
    rendered?: string
  }
  /** The attachment description. */
  description?: {
    /** Description for the attachment, as it exists in the database. */
    raw?: string
    /** HTML description for the attachment, transformed for display. */
    rendered?: string
  }
  /** As a percentage of the image, the height to crop the image to. DEPRECATED: Use `modifiers` instead. */
  height?: number
  /** Array of image edits. */
  modifiers?: Array<
    | {
        /** Flip arguments. */
        args: {
          /** Flip direction. */
          flip: {
            /** Whether to flip in the horizontal direction. */
            horizontal: boolean
            /** Whether to flip in the vertical direction. */
            vertical: boolean
          }
        }
        /** Flip type. */
        type: "flip"
      }
    | {
        /** Rotation arguments. */
        args: {
          /** Angle to rotate clockwise in degrees. */
          angle: number
        }
        /** Rotation type. */
        type: "rotate"
      }
    | {
        /** Crop arguments. */
        args: {
          /** Height of the crop as a percentage of the image height. */
          height: number
          /** Horizontal position from the left to begin the crop as a percentage of the image width. */
          left: number
          /** Vertical position from the top to begin the crop as a percentage of the image height. */
          top: number
          /** Width of the crop as a percentage of the image width. */
          width: number
        }
        /** Crop type. */
        type: "crop"
      }
  >
  /** The ID for the associated post of the attachment. */
  post?: number
  /** The amount to rotate the image clockwise in degrees. DEPRECATED: Use `modifiers` instead. */
  rotation?: number
  /** URL to the edited image file. */
  src: string
  /** The title for the post. */
  title?: {
    /** Title for the post, as it exists in the database. */
    raw?: string
    /** HTML title for the post, transformed for display. */
    rendered?: string
  }
  /** As a percentage of the image, the width to crop the image to. DEPRECATED: Use `modifiers` instead. */
  width?: number
  /** As a percentage of the image, the x position to start the crop from. DEPRECATED: Use `modifiers` instead. */
  x?: number
  /** As a percentage of the image, the y position to start the crop from. DEPRECATED: Use `modifiers` instead. */
  y?: number
}

export type PostWpV2MediaByIdPostProcessRequest = {
  action: "create-image-subsizes"
}

export type GetWpV2MenuItemsResponse = Array<NavMenuItem>

export type PostWpV2MenuItemsRequest = {
  /** Text for the title attribute of the link element for this menu item. */
  attr_title?: string
  /** Class names for the link element of this menu item. */
  classes?: Array<string>
  /** The description of this menu item. */
  description?: string
  /** The DB ID of the nav_menu_item that is this item's menu parent, if any, otherwise 0. */
  menu_order?: number
  /** The terms assigned to the object in the nav_menu taxonomy. */
  menus?: number
  /** Meta fields. */
  meta?: Record<string, unknown>
  /** The type of object originally represented, such as "category", "post", or "attachment". */
  object?: string
  /** The database ID of the original object this menu item represents, for example the ID for posts or the term_id for categories. */
  object_id?: number
  /** The ID for the parent of the object. */
  parent?: number
  /** A named status for the object. */
  status?: "publish" | "future" | "draft" | "pending" | "private"
  /** The target attribute of the link element for this menu item. */
  target?: "_blank" | ""
  /** The title for the object. */
  title?:
    | string
    | {
        /** Title for the object, as it exists in the database. */
        raw?: string
        /** HTML title for the object, transformed for display. */
        rendered?: string
      }
  /** The family of objects originally represented, such as "post_type" or "taxonomy". */
  type?: "taxonomy" | "post_type" | "post_type_archive" | "custom"
  /** The URL to which this menu item points. */
  url?: string
  /** The XFN relationship expressed in the link of this menu item. */
  xfn?: Array<string>
}

export type PostWpV2MenuItemsByIdRequest = {
  /** Text for the title attribute of the link element for this menu item. */
  attr_title?: string
  /** Class names for the link element of this menu item. */
  classes?: Array<string>
  /** The description of this menu item. */
  description?: string
  /** The DB ID of the nav_menu_item that is this item's menu parent, if any, otherwise 0. */
  menu_order?: number
  /** The terms assigned to the object in the nav_menu taxonomy. */
  menus?: number
  /** Meta fields. */
  meta?: Record<string, unknown>
  /** The type of object originally represented, such as "category", "post", or "attachment". */
  object?: string
  /** The database ID of the original object this menu item represents, for example the ID for posts or the term_id for categories. */
  object_id?: number
  /** The ID for the parent of the object. */
  parent?: number
  /** A named status for the object. */
  status?: "publish" | "future" | "draft" | "pending" | "private"
  /** The target attribute of the link element for this menu item. */
  target?: "_blank" | ""
  /** The title for the object. */
  title?:
    | string
    | {
        /** Title for the object, as it exists in the database. */
        raw?: string
        /** HTML title for the object, transformed for display. */
        rendered?: string
      }
  /** The family of objects originally represented, such as "post_type" or "taxonomy". */
  type?: "taxonomy" | "post_type" | "post_type_archive" | "custom"
  /** The URL to which this menu item points. */
  url?: string
  /** The XFN relationship expressed in the link of this menu item. */
  xfn?: Array<string>
}

export type PostWpV2MenuItemsByIdAutosavesRequest = {
  /** Text for the title attribute of the link element for this menu item. */
  attr_title?: string
  /** Class names for the link element of this menu item. */
  classes?: Array<string>
  /** The description of this menu item. */
  description?: string
  /** The DB ID of the nav_menu_item that is this item's menu parent, if any, otherwise 0. */
  menu_order?: number
  /** The terms assigned to the object in the nav_menu taxonomy. */
  menus?: number
  /** Meta fields. */
  meta?: Record<string, unknown>
  /** The type of object originally represented, such as "category", "post", or "attachment". */
  object?: string
  /** The database ID of the original object this menu item represents, for example the ID for posts or the term_id for categories. */
  object_id?: number
  /** The ID for the parent of the object. */
  parent?: number
  /** A named status for the object. */
  status?: "publish" | "future" | "draft" | "pending" | "private"
  /** The target attribute of the link element for this menu item. */
  target?: "_blank" | ""
  /** The title for the object. */
  title?:
    | string
    | {
        /** Title for the object, as it exists in the database. */
        raw?: string
        /** HTML title for the object, transformed for display. */
        rendered?: string
      }
  /** The family of objects originally represented, such as "post_type" or "taxonomy". */
  type?: "taxonomy" | "post_type" | "post_type_archive" | "custom"
  /** The URL to which this menu item points. */
  url?: string
  /** The XFN relationship expressed in the link of this menu item. */
  xfn?: Array<string>
}

export type GetWpV2MenusResponse = Array<NavMenu>

export type PostWpV2MenusRequest = {
  /** Whether to automatically add top level pages to this menu. */
  auto_add?: boolean
  /** HTML description of the term. */
  description?: string
  /** The locations assigned to the menu. */
  locations?: Array<string>
  /** Meta fields. */
  meta?: Record<string, unknown>
  /** HTML title for the term. */
  name: string
  /** An alphanumeric identifier for the term unique to its type. */
  slug?: string
}

export type PostWpV2MenusByIdRequest = {
  /** Whether to automatically add top level pages to this menu. */
  auto_add?: boolean
  /** HTML description of the term. */
  description?: string
  /** The locations assigned to the menu. */
  locations?: Array<string>
  /** Meta fields. */
  meta?: Record<string, unknown>
  /** HTML title for the term. */
  name?: string
  /** An alphanumeric identifier for the term unique to its type. */
  slug?: string
}

export type GetWpV2NavigationResponse = Array<WpNavigation>

export type PostWpV2NavigationRequest = {
  /** The content for the post. */
  content?: {
    /** Version of the content block format used by the post. */
    block_version?: number
    /** Whether the content is protected with a password. */
    protected?: boolean
    /** Content for the post, as it exists in the database. */
    raw?: string
    /** HTML content for the post, transformed for display. */
    rendered?: string
  }
  /** The date the post was published, in the site's timezone. */
  date?: string | null
  /** The date the post was published, as GMT. */
  date_gmt?: string | null
  /** A password to protect access to the content and excerpt. */
  password?: string
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string
  /** A named status for the post. */
  status?: "publish" | "future" | "draft" | "pending" | "private"
  /** The theme file to use to display the post. */
  template?: string
  /** The title for the post. */
  title?: {
    /** Title for the post, as it exists in the database. */
    raw?: string
    /** HTML title for the post, transformed for display. */
    rendered?: string
  }
}

export type PostWpV2NavigationByIdRequest = {
  /** The content for the post. */
  content?: {
    /** Version of the content block format used by the post. */
    block_version?: number
    /** Whether the content is protected with a password. */
    protected?: boolean
    /** Content for the post, as it exists in the database. */
    raw?: string
    /** HTML content for the post, transformed for display. */
    rendered?: string
  }
  /** The date the post was published, in the site's timezone. */
  date?: string | null
  /** The date the post was published, as GMT. */
  date_gmt?: string | null
  /** A password to protect access to the content and excerpt. */
  password?: string
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string
  /** A named status for the post. */
  status?: "publish" | "future" | "draft" | "pending" | "private"
  /** The theme file to use to display the post. */
  template?: string
  /** The title for the post. */
  title?: {
    /** Title for the post, as it exists in the database. */
    raw?: string
    /** HTML title for the post, transformed for display. */
    rendered?: string
  }
}

export type PostWpV2NavigationByIdAutosavesRequest = {
  /** The content for the post. */
  content?: {
    /** Version of the content block format used by the post. */
    block_version?: number
    /** Whether the content is protected with a password. */
    protected?: boolean
    /** Content for the post, as it exists in the database. */
    raw?: string
    /** HTML content for the post, transformed for display. */
    rendered?: string
  }
  /** The date the post was published, in the site's timezone. */
  date?: string | null
  /** The date the post was published, as GMT. */
  date_gmt?: string | null
  /** The ID for the parent of the autosave. */
  parent?: number
  /** A password to protect access to the content and excerpt. */
  password?: string
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string
  /** A named status for the post. */
  status?: "publish" | "future" | "draft" | "pending" | "private"
  /** The theme file to use to display the post. */
  template?: string
  /** The title for the post. */
  title?: {
    /** Title for the post, as it exists in the database. */
    raw?: string
    /** HTML title for the post, transformed for display. */
    rendered?: string
  }
}

export type GetWpV2NavigationByParentRevisionsResponse = Array<WpNavigationRevision2>

export type GetWpV2PagesResponse = Array<Page>

export type PostWpV2PagesRequest = {
  /** The ID for the author of the post. */
  author?: number
  /** Whether or not comments are open on the post. */
  comment_status?: "open" | "closed"
  /** The content for the post. */
  content?: {
    /** Version of the content block format used by the post. */
    block_version?: number
    /** Whether the content is protected with a password. */
    protected?: boolean
    /** Content for the post, as it exists in the database. */
    raw?: string
    /** HTML content for the post, transformed for display. */
    rendered?: string
  }
  /** The date the post was published, in the site's timezone. */
  date?: string | null
  /** The date the post was published, as GMT. */
  date_gmt?: string | null
  /** The excerpt for the post. */
  excerpt?: {
    /** Whether the excerpt is protected with a password. */
    protected?: boolean
    /** Excerpt for the post, as it exists in the database. */
    raw?: string
    /** HTML excerpt for the post, transformed for display. */
    rendered?: string
  }
  /** The ID of the featured media for the post. */
  featured_media?: number
  /** The order of the post in relation to other posts. */
  menu_order?: number
  /** Meta fields. */
  meta?: {
    footnotes?: string
  }
  /** The ID for the parent of the post. */
  parent?: number
  /** A password to protect access to the content and excerpt. */
  password?: string
  /** Whether or not the post can be pinged. */
  ping_status?: "open" | "closed"
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string
  /** A named status for the post. */
  status?: "publish" | "future" | "draft" | "pending" | "private"
  /** The theme file to use to display the post. */
  template?: string
  /** The title for the post. */
  title?: {
    /** Title for the post, as it exists in the database. */
    raw?: string
    /** HTML title for the post, transformed for display. */
    rendered?: string
  }
}

export type PostWpV2PagesByIdRequest = {
  /** The ID for the author of the post. */
  author?: number
  /** Whether or not comments are open on the post. */
  comment_status?: "open" | "closed"
  /** The content for the post. */
  content?: {
    /** Version of the content block format used by the post. */
    block_version?: number
    /** Whether the content is protected with a password. */
    protected?: boolean
    /** Content for the post, as it exists in the database. */
    raw?: string
    /** HTML content for the post, transformed for display. */
    rendered?: string
  }
  /** The date the post was published, in the site's timezone. */
  date?: string | null
  /** The date the post was published, as GMT. */
  date_gmt?: string | null
  /** The excerpt for the post. */
  excerpt?: {
    /** Whether the excerpt is protected with a password. */
    protected?: boolean
    /** Excerpt for the post, as it exists in the database. */
    raw?: string
    /** HTML excerpt for the post, transformed for display. */
    rendered?: string
  }
  /** The ID of the featured media for the post. */
  featured_media?: number
  /** The order of the post in relation to other posts. */
  menu_order?: number
  /** Meta fields. */
  meta?: {
    footnotes?: string
  }
  /** The ID for the parent of the post. */
  parent?: number
  /** A password to protect access to the content and excerpt. */
  password?: string
  /** Whether or not the post can be pinged. */
  ping_status?: "open" | "closed"
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string
  /** A named status for the post. */
  status?: "publish" | "future" | "draft" | "pending" | "private"
  /** The theme file to use to display the post. */
  template?: string
  /** The title for the post. */
  title?: {
    /** Title for the post, as it exists in the database. */
    raw?: string
    /** HTML title for the post, transformed for display. */
    rendered?: string
  }
}

export type PostWpV2PagesByIdAutosavesRequest = {
  /** The ID for the author of the post. */
  author?: number
  /** Whether or not comments are open on the post. */
  comment_status?: "open" | "closed"
  /** The content for the post. */
  content?: {
    /** Version of the content block format used by the post. */
    block_version?: number
    /** Whether the content is protected with a password. */
    protected?: boolean
    /** Content for the post, as it exists in the database. */
    raw?: string
    /** HTML content for the post, transformed for display. */
    rendered?: string
  }
  /** The date the post was published, in the site's timezone. */
  date?: string | null
  /** The date the post was published, as GMT. */
  date_gmt?: string | null
  /** The excerpt for the post. */
  excerpt?: {
    /** Whether the excerpt is protected with a password. */
    protected?: boolean
    /** Excerpt for the post, as it exists in the database. */
    raw?: string
    /** HTML excerpt for the post, transformed for display. */
    rendered?: string
  }
  /** The ID of the featured media for the post. */
  featured_media?: number
  /** The order of the post in relation to other posts. */
  menu_order?: number
  /** Meta fields. */
  meta?: {
    footnotes?: string
  }
  /** The ID for the parent of the post. */
  parent?: number
  /** A password to protect access to the content and excerpt. */
  password?: string
  /** Whether or not the post can be pinged. */
  ping_status?: "open" | "closed"
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string
  /** A named status for the post. */
  status?: "publish" | "future" | "draft" | "pending" | "private"
  /** The theme file to use to display the post. */
  template?: string
  /** The title for the post. */
  title?: {
    /** Title for the post, as it exists in the database. */
    raw?: string
    /** HTML title for the post, transformed for display. */
    rendered?: string
  }
}

export type GetWpV2PagesByParentRevisionsResponse = Array<PageRevision2>

export type GetWpV2PatternDirectoryPatternsResponse = Array<PatternDirectoryItem>

export type PostWpV2PluginsRequest = {
  /** WordPress.org plugin directory slug. */
  slug: string
  /** The plugin activation status. */
  status?: "inactive" | "active"
}

export type GetWpV2PostsResponse = Array<Post>

export type PostWpV2PostsRequest = {
  /** The ID for the author of the post. */
  author?: number
  /** The terms assigned to the post in the category taxonomy. */
  categories?: Array<number>
  /** Whether or not comments are open on the post. */
  comment_status?: "open" | "closed"
  /** The content for the post. */
  content?: {
    /** Version of the content block format used by the post. */
    block_version?: number
    /** Whether the content is protected with a password. */
    protected?: boolean
    /** Content for the post, as it exists in the database. */
    raw?: string
    /** HTML content for the post, transformed for display. */
    rendered?: string
  }
  /** The date the post was published, in the site's timezone. */
  date?: string | null
  /** The date the post was published, as GMT. */
  date_gmt?: string | null
  /** The excerpt for the post. */
  excerpt?: {
    /** Whether the excerpt is protected with a password. */
    protected?: boolean
    /** Excerpt for the post, as it exists in the database. */
    raw?: string
    /** HTML excerpt for the post, transformed for display. */
    rendered?: string
  }
  /** The ID of the featured media for the post. */
  featured_media?: number
  /** The format for the post. */
  format?: "standard" | "aside" | "chat" | "gallery" | "link" | "image" | "quote" | "status" | "video" | "audio"
  /** Meta fields. */
  meta?: {
    footnotes?: string
  }
  /** A password to protect access to the content and excerpt. */
  password?: string
  /** Whether or not the post can be pinged. */
  ping_status?: "open" | "closed"
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string
  /** A named status for the post. */
  status?: "publish" | "future" | "draft" | "pending" | "private"
  /** Whether or not the post should be treated as sticky. */
  sticky?: boolean
  /** The terms assigned to the post in the post_tag taxonomy. */
  tags?: Array<number>
  /** The theme file to use to display the post. */
  template?: string
  /** The title for the post. */
  title?: {
    /** Title for the post, as it exists in the database. */
    raw?: string
    /** HTML title for the post, transformed for display. */
    rendered?: string
  }
}

export type PostWpV2PostsByIdRequest = {
  /** The ID for the author of the post. */
  author?: number
  /** The terms assigned to the post in the category taxonomy. */
  categories?: Array<number>
  /** Whether or not comments are open on the post. */
  comment_status?: "open" | "closed"
  /** The content for the post. */
  content?: {
    /** Version of the content block format used by the post. */
    block_version?: number
    /** Whether the content is protected with a password. */
    protected?: boolean
    /** Content for the post, as it exists in the database. */
    raw?: string
    /** HTML content for the post, transformed for display. */
    rendered?: string
  }
  /** The date the post was published, in the site's timezone. */
  date?: string | null
  /** The date the post was published, as GMT. */
  date_gmt?: string | null
  /** The excerpt for the post. */
  excerpt?: {
    /** Whether the excerpt is protected with a password. */
    protected?: boolean
    /** Excerpt for the post, as it exists in the database. */
    raw?: string
    /** HTML excerpt for the post, transformed for display. */
    rendered?: string
  }
  /** The ID of the featured media for the post. */
  featured_media?: number
  /** The format for the post. */
  format?: "standard" | "aside" | "chat" | "gallery" | "link" | "image" | "quote" | "status" | "video" | "audio"
  /** Meta fields. */
  meta?: {
    footnotes?: string
  }
  /** A password to protect access to the content and excerpt. */
  password?: string
  /** Whether or not the post can be pinged. */
  ping_status?: "open" | "closed"
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string
  /** A named status for the post. */
  status?: "publish" | "future" | "draft" | "pending" | "private"
  /** Whether or not the post should be treated as sticky. */
  sticky?: boolean
  /** The terms assigned to the post in the post_tag taxonomy. */
  tags?: Array<number>
  /** The theme file to use to display the post. */
  template?: string
  /** The title for the post. */
  title?: {
    /** Title for the post, as it exists in the database. */
    raw?: string
    /** HTML title for the post, transformed for display. */
    rendered?: string
  }
}

export type PostWpV2PostsByIdAutosavesRequest = {
  /** The ID for the author of the post. */
  author?: number
  /** The terms assigned to the post in the category taxonomy. */
  categories?: Array<number>
  /** Whether or not comments are open on the post. */
  comment_status?: "open" | "closed"
  /** The content for the post. */
  content?: {
    /** Version of the content block format used by the post. */
    block_version?: number
    /** Whether the content is protected with a password. */
    protected?: boolean
    /** Content for the post, as it exists in the database. */
    raw?: string
    /** HTML content for the post, transformed for display. */
    rendered?: string
  }
  /** The date the post was published, in the site's timezone. */
  date?: string | null
  /** The date the post was published, as GMT. */
  date_gmt?: string | null
  /** The excerpt for the post. */
  excerpt?: {
    /** Whether the excerpt is protected with a password. */
    protected?: boolean
    /** Excerpt for the post, as it exists in the database. */
    raw?: string
    /** HTML excerpt for the post, transformed for display. */
    rendered?: string
  }
  /** The ID of the featured media for the post. */
  featured_media?: number
  /** The format for the post. */
  format?: "standard" | "aside" | "chat" | "gallery" | "link" | "image" | "quote" | "status" | "video" | "audio"
  /** Meta fields. */
  meta?: {
    footnotes?: string
  }
  /** The ID for the parent of the autosave. */
  parent?: number
  /** A password to protect access to the content and excerpt. */
  password?: string
  /** Whether or not the post can be pinged. */
  ping_status?: "open" | "closed"
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string
  /** A named status for the post. */
  status?: "publish" | "future" | "draft" | "pending" | "private"
  /** Whether or not the post should be treated as sticky. */
  sticky?: boolean
  /** The terms assigned to the post in the post_tag taxonomy. */
  tags?: Array<number>
  /** The theme file to use to display the post. */
  template?: string
  /** The title for the post. */
  title?: {
    /** Title for the post, as it exists in the database. */
    raw?: string
    /** HTML title for the post, transformed for display. */
    rendered?: string
  }
}

export type GetWpV2PostsByParentRevisionsResponse = Array<PostRevision2>

export type GetWpV2SearchResponse = Array<SearchResult>

export type PostWpV2SettingsRequest = {
  /** A date format for all date strings. */
  date_format?: string
  /** Default post category. */
  default_category?: number
  /** Allow people to submit comments on new posts. */
  default_comment_status?: "open" | "closed"
  /** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
  default_ping_status?: "open" | "closed"
  /** Default post format. */
  default_post_format?: string
  /** Site tagline. */
  description?: string
  /** This address is used for admin purposes, like new user notification. */
  email?: string
  /** WordPress locale code. */
  language?: string
  /** The ID of the page that should display the latest posts */
  page_for_posts?: number
  /** The ID of the page that should be displayed on the front page */
  page_on_front?: number
  /** Blog pages show at most. */
  posts_per_page?: number
  /** What to show on the front page */
  show_on_front?: string
  /** Site icon. */
  site_icon?: number
  /** Site logo. */
  site_logo?: number
  /** A day number of the week that the week should start on. */
  start_of_week?: number
  /** A time format for all time strings. */
  time_format?: string
  /** A city in the same timezone as you. */
  timezone?: string
  /** Site title. */
  title?: string
  /** Site URL. */
  url?: string
  /** Convert emoticons like :-) and :-P to graphics on display. */
  use_smilies?: boolean
}

export type PostWpV2SidebarsByIdRequest = {
  /** Nested widgets. */
  widgets?: Array<Record<string, unknown> | string>
}

export type GetWpV2TagsResponse = Array<Tag>

export type PostWpV2TagsRequest = {
  /** HTML description of the term. */
  description?: string
  /** Meta fields. */
  meta?: Record<string, unknown>
  /** HTML title for the term. */
  name: string
  /** An alphanumeric identifier for the term unique to its type. */
  slug?: string
}

export type PostWpV2TagsByIdRequest = {
  /** HTML description of the term. */
  description?: string
  /** Meta fields. */
  meta?: Record<string, unknown>
  /** HTML title for the term. */
  name?: string
  /** An alphanumeric identifier for the term unique to its type. */
  slug?: string
}

export type PostWpV2TemplatePartsRequest = {
  /** Where the template part is intended for use (header, footer, etc.) */
  area?: string
  /** The ID for the author of the template. */
  author?: number
  /** Content of template. */
  content?:
    | {
        /** Version of the content block format used by the template. */
        block_version?: number
        /** Content for the template, as it exists in the database. */
        raw?: string
      }
    | string
  /** Description of template. */
  description?: string
  /** Unique slug identifying the template. */
  slug: string
  /** Status of template. */
  status?: "publish" | "future" | "draft" | "pending" | "private"
  /** Theme identifier for the template. */
  theme?: string
  /** Title of template. */
  title?:
    | {
        /** Title for the template, as it exists in the database. */
        raw?: string
        /** HTML title for the template, transformed for display. */
        rendered?: string
      }
    | string
  /** Type of template. */
  type?: string
}

export type PostWpV2TemplatesRequest = {
  /** The ID for the author of the template. */
  author?: number
  /** Content of template. */
  content?:
    | {
        /** Version of the content block format used by the template. */
        block_version?: number
        /** Content for the template, as it exists in the database. */
        raw?: string
      }
    | string
  /** Description of template. */
  description?: string
  /** Unique slug identifying the template. */
  slug: string
  /** Status of template. */
  status?: "publish" | "future" | "draft" | "pending" | "private"
  /** Theme identifier for the template. */
  theme?: string
  /** Title of template. */
  title?:
    | {
        /** Title for the template, as it exists in the database. */
        raw?: string
        /** HTML title for the template, transformed for display. */
        rendered?: string
      }
    | string
  /** Type of template. */
  type?: string
}

export type GetWpV2UsersResponse = Array<User>

export type PostWpV2UsersRequest = {
  /** Description of the user. */
  description?: string
  /** The email address for the user. */
  email: string
  /** First name for the user. */
  first_name?: string
  /** Last name for the user. */
  last_name?: string
  /** Locale for the user. */
  locale?: "" | "en_US"
  /** Meta fields. */
  meta?: {
    persisted_preferences?: {
      /** The date and time the preferences were updated. */
      _modified?: string
    } & { [key: string]: unknown }
  }
  /** Display name for the user. */
  name?: string
  /** The nickname for the user. */
  nickname?: string
  /** Password for the user (never included). */
  password: string
  /** Roles assigned to the user. */
  roles?: Array<string>
  /** An alphanumeric identifier for the user. */
  slug?: string
  /** URL of the user. */
  url?: string
  /** Login name for the user. */
  username: string
}

export type PostWpV2UsersByIdRequest = {
  /** Description of the user. */
  description?: string
  /** The email address for the user. */
  email?: string
  /** First name for the user. */
  first_name?: string
  /** Last name for the user. */
  last_name?: string
  /** Locale for the user. */
  locale?: "" | "en_US"
  /** Meta fields. */
  meta?: {
    persisted_preferences?: {
      /** The date and time the preferences were updated. */
      _modified?: string
    } & { [key: string]: unknown }
  }
  /** Display name for the user. */
  name?: string
  /** The nickname for the user. */
  nickname?: string
  /** Password for the user (never included). */
  password?: string
  /** Roles assigned to the user. */
  roles?: Array<string>
  /** An alphanumeric identifier for the user. */
  slug?: string
  /** URL of the user. */
  url?: string
  /** Login name for the user. */
  username?: string
}

export type PostWpV2UsersByUserIdApplicationPasswordsRequest = {
  /** A UUID provided by the application to uniquely identify it. It is recommended to use an UUID v5 with the URL or DNS namespace. */
  app_id?: string | ""
  /** The name of the application password. */
  name: string
}

export type PostWpV2UsersByUserIdApplicationPasswordsByUuidRequest = {
  /** A UUID provided by the application to uniquely identify it. It is recommended to use an UUID v5 with the URL or DNS namespace. */
  app_id?: string | ""
  /** The name of the application password. */
  name?: string
}

export type PostWpV2UsersMeRequest = {
  /** Description of the user. */
  description?: string
  /** The email address for the user. */
  email?: string
  /** First name for the user. */
  first_name?: string
  /** Last name for the user. */
  last_name?: string
  /** Locale for the user. */
  locale?: "" | "en_US"
  /** Meta fields. */
  meta?: {
    persisted_preferences?: {
      /** The date and time the preferences were updated. */
      _modified?: string
    } & { [key: string]: unknown }
  }
  /** Display name for the user. */
  name?: string
  /** The nickname for the user. */
  nickname?: string
  /** Password for the user (never included). */
  password?: string
  /** Roles assigned to the user. */
  roles?: Array<string>
  /** An alphanumeric identifier for the user. */
  slug?: string
  /** URL of the user. */
  url?: string
  /** Login name for the user. */
  username?: string
}

export type PostWpV2WidgetTypesByIdEncodeRequest = {
  /** Serialized widget form data to encode into instance settings. */
  form_data?: string
  /** Current instance settings of the widget. */
  instance?: Record<string, unknown>
}

export type PostWpV2WidgetTypesByIdRenderRequest = {
  /** Current instance settings of the widget. */
  instance?: Record<string, unknown>
}

export type PostWpV2WidgetsRequest = {
  /** URL-encoded form data from the widget admin form. Used to update a widget that does not support instance. Write only. */
  form_data?: string
  /** Unique identifier for the widget. */
  id?: string
  /** The type of the widget. Corresponds to ID in widget-types endpoint. */
  id_base?: string
  /** Instance settings of the widget, if supported. */
  instance?: {
    /** Base64 encoded representation of the instance settings. */
    encoded?: string
    /** Cryptographic hash of the instance settings. */
    hash?: string
    /** Unencoded instance settings, if supported. */
    raw?: Record<string, unknown>
  }
  /** The sidebar the widget belongs to. */
  sidebar: string
}

export type PostWpV2WidgetsByIdRequest = {
  /** URL-encoded form data from the widget admin form. Used to update a widget that does not support instance. Write only. */
  form_data?: string
  /** The type of the widget. Corresponds to ID in widget-types endpoint. */
  id_base?: string
  /** Instance settings of the widget, if supported. */
  instance?: {
    /** Base64 encoded representation of the instance settings. */
    encoded?: string
    /** Cryptographic hash of the instance settings. */
    hash?: string
    /** Unencoded instance settings, if supported. */
    raw?: Record<string, unknown>
  }
  /** The sidebar the widget belongs to. */
  sidebar?: string
}

export type GetWpV2WpPatternCategoryResponse = Array<WpPatternCategory>

export type PostWpV2WpPatternCategoryRequest = {
  /** HTML description of the term. */
  description?: string
  /** Meta fields. */
  meta?: Record<string, unknown>
  /** HTML title for the term. */
  name: string
  /** An alphanumeric identifier for the term unique to its type. */
  slug?: string
}

export type PostWpV2WpPatternCategoryByIdRequest = {
  /** HTML description of the term. */
  description?: string
  /** Meta fields. */
  meta?: Record<string, unknown>
  /** HTML title for the term. */
  name?: string
  /** An alphanumeric identifier for the term unique to its type. */
  slug?: string
}

/** What each operation answers, by its id. */
export interface Responses {
  getWpV2BlockDirectorySearch: GetWpV2BlockDirectorySearchResponse
  getWpV2BlockPatternsCategories: BlockPatternCategory
  getWpV2BlockPatternsPatterns: BlockPattern
  getWpV2BlockTypes: BlockType
  getWpV2BlockTypesByNamespace: BlockType
  getWpV2BlockTypesByNamespaceByName: BlockType
  getWpV2Blocks: GetWpV2BlocksResponse
  postWpV2Blocks: WpBlock
  getWpV2BlocksById: WpBlock
  postWpV2BlocksById: WpBlock
  deleteWpV2BlocksById: unknown
  getWpV2BlocksByIdAutosaves: WpBlockRevision
  postWpV2BlocksByIdAutosaves: WpBlockRevision
  getWpV2BlocksByParentAutosavesById: WpBlockRevision
  getWpV2BlocksByParentRevisions: GetWpV2BlocksByParentRevisionsResponse
  getWpV2BlocksByParentRevisionsById: WpBlockRevision2
  deleteWpV2BlocksByParentRevisionsById: unknown
  getWpV2Categories: GetWpV2CategoriesResponse
  postWpV2Categories: Category
  getWpV2CategoriesById: Category
  postWpV2CategoriesById: Category
  deleteWpV2CategoriesById: unknown
  getWpV2Comments: GetWpV2CommentsResponse
  postWpV2Comments: Comment
  getWpV2CommentsById: Comment
  postWpV2CommentsById: Comment
  deleteWpV2CommentsById: unknown
  getWpV2FontCollections: GetWpV2FontCollectionsResponse
  getWpV2FontFamilies: GetWpV2FontFamiliesResponse
  postWpV2FontFamilies: WpFontFamily
  getWpV2FontFamiliesByFontFamilyIdFontFaces: GetWpV2FontFamiliesByFontFamilyIdFontFacesResponse
  postWpV2FontFamiliesByFontFamilyIdFontFaces: WpFontFace
  getWpV2FontFamiliesByFontFamilyIdFontFacesById: WpFontFace
  deleteWpV2FontFamiliesByFontFamilyIdFontFacesById: unknown
  getWpV2FontFamiliesById: WpFontFamily
  postWpV2FontFamiliesById: WpFontFamily
  deleteWpV2FontFamiliesById: unknown
  getWpV2GlobalStylesByParentRevisions: GetWpV2GlobalStylesByParentRevisionsResponse
  getWpV2GlobalStylesByParentRevisionsById: WpGlobalStylesRevision
  getWpV2Media: GetWpV2MediaResponse
  postWpV2Media: Attachment
  getWpV2MediaById: Attachment
  postWpV2MediaById: Attachment
  deleteWpV2MediaById: unknown
  postWpV2MediaByIdEdit: unknown
  postWpV2MediaByIdPostProcess: unknown
  getWpV2MenuItems: GetWpV2MenuItemsResponse
  postWpV2MenuItems: NavMenuItem
  getWpV2MenuItemsById: NavMenuItem
  postWpV2MenuItemsById: NavMenuItem
  deleteWpV2MenuItemsById: unknown
  getWpV2MenuItemsByIdAutosaves: NavMenuItemRevision
  postWpV2MenuItemsByIdAutosaves: NavMenuItemRevision
  getWpV2MenuItemsByParentAutosavesById: NavMenuItemRevision
  getWpV2MenuLocations: MenuLocation
  getWpV2MenuLocationsByLocation: MenuLocation
  getWpV2Menus: GetWpV2MenusResponse
  postWpV2Menus: NavMenu
  getWpV2MenusById: NavMenu
  postWpV2MenusById: NavMenu
  deleteWpV2MenusById: unknown
  getWpV2Navigation: GetWpV2NavigationResponse
  postWpV2Navigation: WpNavigation
  getWpV2NavigationById: WpNavigation
  postWpV2NavigationById: WpNavigation
  deleteWpV2NavigationById: unknown
  getWpV2NavigationByIdAutosaves: WpNavigationRevision
  postWpV2NavigationByIdAutosaves: WpNavigationRevision
  getWpV2NavigationByParentAutosavesById: WpNavigationRevision
  getWpV2NavigationByParentRevisions: GetWpV2NavigationByParentRevisionsResponse
  getWpV2NavigationByParentRevisionsById: WpNavigationRevision2
  deleteWpV2NavigationByParentRevisionsById: unknown
  getWpV2Pages: GetWpV2PagesResponse
  postWpV2Pages: Page
  getWpV2PagesById: Page
  postWpV2PagesById: Page
  deleteWpV2PagesById: unknown
  getWpV2PagesByIdAutosaves: PageRevision
  postWpV2PagesByIdAutosaves: PageRevision
  getWpV2PagesByParentAutosavesById: PageRevision
  getWpV2PagesByParentRevisions: GetWpV2PagesByParentRevisionsResponse
  getWpV2PagesByParentRevisionsById: PageRevision2
  deleteWpV2PagesByParentRevisionsById: unknown
  getWpV2PatternDirectoryPatterns: GetWpV2PatternDirectoryPatternsResponse
  getWpV2Plugins: Plugin
  postWpV2Plugins: Plugin
  getWpV2Posts: GetWpV2PostsResponse
  postWpV2Posts: Post
  getWpV2PostsById: Post
  postWpV2PostsById: Post
  deleteWpV2PostsById: unknown
  getWpV2PostsByIdAutosaves: PostRevision
  postWpV2PostsByIdAutosaves: PostRevision
  getWpV2PostsByParentAutosavesById: PostRevision
  getWpV2PostsByParentRevisions: GetWpV2PostsByParentRevisionsResponse
  getWpV2PostsByParentRevisionsById: PostRevision2
  deleteWpV2PostsByParentRevisionsById: unknown
  getWpV2Search: GetWpV2SearchResponse
  getWpV2Settings: Settings
  postWpV2Settings: Settings
  getWpV2Sidebars: Sidebar
  getWpV2SidebarsById: Sidebar
  postWpV2SidebarsById: Sidebar
  getWpV2Statuses: Status
  getWpV2StatusesByStatus: Status
  getWpV2Tags: GetWpV2TagsResponse
  postWpV2Tags: Tag
  getWpV2TagsById: Tag
  postWpV2TagsById: Tag
  deleteWpV2TagsById: unknown
  getWpV2Taxonomies: Taxonomy
  getWpV2TaxonomiesByTaxonomy: Taxonomy
  getWpV2TemplateParts: WpTemplatePart
  postWpV2TemplateParts: WpTemplatePart
  getWpV2TemplatePartsLookup: unknown
  getWpV2Templates: WpTemplate
  postWpV2Templates: WpTemplate
  getWpV2TemplatesLookup: unknown
  getWpV2Themes: Theme
  getWpV2Types: Type
  getWpV2TypesByType: Type
  getWpV2Users: GetWpV2UsersResponse
  postWpV2Users: User
  getWpV2UsersById: User
  postWpV2UsersById: User
  deleteWpV2UsersById: unknown
  getWpV2UsersByUserIdApplicationPasswords: ApplicationPassword
  postWpV2UsersByUserIdApplicationPasswords: ApplicationPassword
  deleteWpV2UsersByUserIdApplicationPasswords: unknown
  getWpV2UsersByUserIdApplicationPasswordsByUuid: ApplicationPassword
  postWpV2UsersByUserIdApplicationPasswordsByUuid: ApplicationPassword
  deleteWpV2UsersByUserIdApplicationPasswordsByUuid: unknown
  getWpV2UsersByUserIdApplicationPasswordsIntrospect: ApplicationPassword
  getWpV2UsersMe: User
  postWpV2UsersMe: User
  deleteWpV2UsersMe: unknown
  getWpV2WidgetTypes: WidgetType
  getWpV2WidgetTypesById: WidgetType
  postWpV2WidgetTypesByIdEncode: unknown
  postWpV2WidgetTypesByIdRender: unknown
  getWpV2Widgets: Widget
  postWpV2Widgets: Widget
  getWpV2WidgetsById: Widget
  postWpV2WidgetsById: Widget
  deleteWpV2WidgetsById: unknown
  getWpV2WpPatternCategory: GetWpV2WpPatternCategoryResponse
  postWpV2WpPatternCategory: WpPatternCategory
  getWpV2WpPatternCategoryById: WpPatternCategory
  postWpV2WpPatternCategoryById: WpPatternCategory
  deleteWpV2WpPatternCategoryById: unknown
}

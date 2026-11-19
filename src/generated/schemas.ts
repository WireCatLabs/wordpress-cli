// GENERATED. DO NOT EDIT.
// Source: spec/wordpress/, checked against provenance.json
// Run: pnpm generate

import { integer, number, unique } from "@wirecat/cli-base/codegen/runtime"
import * as v from "valibot"
import type * as T from "./types.js"

export const BlockDirectoryItem: v.GenericSchema<unknown, T.BlockDirectoryItem> = v.looseObject({
  active_installs: v.optional(integer()),
  author: v.optional(v.string()),
  author_block_count: v.optional(integer()),
  author_block_rating: v.optional(number()),
  description: v.optional(v.string()),
  humanized_updated: v.optional(v.string()),
  icon: v.optional(v.string()),
  id: v.optional(v.string()),
  last_updated: v.optional(v.string()),
  name: v.optional(v.string()),
  rating: v.optional(number()),
  rating_count: v.optional(integer()),
  title: v.optional(v.string()),
})

export const BlockPatternCategory: v.GenericSchema<unknown, T.BlockPatternCategory> = v.looseObject({
  description: v.optional(v.string()),
  label: v.optional(v.string()),
  name: v.optional(v.string()),
})

export const BlockPattern: v.GenericSchema<unknown, T.BlockPattern> = v.looseObject({
  block_types: v.optional(v.array(v.unknown())),
  categories: v.optional(v.array(v.unknown())),
  content: v.optional(v.string()),
  description: v.optional(v.string()),
  inserter: v.optional(v.boolean()),
  keywords: v.optional(v.array(v.unknown())),
  name: v.optional(v.string()),
  post_types: v.optional(v.array(v.unknown())),
  source: v.optional(
    v.picklist([
      "core",
      "plugin",
      "theme",
      "pattern-directory/core",
      "pattern-directory/theme",
      "pattern-directory/featured",
    ]),
  ),
  template_types: v.optional(v.array(v.unknown())),
  title: v.optional(v.string()),
  viewport_width: v.optional(number()),
})

export const BlockType: v.GenericSchema<unknown, T.BlockType> = v.looseObject({
  allowed_blocks: v.optional(v.nullable(v.array(v.pipe(v.string(), v.regex(/^[a-z][a-z0-9-]*\/[a-z][a-z0-9-]*$/))))),
  ancestor: v.optional(v.nullable(v.array(v.pipe(v.string(), v.regex(/^[a-z][a-z0-9-]*\/[a-z][a-z0-9-]*$/))))),
  api_version: v.optional(integer()),
  attributes: v.optional(v.nullable(v.record(v.string(), v.looseObject({})))),
  block_hooks: v.optional(v.record(v.string(), v.picklist(["before", "after", "first_child", "last_child"]))),
  category: v.optional(v.nullable(v.string())),
  description: v.optional(v.string()),
  editor_script: v.optional(v.nullable(v.string())),
  editor_script_handles: v.optional(v.array(v.string())),
  editor_style: v.optional(v.nullable(v.string())),
  editor_style_handles: v.optional(v.array(v.string())),
  example: v.optional(
    v.nullable(
      v.looseObject({
        attributes: v.optional(v.looseObject({})),
        innerBlocks: v.optional(
          v.array(
            v.looseObject({
              attributes: v.optional(v.looseObject({})),
              innerBlocks: v.optional(v.array(v.unknown())),
              name: v.pipe(v.string(), v.regex(/^[a-z][a-z0-9-]*\/[a-z][a-z0-9-]*$/)),
            }),
          ),
        ),
      }),
    ),
  ),
  icon: v.optional(v.nullable(v.string())),
  is_dynamic: v.optional(v.boolean()),
  keywords: v.optional(v.array(v.string())),
  name: v.pipe(v.string(), v.regex(/^[a-z][a-z0-9-]*\/[a-z][a-z0-9-]*$/)),
  parent: v.optional(v.nullable(v.array(v.pipe(v.string(), v.regex(/^[a-z][a-z0-9-]*\/[a-z][a-z0-9-]*$/))))),
  provides_context: v.optional(v.record(v.string(), v.string())),
  script: v.optional(v.nullable(v.string())),
  script_handles: v.optional(v.array(v.string())),
  selectors: v.optional(v.looseObject({})),
  style: v.optional(v.nullable(v.string())),
  style_handles: v.optional(v.array(v.string())),
  styles: v.optional(
    v.array(
      v.looseObject({
        inline_style: v.optional(v.string()),
        label: v.optional(v.string()),
        name: v.string(),
        style_handle: v.optional(v.string()),
      }),
    ),
  ),
  supports: v.optional(v.looseObject({})),
  textdomain: v.optional(v.nullable(v.string())),
  title: v.optional(v.string()),
  uses_context: v.optional(v.array(v.string())),
  variations: v.optional(
    v.array(
      v.looseObject({
        attributes: v.optional(v.looseObject({})),
        category: v.optional(v.nullable(v.string())),
        description: v.optional(v.string()),
        example: v.optional(
          v.nullable(
            v.looseObject({
              attributes: v.optional(v.looseObject({})),
              innerBlocks: v.optional(
                v.array(
                  v.looseObject({
                    attributes: v.optional(v.looseObject({})),
                    innerBlocks: v.optional(v.array(v.unknown())),
                    name: v.pipe(v.string(), v.regex(/^[a-z][a-z0-9-]*\/[a-z][a-z0-9-]*$/)),
                  }),
                ),
              ),
            }),
          ),
        ),
        icon: v.optional(v.nullable(v.string())),
        innerBlocks: v.optional(
          v.array(
            v.looseObject({
              attributes: v.optional(v.looseObject({})),
              innerBlocks: v.optional(v.array(v.unknown())),
              name: v.pipe(v.string(), v.regex(/^[a-z][a-z0-9-]*\/[a-z][a-z0-9-]*$/)),
            }),
          ),
        ),
        isDefault: v.optional(v.boolean()),
        keywords: v.optional(v.array(v.string())),
        name: v.string(),
        scope: v.optional(v.nullable(v.array(v.picklist(["block", "inserter", "transform"])))),
        title: v.string(),
      }),
    ),
  ),
  view_script: v.optional(v.nullable(v.string())),
  view_script_handles: v.optional(v.array(v.string())),
  view_script_module_ids: v.optional(v.array(v.string())),
  view_style_handles: v.optional(v.array(v.string())),
})

export const WpBlock: v.GenericSchema<unknown, T.WpBlock> = v.looseObject({
  content: v.optional(
    v.looseObject({
      block_version: v.optional(integer()),
      protected: v.optional(v.boolean()),
      raw: v.optional(v.string()),
    }),
  ),
  date: v.optional(v.nullable(v.string())),
  date_gmt: v.optional(v.nullable(v.string())),
  excerpt: v.optional(
    v.looseObject({
      protected: v.optional(v.boolean()),
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  guid: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  id: v.optional(integer()),
  link: v.optional(v.string()),
  meta: v.optional(
    v.looseObject({
      footnotes: v.optional(v.string()),
      wp_pattern_sync_status: v.optional(v.picklist(["partial", "unsynced"])),
    }),
  ),
  modified: v.optional(v.string()),
  modified_gmt: v.optional(v.string()),
  password: v.optional(v.string()),
  slug: v.optional(v.string()),
  status: v.optional(v.picklist(["publish", "future", "draft", "pending", "private"])),
  template: v.optional(v.string()),
  title: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
    }),
  ),
  type: v.optional(v.string()),
  wp_pattern_category: v.optional(v.array(integer())),
})

export const WpBlockRevision: v.GenericSchema<unknown, T.WpBlockRevision> = v.looseObject({
  author: v.optional(integer()),
  content: v.optional(
    v.looseObject({
      block_version: v.optional(integer()),
      protected: v.optional(v.boolean()),
      raw: v.optional(v.string()),
    }),
  ),
  date: v.optional(v.string()),
  date_gmt: v.optional(v.string()),
  excerpt: v.optional(
    v.looseObject({
      protected: v.optional(v.boolean()),
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  guid: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  id: v.optional(integer()),
  meta: v.optional(
    v.looseObject({
      footnotes: v.optional(v.string()),
      wp_pattern_sync_status: v.optional(v.picklist(["partial", "unsynced"])),
    }),
  ),
  modified: v.optional(v.string()),
  modified_gmt: v.optional(v.string()),
  parent: v.optional(integer()),
  preview_link: v.optional(v.string()),
  slug: v.optional(v.string()),
  title: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
    }),
  ),
})

export const WpBlockRevision2: v.GenericSchema<unknown, T.WpBlockRevision2> = v.looseObject({
  author: v.optional(integer()),
  content: v.optional(
    v.looseObject({
      block_version: v.optional(integer()),
      protected: v.optional(v.boolean()),
      raw: v.optional(v.string()),
    }),
  ),
  date: v.optional(v.string()),
  date_gmt: v.optional(v.string()),
  excerpt: v.optional(
    v.looseObject({
      protected: v.optional(v.boolean()),
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  guid: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  id: v.optional(integer()),
  meta: v.optional(
    v.looseObject({
      footnotes: v.optional(v.string()),
      wp_pattern_sync_status: v.optional(v.picklist(["partial", "unsynced"])),
    }),
  ),
  modified: v.optional(v.string()),
  modified_gmt: v.optional(v.string()),
  parent: v.optional(integer()),
  slug: v.optional(v.string()),
  title: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
    }),
  ),
})

export const Category: v.GenericSchema<unknown, T.Category> = v.looseObject({
  count: v.optional(integer()),
  description: v.optional(v.string()),
  id: v.optional(integer()),
  link: v.optional(v.string()),
  meta: v.optional(v.looseObject({})),
  name: v.string(),
  parent: v.optional(integer()),
  slug: v.optional(v.string()),
  taxonomy: v.optional(v.picklist(["category"])),
})

export const Comment: v.GenericSchema<unknown, T.Comment> = v.looseObject({
  author: v.optional(integer()),
  author_avatar_urls: v.optional(
    v.looseObject({
      "24": v.optional(v.string()),
      "48": v.optional(v.string()),
      "96": v.optional(v.string()),
    }),
  ),
  author_email: v.optional(v.string()),
  author_ip: v.optional(v.string()),
  author_name: v.optional(v.string()),
  author_url: v.optional(v.string()),
  author_user_agent: v.optional(v.string()),
  content: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  date: v.optional(v.string()),
  date_gmt: v.optional(v.string()),
  id: v.optional(integer()),
  link: v.optional(v.string()),
  meta: v.optional(
    v.looseObject({
      _wp_note_status: v.optional(v.picklist(["resolved", "reopen"])),
    }),
  ),
  parent: v.optional(integer()),
  post: v.optional(integer()),
  status: v.optional(v.string()),
  type: v.optional(v.string()),
})

export const FontCollection: v.GenericSchema<unknown, T.FontCollection> = v.looseObject({
  categories: v.optional(v.array(v.unknown())),
  description: v.optional(v.string()),
  font_families: v.optional(v.array(v.unknown())),
  name: v.optional(v.string()),
  slug: v.optional(v.string()),
})

export const WpFontFamily: v.GenericSchema<unknown, T.WpFontFamily> = v.looseObject({
  font_faces: v.optional(v.array(integer())),
  font_family_settings: v.optional(
    v.looseObject({
      fontFamily: v.string(),
      name: v.string(),
      preview: v.optional(v.string()),
      slug: v.string(),
    }),
  ),
  id: v.optional(integer()),
  theme_json_version: v.optional(integer({ minimum: 2, maximum: 3 })),
})

export const WpFontFace: v.GenericSchema<unknown, T.WpFontFace> = v.looseObject({
  font_face_settings: v.optional(
    v.looseObject({
      ascentOverride: v.optional(v.string()),
      descentOverride: v.optional(v.string()),
      fontDisplay: v.optional(v.picklist(["auto", "block", "fallback", "swap", "optional"])),
      fontFamily: v.string(),
      fontFeatureSettings: v.optional(v.string()),
      fontStretch: v.optional(v.string()),
      fontStyle: v.optional(v.string()),
      fontVariant: v.optional(v.string()),
      fontVariationSettings: v.optional(v.string()),
      fontWeight: v.optional(v.union([v.string(), integer()])),
      lineGapOverride: v.optional(v.string()),
      preview: v.optional(v.string()),
      sizeAdjust: v.optional(v.string()),
      src: v.union([v.string(), v.array(v.string())]),
      unicodeRange: v.optional(v.string()),
    }),
  ),
  id: v.optional(integer()),
  parent: v.optional(integer()),
  theme_json_version: v.optional(integer({ minimum: 2, maximum: 3 })),
})

export const WpGlobalStylesRevision: v.GenericSchema<unknown, T.WpGlobalStylesRevision> = v.looseObject({
  author: v.optional(integer()),
  date: v.optional(v.string()),
  date_gmt: v.optional(v.string()),
  id: v.optional(integer()),
  modified: v.optional(v.string()),
  modified_gmt: v.optional(v.string()),
  parent: v.optional(integer()),
  settings: v.optional(v.looseObject({})),
  styles: v.optional(v.looseObject({})),
})

export const Attachment: v.GenericSchema<unknown, T.Attachment> = v.looseObject({
  alt_text: v.optional(v.string()),
  author: v.optional(integer()),
  caption: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  class_list: v.optional(v.array(v.string())),
  comment_status: v.optional(v.picklist(["open", "closed"])),
  date: v.optional(v.nullable(v.string())),
  date_gmt: v.optional(v.nullable(v.string())),
  description: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  featured_media: v.optional(integer()),
  generated_slug: v.optional(v.string()),
  guid: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  id: v.optional(integer()),
  link: v.optional(v.string()),
  media_details: v.optional(v.looseObject({})),
  media_type: v.optional(v.picklist(["image", "file"])),
  meta: v.optional(v.looseObject({})),
  mime_type: v.optional(v.string()),
  missing_image_sizes: v.optional(v.array(v.string())),
  modified: v.optional(v.string()),
  modified_gmt: v.optional(v.string()),
  permalink_template: v.optional(v.string()),
  ping_status: v.optional(v.picklist(["open", "closed"])),
  post: v.optional(integer()),
  slug: v.optional(v.string()),
  source_url: v.optional(v.string()),
  status: v.optional(v.picklist(["publish", "future", "draft", "pending", "private"])),
  template: v.optional(v.string()),
  title: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  type: v.optional(v.string()),
})

export const NavMenuItem: v.GenericSchema<unknown, T.NavMenuItem> = v.looseObject({
  attr_title: v.optional(v.string()),
  classes: v.optional(v.array(v.string())),
  description: v.optional(v.string()),
  id: v.optional(integer({ minimum: 0 })),
  invalid: v.optional(v.boolean()),
  menu_order: v.optional(integer({ minimum: 1 })),
  menus: v.optional(integer()),
  meta: v.optional(v.looseObject({})),
  object: v.optional(v.string()),
  object_id: v.optional(integer({ minimum: 0 })),
  parent: v.optional(integer({ minimum: 0 })),
  status: v.optional(v.picklist(["publish", "future", "draft", "pending", "private"])),
  target: v.optional(v.picklist(["_blank", ""])),
  title: v.optional(
    v.union([
      v.string(),
      v.looseObject({
        raw: v.optional(v.string()),
        rendered: v.optional(v.string()),
      }),
    ]),
  ),
  type: v.optional(v.picklist(["taxonomy", "post_type", "post_type_archive", "custom"])),
  type_label: v.optional(v.string()),
  url: v.optional(v.string()),
  xfn: v.optional(v.array(v.string())),
})

export const NavMenuItemRevision: v.GenericSchema<unknown, T.NavMenuItemRevision> = v.looseObject({
  author: v.optional(integer()),
  date: v.optional(v.string()),
  date_gmt: v.optional(v.string()),
  guid: v.optional(v.string()),
  id: v.optional(integer()),
  meta: v.optional(v.looseObject({})),
  modified: v.optional(v.string()),
  modified_gmt: v.optional(v.string()),
  parent: v.optional(integer()),
  preview_link: v.optional(v.string()),
  slug: v.optional(v.string()),
  title: v.optional(
    v.union([
      v.string(),
      v.looseObject({
        raw: v.optional(v.string()),
        rendered: v.optional(v.string()),
      }),
    ]),
  ),
})

export const MenuLocation: v.GenericSchema<unknown, T.MenuLocation> = v.looseObject({
  description: v.optional(v.string()),
  menu: v.optional(integer()),
  name: v.optional(v.string()),
})

export const NavMenu: v.GenericSchema<unknown, T.NavMenu> = v.looseObject({
  auto_add: v.optional(v.boolean()),
  description: v.optional(v.string()),
  id: v.optional(integer()),
  locations: v.optional(v.array(v.string())),
  meta: v.optional(v.looseObject({})),
  name: v.string(),
  slug: v.optional(v.string()),
})

export const WpNavigation: v.GenericSchema<unknown, T.WpNavigation> = v.looseObject({
  content: v.optional(
    v.looseObject({
      block_version: v.optional(integer()),
      protected: v.optional(v.boolean()),
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  date: v.optional(v.nullable(v.string())),
  date_gmt: v.optional(v.nullable(v.string())),
  guid: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  id: v.optional(integer()),
  link: v.optional(v.string()),
  modified: v.optional(v.string()),
  modified_gmt: v.optional(v.string()),
  password: v.optional(v.string()),
  slug: v.optional(v.string()),
  status: v.optional(v.picklist(["publish", "future", "draft", "pending", "private"])),
  template: v.optional(v.string()),
  title: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  type: v.optional(v.string()),
})

export const WpNavigationRevision: v.GenericSchema<unknown, T.WpNavigationRevision> = v.looseObject({
  author: v.optional(integer()),
  content: v.optional(
    v.looseObject({
      block_version: v.optional(integer()),
      protected: v.optional(v.boolean()),
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  date: v.optional(v.string()),
  date_gmt: v.optional(v.string()),
  guid: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  id: v.optional(integer()),
  meta: v.optional(v.looseObject({})),
  modified: v.optional(v.string()),
  modified_gmt: v.optional(v.string()),
  parent: v.optional(integer()),
  preview_link: v.optional(v.string()),
  slug: v.optional(v.string()),
  title: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
})

export const WpNavigationRevision2: v.GenericSchema<unknown, T.WpNavigationRevision2> = v.looseObject({
  author: v.optional(integer()),
  content: v.optional(
    v.looseObject({
      block_version: v.optional(integer()),
      protected: v.optional(v.boolean()),
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  date: v.optional(v.string()),
  date_gmt: v.optional(v.string()),
  guid: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  id: v.optional(integer()),
  meta: v.optional(v.looseObject({})),
  modified: v.optional(v.string()),
  modified_gmt: v.optional(v.string()),
  parent: v.optional(integer()),
  slug: v.optional(v.string()),
  title: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
})

export const Page: v.GenericSchema<unknown, T.Page> = v.looseObject({
  author: v.optional(integer()),
  class_list: v.optional(v.array(v.string())),
  comment_status: v.optional(v.picklist(["open", "closed"])),
  content: v.optional(
    v.looseObject({
      block_version: v.optional(integer()),
      protected: v.optional(v.boolean()),
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  date: v.optional(v.nullable(v.string())),
  date_gmt: v.optional(v.nullable(v.string())),
  excerpt: v.optional(
    v.looseObject({
      protected: v.optional(v.boolean()),
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  featured_media: v.optional(integer()),
  generated_slug: v.optional(v.string()),
  guid: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  id: v.optional(integer()),
  link: v.optional(v.string()),
  menu_order: v.optional(integer()),
  meta: v.optional(
    v.looseObject({
      footnotes: v.optional(v.string()),
    }),
  ),
  modified: v.optional(v.string()),
  modified_gmt: v.optional(v.string()),
  parent: v.optional(integer()),
  password: v.optional(v.string()),
  permalink_template: v.optional(v.string()),
  ping_status: v.optional(v.picklist(["open", "closed"])),
  slug: v.optional(v.string()),
  status: v.optional(v.picklist(["publish", "future", "draft", "pending", "private"])),
  template: v.optional(v.string()),
  title: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  type: v.optional(v.string()),
})

export const PageRevision: v.GenericSchema<unknown, T.PageRevision> = v.looseObject({
  author: v.optional(integer()),
  content: v.optional(
    v.looseObject({
      block_version: v.optional(integer()),
      protected: v.optional(v.boolean()),
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  date: v.optional(v.string()),
  date_gmt: v.optional(v.string()),
  excerpt: v.optional(
    v.looseObject({
      protected: v.optional(v.boolean()),
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  guid: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  id: v.optional(integer()),
  meta: v.optional(
    v.looseObject({
      footnotes: v.optional(v.string()),
    }),
  ),
  modified: v.optional(v.string()),
  modified_gmt: v.optional(v.string()),
  parent: v.optional(integer()),
  preview_link: v.optional(v.string()),
  slug: v.optional(v.string()),
  title: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
})

export const PageRevision2: v.GenericSchema<unknown, T.PageRevision2> = v.looseObject({
  author: v.optional(integer()),
  content: v.optional(
    v.looseObject({
      block_version: v.optional(integer()),
      protected: v.optional(v.boolean()),
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  date: v.optional(v.string()),
  date_gmt: v.optional(v.string()),
  excerpt: v.optional(
    v.looseObject({
      protected: v.optional(v.boolean()),
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  guid: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  id: v.optional(integer()),
  meta: v.optional(
    v.looseObject({
      footnotes: v.optional(v.string()),
    }),
  ),
  modified: v.optional(v.string()),
  modified_gmt: v.optional(v.string()),
  parent: v.optional(integer()),
  slug: v.optional(v.string()),
  title: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
})

export const PatternDirectoryItem: v.GenericSchema<unknown, T.PatternDirectoryItem> = v.looseObject({
  block_types: v.optional(
    v.pipe(
      v.array(v.string()),
      v.check((items) => unique(items), "items must be unique"),
    ),
  ),
  categories: v.optional(
    v.pipe(
      v.array(v.string()),
      v.check((items) => unique(items), "items must be unique"),
    ),
  ),
  content: v.optional(v.pipe(v.string(), v.minLength(1))),
  description: v.optional(v.pipe(v.string(), v.minLength(1))),
  id: v.optional(integer({ minimum: 1 })),
  keywords: v.optional(
    v.pipe(
      v.array(v.string()),
      v.check((items) => unique(items), "items must be unique"),
    ),
  ),
  title: v.optional(v.pipe(v.string(), v.minLength(1))),
  viewport_width: v.optional(integer()),
})

export const Plugin: v.GenericSchema<unknown, T.Plugin> = v.looseObject({
  author: v.optional(v.string()),
  author_uri: v.optional(v.string()),
  description: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  name: v.optional(v.string()),
  network_only: v.optional(v.boolean()),
  plugin: v.optional(v.pipe(v.string(), v.regex(/[^./]+(?:\/[^./]+)?/))),
  plugin_uri: v.optional(v.string()),
  requires_php: v.optional(v.string()),
  requires_wp: v.optional(v.string()),
  status: v.optional(v.picklist(["inactive", "active"])),
  textdomain: v.optional(v.string()),
  version: v.optional(v.string()),
})

export const Post: v.GenericSchema<unknown, T.Post> = v.looseObject({
  author: v.optional(integer()),
  categories: v.optional(v.array(integer())),
  class_list: v.optional(v.array(v.string())),
  comment_status: v.optional(v.picklist(["open", "closed"])),
  content: v.optional(
    v.looseObject({
      block_version: v.optional(integer()),
      protected: v.optional(v.boolean()),
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  date: v.optional(v.nullable(v.string())),
  date_gmt: v.optional(v.nullable(v.string())),
  excerpt: v.optional(
    v.looseObject({
      protected: v.optional(v.boolean()),
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  featured_media: v.optional(integer()),
  format: v.optional(
    v.picklist(["standard", "aside", "chat", "gallery", "link", "image", "quote", "status", "video", "audio"]),
  ),
  generated_slug: v.optional(v.string()),
  guid: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  id: v.optional(integer()),
  link: v.optional(v.string()),
  meta: v.optional(
    v.looseObject({
      footnotes: v.optional(v.string()),
    }),
  ),
  modified: v.optional(v.string()),
  modified_gmt: v.optional(v.string()),
  password: v.optional(v.string()),
  permalink_template: v.optional(v.string()),
  ping_status: v.optional(v.picklist(["open", "closed"])),
  slug: v.optional(v.string()),
  status: v.optional(v.picklist(["publish", "future", "draft", "pending", "private"])),
  sticky: v.optional(v.boolean()),
  tags: v.optional(v.array(integer())),
  template: v.optional(v.string()),
  title: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  type: v.optional(v.string()),
})

export const PostRevision: v.GenericSchema<unknown, T.PostRevision> = v.looseObject({
  author: v.optional(integer()),
  content: v.optional(
    v.looseObject({
      block_version: v.optional(integer()),
      protected: v.optional(v.boolean()),
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  date: v.optional(v.string()),
  date_gmt: v.optional(v.string()),
  excerpt: v.optional(
    v.looseObject({
      protected: v.optional(v.boolean()),
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  guid: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  id: v.optional(integer()),
  meta: v.optional(
    v.looseObject({
      footnotes: v.optional(v.string()),
    }),
  ),
  modified: v.optional(v.string()),
  modified_gmt: v.optional(v.string()),
  parent: v.optional(integer()),
  preview_link: v.optional(v.string()),
  slug: v.optional(v.string()),
  title: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
})

export const PostRevision2: v.GenericSchema<unknown, T.PostRevision2> = v.looseObject({
  author: v.optional(integer()),
  content: v.optional(
    v.looseObject({
      block_version: v.optional(integer()),
      protected: v.optional(v.boolean()),
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  date: v.optional(v.string()),
  date_gmt: v.optional(v.string()),
  excerpt: v.optional(
    v.looseObject({
      protected: v.optional(v.boolean()),
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  guid: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  id: v.optional(integer()),
  meta: v.optional(
    v.looseObject({
      footnotes: v.optional(v.string()),
    }),
  ),
  modified: v.optional(v.string()),
  modified_gmt: v.optional(v.string()),
  parent: v.optional(integer()),
  slug: v.optional(v.string()),
  title: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
})

export const SearchResult: v.GenericSchema<unknown, T.SearchResult> = v.looseObject({
  id: v.optional(v.union([integer(), v.string()])),
  subtype: v.optional(v.picklist(["post", "page", "category", "post_tag"])),
  title: v.optional(v.string()),
  type: v.optional(v.picklist(["post", "term", "post-format"])),
  url: v.optional(v.string()),
})

export const Settings: v.GenericSchema<unknown, T.Settings> = v.looseObject({
  date_format: v.optional(v.string()),
  default_category: v.optional(integer()),
  default_comment_status: v.optional(v.picklist(["open", "closed"])),
  default_ping_status: v.optional(v.picklist(["open", "closed"])),
  default_post_format: v.optional(v.string()),
  description: v.optional(v.string()),
  email: v.optional(v.string()),
  language: v.optional(v.string()),
  page_for_posts: v.optional(integer()),
  page_on_front: v.optional(integer()),
  posts_per_page: v.optional(integer()),
  show_on_front: v.optional(v.string()),
  site_icon: v.optional(integer()),
  site_logo: v.optional(integer()),
  start_of_week: v.optional(integer()),
  time_format: v.optional(v.string()),
  timezone: v.optional(v.string()),
  title: v.optional(v.string()),
  url: v.optional(v.string()),
  use_smilies: v.optional(v.boolean()),
})

export const Sidebar: v.GenericSchema<unknown, T.Sidebar> = v.looseObject({
  after_title: v.optional(v.string()),
  after_widget: v.optional(v.string()),
  before_title: v.optional(v.string()),
  before_widget: v.optional(v.string()),
  class: v.optional(v.string()),
  description: v.optional(v.string()),
  id: v.optional(v.string()),
  name: v.optional(v.string()),
  status: v.optional(v.picklist(["active", "inactive"])),
  widgets: v.optional(v.array(v.union([v.looseObject({}), v.string()]))),
})

export const Status: v.GenericSchema<unknown, T.Status> = v.looseObject({
  date_floating: v.optional(v.boolean()),
  name: v.optional(v.string()),
  private: v.optional(v.boolean()),
  protected: v.optional(v.boolean()),
  public: v.optional(v.boolean()),
  queryable: v.optional(v.boolean()),
  show_in_list: v.optional(v.boolean()),
  slug: v.optional(v.string()),
})

export const Tag: v.GenericSchema<unknown, T.Tag> = v.looseObject({
  count: v.optional(integer()),
  description: v.optional(v.string()),
  id: v.optional(integer()),
  link: v.optional(v.string()),
  meta: v.optional(v.looseObject({})),
  name: v.string(),
  slug: v.optional(v.string()),
  taxonomy: v.optional(v.picklist(["post_tag"])),
})

export const Taxonomy: v.GenericSchema<unknown, T.Taxonomy> = v.looseObject({
  capabilities: v.optional(v.looseObject({})),
  description: v.optional(v.string()),
  hierarchical: v.optional(v.boolean()),
  labels: v.optional(v.looseObject({})),
  name: v.optional(v.string()),
  rest_base: v.optional(v.string()),
  rest_namespace: v.optional(v.string()),
  show_cloud: v.optional(v.boolean()),
  slug: v.optional(v.string()),
  types: v.optional(v.array(v.string())),
  visibility: v.optional(
    v.looseObject({
      public: v.optional(v.boolean()),
      publicly_queryable: v.optional(v.boolean()),
      show_admin_column: v.optional(v.boolean()),
      show_in_nav_menus: v.optional(v.boolean()),
      show_in_quick_edit: v.optional(v.boolean()),
      show_ui: v.optional(v.boolean()),
    }),
  ),
})

export const WpTemplatePart: v.GenericSchema<unknown, T.WpTemplatePart> = v.looseObject({
  area: v.optional(v.string()),
  author: v.optional(integer()),
  author_text: v.optional(v.string()),
  content: v.optional(
    v.union([
      v.looseObject({
        block_version: v.optional(integer()),
        raw: v.optional(v.string()),
      }),
      v.string(),
    ]),
  ),
  description: v.optional(v.string()),
  has_theme_file: v.optional(v.boolean()),
  id: v.optional(v.string()),
  modified: v.optional(v.string()),
  origin: v.optional(v.string()),
  original_source: v.optional(v.picklist(["theme", "plugin", "site", "user"])),
  slug: v.pipe(v.string(), v.minLength(1), v.regex(/[a-zA-Z0-9_%-]+/)),
  source: v.optional(v.string()),
  status: v.optional(v.picklist(["publish", "future", "draft", "pending", "private"])),
  theme: v.optional(v.string()),
  title: v.optional(
    v.union([
      v.looseObject({
        raw: v.optional(v.string()),
        rendered: v.optional(v.string()),
      }),
      v.string(),
    ]),
  ),
  type: v.optional(v.string()),
  wp_id: v.optional(integer()),
})

export const WpTemplate: v.GenericSchema<unknown, T.WpTemplate> = v.looseObject({
  author: v.optional(integer()),
  author_text: v.optional(v.string()),
  content: v.optional(
    v.union([
      v.looseObject({
        block_version: v.optional(integer()),
        raw: v.optional(v.string()),
      }),
      v.string(),
    ]),
  ),
  description: v.optional(v.string()),
  has_theme_file: v.optional(v.boolean()),
  id: v.optional(v.string()),
  is_custom: v.optional(v.boolean()),
  modified: v.optional(v.string()),
  origin: v.optional(v.string()),
  original_source: v.optional(v.picklist(["theme", "plugin", "site", "user"])),
  plugin: v.optional(v.string()),
  slug: v.pipe(v.string(), v.minLength(1), v.regex(/[a-zA-Z0-9_%-]+/)),
  source: v.optional(v.string()),
  status: v.optional(v.picklist(["publish", "future", "draft", "pending", "private"])),
  theme: v.optional(v.string()),
  title: v.optional(
    v.union([
      v.looseObject({
        raw: v.optional(v.string()),
        rendered: v.optional(v.string()),
      }),
      v.string(),
    ]),
  ),
  type: v.optional(v.string()),
  wp_id: v.optional(integer()),
})

export const Theme: v.GenericSchema<unknown, T.Theme> = v.looseObject({
  author: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  author_uri: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  default_template_part_areas: v.optional(
    v.array(
      v.looseObject({
        area: v.optional(v.string()),
        area_tag: v.optional(v.string()),
        description: v.optional(v.string()),
        icon: v.optional(v.string()),
        label: v.optional(v.string()),
      }),
    ),
  ),
  default_template_types: v.optional(
    v.array(
      v.looseObject({
        description: v.optional(v.string()),
        slug: v.optional(v.string()),
        title: v.optional(v.string()),
      }),
    ),
  ),
  description: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  is_block_theme: v.optional(v.boolean()),
  name: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  requires_php: v.optional(v.string()),
  requires_wp: v.optional(v.string()),
  screenshot: v.optional(v.string()),
  status: v.optional(v.picklist(["inactive", "active"])),
  stylesheet: v.optional(v.string()),
  stylesheet_uri: v.optional(v.string()),
  tags: v.optional(
    v.looseObject({
      raw: v.optional(v.array(v.string())),
      rendered: v.optional(v.string()),
    }),
  ),
  template: v.optional(v.string()),
  template_uri: v.optional(v.string()),
  textdomain: v.optional(v.string()),
  theme_supports: v.optional(
    v.looseObject({
      "align-wide": v.optional(v.boolean()),
      "automatic-feed-links": v.optional(v.boolean()),
      "block-template-parts": v.optional(v.boolean()),
      "block-templates": v.optional(v.boolean()),
      "custom-background": v.optional(
        v.union([
          v.boolean(),
          v.looseObject({
            "default-attachment": v.optional(v.picklist(["scroll", "fixed"])),
            "default-color": v.optional(v.string()),
            "default-image": v.optional(v.string()),
            "default-position-x": v.optional(v.picklist(["left", "center", "right"])),
            "default-position-y": v.optional(v.picklist(["left", "center", "right"])),
            "default-preset": v.optional(v.picklist(["default", "fill", "fit", "repeat", "custom"])),
            "default-repeat": v.optional(v.picklist(["repeat-x", "repeat-y", "repeat", "no-repeat"])),
            "default-size": v.optional(v.picklist(["auto", "contain", "cover"])),
          }),
        ]),
      ),
      "custom-header": v.optional(
        v.union([
          v.boolean(),
          v.looseObject({
            "default-image": v.optional(v.string()),
            "default-text-color": v.optional(v.string()),
            "flex-height": v.optional(v.boolean()),
            "flex-width": v.optional(v.boolean()),
            "header-text": v.optional(v.boolean()),
            height: v.optional(integer()),
            "random-default": v.optional(v.boolean()),
            uploads: v.optional(v.boolean()),
            video: v.optional(v.boolean()),
            width: v.optional(integer()),
          }),
        ]),
      ),
      "custom-logo": v.optional(
        v.union([
          v.boolean(),
          v.looseObject({
            "flex-height": v.optional(v.boolean()),
            "flex-width": v.optional(v.boolean()),
            "header-text": v.optional(v.array(v.string())),
            height: v.optional(integer()),
            "unlink-homepage-logo": v.optional(v.boolean()),
            width: v.optional(integer()),
          }),
        ]),
      ),
      "customize-selective-refresh-widgets": v.optional(v.boolean()),
      "dark-editor-style": v.optional(v.boolean()),
      "disable-custom-colors": v.optional(v.boolean()),
      "disable-custom-font-sizes": v.optional(v.boolean()),
      "disable-custom-gradients": v.optional(v.boolean()),
      "disable-layout-styles": v.optional(v.boolean()),
      "editor-color-palette": v.optional(
        v.union([
          v.boolean(),
          v.array(
            v.looseObject({
              color: v.optional(v.string()),
              name: v.optional(v.string()),
              slug: v.optional(v.string()),
            }),
          ),
        ]),
      ),
      "editor-font-sizes": v.optional(
        v.union([
          v.boolean(),
          v.array(
            v.looseObject({
              name: v.optional(v.string()),
              size: v.optional(number()),
              slug: v.optional(v.string()),
            }),
          ),
        ]),
      ),
      "editor-gradient-presets": v.optional(
        v.union([
          v.boolean(),
          v.array(
            v.looseObject({
              gradient: v.optional(v.string()),
              name: v.optional(v.string()),
              slug: v.optional(v.string()),
            }),
          ),
        ]),
      ),
      "editor-spacing-sizes": v.optional(
        v.union([
          v.boolean(),
          v.array(
            v.looseObject({
              name: v.optional(v.string()),
              size: v.optional(v.string()),
              slug: v.optional(v.string()),
            }),
          ),
        ]),
      ),
      "editor-styles": v.optional(v.boolean()),
      formats: v.optional(v.array(v.string())),
      html5: v.optional(
        v.union([
          v.boolean(),
          v.array(v.picklist(["search-form", "comment-form", "comment-list", "gallery", "caption", "script", "style"])),
        ]),
      ),
      "post-thumbnails": v.optional(v.union([v.boolean(), v.array(v.string())])),
      "responsive-embeds": v.optional(v.boolean()),
      "title-tag": v.optional(v.boolean()),
      "wp-block-styles": v.optional(v.boolean()),
    }),
  ),
  theme_uri: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  version: v.optional(v.string()),
})

export const Type: v.GenericSchema<unknown, T.Type> = v.looseObject({
  capabilities: v.optional(v.looseObject({})),
  description: v.optional(v.string()),
  has_archive: v.optional(v.union([v.string(), v.boolean()])),
  hierarchical: v.optional(v.boolean()),
  icon: v.optional(v.nullable(v.string())),
  labels: v.optional(v.looseObject({})),
  name: v.optional(v.string()),
  rest_base: v.optional(v.string()),
  rest_namespace: v.optional(v.string()),
  slug: v.optional(v.string()),
  supports: v.optional(v.looseObject({})),
  taxonomies: v.optional(v.array(v.string())),
  template: v.optional(v.array(v.unknown())),
  template_lock: v.optional(v.union([v.picklist(["all", "insert", "contentOnly"]), v.literal(false)])),
  viewable: v.optional(v.boolean()),
  visibility: v.optional(
    v.looseObject({
      show_in_nav_menus: v.optional(v.boolean()),
      show_ui: v.optional(v.boolean()),
    }),
  ),
})

export const User: v.GenericSchema<unknown, T.User> = v.looseObject({
  avatar_urls: v.optional(
    v.looseObject({
      "24": v.optional(v.string()),
      "48": v.optional(v.string()),
      "96": v.optional(v.string()),
    }),
  ),
  capabilities: v.optional(v.looseObject({})),
  description: v.optional(v.string()),
  email: v.string(),
  extra_capabilities: v.optional(v.looseObject({})),
  first_name: v.optional(v.string()),
  id: v.optional(integer()),
  last_name: v.optional(v.string()),
  link: v.optional(v.string()),
  locale: v.optional(v.picklist(["", "en_US"])),
  meta: v.optional(
    v.looseObject({
      persisted_preferences: v.optional(
        v.objectWithRest(
          {
            _modified: v.optional(v.string()),
          },
          v.unknown(),
        ),
      ),
    }),
  ),
  name: v.optional(v.string()),
  nickname: v.optional(v.string()),
  password: v.string(),
  registered_date: v.optional(v.string()),
  roles: v.optional(v.array(v.string())),
  slug: v.optional(v.string()),
  url: v.optional(v.string()),
  username: v.string(),
})

export const ApplicationPassword: v.GenericSchema<unknown, T.ApplicationPassword> = v.looseObject({
  app_id: v.optional(v.union([v.string(), v.picklist([""])])),
  created: v.optional(v.string()),
  last_ip: v.optional(v.nullable(v.string())),
  last_used: v.optional(v.nullable(v.string())),
  name: v.pipe(v.string(), v.minLength(1), v.regex(/.*\S.*/)),
  password: v.optional(v.string()),
  uuid: v.optional(v.string()),
})

export const WidgetType: v.GenericSchema<unknown, T.WidgetType> = v.looseObject({
  classname: v.optional(v.string()),
  description: v.optional(v.string()),
  id: v.optional(v.string()),
  is_multi: v.optional(v.boolean()),
  name: v.optional(v.string()),
})

export const Widget: v.GenericSchema<unknown, T.Widget> = v.looseObject({
  form_data: v.optional(v.string()),
  id: v.optional(v.string()),
  id_base: v.optional(v.string()),
  instance: v.optional(
    v.looseObject({
      encoded: v.optional(v.string()),
      hash: v.optional(v.string()),
      raw: v.optional(v.looseObject({})),
    }),
  ),
  rendered: v.optional(v.string()),
  rendered_form: v.optional(v.string()),
  sidebar: v.string(),
})

export const WpPatternCategory: v.GenericSchema<unknown, T.WpPatternCategory> = v.looseObject({
  count: v.optional(integer()),
  description: v.optional(v.string()),
  id: v.optional(integer()),
  link: v.optional(v.string()),
  meta: v.optional(v.looseObject({})),
  name: v.string(),
  slug: v.optional(v.string()),
  taxonomy: v.optional(v.picklist(["wp_pattern_category"])),
})

export const GetWpV2BlockDirectorySearchResponse: v.GenericSchema<unknown, T.GetWpV2BlockDirectorySearchResponse> =
  v.array(v.lazy(() => BlockDirectoryItem))

export const GetWpV2BlocksResponse: v.GenericSchema<unknown, T.GetWpV2BlocksResponse> = v.array(v.lazy(() => WpBlock))

export const PostWpV2BlocksRequest: v.GenericSchema<unknown, T.PostWpV2BlocksRequest> = v.looseObject({
  content: v.optional(
    v.looseObject({
      block_version: v.optional(integer()),
      protected: v.optional(v.boolean()),
      raw: v.optional(v.string()),
    }),
  ),
  date: v.optional(v.nullable(v.string())),
  date_gmt: v.optional(v.nullable(v.string())),
  excerpt: v.optional(
    v.looseObject({
      protected: v.optional(v.boolean()),
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  meta: v.optional(
    v.looseObject({
      footnotes: v.optional(v.string()),
      wp_pattern_sync_status: v.optional(v.picklist(["partial", "unsynced"])),
    }),
  ),
  password: v.optional(v.string()),
  slug: v.optional(v.string()),
  status: v.optional(v.picklist(["publish", "future", "draft", "pending", "private"])),
  template: v.optional(v.string()),
  title: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
    }),
  ),
  wp_pattern_category: v.optional(v.array(integer())),
})

export const PostWpV2BlocksByIdRequest: v.GenericSchema<unknown, T.PostWpV2BlocksByIdRequest> = v.looseObject({
  content: v.optional(
    v.looseObject({
      block_version: v.optional(integer()),
      protected: v.optional(v.boolean()),
      raw: v.optional(v.string()),
    }),
  ),
  date: v.optional(v.nullable(v.string())),
  date_gmt: v.optional(v.nullable(v.string())),
  excerpt: v.optional(
    v.looseObject({
      protected: v.optional(v.boolean()),
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  meta: v.optional(
    v.looseObject({
      footnotes: v.optional(v.string()),
      wp_pattern_sync_status: v.optional(v.picklist(["partial", "unsynced"])),
    }),
  ),
  password: v.optional(v.string()),
  slug: v.optional(v.string()),
  status: v.optional(v.picklist(["publish", "future", "draft", "pending", "private"])),
  template: v.optional(v.string()),
  title: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
    }),
  ),
  wp_pattern_category: v.optional(v.array(integer())),
})

export const PostWpV2BlocksByIdAutosavesRequest: v.GenericSchema<unknown, T.PostWpV2BlocksByIdAutosavesRequest> =
  v.looseObject({
    content: v.optional(
      v.looseObject({
        block_version: v.optional(integer()),
        protected: v.optional(v.boolean()),
        raw: v.optional(v.string()),
      }),
    ),
    date: v.optional(v.nullable(v.string())),
    date_gmt: v.optional(v.nullable(v.string())),
    excerpt: v.optional(
      v.looseObject({
        protected: v.optional(v.boolean()),
        raw: v.optional(v.string()),
        rendered: v.optional(v.string()),
      }),
    ),
    meta: v.optional(
      v.looseObject({
        footnotes: v.optional(v.string()),
        wp_pattern_sync_status: v.optional(v.picklist(["partial", "unsynced"])),
      }),
    ),
    parent: v.optional(integer()),
    password: v.optional(v.string()),
    slug: v.optional(v.string()),
    status: v.optional(v.picklist(["publish", "future", "draft", "pending", "private"])),
    template: v.optional(v.string()),
    title: v.optional(
      v.looseObject({
        raw: v.optional(v.string()),
      }),
    ),
    wp_pattern_category: v.optional(v.array(integer())),
  })

export const GetWpV2BlocksByParentRevisionsResponse: v.GenericSchema<
  unknown,
  T.GetWpV2BlocksByParentRevisionsResponse
> = v.array(v.lazy(() => WpBlockRevision2))

export const GetWpV2CategoriesResponse: v.GenericSchema<unknown, T.GetWpV2CategoriesResponse> = v.array(
  v.lazy(() => Category),
)

export const PostWpV2CategoriesRequest: v.GenericSchema<unknown, T.PostWpV2CategoriesRequest> = v.looseObject({
  description: v.optional(v.string()),
  meta: v.optional(v.looseObject({})),
  name: v.string(),
  parent: v.optional(integer()),
  slug: v.optional(v.string()),
})

export const PostWpV2CategoriesByIdRequest: v.GenericSchema<unknown, T.PostWpV2CategoriesByIdRequest> = v.looseObject({
  description: v.optional(v.string()),
  meta: v.optional(v.looseObject({})),
  name: v.optional(v.string()),
  parent: v.optional(integer()),
  slug: v.optional(v.string()),
})

export const GetWpV2CommentsResponse: v.GenericSchema<unknown, T.GetWpV2CommentsResponse> = v.array(
  v.lazy(() => Comment),
)

export const PostWpV2CommentsRequest: v.GenericSchema<unknown, T.PostWpV2CommentsRequest> = v.looseObject({
  author: v.optional(integer()),
  author_email: v.optional(v.string()),
  author_ip: v.optional(v.string()),
  author_name: v.optional(v.string()),
  author_url: v.optional(v.string()),
  author_user_agent: v.optional(v.string()),
  content: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  date: v.optional(v.string()),
  date_gmt: v.optional(v.string()),
  meta: v.optional(
    v.looseObject({
      _wp_note_status: v.optional(v.picklist(["resolved", "reopen"])),
    }),
  ),
  parent: v.optional(integer()),
  post: v.optional(integer()),
  status: v.optional(v.string()),
})

export const PostWpV2CommentsByIdRequest: v.GenericSchema<unknown, T.PostWpV2CommentsByIdRequest> = v.looseObject({
  author: v.optional(integer()),
  author_email: v.optional(v.string()),
  author_ip: v.optional(v.string()),
  author_name: v.optional(v.string()),
  author_url: v.optional(v.string()),
  author_user_agent: v.optional(v.string()),
  content: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  date: v.optional(v.string()),
  date_gmt: v.optional(v.string()),
  meta: v.optional(
    v.looseObject({
      _wp_note_status: v.optional(v.picklist(["resolved", "reopen"])),
    }),
  ),
  parent: v.optional(integer()),
  post: v.optional(integer()),
  status: v.optional(v.string()),
})

export const GetWpV2FontCollectionsResponse: v.GenericSchema<unknown, T.GetWpV2FontCollectionsResponse> = v.array(
  v.lazy(() => FontCollection),
)

export const GetWpV2FontFamiliesResponse: v.GenericSchema<unknown, T.GetWpV2FontFamiliesResponse> = v.array(
  v.lazy(() => WpFontFamily),
)

export const PostWpV2FontFamiliesRequest: v.GenericSchema<unknown, T.PostWpV2FontFamiliesRequest> = v.looseObject({
  font_family_settings: v.string(),
  theme_json_version: v.optional(integer({ minimum: 2, maximum: 3 })),
})

export const GetWpV2FontFamiliesByFontFamilyIdFontFacesResponse: v.GenericSchema<
  unknown,
  T.GetWpV2FontFamiliesByFontFamilyIdFontFacesResponse
> = v.array(v.lazy(() => WpFontFace))

export const PostWpV2FontFamiliesByFontFamilyIdFontFacesRequest: v.GenericSchema<
  unknown,
  T.PostWpV2FontFamiliesByFontFamilyIdFontFacesRequest
> = v.looseObject({
  font_face_settings: v.string(),
  theme_json_version: v.optional(integer({ minimum: 2, maximum: 3 })),
})

export const PostWpV2FontFamiliesByIdRequest: v.GenericSchema<unknown, T.PostWpV2FontFamiliesByIdRequest> =
  v.looseObject({
    font_family_settings: v.string(),
    theme_json_version: v.optional(integer({ minimum: 2, maximum: 3 })),
  })

export const GetWpV2GlobalStylesByParentRevisionsResponse: v.GenericSchema<
  unknown,
  T.GetWpV2GlobalStylesByParentRevisionsResponse
> = v.array(v.lazy(() => WpGlobalStylesRevision))

export const GetWpV2MediaResponse: v.GenericSchema<unknown, T.GetWpV2MediaResponse> = v.array(v.lazy(() => Attachment))

export const PostWpV2MediaRequest: v.GenericSchema<unknown, T.PostWpV2MediaRequest> = v.looseObject({
  alt_text: v.optional(v.string()),
  author: v.optional(integer()),
  caption: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  comment_status: v.optional(v.picklist(["open", "closed"])),
  date: v.optional(v.nullable(v.string())),
  date_gmt: v.optional(v.nullable(v.string())),
  description: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  featured_media: v.optional(integer()),
  meta: v.optional(v.looseObject({})),
  ping_status: v.optional(v.picklist(["open", "closed"])),
  post: v.optional(integer()),
  slug: v.optional(v.string()),
  status: v.optional(v.picklist(["publish", "future", "draft", "pending", "private"])),
  template: v.optional(v.string()),
  title: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
})

export const PostWpV2MediaByIdRequest: v.GenericSchema<unknown, T.PostWpV2MediaByIdRequest> = v.looseObject({
  alt_text: v.optional(v.string()),
  author: v.optional(integer()),
  caption: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  comment_status: v.optional(v.picklist(["open", "closed"])),
  date: v.optional(v.nullable(v.string())),
  date_gmt: v.optional(v.nullable(v.string())),
  description: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  featured_media: v.optional(integer()),
  meta: v.optional(v.looseObject({})),
  ping_status: v.optional(v.picklist(["open", "closed"])),
  post: v.optional(integer()),
  slug: v.optional(v.string()),
  status: v.optional(v.picklist(["publish", "future", "draft", "pending", "private"])),
  template: v.optional(v.string()),
  title: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
})

export const PostWpV2MediaByIdEditRequest: v.GenericSchema<unknown, T.PostWpV2MediaByIdEditRequest> = v.looseObject({
  alt_text: v.optional(v.string()),
  caption: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  description: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  height: v.optional(number({ minimum: 0, maximum: 100 })),
  modifiers: v.optional(
    v.pipe(
      v.array(
        v.union([
          v.looseObject({
            args: v.looseObject({
              flip: v.looseObject({
                horizontal: v.boolean(),
                vertical: v.boolean(),
              }),
            }),
            type: v.picklist(["flip"]),
          }),
          v.looseObject({
            args: v.looseObject({
              angle: number(),
            }),
            type: v.picklist(["rotate"]),
          }),
          v.looseObject({
            args: v.looseObject({
              height: number(),
              left: number(),
              top: number(),
              width: number(),
            }),
            type: v.picklist(["crop"]),
          }),
        ]),
      ),
      v.minLength(1),
    ),
  ),
  post: v.optional(integer()),
  rotation: v.optional(integer({ minimum: 0, maximum: 360 })),
  src: v.string(),
  title: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  width: v.optional(number({ minimum: 0, maximum: 100 })),
  x: v.optional(number({ minimum: 0, maximum: 100 })),
  y: v.optional(number({ minimum: 0, maximum: 100 })),
})

export const PostWpV2MediaByIdPostProcessRequest: v.GenericSchema<unknown, T.PostWpV2MediaByIdPostProcessRequest> =
  v.looseObject({
    action: v.picklist(["create-image-subsizes"]),
  })

export const GetWpV2MenuItemsResponse: v.GenericSchema<unknown, T.GetWpV2MenuItemsResponse> = v.array(
  v.lazy(() => NavMenuItem),
)

export const PostWpV2MenuItemsRequest: v.GenericSchema<unknown, T.PostWpV2MenuItemsRequest> = v.looseObject({
  attr_title: v.optional(v.string()),
  classes: v.optional(v.array(v.string())),
  description: v.optional(v.string()),
  menu_order: v.optional(integer({ minimum: 1 })),
  menus: v.optional(integer()),
  meta: v.optional(v.looseObject({})),
  object: v.optional(v.string()),
  object_id: v.optional(integer({ minimum: 0 })),
  parent: v.optional(integer({ minimum: 0 })),
  status: v.optional(v.picklist(["publish", "future", "draft", "pending", "private"])),
  target: v.optional(v.picklist(["_blank", ""])),
  title: v.optional(
    v.union([
      v.string(),
      v.looseObject({
        raw: v.optional(v.string()),
        rendered: v.optional(v.string()),
      }),
    ]),
  ),
  type: v.optional(v.picklist(["taxonomy", "post_type", "post_type_archive", "custom"])),
  url: v.optional(v.string()),
  xfn: v.optional(v.array(v.string())),
})

export const PostWpV2MenuItemsByIdRequest: v.GenericSchema<unknown, T.PostWpV2MenuItemsByIdRequest> = v.looseObject({
  attr_title: v.optional(v.string()),
  classes: v.optional(v.array(v.string())),
  description: v.optional(v.string()),
  menu_order: v.optional(integer({ minimum: 1 })),
  menus: v.optional(integer()),
  meta: v.optional(v.looseObject({})),
  object: v.optional(v.string()),
  object_id: v.optional(integer({ minimum: 0 })),
  parent: v.optional(integer({ minimum: 0 })),
  status: v.optional(v.picklist(["publish", "future", "draft", "pending", "private"])),
  target: v.optional(v.picklist(["_blank", ""])),
  title: v.optional(
    v.union([
      v.string(),
      v.looseObject({
        raw: v.optional(v.string()),
        rendered: v.optional(v.string()),
      }),
    ]),
  ),
  type: v.optional(v.picklist(["taxonomy", "post_type", "post_type_archive", "custom"])),
  url: v.optional(v.string()),
  xfn: v.optional(v.array(v.string())),
})

export const PostWpV2MenuItemsByIdAutosavesRequest: v.GenericSchema<unknown, T.PostWpV2MenuItemsByIdAutosavesRequest> =
  v.looseObject({
    attr_title: v.optional(v.string()),
    classes: v.optional(v.array(v.string())),
    description: v.optional(v.string()),
    menu_order: v.optional(integer({ minimum: 1 })),
    menus: v.optional(integer()),
    meta: v.optional(v.looseObject({})),
    object: v.optional(v.string()),
    object_id: v.optional(integer({ minimum: 0 })),
    parent: v.optional(integer({ minimum: 0 })),
    status: v.optional(v.picklist(["publish", "future", "draft", "pending", "private"])),
    target: v.optional(v.picklist(["_blank", ""])),
    title: v.optional(
      v.union([
        v.string(),
        v.looseObject({
          raw: v.optional(v.string()),
          rendered: v.optional(v.string()),
        }),
      ]),
    ),
    type: v.optional(v.picklist(["taxonomy", "post_type", "post_type_archive", "custom"])),
    url: v.optional(v.string()),
    xfn: v.optional(v.array(v.string())),
  })

export const GetWpV2MenusResponse: v.GenericSchema<unknown, T.GetWpV2MenusResponse> = v.array(v.lazy(() => NavMenu))

export const PostWpV2MenusRequest: v.GenericSchema<unknown, T.PostWpV2MenusRequest> = v.looseObject({
  auto_add: v.optional(v.boolean()),
  description: v.optional(v.string()),
  locations: v.optional(v.array(v.string())),
  meta: v.optional(v.looseObject({})),
  name: v.string(),
  slug: v.optional(v.string()),
})

export const PostWpV2MenusByIdRequest: v.GenericSchema<unknown, T.PostWpV2MenusByIdRequest> = v.looseObject({
  auto_add: v.optional(v.boolean()),
  description: v.optional(v.string()),
  locations: v.optional(v.array(v.string())),
  meta: v.optional(v.looseObject({})),
  name: v.optional(v.string()),
  slug: v.optional(v.string()),
})

export const GetWpV2NavigationResponse: v.GenericSchema<unknown, T.GetWpV2NavigationResponse> = v.array(
  v.lazy(() => WpNavigation),
)

export const PostWpV2NavigationRequest: v.GenericSchema<unknown, T.PostWpV2NavigationRequest> = v.looseObject({
  content: v.optional(
    v.looseObject({
      block_version: v.optional(integer()),
      protected: v.optional(v.boolean()),
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  date: v.optional(v.nullable(v.string())),
  date_gmt: v.optional(v.nullable(v.string())),
  password: v.optional(v.string()),
  slug: v.optional(v.string()),
  status: v.optional(v.picklist(["publish", "future", "draft", "pending", "private"])),
  template: v.optional(v.string()),
  title: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
})

export const PostWpV2NavigationByIdRequest: v.GenericSchema<unknown, T.PostWpV2NavigationByIdRequest> = v.looseObject({
  content: v.optional(
    v.looseObject({
      block_version: v.optional(integer()),
      protected: v.optional(v.boolean()),
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  date: v.optional(v.nullable(v.string())),
  date_gmt: v.optional(v.nullable(v.string())),
  password: v.optional(v.string()),
  slug: v.optional(v.string()),
  status: v.optional(v.picklist(["publish", "future", "draft", "pending", "private"])),
  template: v.optional(v.string()),
  title: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
})

export const PostWpV2NavigationByIdAutosavesRequest: v.GenericSchema<
  unknown,
  T.PostWpV2NavigationByIdAutosavesRequest
> = v.looseObject({
  content: v.optional(
    v.looseObject({
      block_version: v.optional(integer()),
      protected: v.optional(v.boolean()),
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  date: v.optional(v.nullable(v.string())),
  date_gmt: v.optional(v.nullable(v.string())),
  parent: v.optional(integer()),
  password: v.optional(v.string()),
  slug: v.optional(v.string()),
  status: v.optional(v.picklist(["publish", "future", "draft", "pending", "private"])),
  template: v.optional(v.string()),
  title: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
})

export const GetWpV2NavigationByParentRevisionsResponse: v.GenericSchema<
  unknown,
  T.GetWpV2NavigationByParentRevisionsResponse
> = v.array(v.lazy(() => WpNavigationRevision2))

export const GetWpV2PagesResponse: v.GenericSchema<unknown, T.GetWpV2PagesResponse> = v.array(v.lazy(() => Page))

export const PostWpV2PagesRequest: v.GenericSchema<unknown, T.PostWpV2PagesRequest> = v.looseObject({
  author: v.optional(integer()),
  comment_status: v.optional(v.picklist(["open", "closed"])),
  content: v.optional(
    v.looseObject({
      block_version: v.optional(integer()),
      protected: v.optional(v.boolean()),
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  date: v.optional(v.nullable(v.string())),
  date_gmt: v.optional(v.nullable(v.string())),
  excerpt: v.optional(
    v.looseObject({
      protected: v.optional(v.boolean()),
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  featured_media: v.optional(integer()),
  menu_order: v.optional(integer()),
  meta: v.optional(
    v.looseObject({
      footnotes: v.optional(v.string()),
    }),
  ),
  parent: v.optional(integer()),
  password: v.optional(v.string()),
  ping_status: v.optional(v.picklist(["open", "closed"])),
  slug: v.optional(v.string()),
  status: v.optional(v.picklist(["publish", "future", "draft", "pending", "private"])),
  template: v.optional(v.string()),
  title: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
})

export const PostWpV2PagesByIdRequest: v.GenericSchema<unknown, T.PostWpV2PagesByIdRequest> = v.looseObject({
  author: v.optional(integer()),
  comment_status: v.optional(v.picklist(["open", "closed"])),
  content: v.optional(
    v.looseObject({
      block_version: v.optional(integer()),
      protected: v.optional(v.boolean()),
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  date: v.optional(v.nullable(v.string())),
  date_gmt: v.optional(v.nullable(v.string())),
  excerpt: v.optional(
    v.looseObject({
      protected: v.optional(v.boolean()),
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  featured_media: v.optional(integer()),
  menu_order: v.optional(integer()),
  meta: v.optional(
    v.looseObject({
      footnotes: v.optional(v.string()),
    }),
  ),
  parent: v.optional(integer()),
  password: v.optional(v.string()),
  ping_status: v.optional(v.picklist(["open", "closed"])),
  slug: v.optional(v.string()),
  status: v.optional(v.picklist(["publish", "future", "draft", "pending", "private"])),
  template: v.optional(v.string()),
  title: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
})

export const PostWpV2PagesByIdAutosavesRequest: v.GenericSchema<unknown, T.PostWpV2PagesByIdAutosavesRequest> =
  v.looseObject({
    author: v.optional(integer()),
    comment_status: v.optional(v.picklist(["open", "closed"])),
    content: v.optional(
      v.looseObject({
        block_version: v.optional(integer()),
        protected: v.optional(v.boolean()),
        raw: v.optional(v.string()),
        rendered: v.optional(v.string()),
      }),
    ),
    date: v.optional(v.nullable(v.string())),
    date_gmt: v.optional(v.nullable(v.string())),
    excerpt: v.optional(
      v.looseObject({
        protected: v.optional(v.boolean()),
        raw: v.optional(v.string()),
        rendered: v.optional(v.string()),
      }),
    ),
    featured_media: v.optional(integer()),
    menu_order: v.optional(integer()),
    meta: v.optional(
      v.looseObject({
        footnotes: v.optional(v.string()),
      }),
    ),
    parent: v.optional(integer()),
    password: v.optional(v.string()),
    ping_status: v.optional(v.picklist(["open", "closed"])),
    slug: v.optional(v.string()),
    status: v.optional(v.picklist(["publish", "future", "draft", "pending", "private"])),
    template: v.optional(v.string()),
    title: v.optional(
      v.looseObject({
        raw: v.optional(v.string()),
        rendered: v.optional(v.string()),
      }),
    ),
  })

export const GetWpV2PagesByParentRevisionsResponse: v.GenericSchema<unknown, T.GetWpV2PagesByParentRevisionsResponse> =
  v.array(v.lazy(() => PageRevision2))

export const GetWpV2PatternDirectoryPatternsResponse: v.GenericSchema<
  unknown,
  T.GetWpV2PatternDirectoryPatternsResponse
> = v.array(v.lazy(() => PatternDirectoryItem))

export const PostWpV2PluginsRequest: v.GenericSchema<unknown, T.PostWpV2PluginsRequest> = v.looseObject({
  slug: v.pipe(v.string(), v.regex(/[\w-]+/)),
  status: v.optional(v.picklist(["inactive", "active"])),
})

export const GetWpV2PostsResponse: v.GenericSchema<unknown, T.GetWpV2PostsResponse> = v.array(v.lazy(() => Post))

export const PostWpV2PostsRequest: v.GenericSchema<unknown, T.PostWpV2PostsRequest> = v.looseObject({
  author: v.optional(integer()),
  categories: v.optional(v.array(integer())),
  comment_status: v.optional(v.picklist(["open", "closed"])),
  content: v.optional(
    v.looseObject({
      block_version: v.optional(integer()),
      protected: v.optional(v.boolean()),
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  date: v.optional(v.nullable(v.string())),
  date_gmt: v.optional(v.nullable(v.string())),
  excerpt: v.optional(
    v.looseObject({
      protected: v.optional(v.boolean()),
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  featured_media: v.optional(integer()),
  format: v.optional(
    v.picklist(["standard", "aside", "chat", "gallery", "link", "image", "quote", "status", "video", "audio"]),
  ),
  meta: v.optional(
    v.looseObject({
      footnotes: v.optional(v.string()),
    }),
  ),
  password: v.optional(v.string()),
  ping_status: v.optional(v.picklist(["open", "closed"])),
  slug: v.optional(v.string()),
  status: v.optional(v.picklist(["publish", "future", "draft", "pending", "private"])),
  sticky: v.optional(v.boolean()),
  tags: v.optional(v.array(integer())),
  template: v.optional(v.string()),
  title: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
})

export const PostWpV2PostsByIdRequest: v.GenericSchema<unknown, T.PostWpV2PostsByIdRequest> = v.looseObject({
  author: v.optional(integer()),
  categories: v.optional(v.array(integer())),
  comment_status: v.optional(v.picklist(["open", "closed"])),
  content: v.optional(
    v.looseObject({
      block_version: v.optional(integer()),
      protected: v.optional(v.boolean()),
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  date: v.optional(v.nullable(v.string())),
  date_gmt: v.optional(v.nullable(v.string())),
  excerpt: v.optional(
    v.looseObject({
      protected: v.optional(v.boolean()),
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
  featured_media: v.optional(integer()),
  format: v.optional(
    v.picklist(["standard", "aside", "chat", "gallery", "link", "image", "quote", "status", "video", "audio"]),
  ),
  meta: v.optional(
    v.looseObject({
      footnotes: v.optional(v.string()),
    }),
  ),
  password: v.optional(v.string()),
  ping_status: v.optional(v.picklist(["open", "closed"])),
  slug: v.optional(v.string()),
  status: v.optional(v.picklist(["publish", "future", "draft", "pending", "private"])),
  sticky: v.optional(v.boolean()),
  tags: v.optional(v.array(integer())),
  template: v.optional(v.string()),
  title: v.optional(
    v.looseObject({
      raw: v.optional(v.string()),
      rendered: v.optional(v.string()),
    }),
  ),
})

export const PostWpV2PostsByIdAutosavesRequest: v.GenericSchema<unknown, T.PostWpV2PostsByIdAutosavesRequest> =
  v.looseObject({
    author: v.optional(integer()),
    categories: v.optional(v.array(integer())),
    comment_status: v.optional(v.picklist(["open", "closed"])),
    content: v.optional(
      v.looseObject({
        block_version: v.optional(integer()),
        protected: v.optional(v.boolean()),
        raw: v.optional(v.string()),
        rendered: v.optional(v.string()),
      }),
    ),
    date: v.optional(v.nullable(v.string())),
    date_gmt: v.optional(v.nullable(v.string())),
    excerpt: v.optional(
      v.looseObject({
        protected: v.optional(v.boolean()),
        raw: v.optional(v.string()),
        rendered: v.optional(v.string()),
      }),
    ),
    featured_media: v.optional(integer()),
    format: v.optional(
      v.picklist(["standard", "aside", "chat", "gallery", "link", "image", "quote", "status", "video", "audio"]),
    ),
    meta: v.optional(
      v.looseObject({
        footnotes: v.optional(v.string()),
      }),
    ),
    parent: v.optional(integer()),
    password: v.optional(v.string()),
    ping_status: v.optional(v.picklist(["open", "closed"])),
    slug: v.optional(v.string()),
    status: v.optional(v.picklist(["publish", "future", "draft", "pending", "private"])),
    sticky: v.optional(v.boolean()),
    tags: v.optional(v.array(integer())),
    template: v.optional(v.string()),
    title: v.optional(
      v.looseObject({
        raw: v.optional(v.string()),
        rendered: v.optional(v.string()),
      }),
    ),
  })

export const GetWpV2PostsByParentRevisionsResponse: v.GenericSchema<unknown, T.GetWpV2PostsByParentRevisionsResponse> =
  v.array(v.lazy(() => PostRevision2))

export const GetWpV2SearchResponse: v.GenericSchema<unknown, T.GetWpV2SearchResponse> = v.array(
  v.lazy(() => SearchResult),
)

export const PostWpV2SettingsRequest: v.GenericSchema<unknown, T.PostWpV2SettingsRequest> = v.looseObject({
  date_format: v.optional(v.string()),
  default_category: v.optional(integer()),
  default_comment_status: v.optional(v.picklist(["open", "closed"])),
  default_ping_status: v.optional(v.picklist(["open", "closed"])),
  default_post_format: v.optional(v.string()),
  description: v.optional(v.string()),
  email: v.optional(v.string()),
  language: v.optional(v.string()),
  page_for_posts: v.optional(integer()),
  page_on_front: v.optional(integer()),
  posts_per_page: v.optional(integer()),
  show_on_front: v.optional(v.string()),
  site_icon: v.optional(integer()),
  site_logo: v.optional(integer()),
  start_of_week: v.optional(integer()),
  time_format: v.optional(v.string()),
  timezone: v.optional(v.string()),
  title: v.optional(v.string()),
  url: v.optional(v.string()),
  use_smilies: v.optional(v.boolean()),
})

export const PostWpV2SidebarsByIdRequest: v.GenericSchema<unknown, T.PostWpV2SidebarsByIdRequest> = v.looseObject({
  widgets: v.optional(v.array(v.union([v.looseObject({}), v.string()]))),
})

export const GetWpV2TagsResponse: v.GenericSchema<unknown, T.GetWpV2TagsResponse> = v.array(v.lazy(() => Tag))

export const PostWpV2TagsRequest: v.GenericSchema<unknown, T.PostWpV2TagsRequest> = v.looseObject({
  description: v.optional(v.string()),
  meta: v.optional(v.looseObject({})),
  name: v.string(),
  slug: v.optional(v.string()),
})

export const PostWpV2TagsByIdRequest: v.GenericSchema<unknown, T.PostWpV2TagsByIdRequest> = v.looseObject({
  description: v.optional(v.string()),
  meta: v.optional(v.looseObject({})),
  name: v.optional(v.string()),
  slug: v.optional(v.string()),
})

export const PostWpV2TemplatePartsRequest: v.GenericSchema<unknown, T.PostWpV2TemplatePartsRequest> = v.looseObject({
  area: v.optional(v.string()),
  author: v.optional(integer()),
  content: v.optional(
    v.union([
      v.looseObject({
        block_version: v.optional(integer()),
        raw: v.optional(v.string()),
      }),
      v.string(),
    ]),
  ),
  description: v.optional(v.string()),
  slug: v.pipe(v.string(), v.minLength(1), v.regex(/[a-zA-Z0-9_%-]+/)),
  status: v.optional(v.picklist(["publish", "future", "draft", "pending", "private"])),
  theme: v.optional(v.string()),
  title: v.optional(
    v.union([
      v.looseObject({
        raw: v.optional(v.string()),
        rendered: v.optional(v.string()),
      }),
      v.string(),
    ]),
  ),
  type: v.optional(v.string()),
})

export const PostWpV2TemplatesRequest: v.GenericSchema<unknown, T.PostWpV2TemplatesRequest> = v.looseObject({
  author: v.optional(integer()),
  content: v.optional(
    v.union([
      v.looseObject({
        block_version: v.optional(integer()),
        raw: v.optional(v.string()),
      }),
      v.string(),
    ]),
  ),
  description: v.optional(v.string()),
  slug: v.pipe(v.string(), v.minLength(1), v.regex(/[a-zA-Z0-9_%-]+/)),
  status: v.optional(v.picklist(["publish", "future", "draft", "pending", "private"])),
  theme: v.optional(v.string()),
  title: v.optional(
    v.union([
      v.looseObject({
        raw: v.optional(v.string()),
        rendered: v.optional(v.string()),
      }),
      v.string(),
    ]),
  ),
  type: v.optional(v.string()),
})

export const GetWpV2UsersResponse: v.GenericSchema<unknown, T.GetWpV2UsersResponse> = v.array(v.lazy(() => User))

export const PostWpV2UsersRequest: v.GenericSchema<unknown, T.PostWpV2UsersRequest> = v.looseObject({
  description: v.optional(v.string()),
  email: v.string(),
  first_name: v.optional(v.string()),
  last_name: v.optional(v.string()),
  locale: v.optional(v.picklist(["", "en_US"])),
  meta: v.optional(
    v.looseObject({
      persisted_preferences: v.optional(
        v.objectWithRest(
          {
            _modified: v.optional(v.string()),
          },
          v.unknown(),
        ),
      ),
    }),
  ),
  name: v.optional(v.string()),
  nickname: v.optional(v.string()),
  password: v.string(),
  roles: v.optional(v.array(v.string())),
  slug: v.optional(v.string()),
  url: v.optional(v.string()),
  username: v.string(),
})

export const PostWpV2UsersByIdRequest: v.GenericSchema<unknown, T.PostWpV2UsersByIdRequest> = v.looseObject({
  description: v.optional(v.string()),
  email: v.optional(v.string()),
  first_name: v.optional(v.string()),
  last_name: v.optional(v.string()),
  locale: v.optional(v.picklist(["", "en_US"])),
  meta: v.optional(
    v.looseObject({
      persisted_preferences: v.optional(
        v.objectWithRest(
          {
            _modified: v.optional(v.string()),
          },
          v.unknown(),
        ),
      ),
    }),
  ),
  name: v.optional(v.string()),
  nickname: v.optional(v.string()),
  password: v.optional(v.string()),
  roles: v.optional(v.array(v.string())),
  slug: v.optional(v.string()),
  url: v.optional(v.string()),
  username: v.optional(v.string()),
})

export const PostWpV2UsersByUserIdApplicationPasswordsByUuidRequest: v.GenericSchema<
  unknown,
  T.PostWpV2UsersByUserIdApplicationPasswordsByUuidRequest
> = v.looseObject({
  app_id: v.optional(v.union([v.string(), v.picklist([""])])),
  name: v.optional(v.pipe(v.string(), v.minLength(1), v.regex(/.*\S.*/))),
})

export const PostWpV2UsersMeRequest: v.GenericSchema<unknown, T.PostWpV2UsersMeRequest> = v.looseObject({
  description: v.optional(v.string()),
  email: v.optional(v.string()),
  first_name: v.optional(v.string()),
  last_name: v.optional(v.string()),
  locale: v.optional(v.picklist(["", "en_US"])),
  meta: v.optional(
    v.looseObject({
      persisted_preferences: v.optional(
        v.objectWithRest(
          {
            _modified: v.optional(v.string()),
          },
          v.unknown(),
        ),
      ),
    }),
  ),
  name: v.optional(v.string()),
  nickname: v.optional(v.string()),
  password: v.optional(v.string()),
  roles: v.optional(v.array(v.string())),
  slug: v.optional(v.string()),
  url: v.optional(v.string()),
  username: v.optional(v.string()),
})

export const PostWpV2WidgetTypesByIdEncodeRequest: v.GenericSchema<unknown, T.PostWpV2WidgetTypesByIdEncodeRequest> =
  v.looseObject({
    form_data: v.optional(v.string()),
    instance: v.optional(v.looseObject({})),
  })

export const PostWpV2WidgetTypesByIdRenderRequest: v.GenericSchema<unknown, T.PostWpV2WidgetTypesByIdRenderRequest> =
  v.looseObject({
    instance: v.optional(v.looseObject({})),
  })

export const PostWpV2WidgetsRequest: v.GenericSchema<unknown, T.PostWpV2WidgetsRequest> = v.looseObject({
  form_data: v.optional(v.string()),
  id: v.optional(v.string()),
  id_base: v.optional(v.string()),
  instance: v.optional(
    v.looseObject({
      encoded: v.optional(v.string()),
      hash: v.optional(v.string()),
      raw: v.optional(v.looseObject({})),
    }),
  ),
  sidebar: v.string(),
})

export const PostWpV2WidgetsByIdRequest: v.GenericSchema<unknown, T.PostWpV2WidgetsByIdRequest> = v.looseObject({
  form_data: v.optional(v.string()),
  id_base: v.optional(v.string()),
  instance: v.optional(
    v.looseObject({
      encoded: v.optional(v.string()),
      hash: v.optional(v.string()),
      raw: v.optional(v.looseObject({})),
    }),
  ),
  sidebar: v.optional(v.string()),
})

export const GetWpV2WpPatternCategoryResponse: v.GenericSchema<unknown, T.GetWpV2WpPatternCategoryResponse> = v.array(
  v.lazy(() => WpPatternCategory),
)

export const PostWpV2WpPatternCategoryRequest: v.GenericSchema<unknown, T.PostWpV2WpPatternCategoryRequest> =
  v.looseObject({
    description: v.optional(v.string()),
    meta: v.optional(v.looseObject({})),
    name: v.string(),
    slug: v.optional(v.string()),
  })

export const PostWpV2WpPatternCategoryByIdRequest: v.GenericSchema<unknown, T.PostWpV2WpPatternCategoryByIdRequest> =
  v.looseObject({
    description: v.optional(v.string()),
    meta: v.optional(v.looseObject({})),
    name: v.optional(v.string()),
    slug: v.optional(v.string()),
  })

export const schemas = {
  BlockDirectoryItem,
  BlockPatternCategory,
  BlockPattern,
  BlockType,
  WpBlock,
  WpBlockRevision,
  WpBlockRevision2,
  Category,
  Comment,
  FontCollection,
  WpFontFamily,
  WpFontFace,
  WpGlobalStylesRevision,
  Attachment,
  NavMenuItem,
  NavMenuItemRevision,
  MenuLocation,
  NavMenu,
  WpNavigation,
  WpNavigationRevision,
  WpNavigationRevision2,
  Page,
  PageRevision,
  PageRevision2,
  PatternDirectoryItem,
  Plugin,
  Post,
  PostRevision,
  PostRevision2,
  SearchResult,
  Settings,
  Sidebar,
  Status,
  Tag,
  Taxonomy,
  WpTemplatePart,
  WpTemplate,
  Theme,
  Type,
  User,
  ApplicationPassword,
  WidgetType,
  Widget,
  WpPatternCategory,
  GetWpV2BlockDirectorySearchResponse,
  GetWpV2BlocksResponse,
  PostWpV2BlocksRequest,
  PostWpV2BlocksByIdRequest,
  PostWpV2BlocksByIdAutosavesRequest,
  GetWpV2BlocksByParentRevisionsResponse,
  GetWpV2CategoriesResponse,
  PostWpV2CategoriesRequest,
  PostWpV2CategoriesByIdRequest,
  GetWpV2CommentsResponse,
  PostWpV2CommentsRequest,
  PostWpV2CommentsByIdRequest,
  GetWpV2FontCollectionsResponse,
  GetWpV2FontFamiliesResponse,
  PostWpV2FontFamiliesRequest,
  GetWpV2FontFamiliesByFontFamilyIdFontFacesResponse,
  PostWpV2FontFamiliesByFontFamilyIdFontFacesRequest,
  PostWpV2FontFamiliesByIdRequest,
  GetWpV2GlobalStylesByParentRevisionsResponse,
  GetWpV2MediaResponse,
  PostWpV2MediaRequest,
  PostWpV2MediaByIdRequest,
  PostWpV2MediaByIdEditRequest,
  PostWpV2MediaByIdPostProcessRequest,
  GetWpV2MenuItemsResponse,
  PostWpV2MenuItemsRequest,
  PostWpV2MenuItemsByIdRequest,
  PostWpV2MenuItemsByIdAutosavesRequest,
  GetWpV2MenusResponse,
  PostWpV2MenusRequest,
  PostWpV2MenusByIdRequest,
  GetWpV2NavigationResponse,
  PostWpV2NavigationRequest,
  PostWpV2NavigationByIdRequest,
  PostWpV2NavigationByIdAutosavesRequest,
  GetWpV2NavigationByParentRevisionsResponse,
  GetWpV2PagesResponse,
  PostWpV2PagesRequest,
  PostWpV2PagesByIdRequest,
  PostWpV2PagesByIdAutosavesRequest,
  GetWpV2PagesByParentRevisionsResponse,
  GetWpV2PatternDirectoryPatternsResponse,
  PostWpV2PluginsRequest,
  GetWpV2PostsResponse,
  PostWpV2PostsRequest,
  PostWpV2PostsByIdRequest,
  PostWpV2PostsByIdAutosavesRequest,
  GetWpV2PostsByParentRevisionsResponse,
  GetWpV2SearchResponse,
  PostWpV2SettingsRequest,
  PostWpV2SidebarsByIdRequest,
  GetWpV2TagsResponse,
  PostWpV2TagsRequest,
  PostWpV2TagsByIdRequest,
  PostWpV2TemplatePartsRequest,
  PostWpV2TemplatesRequest,
  GetWpV2UsersResponse,
  PostWpV2UsersRequest,
  PostWpV2UsersByIdRequest,
  PostWpV2UsersByUserIdApplicationPasswordsByUuidRequest,
  PostWpV2UsersMeRequest,
  PostWpV2WidgetTypesByIdEncodeRequest,
  PostWpV2WidgetTypesByIdRenderRequest,
  PostWpV2WidgetsRequest,
  PostWpV2WidgetsByIdRequest,
  GetWpV2WpPatternCategoryResponse,
  PostWpV2WpPatternCategoryRequest,
  PostWpV2WpPatternCategoryByIdRequest,
} as const

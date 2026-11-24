// GENERATED. DO NOT EDIT.
// Source: spec/wordpress/, checked against provenance.json
// Run: pnpm generate

import type { SchemaNode } from "@wirecat/cli-base/codegen/runtime"

export const definitions: Readonly<Record<string, SchemaNode>> = {
  BlockDirectoryItem: {
    type: "object",
    properties: {
      active_installs: {
        description: "The number sites that have activated this block.",
        type: "integer",
      },
      author: {
        description: "The WordPress.org username of the block author.",
        type: "string",
      },
      author_block_count: {
        description: "The number of blocks published by the same author.",
        type: "integer",
      },
      author_block_rating: {
        description: "The average rating of blocks published by the same author.",
        type: "number",
      },
      description: {
        description: "A short description of the block, in human readable format.",
        type: "string",
      },
      humanized_updated: {
        description: "The date when the block was last updated, in human readable format.",
        type: "string",
      },
      icon: {
        description: "The block icon.",
        type: "string",
      },
      id: {
        description: "The block slug.",
        type: "string",
      },
      last_updated: {
        description: "The date when the block was last updated.",
        type: "string",
      },
      name: {
        description: "The block name, in namespace/block-name format.",
        type: "string",
      },
      rating: {
        description: "The star rating of the block.",
        type: "number",
      },
      rating_count: {
        description: "The number of ratings.",
        type: "integer",
      },
      title: {
        description: "The block title, in human readable format.",
        type: "string",
      },
    },
    required: [],
  },
  BlockPatternCategory: {
    type: "object",
    properties: {
      description: {
        description: "The category description, in human readable format.",
        type: "string",
      },
      label: {
        description: "The category label, in human readable format.",
        type: "string",
      },
      name: {
        description: "The category name.",
        type: "string",
      },
    },
    required: [],
  },
  BlockPattern: {
    type: "object",
    properties: {
      block_types: {
        description: "Block types that the pattern is intended to be used with.",
        type: "array",
        items: {
          type: "unknown",
        },
      },
      categories: {
        description: "The pattern category slugs.",
        type: "array",
        items: {
          type: "unknown",
        },
      },
      content: {
        description: "The pattern content.",
        type: "string",
      },
      description: {
        description: "The pattern detailed description.",
        type: "string",
      },
      inserter: {
        description: "Determines whether the pattern is visible in inserter.",
        type: "boolean",
      },
      keywords: {
        description: "The pattern keywords.",
        type: "array",
        items: {
          type: "unknown",
        },
      },
      name: {
        description: "The pattern name.",
        type: "string",
      },
      post_types: {
        description: "An array of post types that the pattern is restricted to be used with.",
        type: "array",
        items: {
          type: "unknown",
        },
      },
      source: {
        description: "Where the pattern comes from e.g. core",
        type: "string",
        enum: [
          "core",
          "plugin",
          "theme",
          "pattern-directory/core",
          "pattern-directory/theme",
          "pattern-directory/featured",
        ],
      },
      template_types: {
        description: "An array of template types where the pattern fits.",
        type: "array",
        items: {
          type: "unknown",
        },
      },
      title: {
        description: "The pattern title, in human readable format.",
        type: "string",
      },
      viewport_width: {
        description: "The pattern viewport width for inserter preview.",
        type: "number",
      },
    },
    required: [],
  },
  BlockType: {
    type: "object",
    properties: {
      allowed_blocks: {
        description: "Allowed child block types.",
        default: null,
        nullable: true,
        type: "array",
        items: {
          type: "string",
          pattern: "^[a-z][a-z0-9-]*/[a-z][a-z0-9-]*$",
        },
      },
      ancestor: {
        description: "Ancestor blocks.",
        default: null,
        nullable: true,
        type: "array",
        items: {
          type: "string",
          pattern: "^[a-z][a-z0-9-]*/[a-z][a-z0-9-]*$",
        },
      },
      api_version: {
        description: "Version of block API.",
        default: 1,
        type: "integer",
      },
      attributes: {
        description: "Block attributes.",
        default: null,
        nullable: true,
        type: "object",
        properties: {},
        required: [],
        additionalProperties: {
          type: "object",
          properties: {},
          required: [],
        },
      },
      block_hooks: {
        description:
          "This block is automatically inserted near any occurrence of the block types used as keys of this map, into a relative position given by the corresponding value.",
        default: [],
        type: "object",
        properties: {},
        required: [],
        additionalProperties: {
          type: "string",
          enum: ["before", "after", "first_child", "last_child"],
        },
      },
      category: {
        description: "Block category.",
        default: null,
        nullable: true,
        type: "string",
      },
      description: {
        description: "Description of block type.",
        default: "",
        type: "string",
      },
      editor_script: {
        description: "Editor script handle. DEPRECATED: Use `editor_script_handles` instead.",
        default: null,
        nullable: true,
        type: "string",
      },
      editor_script_handles: {
        description: "Editor script handles.",
        default: [],
        type: "array",
        items: {
          type: "string",
        },
      },
      editor_style: {
        description: "Editor style handle. DEPRECATED: Use `editor_style_handles` instead.",
        default: null,
        nullable: true,
        type: "string",
      },
      editor_style_handles: {
        description: "Editor style handles.",
        default: [],
        type: "array",
        items: {
          type: "string",
        },
      },
      example: {
        description: "Block example.",
        default: null,
        nullable: true,
        type: "object",
        properties: {
          attributes: {
            description: "The attributes used in the example.",
            type: "object",
            properties: {},
            required: [],
          },
          innerBlocks: {
            description: "The list of inner blocks used in the example.",
            type: "array",
            items: {
              type: "object",
              properties: {
                attributes: {
                  description: "The attributes of the inner block.",
                  type: "object",
                  properties: {},
                  required: [],
                },
                innerBlocks: {
                  description:
                    "A list of the inner block's own inner blocks. This is a recursive definition following the parent innerBlocks schema.",
                  type: "array",
                  items: {
                    type: "unknown",
                  },
                },
                name: {
                  description: "The name of the inner block.",
                  type: "string",
                  pattern: "^[a-z][a-z0-9-]*/[a-z][a-z0-9-]*$",
                },
              },
              required: ["name"],
            },
          },
        },
        required: [],
      },
      icon: {
        description: "Icon of block type.",
        default: null,
        nullable: true,
        type: "string",
      },
      is_dynamic: {
        description: "Is the block dynamically rendered.",
        default: false,
        type: "boolean",
      },
      keywords: {
        description: "Block keywords.",
        default: [],
        type: "array",
        items: {
          type: "string",
        },
      },
      name: {
        description: "Unique name identifying the block type.",
        type: "string",
        pattern: "^[a-z][a-z0-9-]*/[a-z][a-z0-9-]*$",
      },
      parent: {
        description: "Parent blocks.",
        default: null,
        nullable: true,
        type: "array",
        items: {
          type: "string",
          pattern: "^[a-z][a-z0-9-]*/[a-z][a-z0-9-]*$",
        },
      },
      provides_context: {
        description: "Context provided by blocks of this type.",
        default: [],
        type: "object",
        properties: {},
        required: [],
        additionalProperties: {
          type: "string",
        },
      },
      script: {
        description: "Public facing and editor script handle. DEPRECATED: Use `script_handles` instead.",
        default: null,
        nullable: true,
        type: "string",
      },
      script_handles: {
        description: "Public facing and editor script handles.",
        default: [],
        type: "array",
        items: {
          type: "string",
        },
      },
      selectors: {
        description: "Custom CSS selectors.",
        default: [],
        type: "object",
        properties: {},
        required: [],
      },
      style: {
        description: "Public facing and editor style handle. DEPRECATED: Use `style_handles` instead.",
        default: null,
        nullable: true,
        type: "string",
      },
      style_handles: {
        description: "Public facing and editor style handles.",
        default: [],
        type: "array",
        items: {
          type: "string",
        },
      },
      styles: {
        description: "Block style variations.",
        default: [],
        type: "array",
        items: {
          type: "object",
          properties: {
            inline_style: {
              description: "Inline CSS code that registers the CSS class required for the style.",
              type: "string",
            },
            label: {
              description: "The human-readable label for the style.",
              type: "string",
            },
            name: {
              description: "Unique name identifying the style.",
              type: "string",
            },
            style_handle: {
              description: "Contains the handle that defines the block style.",
              type: "string",
            },
          },
          required: ["name"],
        },
      },
      supports: {
        description: "Block supports.",
        default: [],
        type: "object",
        properties: {},
        required: [],
      },
      textdomain: {
        description: "Public text domain.",
        default: null,
        nullable: true,
        type: "string",
      },
      title: {
        description: "Title of block type.",
        default: "",
        type: "string",
      },
      uses_context: {
        description: "Context values inherited by blocks of this type.",
        default: [],
        type: "array",
        items: {
          type: "string",
        },
      },
      variations: {
        description: "Block variations.",
        default: null,
        type: "array",
        items: {
          type: "object",
          properties: {
            attributes: {
              description: "The initial values for attributes.",
              type: "object",
              properties: {},
              required: [],
            },
            category: {
              description: "Block category.",
              default: null,
              nullable: true,
              type: "string",
            },
            description: {
              description: "A detailed variation description.",
              type: "string",
            },
            example: {
              description: "Block example.",
              default: null,
              nullable: true,
              type: "object",
              properties: {
                attributes: {
                  description: "The attributes used in the example.",
                  type: "object",
                  properties: {},
                  required: [],
                },
                innerBlocks: {
                  description: "The list of inner blocks used in the example.",
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      attributes: {
                        description: "The attributes of the inner block.",
                        type: "object",
                        properties: {},
                        required: [],
                      },
                      innerBlocks: {
                        description:
                          "A list of the inner block's own inner blocks. This is a recursive definition following the parent innerBlocks schema.",
                        type: "array",
                        items: {
                          type: "unknown",
                        },
                      },
                      name: {
                        description: "The name of the inner block.",
                        type: "string",
                        pattern: "^[a-z][a-z0-9-]*/[a-z][a-z0-9-]*$",
                      },
                    },
                    required: ["name"],
                  },
                },
              },
              required: [],
            },
            icon: {
              description: "Icon of block type.",
              default: null,
              nullable: true,
              type: "string",
            },
            innerBlocks: {
              description: "The list of inner blocks used in the example.",
              type: "array",
              items: {
                type: "object",
                properties: {
                  attributes: {
                    description: "The attributes of the inner block.",
                    type: "object",
                    properties: {},
                    required: [],
                  },
                  innerBlocks: {
                    description:
                      "A list of the inner block's own inner blocks. This is a recursive definition following the parent innerBlocks schema.",
                    type: "array",
                    items: {
                      type: "unknown",
                    },
                  },
                  name: {
                    description: "The name of the inner block.",
                    type: "string",
                    pattern: "^[a-z][a-z0-9-]*/[a-z][a-z0-9-]*$",
                  },
                },
                required: ["name"],
              },
            },
            isDefault: {
              description: "Indicates whether the current variation is the default one.",
              default: false,
              type: "boolean",
            },
            keywords: {
              description: "Block keywords.",
              default: [],
              type: "array",
              items: {
                type: "string",
              },
            },
            name: {
              description: "The unique and machine-readable name.",
              type: "string",
            },
            scope: {
              description:
                "The list of scopes where the variation is applicable. When not provided, it assumes all available scopes.",
              default: null,
              nullable: true,
              type: "array",
              items: {
                type: "string",
                enum: ["block", "inserter", "transform"],
              },
            },
            title: {
              description: "A human-readable variation title.",
              type: "string",
            },
          },
          required: ["name", "title"],
        },
      },
      view_script: {
        description: "Public facing script handle. DEPRECATED: Use `view_script_handles` instead.",
        default: null,
        nullable: true,
        type: "string",
      },
      view_script_handles: {
        description: "Public facing script handles.",
        default: [],
        type: "array",
        items: {
          type: "string",
        },
      },
      view_script_module_ids: {
        description: "Public facing script module IDs.",
        default: [],
        type: "array",
        items: {
          type: "string",
        },
      },
      view_style_handles: {
        description: "Public facing style handles.",
        default: [],
        type: "array",
        items: {
          type: "string",
        },
      },
    },
    required: ["name"],
  },
  WpBlock: {
    type: "object",
    properties: {
      content: {
        description: "The content for the post.",
        type: "object",
        properties: {
          block_version: {
            description: "Version of the content block format used by the post.",
            type: "integer",
          },
          protected: {
            description: "Whether the content is protected with a password.",
            type: "boolean",
          },
          raw: {
            description: "Content for the post, as it exists in the database.",
            type: "string",
          },
        },
        required: [],
      },
      date: {
        description: "The date the post was published, in the site's timezone.",
        nullable: true,
        type: "string",
      },
      date_gmt: {
        description: "The date the post was published, as GMT.",
        nullable: true,
        type: "string",
      },
      excerpt: {
        description: "The excerpt for the post.",
        type: "object",
        properties: {
          protected: {
            description: "Whether the excerpt is protected with a password.",
            type: "boolean",
          },
          raw: {
            description: "Excerpt for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML excerpt for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      guid: {
        description: "The globally unique identifier for the post.",
        type: "object",
        properties: {
          raw: {
            description: "GUID for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "GUID for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      id: {
        description: "Unique identifier for the post.",
        type: "integer",
      },
      link: {
        description: "URL to the post.",
        type: "string",
      },
      meta: {
        description: "Meta fields.",
        type: "object",
        properties: {
          footnotes: {
            default: "",
            type: "string",
          },
          wp_pattern_sync_status: {
            default: "",
            type: "string",
            enum: ["partial", "unsynced"],
          },
        },
        required: [],
      },
      modified: {
        description: "The date the post was last modified, in the site's timezone.",
        type: "string",
      },
      modified_gmt: {
        description: "The date the post was last modified, as GMT.",
        type: "string",
      },
      password: {
        description: "A password to protect access to the content and excerpt.",
        type: "string",
      },
      slug: {
        description: "An alphanumeric identifier for the post unique to its type.",
        type: "string",
      },
      status: {
        description: "A named status for the post.",
        type: "string",
        enum: ["publish", "future", "draft", "pending", "private"],
      },
      template: {
        description: "The theme file to use to display the post.",
        type: "string",
      },
      title: {
        description: "The title for the post.",
        type: "object",
        properties: {
          raw: {
            description: "Title for the post, as it exists in the database.",
            type: "string",
          },
        },
        required: [],
      },
      type: {
        description: "Type of post.",
        type: "string",
      },
      wp_pattern_category: {
        description: "The terms assigned to the post in the wp_pattern_category taxonomy.",
        type: "array",
        items: {
          type: "integer",
        },
      },
    },
    required: [],
  },
  WpBlockRevision: {
    type: "object",
    properties: {
      author: {
        description: "The ID for the author of the revision.",
        type: "integer",
      },
      content: {
        description: "The content for the post.",
        type: "object",
        properties: {
          block_version: {
            description: "Version of the content block format used by the post.",
            type: "integer",
          },
          protected: {
            description: "Whether the content is protected with a password.",
            type: "boolean",
          },
          raw: {
            description: "Content for the post, as it exists in the database.",
            type: "string",
          },
        },
        required: [],
      },
      date: {
        description: "The date the revision was published, in the site's timezone.",
        type: "string",
      },
      date_gmt: {
        description: "The date the revision was published, as GMT.",
        type: "string",
      },
      excerpt: {
        description: "The excerpt for the post.",
        type: "object",
        properties: {
          protected: {
            description: "Whether the excerpt is protected with a password.",
            type: "boolean",
          },
          raw: {
            description: "Excerpt for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML excerpt for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      guid: {
        description: "The globally unique identifier for the post.",
        type: "object",
        properties: {
          raw: {
            description: "GUID for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "GUID for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      id: {
        description: "Unique identifier for the revision.",
        type: "integer",
      },
      meta: {
        description: "Meta fields.",
        type: "object",
        properties: {
          footnotes: {
            default: "",
            type: "string",
          },
          wp_pattern_sync_status: {
            default: "",
            type: "string",
            enum: ["partial", "unsynced"],
          },
        },
        required: [],
      },
      modified: {
        description: "The date the revision was last modified, in the site's timezone.",
        type: "string",
      },
      modified_gmt: {
        description: "The date the revision was last modified, as GMT.",
        type: "string",
      },
      parent: {
        description: "The ID for the parent of the revision.",
        type: "integer",
      },
      preview_link: {
        description: "Preview link for the post.",
        type: "string",
      },
      slug: {
        description: "An alphanumeric identifier for the revision unique to its type.",
        type: "string",
      },
      title: {
        description: "The title for the post.",
        type: "object",
        properties: {
          raw: {
            description: "Title for the post, as it exists in the database.",
            type: "string",
          },
        },
        required: [],
      },
    },
    required: [],
  },
  WpBlockRevision2: {
    type: "object",
    properties: {
      author: {
        description: "The ID for the author of the revision.",
        type: "integer",
      },
      content: {
        description: "The content for the post.",
        type: "object",
        properties: {
          block_version: {
            description: "Version of the content block format used by the post.",
            type: "integer",
          },
          protected: {
            description: "Whether the content is protected with a password.",
            type: "boolean",
          },
          raw: {
            description: "Content for the post, as it exists in the database.",
            type: "string",
          },
        },
        required: [],
      },
      date: {
        description: "The date the revision was published, in the site's timezone.",
        type: "string",
      },
      date_gmt: {
        description: "The date the revision was published, as GMT.",
        type: "string",
      },
      excerpt: {
        description: "The excerpt for the post.",
        type: "object",
        properties: {
          protected: {
            description: "Whether the excerpt is protected with a password.",
            type: "boolean",
          },
          raw: {
            description: "Excerpt for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML excerpt for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      guid: {
        description: "The globally unique identifier for the post.",
        type: "object",
        properties: {
          raw: {
            description: "GUID for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "GUID for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      id: {
        description: "Unique identifier for the revision.",
        type: "integer",
      },
      meta: {
        description: "Meta fields.",
        type: "object",
        properties: {
          footnotes: {
            default: "",
            type: "string",
          },
          wp_pattern_sync_status: {
            default: "",
            type: "string",
            enum: ["partial", "unsynced"],
          },
        },
        required: [],
      },
      modified: {
        description: "The date the revision was last modified, in the site's timezone.",
        type: "string",
      },
      modified_gmt: {
        description: "The date the revision was last modified, as GMT.",
        type: "string",
      },
      parent: {
        description: "The ID for the parent of the revision.",
        type: "integer",
      },
      slug: {
        description: "An alphanumeric identifier for the revision unique to its type.",
        type: "string",
      },
      title: {
        description: "The title for the post.",
        type: "object",
        properties: {
          raw: {
            description: "Title for the post, as it exists in the database.",
            type: "string",
          },
        },
        required: [],
      },
    },
    required: [],
  },
  Category: {
    type: "object",
    properties: {
      count: {
        description: "Number of published posts for the term.",
        type: "integer",
      },
      description: {
        description: "HTML description of the term.",
        type: "string",
      },
      id: {
        description: "Unique identifier for the term.",
        type: "integer",
      },
      link: {
        description: "URL of the term.",
        type: "string",
      },
      meta: {
        description: "Meta fields.",
        type: "object",
        properties: {},
        required: [],
      },
      name: {
        description: "HTML title for the term.",
        type: "string",
      },
      parent: {
        description: "The parent term ID.",
        type: "integer",
      },
      slug: {
        description: "An alphanumeric identifier for the term unique to its type.",
        type: "string",
      },
      taxonomy: {
        description: "Type attribution for the term.",
        type: "string",
        enum: ["category"],
      },
    },
    required: ["name"],
  },
  Comment: {
    type: "object",
    properties: {
      author: {
        description: "The ID of the user object, if author was a user.",
        type: "integer",
      },
      author_avatar_urls: {
        description: "Avatar URLs for the comment author.",
        type: "object",
        properties: {
          "24": {
            description: "Avatar URL with image size of 24 pixels.",
            type: "string",
          },
          "48": {
            description: "Avatar URL with image size of 48 pixels.",
            type: "string",
          },
          "96": {
            description: "Avatar URL with image size of 96 pixels.",
            type: "string",
          },
        },
        required: [],
      },
      author_email: {
        description: "Email address for the comment author.",
        type: "string",
      },
      author_ip: {
        description: "IP address for the comment author.",
        type: "string",
      },
      author_name: {
        description: "Display name for the comment author.",
        type: "string",
      },
      author_url: {
        description: "URL for the comment author.",
        type: "string",
      },
      author_user_agent: {
        description: "User agent for the comment author.",
        type: "string",
      },
      content: {
        description: "The content for the comment.",
        type: "object",
        properties: {
          raw: {
            description: "Content for the comment, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML content for the comment, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      date: {
        description: "The date the comment was published, in the site's timezone.",
        type: "string",
      },
      date_gmt: {
        description: "The date the comment was published, as GMT.",
        type: "string",
      },
      id: {
        description: "Unique identifier for the comment.",
        type: "integer",
      },
      link: {
        description: "URL to the comment.",
        type: "string",
      },
      meta: {
        description: "Meta fields.",
        type: "object",
        properties: {
          _wp_note_status: {
            description: "Note resolution status",
            default: "",
            type: "string",
            enum: ["resolved", "reopen"],
          },
        },
        required: [],
      },
      parent: {
        description: "The ID for the parent of the comment.",
        default: 0,
        type: "integer",
      },
      post: {
        description: "The ID of the associated post object.",
        default: 0,
        type: "integer",
      },
      status: {
        description: "State of the comment.",
        type: "string",
      },
      type: {
        description: "Type of the comment.",
        default: "comment",
        type: "string",
      },
    },
    required: [],
  },
  FontCollection: {
    type: "object",
    properties: {
      categories: {
        description: "The categories for the font collection.",
        type: "array",
        items: {
          type: "unknown",
        },
      },
      description: {
        description: "The description for the font collection.",
        type: "string",
      },
      font_families: {
        description: "The font families for the font collection.",
        type: "array",
        items: {
          type: "unknown",
        },
      },
      name: {
        description: "The name for the font collection.",
        type: "string",
      },
      slug: {
        description: "Unique identifier for the font collection.",
        type: "string",
      },
    },
    required: [],
  },
  WpFontFamily: {
    type: "object",
    properties: {
      font_faces: {
        description: "The IDs of the child font faces in the font family.",
        type: "array",
        items: {
          type: "integer",
        },
      },
      font_family_settings: {
        description: "font-face definition in theme.json format.",
        type: "object",
        properties: {
          fontFamily: {
            description: "CSS font-family value.",
            type: "string",
          },
          name: {
            description: "Name of the font family preset, translatable.",
            type: "string",
          },
          preview: {
            description: "URL to a preview image of the font family.",
            default: "",
            type: "string",
          },
          slug: {
            description: "Kebab-case unique identifier for the font family preset.",
            type: "string",
          },
        },
        required: ["name", "slug", "fontFamily"],
      },
      id: {
        description: "Unique identifier for the post.",
        type: "integer",
      },
      theme_json_version: {
        description: "Version of the theme.json schema used for the typography settings.",
        default: 3,
        type: "integer",
        minimum: 2,
        maximum: 3,
      },
    },
    required: [],
  },
  WpFontFace: {
    type: "object",
    properties: {
      font_face_settings: {
        description: "font-face declaration in theme.json format.",
        type: "object",
        properties: {
          ascentOverride: {
            description: "CSS ascent-override value.",
            type: "string",
          },
          descentOverride: {
            description: "CSS descent-override value.",
            type: "string",
          },
          fontDisplay: {
            description: "CSS font-display value.",
            default: "fallback",
            type: "string",
            enum: ["auto", "block", "fallback", "swap", "optional"],
          },
          fontFamily: {
            description: "CSS font-family value.",
            default: "",
            type: "string",
          },
          fontFeatureSettings: {
            description: "CSS font-feature-settings value.",
            type: "string",
          },
          fontStretch: {
            description: "CSS font-stretch value.",
            type: "string",
          },
          fontStyle: {
            description: "CSS font-style value.",
            default: "normal",
            type: "string",
          },
          fontVariant: {
            description: "CSS font-variant value.",
            type: "string",
          },
          fontVariationSettings: {
            description: "CSS font-variation-settings value.",
            type: "string",
          },
          fontWeight: {
            description: "List of available font weights, separated by a space.",
            default: "400",
            type: "union",
            of: [
              {
                type: "string",
              },
              {
                type: "integer",
              },
            ],
          },
          lineGapOverride: {
            description: "CSS line-gap-override value.",
            type: "string",
          },
          preview: {
            description: "URL to a preview image of the font face.",
            default: "",
            type: "string",
          },
          sizeAdjust: {
            description: "CSS size-adjust value.",
            type: "string",
          },
          src: {
            description: "Paths or URLs to the font files.",
            default: [],
            type: "union",
            of: [
              {
                type: "string",
              },
              {
                type: "array",
                items: {
                  type: "string",
                },
              },
            ],
          },
          unicodeRange: {
            description: "CSS unicode-range value.",
            type: "string",
          },
        },
        required: ["fontFamily", "src"],
      },
      id: {
        description: "Unique identifier for the post.",
        type: "integer",
      },
      parent: {
        description: "The ID for the parent font family of the font face.",
        type: "integer",
      },
      theme_json_version: {
        description: "Version of the theme.json schema used for the typography settings.",
        default: 3,
        type: "integer",
        minimum: 2,
        maximum: 3,
      },
    },
    required: [],
  },
  WpGlobalStylesRevision: {
    type: "object",
    properties: {
      author: {
        description: "The ID for the author of the revision.",
        type: "integer",
      },
      date: {
        description: "The date the revision was published, in the site's timezone.",
        type: "string",
      },
      date_gmt: {
        description: "The date the revision was published, as GMT.",
        type: "string",
      },
      id: {
        description: "ID of global styles config.",
        type: "integer",
      },
      modified: {
        description: "The date the revision was last modified, in the site's timezone.",
        type: "string",
      },
      modified_gmt: {
        description: "The date the revision was last modified, as GMT.",
        type: "string",
      },
      parent: {
        description: "The ID for the parent of the revision.",
        type: "integer",
      },
      settings: {
        description: "Global settings.",
        type: "object",
        properties: {},
        required: [],
      },
      styles: {
        description: "Global styles.",
        type: "object",
        properties: {},
        required: [],
      },
    },
    required: [],
  },
  Attachment: {
    type: "object",
    properties: {
      alt_text: {
        description: "Alternative text to display when attachment is not displayed.",
        type: "string",
      },
      author: {
        description: "The ID for the author of the post.",
        type: "integer",
      },
      caption: {
        description: "The attachment caption.",
        type: "object",
        properties: {
          raw: {
            description: "Caption for the attachment, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML caption for the attachment, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      class_list: {
        description: "An array of the class names for the post container element.",
        type: "array",
        items: {
          type: "string",
        },
      },
      comment_status: {
        description: "Whether or not comments are open on the post.",
        type: "string",
        enum: ["open", "closed"],
      },
      date: {
        description: "The date the post was published, in the site's timezone.",
        nullable: true,
        type: "string",
      },
      date_gmt: {
        description: "The date the post was published, as GMT.",
        nullable: true,
        type: "string",
      },
      description: {
        description: "The attachment description.",
        type: "object",
        properties: {
          raw: {
            description: "Description for the attachment, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML description for the attachment, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      featured_media: {
        description: "The ID of the featured media for the post.",
        type: "integer",
      },
      generated_slug: {
        description: "Slug automatically generated from the post title.",
        type: "string",
      },
      guid: {
        description: "The globally unique identifier for the post.",
        type: "object",
        properties: {
          raw: {
            description: "GUID for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "GUID for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      id: {
        description: "Unique identifier for the post.",
        type: "integer",
      },
      link: {
        description: "URL to the post.",
        type: "string",
      },
      media_details: {
        description: "Details about the media file, specific to its type.",
        type: "object",
        properties: {},
        required: [],
      },
      media_type: {
        description: "Attachment type.",
        type: "string",
        enum: ["image", "file"],
      },
      meta: {
        description: "Meta fields.",
        type: "object",
        properties: {},
        required: [],
      },
      mime_type: {
        description: "The attachment MIME type.",
        type: "string",
      },
      missing_image_sizes: {
        description: "List of the missing image sizes of the attachment.",
        type: "array",
        items: {
          type: "string",
        },
      },
      modified: {
        description: "The date the post was last modified, in the site's timezone.",
        type: "string",
      },
      modified_gmt: {
        description: "The date the post was last modified, as GMT.",
        type: "string",
      },
      permalink_template: {
        description: "Permalink template for the post.",
        type: "string",
      },
      ping_status: {
        description: "Whether or not the post can be pinged.",
        type: "string",
        enum: ["open", "closed"],
      },
      post: {
        description: "The ID for the associated post of the attachment.",
        type: "integer",
      },
      slug: {
        description: "An alphanumeric identifier for the post unique to its type.",
        type: "string",
      },
      source_url: {
        description: "URL to the original attachment file.",
        type: "string",
      },
      status: {
        description: "A named status for the post.",
        type: "string",
        enum: ["publish", "future", "draft", "pending", "private"],
      },
      template: {
        description: "The theme file to use to display the post.",
        type: "string",
      },
      title: {
        description: "The title for the post.",
        type: "object",
        properties: {
          raw: {
            description: "Title for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML title for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      type: {
        description: "Type of post.",
        type: "string",
      },
    },
    required: [],
  },
  NavMenuItem: {
    type: "object",
    properties: {
      attr_title: {
        description: "Text for the title attribute of the link element for this menu item.",
        type: "string",
      },
      classes: {
        description: "Class names for the link element of this menu item.",
        type: "array",
        items: {
          type: "string",
        },
      },
      description: {
        description: "The description of this menu item.",
        type: "string",
      },
      id: {
        description: "Unique identifier for the object.",
        default: 0,
        type: "integer",
        minimum: 0,
      },
      invalid: {
        description: "Whether the menu item represents an object that no longer exists.",
        type: "boolean",
      },
      menu_order: {
        description: "The DB ID of the nav_menu_item that is this item's menu parent, if any, otherwise 0.",
        default: 1,
        type: "integer",
        minimum: 1,
      },
      menus: {
        description: "The terms assigned to the object in the nav_menu taxonomy.",
        type: "integer",
      },
      meta: {
        description: "Meta fields.",
        type: "object",
        properties: {},
        required: [],
      },
      object: {
        description: 'The type of object originally represented, such as "category", "post", or "attachment".',
        type: "string",
      },
      object_id: {
        description:
          "The database ID of the original object this menu item represents, for example the ID for posts or the term_id for categories.",
        default: 0,
        type: "integer",
        minimum: 0,
      },
      parent: {
        description: "The ID for the parent of the object.",
        default: 0,
        type: "integer",
        minimum: 0,
      },
      status: {
        description: "A named status for the object.",
        default: "publish",
        type: "string",
        enum: ["publish", "future", "draft", "pending", "private"],
      },
      target: {
        description: "The target attribute of the link element for this menu item.",
        type: "string",
        enum: ["_blank", ""],
      },
      title: {
        description: "The title for the object.",
        type: "union",
        of: [
          {
            type: "string",
          },
          {
            type: "object",
            properties: {
              raw: {
                description: "Title for the object, as it exists in the database.",
                type: "string",
              },
              rendered: {
                description: "HTML title for the object, transformed for display.",
                type: "string",
              },
            },
            required: [],
          },
        ],
      },
      type: {
        description: 'The family of objects originally represented, such as "post_type" or "taxonomy".',
        default: "custom",
        type: "string",
        enum: ["taxonomy", "post_type", "post_type_archive", "custom"],
      },
      type_label: {
        description: "The singular label used to describe this type of menu item.",
        type: "string",
      },
      url: {
        description: "The URL to which this menu item points.",
        type: "string",
      },
      xfn: {
        description: "The XFN relationship expressed in the link of this menu item.",
        type: "array",
        items: {
          type: "string",
        },
      },
    },
    required: [],
  },
  NavMenuItemRevision: {
    type: "object",
    properties: {
      author: {
        description: "The ID for the author of the revision.",
        type: "integer",
      },
      date: {
        description: "The date the revision was published, in the site's timezone.",
        type: "string",
      },
      date_gmt: {
        description: "The date the revision was published, as GMT.",
        type: "string",
      },
      guid: {
        description: "GUID for the revision, as it exists in the database.",
        type: "string",
      },
      id: {
        description: "Unique identifier for the revision.",
        type: "integer",
      },
      meta: {
        description: "Meta fields.",
        type: "object",
        properties: {},
        required: [],
      },
      modified: {
        description: "The date the revision was last modified, in the site's timezone.",
        type: "string",
      },
      modified_gmt: {
        description: "The date the revision was last modified, as GMT.",
        type: "string",
      },
      parent: {
        description: "The ID for the parent of the revision.",
        type: "integer",
      },
      preview_link: {
        description: "Preview link for the post.",
        type: "string",
      },
      slug: {
        description: "An alphanumeric identifier for the revision unique to its type.",
        type: "string",
      },
      title: {
        description: "The title for the object.",
        type: "union",
        of: [
          {
            type: "string",
          },
          {
            type: "object",
            properties: {
              raw: {
                description: "Title for the object, as it exists in the database.",
                type: "string",
              },
              rendered: {
                description: "HTML title for the object, transformed for display.",
                type: "string",
              },
            },
            required: [],
          },
        ],
      },
    },
    required: [],
  },
  MenuLocation: {
    type: "object",
    properties: {
      description: {
        description: "The description of the menu location.",
        type: "string",
      },
      menu: {
        description: "The ID of the assigned menu.",
        type: "integer",
      },
      name: {
        description: "The name of the menu location.",
        type: "string",
      },
    },
    required: [],
  },
  NavMenu: {
    type: "object",
    properties: {
      auto_add: {
        description: "Whether to automatically add top level pages to this menu.",
        type: "boolean",
      },
      description: {
        description: "HTML description of the term.",
        type: "string",
      },
      id: {
        description: "Unique identifier for the term.",
        type: "integer",
      },
      locations: {
        description: "The locations assigned to the menu.",
        type: "array",
        items: {
          type: "string",
        },
      },
      meta: {
        description: "Meta fields.",
        type: "object",
        properties: {},
        required: [],
      },
      name: {
        description: "HTML title for the term.",
        type: "string",
      },
      slug: {
        description: "An alphanumeric identifier for the term unique to its type.",
        type: "string",
      },
    },
    required: ["name"],
  },
  WpNavigation: {
    type: "object",
    properties: {
      content: {
        description: "The content for the post.",
        type: "object",
        properties: {
          block_version: {
            description: "Version of the content block format used by the post.",
            type: "integer",
          },
          protected: {
            description: "Whether the content is protected with a password.",
            type: "boolean",
          },
          raw: {
            description: "Content for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML content for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      date: {
        description: "The date the post was published, in the site's timezone.",
        nullable: true,
        type: "string",
      },
      date_gmt: {
        description: "The date the post was published, as GMT.",
        nullable: true,
        type: "string",
      },
      guid: {
        description: "The globally unique identifier for the post.",
        type: "object",
        properties: {
          raw: {
            description: "GUID for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "GUID for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      id: {
        description: "Unique identifier for the post.",
        type: "integer",
      },
      link: {
        description: "URL to the post.",
        type: "string",
      },
      modified: {
        description: "The date the post was last modified, in the site's timezone.",
        type: "string",
      },
      modified_gmt: {
        description: "The date the post was last modified, as GMT.",
        type: "string",
      },
      password: {
        description: "A password to protect access to the content and excerpt.",
        type: "string",
      },
      slug: {
        description: "An alphanumeric identifier for the post unique to its type.",
        type: "string",
      },
      status: {
        description: "A named status for the post.",
        type: "string",
        enum: ["publish", "future", "draft", "pending", "private"],
      },
      template: {
        description: "The theme file to use to display the post.",
        type: "string",
      },
      title: {
        description: "The title for the post.",
        type: "object",
        properties: {
          raw: {
            description: "Title for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML title for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      type: {
        description: "Type of post.",
        type: "string",
      },
    },
    required: [],
  },
  WpNavigationRevision: {
    type: "object",
    properties: {
      author: {
        description: "The ID for the author of the revision.",
        type: "integer",
      },
      content: {
        description: "The content for the post.",
        type: "object",
        properties: {
          block_version: {
            description: "Version of the content block format used by the post.",
            type: "integer",
          },
          protected: {
            description: "Whether the content is protected with a password.",
            type: "boolean",
          },
          raw: {
            description: "Content for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML content for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      date: {
        description: "The date the revision was published, in the site's timezone.",
        type: "string",
      },
      date_gmt: {
        description: "The date the revision was published, as GMT.",
        type: "string",
      },
      guid: {
        description: "The globally unique identifier for the post.",
        type: "object",
        properties: {
          raw: {
            description: "GUID for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "GUID for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      id: {
        description: "Unique identifier for the revision.",
        type: "integer",
      },
      meta: {
        description: "Meta fields.",
        type: "object",
        properties: {},
        required: [],
      },
      modified: {
        description: "The date the revision was last modified, in the site's timezone.",
        type: "string",
      },
      modified_gmt: {
        description: "The date the revision was last modified, as GMT.",
        type: "string",
      },
      parent: {
        description: "The ID for the parent of the revision.",
        type: "integer",
      },
      preview_link: {
        description: "Preview link for the post.",
        type: "string",
      },
      slug: {
        description: "An alphanumeric identifier for the revision unique to its type.",
        type: "string",
      },
      title: {
        description: "The title for the post.",
        type: "object",
        properties: {
          raw: {
            description: "Title for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML title for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
    },
    required: [],
  },
  WpNavigationRevision2: {
    type: "object",
    properties: {
      author: {
        description: "The ID for the author of the revision.",
        type: "integer",
      },
      content: {
        description: "The content for the post.",
        type: "object",
        properties: {
          block_version: {
            description: "Version of the content block format used by the post.",
            type: "integer",
          },
          protected: {
            description: "Whether the content is protected with a password.",
            type: "boolean",
          },
          raw: {
            description: "Content for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML content for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      date: {
        description: "The date the revision was published, in the site's timezone.",
        type: "string",
      },
      date_gmt: {
        description: "The date the revision was published, as GMT.",
        type: "string",
      },
      guid: {
        description: "The globally unique identifier for the post.",
        type: "object",
        properties: {
          raw: {
            description: "GUID for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "GUID for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      id: {
        description: "Unique identifier for the revision.",
        type: "integer",
      },
      meta: {
        description: "Meta fields.",
        type: "object",
        properties: {},
        required: [],
      },
      modified: {
        description: "The date the revision was last modified, in the site's timezone.",
        type: "string",
      },
      modified_gmt: {
        description: "The date the revision was last modified, as GMT.",
        type: "string",
      },
      parent: {
        description: "The ID for the parent of the revision.",
        type: "integer",
      },
      slug: {
        description: "An alphanumeric identifier for the revision unique to its type.",
        type: "string",
      },
      title: {
        description: "The title for the post.",
        type: "object",
        properties: {
          raw: {
            description: "Title for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML title for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
    },
    required: [],
  },
  Page: {
    type: "object",
    properties: {
      author: {
        description: "The ID for the author of the post.",
        type: "integer",
      },
      class_list: {
        description: "An array of the class names for the post container element.",
        type: "array",
        items: {
          type: "string",
        },
      },
      comment_status: {
        description: "Whether or not comments are open on the post.",
        type: "string",
        enum: ["open", "closed"],
      },
      content: {
        description: "The content for the post.",
        type: "object",
        properties: {
          block_version: {
            description: "Version of the content block format used by the post.",
            type: "integer",
          },
          protected: {
            description: "Whether the content is protected with a password.",
            type: "boolean",
          },
          raw: {
            description: "Content for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML content for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      date: {
        description: "The date the post was published, in the site's timezone.",
        nullable: true,
        type: "string",
      },
      date_gmt: {
        description: "The date the post was published, as GMT.",
        nullable: true,
        type: "string",
      },
      excerpt: {
        description: "The excerpt for the post.",
        type: "object",
        properties: {
          protected: {
            description: "Whether the excerpt is protected with a password.",
            type: "boolean",
          },
          raw: {
            description: "Excerpt for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML excerpt for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      featured_media: {
        description: "The ID of the featured media for the post.",
        type: "integer",
      },
      generated_slug: {
        description: "Slug automatically generated from the post title.",
        type: "string",
      },
      guid: {
        description: "The globally unique identifier for the post.",
        type: "object",
        properties: {
          raw: {
            description: "GUID for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "GUID for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      id: {
        description: "Unique identifier for the post.",
        type: "integer",
      },
      link: {
        description: "URL to the post.",
        type: "string",
      },
      menu_order: {
        description: "The order of the post in relation to other posts.",
        type: "integer",
      },
      meta: {
        description: "Meta fields.",
        type: "object",
        properties: {
          footnotes: {
            default: "",
            type: "string",
          },
        },
        required: [],
      },
      modified: {
        description: "The date the post was last modified, in the site's timezone.",
        type: "string",
      },
      modified_gmt: {
        description: "The date the post was last modified, as GMT.",
        type: "string",
      },
      parent: {
        description: "The ID for the parent of the post.",
        type: "integer",
      },
      password: {
        description: "A password to protect access to the content and excerpt.",
        type: "string",
      },
      permalink_template: {
        description: "Permalink template for the post.",
        type: "string",
      },
      ping_status: {
        description: "Whether or not the post can be pinged.",
        type: "string",
        enum: ["open", "closed"],
      },
      slug: {
        description: "An alphanumeric identifier for the post unique to its type.",
        type: "string",
      },
      status: {
        description: "A named status for the post.",
        type: "string",
        enum: ["publish", "future", "draft", "pending", "private"],
      },
      template: {
        description: "The theme file to use to display the post.",
        type: "string",
      },
      title: {
        description: "The title for the post.",
        type: "object",
        properties: {
          raw: {
            description: "Title for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML title for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      type: {
        description: "Type of post.",
        type: "string",
      },
    },
    required: [],
  },
  PageRevision: {
    type: "object",
    properties: {
      author: {
        description: "The ID for the author of the revision.",
        type: "integer",
      },
      content: {
        description: "The content for the post.",
        type: "object",
        properties: {
          block_version: {
            description: "Version of the content block format used by the post.",
            type: "integer",
          },
          protected: {
            description: "Whether the content is protected with a password.",
            type: "boolean",
          },
          raw: {
            description: "Content for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML content for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      date: {
        description: "The date the revision was published, in the site's timezone.",
        type: "string",
      },
      date_gmt: {
        description: "The date the revision was published, as GMT.",
        type: "string",
      },
      excerpt: {
        description: "The excerpt for the post.",
        type: "object",
        properties: {
          protected: {
            description: "Whether the excerpt is protected with a password.",
            type: "boolean",
          },
          raw: {
            description: "Excerpt for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML excerpt for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      guid: {
        description: "The globally unique identifier for the post.",
        type: "object",
        properties: {
          raw: {
            description: "GUID for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "GUID for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      id: {
        description: "Unique identifier for the revision.",
        type: "integer",
      },
      meta: {
        description: "Meta fields.",
        type: "object",
        properties: {
          footnotes: {
            default: "",
            type: "string",
          },
        },
        required: [],
      },
      modified: {
        description: "The date the revision was last modified, in the site's timezone.",
        type: "string",
      },
      modified_gmt: {
        description: "The date the revision was last modified, as GMT.",
        type: "string",
      },
      parent: {
        description: "The ID for the parent of the revision.",
        type: "integer",
      },
      preview_link: {
        description: "Preview link for the post.",
        type: "string",
      },
      slug: {
        description: "An alphanumeric identifier for the revision unique to its type.",
        type: "string",
      },
      title: {
        description: "The title for the post.",
        type: "object",
        properties: {
          raw: {
            description: "Title for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML title for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
    },
    required: [],
  },
  PageRevision2: {
    type: "object",
    properties: {
      author: {
        description: "The ID for the author of the revision.",
        type: "integer",
      },
      content: {
        description: "The content for the post.",
        type: "object",
        properties: {
          block_version: {
            description: "Version of the content block format used by the post.",
            type: "integer",
          },
          protected: {
            description: "Whether the content is protected with a password.",
            type: "boolean",
          },
          raw: {
            description: "Content for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML content for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      date: {
        description: "The date the revision was published, in the site's timezone.",
        type: "string",
      },
      date_gmt: {
        description: "The date the revision was published, as GMT.",
        type: "string",
      },
      excerpt: {
        description: "The excerpt for the post.",
        type: "object",
        properties: {
          protected: {
            description: "Whether the excerpt is protected with a password.",
            type: "boolean",
          },
          raw: {
            description: "Excerpt for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML excerpt for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      guid: {
        description: "The globally unique identifier for the post.",
        type: "object",
        properties: {
          raw: {
            description: "GUID for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "GUID for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      id: {
        description: "Unique identifier for the revision.",
        type: "integer",
      },
      meta: {
        description: "Meta fields.",
        type: "object",
        properties: {
          footnotes: {
            default: "",
            type: "string",
          },
        },
        required: [],
      },
      modified: {
        description: "The date the revision was last modified, in the site's timezone.",
        type: "string",
      },
      modified_gmt: {
        description: "The date the revision was last modified, as GMT.",
        type: "string",
      },
      parent: {
        description: "The ID for the parent of the revision.",
        type: "integer",
      },
      slug: {
        description: "An alphanumeric identifier for the revision unique to its type.",
        type: "string",
      },
      title: {
        description: "The title for the post.",
        type: "object",
        properties: {
          raw: {
            description: "Title for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML title for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
    },
    required: [],
  },
  PatternDirectoryItem: {
    type: "object",
    properties: {
      block_types: {
        description: "The block types which can use this pattern.",
        type: "array",
        items: {
          type: "string",
        },
        uniqueItems: true,
      },
      categories: {
        description: "The pattern's category slugs.",
        type: "array",
        items: {
          type: "string",
        },
        uniqueItems: true,
      },
      content: {
        description: "The pattern content.",
        type: "string",
        minLength: 1,
      },
      description: {
        description: "A description of the pattern.",
        type: "string",
        minLength: 1,
      },
      id: {
        description: "The pattern ID.",
        type: "integer",
        minimum: 1,
      },
      keywords: {
        description: "The pattern's keywords.",
        type: "array",
        items: {
          type: "string",
        },
        uniqueItems: true,
      },
      title: {
        description: "The pattern title, in human readable format.",
        type: "string",
        minLength: 1,
      },
      viewport_width: {
        description: "The preferred width of the viewport when previewing a pattern, in pixels.",
        type: "integer",
      },
    },
    required: [],
  },
  Plugin: {
    type: "object",
    properties: {
      author: {
        description: "The plugin author.",
        type: "string",
      },
      author_uri: {
        description: "Plugin author's website address.",
        type: "string",
      },
      description: {
        description: "The plugin description.",
        type: "object",
        properties: {
          raw: {
            description: "The raw plugin description.",
            type: "string",
          },
          rendered: {
            description: "The plugin description formatted for display.",
            type: "string",
          },
        },
        required: [],
      },
      name: {
        description: "The plugin name.",
        type: "string",
      },
      network_only: {
        description: "Whether the plugin can only be activated network-wide.",
        type: "boolean",
      },
      plugin: {
        description: "The plugin file.",
        type: "string",
        pattern: "[^.\\/]+(?:\\/[^.\\/]+)?",
      },
      plugin_uri: {
        description: "The plugin's website address.",
        type: "string",
      },
      requires_php: {
        description: "Minimum required version of PHP.",
        type: "string",
      },
      requires_wp: {
        description: "Minimum required version of WordPress.",
        type: "string",
      },
      status: {
        description: "The plugin activation status.",
        type: "string",
        enum: ["inactive", "active"],
      },
      textdomain: {
        description: "The plugin's text domain.",
        type: "string",
      },
      version: {
        description: "The plugin version number.",
        type: "string",
      },
    },
    required: [],
  },
  Post: {
    type: "object",
    properties: {
      author: {
        description: "The ID for the author of the post.",
        type: "integer",
      },
      categories: {
        description: "The terms assigned to the post in the category taxonomy.",
        type: "array",
        items: {
          type: "integer",
        },
      },
      class_list: {
        description: "An array of the class names for the post container element.",
        type: "array",
        items: {
          type: "string",
        },
      },
      comment_status: {
        description: "Whether or not comments are open on the post.",
        type: "string",
        enum: ["open", "closed"],
      },
      content: {
        description: "The content for the post.",
        type: "object",
        properties: {
          block_version: {
            description: "Version of the content block format used by the post.",
            type: "integer",
          },
          protected: {
            description: "Whether the content is protected with a password.",
            type: "boolean",
          },
          raw: {
            description: "Content for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML content for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      date: {
        description: "The date the post was published, in the site's timezone.",
        nullable: true,
        type: "string",
      },
      date_gmt: {
        description: "The date the post was published, as GMT.",
        nullable: true,
        type: "string",
      },
      excerpt: {
        description: "The excerpt for the post.",
        type: "object",
        properties: {
          protected: {
            description: "Whether the excerpt is protected with a password.",
            type: "boolean",
          },
          raw: {
            description: "Excerpt for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML excerpt for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      featured_media: {
        description: "The ID of the featured media for the post.",
        type: "integer",
      },
      format: {
        description: "The format for the post.",
        type: "string",
        enum: ["standard", "aside", "chat", "gallery", "link", "image", "quote", "status", "video", "audio"],
      },
      generated_slug: {
        description: "Slug automatically generated from the post title.",
        type: "string",
      },
      guid: {
        description: "The globally unique identifier for the post.",
        type: "object",
        properties: {
          raw: {
            description: "GUID for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "GUID for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      id: {
        description: "Unique identifier for the post.",
        type: "integer",
      },
      link: {
        description: "URL to the post.",
        type: "string",
      },
      meta: {
        description: "Meta fields.",
        type: "object",
        properties: {
          footnotes: {
            default: "",
            type: "string",
          },
        },
        required: [],
      },
      modified: {
        description: "The date the post was last modified, in the site's timezone.",
        type: "string",
      },
      modified_gmt: {
        description: "The date the post was last modified, as GMT.",
        type: "string",
      },
      password: {
        description: "A password to protect access to the content and excerpt.",
        type: "string",
      },
      permalink_template: {
        description: "Permalink template for the post.",
        type: "string",
      },
      ping_status: {
        description: "Whether or not the post can be pinged.",
        type: "string",
        enum: ["open", "closed"],
      },
      slug: {
        description: "An alphanumeric identifier for the post unique to its type.",
        type: "string",
      },
      status: {
        description: "A named status for the post.",
        type: "string",
        enum: ["publish", "future", "draft", "pending", "private"],
      },
      sticky: {
        description: "Whether or not the post should be treated as sticky.",
        type: "boolean",
      },
      tags: {
        description: "The terms assigned to the post in the post_tag taxonomy.",
        type: "array",
        items: {
          type: "integer",
        },
      },
      template: {
        description: "The theme file to use to display the post.",
        type: "string",
      },
      title: {
        description: "The title for the post.",
        type: "object",
        properties: {
          raw: {
            description: "Title for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML title for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      type: {
        description: "Type of post.",
        type: "string",
      },
    },
    required: [],
  },
  PostRevision: {
    type: "object",
    properties: {
      author: {
        description: "The ID for the author of the revision.",
        type: "integer",
      },
      content: {
        description: "The content for the post.",
        type: "object",
        properties: {
          block_version: {
            description: "Version of the content block format used by the post.",
            type: "integer",
          },
          protected: {
            description: "Whether the content is protected with a password.",
            type: "boolean",
          },
          raw: {
            description: "Content for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML content for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      date: {
        description: "The date the revision was published, in the site's timezone.",
        type: "string",
      },
      date_gmt: {
        description: "The date the revision was published, as GMT.",
        type: "string",
      },
      excerpt: {
        description: "The excerpt for the post.",
        type: "object",
        properties: {
          protected: {
            description: "Whether the excerpt is protected with a password.",
            type: "boolean",
          },
          raw: {
            description: "Excerpt for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML excerpt for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      guid: {
        description: "The globally unique identifier for the post.",
        type: "object",
        properties: {
          raw: {
            description: "GUID for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "GUID for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      id: {
        description: "Unique identifier for the revision.",
        type: "integer",
      },
      meta: {
        description: "Meta fields.",
        type: "object",
        properties: {
          footnotes: {
            default: "",
            type: "string",
          },
        },
        required: [],
      },
      modified: {
        description: "The date the revision was last modified, in the site's timezone.",
        type: "string",
      },
      modified_gmt: {
        description: "The date the revision was last modified, as GMT.",
        type: "string",
      },
      parent: {
        description: "The ID for the parent of the revision.",
        type: "integer",
      },
      preview_link: {
        description: "Preview link for the post.",
        type: "string",
      },
      slug: {
        description: "An alphanumeric identifier for the revision unique to its type.",
        type: "string",
      },
      title: {
        description: "The title for the post.",
        type: "object",
        properties: {
          raw: {
            description: "Title for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML title for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
    },
    required: [],
  },
  PostRevision2: {
    type: "object",
    properties: {
      author: {
        description: "The ID for the author of the revision.",
        type: "integer",
      },
      content: {
        description: "The content for the post.",
        type: "object",
        properties: {
          block_version: {
            description: "Version of the content block format used by the post.",
            type: "integer",
          },
          protected: {
            description: "Whether the content is protected with a password.",
            type: "boolean",
          },
          raw: {
            description: "Content for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML content for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      date: {
        description: "The date the revision was published, in the site's timezone.",
        type: "string",
      },
      date_gmt: {
        description: "The date the revision was published, as GMT.",
        type: "string",
      },
      excerpt: {
        description: "The excerpt for the post.",
        type: "object",
        properties: {
          protected: {
            description: "Whether the excerpt is protected with a password.",
            type: "boolean",
          },
          raw: {
            description: "Excerpt for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML excerpt for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      guid: {
        description: "The globally unique identifier for the post.",
        type: "object",
        properties: {
          raw: {
            description: "GUID for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "GUID for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      id: {
        description: "Unique identifier for the revision.",
        type: "integer",
      },
      meta: {
        description: "Meta fields.",
        type: "object",
        properties: {
          footnotes: {
            default: "",
            type: "string",
          },
        },
        required: [],
      },
      modified: {
        description: "The date the revision was last modified, in the site's timezone.",
        type: "string",
      },
      modified_gmt: {
        description: "The date the revision was last modified, as GMT.",
        type: "string",
      },
      parent: {
        description: "The ID for the parent of the revision.",
        type: "integer",
      },
      slug: {
        description: "An alphanumeric identifier for the revision unique to its type.",
        type: "string",
      },
      title: {
        description: "The title for the post.",
        type: "object",
        properties: {
          raw: {
            description: "Title for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML title for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
    },
    required: [],
  },
  SearchResult: {
    type: "object",
    properties: {
      id: {
        description: "Unique identifier for the object.",
        type: "union",
        of: [
          {
            type: "integer",
          },
          {
            type: "string",
          },
        ],
      },
      subtype: {
        description: "Object subtype.",
        type: "string",
        enum: ["post", "page", "category", "post_tag"],
      },
      title: {
        description: "The title for the object.",
        type: "string",
      },
      type: {
        description: "Object type.",
        type: "string",
        enum: ["post", "term", "post-format"],
      },
      url: {
        description: "URL to the object.",
        type: "string",
      },
    },
    required: [],
  },
  Settings: {
    type: "object",
    properties: {
      date_format: {
        description: "A date format for all date strings.",
        default: null,
        type: "string",
      },
      default_category: {
        description: "Default post category.",
        default: null,
        type: "integer",
      },
      default_comment_status: {
        description: "Allow people to submit comments on new posts.",
        default: null,
        type: "string",
        enum: ["open", "closed"],
      },
      default_ping_status: {
        description: "Allow link notifications from other blogs (pingbacks and trackbacks) on new articles.",
        default: null,
        type: "string",
        enum: ["open", "closed"],
      },
      default_post_format: {
        description: "Default post format.",
        default: null,
        type: "string",
      },
      description: {
        description: "Site tagline.",
        default: null,
        type: "string",
      },
      email: {
        description: "This address is used for admin purposes, like new user notification.",
        default: null,
        type: "string",
      },
      language: {
        description: "WordPress locale code.",
        default: "en_US",
        type: "string",
      },
      page_for_posts: {
        description: "The ID of the page that should display the latest posts",
        default: null,
        type: "integer",
      },
      page_on_front: {
        description: "The ID of the page that should be displayed on the front page",
        default: null,
        type: "integer",
      },
      posts_per_page: {
        description: "Blog pages show at most.",
        default: 10,
        type: "integer",
      },
      show_on_front: {
        description: "What to show on the front page",
        default: null,
        type: "string",
      },
      site_icon: {
        description: "Site icon.",
        default: null,
        type: "integer",
      },
      site_logo: {
        description: "Site logo.",
        default: null,
        type: "integer",
      },
      start_of_week: {
        description: "A day number of the week that the week should start on.",
        default: null,
        type: "integer",
      },
      time_format: {
        description: "A time format for all time strings.",
        default: null,
        type: "string",
      },
      timezone: {
        description: "A city in the same timezone as you.",
        default: null,
        type: "string",
      },
      title: {
        description: "Site title.",
        default: null,
        type: "string",
      },
      url: {
        description: "Site URL.",
        default: null,
        type: "string",
      },
      use_smilies: {
        description: "Convert emoticons like :-) and :-P to graphics on display.",
        default: true,
        type: "boolean",
      },
    },
    required: [],
  },
  Sidebar: {
    type: "object",
    properties: {
      after_title: {
        description: "HTML content to append to the sidebar title when displayed. Default is a closing h2 element.",
        default: "",
        type: "string",
      },
      after_widget: {
        description:
          "HTML content to append to each widget's HTML output when assigned to this sidebar. Default is a closing list item element.",
        default: "",
        type: "string",
      },
      before_title: {
        description: "HTML content to prepend to the sidebar title when displayed. Default is an opening h2 element.",
        default: "",
        type: "string",
      },
      before_widget: {
        description:
          "HTML content to prepend to each widget's HTML output when assigned to this sidebar. Default is an opening list item element.",
        default: "",
        type: "string",
      },
      class: {
        description: "Extra CSS class to assign to the sidebar in the Widgets interface.",
        type: "string",
      },
      description: {
        description: "Description of sidebar.",
        type: "string",
      },
      id: {
        description: "ID of sidebar.",
        type: "string",
      },
      name: {
        description: "Unique name identifying the sidebar.",
        type: "string",
      },
      status: {
        description: "Status of sidebar.",
        type: "string",
        enum: ["active", "inactive"],
      },
      widgets: {
        description: "Nested widgets.",
        default: [],
        type: "array",
        items: {
          type: "union",
          of: [
            {
              type: "object",
              properties: {},
              required: [],
            },
            {
              type: "string",
            },
          ],
        },
      },
    },
    required: [],
  },
  Status: {
    type: "object",
    properties: {
      date_floating: {
        description: "Whether posts of this status may have floating published dates.",
        type: "boolean",
      },
      name: {
        description: "The title for the status.",
        type: "string",
      },
      private: {
        description: "Whether posts with this status should be private.",
        type: "boolean",
      },
      protected: {
        description: "Whether posts with this status should be protected.",
        type: "boolean",
      },
      public: {
        description: "Whether posts of this status should be shown in the front end of the site.",
        type: "boolean",
      },
      queryable: {
        description: "Whether posts with this status should be publicly-queryable.",
        type: "boolean",
      },
      show_in_list: {
        description: "Whether to include posts in the edit listing for their post type.",
        type: "boolean",
      },
      slug: {
        description: "An alphanumeric identifier for the status.",
        type: "string",
      },
    },
    required: [],
  },
  Tag: {
    type: "object",
    properties: {
      count: {
        description: "Number of published posts for the term.",
        type: "integer",
      },
      description: {
        description: "HTML description of the term.",
        type: "string",
      },
      id: {
        description: "Unique identifier for the term.",
        type: "integer",
      },
      link: {
        description: "URL of the term.",
        type: "string",
      },
      meta: {
        description: "Meta fields.",
        type: "object",
        properties: {},
        required: [],
      },
      name: {
        description: "HTML title for the term.",
        type: "string",
      },
      slug: {
        description: "An alphanumeric identifier for the term unique to its type.",
        type: "string",
      },
      taxonomy: {
        description: "Type attribution for the term.",
        type: "string",
        enum: ["post_tag"],
      },
    },
    required: ["name"],
  },
  Taxonomy: {
    type: "object",
    properties: {
      capabilities: {
        description: "All capabilities used by the taxonomy.",
        type: "object",
        properties: {},
        required: [],
      },
      description: {
        description: "A human-readable description of the taxonomy.",
        type: "string",
      },
      hierarchical: {
        description: "Whether or not the taxonomy should have children.",
        type: "boolean",
      },
      labels: {
        description: "Human-readable labels for the taxonomy for various contexts.",
        type: "object",
        properties: {},
        required: [],
      },
      name: {
        description: "The title for the taxonomy.",
        type: "string",
      },
      rest_base: {
        description: "REST base route for the taxonomy.",
        type: "string",
      },
      rest_namespace: {
        description: "REST namespace route for the taxonomy.",
        type: "string",
      },
      show_cloud: {
        description: "Whether or not the term cloud should be displayed.",
        type: "boolean",
      },
      slug: {
        description: "An alphanumeric identifier for the taxonomy.",
        type: "string",
      },
      types: {
        description: "Types associated with the taxonomy.",
        type: "array",
        items: {
          type: "string",
        },
      },
      visibility: {
        description: "The visibility settings for the taxonomy.",
        type: "object",
        properties: {
          public: {
            description:
              "Whether a taxonomy is intended for use publicly either via the admin interface or by front-end users.",
            type: "boolean",
          },
          publicly_queryable: {
            description: "Whether the taxonomy is publicly queryable.",
            type: "boolean",
          },
          show_admin_column: {
            description: "Whether to allow automatic creation of taxonomy columns on associated post-types table.",
            type: "boolean",
          },
          show_in_nav_menus: {
            description: "Whether to make the taxonomy available for selection in navigation menus.",
            type: "boolean",
          },
          show_in_quick_edit: {
            description: "Whether to show the taxonomy in the quick/bulk edit panel.",
            type: "boolean",
          },
          show_ui: {
            description: "Whether to generate a default UI for managing this taxonomy.",
            type: "boolean",
          },
        },
        required: [],
      },
    },
    required: [],
  },
  WpTemplatePart: {
    type: "object",
    properties: {
      area: {
        description: "Where the template part is intended for use (header, footer, etc.)",
        type: "string",
      },
      author: {
        description: "The ID for the author of the template.",
        type: "integer",
      },
      author_text: {
        description: "Human readable text for the author.",
        type: "string",
      },
      content: {
        description: "Content of template.",
        default: "",
        type: "union",
        of: [
          {
            type: "object",
            properties: {
              block_version: {
                description: "Version of the content block format used by the template.",
                type: "integer",
              },
              raw: {
                description: "Content for the template, as it exists in the database.",
                type: "string",
              },
            },
            required: [],
          },
          {
            type: "string",
          },
        ],
      },
      description: {
        description: "Description of template.",
        default: "",
        type: "string",
      },
      has_theme_file: {
        description: "Theme file exists.",
        type: "boolean",
      },
      id: {
        description: "ID of template.",
        type: "string",
      },
      modified: {
        description: "The date the template was last modified, in the site's timezone.",
        type: "string",
      },
      origin: {
        description: "Source of a customized template",
        type: "string",
      },
      original_source: {
        description: "Where the template originally comes from e.g. 'theme'",
        type: "string",
        enum: ["theme", "plugin", "site", "user"],
      },
      slug: {
        description: "Unique slug identifying the template.",
        type: "string",
        minLength: 1,
        pattern: "[a-zA-Z0-9_\\%-]+",
      },
      source: {
        description: "Source of template",
        type: "string",
      },
      status: {
        description: "Status of template.",
        default: "publish",
        type: "string",
        enum: ["publish", "future", "draft", "pending", "private"],
      },
      theme: {
        description: "Theme identifier for the template.",
        type: "string",
      },
      title: {
        description: "Title of template.",
        default: "",
        type: "union",
        of: [
          {
            type: "object",
            properties: {
              raw: {
                description: "Title for the template, as it exists in the database.",
                type: "string",
              },
              rendered: {
                description: "HTML title for the template, transformed for display.",
                type: "string",
              },
            },
            required: [],
          },
          {
            type: "string",
          },
        ],
      },
      type: {
        description: "Type of template.",
        type: "string",
      },
      wp_id: {
        description: "Post ID.",
        type: "integer",
      },
    },
    required: ["slug"],
  },
  WpTemplate: {
    type: "object",
    properties: {
      author: {
        description: "The ID for the author of the template.",
        type: "integer",
      },
      author_text: {
        description: "Human readable text for the author.",
        type: "string",
      },
      content: {
        description: "Content of template.",
        default: "",
        type: "union",
        of: [
          {
            type: "object",
            properties: {
              block_version: {
                description: "Version of the content block format used by the template.",
                type: "integer",
              },
              raw: {
                description: "Content for the template, as it exists in the database.",
                type: "string",
              },
            },
            required: [],
          },
          {
            type: "string",
          },
        ],
      },
      description: {
        description: "Description of template.",
        default: "",
        type: "string",
      },
      has_theme_file: {
        description: "Theme file exists.",
        type: "boolean",
      },
      id: {
        description: "ID of template.",
        type: "string",
      },
      is_custom: {
        description: "Whether a template is a custom template.",
        type: "boolean",
      },
      modified: {
        description: "The date the template was last modified, in the site's timezone.",
        type: "string",
      },
      origin: {
        description: "Source of a customized template",
        type: "string",
      },
      original_source: {
        description: "Where the template originally comes from e.g. 'theme'",
        type: "string",
        enum: ["theme", "plugin", "site", "user"],
      },
      plugin: {
        description: "Plugin that registered the template.",
        type: "string",
      },
      slug: {
        description: "Unique slug identifying the template.",
        type: "string",
        minLength: 1,
        pattern: "[a-zA-Z0-9_\\%-]+",
      },
      source: {
        description: "Source of template",
        type: "string",
      },
      status: {
        description: "Status of template.",
        default: "publish",
        type: "string",
        enum: ["publish", "future", "draft", "pending", "private"],
      },
      theme: {
        description: "Theme identifier for the template.",
        type: "string",
      },
      title: {
        description: "Title of template.",
        default: "",
        type: "union",
        of: [
          {
            type: "object",
            properties: {
              raw: {
                description: "Title for the template, as it exists in the database.",
                type: "string",
              },
              rendered: {
                description: "HTML title for the template, transformed for display.",
                type: "string",
              },
            },
            required: [],
          },
          {
            type: "string",
          },
        ],
      },
      type: {
        description: "Type of template.",
        type: "string",
      },
      wp_id: {
        description: "Post ID.",
        type: "integer",
      },
    },
    required: ["slug"],
  },
  Theme: {
    type: "object",
    properties: {
      author: {
        description: "The theme author.",
        type: "object",
        properties: {
          raw: {
            description: "The theme author's name, as found in the theme header.",
            type: "string",
          },
          rendered: {
            description: "HTML for the theme author, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      author_uri: {
        description: "The website of the theme author.",
        type: "object",
        properties: {
          raw: {
            description: "The website of the theme author, as found in the theme header.",
            type: "string",
          },
          rendered: {
            description: "The website of the theme author, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      default_template_part_areas: {
        description: "A list of allowed area values for template parts.",
        type: "array",
        items: {
          type: "object",
          properties: {
            area: {
              type: "string",
            },
            area_tag: {
              type: "string",
            },
            description: {
              type: "string",
            },
            icon: {
              type: "string",
            },
            label: {
              type: "string",
            },
          },
          required: [],
        },
      },
      default_template_types: {
        description: "A list of default template types.",
        type: "array",
        items: {
          type: "object",
          properties: {
            description: {
              type: "string",
            },
            slug: {
              type: "string",
            },
            title: {
              type: "string",
            },
          },
          required: [],
        },
      },
      description: {
        description: "A description of the theme.",
        type: "object",
        properties: {
          raw: {
            description: "The theme description, as found in the theme header.",
            type: "string",
          },
          rendered: {
            description: "The theme description, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      is_block_theme: {
        description: "Whether the theme is a block-based theme.",
        type: "boolean",
      },
      name: {
        description: "The name of the theme.",
        type: "object",
        properties: {
          raw: {
            description: "The theme name, as found in the theme header.",
            type: "string",
          },
          rendered: {
            description: "The theme name, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      requires_php: {
        description: "The minimum PHP version required for the theme to work.",
        type: "string",
      },
      requires_wp: {
        description: "The minimum WordPress version required for the theme to work.",
        type: "string",
      },
      screenshot: {
        description: "The theme's screenshot URL.",
        type: "string",
      },
      status: {
        description: "A named status for the theme.",
        type: "string",
        enum: ["inactive", "active"],
      },
      stylesheet: {
        description: "The theme's stylesheet. This uniquely identifies the theme.",
        type: "string",
      },
      stylesheet_uri: {
        description: "The uri for the theme's stylesheet directory.",
        type: "string",
      },
      tags: {
        description: "Tags indicating styles and features of the theme.",
        type: "object",
        properties: {
          raw: {
            description: "The theme tags, as found in the theme header.",
            type: "array",
            items: {
              type: "string",
            },
          },
          rendered: {
            description: "The theme tags, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      template: {
        description:
          "The theme's template. If this is a child theme, this refers to the parent theme, otherwise this is the same as the theme's stylesheet.",
        type: "string",
      },
      template_uri: {
        description:
          "The uri for the theme's template directory. If this is a child theme, this refers to the parent theme, otherwise this is the same as the theme's stylesheet directory.",
        type: "string",
      },
      textdomain: {
        description: "The theme's text domain.",
        type: "string",
      },
      theme_supports: {
        description: "Features supported by this theme.",
        type: "object",
        properties: {
          "align-wide": {
            description: "Whether theme opts in to wide alignment CSS class.",
            default: false,
            type: "boolean",
          },
          "automatic-feed-links": {
            description: "Whether posts and comments RSS feed links are added to head.",
            default: false,
            type: "boolean",
          },
          "block-template-parts": {
            description: "Whether a theme uses block-based template parts.",
            default: false,
            type: "boolean",
          },
          "block-templates": {
            description: "Whether a theme uses block-based templates.",
            default: false,
            type: "boolean",
          },
          "custom-background": {
            description: "Custom background if defined by the theme.",
            default: false,
            type: "union",
            of: [
              {
                type: "boolean",
              },
              {
                type: "object",
                properties: {
                  "default-attachment": {
                    type: "string",
                    enum: ["scroll", "fixed"],
                  },
                  "default-color": {
                    type: "string",
                  },
                  "default-image": {
                    type: "string",
                  },
                  "default-position-x": {
                    type: "string",
                    enum: ["left", "center", "right"],
                  },
                  "default-position-y": {
                    type: "string",
                    enum: ["left", "center", "right"],
                  },
                  "default-preset": {
                    type: "string",
                    enum: ["default", "fill", "fit", "repeat", "custom"],
                  },
                  "default-repeat": {
                    type: "string",
                    enum: ["repeat-x", "repeat-y", "repeat", "no-repeat"],
                  },
                  "default-size": {
                    type: "string",
                    enum: ["auto", "contain", "cover"],
                  },
                },
                required: [],
              },
            ],
          },
          "custom-header": {
            description: "Custom header if defined by the theme.",
            default: false,
            type: "union",
            of: [
              {
                type: "boolean",
              },
              {
                type: "object",
                properties: {
                  "default-image": {
                    type: "string",
                  },
                  "default-text-color": {
                    type: "string",
                  },
                  "flex-height": {
                    type: "boolean",
                  },
                  "flex-width": {
                    type: "boolean",
                  },
                  "header-text": {
                    type: "boolean",
                  },
                  height: {
                    type: "integer",
                  },
                  "random-default": {
                    type: "boolean",
                  },
                  uploads: {
                    type: "boolean",
                  },
                  video: {
                    type: "boolean",
                  },
                  width: {
                    type: "integer",
                  },
                },
                required: [],
              },
            ],
          },
          "custom-logo": {
            description: "Custom logo if defined by the theme.",
            default: false,
            type: "union",
            of: [
              {
                type: "boolean",
              },
              {
                type: "object",
                properties: {
                  "flex-height": {
                    type: "boolean",
                  },
                  "flex-width": {
                    type: "boolean",
                  },
                  "header-text": {
                    type: "array",
                    items: {
                      type: "string",
                    },
                  },
                  height: {
                    type: "integer",
                  },
                  "unlink-homepage-logo": {
                    type: "boolean",
                  },
                  width: {
                    type: "integer",
                  },
                },
                required: [],
              },
            ],
          },
          "customize-selective-refresh-widgets": {
            description: "Whether the theme enables Selective Refresh for Widgets being managed with the Customizer.",
            default: false,
            type: "boolean",
          },
          "dark-editor-style": {
            description: "Whether theme opts in to the dark editor style UI.",
            default: false,
            type: "boolean",
          },
          "disable-custom-colors": {
            description: "Whether the theme disables custom colors.",
            default: false,
            type: "boolean",
          },
          "disable-custom-font-sizes": {
            description: "Whether the theme disables custom font sizes.",
            default: false,
            type: "boolean",
          },
          "disable-custom-gradients": {
            description: "Whether the theme disables custom gradients.",
            default: false,
            type: "boolean",
          },
          "disable-layout-styles": {
            description: "Whether the theme disables generated layout styles.",
            default: false,
            type: "boolean",
          },
          "editor-color-palette": {
            description: "Custom color palette if defined by the theme.",
            default: false,
            type: "union",
            of: [
              {
                type: "boolean",
              },
              {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    color: {
                      type: "string",
                    },
                    name: {
                      type: "string",
                    },
                    slug: {
                      type: "string",
                    },
                  },
                  required: [],
                },
              },
            ],
          },
          "editor-font-sizes": {
            description: "Custom font sizes if defined by the theme.",
            default: false,
            type: "union",
            of: [
              {
                type: "boolean",
              },
              {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    name: {
                      type: "string",
                    },
                    size: {
                      type: "number",
                    },
                    slug: {
                      type: "string",
                    },
                  },
                  required: [],
                },
              },
            ],
          },
          "editor-gradient-presets": {
            description: "Custom gradient presets if defined by the theme.",
            default: false,
            type: "union",
            of: [
              {
                type: "boolean",
              },
              {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    gradient: {
                      type: "string",
                    },
                    name: {
                      type: "string",
                    },
                    slug: {
                      type: "string",
                    },
                  },
                  required: [],
                },
              },
            ],
          },
          "editor-spacing-sizes": {
            description: "Custom spacing sizes if defined by the theme.",
            default: false,
            type: "union",
            of: [
              {
                type: "boolean",
              },
              {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    name: {
                      type: "string",
                    },
                    size: {
                      type: "string",
                    },
                    slug: {
                      type: "string",
                    },
                  },
                  required: [],
                },
              },
            ],
          },
          "editor-styles": {
            description: "Whether theme opts in to the editor styles CSS wrapper.",
            default: false,
            type: "boolean",
          },
          formats: {
            description: "Post formats supported.",
            default: ["standard"],
            type: "array",
            items: {
              type: "string",
            },
          },
          html5: {
            description:
              "Allows use of HTML5 markup for search forms, comment forms, comment lists, gallery, and caption.",
            default: false,
            type: "union",
            of: [
              {
                type: "boolean",
              },
              {
                type: "array",
                items: {
                  type: "string",
                  enum: ["search-form", "comment-form", "comment-list", "gallery", "caption", "script", "style"],
                },
              },
            ],
          },
          "post-thumbnails": {
            description: "The post types that support thumbnails or true if all post types are supported.",
            default: false,
            type: "union",
            of: [
              {
                type: "boolean",
              },
              {
                type: "array",
                items: {
                  type: "string",
                },
              },
            ],
          },
          "responsive-embeds": {
            description: "Whether the theme supports responsive embedded content.",
            default: false,
            type: "boolean",
          },
          "title-tag": {
            description: "Whether the theme can manage the document title tag.",
            default: false,
            type: "boolean",
          },
          "wp-block-styles": {
            description: "Whether theme opts in to default WordPress block styles for viewing.",
            default: false,
            type: "boolean",
          },
        },
        required: [],
      },
      theme_uri: {
        description: "The URI of the theme's webpage.",
        type: "object",
        properties: {
          raw: {
            description: "The URI of the theme's webpage, as found in the theme header.",
            type: "string",
          },
          rendered: {
            description: "The URI of the theme's webpage, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      version: {
        description: "The theme's current version.",
        type: "string",
      },
    },
    required: [],
  },
  Type: {
    type: "object",
    properties: {
      capabilities: {
        description: "All capabilities used by the post type.",
        type: "object",
        properties: {},
        required: [],
      },
      description: {
        description: "A human-readable description of the post type.",
        type: "string",
      },
      has_archive: {
        description:
          "If the value is a string, the value will be used as the archive slug. If the value is false the post type has no archive.",
        type: "union",
        of: [
          {
            type: "string",
          },
          {
            type: "boolean",
          },
        ],
      },
      hierarchical: {
        description: "Whether or not the post type should have children.",
        type: "boolean",
      },
      icon: {
        description: "The icon for the post type.",
        nullable: true,
        type: "string",
      },
      labels: {
        description: "Human-readable labels for the post type for various contexts.",
        type: "object",
        properties: {},
        required: [],
      },
      name: {
        description: "The title for the post type.",
        type: "string",
      },
      rest_base: {
        description: "REST base route for the post type.",
        type: "string",
      },
      rest_namespace: {
        description: "REST route's namespace for the post type.",
        type: "string",
      },
      slug: {
        description: "An alphanumeric identifier for the post type.",
        type: "string",
      },
      supports: {
        description: "All features, supported by the post type.",
        type: "object",
        properties: {},
        required: [],
      },
      taxonomies: {
        description: "Taxonomies associated with post type.",
        type: "array",
        items: {
          type: "string",
        },
      },
      template: {
        description: "The block template associated with the post type.",
        type: "array",
        items: {
          type: "unknown",
        },
      },
      template_lock: {
        description: "The template_lock associated with the post type, or false if none.",
        type: "union",
        of: [
          {
            type: "string",
            enum: ["all", "insert", "contentOnly"],
          },
          {
            type: "boolean",
            enum: [false],
          },
        ],
      },
      viewable: {
        description: "Whether or not the post type can be viewed.",
        type: "boolean",
      },
      visibility: {
        description: "The visibility settings for the post type.",
        type: "object",
        properties: {
          show_in_nav_menus: {
            description: "Whether to make the post type available for selection in navigation menus.",
            type: "boolean",
          },
          show_ui: {
            description: "Whether to generate a default UI for managing this post type.",
            type: "boolean",
          },
        },
        required: [],
      },
    },
    required: [],
  },
  User: {
    type: "object",
    properties: {
      avatar_urls: {
        description: "Avatar URLs for the user.",
        type: "object",
        properties: {
          "24": {
            description: "Avatar URL with image size of 24 pixels.",
            type: "string",
          },
          "48": {
            description: "Avatar URL with image size of 48 pixels.",
            type: "string",
          },
          "96": {
            description: "Avatar URL with image size of 96 pixels.",
            type: "string",
          },
        },
        required: [],
      },
      capabilities: {
        description: "All capabilities assigned to the user.",
        type: "object",
        properties: {},
        required: [],
      },
      description: {
        description: "Description of the user.",
        type: "string",
      },
      email: {
        description: "The email address for the user.",
        type: "string",
      },
      extra_capabilities: {
        description: "Any extra capabilities assigned to the user.",
        type: "object",
        properties: {},
        required: [],
      },
      first_name: {
        description: "First name for the user.",
        type: "string",
      },
      id: {
        description: "Unique identifier for the user.",
        type: "integer",
      },
      last_name: {
        description: "Last name for the user.",
        type: "string",
      },
      link: {
        description: "Author URL of the user.",
        type: "string",
      },
      locale: {
        description: "Locale for the user.",
        type: "string",
        enum: ["", "en_US"],
      },
      meta: {
        description: "Meta fields.",
        type: "object",
        properties: {
          persisted_preferences: {
            default: [],
            type: "object",
            properties: {
              _modified: {
                description: "The date and time the preferences were updated.",
                type: "string",
              },
            },
            required: [],
            additionalProperties: {
              type: "unknown",
            },
          },
        },
        required: [],
      },
      name: {
        description: "Display name for the user.",
        type: "string",
      },
      nickname: {
        description: "The nickname for the user.",
        type: "string",
      },
      password: {
        description: "Password for the user (never included).",
        type: "string",
      },
      registered_date: {
        description: "Registration date for the user.",
        type: "string",
      },
      roles: {
        description: "Roles assigned to the user.",
        type: "array",
        items: {
          type: "string",
        },
      },
      slug: {
        description: "An alphanumeric identifier for the user.",
        type: "string",
      },
      url: {
        description: "URL of the user.",
        type: "string",
      },
      username: {
        description: "Login name for the user.",
        type: "string",
      },
    },
    required: ["email", "password", "username"],
  },
  ApplicationPassword: {
    type: "object",
    properties: {
      app_id: {
        description:
          "A UUID provided by the application to uniquely identify it. It is recommended to use an UUID v5 with the URL or DNS namespace.",
        type: "union",
        of: [
          {
            type: "string",
          },
          {
            type: "string",
            enum: [""],
          },
        ],
      },
      created: {
        description: "The GMT date the application password was created.",
        type: "string",
      },
      last_ip: {
        description: "The IP address the application password was last used by.",
        nullable: true,
        type: "string",
      },
      last_used: {
        description: "The GMT date the application password was last used.",
        nullable: true,
        type: "string",
      },
      name: {
        description: "The name of the application password.",
        type: "string",
        minLength: 1,
        pattern: ".*\\S.*",
      },
      password: {
        description: "The generated password. Only available after adding an application.",
        type: "string",
        sensitive: true,
      },
      uuid: {
        description: "The unique identifier for the application password.",
        type: "string",
      },
    },
    required: ["name"],
  },
  WidgetType: {
    type: "object",
    properties: {
      classname: {
        description: "Class name",
        default: "",
        type: "string",
      },
      description: {
        description: "Description of the widget.",
        default: "",
        type: "string",
      },
      id: {
        description: "Unique slug identifying the widget type.",
        type: "string",
      },
      is_multi: {
        description: "Whether the widget supports multiple instances",
        type: "boolean",
      },
      name: {
        description: "Human-readable name identifying the widget type.",
        default: "",
        type: "string",
      },
    },
    required: [],
  },
  Widget: {
    type: "object",
    properties: {
      form_data: {
        description:
          "URL-encoded form data from the widget admin form. Used to update a widget that does not support instance. Write only.",
        type: "string",
      },
      id: {
        description: "Unique identifier for the widget.",
        type: "string",
      },
      id_base: {
        description: "The type of the widget. Corresponds to ID in widget-types endpoint.",
        type: "string",
      },
      instance: {
        description: "Instance settings of the widget, if supported.",
        default: null,
        type: "object",
        properties: {
          encoded: {
            description: "Base64 encoded representation of the instance settings.",
            type: "string",
          },
          hash: {
            description: "Cryptographic hash of the instance settings.",
            type: "string",
          },
          raw: {
            description: "Unencoded instance settings, if supported.",
            type: "object",
            properties: {},
            required: [],
          },
        },
        required: [],
      },
      rendered: {
        description: "HTML representation of the widget.",
        type: "string",
      },
      rendered_form: {
        description: "HTML representation of the widget admin form.",
        type: "string",
      },
      sidebar: {
        description: "The sidebar the widget belongs to.",
        default: "wp_inactive_widgets",
        type: "string",
      },
    },
    required: ["sidebar"],
  },
  WpPatternCategory: {
    type: "object",
    properties: {
      count: {
        description: "Number of published posts for the term.",
        type: "integer",
      },
      description: {
        description: "HTML description of the term.",
        type: "string",
      },
      id: {
        description: "Unique identifier for the term.",
        type: "integer",
      },
      link: {
        description: "URL of the term.",
        type: "string",
      },
      meta: {
        description: "Meta fields.",
        type: "object",
        properties: {},
        required: [],
      },
      name: {
        description: "HTML title for the term.",
        type: "string",
      },
      slug: {
        description: "An alphanumeric identifier for the term unique to its type.",
        type: "string",
      },
      taxonomy: {
        description: "Type attribution for the term.",
        type: "string",
        enum: ["wp_pattern_category"],
      },
    },
    required: ["name"],
  },
  GetWpV2BlockDirectorySearchResponse: {
    type: "array",
    items: {
      type: "ref",
      ref: "block_directory_item",
    },
  },
  GetWpV2BlocksResponse: {
    type: "array",
    items: {
      type: "ref",
      ref: "wp_block",
    },
  },
  PostWpV2BlocksRequest: {
    type: "object",
    properties: {
      content: {
        description: "The content for the post.",
        type: "object",
        properties: {
          block_version: {
            description: "Version of the content block format used by the post.",
            type: "integer",
          },
          protected: {
            description: "Whether the content is protected with a password.",
            type: "boolean",
          },
          raw: {
            description: "Content for the post, as it exists in the database.",
            type: "string",
          },
        },
        required: [],
      },
      date: {
        description: "The date the post was published, in the site's timezone.",
        nullable: true,
        type: "string",
      },
      date_gmt: {
        description: "The date the post was published, as GMT.",
        nullable: true,
        type: "string",
      },
      excerpt: {
        description: "The excerpt for the post.",
        type: "object",
        properties: {
          protected: {
            description: "Whether the excerpt is protected with a password.",
            type: "boolean",
          },
          raw: {
            description: "Excerpt for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML excerpt for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      meta: {
        description: "Meta fields.",
        type: "object",
        properties: {
          footnotes: {
            default: "",
            type: "string",
          },
          wp_pattern_sync_status: {
            default: "",
            type: "string",
            enum: ["partial", "unsynced"],
          },
        },
        required: [],
      },
      password: {
        description: "A password to protect access to the content and excerpt.",
        type: "string",
      },
      slug: {
        description: "An alphanumeric identifier for the post unique to its type.",
        type: "string",
      },
      status: {
        description: "A named status for the post.",
        type: "string",
        enum: ["publish", "future", "draft", "pending", "private"],
      },
      template: {
        description: "The theme file to use to display the post.",
        type: "string",
      },
      title: {
        description: "The title for the post.",
        type: "object",
        properties: {
          raw: {
            description: "Title for the post, as it exists in the database.",
            type: "string",
          },
        },
        required: [],
      },
      wp_pattern_category: {
        description: "The terms assigned to the post in the wp_pattern_category taxonomy.",
        type: "array",
        items: {
          type: "integer",
        },
      },
    },
    required: [],
  },
  PostWpV2BlocksByIdRequest: {
    type: "object",
    properties: {
      content: {
        description: "The content for the post.",
        type: "object",
        properties: {
          block_version: {
            description: "Version of the content block format used by the post.",
            type: "integer",
          },
          protected: {
            description: "Whether the content is protected with a password.",
            type: "boolean",
          },
          raw: {
            description: "Content for the post, as it exists in the database.",
            type: "string",
          },
        },
        required: [],
      },
      date: {
        description: "The date the post was published, in the site's timezone.",
        nullable: true,
        type: "string",
      },
      date_gmt: {
        description: "The date the post was published, as GMT.",
        nullable: true,
        type: "string",
      },
      excerpt: {
        description: "The excerpt for the post.",
        type: "object",
        properties: {
          protected: {
            description: "Whether the excerpt is protected with a password.",
            type: "boolean",
          },
          raw: {
            description: "Excerpt for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML excerpt for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      meta: {
        description: "Meta fields.",
        type: "object",
        properties: {
          footnotes: {
            default: "",
            type: "string",
          },
          wp_pattern_sync_status: {
            default: "",
            type: "string",
            enum: ["partial", "unsynced"],
          },
        },
        required: [],
      },
      password: {
        description: "A password to protect access to the content and excerpt.",
        type: "string",
      },
      slug: {
        description: "An alphanumeric identifier for the post unique to its type.",
        type: "string",
      },
      status: {
        description: "A named status for the post.",
        type: "string",
        enum: ["publish", "future", "draft", "pending", "private"],
      },
      template: {
        description: "The theme file to use to display the post.",
        type: "string",
      },
      title: {
        description: "The title for the post.",
        type: "object",
        properties: {
          raw: {
            description: "Title for the post, as it exists in the database.",
            type: "string",
          },
        },
        required: [],
      },
      wp_pattern_category: {
        description: "The terms assigned to the post in the wp_pattern_category taxonomy.",
        type: "array",
        items: {
          type: "integer",
        },
      },
    },
    required: [],
  },
  PostWpV2BlocksByIdAutosavesRequest: {
    type: "object",
    properties: {
      content: {
        description: "The content for the post.",
        type: "object",
        properties: {
          block_version: {
            description: "Version of the content block format used by the post.",
            type: "integer",
          },
          protected: {
            description: "Whether the content is protected with a password.",
            type: "boolean",
          },
          raw: {
            description: "Content for the post, as it exists in the database.",
            type: "string",
          },
        },
        required: [],
      },
      date: {
        description: "The date the post was published, in the site's timezone.",
        nullable: true,
        type: "string",
      },
      date_gmt: {
        description: "The date the post was published, as GMT.",
        nullable: true,
        type: "string",
      },
      excerpt: {
        description: "The excerpt for the post.",
        type: "object",
        properties: {
          protected: {
            description: "Whether the excerpt is protected with a password.",
            type: "boolean",
          },
          raw: {
            description: "Excerpt for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML excerpt for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      meta: {
        description: "Meta fields.",
        type: "object",
        properties: {
          footnotes: {
            default: "",
            type: "string",
          },
          wp_pattern_sync_status: {
            default: "",
            type: "string",
            enum: ["partial", "unsynced"],
          },
        },
        required: [],
      },
      parent: {
        description: "The ID for the parent of the autosave.",
        type: "integer",
      },
      password: {
        description: "A password to protect access to the content and excerpt.",
        type: "string",
      },
      slug: {
        description: "An alphanumeric identifier for the post unique to its type.",
        type: "string",
      },
      status: {
        description: "A named status for the post.",
        type: "string",
        enum: ["publish", "future", "draft", "pending", "private"],
      },
      template: {
        description: "The theme file to use to display the post.",
        type: "string",
      },
      title: {
        description: "The title for the post.",
        type: "object",
        properties: {
          raw: {
            description: "Title for the post, as it exists in the database.",
            type: "string",
          },
        },
        required: [],
      },
      wp_pattern_category: {
        description: "The terms assigned to the post in the wp_pattern_category taxonomy.",
        type: "array",
        items: {
          type: "integer",
        },
      },
    },
    required: [],
  },
  GetWpV2BlocksByParentRevisionsResponse: {
    type: "array",
    items: {
      type: "ref",
      ref: "wp_block_revision2",
    },
  },
  GetWpV2CategoriesResponse: {
    type: "array",
    items: {
      type: "ref",
      ref: "category",
    },
  },
  PostWpV2CategoriesRequest: {
    type: "object",
    properties: {
      description: {
        description: "HTML description of the term.",
        type: "string",
      },
      meta: {
        description: "Meta fields.",
        type: "object",
        properties: {},
        required: [],
      },
      name: {
        description: "HTML title for the term.",
        type: "string",
      },
      parent: {
        description: "The parent term ID.",
        type: "integer",
      },
      slug: {
        description: "An alphanumeric identifier for the term unique to its type.",
        type: "string",
      },
    },
    required: ["name"],
  },
  PostWpV2CategoriesByIdRequest: {
    type: "object",
    properties: {
      description: {
        description: "HTML description of the term.",
        type: "string",
      },
      meta: {
        description: "Meta fields.",
        type: "object",
        properties: {},
        required: [],
      },
      name: {
        description: "HTML title for the term.",
        type: "string",
      },
      parent: {
        description: "The parent term ID.",
        type: "integer",
      },
      slug: {
        description: "An alphanumeric identifier for the term unique to its type.",
        type: "string",
      },
    },
    required: [],
  },
  GetWpV2CommentsResponse: {
    type: "array",
    items: {
      type: "ref",
      ref: "comment",
    },
  },
  PostWpV2CommentsRequest: {
    type: "object",
    properties: {
      author: {
        description: "The ID of the user object, if author was a user.",
        type: "integer",
      },
      author_email: {
        description: "Email address for the comment author.",
        type: "string",
      },
      author_ip: {
        description: "IP address for the comment author.",
        type: "string",
      },
      author_name: {
        description: "Display name for the comment author.",
        type: "string",
      },
      author_url: {
        description: "URL for the comment author.",
        type: "string",
      },
      author_user_agent: {
        description: "User agent for the comment author.",
        type: "string",
      },
      content: {
        description: "The content for the comment.",
        type: "object",
        properties: {
          raw: {
            description: "Content for the comment, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML content for the comment, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      date: {
        description: "The date the comment was published, in the site's timezone.",
        type: "string",
      },
      date_gmt: {
        description: "The date the comment was published, as GMT.",
        type: "string",
      },
      meta: {
        description: "Meta fields.",
        type: "object",
        properties: {
          _wp_note_status: {
            description: "Note resolution status",
            default: "",
            type: "string",
            enum: ["resolved", "reopen"],
          },
        },
        required: [],
      },
      parent: {
        description: "The ID for the parent of the comment.",
        default: 0,
        type: "integer",
      },
      post: {
        description: "The ID of the associated post object.",
        default: 0,
        type: "integer",
      },
      status: {
        description: "State of the comment.",
        type: "string",
      },
    },
    required: [],
  },
  PostWpV2CommentsByIdRequest: {
    type: "object",
    properties: {
      author: {
        description: "The ID of the user object, if author was a user.",
        type: "integer",
      },
      author_email: {
        description: "Email address for the comment author.",
        type: "string",
      },
      author_ip: {
        description: "IP address for the comment author.",
        type: "string",
      },
      author_name: {
        description: "Display name for the comment author.",
        type: "string",
      },
      author_url: {
        description: "URL for the comment author.",
        type: "string",
      },
      author_user_agent: {
        description: "User agent for the comment author.",
        type: "string",
      },
      content: {
        description: "The content for the comment.",
        type: "object",
        properties: {
          raw: {
            description: "Content for the comment, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML content for the comment, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      date: {
        description: "The date the comment was published, in the site's timezone.",
        type: "string",
      },
      date_gmt: {
        description: "The date the comment was published, as GMT.",
        type: "string",
      },
      meta: {
        description: "Meta fields.",
        type: "object",
        properties: {
          _wp_note_status: {
            description: "Note resolution status",
            default: "",
            type: "string",
            enum: ["resolved", "reopen"],
          },
        },
        required: [],
      },
      parent: {
        description: "The ID for the parent of the comment.",
        type: "integer",
      },
      post: {
        description: "The ID of the associated post object.",
        type: "integer",
      },
      status: {
        description: "State of the comment.",
        type: "string",
      },
    },
    required: [],
  },
  GetWpV2FontCollectionsResponse: {
    type: "array",
    items: {
      type: "ref",
      ref: "font_collection",
    },
  },
  GetWpV2FontFamiliesResponse: {
    type: "array",
    items: {
      type: "ref",
      ref: "wp_font_family",
    },
  },
  PostWpV2FontFamiliesRequest: {
    type: "object",
    properties: {
      font_family_settings: {
        description: "font-family declaration in theme.json format, encoded as a string.",
        type: "string",
      },
      theme_json_version: {
        description: "Version of the theme.json schema used for the typography settings.",
        default: 3,
        type: "integer",
        minimum: 2,
        maximum: 3,
      },
    },
    required: ["font_family_settings"],
  },
  GetWpV2FontFamiliesByFontFamilyIdFontFacesResponse: {
    type: "array",
    items: {
      type: "ref",
      ref: "wp_font_face",
    },
  },
  PostWpV2FontFamiliesByFontFamilyIdFontFacesRequest: {
    type: "object",
    properties: {
      font_face_settings: {
        description: "font-face declaration in theme.json format, encoded as a string.",
        type: "string",
      },
      theme_json_version: {
        description: "Version of the theme.json schema used for the typography settings.",
        default: 3,
        type: "integer",
        minimum: 2,
        maximum: 3,
      },
    },
    required: ["font_face_settings"],
  },
  PostWpV2FontFamiliesByIdRequest: {
    type: "object",
    properties: {
      font_family_settings: {
        description: "font-family declaration in theme.json format, encoded as a string.",
        type: "string",
      },
      theme_json_version: {
        description: "Version of the theme.json schema used for the typography settings.",
        default: 3,
        type: "integer",
        minimum: 2,
        maximum: 3,
      },
    },
    required: ["font_family_settings"],
  },
  GetWpV2GlobalStylesByParentRevisionsResponse: {
    type: "array",
    items: {
      type: "ref",
      ref: "wp_global_styles_revision",
    },
  },
  GetWpV2MediaResponse: {
    type: "array",
    items: {
      type: "ref",
      ref: "attachment",
    },
  },
  PostWpV2MediaRequest: {
    type: "object",
    properties: {
      alt_text: {
        description: "Alternative text to display when attachment is not displayed.",
        type: "string",
      },
      author: {
        description: "The ID for the author of the post.",
        type: "integer",
      },
      caption: {
        description: "The attachment caption.",
        type: "object",
        properties: {
          raw: {
            description: "Caption for the attachment, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML caption for the attachment, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      comment_status: {
        description: "Whether or not comments are open on the post.",
        type: "string",
        enum: ["open", "closed"],
      },
      date: {
        description: "The date the post was published, in the site's timezone.",
        nullable: true,
        type: "string",
      },
      date_gmt: {
        description: "The date the post was published, as GMT.",
        nullable: true,
        type: "string",
      },
      description: {
        description: "The attachment description.",
        type: "object",
        properties: {
          raw: {
            description: "Description for the attachment, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML description for the attachment, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      featured_media: {
        description: "The ID of the featured media for the post.",
        type: "integer",
      },
      meta: {
        description: "Meta fields.",
        type: "object",
        properties: {},
        required: [],
      },
      ping_status: {
        description: "Whether or not the post can be pinged.",
        type: "string",
        enum: ["open", "closed"],
      },
      post: {
        description: "The ID for the associated post of the attachment.",
        type: "integer",
      },
      slug: {
        description: "An alphanumeric identifier for the post unique to its type.",
        type: "string",
      },
      status: {
        description: "A named status for the post.",
        type: "string",
        enum: ["publish", "future", "draft", "pending", "private"],
      },
      template: {
        description: "The theme file to use to display the post.",
        type: "string",
      },
      title: {
        description: "The title for the post.",
        type: "object",
        properties: {
          raw: {
            description: "Title for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML title for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
    },
    required: [],
  },
  PostWpV2MediaByIdRequest: {
    type: "object",
    properties: {
      alt_text: {
        description: "Alternative text to display when attachment is not displayed.",
        type: "string",
      },
      author: {
        description: "The ID for the author of the post.",
        type: "integer",
      },
      caption: {
        description: "The attachment caption.",
        type: "object",
        properties: {
          raw: {
            description: "Caption for the attachment, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML caption for the attachment, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      comment_status: {
        description: "Whether or not comments are open on the post.",
        type: "string",
        enum: ["open", "closed"],
      },
      date: {
        description: "The date the post was published, in the site's timezone.",
        nullable: true,
        type: "string",
      },
      date_gmt: {
        description: "The date the post was published, as GMT.",
        nullable: true,
        type: "string",
      },
      description: {
        description: "The attachment description.",
        type: "object",
        properties: {
          raw: {
            description: "Description for the attachment, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML description for the attachment, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      featured_media: {
        description: "The ID of the featured media for the post.",
        type: "integer",
      },
      meta: {
        description: "Meta fields.",
        type: "object",
        properties: {},
        required: [],
      },
      ping_status: {
        description: "Whether or not the post can be pinged.",
        type: "string",
        enum: ["open", "closed"],
      },
      post: {
        description: "The ID for the associated post of the attachment.",
        type: "integer",
      },
      slug: {
        description: "An alphanumeric identifier for the post unique to its type.",
        type: "string",
      },
      status: {
        description: "A named status for the post.",
        type: "string",
        enum: ["publish", "future", "draft", "pending", "private"],
      },
      template: {
        description: "The theme file to use to display the post.",
        type: "string",
      },
      title: {
        description: "The title for the post.",
        type: "object",
        properties: {
          raw: {
            description: "Title for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML title for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
    },
    required: [],
  },
  PostWpV2MediaByIdEditRequest: {
    type: "object",
    properties: {
      alt_text: {
        description: "Alternative text to display when attachment is not displayed.",
        type: "string",
      },
      caption: {
        description: "The attachment caption.",
        type: "object",
        properties: {
          raw: {
            description: "Caption for the attachment, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML caption for the attachment, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      description: {
        description: "The attachment description.",
        type: "object",
        properties: {
          raw: {
            description: "Description for the attachment, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML description for the attachment, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      height: {
        description:
          "As a percentage of the image, the height to crop the image to. DEPRECATED: Use `modifiers` instead.",
        type: "number",
        minimum: 0,
        maximum: 100,
      },
      modifiers: {
        description: "Array of image edits.",
        type: "array",
        items: {
          description: "Image edit.",
          type: "union",
          of: [
            {
              type: "object",
              properties: {
                args: {
                  description: "Flip arguments.",
                  type: "object",
                  properties: {
                    flip: {
                      description: "Flip direction.",
                      type: "object",
                      properties: {
                        horizontal: {
                          description: "Whether to flip in the horizontal direction.",
                          type: "boolean",
                        },
                        vertical: {
                          description: "Whether to flip in the vertical direction.",
                          type: "boolean",
                        },
                      },
                      required: ["horizontal", "vertical"],
                    },
                  },
                  required: ["flip"],
                },
                type: {
                  description: "Flip type.",
                  type: "string",
                  enum: ["flip"],
                },
              },
              required: ["type", "args"],
            },
            {
              type: "object",
              properties: {
                args: {
                  description: "Rotation arguments.",
                  type: "object",
                  properties: {
                    angle: {
                      description: "Angle to rotate clockwise in degrees.",
                      type: "number",
                    },
                  },
                  required: ["angle"],
                },
                type: {
                  description: "Rotation type.",
                  type: "string",
                  enum: ["rotate"],
                },
              },
              required: ["type", "args"],
            },
            {
              type: "object",
              properties: {
                args: {
                  description: "Crop arguments.",
                  type: "object",
                  properties: {
                    height: {
                      description: "Height of the crop as a percentage of the image height.",
                      type: "number",
                    },
                    left: {
                      description:
                        "Horizontal position from the left to begin the crop as a percentage of the image width.",
                      type: "number",
                    },
                    top: {
                      description:
                        "Vertical position from the top to begin the crop as a percentage of the image height.",
                      type: "number",
                    },
                    width: {
                      description: "Width of the crop as a percentage of the image width.",
                      type: "number",
                    },
                  },
                  required: ["left", "top", "width", "height"],
                },
                type: {
                  description: "Crop type.",
                  type: "string",
                  enum: ["crop"],
                },
              },
              required: ["type", "args"],
            },
          ],
        },
        minItems: 1,
      },
      post: {
        description: "The ID for the associated post of the attachment.",
        type: "integer",
      },
      rotation: {
        description: "The amount to rotate the image clockwise in degrees. DEPRECATED: Use `modifiers` instead.",
        type: "integer",
        minimum: 0,
        maximum: 360,
      },
      src: {
        description: "URL to the edited image file.",
        type: "string",
      },
      title: {
        description: "The title for the post.",
        type: "object",
        properties: {
          raw: {
            description: "Title for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML title for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      width: {
        description:
          "As a percentage of the image, the width to crop the image to. DEPRECATED: Use `modifiers` instead.",
        type: "number",
        minimum: 0,
        maximum: 100,
      },
      x: {
        description:
          "As a percentage of the image, the x position to start the crop from. DEPRECATED: Use `modifiers` instead.",
        type: "number",
        minimum: 0,
        maximum: 100,
      },
      y: {
        description:
          "As a percentage of the image, the y position to start the crop from. DEPRECATED: Use `modifiers` instead.",
        type: "number",
        minimum: 0,
        maximum: 100,
      },
    },
    required: ["src"],
  },
  PostWpV2MediaByIdPostProcessRequest: {
    type: "object",
    properties: {
      action: {
        type: "string",
        enum: ["create-image-subsizes"],
      },
    },
    required: ["action"],
  },
  GetWpV2MenuItemsResponse: {
    type: "array",
    items: {
      type: "ref",
      ref: "nav_menu_item",
    },
  },
  PostWpV2MenuItemsRequest: {
    type: "object",
    properties: {
      attr_title: {
        description: "Text for the title attribute of the link element for this menu item.",
        type: "string",
      },
      classes: {
        description: "Class names for the link element of this menu item.",
        type: "array",
        items: {
          type: "string",
        },
      },
      description: {
        description: "The description of this menu item.",
        type: "string",
      },
      menu_order: {
        description: "The DB ID of the nav_menu_item that is this item's menu parent, if any, otherwise 0.",
        default: 1,
        type: "integer",
        minimum: 1,
      },
      menus: {
        description: "The terms assigned to the object in the nav_menu taxonomy.",
        type: "integer",
      },
      meta: {
        description: "Meta fields.",
        type: "object",
        properties: {},
        required: [],
      },
      object: {
        description: 'The type of object originally represented, such as "category", "post", or "attachment".',
        type: "string",
      },
      object_id: {
        description:
          "The database ID of the original object this menu item represents, for example the ID for posts or the term_id for categories.",
        default: 0,
        type: "integer",
        minimum: 0,
      },
      parent: {
        description: "The ID for the parent of the object.",
        default: 0,
        type: "integer",
        minimum: 0,
      },
      status: {
        description: "A named status for the object.",
        default: "publish",
        type: "string",
        enum: ["publish", "future", "draft", "pending", "private"],
      },
      target: {
        description: "The target attribute of the link element for this menu item.",
        type: "string",
        enum: ["_blank", ""],
      },
      title: {
        description: "The title for the object.",
        type: "union",
        of: [
          {
            type: "string",
          },
          {
            type: "object",
            properties: {
              raw: {
                description: "Title for the object, as it exists in the database.",
                type: "string",
              },
              rendered: {
                description: "HTML title for the object, transformed for display.",
                type: "string",
              },
            },
            required: [],
          },
        ],
      },
      type: {
        description: 'The family of objects originally represented, such as "post_type" or "taxonomy".',
        default: "custom",
        type: "string",
        enum: ["taxonomy", "post_type", "post_type_archive", "custom"],
      },
      url: {
        description: "The URL to which this menu item points.",
        type: "string",
      },
      xfn: {
        description: "The XFN relationship expressed in the link of this menu item.",
        type: "array",
        items: {
          type: "string",
        },
      },
    },
    required: [],
  },
  PostWpV2MenuItemsByIdRequest: {
    type: "object",
    properties: {
      attr_title: {
        description: "Text for the title attribute of the link element for this menu item.",
        type: "string",
      },
      classes: {
        description: "Class names for the link element of this menu item.",
        type: "array",
        items: {
          type: "string",
        },
      },
      description: {
        description: "The description of this menu item.",
        type: "string",
      },
      menu_order: {
        description: "The DB ID of the nav_menu_item that is this item's menu parent, if any, otherwise 0.",
        type: "integer",
        minimum: 1,
      },
      menus: {
        description: "The terms assigned to the object in the nav_menu taxonomy.",
        type: "integer",
      },
      meta: {
        description: "Meta fields.",
        type: "object",
        properties: {},
        required: [],
      },
      object: {
        description: 'The type of object originally represented, such as "category", "post", or "attachment".',
        type: "string",
      },
      object_id: {
        description:
          "The database ID of the original object this menu item represents, for example the ID for posts or the term_id for categories.",
        type: "integer",
        minimum: 0,
      },
      parent: {
        description: "The ID for the parent of the object.",
        type: "integer",
        minimum: 0,
      },
      status: {
        description: "A named status for the object.",
        type: "string",
        enum: ["publish", "future", "draft", "pending", "private"],
      },
      target: {
        description: "The target attribute of the link element for this menu item.",
        type: "string",
        enum: ["_blank", ""],
      },
      title: {
        description: "The title for the object.",
        type: "union",
        of: [
          {
            type: "string",
          },
          {
            type: "object",
            properties: {
              raw: {
                description: "Title for the object, as it exists in the database.",
                type: "string",
              },
              rendered: {
                description: "HTML title for the object, transformed for display.",
                type: "string",
              },
            },
            required: [],
          },
        ],
      },
      type: {
        description: 'The family of objects originally represented, such as "post_type" or "taxonomy".',
        type: "string",
        enum: ["taxonomy", "post_type", "post_type_archive", "custom"],
      },
      url: {
        description: "The URL to which this menu item points.",
        type: "string",
      },
      xfn: {
        description: "The XFN relationship expressed in the link of this menu item.",
        type: "array",
        items: {
          type: "string",
        },
      },
    },
    required: [],
  },
  PostWpV2MenuItemsByIdAutosavesRequest: {
    type: "object",
    properties: {
      attr_title: {
        description: "Text for the title attribute of the link element for this menu item.",
        type: "string",
      },
      classes: {
        description: "Class names for the link element of this menu item.",
        type: "array",
        items: {
          type: "string",
        },
      },
      description: {
        description: "The description of this menu item.",
        type: "string",
      },
      menu_order: {
        description: "The DB ID of the nav_menu_item that is this item's menu parent, if any, otherwise 0.",
        type: "integer",
        minimum: 1,
      },
      menus: {
        description: "The terms assigned to the object in the nav_menu taxonomy.",
        type: "integer",
      },
      meta: {
        description: "Meta fields.",
        type: "object",
        properties: {},
        required: [],
      },
      object: {
        description: 'The type of object originally represented, such as "category", "post", or "attachment".',
        type: "string",
      },
      object_id: {
        description:
          "The database ID of the original object this menu item represents, for example the ID for posts or the term_id for categories.",
        type: "integer",
        minimum: 0,
      },
      parent: {
        description: "The ID for the parent of the object.",
        type: "integer",
        minimum: 0,
      },
      status: {
        description: "A named status for the object.",
        type: "string",
        enum: ["publish", "future", "draft", "pending", "private"],
      },
      target: {
        description: "The target attribute of the link element for this menu item.",
        type: "string",
        enum: ["_blank", ""],
      },
      title: {
        description: "The title for the object.",
        type: "union",
        of: [
          {
            type: "string",
          },
          {
            type: "object",
            properties: {
              raw: {
                description: "Title for the object, as it exists in the database.",
                type: "string",
              },
              rendered: {
                description: "HTML title for the object, transformed for display.",
                type: "string",
              },
            },
            required: [],
          },
        ],
      },
      type: {
        description: 'The family of objects originally represented, such as "post_type" or "taxonomy".',
        type: "string",
        enum: ["taxonomy", "post_type", "post_type_archive", "custom"],
      },
      url: {
        description: "The URL to which this menu item points.",
        type: "string",
      },
      xfn: {
        description: "The XFN relationship expressed in the link of this menu item.",
        type: "array",
        items: {
          type: "string",
        },
      },
    },
    required: [],
  },
  GetWpV2MenusResponse: {
    type: "array",
    items: {
      type: "ref",
      ref: "nav_menu",
    },
  },
  PostWpV2MenusRequest: {
    type: "object",
    properties: {
      auto_add: {
        description: "Whether to automatically add top level pages to this menu.",
        type: "boolean",
      },
      description: {
        description: "HTML description of the term.",
        type: "string",
      },
      locations: {
        description: "The locations assigned to the menu.",
        type: "array",
        items: {
          type: "string",
        },
      },
      meta: {
        description: "Meta fields.",
        type: "object",
        properties: {},
        required: [],
      },
      name: {
        description: "HTML title for the term.",
        type: "string",
      },
      slug: {
        description: "An alphanumeric identifier for the term unique to its type.",
        type: "string",
      },
    },
    required: ["name"],
  },
  PostWpV2MenusByIdRequest: {
    type: "object",
    properties: {
      auto_add: {
        description: "Whether to automatically add top level pages to this menu.",
        type: "boolean",
      },
      description: {
        description: "HTML description of the term.",
        type: "string",
      },
      locations: {
        description: "The locations assigned to the menu.",
        type: "array",
        items: {
          type: "string",
        },
      },
      meta: {
        description: "Meta fields.",
        type: "object",
        properties: {},
        required: [],
      },
      name: {
        description: "HTML title for the term.",
        type: "string",
      },
      slug: {
        description: "An alphanumeric identifier for the term unique to its type.",
        type: "string",
      },
    },
    required: [],
  },
  GetWpV2NavigationResponse: {
    type: "array",
    items: {
      type: "ref",
      ref: "wp_navigation",
    },
  },
  PostWpV2NavigationRequest: {
    type: "object",
    properties: {
      content: {
        description: "The content for the post.",
        type: "object",
        properties: {
          block_version: {
            description: "Version of the content block format used by the post.",
            type: "integer",
          },
          protected: {
            description: "Whether the content is protected with a password.",
            type: "boolean",
          },
          raw: {
            description: "Content for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML content for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      date: {
        description: "The date the post was published, in the site's timezone.",
        nullable: true,
        type: "string",
      },
      date_gmt: {
        description: "The date the post was published, as GMT.",
        nullable: true,
        type: "string",
      },
      password: {
        description: "A password to protect access to the content and excerpt.",
        type: "string",
      },
      slug: {
        description: "An alphanumeric identifier for the post unique to its type.",
        type: "string",
      },
      status: {
        description: "A named status for the post.",
        type: "string",
        enum: ["publish", "future", "draft", "pending", "private"],
      },
      template: {
        description: "The theme file to use to display the post.",
        type: "string",
      },
      title: {
        description: "The title for the post.",
        type: "object",
        properties: {
          raw: {
            description: "Title for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML title for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
    },
    required: [],
  },
  PostWpV2NavigationByIdRequest: {
    type: "object",
    properties: {
      content: {
        description: "The content for the post.",
        type: "object",
        properties: {
          block_version: {
            description: "Version of the content block format used by the post.",
            type: "integer",
          },
          protected: {
            description: "Whether the content is protected with a password.",
            type: "boolean",
          },
          raw: {
            description: "Content for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML content for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      date: {
        description: "The date the post was published, in the site's timezone.",
        nullable: true,
        type: "string",
      },
      date_gmt: {
        description: "The date the post was published, as GMT.",
        nullable: true,
        type: "string",
      },
      password: {
        description: "A password to protect access to the content and excerpt.",
        type: "string",
      },
      slug: {
        description: "An alphanumeric identifier for the post unique to its type.",
        type: "string",
      },
      status: {
        description: "A named status for the post.",
        type: "string",
        enum: ["publish", "future", "draft", "pending", "private"],
      },
      template: {
        description: "The theme file to use to display the post.",
        type: "string",
      },
      title: {
        description: "The title for the post.",
        type: "object",
        properties: {
          raw: {
            description: "Title for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML title for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
    },
    required: [],
  },
  PostWpV2NavigationByIdAutosavesRequest: {
    type: "object",
    properties: {
      content: {
        description: "The content for the post.",
        type: "object",
        properties: {
          block_version: {
            description: "Version of the content block format used by the post.",
            type: "integer",
          },
          protected: {
            description: "Whether the content is protected with a password.",
            type: "boolean",
          },
          raw: {
            description: "Content for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML content for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      date: {
        description: "The date the post was published, in the site's timezone.",
        nullable: true,
        type: "string",
      },
      date_gmt: {
        description: "The date the post was published, as GMT.",
        nullable: true,
        type: "string",
      },
      parent: {
        description: "The ID for the parent of the autosave.",
        type: "integer",
      },
      password: {
        description: "A password to protect access to the content and excerpt.",
        type: "string",
      },
      slug: {
        description: "An alphanumeric identifier for the post unique to its type.",
        type: "string",
      },
      status: {
        description: "A named status for the post.",
        type: "string",
        enum: ["publish", "future", "draft", "pending", "private"],
      },
      template: {
        description: "The theme file to use to display the post.",
        type: "string",
      },
      title: {
        description: "The title for the post.",
        type: "object",
        properties: {
          raw: {
            description: "Title for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML title for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
    },
    required: [],
  },
  GetWpV2NavigationByParentRevisionsResponse: {
    type: "array",
    items: {
      type: "ref",
      ref: "wp_navigation_revision2",
    },
  },
  GetWpV2PagesResponse: {
    type: "array",
    items: {
      type: "ref",
      ref: "page",
    },
  },
  PostWpV2PagesRequest: {
    type: "object",
    properties: {
      author: {
        description: "The ID for the author of the post.",
        type: "integer",
      },
      comment_status: {
        description: "Whether or not comments are open on the post.",
        type: "string",
        enum: ["open", "closed"],
      },
      content: {
        description: "The content for the post.",
        type: "object",
        properties: {
          block_version: {
            description: "Version of the content block format used by the post.",
            type: "integer",
          },
          protected: {
            description: "Whether the content is protected with a password.",
            type: "boolean",
          },
          raw: {
            description: "Content for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML content for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      date: {
        description: "The date the post was published, in the site's timezone.",
        nullable: true,
        type: "string",
      },
      date_gmt: {
        description: "The date the post was published, as GMT.",
        nullable: true,
        type: "string",
      },
      excerpt: {
        description: "The excerpt for the post.",
        type: "object",
        properties: {
          protected: {
            description: "Whether the excerpt is protected with a password.",
            type: "boolean",
          },
          raw: {
            description: "Excerpt for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML excerpt for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      featured_media: {
        description: "The ID of the featured media for the post.",
        type: "integer",
      },
      menu_order: {
        description: "The order of the post in relation to other posts.",
        type: "integer",
      },
      meta: {
        description: "Meta fields.",
        type: "object",
        properties: {
          footnotes: {
            default: "",
            type: "string",
          },
        },
        required: [],
      },
      parent: {
        description: "The ID for the parent of the post.",
        type: "integer",
      },
      password: {
        description: "A password to protect access to the content and excerpt.",
        type: "string",
      },
      ping_status: {
        description: "Whether or not the post can be pinged.",
        type: "string",
        enum: ["open", "closed"],
      },
      slug: {
        description: "An alphanumeric identifier for the post unique to its type.",
        type: "string",
      },
      status: {
        description: "A named status for the post.",
        type: "string",
        enum: ["publish", "future", "draft", "pending", "private"],
      },
      template: {
        description: "The theme file to use to display the post.",
        type: "string",
      },
      title: {
        description: "The title for the post.",
        type: "object",
        properties: {
          raw: {
            description: "Title for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML title for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
    },
    required: [],
  },
  PostWpV2PagesByIdRequest: {
    type: "object",
    properties: {
      author: {
        description: "The ID for the author of the post.",
        type: "integer",
      },
      comment_status: {
        description: "Whether or not comments are open on the post.",
        type: "string",
        enum: ["open", "closed"],
      },
      content: {
        description: "The content for the post.",
        type: "object",
        properties: {
          block_version: {
            description: "Version of the content block format used by the post.",
            type: "integer",
          },
          protected: {
            description: "Whether the content is protected with a password.",
            type: "boolean",
          },
          raw: {
            description: "Content for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML content for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      date: {
        description: "The date the post was published, in the site's timezone.",
        nullable: true,
        type: "string",
      },
      date_gmt: {
        description: "The date the post was published, as GMT.",
        nullable: true,
        type: "string",
      },
      excerpt: {
        description: "The excerpt for the post.",
        type: "object",
        properties: {
          protected: {
            description: "Whether the excerpt is protected with a password.",
            type: "boolean",
          },
          raw: {
            description: "Excerpt for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML excerpt for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      featured_media: {
        description: "The ID of the featured media for the post.",
        type: "integer",
      },
      menu_order: {
        description: "The order of the post in relation to other posts.",
        type: "integer",
      },
      meta: {
        description: "Meta fields.",
        type: "object",
        properties: {
          footnotes: {
            default: "",
            type: "string",
          },
        },
        required: [],
      },
      parent: {
        description: "The ID for the parent of the post.",
        type: "integer",
      },
      password: {
        description: "A password to protect access to the content and excerpt.",
        type: "string",
      },
      ping_status: {
        description: "Whether or not the post can be pinged.",
        type: "string",
        enum: ["open", "closed"],
      },
      slug: {
        description: "An alphanumeric identifier for the post unique to its type.",
        type: "string",
      },
      status: {
        description: "A named status for the post.",
        type: "string",
        enum: ["publish", "future", "draft", "pending", "private"],
      },
      template: {
        description: "The theme file to use to display the post.",
        type: "string",
      },
      title: {
        description: "The title for the post.",
        type: "object",
        properties: {
          raw: {
            description: "Title for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML title for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
    },
    required: [],
  },
  PostWpV2PagesByIdAutosavesRequest: {
    type: "object",
    properties: {
      author: {
        description: "The ID for the author of the post.",
        type: "integer",
      },
      comment_status: {
        description: "Whether or not comments are open on the post.",
        type: "string",
        enum: ["open", "closed"],
      },
      content: {
        description: "The content for the post.",
        type: "object",
        properties: {
          block_version: {
            description: "Version of the content block format used by the post.",
            type: "integer",
          },
          protected: {
            description: "Whether the content is protected with a password.",
            type: "boolean",
          },
          raw: {
            description: "Content for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML content for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      date: {
        description: "The date the post was published, in the site's timezone.",
        nullable: true,
        type: "string",
      },
      date_gmt: {
        description: "The date the post was published, as GMT.",
        nullable: true,
        type: "string",
      },
      excerpt: {
        description: "The excerpt for the post.",
        type: "object",
        properties: {
          protected: {
            description: "Whether the excerpt is protected with a password.",
            type: "boolean",
          },
          raw: {
            description: "Excerpt for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML excerpt for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      featured_media: {
        description: "The ID of the featured media for the post.",
        type: "integer",
      },
      menu_order: {
        description: "The order of the post in relation to other posts.",
        type: "integer",
      },
      meta: {
        description: "Meta fields.",
        type: "object",
        properties: {
          footnotes: {
            default: "",
            type: "string",
          },
        },
        required: [],
      },
      parent: {
        description: "The ID for the parent of the post.",
        type: "integer",
      },
      password: {
        description: "A password to protect access to the content and excerpt.",
        type: "string",
      },
      ping_status: {
        description: "Whether or not the post can be pinged.",
        type: "string",
        enum: ["open", "closed"],
      },
      slug: {
        description: "An alphanumeric identifier for the post unique to its type.",
        type: "string",
      },
      status: {
        description: "A named status for the post.",
        type: "string",
        enum: ["publish", "future", "draft", "pending", "private"],
      },
      template: {
        description: "The theme file to use to display the post.",
        type: "string",
      },
      title: {
        description: "The title for the post.",
        type: "object",
        properties: {
          raw: {
            description: "Title for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML title for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
    },
    required: [],
  },
  GetWpV2PagesByParentRevisionsResponse: {
    type: "array",
    items: {
      type: "ref",
      ref: "page_revision2",
    },
  },
  GetWpV2PatternDirectoryPatternsResponse: {
    type: "array",
    items: {
      type: "ref",
      ref: "pattern_directory_item",
    },
  },
  PostWpV2PluginsRequest: {
    type: "object",
    properties: {
      slug: {
        description: "WordPress.org plugin directory slug.",
        type: "string",
        pattern: "[\\w\\-]+",
      },
      status: {
        description: "The plugin activation status.",
        default: "inactive",
        type: "string",
        enum: ["inactive", "active"],
      },
    },
    required: ["slug"],
  },
  GetWpV2PostsResponse: {
    type: "array",
    items: {
      type: "ref",
      ref: "post",
    },
  },
  PostWpV2PostsRequest: {
    type: "object",
    properties: {
      author: {
        description: "The ID for the author of the post.",
        type: "integer",
      },
      categories: {
        description: "The terms assigned to the post in the category taxonomy.",
        type: "array",
        items: {
          type: "integer",
        },
      },
      comment_status: {
        description: "Whether or not comments are open on the post.",
        type: "string",
        enum: ["open", "closed"],
      },
      content: {
        description: "The content for the post.",
        type: "object",
        properties: {
          block_version: {
            description: "Version of the content block format used by the post.",
            type: "integer",
          },
          protected: {
            description: "Whether the content is protected with a password.",
            type: "boolean",
          },
          raw: {
            description: "Content for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML content for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      date: {
        description: "The date the post was published, in the site's timezone.",
        nullable: true,
        type: "string",
      },
      date_gmt: {
        description: "The date the post was published, as GMT.",
        nullable: true,
        type: "string",
      },
      excerpt: {
        description: "The excerpt for the post.",
        type: "object",
        properties: {
          protected: {
            description: "Whether the excerpt is protected with a password.",
            type: "boolean",
          },
          raw: {
            description: "Excerpt for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML excerpt for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      featured_media: {
        description: "The ID of the featured media for the post.",
        type: "integer",
      },
      format: {
        description: "The format for the post.",
        type: "string",
        enum: ["standard", "aside", "chat", "gallery", "link", "image", "quote", "status", "video", "audio"],
      },
      meta: {
        description: "Meta fields.",
        type: "object",
        properties: {
          footnotes: {
            default: "",
            type: "string",
          },
        },
        required: [],
      },
      password: {
        description: "A password to protect access to the content and excerpt.",
        type: "string",
      },
      ping_status: {
        description: "Whether or not the post can be pinged.",
        type: "string",
        enum: ["open", "closed"],
      },
      slug: {
        description: "An alphanumeric identifier for the post unique to its type.",
        type: "string",
      },
      status: {
        description: "A named status for the post.",
        type: "string",
        enum: ["publish", "future", "draft", "pending", "private"],
      },
      sticky: {
        description: "Whether or not the post should be treated as sticky.",
        type: "boolean",
      },
      tags: {
        description: "The terms assigned to the post in the post_tag taxonomy.",
        type: "array",
        items: {
          type: "integer",
        },
      },
      template: {
        description: "The theme file to use to display the post.",
        type: "string",
      },
      title: {
        description: "The title for the post.",
        type: "object",
        properties: {
          raw: {
            description: "Title for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML title for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
    },
    required: [],
  },
  PostWpV2PostsByIdRequest: {
    type: "object",
    properties: {
      author: {
        description: "The ID for the author of the post.",
        type: "integer",
      },
      categories: {
        description: "The terms assigned to the post in the category taxonomy.",
        type: "array",
        items: {
          type: "integer",
        },
      },
      comment_status: {
        description: "Whether or not comments are open on the post.",
        type: "string",
        enum: ["open", "closed"],
      },
      content: {
        description: "The content for the post.",
        type: "object",
        properties: {
          block_version: {
            description: "Version of the content block format used by the post.",
            type: "integer",
          },
          protected: {
            description: "Whether the content is protected with a password.",
            type: "boolean",
          },
          raw: {
            description: "Content for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML content for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      date: {
        description: "The date the post was published, in the site's timezone.",
        nullable: true,
        type: "string",
      },
      date_gmt: {
        description: "The date the post was published, as GMT.",
        nullable: true,
        type: "string",
      },
      excerpt: {
        description: "The excerpt for the post.",
        type: "object",
        properties: {
          protected: {
            description: "Whether the excerpt is protected with a password.",
            type: "boolean",
          },
          raw: {
            description: "Excerpt for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML excerpt for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      featured_media: {
        description: "The ID of the featured media for the post.",
        type: "integer",
      },
      format: {
        description: "The format for the post.",
        type: "string",
        enum: ["standard", "aside", "chat", "gallery", "link", "image", "quote", "status", "video", "audio"],
      },
      meta: {
        description: "Meta fields.",
        type: "object",
        properties: {
          footnotes: {
            default: "",
            type: "string",
          },
        },
        required: [],
      },
      password: {
        description: "A password to protect access to the content and excerpt.",
        type: "string",
      },
      ping_status: {
        description: "Whether or not the post can be pinged.",
        type: "string",
        enum: ["open", "closed"],
      },
      slug: {
        description: "An alphanumeric identifier for the post unique to its type.",
        type: "string",
      },
      status: {
        description: "A named status for the post.",
        type: "string",
        enum: ["publish", "future", "draft", "pending", "private"],
      },
      sticky: {
        description: "Whether or not the post should be treated as sticky.",
        type: "boolean",
      },
      tags: {
        description: "The terms assigned to the post in the post_tag taxonomy.",
        type: "array",
        items: {
          type: "integer",
        },
      },
      template: {
        description: "The theme file to use to display the post.",
        type: "string",
      },
      title: {
        description: "The title for the post.",
        type: "object",
        properties: {
          raw: {
            description: "Title for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML title for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
    },
    required: [],
  },
  PostWpV2PostsByIdAutosavesRequest: {
    type: "object",
    properties: {
      author: {
        description: "The ID for the author of the post.",
        type: "integer",
      },
      categories: {
        description: "The terms assigned to the post in the category taxonomy.",
        type: "array",
        items: {
          type: "integer",
        },
      },
      comment_status: {
        description: "Whether or not comments are open on the post.",
        type: "string",
        enum: ["open", "closed"],
      },
      content: {
        description: "The content for the post.",
        type: "object",
        properties: {
          block_version: {
            description: "Version of the content block format used by the post.",
            type: "integer",
          },
          protected: {
            description: "Whether the content is protected with a password.",
            type: "boolean",
          },
          raw: {
            description: "Content for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML content for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      date: {
        description: "The date the post was published, in the site's timezone.",
        nullable: true,
        type: "string",
      },
      date_gmt: {
        description: "The date the post was published, as GMT.",
        nullable: true,
        type: "string",
      },
      excerpt: {
        description: "The excerpt for the post.",
        type: "object",
        properties: {
          protected: {
            description: "Whether the excerpt is protected with a password.",
            type: "boolean",
          },
          raw: {
            description: "Excerpt for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML excerpt for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
      featured_media: {
        description: "The ID of the featured media for the post.",
        type: "integer",
      },
      format: {
        description: "The format for the post.",
        type: "string",
        enum: ["standard", "aside", "chat", "gallery", "link", "image", "quote", "status", "video", "audio"],
      },
      meta: {
        description: "Meta fields.",
        type: "object",
        properties: {
          footnotes: {
            default: "",
            type: "string",
          },
        },
        required: [],
      },
      parent: {
        description: "The ID for the parent of the autosave.",
        type: "integer",
      },
      password: {
        description: "A password to protect access to the content and excerpt.",
        type: "string",
      },
      ping_status: {
        description: "Whether or not the post can be pinged.",
        type: "string",
        enum: ["open", "closed"],
      },
      slug: {
        description: "An alphanumeric identifier for the post unique to its type.",
        type: "string",
      },
      status: {
        description: "A named status for the post.",
        type: "string",
        enum: ["publish", "future", "draft", "pending", "private"],
      },
      sticky: {
        description: "Whether or not the post should be treated as sticky.",
        type: "boolean",
      },
      tags: {
        description: "The terms assigned to the post in the post_tag taxonomy.",
        type: "array",
        items: {
          type: "integer",
        },
      },
      template: {
        description: "The theme file to use to display the post.",
        type: "string",
      },
      title: {
        description: "The title for the post.",
        type: "object",
        properties: {
          raw: {
            description: "Title for the post, as it exists in the database.",
            type: "string",
          },
          rendered: {
            description: "HTML title for the post, transformed for display.",
            type: "string",
          },
        },
        required: [],
      },
    },
    required: [],
  },
  GetWpV2PostsByParentRevisionsResponse: {
    type: "array",
    items: {
      type: "ref",
      ref: "post_revision2",
    },
  },
  GetWpV2SearchResponse: {
    type: "array",
    items: {
      type: "ref",
      ref: "search_result",
    },
  },
  PostWpV2SettingsRequest: {
    type: "object",
    properties: {
      date_format: {
        description: "A date format for all date strings.",
        type: "string",
      },
      default_category: {
        description: "Default post category.",
        type: "integer",
      },
      default_comment_status: {
        description: "Allow people to submit comments on new posts.",
        type: "string",
        enum: ["open", "closed"],
      },
      default_ping_status: {
        description: "Allow link notifications from other blogs (pingbacks and trackbacks) on new articles.",
        type: "string",
        enum: ["open", "closed"],
      },
      default_post_format: {
        description: "Default post format.",
        type: "string",
      },
      description: {
        description: "Site tagline.",
        type: "string",
      },
      email: {
        description: "This address is used for admin purposes, like new user notification.",
        type: "string",
      },
      language: {
        description: "WordPress locale code.",
        type: "string",
      },
      page_for_posts: {
        description: "The ID of the page that should display the latest posts",
        type: "integer",
      },
      page_on_front: {
        description: "The ID of the page that should be displayed on the front page",
        type: "integer",
      },
      posts_per_page: {
        description: "Blog pages show at most.",
        type: "integer",
      },
      show_on_front: {
        description: "What to show on the front page",
        type: "string",
      },
      site_icon: {
        description: "Site icon.",
        type: "integer",
      },
      site_logo: {
        description: "Site logo.",
        type: "integer",
      },
      start_of_week: {
        description: "A day number of the week that the week should start on.",
        type: "integer",
      },
      time_format: {
        description: "A time format for all time strings.",
        type: "string",
      },
      timezone: {
        description: "A city in the same timezone as you.",
        type: "string",
      },
      title: {
        description: "Site title.",
        type: "string",
      },
      url: {
        description: "Site URL.",
        type: "string",
      },
      use_smilies: {
        description: "Convert emoticons like :-) and :-P to graphics on display.",
        type: "boolean",
      },
    },
    required: [],
  },
  PostWpV2SidebarsByIdRequest: {
    type: "object",
    properties: {
      widgets: {
        description: "Nested widgets.",
        type: "array",
        items: {
          type: "union",
          of: [
            {
              type: "object",
              properties: {},
              required: [],
            },
            {
              type: "string",
            },
          ],
        },
      },
    },
    required: [],
  },
  GetWpV2TagsResponse: {
    type: "array",
    items: {
      type: "ref",
      ref: "tag",
    },
  },
  PostWpV2TagsRequest: {
    type: "object",
    properties: {
      description: {
        description: "HTML description of the term.",
        type: "string",
      },
      meta: {
        description: "Meta fields.",
        type: "object",
        properties: {},
        required: [],
      },
      name: {
        description: "HTML title for the term.",
        type: "string",
      },
      slug: {
        description: "An alphanumeric identifier for the term unique to its type.",
        type: "string",
      },
    },
    required: ["name"],
  },
  PostWpV2TagsByIdRequest: {
    type: "object",
    properties: {
      description: {
        description: "HTML description of the term.",
        type: "string",
      },
      meta: {
        description: "Meta fields.",
        type: "object",
        properties: {},
        required: [],
      },
      name: {
        description: "HTML title for the term.",
        type: "string",
      },
      slug: {
        description: "An alphanumeric identifier for the term unique to its type.",
        type: "string",
      },
    },
    required: [],
  },
  PostWpV2TemplatePartsRequest: {
    type: "object",
    properties: {
      area: {
        description: "Where the template part is intended for use (header, footer, etc.)",
        type: "string",
      },
      author: {
        description: "The ID for the author of the template.",
        type: "integer",
      },
      content: {
        description: "Content of template.",
        default: "",
        type: "union",
        of: [
          {
            type: "object",
            properties: {
              block_version: {
                description: "Version of the content block format used by the template.",
                type: "integer",
              },
              raw: {
                description: "Content for the template, as it exists in the database.",
                type: "string",
              },
            },
            required: [],
          },
          {
            type: "string",
          },
        ],
      },
      description: {
        description: "Description of template.",
        default: "",
        type: "string",
      },
      slug: {
        description: "Unique slug identifying the template.",
        type: "string",
        minLength: 1,
        pattern: "[a-zA-Z0-9_\\%-]+",
      },
      status: {
        description: "Status of template.",
        default: "publish",
        type: "string",
        enum: ["publish", "future", "draft", "pending", "private"],
      },
      theme: {
        description: "Theme identifier for the template.",
        type: "string",
      },
      title: {
        description: "Title of template.",
        default: "",
        type: "union",
        of: [
          {
            type: "object",
            properties: {
              raw: {
                description: "Title for the template, as it exists in the database.",
                type: "string",
              },
              rendered: {
                description: "HTML title for the template, transformed for display.",
                type: "string",
              },
            },
            required: [],
          },
          {
            type: "string",
          },
        ],
      },
      type: {
        description: "Type of template.",
        type: "string",
      },
    },
    required: ["slug"],
  },
  PostWpV2TemplatesRequest: {
    type: "object",
    properties: {
      author: {
        description: "The ID for the author of the template.",
        type: "integer",
      },
      content: {
        description: "Content of template.",
        default: "",
        type: "union",
        of: [
          {
            type: "object",
            properties: {
              block_version: {
                description: "Version of the content block format used by the template.",
                type: "integer",
              },
              raw: {
                description: "Content for the template, as it exists in the database.",
                type: "string",
              },
            },
            required: [],
          },
          {
            type: "string",
          },
        ],
      },
      description: {
        description: "Description of template.",
        default: "",
        type: "string",
      },
      slug: {
        description: "Unique slug identifying the template.",
        type: "string",
        minLength: 1,
        pattern: "[a-zA-Z0-9_\\%-]+",
      },
      status: {
        description: "Status of template.",
        default: "publish",
        type: "string",
        enum: ["publish", "future", "draft", "pending", "private"],
      },
      theme: {
        description: "Theme identifier for the template.",
        type: "string",
      },
      title: {
        description: "Title of template.",
        default: "",
        type: "union",
        of: [
          {
            type: "object",
            properties: {
              raw: {
                description: "Title for the template, as it exists in the database.",
                type: "string",
              },
              rendered: {
                description: "HTML title for the template, transformed for display.",
                type: "string",
              },
            },
            required: [],
          },
          {
            type: "string",
          },
        ],
      },
      type: {
        description: "Type of template.",
        type: "string",
      },
    },
    required: ["slug"],
  },
  GetWpV2UsersResponse: {
    type: "array",
    items: {
      type: "ref",
      ref: "user",
    },
  },
  PostWpV2UsersRequest: {
    type: "object",
    properties: {
      description: {
        description: "Description of the user.",
        type: "string",
      },
      email: {
        description: "The email address for the user.",
        type: "string",
      },
      first_name: {
        description: "First name for the user.",
        type: "string",
      },
      last_name: {
        description: "Last name for the user.",
        type: "string",
      },
      locale: {
        description: "Locale for the user.",
        type: "string",
        enum: ["", "en_US"],
      },
      meta: {
        description: "Meta fields.",
        type: "object",
        properties: {
          persisted_preferences: {
            default: [],
            type: "object",
            properties: {
              _modified: {
                description: "The date and time the preferences were updated.",
                type: "string",
              },
            },
            required: [],
            additionalProperties: {
              type: "unknown",
            },
          },
        },
        required: [],
      },
      name: {
        description: "Display name for the user.",
        type: "string",
      },
      nickname: {
        description: "The nickname for the user.",
        type: "string",
      },
      password: {
        description: "Password for the user (never included).",
        type: "string",
      },
      roles: {
        description: "Roles assigned to the user.",
        type: "array",
        items: {
          type: "string",
        },
      },
      slug: {
        description: "An alphanumeric identifier for the user.",
        type: "string",
      },
      url: {
        description: "URL of the user.",
        type: "string",
      },
      username: {
        description: "Login name for the user.",
        type: "string",
      },
    },
    required: ["email", "password", "username"],
  },
  PostWpV2UsersByIdRequest: {
    type: "object",
    properties: {
      description: {
        description: "Description of the user.",
        type: "string",
      },
      email: {
        description: "The email address for the user.",
        type: "string",
      },
      first_name: {
        description: "First name for the user.",
        type: "string",
      },
      last_name: {
        description: "Last name for the user.",
        type: "string",
      },
      locale: {
        description: "Locale for the user.",
        type: "string",
        enum: ["", "en_US"],
      },
      meta: {
        description: "Meta fields.",
        type: "object",
        properties: {
          persisted_preferences: {
            default: [],
            type: "object",
            properties: {
              _modified: {
                description: "The date and time the preferences were updated.",
                type: "string",
              },
            },
            required: [],
            additionalProperties: {
              type: "unknown",
            },
          },
        },
        required: [],
      },
      name: {
        description: "Display name for the user.",
        type: "string",
      },
      nickname: {
        description: "The nickname for the user.",
        type: "string",
      },
      password: {
        description: "Password for the user (never included).",
        type: "string",
      },
      roles: {
        description: "Roles assigned to the user.",
        type: "array",
        items: {
          type: "string",
        },
      },
      slug: {
        description: "An alphanumeric identifier for the user.",
        type: "string",
      },
      url: {
        description: "URL of the user.",
        type: "string",
      },
      username: {
        description: "Login name for the user.",
        type: "string",
      },
    },
    required: [],
  },
  PostWpV2UsersByUserIdApplicationPasswordsRequest: {
    type: "object",
    properties: {
      app_id: {
        description:
          "A UUID provided by the application to uniquely identify it. It is recommended to use an UUID v5 with the URL or DNS namespace.",
        type: "union",
        of: [
          {
            type: "string",
          },
          {
            type: "string",
            enum: [""],
          },
        ],
      },
      name: {
        description: "The name of the application password.",
        type: "string",
        minLength: 1,
        pattern: ".*\\S.*",
      },
    },
    required: ["name"],
  },
  PostWpV2UsersByUserIdApplicationPasswordsByUuidRequest: {
    type: "object",
    properties: {
      app_id: {
        description:
          "A UUID provided by the application to uniquely identify it. It is recommended to use an UUID v5 with the URL or DNS namespace.",
        type: "union",
        of: [
          {
            type: "string",
          },
          {
            type: "string",
            enum: [""],
          },
        ],
      },
      name: {
        description: "The name of the application password.",
        type: "string",
        minLength: 1,
        pattern: ".*\\S.*",
      },
    },
    required: [],
  },
  PostWpV2UsersMeRequest: {
    type: "object",
    properties: {
      description: {
        description: "Description of the user.",
        type: "string",
      },
      email: {
        description: "The email address for the user.",
        type: "string",
      },
      first_name: {
        description: "First name for the user.",
        type: "string",
      },
      last_name: {
        description: "Last name for the user.",
        type: "string",
      },
      locale: {
        description: "Locale for the user.",
        type: "string",
        enum: ["", "en_US"],
      },
      meta: {
        description: "Meta fields.",
        type: "object",
        properties: {
          persisted_preferences: {
            default: [],
            type: "object",
            properties: {
              _modified: {
                description: "The date and time the preferences were updated.",
                type: "string",
              },
            },
            required: [],
            additionalProperties: {
              type: "unknown",
            },
          },
        },
        required: [],
      },
      name: {
        description: "Display name for the user.",
        type: "string",
      },
      nickname: {
        description: "The nickname for the user.",
        type: "string",
      },
      password: {
        description: "Password for the user (never included).",
        type: "string",
      },
      roles: {
        description: "Roles assigned to the user.",
        type: "array",
        items: {
          type: "string",
        },
      },
      slug: {
        description: "An alphanumeric identifier for the user.",
        type: "string",
      },
      url: {
        description: "URL of the user.",
        type: "string",
      },
      username: {
        description: "Login name for the user.",
        type: "string",
      },
    },
    required: [],
  },
  PostWpV2WidgetTypesByIdEncodeRequest: {
    type: "object",
    properties: {
      form_data: {
        description: "Serialized widget form data to encode into instance settings.",
        type: "string",
      },
      instance: {
        description: "Current instance settings of the widget.",
        type: "object",
        properties: {},
        required: [],
      },
    },
    required: [],
  },
  PostWpV2WidgetTypesByIdRenderRequest: {
    type: "object",
    properties: {
      instance: {
        description: "Current instance settings of the widget.",
        type: "object",
        properties: {},
        required: [],
      },
    },
    required: [],
  },
  PostWpV2WidgetsRequest: {
    type: "object",
    properties: {
      form_data: {
        description:
          "URL-encoded form data from the widget admin form. Used to update a widget that does not support instance. Write only.",
        type: "string",
      },
      id: {
        description: "Unique identifier for the widget.",
        type: "string",
      },
      id_base: {
        description: "The type of the widget. Corresponds to ID in widget-types endpoint.",
        type: "string",
      },
      instance: {
        description: "Instance settings of the widget, if supported.",
        type: "object",
        properties: {
          encoded: {
            description: "Base64 encoded representation of the instance settings.",
            type: "string",
          },
          hash: {
            description: "Cryptographic hash of the instance settings.",
            type: "string",
          },
          raw: {
            description: "Unencoded instance settings, if supported.",
            type: "object",
            properties: {},
            required: [],
          },
        },
        required: [],
      },
      sidebar: {
        description: "The sidebar the widget belongs to.",
        default: "wp_inactive_widgets",
        type: "string",
      },
    },
    required: ["sidebar"],
  },
  PostWpV2WidgetsByIdRequest: {
    type: "object",
    properties: {
      form_data: {
        description:
          "URL-encoded form data from the widget admin form. Used to update a widget that does not support instance. Write only.",
        type: "string",
      },
      id_base: {
        description: "The type of the widget. Corresponds to ID in widget-types endpoint.",
        type: "string",
      },
      instance: {
        description: "Instance settings of the widget, if supported.",
        type: "object",
        properties: {
          encoded: {
            description: "Base64 encoded representation of the instance settings.",
            type: "string",
          },
          hash: {
            description: "Cryptographic hash of the instance settings.",
            type: "string",
          },
          raw: {
            description: "Unencoded instance settings, if supported.",
            type: "object",
            properties: {},
            required: [],
          },
        },
        required: [],
      },
      sidebar: {
        description: "The sidebar the widget belongs to.",
        type: "string",
      },
    },
    required: [],
  },
  GetWpV2WpPatternCategoryResponse: {
    type: "array",
    items: {
      type: "ref",
      ref: "wp_pattern_category",
    },
  },
  PostWpV2WpPatternCategoryRequest: {
    type: "object",
    properties: {
      description: {
        description: "HTML description of the term.",
        type: "string",
      },
      meta: {
        description: "Meta fields.",
        type: "object",
        properties: {},
        required: [],
      },
      name: {
        description: "HTML title for the term.",
        type: "string",
      },
      slug: {
        description: "An alphanumeric identifier for the term unique to its type.",
        type: "string",
      },
    },
    required: ["name"],
  },
  PostWpV2WpPatternCategoryByIdRequest: {
    type: "object",
    properties: {
      description: {
        description: "HTML description of the term.",
        type: "string",
      },
      meta: {
        description: "Meta fields.",
        type: "object",
        properties: {},
        required: [],
      },
      name: {
        description: "HTML title for the term.",
        type: "string",
      },
      slug: {
        description: "An alphanumeric identifier for the term unique to its type.",
        type: "string",
      },
    },
    required: [],
  },
}

// GENERATED. DO NOT EDIT.
// Source: spec/wordpress/, checked against provenance.json
// Run: pnpm generate

import type { ApiServer, ManifestOperation, SecurityRequirement, SecurityScheme } from "@wirecat/cli-base/codegen"

export const operations: readonly ManifestOperation[] = [
  {
    id: "getWpV2BlockDirectorySearch",
    command: "block-directory-search-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/block-directory/search",
    },
    effect: "read",
    tags: ["block-directory"],
    pagination: {
      style: "page",
      page: {
        in: "query",
        name: "page",
      },
      limit: {
        in: "query",
        name: "per_page",
      },
      items: "",
      start: 1,
      pagesHeader: "x-wp-totalpages",
    },
    parameters: [
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
      {
        name: "page",
        in: "query",
        required: false,
        schema: {
          description: "Current page of the collection.",
          default: 1,
          type: "integer",
          minimum: 1,
        },
        description: "Current page of the collection.",
      },
      {
        name: "per_page",
        in: "query",
        required: false,
        schema: {
          description: "Maximum number of items to be returned in result set.",
          default: 10,
          type: "integer",
          minimum: 1,
          maximum: 100,
        },
        description: "Maximum number of items to be returned in result set.",
      },
      {
        name: "term",
        in: "query",
        required: true,
        schema: {
          description: "Limit result set to blocks matching the search term.",
          type: "string",
          minLength: 1,
        },
        description: "Limit result set to blocks matching the search term.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetWpV2BlockDirectorySearchResponse",
    },
  },
  {
    id: "getWpV2BlockPatternsCategories",
    command: "block-patterns-categories-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/block-patterns/categories",
    },
    effect: "read",
    tags: ["block-patterns"],
    parameters: [],
    response: {
      confidence: "contract",
      schema: "BlockPatternCategory",
    },
  },
  {
    id: "getWpV2BlockPatternsPatterns",
    command: "block-patterns-patterns-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/block-patterns/patterns",
    },
    effect: "read",
    tags: ["block-patterns"],
    parameters: [],
    response: {
      confidence: "contract",
      schema: "BlockPattern",
    },
  },
  {
    id: "getWpV2BlockTypes",
    command: "block-types-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/block-types",
    },
    effect: "read",
    tags: ["block-types"],
    parameters: [
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
      {
        name: "namespace",
        in: "query",
        required: false,
        schema: {
          description: "Block namespace.",
          type: "string",
        },
        description: "Block namespace.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "BlockType",
    },
  },
  {
    id: "getWpV2BlockTypesByNamespace",
    command: "block-types-list-namespace",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/block-types/{namespace}",
    },
    effect: "read",
    tags: ["block-types"],
    parameters: [
      {
        name: "namespace",
        in: "path",
        required: true,
        schema: {
          description: "Block namespace.",
          type: "string",
        },
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "BlockType",
    },
  },
  {
    id: "getWpV2BlockTypesByNamespaceByName",
    command: "block-types-get",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/block-types/{namespace}/{name}",
    },
    effect: "read",
    tags: ["block-types"],
    parameters: [
      {
        name: "namespace",
        in: "path",
        required: true,
        schema: {
          description: "Block namespace.",
          type: "string",
        },
      },
      {
        name: "name",
        in: "path",
        required: true,
        schema: {
          description: "Block name.",
          type: "string",
        },
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "BlockType",
    },
  },
  {
    id: "getWpV2Blocks",
    command: "blocks-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/blocks",
    },
    effect: "read",
    tags: ["blocks"],
    pagination: {
      style: "page",
      page: {
        in: "query",
        name: "page",
      },
      limit: {
        in: "query",
        name: "per_page",
      },
      items: "",
      start: 1,
      pagesHeader: "x-wp-totalpages",
    },
    parameters: [
      {
        name: "after",
        in: "query",
        required: false,
        schema: {
          description: "Limit response to posts published after a given ISO8601 compliant date.",
          type: "string",
        },
        description: "Limit response to posts published after a given ISO8601 compliant date.",
      },
      {
        name: "before",
        in: "query",
        required: false,
        schema: {
          description: "Limit response to posts published before a given ISO8601 compliant date.",
          type: "string",
        },
        description: "Limit response to posts published before a given ISO8601 compliant date.",
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
      {
        name: "exclude",
        in: "query",
        required: false,
        schema: {
          description: "Ensure result set excludes specific IDs.; several, comma-separated",
          type: "string",
        },
        description: "Ensure result set excludes specific IDs.",
      },
      {
        name: "include",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to specific IDs.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to specific IDs.",
      },
      {
        name: "modified_after",
        in: "query",
        required: false,
        schema: {
          description: "Limit response to posts modified after a given ISO8601 compliant date.",
          type: "string",
        },
        description: "Limit response to posts modified after a given ISO8601 compliant date.",
      },
      {
        name: "modified_before",
        in: "query",
        required: false,
        schema: {
          description: "Limit response to posts modified before a given ISO8601 compliant date.",
          type: "string",
        },
        description: "Limit response to posts modified before a given ISO8601 compliant date.",
      },
      {
        name: "offset",
        in: "query",
        required: false,
        schema: {
          description: "Offset the result set by a specific number of items.",
          type: "integer",
        },
        description: "Offset the result set by a specific number of items.",
      },
      {
        name: "order",
        in: "query",
        required: false,
        schema: {
          description: "Order sort attribute ascending or descending.",
          default: "desc",
          type: "string",
          enum: ["asc", "desc"],
        },
        description: "Order sort attribute ascending or descending.",
      },
      {
        name: "orderby",
        in: "query",
        required: false,
        schema: {
          description: "Sort collection by post attribute.",
          default: "date",
          type: "string",
          enum: [
            "author",
            "date",
            "id",
            "include",
            "modified",
            "parent",
            "relevance",
            "slug",
            "include_slugs",
            "title",
          ],
        },
        description: "Sort collection by post attribute.",
      },
      {
        name: "page",
        in: "query",
        required: false,
        schema: {
          description: "Current page of the collection.",
          default: 1,
          type: "integer",
          minimum: 1,
        },
        description: "Current page of the collection.",
      },
      {
        name: "per_page",
        in: "query",
        required: false,
        schema: {
          description: "Maximum number of items to be returned in result set.",
          default: 10,
          type: "integer",
          minimum: 1,
          maximum: 100,
        },
        description: "Maximum number of items to be returned in result set.",
      },
      {
        name: "search",
        in: "query",
        required: false,
        schema: {
          description: "Limit results to those matching a string.",
          type: "string",
        },
        description: "Limit results to those matching a string.",
      },
      {
        name: "search_columns",
        in: "query",
        required: false,
        schema: {
          description: "Array of column names to be searched.; several, comma-separated",
          type: "string",
        },
        description: "Array of column names to be searched.",
      },
      {
        name: "search_semantics",
        in: "query",
        required: false,
        schema: {
          description: "How to interpret the search input.",
          type: "string",
          enum: ["exact"],
        },
        description: "How to interpret the search input.",
      },
      {
        name: "slug",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to posts with one or more specific slugs.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to posts with one or more specific slugs.",
      },
      {
        name: "status",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to posts assigned one or more statuses.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to posts assigned one or more statuses.",
      },
      {
        name: "tax_relation",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set based on relationship between multiple taxonomies.",
          type: "string",
          enum: ["AND", "OR"],
        },
        description: "Limit result set based on relationship between multiple taxonomies.",
      },
      {
        name: "wp_pattern_category",
        in: "query",
        required: false,
        schema: {
          description:
            "Limit result set to items with specific terms assigned in the wp_pattern_category taxonomy.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to items with specific terms assigned in the wp_pattern_category taxonomy.",
      },
      {
        name: "wp_pattern_category_exclude",
        in: "query",
        required: false,
        schema: {
          description:
            "Limit result set to items except those with specific terms assigned in the wp_pattern_category taxonomy.; several, comma-separated",
          type: "string",
        },
        description:
          "Limit result set to items except those with specific terms assigned in the wp_pattern_category taxonomy.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetWpV2BlocksResponse",
    },
  },
  {
    id: "postWpV2Blocks",
    command: "blocks-create",
    binding: {
      kind: "http",
      method: "POST",
      path: "/wp/v2/blocks",
    },
    effect: "write",
    tags: ["blocks"],
    permissions: [
      {
        key: "blocks.publish",
        values: {
          status: ["publish", "future"],
        },
        body: ["date", "date_gmt", "password"],
        unless: {
          status: ["draft", "pending", "private"],
        },
      },
    ],
    parameters: [],
    request: {
      required: false,
      confidence: "contract",
      schema: "PostWpV2BlocksRequest",
    },
    response: {
      confidence: "contract",
      schema: "WpBlock",
    },
  },
  {
    id: "getWpV2BlocksById",
    command: "blocks-get",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/blocks/{id}",
    },
    effect: "read",
    tags: ["blocks"],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "Unique identifier for the post.",
          type: "integer",
        },
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
      {
        name: "excerpt_length",
        in: "query",
        required: false,
        schema: {
          description: "Override the default excerpt length.",
          type: "integer",
        },
        description: "Override the default excerpt length.",
      },
      {
        name: "password",
        in: "query",
        required: false,
        schema: {
          description: "The password for the post if it is password protected.",
          type: "string",
        },
        description: "The password for the post if it is password protected.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "WpBlock",
    },
  },
  {
    id: "postWpV2BlocksById",
    command: "blocks-update",
    binding: {
      kind: "http",
      method: "POST",
      path: "/wp/v2/blocks/{id}",
    },
    effect: "write",
    tags: ["blocks"],
    permissions: [
      {
        key: "blocks.publish",
        values: {
          status: ["publish", "future"],
        },
        body: ["date", "date_gmt", "password"],
        unless: {
          status: ["draft", "pending", "private"],
        },
      },
    ],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "Unique identifier for the post.",
          type: "integer",
        },
      },
    ],
    request: {
      required: false,
      confidence: "contract",
      schema: "PostWpV2BlocksByIdRequest",
    },
    response: {
      confidence: "contract",
      schema: "WpBlock",
    },
  },
  {
    id: "deleteWpV2BlocksById",
    command: "blocks-delete",
    binding: {
      kind: "http",
      method: "DELETE",
      path: "/wp/v2/blocks/{id}",
    },
    effect: "destructive",
    tags: ["blocks"],
    permissions: [
      {
        key: "blocks.delete",
      },
      {
        key: "blocks.delete.force",
        query: ["force"],
      },
    ],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "Unique identifier for the post.",
          type: "integer",
        },
      },
      {
        name: "force",
        in: "query",
        required: false,
        schema: {
          description: "Whether to bypass Trash and force deletion.",
          default: false,
          type: "boolean",
        },
        description: "Whether to bypass Trash and force deletion.",
      },
    ],
  },
  {
    id: "getWpV2BlocksByIdAutosaves",
    command: "blocks-autosaves-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/blocks/{id}/autosaves",
    },
    effect: "read",
    tags: ["blocks"],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          type: "string",
          pattern: "^(?:[\\d]+)$",
        },
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
      {
        name: "parent",
        in: "query",
        required: false,
        schema: {
          description: "The ID for the parent of the autosave.",
          type: "integer",
        },
        description: "The ID for the parent of the autosave.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "WpBlockRevision",
    },
  },
  {
    id: "postWpV2BlocksByIdAutosaves",
    command: "blocks-autosaves-create",
    binding: {
      kind: "http",
      method: "POST",
      path: "/wp/v2/blocks/{id}/autosaves",
    },
    effect: "write",
    tags: ["blocks"],
    permissions: [
      {
        key: "blocks.publish",
        values: {
          status: ["publish", "future"],
        },
        body: ["date", "date_gmt", "password"],
        unless: {
          status: ["draft", "pending", "private"],
        },
      },
    ],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          type: "string",
          pattern: "^(?:[\\d]+)$",
        },
      },
    ],
    request: {
      required: false,
      confidence: "contract",
      schema: "PostWpV2BlocksByIdAutosavesRequest",
    },
    response: {
      confidence: "contract",
      schema: "WpBlockRevision",
    },
  },
  {
    id: "getWpV2BlocksByParentAutosavesById",
    command: "blocks-autosaves-get",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/blocks/{parent}/autosaves/{id}",
    },
    effect: "read",
    tags: ["blocks"],
    parameters: [
      {
        name: "parent",
        in: "path",
        required: true,
        schema: {
          description: "The ID for the parent of the autosave.",
          type: "integer",
        },
      },
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "The ID for the autosave.",
          type: "integer",
        },
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "WpBlockRevision",
    },
  },
  {
    id: "getWpV2BlocksByParentRevisions",
    command: "blocks-revisions-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/blocks/{parent}/revisions",
    },
    effect: "read",
    tags: ["blocks"],
    pagination: {
      style: "page",
      page: {
        in: "query",
        name: "page",
      },
      limit: {
        in: "query",
        name: "per_page",
      },
      items: "",
      start: 1,
      pagesHeader: "x-wp-totalpages",
    },
    parameters: [
      {
        name: "parent",
        in: "path",
        required: true,
        schema: {
          description: "The ID for the parent of the revision.",
          type: "integer",
        },
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
      {
        name: "exclude",
        in: "query",
        required: false,
        schema: {
          description: "Ensure result set excludes specific IDs.; several, comma-separated",
          type: "string",
        },
        description: "Ensure result set excludes specific IDs.",
      },
      {
        name: "include",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to specific IDs.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to specific IDs.",
      },
      {
        name: "offset",
        in: "query",
        required: false,
        schema: {
          description: "Offset the result set by a specific number of items.",
          type: "integer",
        },
        description: "Offset the result set by a specific number of items.",
      },
      {
        name: "order",
        in: "query",
        required: false,
        schema: {
          description: "Order sort attribute ascending or descending.",
          default: "desc",
          type: "string",
          enum: ["asc", "desc"],
        },
        description: "Order sort attribute ascending or descending.",
      },
      {
        name: "orderby",
        in: "query",
        required: false,
        schema: {
          description: "Sort collection by object attribute.",
          default: "date",
          type: "string",
          enum: ["date", "id", "include", "relevance", "slug", "include_slugs", "title"],
        },
        description: "Sort collection by object attribute.",
      },
      {
        name: "page",
        in: "query",
        required: false,
        schema: {
          description: "Current page of the collection.",
          default: 1,
          type: "integer",
          minimum: 1,
        },
        description: "Current page of the collection.",
      },
      {
        name: "per_page",
        in: "query",
        required: false,
        schema: {
          description: "Maximum number of items to be returned in result set.",
          type: "integer",
          minimum: 1,
          maximum: 100,
        },
        description: "Maximum number of items to be returned in result set.",
      },
      {
        name: "search",
        in: "query",
        required: false,
        schema: {
          description: "Limit results to those matching a string.",
          type: "string",
        },
        description: "Limit results to those matching a string.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetWpV2BlocksByParentRevisionsResponse",
    },
  },
  {
    id: "getWpV2BlocksByParentRevisionsById",
    command: "blocks-revisions-get",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/blocks/{parent}/revisions/{id}",
    },
    effect: "read",
    tags: ["blocks"],
    parameters: [
      {
        name: "parent",
        in: "path",
        required: true,
        schema: {
          description: "The ID for the parent of the revision.",
          type: "integer",
        },
      },
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "Unique identifier for the revision.",
          type: "integer",
        },
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "WpBlockRevision2",
    },
  },
  {
    id: "deleteWpV2BlocksByParentRevisionsById",
    command: "blocks-revisions-delete",
    binding: {
      kind: "http",
      method: "DELETE",
      path: "/wp/v2/blocks/{parent}/revisions/{id}",
    },
    effect: "destructive",
    tags: ["blocks"],
    permissions: [
      {
        key: "blocks.delete",
      },
      {
        key: "blocks.delete.force",
        query: ["force"],
      },
    ],
    parameters: [
      {
        name: "parent",
        in: "path",
        required: true,
        schema: {
          description: "The ID for the parent of the revision.",
          type: "integer",
        },
      },
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "Unique identifier for the revision.",
          type: "integer",
        },
      },
      {
        name: "force",
        in: "query",
        required: false,
        schema: {
          description: "Required to be true, as revisions do not support trashing.",
          default: false,
          type: "boolean",
        },
        description: "Required to be true, as revisions do not support trashing.",
      },
    ],
  },
  {
    id: "getWpV2Categories",
    command: "categories-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/categories",
    },
    effect: "read",
    tags: ["categories"],
    pagination: {
      style: "page",
      page: {
        in: "query",
        name: "page",
      },
      limit: {
        in: "query",
        name: "per_page",
      },
      items: "",
      start: 1,
      pagesHeader: "x-wp-totalpages",
    },
    parameters: [
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
      {
        name: "exclude",
        in: "query",
        required: false,
        schema: {
          description: "Ensure result set excludes specific IDs.; several, comma-separated",
          type: "string",
        },
        description: "Ensure result set excludes specific IDs.",
      },
      {
        name: "hide_empty",
        in: "query",
        required: false,
        schema: {
          description: "Whether to hide terms not assigned to any posts.",
          default: false,
          type: "boolean",
        },
        description: "Whether to hide terms not assigned to any posts.",
      },
      {
        name: "include",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to specific IDs.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to specific IDs.",
      },
      {
        name: "order",
        in: "query",
        required: false,
        schema: {
          description: "Order sort attribute ascending or descending.",
          default: "asc",
          type: "string",
          enum: ["asc", "desc"],
        },
        description: "Order sort attribute ascending or descending.",
      },
      {
        name: "orderby",
        in: "query",
        required: false,
        schema: {
          description: "Sort collection by term attribute.",
          default: "name",
          type: "string",
          enum: ["id", "include", "name", "slug", "include_slugs", "term_group", "description", "count"],
        },
        description: "Sort collection by term attribute.",
      },
      {
        name: "page",
        in: "query",
        required: false,
        schema: {
          description: "Current page of the collection.",
          default: 1,
          type: "integer",
          minimum: 1,
        },
        description: "Current page of the collection.",
      },
      {
        name: "parent",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to terms assigned to a specific parent.",
          type: "integer",
        },
        description: "Limit result set to terms assigned to a specific parent.",
      },
      {
        name: "per_page",
        in: "query",
        required: false,
        schema: {
          description: "Maximum number of items to be returned in result set.",
          default: 10,
          type: "integer",
          minimum: 1,
          maximum: 100,
        },
        description: "Maximum number of items to be returned in result set.",
      },
      {
        name: "post",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to terms assigned to a specific post.",
          default: null,
          type: "integer",
        },
        description: "Limit result set to terms assigned to a specific post.",
      },
      {
        name: "search",
        in: "query",
        required: false,
        schema: {
          description: "Limit results to those matching a string.",
          type: "string",
        },
        description: "Limit results to those matching a string.",
      },
      {
        name: "slug",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to terms with one or more specific slugs.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to terms with one or more specific slugs.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetWpV2CategoriesResponse",
    },
  },
  {
    id: "postWpV2Categories",
    command: "categories-create",
    binding: {
      kind: "http",
      method: "POST",
      path: "/wp/v2/categories",
    },
    effect: "write",
    tags: ["categories"],
    parameters: [],
    request: {
      required: true,
      confidence: "contract",
      schema: "PostWpV2CategoriesRequest",
    },
    response: {
      confidence: "contract",
      schema: "Category",
    },
  },
  {
    id: "getWpV2CategoriesById",
    command: "categories-get",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/categories/{id}",
    },
    effect: "read",
    tags: ["categories"],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "Unique identifier for the term.",
          type: "integer",
        },
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "Category",
    },
  },
  {
    id: "postWpV2CategoriesById",
    command: "categories-update",
    binding: {
      kind: "http",
      method: "POST",
      path: "/wp/v2/categories/{id}",
    },
    effect: "write",
    tags: ["categories"],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "Unique identifier for the term.",
          type: "integer",
        },
      },
    ],
    request: {
      required: false,
      confidence: "contract",
      schema: "PostWpV2CategoriesByIdRequest",
    },
    response: {
      confidence: "contract",
      schema: "Category",
    },
  },
  {
    id: "deleteWpV2CategoriesById",
    command: "categories-delete",
    binding: {
      kind: "http",
      method: "DELETE",
      path: "/wp/v2/categories/{id}",
    },
    effect: "destructive",
    tags: ["categories"],
    permissions: [
      {
        key: "categories.delete",
      },
      {
        key: "categories.delete.force",
        query: ["force"],
      },
    ],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "Unique identifier for the term.",
          type: "integer",
        },
      },
      {
        name: "force",
        in: "query",
        required: false,
        schema: {
          description: "Required to be true, as terms do not support trashing.",
          default: false,
          type: "boolean",
        },
        description: "Required to be true, as terms do not support trashing.",
      },
    ],
  },
  {
    id: "getWpV2Comments",
    command: "comments-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/comments",
    },
    effect: "read",
    tags: ["comments"],
    pagination: {
      style: "page",
      page: {
        in: "query",
        name: "page",
      },
      limit: {
        in: "query",
        name: "per_page",
      },
      items: "",
      start: 1,
      pagesHeader: "x-wp-totalpages",
    },
    parameters: [
      {
        name: "after",
        in: "query",
        required: false,
        schema: {
          description: "Limit response to comments published after a given ISO8601 compliant date.",
          type: "string",
        },
        description: "Limit response to comments published after a given ISO8601 compliant date.",
      },
      {
        name: "author",
        in: "query",
        required: false,
        schema: {
          description:
            "Limit result set to comments assigned to specific user IDs. Requires authorization.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to comments assigned to specific user IDs. Requires authorization.",
      },
      {
        name: "author_email",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to that from a specific author email. Requires authorization.",
          default: null,
          type: "string",
        },
        description: "Limit result set to that from a specific author email. Requires authorization.",
      },
      {
        name: "author_exclude",
        in: "query",
        required: false,
        schema: {
          description:
            "Ensure result set excludes comments assigned to specific user IDs. Requires authorization.; several, comma-separated",
          type: "string",
        },
        description: "Ensure result set excludes comments assigned to specific user IDs. Requires authorization.",
      },
      {
        name: "before",
        in: "query",
        required: false,
        schema: {
          description: "Limit response to comments published before a given ISO8601 compliant date.",
          type: "string",
        },
        description: "Limit response to comments published before a given ISO8601 compliant date.",
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
      {
        name: "exclude",
        in: "query",
        required: false,
        schema: {
          description: "Ensure result set excludes specific IDs.; several, comma-separated",
          type: "string",
        },
        description: "Ensure result set excludes specific IDs.",
      },
      {
        name: "include",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to specific IDs.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to specific IDs.",
      },
      {
        name: "offset",
        in: "query",
        required: false,
        schema: {
          description: "Offset the result set by a specific number of items.",
          type: "integer",
        },
        description: "Offset the result set by a specific number of items.",
      },
      {
        name: "order",
        in: "query",
        required: false,
        schema: {
          description: "Order sort attribute ascending or descending.",
          default: "desc",
          type: "string",
          enum: ["asc", "desc"],
        },
        description: "Order sort attribute ascending or descending.",
      },
      {
        name: "orderby",
        in: "query",
        required: false,
        schema: {
          description: "Sort collection by comment attribute.",
          default: "date_gmt",
          type: "string",
          enum: ["date", "date_gmt", "id", "include", "post", "parent", "type"],
        },
        description: "Sort collection by comment attribute.",
      },
      {
        name: "page",
        in: "query",
        required: false,
        schema: {
          description: "Current page of the collection.",
          default: 1,
          type: "integer",
          minimum: 1,
        },
        description: "Current page of the collection.",
      },
      {
        name: "parent",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to comments of specific parent IDs.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to comments of specific parent IDs.",
      },
      {
        name: "parent_exclude",
        in: "query",
        required: false,
        schema: {
          description: "Ensure result set excludes specific parent IDs.; several, comma-separated",
          type: "string",
        },
        description: "Ensure result set excludes specific parent IDs.",
      },
      {
        name: "password",
        in: "query",
        required: false,
        schema: {
          description: "The password for the post if it is password protected.",
          type: "string",
        },
        description: "The password for the post if it is password protected.",
      },
      {
        name: "per_page",
        in: "query",
        required: false,
        schema: {
          description: "Maximum number of items to be returned in result set.",
          default: 10,
          type: "integer",
          minimum: 1,
          maximum: 100,
        },
        description: "Maximum number of items to be returned in result set.",
      },
      {
        name: "post",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to comments assigned to specific post IDs.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to comments assigned to specific post IDs.",
      },
      {
        name: "search",
        in: "query",
        required: false,
        schema: {
          description: "Limit results to those matching a string.",
          type: "string",
        },
        description: "Limit results to those matching a string.",
      },
      {
        name: "status",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to comments assigned a specific status. Requires authorization.",
          default: "approve",
          type: "string",
        },
        description: "Limit result set to comments assigned a specific status. Requires authorization.",
      },
      {
        name: "type",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to comments assigned a specific type. Requires authorization.",
          default: "comment",
          type: "string",
        },
        description: "Limit result set to comments assigned a specific type. Requires authorization.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetWpV2CommentsResponse",
    },
  },
  {
    id: "postWpV2Comments",
    command: "comments-create",
    binding: {
      kind: "http",
      method: "POST",
      path: "/wp/v2/comments",
    },
    effect: "write",
    tags: ["comments"],
    parameters: [],
    request: {
      required: false,
      confidence: "contract",
      schema: "PostWpV2CommentsRequest",
    },
    response: {
      confidence: "contract",
      schema: "Comment",
    },
  },
  {
    id: "getWpV2CommentsById",
    command: "comments-get",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/comments/{id}",
    },
    effect: "read",
    tags: ["comments"],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "Unique identifier for the comment.",
          type: "integer",
        },
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
      {
        name: "password",
        in: "query",
        required: false,
        schema: {
          description: "The password for the parent post of the comment (if the post is password protected).",
          type: "string",
        },
        description: "The password for the parent post of the comment (if the post is password protected).",
      },
    ],
    response: {
      confidence: "contract",
      schema: "Comment",
    },
  },
  {
    id: "postWpV2CommentsById",
    command: "comments-update",
    binding: {
      kind: "http",
      method: "POST",
      path: "/wp/v2/comments/{id}",
    },
    effect: "write",
    tags: ["comments"],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "Unique identifier for the comment.",
          type: "integer",
        },
      },
    ],
    request: {
      required: false,
      confidence: "contract",
      schema: "PostWpV2CommentsByIdRequest",
    },
    response: {
      confidence: "contract",
      schema: "Comment",
    },
  },
  {
    id: "deleteWpV2CommentsById",
    command: "comments-delete",
    binding: {
      kind: "http",
      method: "DELETE",
      path: "/wp/v2/comments/{id}",
    },
    effect: "destructive",
    tags: ["comments"],
    permissions: [
      {
        key: "comments.delete",
      },
      {
        key: "comments.delete.force",
        query: ["force"],
      },
    ],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "Unique identifier for the comment.",
          type: "integer",
        },
      },
      {
        name: "force",
        in: "query",
        required: false,
        schema: {
          description: "Whether to bypass Trash and force deletion.",
          default: false,
          type: "boolean",
        },
        description: "Whether to bypass Trash and force deletion.",
      },
      {
        name: "password",
        in: "query",
        required: false,
        schema: {
          description: "The password for the parent post of the comment (if the post is password protected).",
          type: "string",
        },
        description: "The password for the parent post of the comment (if the post is password protected).",
      },
    ],
  },
  {
    id: "getWpV2FontCollections",
    command: "font-collections-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/font-collections",
    },
    effect: "read",
    tags: ["font-collections"],
    pagination: {
      style: "page",
      page: {
        in: "query",
        name: "page",
      },
      limit: {
        in: "query",
        name: "per_page",
      },
      items: "",
      start: 1,
      pagesHeader: "x-wp-totalpages",
    },
    parameters: [
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
      {
        name: "page",
        in: "query",
        required: false,
        schema: {
          description: "Current page of the collection.",
          default: 1,
          type: "integer",
          minimum: 1,
        },
        description: "Current page of the collection.",
      },
      {
        name: "per_page",
        in: "query",
        required: false,
        schema: {
          description: "Maximum number of items to be returned in result set.",
          default: 10,
          type: "integer",
          minimum: 1,
          maximum: 100,
        },
        description: "Maximum number of items to be returned in result set.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetWpV2FontCollectionsResponse",
    },
  },
  {
    id: "getWpV2FontFamilies",
    command: "font-families-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/font-families",
    },
    effect: "read",
    tags: ["font-families"],
    pagination: {
      style: "page",
      page: {
        in: "query",
        name: "page",
      },
      limit: {
        in: "query",
        name: "per_page",
      },
      items: "",
      start: 1,
      pagesHeader: "x-wp-totalpages",
    },
    parameters: [
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
      {
        name: "exclude",
        in: "query",
        required: false,
        schema: {
          description: "Ensure result set excludes specific IDs.; several, comma-separated",
          type: "string",
        },
        description: "Ensure result set excludes specific IDs.",
      },
      {
        name: "include",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to specific IDs.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to specific IDs.",
      },
      {
        name: "offset",
        in: "query",
        required: false,
        schema: {
          description: "Offset the result set by a specific number of items.",
          type: "integer",
        },
        description: "Offset the result set by a specific number of items.",
      },
      {
        name: "order",
        in: "query",
        required: false,
        schema: {
          description: "Order sort attribute ascending or descending.",
          default: "desc",
          type: "string",
          enum: ["asc", "desc"],
        },
        description: "Order sort attribute ascending or descending.",
      },
      {
        name: "orderby",
        in: "query",
        required: false,
        schema: {
          description: "Sort collection by post attribute.",
          default: "id",
          type: "string",
          enum: ["id", "include"],
        },
        description: "Sort collection by post attribute.",
      },
      {
        name: "page",
        in: "query",
        required: false,
        schema: {
          description: "Current page of the collection.",
          default: 1,
          type: "integer",
          minimum: 1,
        },
        description: "Current page of the collection.",
      },
      {
        name: "per_page",
        in: "query",
        required: false,
        schema: {
          description: "Maximum number of items to be returned in result set.",
          default: 10,
          type: "integer",
          minimum: 1,
          maximum: 100,
        },
        description: "Maximum number of items to be returned in result set.",
      },
      {
        name: "search_semantics",
        in: "query",
        required: false,
        schema: {
          description: "How to interpret the search input.",
          type: "string",
          enum: ["exact"],
        },
        description: "How to interpret the search input.",
      },
      {
        name: "slug",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to posts with one or more specific slugs.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to posts with one or more specific slugs.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetWpV2FontFamiliesResponse",
    },
  },
  {
    id: "postWpV2FontFamilies",
    command: "font-families-create",
    binding: {
      kind: "http",
      method: "POST",
      path: "/wp/v2/font-families",
    },
    effect: "write",
    tags: ["font-families"],
    parameters: [],
    request: {
      required: true,
      confidence: "contract",
      schema: "PostWpV2FontFamiliesRequest",
    },
    response: {
      confidence: "contract",
      schema: "WpFontFamily",
    },
  },
  {
    id: "getWpV2FontFamiliesByFontFamilyIdFontFaces",
    command: "font-families-font-faces-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/font-families/{font_family_id}/font-faces",
    },
    effect: "read",
    tags: ["font-families"],
    pagination: {
      style: "page",
      page: {
        in: "query",
        name: "page",
      },
      limit: {
        in: "query",
        name: "per_page",
      },
      items: "",
      start: 1,
      pagesHeader: "x-wp-totalpages",
    },
    parameters: [
      {
        name: "font_family_id",
        in: "path",
        required: true,
        schema: {
          description: "The ID for the parent font family of the font face.",
          type: "integer",
        },
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
      {
        name: "exclude",
        in: "query",
        required: false,
        schema: {
          description: "Ensure result set excludes specific IDs.; several, comma-separated",
          type: "string",
        },
        description: "Ensure result set excludes specific IDs.",
      },
      {
        name: "include",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to specific IDs.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to specific IDs.",
      },
      {
        name: "offset",
        in: "query",
        required: false,
        schema: {
          description: "Offset the result set by a specific number of items.",
          type: "integer",
        },
        description: "Offset the result set by a specific number of items.",
      },
      {
        name: "order",
        in: "query",
        required: false,
        schema: {
          description: "Order sort attribute ascending or descending.",
          default: "desc",
          type: "string",
          enum: ["asc", "desc"],
        },
        description: "Order sort attribute ascending or descending.",
      },
      {
        name: "orderby",
        in: "query",
        required: false,
        schema: {
          description: "Sort collection by post attribute.",
          default: "id",
          type: "string",
          enum: ["id", "include"],
        },
        description: "Sort collection by post attribute.",
      },
      {
        name: "page",
        in: "query",
        required: false,
        schema: {
          description: "Current page of the collection.",
          default: 1,
          type: "integer",
          minimum: 1,
        },
        description: "Current page of the collection.",
      },
      {
        name: "per_page",
        in: "query",
        required: false,
        schema: {
          description: "Maximum number of items to be returned in result set.",
          default: 10,
          type: "integer",
          minimum: 1,
          maximum: 100,
        },
        description: "Maximum number of items to be returned in result set.",
      },
      {
        name: "search_semantics",
        in: "query",
        required: false,
        schema: {
          description: "How to interpret the search input.",
          type: "string",
          enum: ["exact"],
        },
        description: "How to interpret the search input.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetWpV2FontFamiliesByFontFamilyIdFontFacesResponse",
    },
  },
  {
    id: "postWpV2FontFamiliesByFontFamilyIdFontFaces",
    command: "font-families-font-faces-create",
    binding: {
      kind: "http",
      method: "POST",
      path: "/wp/v2/font-families/{font_family_id}/font-faces",
    },
    effect: "write",
    tags: ["font-families"],
    parameters: [
      {
        name: "font_family_id",
        in: "path",
        required: true,
        schema: {
          description: "The ID for the parent font family of the font face.",
          type: "integer",
        },
      },
    ],
    request: {
      required: true,
      confidence: "contract",
      schema: "PostWpV2FontFamiliesByFontFamilyIdFontFacesRequest",
    },
    response: {
      confidence: "contract",
      schema: "WpFontFace",
    },
  },
  {
    id: "getWpV2FontFamiliesByFontFamilyIdFontFacesById",
    command: "font-families-font-faces-get",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/font-families/{font_family_id}/font-faces/{id}",
    },
    effect: "read",
    tags: ["font-families"],
    parameters: [
      {
        name: "font_family_id",
        in: "path",
        required: true,
        schema: {
          description: "The ID for the parent font family of the font face.",
          type: "integer",
        },
      },
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "Unique identifier for the font face.",
          type: "integer",
        },
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "WpFontFace",
    },
  },
  {
    id: "deleteWpV2FontFamiliesByFontFamilyIdFontFacesById",
    command: "font-families-font-faces-delete",
    binding: {
      kind: "http",
      method: "DELETE",
      path: "/wp/v2/font-families/{font_family_id}/font-faces/{id}",
    },
    effect: "destructive",
    tags: ["font-families"],
    permissions: [
      {
        key: "font-families.delete",
      },
      {
        key: "font-families.delete.force",
        query: ["force"],
      },
    ],
    parameters: [
      {
        name: "font_family_id",
        in: "path",
        required: true,
        schema: {
          description: "The ID for the parent font family of the font face.",
          type: "integer",
        },
      },
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "Unique identifier for the font face.",
          type: "integer",
        },
      },
      {
        name: "force",
        in: "query",
        required: false,
        schema: {
          description: "Whether to bypass Trash and force deletion.",
          default: false,
          type: "boolean",
        },
        description: "Whether to bypass Trash and force deletion.",
      },
    ],
  },
  {
    id: "getWpV2FontFamiliesById",
    command: "font-families-get",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/font-families/{id}",
    },
    effect: "read",
    tags: ["font-families"],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "Unique identifier for the post.",
          type: "integer",
        },
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "WpFontFamily",
    },
  },
  {
    id: "postWpV2FontFamiliesById",
    command: "font-families-update",
    binding: {
      kind: "http",
      method: "POST",
      path: "/wp/v2/font-families/{id}",
    },
    effect: "write",
    tags: ["font-families"],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "Unique identifier for the post.",
          type: "integer",
        },
      },
    ],
    request: {
      required: true,
      confidence: "contract",
      schema: "PostWpV2FontFamiliesByIdRequest",
    },
    response: {
      confidence: "contract",
      schema: "WpFontFamily",
    },
  },
  {
    id: "deleteWpV2FontFamiliesById",
    command: "font-families-delete",
    binding: {
      kind: "http",
      method: "DELETE",
      path: "/wp/v2/font-families/{id}",
    },
    effect: "destructive",
    tags: ["font-families"],
    permissions: [
      {
        key: "font-families.delete",
      },
      {
        key: "font-families.delete.force",
        query: ["force"],
      },
    ],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "Unique identifier for the post.",
          type: "integer",
        },
      },
      {
        name: "force",
        in: "query",
        required: false,
        schema: {
          description: "Whether to bypass Trash and force deletion.",
          default: false,
          type: "boolean",
        },
        description: "Whether to bypass Trash and force deletion.",
      },
    ],
  },
  {
    id: "getWpV2GlobalStylesByParentRevisions",
    command: "global-styles-revisions-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/global-styles/{parent}/revisions",
    },
    effect: "read",
    tags: ["global-styles"],
    pagination: {
      style: "page",
      page: {
        in: "query",
        name: "page",
      },
      limit: {
        in: "query",
        name: "per_page",
      },
      items: "",
      start: 1,
      pagesHeader: "x-wp-totalpages",
    },
    parameters: [
      {
        name: "parent",
        in: "path",
        required: true,
        schema: {
          description: "The ID for the parent of the revision.",
          type: "integer",
        },
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
      {
        name: "offset",
        in: "query",
        required: false,
        schema: {
          description: "Offset the result set by a specific number of items.",
          type: "integer",
        },
        description: "Offset the result set by a specific number of items.",
      },
      {
        name: "page",
        in: "query",
        required: false,
        schema: {
          description: "Current page of the collection.",
          default: 1,
          type: "integer",
          minimum: 1,
        },
        description: "Current page of the collection.",
      },
      {
        name: "per_page",
        in: "query",
        required: false,
        schema: {
          description: "Maximum number of items to be returned in result set.",
          type: "integer",
          minimum: 1,
          maximum: 100,
        },
        description: "Maximum number of items to be returned in result set.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetWpV2GlobalStylesByParentRevisionsResponse",
    },
  },
  {
    id: "getWpV2GlobalStylesByParentRevisionsById",
    command: "global-styles-revisions-get",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/global-styles/{parent}/revisions/{id}",
    },
    effect: "read",
    tags: ["global-styles"],
    parameters: [
      {
        name: "parent",
        in: "path",
        required: true,
        schema: {
          description: "The ID for the parent of the global styles revision.",
          type: "integer",
        },
      },
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "Unique identifier for the global styles revision.",
          type: "integer",
        },
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "WpGlobalStylesRevision",
    },
  },
  {
    id: "getWpV2Media",
    command: "media-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/media",
    },
    effect: "read",
    tags: ["media"],
    pagination: {
      style: "page",
      page: {
        in: "query",
        name: "page",
      },
      limit: {
        in: "query",
        name: "per_page",
      },
      items: "",
      start: 1,
      pagesHeader: "x-wp-totalpages",
    },
    parameters: [
      {
        name: "after",
        in: "query",
        required: false,
        schema: {
          description: "Limit response to posts published after a given ISO8601 compliant date.",
          type: "string",
        },
        description: "Limit response to posts published after a given ISO8601 compliant date.",
      },
      {
        name: "author",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to posts assigned to specific authors.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to posts assigned to specific authors.",
      },
      {
        name: "author_exclude",
        in: "query",
        required: false,
        schema: {
          description: "Ensure result set excludes posts assigned to specific authors.; several, comma-separated",
          type: "string",
        },
        description: "Ensure result set excludes posts assigned to specific authors.",
      },
      {
        name: "before",
        in: "query",
        required: false,
        schema: {
          description: "Limit response to posts published before a given ISO8601 compliant date.",
          type: "string",
        },
        description: "Limit response to posts published before a given ISO8601 compliant date.",
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
      {
        name: "exclude",
        in: "query",
        required: false,
        schema: {
          description: "Ensure result set excludes specific IDs.; several, comma-separated",
          type: "string",
        },
        description: "Ensure result set excludes specific IDs.",
      },
      {
        name: "include",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to specific IDs.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to specific IDs.",
      },
      {
        name: "media_type",
        in: "query",
        required: false,
        schema: {
          description:
            "Limit result set to attachments of a particular media type or media types.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to attachments of a particular media type or media types.",
      },
      {
        name: "mime_type",
        in: "query",
        required: false,
        schema: {
          description:
            "Limit result set to attachments of a particular MIME type or MIME types.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to attachments of a particular MIME type or MIME types.",
      },
      {
        name: "modified_after",
        in: "query",
        required: false,
        schema: {
          description: "Limit response to posts modified after a given ISO8601 compliant date.",
          type: "string",
        },
        description: "Limit response to posts modified after a given ISO8601 compliant date.",
      },
      {
        name: "modified_before",
        in: "query",
        required: false,
        schema: {
          description: "Limit response to posts modified before a given ISO8601 compliant date.",
          type: "string",
        },
        description: "Limit response to posts modified before a given ISO8601 compliant date.",
      },
      {
        name: "offset",
        in: "query",
        required: false,
        schema: {
          description: "Offset the result set by a specific number of items.",
          type: "integer",
        },
        description: "Offset the result set by a specific number of items.",
      },
      {
        name: "order",
        in: "query",
        required: false,
        schema: {
          description: "Order sort attribute ascending or descending.",
          default: "desc",
          type: "string",
          enum: ["asc", "desc"],
        },
        description: "Order sort attribute ascending or descending.",
      },
      {
        name: "orderby",
        in: "query",
        required: false,
        schema: {
          description: "Sort collection by post attribute.",
          default: "date",
          type: "string",
          enum: [
            "author",
            "date",
            "id",
            "include",
            "modified",
            "parent",
            "relevance",
            "slug",
            "include_slugs",
            "title",
          ],
        },
        description: "Sort collection by post attribute.",
      },
      {
        name: "page",
        in: "query",
        required: false,
        schema: {
          description: "Current page of the collection.",
          default: 1,
          type: "integer",
          minimum: 1,
        },
        description: "Current page of the collection.",
      },
      {
        name: "parent",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to items with particular parent IDs.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to items with particular parent IDs.",
      },
      {
        name: "parent_exclude",
        in: "query",
        required: false,
        schema: {
          description:
            "Limit result set to all items except those of a particular parent ID.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to all items except those of a particular parent ID.",
      },
      {
        name: "per_page",
        in: "query",
        required: false,
        schema: {
          description: "Maximum number of items to be returned in result set.",
          default: 10,
          type: "integer",
          minimum: 1,
          maximum: 100,
        },
        description: "Maximum number of items to be returned in result set.",
      },
      {
        name: "search",
        in: "query",
        required: false,
        schema: {
          description: "Limit results to those matching a string.",
          type: "string",
        },
        description: "Limit results to those matching a string.",
      },
      {
        name: "search_columns",
        in: "query",
        required: false,
        schema: {
          description: "Array of column names to be searched.; several, comma-separated",
          type: "string",
        },
        description: "Array of column names to be searched.",
      },
      {
        name: "search_semantics",
        in: "query",
        required: false,
        schema: {
          description: "How to interpret the search input.",
          type: "string",
          enum: ["exact"],
        },
        description: "How to interpret the search input.",
      },
      {
        name: "slug",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to posts with one or more specific slugs.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to posts with one or more specific slugs.",
      },
      {
        name: "status",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to posts assigned one or more statuses.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to posts assigned one or more statuses.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetWpV2MediaResponse",
    },
  },
  {
    id: "postWpV2Media",
    command: "media-create",
    binding: {
      kind: "http",
      method: "POST",
      path: "/wp/v2/media",
    },
    effect: "write",
    tags: ["media"],
    permissions: [
      {
        key: "media.publish",
        values: {
          status: ["publish", "future"],
        },
        body: ["date", "date_gmt"],
        unless: {
          status: ["draft", "pending", "private"],
        },
      },
    ],
    parameters: [],
    request: {
      required: false,
      confidence: "contract",
      schema: "PostWpV2MediaRequest",
    },
    response: {
      confidence: "contract",
      schema: "Attachment",
    },
  },
  {
    id: "getWpV2MediaById",
    command: "media-get",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/media/{id}",
    },
    effect: "read",
    tags: ["media"],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "Unique identifier for the post.",
          type: "integer",
        },
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "Attachment",
    },
  },
  {
    id: "postWpV2MediaById",
    command: "media-update",
    binding: {
      kind: "http",
      method: "POST",
      path: "/wp/v2/media/{id}",
    },
    effect: "write",
    tags: ["media"],
    permissions: [
      {
        key: "media.publish",
        values: {
          status: ["publish", "future"],
        },
        body: ["date", "date_gmt"],
        unless: {
          status: ["draft", "pending", "private"],
        },
      },
    ],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "Unique identifier for the post.",
          type: "integer",
        },
      },
    ],
    request: {
      required: false,
      confidence: "contract",
      schema: "PostWpV2MediaByIdRequest",
    },
    response: {
      confidence: "contract",
      schema: "Attachment",
    },
  },
  {
    id: "deleteWpV2MediaById",
    command: "media-delete",
    binding: {
      kind: "http",
      method: "DELETE",
      path: "/wp/v2/media/{id}",
    },
    effect: "destructive",
    tags: ["media"],
    permissions: [
      {
        key: "media.delete",
      },
      {
        key: "media.delete.force",
        query: ["force"],
      },
    ],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "Unique identifier for the post.",
          type: "integer",
        },
      },
      {
        name: "force",
        in: "query",
        required: false,
        schema: {
          description: "Whether to bypass Trash and force deletion.",
          default: false,
          type: "boolean",
        },
        description: "Whether to bypass Trash and force deletion.",
      },
    ],
  },
  {
    id: "postWpV2MediaByIdEdit",
    command: "media-edit",
    binding: {
      kind: "http",
      method: "POST",
      path: "/wp/v2/media/{id}/edit",
    },
    effect: "write",
    tags: ["media"],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          type: "string",
          pattern: "^(?:[\\d]+)$",
        },
      },
    ],
    request: {
      required: true,
      confidence: "contract",
      schema: "PostWpV2MediaByIdEditRequest",
    },
  },
  {
    id: "postWpV2MediaByIdPostProcess",
    command: "media-post-process",
    binding: {
      kind: "http",
      method: "POST",
      path: "/wp/v2/media/{id}/post-process",
    },
    effect: "write",
    tags: ["media"],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "Unique identifier for the attachment.",
          type: "integer",
        },
      },
    ],
    request: {
      required: true,
      confidence: "contract",
      schema: "PostWpV2MediaByIdPostProcessRequest",
    },
  },
  {
    id: "getWpV2MenuItems",
    command: "menu-items-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/menu-items",
    },
    effect: "read",
    tags: ["menu-items"],
    pagination: {
      style: "page",
      page: {
        in: "query",
        name: "page",
      },
      limit: {
        in: "query",
        name: "per_page",
      },
      items: "",
      start: 1,
      pagesHeader: "x-wp-totalpages",
    },
    parameters: [
      {
        name: "after",
        in: "query",
        required: false,
        schema: {
          description: "Limit response to posts published after a given ISO8601 compliant date.",
          type: "string",
        },
        description: "Limit response to posts published after a given ISO8601 compliant date.",
      },
      {
        name: "before",
        in: "query",
        required: false,
        schema: {
          description: "Limit response to posts published before a given ISO8601 compliant date.",
          type: "string",
        },
        description: "Limit response to posts published before a given ISO8601 compliant date.",
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
      {
        name: "exclude",
        in: "query",
        required: false,
        schema: {
          description: "Ensure result set excludes specific IDs.; several, comma-separated",
          type: "string",
        },
        description: "Ensure result set excludes specific IDs.",
      },
      {
        name: "include",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to specific IDs.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to specific IDs.",
      },
      {
        name: "menu_order",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to posts with a specific menu_order value.",
          type: "integer",
        },
        description: "Limit result set to posts with a specific menu_order value.",
      },
      {
        name: "menus",
        in: "query",
        required: false,
        schema: {
          description:
            "Limit result set to items with specific terms assigned in the menus taxonomy.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to items with specific terms assigned in the menus taxonomy.",
      },
      {
        name: "menus_exclude",
        in: "query",
        required: false,
        schema: {
          description:
            "Limit result set to items except those with specific terms assigned in the menus taxonomy.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to items except those with specific terms assigned in the menus taxonomy.",
      },
      {
        name: "modified_after",
        in: "query",
        required: false,
        schema: {
          description: "Limit response to posts modified after a given ISO8601 compliant date.",
          type: "string",
        },
        description: "Limit response to posts modified after a given ISO8601 compliant date.",
      },
      {
        name: "modified_before",
        in: "query",
        required: false,
        schema: {
          description: "Limit response to posts modified before a given ISO8601 compliant date.",
          type: "string",
        },
        description: "Limit response to posts modified before a given ISO8601 compliant date.",
      },
      {
        name: "offset",
        in: "query",
        required: false,
        schema: {
          description: "Offset the result set by a specific number of items.",
          type: "integer",
        },
        description: "Offset the result set by a specific number of items.",
      },
      {
        name: "order",
        in: "query",
        required: false,
        schema: {
          description: "Order sort attribute ascending or descending.",
          default: "asc",
          type: "string",
          enum: ["asc", "desc"],
        },
        description: "Order sort attribute ascending or descending.",
      },
      {
        name: "orderby",
        in: "query",
        required: false,
        schema: {
          description: "Sort collection by object attribute.",
          default: "menu_order",
          type: "string",
          enum: [
            "author",
            "date",
            "id",
            "include",
            "modified",
            "parent",
            "relevance",
            "slug",
            "include_slugs",
            "title",
            "menu_order",
          ],
        },
        description: "Sort collection by object attribute.",
      },
      {
        name: "page",
        in: "query",
        required: false,
        schema: {
          description: "Current page of the collection.",
          default: 1,
          type: "integer",
          minimum: 1,
        },
        description: "Current page of the collection.",
      },
      {
        name: "per_page",
        in: "query",
        required: false,
        schema: {
          description: "Maximum number of items to be returned in result set.",
          default: 100,
          type: "integer",
          minimum: 1,
          maximum: 100,
        },
        description: "Maximum number of items to be returned in result set.",
      },
      {
        name: "search",
        in: "query",
        required: false,
        schema: {
          description: "Limit results to those matching a string.",
          type: "string",
        },
        description: "Limit results to those matching a string.",
      },
      {
        name: "search_columns",
        in: "query",
        required: false,
        schema: {
          description: "Array of column names to be searched.; several, comma-separated",
          type: "string",
        },
        description: "Array of column names to be searched.",
      },
      {
        name: "search_semantics",
        in: "query",
        required: false,
        schema: {
          description: "How to interpret the search input.",
          type: "string",
          enum: ["exact"],
        },
        description: "How to interpret the search input.",
      },
      {
        name: "slug",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to posts with one or more specific slugs.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to posts with one or more specific slugs.",
      },
      {
        name: "status",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to posts assigned one or more statuses.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to posts assigned one or more statuses.",
      },
      {
        name: "tax_relation",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set based on relationship between multiple taxonomies.",
          type: "string",
          enum: ["AND", "OR"],
        },
        description: "Limit result set based on relationship between multiple taxonomies.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetWpV2MenuItemsResponse",
    },
  },
  {
    id: "postWpV2MenuItems",
    command: "menu-items-create",
    binding: {
      kind: "http",
      method: "POST",
      path: "/wp/v2/menu-items",
    },
    effect: "write",
    tags: ["menu-items"],
    permissions: [
      {
        key: "menu-items.publish",
      },
    ],
    parameters: [],
    request: {
      required: false,
      confidence: "contract",
      schema: "PostWpV2MenuItemsRequest",
    },
    response: {
      confidence: "contract",
      schema: "NavMenuItem",
    },
  },
  {
    id: "getWpV2MenuItemsById",
    command: "menu-items-get",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/menu-items/{id}",
    },
    effect: "read",
    tags: ["menu-items"],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "Unique identifier for the post.",
          type: "integer",
        },
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "NavMenuItem",
    },
  },
  {
    id: "postWpV2MenuItemsById",
    command: "menu-items-update",
    binding: {
      kind: "http",
      method: "POST",
      path: "/wp/v2/menu-items/{id}",
    },
    effect: "write",
    tags: ["menu-items"],
    permissions: [
      {
        key: "menu-items.publish",
        values: {
          status: ["publish", "future"],
        },
      },
    ],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "Unique identifier for the post.",
          type: "integer",
        },
      },
    ],
    request: {
      required: false,
      confidence: "contract",
      schema: "PostWpV2MenuItemsByIdRequest",
    },
    response: {
      confidence: "contract",
      schema: "NavMenuItem",
    },
  },
  {
    id: "deleteWpV2MenuItemsById",
    command: "menu-items-delete",
    binding: {
      kind: "http",
      method: "DELETE",
      path: "/wp/v2/menu-items/{id}",
    },
    effect: "destructive",
    tags: ["menu-items"],
    permissions: [
      {
        key: "menu-items.delete",
      },
      {
        key: "menu-items.delete.force",
        query: ["force"],
      },
    ],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "Unique identifier for the post.",
          type: "integer",
        },
      },
      {
        name: "force",
        in: "query",
        required: false,
        schema: {
          description: "Whether to bypass Trash and force deletion.",
          default: false,
          type: "boolean",
        },
        description: "Whether to bypass Trash and force deletion.",
      },
    ],
  },
  {
    id: "getWpV2MenuItemsByIdAutosaves",
    command: "menu-items-autosaves-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/menu-items/{id}/autosaves",
    },
    effect: "read",
    tags: ["menu-items"],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          type: "string",
          pattern: "^(?:[\\d]+)$",
        },
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
      {
        name: "parent",
        in: "query",
        required: false,
        schema: {
          description: "The ID for the parent of the autosave.",
          type: "integer",
        },
        description: "The ID for the parent of the autosave.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "NavMenuItemRevision",
    },
  },
  {
    id: "postWpV2MenuItemsByIdAutosaves",
    command: "menu-items-autosaves-create",
    binding: {
      kind: "http",
      method: "POST",
      path: "/wp/v2/menu-items/{id}/autosaves",
    },
    effect: "write",
    tags: ["menu-items"],
    permissions: [
      {
        key: "menu-items.publish",
        values: {
          status: ["publish", "future"],
        },
      },
    ],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          type: "string",
          pattern: "^(?:[\\d]+)$",
        },
      },
    ],
    request: {
      required: false,
      confidence: "contract",
      schema: "PostWpV2MenuItemsByIdAutosavesRequest",
    },
    response: {
      confidence: "contract",
      schema: "NavMenuItemRevision",
    },
  },
  {
    id: "getWpV2MenuItemsByParentAutosavesById",
    command: "menu-items-autosaves-get",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/menu-items/{parent}/autosaves/{id}",
    },
    effect: "read",
    tags: ["menu-items"],
    parameters: [
      {
        name: "parent",
        in: "path",
        required: true,
        schema: {
          description: "The ID for the parent of the autosave.",
          type: "integer",
        },
      },
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "The ID for the autosave.",
          type: "integer",
        },
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "NavMenuItemRevision",
    },
  },
  {
    id: "getWpV2MenuLocations",
    command: "menu-locations-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/menu-locations",
    },
    effect: "read",
    tags: ["menu-locations"],
    parameters: [
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "MenuLocation",
    },
  },
  {
    id: "getWpV2MenuLocationsByLocation",
    command: "menu-locations-get",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/menu-locations/{location}",
    },
    effect: "read",
    tags: ["menu-locations"],
    parameters: [
      {
        name: "location",
        in: "path",
        required: true,
        schema: {
          description: "An alphanumeric identifier for the menu location.",
          type: "string",
        },
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "MenuLocation",
    },
  },
  {
    id: "getWpV2Menus",
    command: "menus-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/menus",
    },
    effect: "read",
    tags: ["menus"],
    pagination: {
      style: "page",
      page: {
        in: "query",
        name: "page",
      },
      limit: {
        in: "query",
        name: "per_page",
      },
      items: "",
      start: 1,
      pagesHeader: "x-wp-totalpages",
    },
    parameters: [
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
      {
        name: "exclude",
        in: "query",
        required: false,
        schema: {
          description: "Ensure result set excludes specific IDs.; several, comma-separated",
          type: "string",
        },
        description: "Ensure result set excludes specific IDs.",
      },
      {
        name: "hide_empty",
        in: "query",
        required: false,
        schema: {
          description: "Whether to hide terms not assigned to any posts.",
          default: false,
          type: "boolean",
        },
        description: "Whether to hide terms not assigned to any posts.",
      },
      {
        name: "include",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to specific IDs.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to specific IDs.",
      },
      {
        name: "offset",
        in: "query",
        required: false,
        schema: {
          description: "Offset the result set by a specific number of items.",
          type: "integer",
        },
        description: "Offset the result set by a specific number of items.",
      },
      {
        name: "order",
        in: "query",
        required: false,
        schema: {
          description: "Order sort attribute ascending or descending.",
          default: "asc",
          type: "string",
          enum: ["asc", "desc"],
        },
        description: "Order sort attribute ascending or descending.",
      },
      {
        name: "orderby",
        in: "query",
        required: false,
        schema: {
          description: "Sort collection by term attribute.",
          default: "name",
          type: "string",
          enum: ["id", "include", "name", "slug", "include_slugs", "term_group", "description", "count"],
        },
        description: "Sort collection by term attribute.",
      },
      {
        name: "page",
        in: "query",
        required: false,
        schema: {
          description: "Current page of the collection.",
          default: 1,
          type: "integer",
          minimum: 1,
        },
        description: "Current page of the collection.",
      },
      {
        name: "per_page",
        in: "query",
        required: false,
        schema: {
          description: "Maximum number of items to be returned in result set.",
          default: 10,
          type: "integer",
          minimum: 1,
          maximum: 100,
        },
        description: "Maximum number of items to be returned in result set.",
      },
      {
        name: "post",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to terms assigned to a specific post.",
          default: null,
          type: "integer",
        },
        description: "Limit result set to terms assigned to a specific post.",
      },
      {
        name: "search",
        in: "query",
        required: false,
        schema: {
          description: "Limit results to those matching a string.",
          type: "string",
        },
        description: "Limit results to those matching a string.",
      },
      {
        name: "slug",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to terms with one or more specific slugs.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to terms with one or more specific slugs.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetWpV2MenusResponse",
    },
  },
  {
    id: "postWpV2Menus",
    command: "menus-create",
    binding: {
      kind: "http",
      method: "POST",
      path: "/wp/v2/menus",
    },
    effect: "write",
    tags: ["menus"],
    parameters: [],
    request: {
      required: true,
      confidence: "contract",
      schema: "PostWpV2MenusRequest",
    },
    response: {
      confidence: "contract",
      schema: "NavMenu",
    },
  },
  {
    id: "getWpV2MenusById",
    command: "menus-get",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/menus/{id}",
    },
    effect: "read",
    tags: ["menus"],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "Unique identifier for the term.",
          type: "integer",
        },
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "NavMenu",
    },
  },
  {
    id: "postWpV2MenusById",
    command: "menus-update",
    binding: {
      kind: "http",
      method: "POST",
      path: "/wp/v2/menus/{id}",
    },
    effect: "write",
    tags: ["menus"],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "Unique identifier for the term.",
          type: "integer",
        },
      },
    ],
    request: {
      required: false,
      confidence: "contract",
      schema: "PostWpV2MenusByIdRequest",
    },
    response: {
      confidence: "contract",
      schema: "NavMenu",
    },
  },
  {
    id: "deleteWpV2MenusById",
    command: "menus-delete",
    binding: {
      kind: "http",
      method: "DELETE",
      path: "/wp/v2/menus/{id}",
    },
    effect: "destructive",
    tags: ["menus"],
    permissions: [
      {
        key: "menus.delete",
      },
      {
        key: "menus.delete.force",
        query: ["force"],
      },
    ],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "Unique identifier for the term.",
          type: "integer",
        },
      },
      {
        name: "force",
        in: "query",
        required: false,
        schema: {
          description: "Required to be true, as terms do not support trashing.",
          default: false,
          type: "boolean",
        },
        description: "Required to be true, as terms do not support trashing.",
      },
    ],
  },
  {
    id: "getWpV2Navigation",
    command: "navigation-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/navigation",
    },
    effect: "read",
    tags: ["navigation"],
    pagination: {
      style: "page",
      page: {
        in: "query",
        name: "page",
      },
      limit: {
        in: "query",
        name: "per_page",
      },
      items: "",
      start: 1,
      pagesHeader: "x-wp-totalpages",
    },
    parameters: [
      {
        name: "after",
        in: "query",
        required: false,
        schema: {
          description: "Limit response to posts published after a given ISO8601 compliant date.",
          type: "string",
        },
        description: "Limit response to posts published after a given ISO8601 compliant date.",
      },
      {
        name: "before",
        in: "query",
        required: false,
        schema: {
          description: "Limit response to posts published before a given ISO8601 compliant date.",
          type: "string",
        },
        description: "Limit response to posts published before a given ISO8601 compliant date.",
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
      {
        name: "exclude",
        in: "query",
        required: false,
        schema: {
          description: "Ensure result set excludes specific IDs.; several, comma-separated",
          type: "string",
        },
        description: "Ensure result set excludes specific IDs.",
      },
      {
        name: "include",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to specific IDs.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to specific IDs.",
      },
      {
        name: "modified_after",
        in: "query",
        required: false,
        schema: {
          description: "Limit response to posts modified after a given ISO8601 compliant date.",
          type: "string",
        },
        description: "Limit response to posts modified after a given ISO8601 compliant date.",
      },
      {
        name: "modified_before",
        in: "query",
        required: false,
        schema: {
          description: "Limit response to posts modified before a given ISO8601 compliant date.",
          type: "string",
        },
        description: "Limit response to posts modified before a given ISO8601 compliant date.",
      },
      {
        name: "offset",
        in: "query",
        required: false,
        schema: {
          description: "Offset the result set by a specific number of items.",
          type: "integer",
        },
        description: "Offset the result set by a specific number of items.",
      },
      {
        name: "order",
        in: "query",
        required: false,
        schema: {
          description: "Order sort attribute ascending or descending.",
          default: "desc",
          type: "string",
          enum: ["asc", "desc"],
        },
        description: "Order sort attribute ascending or descending.",
      },
      {
        name: "orderby",
        in: "query",
        required: false,
        schema: {
          description: "Sort collection by post attribute.",
          default: "date",
          type: "string",
          enum: [
            "author",
            "date",
            "id",
            "include",
            "modified",
            "parent",
            "relevance",
            "slug",
            "include_slugs",
            "title",
          ],
        },
        description: "Sort collection by post attribute.",
      },
      {
        name: "page",
        in: "query",
        required: false,
        schema: {
          description: "Current page of the collection.",
          default: 1,
          type: "integer",
          minimum: 1,
        },
        description: "Current page of the collection.",
      },
      {
        name: "per_page",
        in: "query",
        required: false,
        schema: {
          description: "Maximum number of items to be returned in result set.",
          default: 10,
          type: "integer",
          minimum: 1,
          maximum: 100,
        },
        description: "Maximum number of items to be returned in result set.",
      },
      {
        name: "search",
        in: "query",
        required: false,
        schema: {
          description: "Limit results to those matching a string.",
          type: "string",
        },
        description: "Limit results to those matching a string.",
      },
      {
        name: "search_columns",
        in: "query",
        required: false,
        schema: {
          description: "Array of column names to be searched.; several, comma-separated",
          type: "string",
        },
        description: "Array of column names to be searched.",
      },
      {
        name: "search_semantics",
        in: "query",
        required: false,
        schema: {
          description: "How to interpret the search input.",
          type: "string",
          enum: ["exact"],
        },
        description: "How to interpret the search input.",
      },
      {
        name: "slug",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to posts with one or more specific slugs.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to posts with one or more specific slugs.",
      },
      {
        name: "status",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to posts assigned one or more statuses.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to posts assigned one or more statuses.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetWpV2NavigationResponse",
    },
  },
  {
    id: "postWpV2Navigation",
    command: "navigation-create",
    binding: {
      kind: "http",
      method: "POST",
      path: "/wp/v2/navigation",
    },
    effect: "write",
    tags: ["navigation"],
    permissions: [
      {
        key: "navigation.publish",
        values: {
          status: ["publish", "future"],
        },
        body: ["date", "date_gmt", "password"],
        unless: {
          status: ["draft", "pending", "private"],
        },
      },
    ],
    parameters: [],
    request: {
      required: false,
      confidence: "contract",
      schema: "PostWpV2NavigationRequest",
    },
    response: {
      confidence: "contract",
      schema: "WpNavigation",
    },
  },
  {
    id: "getWpV2NavigationById",
    command: "navigation-get",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/navigation/{id}",
    },
    effect: "read",
    tags: ["navigation"],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "Unique identifier for the post.",
          type: "integer",
        },
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
      {
        name: "password",
        in: "query",
        required: false,
        schema: {
          description: "The password for the post if it is password protected.",
          type: "string",
        },
        description: "The password for the post if it is password protected.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "WpNavigation",
    },
  },
  {
    id: "postWpV2NavigationById",
    command: "navigation-update",
    binding: {
      kind: "http",
      method: "POST",
      path: "/wp/v2/navigation/{id}",
    },
    effect: "write",
    tags: ["navigation"],
    permissions: [
      {
        key: "navigation.publish",
        values: {
          status: ["publish", "future"],
        },
        body: ["date", "date_gmt", "password"],
        unless: {
          status: ["draft", "pending", "private"],
        },
      },
    ],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "Unique identifier for the post.",
          type: "integer",
        },
      },
    ],
    request: {
      required: false,
      confidence: "contract",
      schema: "PostWpV2NavigationByIdRequest",
    },
    response: {
      confidence: "contract",
      schema: "WpNavigation",
    },
  },
  {
    id: "deleteWpV2NavigationById",
    command: "navigation-delete",
    binding: {
      kind: "http",
      method: "DELETE",
      path: "/wp/v2/navigation/{id}",
    },
    effect: "destructive",
    tags: ["navigation"],
    permissions: [
      {
        key: "navigation.delete",
      },
      {
        key: "navigation.delete.force",
        query: ["force"],
      },
    ],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "Unique identifier for the post.",
          type: "integer",
        },
      },
      {
        name: "force",
        in: "query",
        required: false,
        schema: {
          description: "Whether to bypass Trash and force deletion.",
          default: false,
          type: "boolean",
        },
        description: "Whether to bypass Trash and force deletion.",
      },
    ],
  },
  {
    id: "getWpV2NavigationByIdAutosaves",
    command: "navigation-autosaves-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/navigation/{id}/autosaves",
    },
    effect: "read",
    tags: ["navigation"],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          type: "string",
          pattern: "^(?:[\\d]+)$",
        },
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
      {
        name: "parent",
        in: "query",
        required: false,
        schema: {
          description: "The ID for the parent of the autosave.",
          type: "integer",
        },
        description: "The ID for the parent of the autosave.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "WpNavigationRevision",
    },
  },
  {
    id: "postWpV2NavigationByIdAutosaves",
    command: "navigation-autosaves-create",
    binding: {
      kind: "http",
      method: "POST",
      path: "/wp/v2/navigation/{id}/autosaves",
    },
    effect: "write",
    tags: ["navigation"],
    permissions: [
      {
        key: "navigation.publish",
        values: {
          status: ["publish", "future"],
        },
        body: ["date", "date_gmt", "password"],
        unless: {
          status: ["draft", "pending", "private"],
        },
      },
    ],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          type: "string",
          pattern: "^(?:[\\d]+)$",
        },
      },
    ],
    request: {
      required: false,
      confidence: "contract",
      schema: "PostWpV2NavigationByIdAutosavesRequest",
    },
    response: {
      confidence: "contract",
      schema: "WpNavigationRevision",
    },
  },
  {
    id: "getWpV2NavigationByParentAutosavesById",
    command: "navigation-autosaves-get",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/navigation/{parent}/autosaves/{id}",
    },
    effect: "read",
    tags: ["navigation"],
    parameters: [
      {
        name: "parent",
        in: "path",
        required: true,
        schema: {
          description: "The ID for the parent of the autosave.",
          type: "integer",
        },
      },
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "The ID for the autosave.",
          type: "integer",
        },
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "WpNavigationRevision",
    },
  },
  {
    id: "getWpV2NavigationByParentRevisions",
    command: "navigation-revisions-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/navigation/{parent}/revisions",
    },
    effect: "read",
    tags: ["navigation"],
    pagination: {
      style: "page",
      page: {
        in: "query",
        name: "page",
      },
      limit: {
        in: "query",
        name: "per_page",
      },
      items: "",
      start: 1,
      pagesHeader: "x-wp-totalpages",
    },
    parameters: [
      {
        name: "parent",
        in: "path",
        required: true,
        schema: {
          description: "The ID for the parent of the revision.",
          type: "integer",
        },
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
      {
        name: "exclude",
        in: "query",
        required: false,
        schema: {
          description: "Ensure result set excludes specific IDs.; several, comma-separated",
          type: "string",
        },
        description: "Ensure result set excludes specific IDs.",
      },
      {
        name: "include",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to specific IDs.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to specific IDs.",
      },
      {
        name: "offset",
        in: "query",
        required: false,
        schema: {
          description: "Offset the result set by a specific number of items.",
          type: "integer",
        },
        description: "Offset the result set by a specific number of items.",
      },
      {
        name: "order",
        in: "query",
        required: false,
        schema: {
          description: "Order sort attribute ascending or descending.",
          default: "desc",
          type: "string",
          enum: ["asc", "desc"],
        },
        description: "Order sort attribute ascending or descending.",
      },
      {
        name: "orderby",
        in: "query",
        required: false,
        schema: {
          description: "Sort collection by object attribute.",
          default: "date",
          type: "string",
          enum: ["date", "id", "include", "relevance", "slug", "include_slugs", "title"],
        },
        description: "Sort collection by object attribute.",
      },
      {
        name: "page",
        in: "query",
        required: false,
        schema: {
          description: "Current page of the collection.",
          default: 1,
          type: "integer",
          minimum: 1,
        },
        description: "Current page of the collection.",
      },
      {
        name: "per_page",
        in: "query",
        required: false,
        schema: {
          description: "Maximum number of items to be returned in result set.",
          type: "integer",
          minimum: 1,
          maximum: 100,
        },
        description: "Maximum number of items to be returned in result set.",
      },
      {
        name: "search",
        in: "query",
        required: false,
        schema: {
          description: "Limit results to those matching a string.",
          type: "string",
        },
        description: "Limit results to those matching a string.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetWpV2NavigationByParentRevisionsResponse",
    },
  },
  {
    id: "getWpV2NavigationByParentRevisionsById",
    command: "navigation-revisions-get",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/navigation/{parent}/revisions/{id}",
    },
    effect: "read",
    tags: ["navigation"],
    parameters: [
      {
        name: "parent",
        in: "path",
        required: true,
        schema: {
          description: "The ID for the parent of the revision.",
          type: "integer",
        },
      },
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "Unique identifier for the revision.",
          type: "integer",
        },
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "WpNavigationRevision2",
    },
  },
  {
    id: "deleteWpV2NavigationByParentRevisionsById",
    command: "navigation-revisions-delete",
    binding: {
      kind: "http",
      method: "DELETE",
      path: "/wp/v2/navigation/{parent}/revisions/{id}",
    },
    effect: "destructive",
    tags: ["navigation"],
    permissions: [
      {
        key: "navigation.delete",
      },
      {
        key: "navigation.delete.force",
        query: ["force"],
      },
    ],
    parameters: [
      {
        name: "parent",
        in: "path",
        required: true,
        schema: {
          description: "The ID for the parent of the revision.",
          type: "integer",
        },
      },
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "Unique identifier for the revision.",
          type: "integer",
        },
      },
      {
        name: "force",
        in: "query",
        required: false,
        schema: {
          description: "Required to be true, as revisions do not support trashing.",
          default: false,
          type: "boolean",
        },
        description: "Required to be true, as revisions do not support trashing.",
      },
    ],
  },
  {
    id: "getWpV2Pages",
    command: "pages-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/pages",
    },
    effect: "read",
    tags: ["pages"],
    pagination: {
      style: "page",
      page: {
        in: "query",
        name: "page",
      },
      limit: {
        in: "query",
        name: "per_page",
      },
      items: "",
      start: 1,
      pagesHeader: "x-wp-totalpages",
    },
    parameters: [
      {
        name: "after",
        in: "query",
        required: false,
        schema: {
          description: "Limit response to posts published after a given ISO8601 compliant date.",
          type: "string",
        },
        description: "Limit response to posts published after a given ISO8601 compliant date.",
      },
      {
        name: "author",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to posts assigned to specific authors.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to posts assigned to specific authors.",
      },
      {
        name: "author_exclude",
        in: "query",
        required: false,
        schema: {
          description: "Ensure result set excludes posts assigned to specific authors.; several, comma-separated",
          type: "string",
        },
        description: "Ensure result set excludes posts assigned to specific authors.",
      },
      {
        name: "before",
        in: "query",
        required: false,
        schema: {
          description: "Limit response to posts published before a given ISO8601 compliant date.",
          type: "string",
        },
        description: "Limit response to posts published before a given ISO8601 compliant date.",
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
      {
        name: "exclude",
        in: "query",
        required: false,
        schema: {
          description: "Ensure result set excludes specific IDs.; several, comma-separated",
          type: "string",
        },
        description: "Ensure result set excludes specific IDs.",
      },
      {
        name: "include",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to specific IDs.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to specific IDs.",
      },
      {
        name: "menu_order",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to posts with a specific menu_order value.",
          type: "integer",
        },
        description: "Limit result set to posts with a specific menu_order value.",
      },
      {
        name: "modified_after",
        in: "query",
        required: false,
        schema: {
          description: "Limit response to posts modified after a given ISO8601 compliant date.",
          type: "string",
        },
        description: "Limit response to posts modified after a given ISO8601 compliant date.",
      },
      {
        name: "modified_before",
        in: "query",
        required: false,
        schema: {
          description: "Limit response to posts modified before a given ISO8601 compliant date.",
          type: "string",
        },
        description: "Limit response to posts modified before a given ISO8601 compliant date.",
      },
      {
        name: "offset",
        in: "query",
        required: false,
        schema: {
          description: "Offset the result set by a specific number of items.",
          type: "integer",
        },
        description: "Offset the result set by a specific number of items.",
      },
      {
        name: "order",
        in: "query",
        required: false,
        schema: {
          description: "Order sort attribute ascending or descending.",
          default: "desc",
          type: "string",
          enum: ["asc", "desc"],
        },
        description: "Order sort attribute ascending or descending.",
      },
      {
        name: "orderby",
        in: "query",
        required: false,
        schema: {
          description: "Sort collection by post attribute.",
          default: "date",
          type: "string",
          enum: [
            "author",
            "date",
            "id",
            "include",
            "modified",
            "parent",
            "relevance",
            "slug",
            "include_slugs",
            "title",
            "menu_order",
          ],
        },
        description: "Sort collection by post attribute.",
      },
      {
        name: "page",
        in: "query",
        required: false,
        schema: {
          description: "Current page of the collection.",
          default: 1,
          type: "integer",
          minimum: 1,
        },
        description: "Current page of the collection.",
      },
      {
        name: "parent",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to items with particular parent IDs.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to items with particular parent IDs.",
      },
      {
        name: "parent_exclude",
        in: "query",
        required: false,
        schema: {
          description:
            "Limit result set to all items except those of a particular parent ID.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to all items except those of a particular parent ID.",
      },
      {
        name: "per_page",
        in: "query",
        required: false,
        schema: {
          description: "Maximum number of items to be returned in result set.",
          default: 10,
          type: "integer",
          minimum: 1,
          maximum: 100,
        },
        description: "Maximum number of items to be returned in result set.",
      },
      {
        name: "search",
        in: "query",
        required: false,
        schema: {
          description: "Limit results to those matching a string.",
          type: "string",
        },
        description: "Limit results to those matching a string.",
      },
      {
        name: "search_columns",
        in: "query",
        required: false,
        schema: {
          description: "Array of column names to be searched.; several, comma-separated",
          type: "string",
        },
        description: "Array of column names to be searched.",
      },
      {
        name: "search_semantics",
        in: "query",
        required: false,
        schema: {
          description: "How to interpret the search input.",
          type: "string",
          enum: ["exact"],
        },
        description: "How to interpret the search input.",
      },
      {
        name: "slug",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to posts with one or more specific slugs.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to posts with one or more specific slugs.",
      },
      {
        name: "status",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to posts assigned one or more statuses.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to posts assigned one or more statuses.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetWpV2PagesResponse",
    },
  },
  {
    id: "postWpV2Pages",
    command: "pages-create",
    binding: {
      kind: "http",
      method: "POST",
      path: "/wp/v2/pages",
    },
    effect: "write",
    tags: ["pages"],
    permissions: [
      {
        key: "pages.publish",
        values: {
          status: ["publish", "future"],
        },
        body: ["date", "date_gmt", "password"],
        unless: {
          status: ["draft", "pending", "private"],
        },
      },
    ],
    parameters: [],
    request: {
      required: false,
      confidence: "contract",
      schema: "PostWpV2PagesRequest",
    },
    response: {
      confidence: "contract",
      schema: "Page",
    },
  },
  {
    id: "getWpV2PagesById",
    command: "pages-get",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/pages/{id}",
    },
    effect: "read",
    tags: ["pages"],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "Unique identifier for the post.",
          type: "integer",
        },
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
      {
        name: "excerpt_length",
        in: "query",
        required: false,
        schema: {
          description: "Override the default excerpt length.",
          type: "integer",
        },
        description: "Override the default excerpt length.",
      },
      {
        name: "password",
        in: "query",
        required: false,
        schema: {
          description: "The password for the post if it is password protected.",
          type: "string",
        },
        description: "The password for the post if it is password protected.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "Page",
    },
  },
  {
    id: "postWpV2PagesById",
    command: "pages-update",
    binding: {
      kind: "http",
      method: "POST",
      path: "/wp/v2/pages/{id}",
    },
    effect: "write",
    tags: ["pages"],
    permissions: [
      {
        key: "pages.publish",
        values: {
          status: ["publish", "future"],
        },
        body: ["date", "date_gmt", "password"],
        unless: {
          status: ["draft", "pending", "private"],
        },
      },
    ],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "Unique identifier for the post.",
          type: "integer",
        },
      },
    ],
    request: {
      required: false,
      confidence: "contract",
      schema: "PostWpV2PagesByIdRequest",
    },
    response: {
      confidence: "contract",
      schema: "Page",
    },
  },
  {
    id: "deleteWpV2PagesById",
    command: "pages-delete",
    binding: {
      kind: "http",
      method: "DELETE",
      path: "/wp/v2/pages/{id}",
    },
    effect: "destructive",
    tags: ["pages"],
    permissions: [
      {
        key: "pages.delete",
      },
      {
        key: "pages.delete.force",
        query: ["force"],
      },
    ],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "Unique identifier for the post.",
          type: "integer",
        },
      },
      {
        name: "force",
        in: "query",
        required: false,
        schema: {
          description: "Whether to bypass Trash and force deletion.",
          default: false,
          type: "boolean",
        },
        description: "Whether to bypass Trash and force deletion.",
      },
    ],
  },
  {
    id: "getWpV2PagesByIdAutosaves",
    command: "pages-autosaves-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/pages/{id}/autosaves",
    },
    effect: "read",
    tags: ["pages"],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          type: "string",
          pattern: "^(?:[\\d]+)$",
        },
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
      {
        name: "parent",
        in: "query",
        required: false,
        schema: {
          description: "The ID for the parent of the autosave.",
          type: "integer",
        },
        description: "The ID for the parent of the autosave.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "PageRevision",
    },
  },
  {
    id: "postWpV2PagesByIdAutosaves",
    command: "pages-autosaves-create",
    binding: {
      kind: "http",
      method: "POST",
      path: "/wp/v2/pages/{id}/autosaves",
    },
    effect: "write",
    tags: ["pages"],
    permissions: [
      {
        key: "pages.publish",
        values: {
          status: ["publish", "future"],
        },
        body: ["date", "date_gmt", "password"],
        unless: {
          status: ["draft", "pending", "private"],
        },
      },
    ],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          type: "string",
          pattern: "^(?:[\\d]+)$",
        },
      },
    ],
    request: {
      required: false,
      confidence: "contract",
      schema: "PostWpV2PagesByIdAutosavesRequest",
    },
    response: {
      confidence: "contract",
      schema: "PageRevision",
    },
  },
  {
    id: "getWpV2PagesByParentAutosavesById",
    command: "pages-autosaves-get",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/pages/{parent}/autosaves/{id}",
    },
    effect: "read",
    tags: ["pages"],
    parameters: [
      {
        name: "parent",
        in: "path",
        required: true,
        schema: {
          description: "The ID for the parent of the autosave.",
          type: "integer",
        },
      },
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "The ID for the autosave.",
          type: "integer",
        },
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "PageRevision",
    },
  },
  {
    id: "getWpV2PagesByParentRevisions",
    command: "pages-revisions-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/pages/{parent}/revisions",
    },
    effect: "read",
    tags: ["pages"],
    pagination: {
      style: "page",
      page: {
        in: "query",
        name: "page",
      },
      limit: {
        in: "query",
        name: "per_page",
      },
      items: "",
      start: 1,
      pagesHeader: "x-wp-totalpages",
    },
    parameters: [
      {
        name: "parent",
        in: "path",
        required: true,
        schema: {
          description: "The ID for the parent of the revision.",
          type: "integer",
        },
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
      {
        name: "exclude",
        in: "query",
        required: false,
        schema: {
          description: "Ensure result set excludes specific IDs.; several, comma-separated",
          type: "string",
        },
        description: "Ensure result set excludes specific IDs.",
      },
      {
        name: "include",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to specific IDs.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to specific IDs.",
      },
      {
        name: "offset",
        in: "query",
        required: false,
        schema: {
          description: "Offset the result set by a specific number of items.",
          type: "integer",
        },
        description: "Offset the result set by a specific number of items.",
      },
      {
        name: "order",
        in: "query",
        required: false,
        schema: {
          description: "Order sort attribute ascending or descending.",
          default: "desc",
          type: "string",
          enum: ["asc", "desc"],
        },
        description: "Order sort attribute ascending or descending.",
      },
      {
        name: "orderby",
        in: "query",
        required: false,
        schema: {
          description: "Sort collection by object attribute.",
          default: "date",
          type: "string",
          enum: ["date", "id", "include", "relevance", "slug", "include_slugs", "title"],
        },
        description: "Sort collection by object attribute.",
      },
      {
        name: "page",
        in: "query",
        required: false,
        schema: {
          description: "Current page of the collection.",
          default: 1,
          type: "integer",
          minimum: 1,
        },
        description: "Current page of the collection.",
      },
      {
        name: "per_page",
        in: "query",
        required: false,
        schema: {
          description: "Maximum number of items to be returned in result set.",
          type: "integer",
          minimum: 1,
          maximum: 100,
        },
        description: "Maximum number of items to be returned in result set.",
      },
      {
        name: "search",
        in: "query",
        required: false,
        schema: {
          description: "Limit results to those matching a string.",
          type: "string",
        },
        description: "Limit results to those matching a string.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetWpV2PagesByParentRevisionsResponse",
    },
  },
  {
    id: "getWpV2PagesByParentRevisionsById",
    command: "pages-revisions-get",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/pages/{parent}/revisions/{id}",
    },
    effect: "read",
    tags: ["pages"],
    parameters: [
      {
        name: "parent",
        in: "path",
        required: true,
        schema: {
          description: "The ID for the parent of the revision.",
          type: "integer",
        },
      },
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "Unique identifier for the revision.",
          type: "integer",
        },
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "PageRevision2",
    },
  },
  {
    id: "deleteWpV2PagesByParentRevisionsById",
    command: "pages-revisions-delete",
    binding: {
      kind: "http",
      method: "DELETE",
      path: "/wp/v2/pages/{parent}/revisions/{id}",
    },
    effect: "destructive",
    tags: ["pages"],
    permissions: [
      {
        key: "pages.delete",
      },
      {
        key: "pages.delete.force",
        query: ["force"],
      },
    ],
    parameters: [
      {
        name: "parent",
        in: "path",
        required: true,
        schema: {
          description: "The ID for the parent of the revision.",
          type: "integer",
        },
      },
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "Unique identifier for the revision.",
          type: "integer",
        },
      },
      {
        name: "force",
        in: "query",
        required: false,
        schema: {
          description: "Required to be true, as revisions do not support trashing.",
          default: false,
          type: "boolean",
        },
        description: "Required to be true, as revisions do not support trashing.",
      },
    ],
  },
  {
    id: "getWpV2PatternDirectoryPatterns",
    command: "pattern-directory-patterns-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/pattern-directory/patterns",
    },
    effect: "read",
    tags: ["pattern-directory"],
    pagination: {
      style: "page",
      page: {
        in: "query",
        name: "page",
      },
      limit: {
        in: "query",
        name: "per_page",
      },
      items: "",
      start: 1,
      pagesHeader: "x-wp-totalpages",
    },
    parameters: [
      {
        name: "category",
        in: "query",
        required: false,
        schema: {
          description: "Limit results to those matching a category ID.",
          type: "integer",
          minimum: 1,
        },
        description: "Limit results to those matching a category ID.",
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
      {
        name: "keyword",
        in: "query",
        required: false,
        schema: {
          description: "Limit results to those matching a keyword ID.",
          type: "integer",
          minimum: 1,
        },
        description: "Limit results to those matching a keyword ID.",
      },
      {
        name: "offset",
        in: "query",
        required: false,
        schema: {
          description: "Offset the result set by a specific number of items.",
          type: "integer",
        },
        description: "Offset the result set by a specific number of items.",
      },
      {
        name: "order",
        in: "query",
        required: false,
        schema: {
          description: "Order sort attribute ascending or descending.",
          default: "desc",
          type: "string",
          enum: ["asc", "desc"],
        },
        description: "Order sort attribute ascending or descending.",
      },
      {
        name: "orderby",
        in: "query",
        required: false,
        schema: {
          description: "Sort collection by post attribute.",
          default: "date",
          type: "string",
          enum: [
            "author",
            "date",
            "id",
            "include",
            "modified",
            "parent",
            "relevance",
            "slug",
            "include_slugs",
            "title",
            "favorite_count",
          ],
        },
        description: "Sort collection by post attribute.",
      },
      {
        name: "page",
        in: "query",
        required: false,
        schema: {
          description: "Current page of the collection.",
          default: 1,
          type: "integer",
          minimum: 1,
        },
        description: "Current page of the collection.",
      },
      {
        name: "per_page",
        in: "query",
        required: false,
        schema: {
          description: "Maximum number of items to be returned in result set.",
          default: 100,
          type: "integer",
          minimum: 1,
          maximum: 100,
        },
        description: "Maximum number of items to be returned in result set.",
      },
      {
        name: "search",
        in: "query",
        required: false,
        schema: {
          description: "Limit results to those matching a string.",
          type: "string",
          minLength: 1,
        },
        description: "Limit results to those matching a string.",
      },
      {
        name: "slug",
        in: "query",
        required: false,
        schema: {
          description: "Limit results to those matching a pattern (slug).; several, comma-separated",
          type: "string",
        },
        description: "Limit results to those matching a pattern (slug).",
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetWpV2PatternDirectoryPatternsResponse",
    },
  },
  {
    id: "getWpV2Plugins",
    command: "plugins-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/plugins",
    },
    effect: "read",
    tags: ["plugins"],
    parameters: [
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
      {
        name: "search",
        in: "query",
        required: false,
        schema: {
          description: "Limit results to those matching a string.",
          type: "string",
        },
        description: "Limit results to those matching a string.",
      },
      {
        name: "status",
        in: "query",
        required: false,
        schema: {
          description: "Limits results to plugins with the given status.; several, comma-separated",
          type: "string",
        },
        description: "Limits results to plugins with the given status.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "Plugin",
    },
  },
  {
    id: "postWpV2Plugins",
    command: "plugins-create",
    binding: {
      kind: "http",
      method: "POST",
      path: "/wp/v2/plugins",
    },
    effect: "write",
    tags: ["plugins"],
    parameters: [],
    request: {
      required: true,
      confidence: "contract",
      schema: "PostWpV2PluginsRequest",
    },
    response: {
      confidence: "contract",
      schema: "Plugin",
    },
  },
  {
    id: "getWpV2Posts",
    command: "posts-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/posts",
    },
    effect: "read",
    tags: ["posts"],
    pagination: {
      style: "page",
      page: {
        in: "query",
        name: "page",
      },
      limit: {
        in: "query",
        name: "per_page",
      },
      items: "",
      start: 1,
      pagesHeader: "x-wp-totalpages",
    },
    parameters: [
      {
        name: "after",
        in: "query",
        required: false,
        schema: {
          description: "Limit response to posts published after a given ISO8601 compliant date.",
          type: "string",
        },
        description: "Limit response to posts published after a given ISO8601 compliant date.",
      },
      {
        name: "author",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to posts assigned to specific authors.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to posts assigned to specific authors.",
      },
      {
        name: "author_exclude",
        in: "query",
        required: false,
        schema: {
          description: "Ensure result set excludes posts assigned to specific authors.; several, comma-separated",
          type: "string",
        },
        description: "Ensure result set excludes posts assigned to specific authors.",
      },
      {
        name: "before",
        in: "query",
        required: false,
        schema: {
          description: "Limit response to posts published before a given ISO8601 compliant date.",
          type: "string",
        },
        description: "Limit response to posts published before a given ISO8601 compliant date.",
      },
      {
        name: "categories",
        in: "query",
        required: false,
        schema: {
          description:
            "Limit result set to items with specific terms assigned in the categories taxonomy.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to items with specific terms assigned in the categories taxonomy.",
      },
      {
        name: "categories_exclude",
        in: "query",
        required: false,
        schema: {
          description:
            "Limit result set to items except those with specific terms assigned in the categories taxonomy.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to items except those with specific terms assigned in the categories taxonomy.",
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
      {
        name: "exclude",
        in: "query",
        required: false,
        schema: {
          description: "Ensure result set excludes specific IDs.; several, comma-separated",
          type: "string",
        },
        description: "Ensure result set excludes specific IDs.",
      },
      {
        name: "format",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to items assigned one or more given formats.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to items assigned one or more given formats.",
      },
      {
        name: "ignore_sticky",
        in: "query",
        required: false,
        schema: {
          description: "Whether to ignore sticky posts or not.",
          default: true,
          type: "boolean",
        },
        description: "Whether to ignore sticky posts or not.",
      },
      {
        name: "include",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to specific IDs.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to specific IDs.",
      },
      {
        name: "modified_after",
        in: "query",
        required: false,
        schema: {
          description: "Limit response to posts modified after a given ISO8601 compliant date.",
          type: "string",
        },
        description: "Limit response to posts modified after a given ISO8601 compliant date.",
      },
      {
        name: "modified_before",
        in: "query",
        required: false,
        schema: {
          description: "Limit response to posts modified before a given ISO8601 compliant date.",
          type: "string",
        },
        description: "Limit response to posts modified before a given ISO8601 compliant date.",
      },
      {
        name: "offset",
        in: "query",
        required: false,
        schema: {
          description: "Offset the result set by a specific number of items.",
          type: "integer",
        },
        description: "Offset the result set by a specific number of items.",
      },
      {
        name: "order",
        in: "query",
        required: false,
        schema: {
          description: "Order sort attribute ascending or descending.",
          default: "desc",
          type: "string",
          enum: ["asc", "desc"],
        },
        description: "Order sort attribute ascending or descending.",
      },
      {
        name: "orderby",
        in: "query",
        required: false,
        schema: {
          description: "Sort collection by post attribute.",
          default: "date",
          type: "string",
          enum: [
            "author",
            "date",
            "id",
            "include",
            "modified",
            "parent",
            "relevance",
            "slug",
            "include_slugs",
            "title",
          ],
        },
        description: "Sort collection by post attribute.",
      },
      {
        name: "page",
        in: "query",
        required: false,
        schema: {
          description: "Current page of the collection.",
          default: 1,
          type: "integer",
          minimum: 1,
        },
        description: "Current page of the collection.",
      },
      {
        name: "per_page",
        in: "query",
        required: false,
        schema: {
          description: "Maximum number of items to be returned in result set.",
          default: 10,
          type: "integer",
          minimum: 1,
          maximum: 100,
        },
        description: "Maximum number of items to be returned in result set.",
      },
      {
        name: "search",
        in: "query",
        required: false,
        schema: {
          description: "Limit results to those matching a string.",
          type: "string",
        },
        description: "Limit results to those matching a string.",
      },
      {
        name: "search_columns",
        in: "query",
        required: false,
        schema: {
          description: "Array of column names to be searched.; several, comma-separated",
          type: "string",
        },
        description: "Array of column names to be searched.",
      },
      {
        name: "search_semantics",
        in: "query",
        required: false,
        schema: {
          description: "How to interpret the search input.",
          type: "string",
          enum: ["exact"],
        },
        description: "How to interpret the search input.",
      },
      {
        name: "slug",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to posts with one or more specific slugs.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to posts with one or more specific slugs.",
      },
      {
        name: "status",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to posts assigned one or more statuses.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to posts assigned one or more statuses.",
      },
      {
        name: "sticky",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to items that are sticky.",
          type: "boolean",
        },
        description: "Limit result set to items that are sticky.",
      },
      {
        name: "tags",
        in: "query",
        required: false,
        schema: {
          description:
            "Limit result set to items with specific terms assigned in the tags taxonomy.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to items with specific terms assigned in the tags taxonomy.",
      },
      {
        name: "tags_exclude",
        in: "query",
        required: false,
        schema: {
          description:
            "Limit result set to items except those with specific terms assigned in the tags taxonomy.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to items except those with specific terms assigned in the tags taxonomy.",
      },
      {
        name: "tax_relation",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set based on relationship between multiple taxonomies.",
          type: "string",
          enum: ["AND", "OR"],
        },
        description: "Limit result set based on relationship between multiple taxonomies.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetWpV2PostsResponse",
    },
  },
  {
    id: "postWpV2Posts",
    command: "posts-create",
    binding: {
      kind: "http",
      method: "POST",
      path: "/wp/v2/posts",
    },
    effect: "write",
    tags: ["posts"],
    permissions: [
      {
        key: "posts.publish",
        values: {
          status: ["publish", "future"],
        },
        body: ["date", "date_gmt", "password"],
        unless: {
          status: ["draft", "pending", "private"],
        },
      },
    ],
    parameters: [],
    request: {
      required: false,
      confidence: "contract",
      schema: "PostWpV2PostsRequest",
    },
    response: {
      confidence: "contract",
      schema: "Post",
    },
  },
  {
    id: "getWpV2PostsById",
    command: "posts-get",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/posts/{id}",
    },
    effect: "read",
    tags: ["posts"],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "Unique identifier for the post.",
          type: "integer",
        },
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
      {
        name: "excerpt_length",
        in: "query",
        required: false,
        schema: {
          description: "Override the default excerpt length.",
          type: "integer",
        },
        description: "Override the default excerpt length.",
      },
      {
        name: "password",
        in: "query",
        required: false,
        schema: {
          description: "The password for the post if it is password protected.",
          type: "string",
        },
        description: "The password for the post if it is password protected.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "Post",
    },
  },
  {
    id: "postWpV2PostsById",
    command: "posts-update",
    binding: {
      kind: "http",
      method: "POST",
      path: "/wp/v2/posts/{id}",
    },
    effect: "write",
    tags: ["posts"],
    permissions: [
      {
        key: "posts.publish",
        values: {
          status: ["publish", "future"],
        },
        body: ["date", "date_gmt", "password"],
        unless: {
          status: ["draft", "pending", "private"],
        },
      },
    ],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "Unique identifier for the post.",
          type: "integer",
        },
      },
    ],
    request: {
      required: false,
      confidence: "contract",
      schema: "PostWpV2PostsByIdRequest",
    },
    response: {
      confidence: "contract",
      schema: "Post",
    },
  },
  {
    id: "deleteWpV2PostsById",
    command: "posts-delete",
    binding: {
      kind: "http",
      method: "DELETE",
      path: "/wp/v2/posts/{id}",
    },
    effect: "destructive",
    tags: ["posts"],
    permissions: [
      {
        key: "posts.delete",
      },
      {
        key: "posts.delete.force",
        query: ["force"],
      },
    ],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "Unique identifier for the post.",
          type: "integer",
        },
      },
      {
        name: "force",
        in: "query",
        required: false,
        schema: {
          description: "Whether to bypass Trash and force deletion.",
          default: false,
          type: "boolean",
        },
        description: "Whether to bypass Trash and force deletion.",
      },
    ],
  },
  {
    id: "getWpV2PostsByIdAutosaves",
    command: "posts-autosaves-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/posts/{id}/autosaves",
    },
    effect: "read",
    tags: ["posts"],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          type: "string",
          pattern: "^(?:[\\d]+)$",
        },
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
      {
        name: "parent",
        in: "query",
        required: false,
        schema: {
          description: "The ID for the parent of the autosave.",
          type: "integer",
        },
        description: "The ID for the parent of the autosave.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "PostRevision",
    },
  },
  {
    id: "postWpV2PostsByIdAutosaves",
    command: "posts-autosaves-create",
    binding: {
      kind: "http",
      method: "POST",
      path: "/wp/v2/posts/{id}/autosaves",
    },
    effect: "write",
    tags: ["posts"],
    permissions: [
      {
        key: "posts.publish",
        values: {
          status: ["publish", "future"],
        },
        body: ["date", "date_gmt", "password"],
        unless: {
          status: ["draft", "pending", "private"],
        },
      },
    ],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          type: "string",
          pattern: "^(?:[\\d]+)$",
        },
      },
    ],
    request: {
      required: false,
      confidence: "contract",
      schema: "PostWpV2PostsByIdAutosavesRequest",
    },
    response: {
      confidence: "contract",
      schema: "PostRevision",
    },
  },
  {
    id: "getWpV2PostsByParentAutosavesById",
    command: "posts-autosaves-get",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/posts/{parent}/autosaves/{id}",
    },
    effect: "read",
    tags: ["posts"],
    parameters: [
      {
        name: "parent",
        in: "path",
        required: true,
        schema: {
          description: "The ID for the parent of the autosave.",
          type: "integer",
        },
      },
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "The ID for the autosave.",
          type: "integer",
        },
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "PostRevision",
    },
  },
  {
    id: "getWpV2PostsByParentRevisions",
    command: "posts-revisions-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/posts/{parent}/revisions",
    },
    effect: "read",
    tags: ["posts"],
    pagination: {
      style: "page",
      page: {
        in: "query",
        name: "page",
      },
      limit: {
        in: "query",
        name: "per_page",
      },
      items: "",
      start: 1,
      pagesHeader: "x-wp-totalpages",
    },
    parameters: [
      {
        name: "parent",
        in: "path",
        required: true,
        schema: {
          description: "The ID for the parent of the revision.",
          type: "integer",
        },
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
      {
        name: "exclude",
        in: "query",
        required: false,
        schema: {
          description: "Ensure result set excludes specific IDs.; several, comma-separated",
          type: "string",
        },
        description: "Ensure result set excludes specific IDs.",
      },
      {
        name: "include",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to specific IDs.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to specific IDs.",
      },
      {
        name: "offset",
        in: "query",
        required: false,
        schema: {
          description: "Offset the result set by a specific number of items.",
          type: "integer",
        },
        description: "Offset the result set by a specific number of items.",
      },
      {
        name: "order",
        in: "query",
        required: false,
        schema: {
          description: "Order sort attribute ascending or descending.",
          default: "desc",
          type: "string",
          enum: ["asc", "desc"],
        },
        description: "Order sort attribute ascending or descending.",
      },
      {
        name: "orderby",
        in: "query",
        required: false,
        schema: {
          description: "Sort collection by object attribute.",
          default: "date",
          type: "string",
          enum: ["date", "id", "include", "relevance", "slug", "include_slugs", "title"],
        },
        description: "Sort collection by object attribute.",
      },
      {
        name: "page",
        in: "query",
        required: false,
        schema: {
          description: "Current page of the collection.",
          default: 1,
          type: "integer",
          minimum: 1,
        },
        description: "Current page of the collection.",
      },
      {
        name: "per_page",
        in: "query",
        required: false,
        schema: {
          description: "Maximum number of items to be returned in result set.",
          type: "integer",
          minimum: 1,
          maximum: 100,
        },
        description: "Maximum number of items to be returned in result set.",
      },
      {
        name: "search",
        in: "query",
        required: false,
        schema: {
          description: "Limit results to those matching a string.",
          type: "string",
        },
        description: "Limit results to those matching a string.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetWpV2PostsByParentRevisionsResponse",
    },
  },
  {
    id: "getWpV2PostsByParentRevisionsById",
    command: "posts-revisions-get",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/posts/{parent}/revisions/{id}",
    },
    effect: "read",
    tags: ["posts"],
    parameters: [
      {
        name: "parent",
        in: "path",
        required: true,
        schema: {
          description: "The ID for the parent of the revision.",
          type: "integer",
        },
      },
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "Unique identifier for the revision.",
          type: "integer",
        },
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "PostRevision2",
    },
  },
  {
    id: "deleteWpV2PostsByParentRevisionsById",
    command: "posts-revisions-delete",
    binding: {
      kind: "http",
      method: "DELETE",
      path: "/wp/v2/posts/{parent}/revisions/{id}",
    },
    effect: "destructive",
    tags: ["posts"],
    permissions: [
      {
        key: "posts.delete",
      },
      {
        key: "posts.delete.force",
        query: ["force"],
      },
    ],
    parameters: [
      {
        name: "parent",
        in: "path",
        required: true,
        schema: {
          description: "The ID for the parent of the revision.",
          type: "integer",
        },
      },
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "Unique identifier for the revision.",
          type: "integer",
        },
      },
      {
        name: "force",
        in: "query",
        required: false,
        schema: {
          description: "Required to be true, as revisions do not support trashing.",
          default: false,
          type: "boolean",
        },
        description: "Required to be true, as revisions do not support trashing.",
      },
    ],
  },
  {
    id: "getWpV2Search",
    command: "search-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/search",
    },
    effect: "read",
    tags: ["search"],
    pagination: {
      style: "page",
      page: {
        in: "query",
        name: "page",
      },
      limit: {
        in: "query",
        name: "per_page",
      },
      items: "",
      start: 1,
      pagesHeader: "x-wp-totalpages",
    },
    parameters: [
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
      {
        name: "exclude",
        in: "query",
        required: false,
        schema: {
          description: "Ensure result set excludes specific IDs.; several, comma-separated",
          type: "string",
        },
        description: "Ensure result set excludes specific IDs.",
      },
      {
        name: "include",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to specific IDs.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to specific IDs.",
      },
      {
        name: "page",
        in: "query",
        required: false,
        schema: {
          description: "Current page of the collection.",
          default: 1,
          type: "integer",
          minimum: 1,
        },
        description: "Current page of the collection.",
      },
      {
        name: "per_page",
        in: "query",
        required: false,
        schema: {
          description: "Maximum number of items to be returned in result set.",
          default: 10,
          type: "integer",
          minimum: 1,
          maximum: 100,
        },
        description: "Maximum number of items to be returned in result set.",
      },
      {
        name: "search",
        in: "query",
        required: false,
        schema: {
          description: "Limit results to those matching a string.",
          type: "string",
        },
        description: "Limit results to those matching a string.",
      },
      {
        name: "subtype",
        in: "query",
        required: false,
        schema: {
          description: "Limit results to items of one or more object subtypes.; several, comma-separated",
          type: "string",
        },
        description: "Limit results to items of one or more object subtypes.",
      },
      {
        name: "type",
        in: "query",
        required: false,
        schema: {
          description: "Limit results to items of an object type.",
          default: "post",
          type: "string",
          enum: ["post", "term", "post-format"],
        },
        description: "Limit results to items of an object type.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetWpV2SearchResponse",
    },
  },
  {
    id: "getWpV2Settings",
    command: "settings-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/settings",
    },
    effect: "read",
    tags: ["settings"],
    parameters: [],
    response: {
      confidence: "contract",
      schema: "Settings",
    },
  },
  {
    id: "postWpV2Settings",
    command: "settings-create",
    binding: {
      kind: "http",
      method: "POST",
      path: "/wp/v2/settings",
    },
    effect: "write",
    tags: ["settings"],
    parameters: [],
    request: {
      required: false,
      confidence: "contract",
      schema: "PostWpV2SettingsRequest",
    },
    response: {
      confidence: "contract",
      schema: "Settings",
    },
  },
  {
    id: "getWpV2Sidebars",
    command: "sidebars-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/sidebars",
    },
    effect: "read",
    tags: ["sidebars"],
    parameters: [
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "Sidebar",
    },
  },
  {
    id: "getWpV2SidebarsById",
    command: "sidebars-get",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/sidebars/{id}",
    },
    effect: "read",
    tags: ["sidebars"],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "The id of a registered sidebar",
          type: "string",
        },
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "Sidebar",
    },
  },
  {
    id: "postWpV2SidebarsById",
    command: "sidebars-update",
    binding: {
      kind: "http",
      method: "POST",
      path: "/wp/v2/sidebars/{id}",
    },
    effect: "write",
    tags: ["sidebars"],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          type: "string",
          pattern: "^(?:[\\w-]+)$",
        },
      },
    ],
    request: {
      required: false,
      confidence: "contract",
      schema: "PostWpV2SidebarsByIdRequest",
    },
    response: {
      confidence: "contract",
      schema: "Sidebar",
    },
  },
  {
    id: "getWpV2Statuses",
    command: "statuses-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/statuses",
    },
    effect: "read",
    tags: ["statuses"],
    parameters: [
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "Status",
    },
  },
  {
    id: "getWpV2StatusesByStatus",
    command: "statuses-get",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/statuses/{status}",
    },
    effect: "read",
    tags: ["statuses"],
    parameters: [
      {
        name: "status",
        in: "path",
        required: true,
        schema: {
          description: "An alphanumeric identifier for the status.",
          type: "string",
        },
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "Status",
    },
  },
  {
    id: "getWpV2Tags",
    command: "tags-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/tags",
    },
    effect: "read",
    tags: ["tags"],
    pagination: {
      style: "page",
      page: {
        in: "query",
        name: "page",
      },
      limit: {
        in: "query",
        name: "per_page",
      },
      items: "",
      start: 1,
      pagesHeader: "x-wp-totalpages",
    },
    parameters: [
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
      {
        name: "exclude",
        in: "query",
        required: false,
        schema: {
          description: "Ensure result set excludes specific IDs.; several, comma-separated",
          type: "string",
        },
        description: "Ensure result set excludes specific IDs.",
      },
      {
        name: "hide_empty",
        in: "query",
        required: false,
        schema: {
          description: "Whether to hide terms not assigned to any posts.",
          default: false,
          type: "boolean",
        },
        description: "Whether to hide terms not assigned to any posts.",
      },
      {
        name: "include",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to specific IDs.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to specific IDs.",
      },
      {
        name: "offset",
        in: "query",
        required: false,
        schema: {
          description: "Offset the result set by a specific number of items.",
          type: "integer",
        },
        description: "Offset the result set by a specific number of items.",
      },
      {
        name: "order",
        in: "query",
        required: false,
        schema: {
          description: "Order sort attribute ascending or descending.",
          default: "asc",
          type: "string",
          enum: ["asc", "desc"],
        },
        description: "Order sort attribute ascending or descending.",
      },
      {
        name: "orderby",
        in: "query",
        required: false,
        schema: {
          description: "Sort collection by term attribute.",
          default: "name",
          type: "string",
          enum: ["id", "include", "name", "slug", "include_slugs", "term_group", "description", "count"],
        },
        description: "Sort collection by term attribute.",
      },
      {
        name: "page",
        in: "query",
        required: false,
        schema: {
          description: "Current page of the collection.",
          default: 1,
          type: "integer",
          minimum: 1,
        },
        description: "Current page of the collection.",
      },
      {
        name: "per_page",
        in: "query",
        required: false,
        schema: {
          description: "Maximum number of items to be returned in result set.",
          default: 10,
          type: "integer",
          minimum: 1,
          maximum: 100,
        },
        description: "Maximum number of items to be returned in result set.",
      },
      {
        name: "post",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to terms assigned to a specific post.",
          default: null,
          type: "integer",
        },
        description: "Limit result set to terms assigned to a specific post.",
      },
      {
        name: "search",
        in: "query",
        required: false,
        schema: {
          description: "Limit results to those matching a string.",
          type: "string",
        },
        description: "Limit results to those matching a string.",
      },
      {
        name: "slug",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to terms with one or more specific slugs.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to terms with one or more specific slugs.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetWpV2TagsResponse",
    },
  },
  {
    id: "postWpV2Tags",
    command: "tags-create",
    binding: {
      kind: "http",
      method: "POST",
      path: "/wp/v2/tags",
    },
    effect: "write",
    tags: ["tags"],
    parameters: [],
    request: {
      required: true,
      confidence: "contract",
      schema: "PostWpV2TagsRequest",
    },
    response: {
      confidence: "contract",
      schema: "Tag",
    },
  },
  {
    id: "getWpV2TagsById",
    command: "tags-get",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/tags/{id}",
    },
    effect: "read",
    tags: ["tags"],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "Unique identifier for the term.",
          type: "integer",
        },
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "Tag",
    },
  },
  {
    id: "postWpV2TagsById",
    command: "tags-update",
    binding: {
      kind: "http",
      method: "POST",
      path: "/wp/v2/tags/{id}",
    },
    effect: "write",
    tags: ["tags"],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "Unique identifier for the term.",
          type: "integer",
        },
      },
    ],
    request: {
      required: false,
      confidence: "contract",
      schema: "PostWpV2TagsByIdRequest",
    },
    response: {
      confidence: "contract",
      schema: "Tag",
    },
  },
  {
    id: "deleteWpV2TagsById",
    command: "tags-delete",
    binding: {
      kind: "http",
      method: "DELETE",
      path: "/wp/v2/tags/{id}",
    },
    effect: "destructive",
    tags: ["tags"],
    permissions: [
      {
        key: "tags.delete",
      },
      {
        key: "tags.delete.force",
        query: ["force"],
      },
    ],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "Unique identifier for the term.",
          type: "integer",
        },
      },
      {
        name: "force",
        in: "query",
        required: false,
        schema: {
          description: "Required to be true, as terms do not support trashing.",
          default: false,
          type: "boolean",
        },
        description: "Required to be true, as terms do not support trashing.",
      },
    ],
  },
  {
    id: "getWpV2Taxonomies",
    command: "taxonomies-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/taxonomies",
    },
    effect: "read",
    tags: ["taxonomies"],
    parameters: [
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
      {
        name: "type",
        in: "query",
        required: false,
        schema: {
          description: "Limit results to taxonomies associated with a specific post type.",
          type: "string",
        },
        description: "Limit results to taxonomies associated with a specific post type.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "Taxonomy",
    },
  },
  {
    id: "getWpV2TaxonomiesByTaxonomy",
    command: "taxonomies-get",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/taxonomies/{taxonomy}",
    },
    effect: "read",
    tags: ["taxonomies"],
    parameters: [
      {
        name: "taxonomy",
        in: "path",
        required: true,
        schema: {
          description: "An alphanumeric identifier for the taxonomy.",
          type: "string",
        },
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "Taxonomy",
    },
  },
  {
    id: "getWpV2TemplateParts",
    command: "template-parts-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/template-parts",
    },
    effect: "read",
    tags: ["template-parts"],
    parameters: [
      {
        name: "area",
        in: "query",
        required: false,
        schema: {
          description: "Limit to the specified template part area.",
          type: "string",
        },
        description: "Limit to the specified template part area.",
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
      {
        name: "post_type",
        in: "query",
        required: false,
        schema: {
          description: "Post type to get the templates for.",
          type: "string",
        },
        description: "Post type to get the templates for.",
      },
      {
        name: "wp_id",
        in: "query",
        required: false,
        schema: {
          description: "Limit to the specified post id.",
          type: "integer",
        },
        description: "Limit to the specified post id.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "WpTemplatePart",
    },
  },
  {
    id: "postWpV2TemplateParts",
    command: "template-parts-create",
    binding: {
      kind: "http",
      method: "POST",
      path: "/wp/v2/template-parts",
    },
    effect: "write",
    tags: ["template-parts"],
    permissions: [
      {
        key: "template-parts.publish",
      },
    ],
    parameters: [],
    request: {
      required: true,
      confidence: "contract",
      schema: "PostWpV2TemplatePartsRequest",
    },
    response: {
      confidence: "contract",
      schema: "WpTemplatePart",
    },
  },
  {
    id: "getWpV2TemplatePartsLookup",
    command: "template-parts-lookup-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/template-parts/lookup",
    },
    effect: "read",
    tags: ["template-parts"],
    parameters: [
      {
        name: "is_custom",
        in: "query",
        required: false,
        schema: {
          description: "Indicates if a template is custom or part of the template hierarchy",
          type: "boolean",
        },
        description: "Indicates if a template is custom or part of the template hierarchy",
      },
      {
        name: "slug",
        in: "query",
        required: true,
        schema: {
          description: "The slug of the template to get the fallback for",
          type: "string",
        },
        description: "The slug of the template to get the fallback for",
      },
      {
        name: "template_prefix",
        in: "query",
        required: false,
        schema: {
          description:
            "The template prefix for the created template. This is used to extract the main template type, e.g. in `taxonomy-books` extracts the `taxonomy`",
          type: "string",
        },
        description:
          "The template prefix for the created template. This is used to extract the main template type, e.g. in `taxonomy-books` extracts the `taxonomy`",
      },
    ],
  },
  {
    id: "getWpV2Templates",
    command: "templates-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/templates",
    },
    effect: "read",
    tags: ["templates"],
    parameters: [
      {
        name: "area",
        in: "query",
        required: false,
        schema: {
          description: "Limit to the specified template part area.",
          type: "string",
        },
        description: "Limit to the specified template part area.",
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
      {
        name: "post_type",
        in: "query",
        required: false,
        schema: {
          description: "Post type to get the templates for.",
          type: "string",
        },
        description: "Post type to get the templates for.",
      },
      {
        name: "wp_id",
        in: "query",
        required: false,
        schema: {
          description: "Limit to the specified post id.",
          type: "integer",
        },
        description: "Limit to the specified post id.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "WpTemplate",
    },
  },
  {
    id: "postWpV2Templates",
    command: "templates-create",
    binding: {
      kind: "http",
      method: "POST",
      path: "/wp/v2/templates",
    },
    effect: "write",
    tags: ["templates"],
    permissions: [
      {
        key: "templates.publish",
      },
    ],
    parameters: [],
    request: {
      required: true,
      confidence: "contract",
      schema: "PostWpV2TemplatesRequest",
    },
    response: {
      confidence: "contract",
      schema: "WpTemplate",
    },
  },
  {
    id: "getWpV2TemplatesLookup",
    command: "templates-lookup-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/templates/lookup",
    },
    effect: "read",
    tags: ["templates"],
    parameters: [
      {
        name: "is_custom",
        in: "query",
        required: false,
        schema: {
          description: "Indicates if a template is custom or part of the template hierarchy",
          type: "boolean",
        },
        description: "Indicates if a template is custom or part of the template hierarchy",
      },
      {
        name: "slug",
        in: "query",
        required: true,
        schema: {
          description: "The slug of the template to get the fallback for",
          type: "string",
        },
        description: "The slug of the template to get the fallback for",
      },
      {
        name: "template_prefix",
        in: "query",
        required: false,
        schema: {
          description:
            "The template prefix for the created template. This is used to extract the main template type, e.g. in `taxonomy-books` extracts the `taxonomy`",
          type: "string",
        },
        description:
          "The template prefix for the created template. This is used to extract the main template type, e.g. in `taxonomy-books` extracts the `taxonomy`",
      },
    ],
  },
  {
    id: "getWpV2Themes",
    command: "themes-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/themes",
    },
    effect: "read",
    tags: ["themes"],
    parameters: [
      {
        name: "status",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to themes assigned one or more statuses.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to themes assigned one or more statuses.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "Theme",
    },
  },
  {
    id: "getWpV2Types",
    command: "types-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/types",
    },
    effect: "read",
    tags: ["types"],
    parameters: [
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "Type",
    },
  },
  {
    id: "getWpV2TypesByType",
    command: "types-get",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/types/{type}",
    },
    effect: "read",
    tags: ["types"],
    parameters: [
      {
        name: "type",
        in: "path",
        required: true,
        schema: {
          description: "An alphanumeric identifier for the post type.",
          type: "string",
        },
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "Type",
    },
  },
  {
    id: "getWpV2Users",
    command: "users-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/users",
    },
    effect: "read",
    tags: ["users"],
    pagination: {
      style: "page",
      page: {
        in: "query",
        name: "page",
      },
      limit: {
        in: "query",
        name: "per_page",
      },
      items: "",
      start: 1,
      pagesHeader: "x-wp-totalpages",
    },
    parameters: [
      {
        name: "capabilities",
        in: "query",
        required: false,
        schema: {
          description:
            "Limit result set to users matching at least one specific capability provided. Accepts csv list or single capability.; several, comma-separated",
          type: "string",
        },
        description:
          "Limit result set to users matching at least one specific capability provided. Accepts csv list or single capability.",
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
      {
        name: "exclude",
        in: "query",
        required: false,
        schema: {
          description: "Ensure result set excludes specific IDs.; several, comma-separated",
          type: "string",
        },
        description: "Ensure result set excludes specific IDs.",
      },
      {
        name: "has_published_posts",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to users who have published posts.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to users who have published posts.",
      },
      {
        name: "include",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to specific IDs.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to specific IDs.",
      },
      {
        name: "offset",
        in: "query",
        required: false,
        schema: {
          description: "Offset the result set by a specific number of items.",
          type: "integer",
        },
        description: "Offset the result set by a specific number of items.",
      },
      {
        name: "order",
        in: "query",
        required: false,
        schema: {
          description: "Order sort attribute ascending or descending.",
          default: "asc",
          type: "string",
          enum: ["asc", "desc"],
        },
        description: "Order sort attribute ascending or descending.",
      },
      {
        name: "orderby",
        in: "query",
        required: false,
        schema: {
          description: "Sort collection by user attribute.",
          default: "name",
          type: "string",
          enum: ["id", "include", "name", "registered_date", "slug", "include_slugs", "email", "url"],
        },
        description: "Sort collection by user attribute.",
      },
      {
        name: "page",
        in: "query",
        required: false,
        schema: {
          description: "Current page of the collection.",
          default: 1,
          type: "integer",
          minimum: 1,
        },
        description: "Current page of the collection.",
      },
      {
        name: "per_page",
        in: "query",
        required: false,
        schema: {
          description: "Maximum number of items to be returned in result set.",
          default: 10,
          type: "integer",
          minimum: 1,
          maximum: 100,
        },
        description: "Maximum number of items to be returned in result set.",
      },
      {
        name: "roles",
        in: "query",
        required: false,
        schema: {
          description:
            "Limit result set to users matching at least one specific role provided. Accepts csv list or single role.; several, comma-separated",
          type: "string",
        },
        description:
          "Limit result set to users matching at least one specific role provided. Accepts csv list or single role.",
      },
      {
        name: "search",
        in: "query",
        required: false,
        schema: {
          description: "Limit results to those matching a string.",
          type: "string",
        },
        description: "Limit results to those matching a string.",
      },
      {
        name: "search_columns",
        in: "query",
        required: false,
        schema: {
          description: "Array of column names to be searched.; several, comma-separated",
          type: "string",
        },
        description: "Array of column names to be searched.",
      },
      {
        name: "slug",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to users with one or more specific slugs.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to users with one or more specific slugs.",
      },
      {
        name: "who",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to users who are considered authors.",
          type: "string",
          enum: ["authors"],
        },
        description: "Limit result set to users who are considered authors.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetWpV2UsersResponse",
    },
  },
  {
    id: "postWpV2Users",
    command: "users-create",
    binding: {
      kind: "http",
      method: "POST",
      path: "/wp/v2/users",
    },
    effect: "write",
    tags: ["users"],
    parameters: [],
    request: {
      required: true,
      confidence: "contract",
      schema: "PostWpV2UsersRequest",
    },
    response: {
      confidence: "contract",
      schema: "User",
    },
  },
  {
    id: "getWpV2UsersById",
    command: "users-get",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/users/{id}",
    },
    effect: "read",
    tags: ["users"],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "Unique identifier for the user.",
          type: "integer",
        },
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "User",
    },
  },
  {
    id: "postWpV2UsersById",
    command: "users-update",
    binding: {
      kind: "http",
      method: "POST",
      path: "/wp/v2/users/{id}",
    },
    effect: "write",
    tags: ["users"],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "Unique identifier for the user.",
          type: "integer",
        },
      },
    ],
    request: {
      required: false,
      confidence: "contract",
      schema: "PostWpV2UsersByIdRequest",
    },
    response: {
      confidence: "contract",
      schema: "User",
    },
  },
  {
    id: "deleteWpV2UsersById",
    command: "users-delete",
    binding: {
      kind: "http",
      method: "DELETE",
      path: "/wp/v2/users/{id}",
    },
    effect: "destructive",
    tags: ["users"],
    permissions: [
      {
        key: "users.delete",
      },
      {
        key: "users.delete.force",
        query: ["force"],
      },
    ],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "Unique identifier for the user.",
          type: "integer",
        },
      },
      {
        name: "force",
        in: "query",
        required: false,
        schema: {
          description: "Required to be true, as users do not support trashing.",
          default: false,
          type: "boolean",
        },
        description: "Required to be true, as users do not support trashing.",
      },
      {
        name: "reassign",
        in: "query",
        required: true,
        schema: {
          description: "Reassign the deleted user's posts and links to this user ID.",
          type: "integer",
        },
        description: "Reassign the deleted user's posts and links to this user ID.",
      },
    ],
  },
  {
    id: "getWpV2UsersByUserIdApplicationPasswords",
    command: "users-application-passwords-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/users/{user_id}/application-passwords",
    },
    effect: "read",
    tags: ["users"],
    parameters: [
      {
        name: "user_id",
        in: "path",
        required: true,
        schema: {
          type: "string",
          pattern: "^(?:(?:[\\d]+|me))$",
        },
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "ApplicationPassword",
    },
  },
  {
    id: "postWpV2UsersByUserIdApplicationPasswords",
    command: "users-application-passwords-create",
    binding: {
      kind: "http",
      method: "POST",
      path: "/wp/v2/users/{user_id}/application-passwords",
    },
    effect: "write",
    tags: ["users"],
    parameters: [
      {
        name: "user_id",
        in: "path",
        required: true,
        schema: {
          type: "string",
          pattern: "^(?:(?:[\\d]+|me))$",
        },
      },
    ],
    request: {
      required: true,
      confidence: "contract",
      schema: "PostWpV2UsersByUserIdApplicationPasswordsRequest",
    },
    response: {
      confidence: "contract",
      schema: "ApplicationPassword",
    },
  },
  {
    id: "deleteWpV2UsersByUserIdApplicationPasswords",
    command: "users-application-passwords-delete-all",
    binding: {
      kind: "http",
      method: "DELETE",
      path: "/wp/v2/users/{user_id}/application-passwords",
    },
    effect: "destructive",
    tags: ["users"],
    permissions: [
      {
        key: "users.delete",
      },
    ],
    parameters: [
      {
        name: "user_id",
        in: "path",
        required: true,
        schema: {
          type: "string",
          pattern: "^(?:(?:[\\d]+|me))$",
        },
      },
    ],
  },
  {
    id: "getWpV2UsersByUserIdApplicationPasswordsByUuid",
    command: "users-application-passwords-get",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/users/{user_id}/application-passwords/{uuid}",
    },
    effect: "read",
    tags: ["users"],
    parameters: [
      {
        name: "user_id",
        in: "path",
        required: true,
        schema: {
          type: "string",
          pattern: "^(?:(?:[\\d]+|me))$",
        },
      },
      {
        name: "uuid",
        in: "path",
        required: true,
        schema: {
          type: "string",
          pattern: "^(?:[\\w\\-]+)$",
        },
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "ApplicationPassword",
    },
  },
  {
    id: "postWpV2UsersByUserIdApplicationPasswordsByUuid",
    command: "users-application-passwords-update",
    binding: {
      kind: "http",
      method: "POST",
      path: "/wp/v2/users/{user_id}/application-passwords/{uuid}",
    },
    effect: "write",
    tags: ["users"],
    parameters: [
      {
        name: "user_id",
        in: "path",
        required: true,
        schema: {
          type: "string",
          pattern: "^(?:(?:[\\d]+|me))$",
        },
      },
      {
        name: "uuid",
        in: "path",
        required: true,
        schema: {
          type: "string",
          pattern: "^(?:[\\w\\-]+)$",
        },
      },
    ],
    request: {
      required: false,
      confidence: "contract",
      schema: "PostWpV2UsersByUserIdApplicationPasswordsByUuidRequest",
    },
    response: {
      confidence: "contract",
      schema: "ApplicationPassword",
    },
  },
  {
    id: "deleteWpV2UsersByUserIdApplicationPasswordsByUuid",
    command: "users-application-passwords-delete",
    binding: {
      kind: "http",
      method: "DELETE",
      path: "/wp/v2/users/{user_id}/application-passwords/{uuid}",
    },
    effect: "destructive",
    tags: ["users"],
    permissions: [
      {
        key: "users.delete",
      },
    ],
    parameters: [
      {
        name: "user_id",
        in: "path",
        required: true,
        schema: {
          type: "string",
          pattern: "^(?:(?:[\\d]+|me))$",
        },
      },
      {
        name: "uuid",
        in: "path",
        required: true,
        schema: {
          type: "string",
          pattern: "^(?:[\\w\\-]+)$",
        },
      },
    ],
  },
  {
    id: "getWpV2UsersByUserIdApplicationPasswordsIntrospect",
    command: "users-application-passwords-introspect-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/users/{user_id}/application-passwords/introspect",
    },
    effect: "read",
    tags: ["users"],
    parameters: [
      {
        name: "user_id",
        in: "path",
        required: true,
        schema: {
          type: "string",
          pattern: "^(?:(?:[\\d]+|me))$",
        },
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "ApplicationPassword",
    },
  },
  {
    id: "getWpV2UsersMe",
    command: "users-me-get",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/users/me",
    },
    effect: "read",
    tags: ["users"],
    parameters: [
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "User",
    },
  },
  {
    id: "postWpV2UsersMe",
    command: "users-me-create",
    binding: {
      kind: "http",
      method: "POST",
      path: "/wp/v2/users/me",
    },
    effect: "write",
    tags: ["users"],
    parameters: [],
    request: {
      required: false,
      confidence: "contract",
      schema: "PostWpV2UsersMeRequest",
    },
    response: {
      confidence: "contract",
      schema: "User",
    },
  },
  {
    id: "deleteWpV2UsersMe",
    command: "users-me-delete",
    binding: {
      kind: "http",
      method: "DELETE",
      path: "/wp/v2/users/me",
    },
    effect: "destructive",
    tags: ["users"],
    permissions: [
      {
        key: "users.delete",
      },
      {
        key: "users.delete.force",
        query: ["force"],
      },
    ],
    parameters: [
      {
        name: "force",
        in: "query",
        required: false,
        schema: {
          description: "Required to be true, as users do not support trashing.",
          default: false,
          type: "boolean",
        },
        description: "Required to be true, as users do not support trashing.",
      },
      {
        name: "reassign",
        in: "query",
        required: true,
        schema: {
          description: "Reassign the deleted user's posts and links to this user ID.",
          type: "integer",
        },
        description: "Reassign the deleted user's posts and links to this user ID.",
      },
    ],
  },
  {
    id: "getWpV2WidgetTypes",
    command: "widget-types-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/widget-types",
    },
    effect: "read",
    tags: ["widget-types"],
    parameters: [
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "WidgetType",
    },
  },
  {
    id: "getWpV2WidgetTypesById",
    command: "widget-types-get",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/widget-types/{id}",
    },
    effect: "read",
    tags: ["widget-types"],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "The widget type id.",
          type: "string",
        },
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "WidgetType",
    },
  },
  {
    id: "postWpV2WidgetTypesByIdEncode",
    command: "widget-types-encode",
    binding: {
      kind: "http",
      method: "POST",
      path: "/wp/v2/widget-types/{id}/encode",
    },
    effect: "write",
    tags: ["widget-types"],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "The widget type id.",
          type: "string",
        },
      },
    ],
    request: {
      required: false,
      confidence: "contract",
      schema: "PostWpV2WidgetTypesByIdEncodeRequest",
    },
  },
  {
    id: "postWpV2WidgetTypesByIdRender",
    command: "widget-types-render",
    binding: {
      kind: "http",
      method: "POST",
      path: "/wp/v2/widget-types/{id}/render",
    },
    effect: "write",
    tags: ["widget-types"],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "The widget type id.",
          type: "string",
        },
      },
    ],
    request: {
      required: false,
      confidence: "contract",
      schema: "PostWpV2WidgetTypesByIdRenderRequest",
    },
  },
  {
    id: "getWpV2Widgets",
    command: "widgets-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/widgets",
    },
    effect: "read",
    tags: ["widgets"],
    parameters: [
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
      {
        name: "sidebar",
        in: "query",
        required: false,
        schema: {
          description: "The sidebar to return widgets for.",
          type: "string",
        },
        description: "The sidebar to return widgets for.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "Widget",
    },
  },
  {
    id: "postWpV2Widgets",
    command: "widgets-create",
    binding: {
      kind: "http",
      method: "POST",
      path: "/wp/v2/widgets",
    },
    effect: "write",
    tags: ["widgets"],
    parameters: [],
    request: {
      required: true,
      confidence: "contract",
      schema: "PostWpV2WidgetsRequest",
    },
    response: {
      confidence: "contract",
      schema: "Widget",
    },
  },
  {
    id: "getWpV2WidgetsById",
    command: "widgets-get",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/widgets/{id}",
    },
    effect: "read",
    tags: ["widgets"],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          type: "string",
          pattern: "^(?:[\\w\\-]+)$",
        },
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "Widget",
    },
  },
  {
    id: "postWpV2WidgetsById",
    command: "widgets-update",
    binding: {
      kind: "http",
      method: "POST",
      path: "/wp/v2/widgets/{id}",
    },
    effect: "write",
    tags: ["widgets"],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "Unique identifier for the widget.",
          type: "string",
        },
      },
    ],
    request: {
      required: false,
      confidence: "contract",
      schema: "PostWpV2WidgetsByIdRequest",
    },
    response: {
      confidence: "contract",
      schema: "Widget",
    },
  },
  {
    id: "deleteWpV2WidgetsById",
    command: "widgets-delete",
    binding: {
      kind: "http",
      method: "DELETE",
      path: "/wp/v2/widgets/{id}",
    },
    effect: "destructive",
    tags: ["widgets"],
    permissions: [
      {
        key: "widgets.delete",
      },
      {
        key: "widgets.delete.force",
        query: ["force"],
      },
    ],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          type: "string",
          pattern: "^(?:[\\w\\-]+)$",
        },
      },
      {
        name: "force",
        in: "query",
        required: false,
        schema: {
          description: "Whether to force removal of the widget, or move it to the inactive sidebar.",
          type: "boolean",
        },
        description: "Whether to force removal of the widget, or move it to the inactive sidebar.",
      },
    ],
  },
  {
    id: "getWpV2WpPatternCategory",
    command: "wp-pattern-category-list",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/wp_pattern_category",
    },
    effect: "read",
    tags: ["wp_pattern_category"],
    pagination: {
      style: "page",
      page: {
        in: "query",
        name: "page",
      },
      limit: {
        in: "query",
        name: "per_page",
      },
      items: "",
      start: 1,
      pagesHeader: "x-wp-totalpages",
    },
    parameters: [
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
      {
        name: "exclude",
        in: "query",
        required: false,
        schema: {
          description: "Ensure result set excludes specific IDs.; several, comma-separated",
          type: "string",
        },
        description: "Ensure result set excludes specific IDs.",
      },
      {
        name: "hide_empty",
        in: "query",
        required: false,
        schema: {
          description: "Whether to hide terms not assigned to any posts.",
          default: false,
          type: "boolean",
        },
        description: "Whether to hide terms not assigned to any posts.",
      },
      {
        name: "include",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to specific IDs.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to specific IDs.",
      },
      {
        name: "offset",
        in: "query",
        required: false,
        schema: {
          description: "Offset the result set by a specific number of items.",
          type: "integer",
        },
        description: "Offset the result set by a specific number of items.",
      },
      {
        name: "order",
        in: "query",
        required: false,
        schema: {
          description: "Order sort attribute ascending or descending.",
          default: "asc",
          type: "string",
          enum: ["asc", "desc"],
        },
        description: "Order sort attribute ascending or descending.",
      },
      {
        name: "orderby",
        in: "query",
        required: false,
        schema: {
          description: "Sort collection by term attribute.",
          default: "name",
          type: "string",
          enum: ["id", "include", "name", "slug", "include_slugs", "term_group", "description", "count"],
        },
        description: "Sort collection by term attribute.",
      },
      {
        name: "page",
        in: "query",
        required: false,
        schema: {
          description: "Current page of the collection.",
          default: 1,
          type: "integer",
          minimum: 1,
        },
        description: "Current page of the collection.",
      },
      {
        name: "per_page",
        in: "query",
        required: false,
        schema: {
          description: "Maximum number of items to be returned in result set.",
          default: 10,
          type: "integer",
          minimum: 1,
          maximum: 100,
        },
        description: "Maximum number of items to be returned in result set.",
      },
      {
        name: "post",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to terms assigned to a specific post.",
          default: null,
          type: "integer",
        },
        description: "Limit result set to terms assigned to a specific post.",
      },
      {
        name: "search",
        in: "query",
        required: false,
        schema: {
          description: "Limit results to those matching a string.",
          type: "string",
        },
        description: "Limit results to those matching a string.",
      },
      {
        name: "slug",
        in: "query",
        required: false,
        schema: {
          description: "Limit result set to terms with one or more specific slugs.; several, comma-separated",
          type: "string",
        },
        description: "Limit result set to terms with one or more specific slugs.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "GetWpV2WpPatternCategoryResponse",
    },
  },
  {
    id: "postWpV2WpPatternCategory",
    command: "wp-pattern-category-create",
    binding: {
      kind: "http",
      method: "POST",
      path: "/wp/v2/wp_pattern_category",
    },
    effect: "write",
    tags: ["wp_pattern_category"],
    parameters: [],
    request: {
      required: true,
      confidence: "contract",
      schema: "PostWpV2WpPatternCategoryRequest",
    },
    response: {
      confidence: "contract",
      schema: "WpPatternCategory",
    },
  },
  {
    id: "getWpV2WpPatternCategoryById",
    command: "wp-pattern-category-get",
    binding: {
      kind: "http",
      method: "GET",
      path: "/wp/v2/wp_pattern_category/{id}",
    },
    effect: "read",
    tags: ["wp_pattern_category"],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "Unique identifier for the term.",
          type: "integer",
        },
      },
      {
        name: "context",
        in: "query",
        required: false,
        schema: {
          description: "Scope under which the request is made; determines fields present in response.",
          default: "view",
          type: "string",
          enum: ["view", "embed", "edit"],
        },
        description: "Scope under which the request is made; determines fields present in response.",
      },
    ],
    response: {
      confidence: "contract",
      schema: "WpPatternCategory",
    },
  },
  {
    id: "postWpV2WpPatternCategoryById",
    command: "wp-pattern-category-update",
    binding: {
      kind: "http",
      method: "POST",
      path: "/wp/v2/wp_pattern_category/{id}",
    },
    effect: "write",
    tags: ["wp_pattern_category"],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "Unique identifier for the term.",
          type: "integer",
        },
      },
    ],
    request: {
      required: false,
      confidence: "contract",
      schema: "PostWpV2WpPatternCategoryByIdRequest",
    },
    response: {
      confidence: "contract",
      schema: "WpPatternCategory",
    },
  },
  {
    id: "deleteWpV2WpPatternCategoryById",
    command: "wp-pattern-category-delete",
    binding: {
      kind: "http",
      method: "DELETE",
      path: "/wp/v2/wp_pattern_category/{id}",
    },
    effect: "destructive",
    tags: ["wp_pattern_category"],
    permissions: [
      {
        key: "wp_pattern_category.delete",
      },
      {
        key: "wp_pattern_category.delete.force",
        query: ["force"],
      },
    ],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          description: "Unique identifier for the term.",
          type: "integer",
        },
      },
      {
        name: "force",
        in: "query",
        required: false,
        schema: {
          description: "Required to be true, as terms do not support trashing.",
          default: false,
          type: "boolean",
        },
        description: "Required to be true, as terms do not support trashing.",
      },
    ],
  },
]

export const servers: readonly ApiServer[] = [
  {
    url: "https://{site}/wp-json",
    variables: {
      site: {
        default: "example.com",
      },
    },
  },
]

export const securitySchemes: Readonly<Record<string, SecurityScheme>> = {
  applicationPassword: {
    scheme: "basic",
    type: "http",
  },
}

export const security: readonly SecurityRequirement[] = [
  {
    applicationPassword: [],
  },
]

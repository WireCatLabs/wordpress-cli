// Generated from wirecat.config.ts by scripts/from-config.ts; run pnpm generate

export const VERIFY: { operation: string; id: string; name?: string; active?: string } = {
  operation: "getWpV2UsersMe",
  id: "id",
  name: "name",
}

export const SOURCE: Readonly<Record<string, unknown>> & {
  readonly provider: string
  readonly kinds: readonly string[]
} = {
  provider: "wordpress",
  kinds: ["author", "term", "post"],
  channel: {
    kind: "blog",
    network: "wordpress",
  },
  entities: {
    author: [
      {
        list: {
          operation: "getWpV2Users",
          query: {
            context: "edit",
            per_page: 100,
            orderby: "id",
          },
        },
        get: {
          operation: "getWpV2UsersById",
          path: {
            id: "{id}",
          },
          query: {
            context: "edit",
          },
        },
        map: {
          externalId: "id",
          name: "name",
          email: "email",
          slug: "slug",
        },
        optional: {
          message: "only an administrator lists the users",
          scope: "list_users",
        },
      },
    ],
    term: [
      {
        list: {
          operation: "getWpV2Tags",
          query: {
            per_page: 100,
            orderby: "id",
          },
        },
        get: {
          operation: "getWpV2TagsById",
          path: {
            id: "{id}",
          },
        },
        map: {
          externalId: "id",
          kind: {
            value: "tag",
          },
          name: "name",
          slug: "slug",
        },
      },
      {
        list: {
          operation: "getWpV2Categories",
          query: {
            per_page: 100,
            orderby: "id",
          },
        },
        get: {
          operation: "getWpV2CategoriesById",
          path: {
            id: "{id}",
          },
        },
        map: {
          externalId: "id",
          kind: {
            value: "category",
          },
          name: "name",
          slug: "slug",
        },
      },
    ],
    post: [
      {
        list: {
          operation: "getWpV2Posts",
          query: {
            context: "edit",
            status: "publish,future,draft,pending,private,trash",
            per_page: 100,
            orderby: "id",
            order: "asc",
          },
        },
        changes: {
          operation: "getWpV2Posts",
          query: {
            context: "edit",
            status: "publish,future,draft,pending,private,trash",
            per_page: 100,
            orderby: "modified",
            order: "asc",
            modified_after: "{since}",
          },
          since: "iso",
          keyset: {
            field: "modified_gmt",
          },
        },
        ids: {
          operation: "getWpV2Posts",
          query: {
            context: "edit",
            status: "publish,future,draft,pending,private,trash",
            per_page: 100,
            orderby: "id",
            _fields: "id",
          },
        },
        get: {
          operation: "getWpV2PostsById",
          path: {
            id: "{id}",
          },
          query: {
            context: "edit",
          },
        },
        map: {
          externalId: "id",
          type: {
            value: "post",
          },
          title: "title.raw",
          excerpt: "excerpt.raw",
          url: "link",
          slug: "slug",
          status: {
            path: "status",
            map: {
              publish: "published",
              future: "scheduled",
              draft: "draft",
              pending: "pending",
              private: "private",
              trash: "trashed",
            },
          },
          publishedAt: "date_gmt",
          scheduledFor: "date_gmt",
          updatedAt: "modified_gmt",
          version: "modified_gmt",
          authors: "author",
          terms: {
            all: ["tags", "categories"],
          },
        },
        body: {
          path: "content.raw",
          format: "wp-blocks",
          fallback: {
            path: "content.rendered",
            format: "html",
          },
        },
        optional: {
          message: "the sign-in may not read every post or page: an author or a contributor reads only some",
          scope: "edit_others_posts",
          requires: {
            operation: "getWpV2UsersMe",
            query: {
              context: "edit",
              _fields: "capabilities",
            },
            check: "capabilities.edit_others_posts",
          },
        },
      },
      {
        list: {
          operation: "getWpV2Pages",
          query: {
            context: "edit",
            status: "publish,future,draft,pending,private,trash",
            per_page: 100,
            orderby: "id",
            order: "asc",
          },
        },
        changes: {
          operation: "getWpV2Pages",
          query: {
            context: "edit",
            status: "publish,future,draft,pending,private,trash",
            per_page: 100,
            orderby: "modified",
            order: "asc",
            modified_after: "{since}",
          },
          since: "iso",
          keyset: {
            field: "modified_gmt",
          },
        },
        ids: {
          operation: "getWpV2Pages",
          query: {
            context: "edit",
            status: "publish,future,draft,pending,private,trash",
            per_page: 100,
            orderby: "id",
            _fields: "id",
          },
        },
        get: {
          operation: "getWpV2PagesById",
          path: {
            id: "{id}",
          },
          query: {
            context: "edit",
          },
        },
        map: {
          externalId: "id",
          type: {
            value: "page",
          },
          title: "title.raw",
          excerpt: "excerpt.raw",
          url: "link",
          slug: "slug",
          status: {
            path: "status",
            map: {
              publish: "published",
              future: "scheduled",
              draft: "draft",
              pending: "pending",
              private: "private",
              trash: "trashed",
            },
          },
          publishedAt: "date_gmt",
          scheduledFor: "date_gmt",
          updatedAt: "modified_gmt",
          version: "modified_gmt",
          authors: "author",
          terms: {
            all: ["tags", "categories"],
          },
        },
        body: {
          path: "content.raw",
          format: "wp-blocks",
          fallback: {
            path: "content.rendered",
            format: "html",
          },
        },
        optional: {
          message: "the sign-in may not read every post or page: an author or a contributor reads only some",
          scope: "edit_others_posts",
          requires: {
            operation: "getWpV2UsersMe",
            query: {
              context: "edit",
              _fields: "capabilities",
            },
            check: "capabilities.edit_others_posts",
          },
        },
      },
    ],
  },
  writes: {
    create: {
      operation: "postWpV2Posts",
      body: {
        status: "draft",
      },
    },
    update: {
      operation: "postWpV2PostsById",
      path: {
        id: "{id}",
      },
    },
    trash: {
      operation: "deleteWpV2PostsById",
      path: {
        id: "{id}",
      },
    },
    delete: {
      operation: "deleteWpV2PostsById",
      path: {
        id: "{id}",
      },
      query: {
        force: true,
      },
    },
    fields: {
      title: "title.raw",
      body: "content.raw",
      excerpt: "excerpt.raw",
      slug: "slug",
      terms: {
        tag: "tags",
        category: "categories",
      },
    },
    publish: {
      status: "publish",
    },
    schedule: {
      status: "future",
      date_gmt: "{at}",
    },
    unpublish: {
      status: "draft",
    },
  },
}

<!--
GENERATED. DO NOT EDIT.
Source: spec/wordpress/, checked against provenance.json
Run: pnpm generate
-->

# API coverage

150 operations from openapi unknown.

| Operation | Call | Command | Effect | Request source | Status | Summary |
|---|---|---|---|---|---|---|
| `getWpV2BlockDirectorySearch` | `GET /wp/v2/block-directory/search` | `wordpress <profile> api block-directory-search-list` | read | — | generated |  |
| `getWpV2BlockPatternsCategories` | `GET /wp/v2/block-patterns/categories` | `wordpress <profile> api block-patterns-categories-list` | read | — | generated |  |
| `getWpV2BlockPatternsPatterns` | `GET /wp/v2/block-patterns/patterns` | `wordpress <profile> api block-patterns-patterns-list` | read | — | generated |  |
| `getWpV2BlockTypes` | `GET /wp/v2/block-types` | `wordpress <profile> api block-types-list` | read | — | generated |  |
| `getWpV2BlockTypesByNamespace` | `GET /wp/v2/block-types/{namespace}` | `wordpress <profile> api block-types-list-namespace` | read | — | generated |  |
| `getWpV2BlockTypesByNamespaceByName` | `GET /wp/v2/block-types/{namespace}/{name}` | `wordpress <profile> api block-types-get` | read | — | generated |  |
| `getWpV2Blocks` | `GET /wp/v2/blocks` | `wordpress <profile> api blocks-list` | read | — | generated |  |
| `postWpV2Blocks` | `POST /wp/v2/blocks` | `wordpress <profile> api blocks-create` | write | contract | generated |  |
| `getWpV2BlocksById` | `GET /wp/v2/blocks/{id}` | `wordpress <profile> api blocks-get` | read | — | generated |  |
| `postWpV2BlocksById` | `POST /wp/v2/blocks/{id}` | `wordpress <profile> api blocks-update` | write | contract | generated |  |
| `deleteWpV2BlocksById` | `DELETE /wp/v2/blocks/{id}` | `wordpress <profile> api blocks-delete` | destructive | — | generated |  |
| `getWpV2BlocksByIdAutosaves` | `GET /wp/v2/blocks/{id}/autosaves` | `wordpress <profile> api blocks-autosaves-list` | read | — | generated |  |
| `postWpV2BlocksByIdAutosaves` | `POST /wp/v2/blocks/{id}/autosaves` | `wordpress <profile> api blocks-autosaves-create` | write | contract | generated |  |
| `getWpV2BlocksByParentAutosavesById` | `GET /wp/v2/blocks/{parent}/autosaves/{id}` | `wordpress <profile> api blocks-autosaves-get` | read | — | generated |  |
| `getWpV2BlocksByParentRevisions` | `GET /wp/v2/blocks/{parent}/revisions` | `wordpress <profile> api blocks-revisions-list` | read | — | generated |  |
| `getWpV2BlocksByParentRevisionsById` | `GET /wp/v2/blocks/{parent}/revisions/{id}` | `wordpress <profile> api blocks-revisions-get` | read | — | generated |  |
| `deleteWpV2BlocksByParentRevisionsById` | `DELETE /wp/v2/blocks/{parent}/revisions/{id}` | `wordpress <profile> api blocks-revisions-delete` | destructive | — | generated |  |
| `getWpV2Categories` | `GET /wp/v2/categories` | `wordpress <profile> api categories-list` | read | — | generated |  |
| `postWpV2Categories` | `POST /wp/v2/categories` | `wordpress <profile> api categories-create` | write | contract | generated |  |
| `getWpV2CategoriesById` | `GET /wp/v2/categories/{id}` | `wordpress <profile> api categories-get` | read | — | generated |  |
| `postWpV2CategoriesById` | `POST /wp/v2/categories/{id}` | `wordpress <profile> api categories-update` | write | contract | generated |  |
| `deleteWpV2CategoriesById` | `DELETE /wp/v2/categories/{id}` | `wordpress <profile> api categories-delete` | destructive | — | generated |  |
| `getWpV2Comments` | `GET /wp/v2/comments` | `wordpress <profile> api comments-list` | read | — | generated |  |
| `postWpV2Comments` | `POST /wp/v2/comments` | `wordpress <profile> api comments-create` | write | contract | generated |  |
| `getWpV2CommentsById` | `GET /wp/v2/comments/{id}` | `wordpress <profile> api comments-get` | read | — | generated |  |
| `postWpV2CommentsById` | `POST /wp/v2/comments/{id}` | `wordpress <profile> api comments-update` | write | contract | generated |  |
| `deleteWpV2CommentsById` | `DELETE /wp/v2/comments/{id}` | `wordpress <profile> api comments-delete` | destructive | — | generated |  |
| `getWpV2FontCollections` | `GET /wp/v2/font-collections` | `wordpress <profile> api font-collections-list` | read | — | generated |  |
| `getWpV2FontFamilies` | `GET /wp/v2/font-families` | `wordpress <profile> api font-families-list` | read | — | generated |  |
| `postWpV2FontFamilies` | `POST /wp/v2/font-families` | `wordpress <profile> api font-families-create` | write | contract | generated |  |
| `getWpV2FontFamiliesByFontFamilyIdFontFaces` | `GET /wp/v2/font-families/{font_family_id}/font-faces` | `wordpress <profile> api font-families-font-faces-list` | read | — | generated |  |
| `postWpV2FontFamiliesByFontFamilyIdFontFaces` | `POST /wp/v2/font-families/{font_family_id}/font-faces` | `wordpress <profile> api font-families-font-faces-create` | write | contract | generated |  |
| `getWpV2FontFamiliesByFontFamilyIdFontFacesById` | `GET /wp/v2/font-families/{font_family_id}/font-faces/{id}` | `wordpress <profile> api font-families-font-faces-get` | read | — | generated |  |
| `deleteWpV2FontFamiliesByFontFamilyIdFontFacesById` | `DELETE /wp/v2/font-families/{font_family_id}/font-faces/{id}` | `wordpress <profile> api font-families-font-faces-delete` | destructive | — | generated |  |
| `getWpV2FontFamiliesById` | `GET /wp/v2/font-families/{id}` | `wordpress <profile> api font-families-get` | read | — | generated |  |
| `postWpV2FontFamiliesById` | `POST /wp/v2/font-families/{id}` | `wordpress <profile> api font-families-update` | write | contract | generated |  |
| `deleteWpV2FontFamiliesById` | `DELETE /wp/v2/font-families/{id}` | `wordpress <profile> api font-families-delete` | destructive | — | generated |  |
| `getWpV2GlobalStylesByParentRevisions` | `GET /wp/v2/global-styles/{parent}/revisions` | `wordpress <profile> api global-styles-revisions-list` | read | — | generated |  |
| `getWpV2GlobalStylesByParentRevisionsById` | `GET /wp/v2/global-styles/{parent}/revisions/{id}` | `wordpress <profile> api global-styles-revisions-get` | read | — | generated |  |
| `getWpV2Media` | `GET /wp/v2/media` | `wordpress <profile> api media-list` | read | — | generated |  |
| `postWpV2Media` | `POST /wp/v2/media` | `wordpress <profile> api media-create` | write | contract | generated |  |
| `getWpV2MediaById` | `GET /wp/v2/media/{id}` | `wordpress <profile> api media-get` | read | — | generated |  |
| `postWpV2MediaById` | `POST /wp/v2/media/{id}` | `wordpress <profile> api media-update` | write | contract | generated |  |
| `deleteWpV2MediaById` | `DELETE /wp/v2/media/{id}` | `wordpress <profile> api media-delete` | destructive | — | generated |  |
| `postWpV2MediaByIdEdit` | `POST /wp/v2/media/{id}/edit` | `wordpress <profile> api media-edit` | write | contract | generated |  |
| `postWpV2MediaByIdPostProcess` | `POST /wp/v2/media/{id}/post-process` | `wordpress <profile> api media-post-process` | write | contract | generated |  |
| `getWpV2MenuItems` | `GET /wp/v2/menu-items` | `wordpress <profile> api menu-items-list` | read | — | generated |  |
| `postWpV2MenuItems` | `POST /wp/v2/menu-items` | `wordpress <profile> api menu-items-create` | write | contract | generated |  |
| `getWpV2MenuItemsById` | `GET /wp/v2/menu-items/{id}` | `wordpress <profile> api menu-items-get` | read | — | generated |  |
| `postWpV2MenuItemsById` | `POST /wp/v2/menu-items/{id}` | `wordpress <profile> api menu-items-update` | write | contract | generated |  |
| `deleteWpV2MenuItemsById` | `DELETE /wp/v2/menu-items/{id}` | `wordpress <profile> api menu-items-delete` | destructive | — | generated |  |
| `getWpV2MenuItemsByIdAutosaves` | `GET /wp/v2/menu-items/{id}/autosaves` | `wordpress <profile> api menu-items-autosaves-list` | read | — | generated |  |
| `postWpV2MenuItemsByIdAutosaves` | `POST /wp/v2/menu-items/{id}/autosaves` | `wordpress <profile> api menu-items-autosaves-create` | write | contract | generated |  |
| `getWpV2MenuItemsByParentAutosavesById` | `GET /wp/v2/menu-items/{parent}/autosaves/{id}` | `wordpress <profile> api menu-items-autosaves-get` | read | — | generated |  |
| `getWpV2MenuLocations` | `GET /wp/v2/menu-locations` | `wordpress <profile> api menu-locations-list` | read | — | generated |  |
| `getWpV2MenuLocationsByLocation` | `GET /wp/v2/menu-locations/{location}` | `wordpress <profile> api menu-locations-get` | read | — | generated |  |
| `getWpV2Menus` | `GET /wp/v2/menus` | `wordpress <profile> api menus-list` | read | — | generated |  |
| `postWpV2Menus` | `POST /wp/v2/menus` | `wordpress <profile> api menus-create` | write | contract | generated |  |
| `getWpV2MenusById` | `GET /wp/v2/menus/{id}` | `wordpress <profile> api menus-get` | read | — | generated |  |
| `postWpV2MenusById` | `POST /wp/v2/menus/{id}` | `wordpress <profile> api menus-update` | write | contract | generated |  |
| `deleteWpV2MenusById` | `DELETE /wp/v2/menus/{id}` | `wordpress <profile> api menus-delete` | destructive | — | generated |  |
| `getWpV2Navigation` | `GET /wp/v2/navigation` | `wordpress <profile> api navigation-list` | read | — | generated |  |
| `postWpV2Navigation` | `POST /wp/v2/navigation` | `wordpress <profile> api navigation-create` | write | contract | generated |  |
| `getWpV2NavigationById` | `GET /wp/v2/navigation/{id}` | `wordpress <profile> api navigation-get` | read | — | generated |  |
| `postWpV2NavigationById` | `POST /wp/v2/navigation/{id}` | `wordpress <profile> api navigation-update` | write | contract | generated |  |
| `deleteWpV2NavigationById` | `DELETE /wp/v2/navigation/{id}` | `wordpress <profile> api navigation-delete` | destructive | — | generated |  |
| `getWpV2NavigationByIdAutosaves` | `GET /wp/v2/navigation/{id}/autosaves` | `wordpress <profile> api navigation-autosaves-list` | read | — | generated |  |
| `postWpV2NavigationByIdAutosaves` | `POST /wp/v2/navigation/{id}/autosaves` | `wordpress <profile> api navigation-autosaves-create` | write | contract | generated |  |
| `getWpV2NavigationByParentAutosavesById` | `GET /wp/v2/navigation/{parent}/autosaves/{id}` | `wordpress <profile> api navigation-autosaves-get` | read | — | generated |  |
| `getWpV2NavigationByParentRevisions` | `GET /wp/v2/navigation/{parent}/revisions` | `wordpress <profile> api navigation-revisions-list` | read | — | generated |  |
| `getWpV2NavigationByParentRevisionsById` | `GET /wp/v2/navigation/{parent}/revisions/{id}` | `wordpress <profile> api navigation-revisions-get` | read | — | generated |  |
| `deleteWpV2NavigationByParentRevisionsById` | `DELETE /wp/v2/navigation/{parent}/revisions/{id}` | `wordpress <profile> api navigation-revisions-delete` | destructive | — | generated |  |
| `getWpV2Pages` | `GET /wp/v2/pages` | `wordpress <profile> api pages-list` | read | — | generated |  |
| `postWpV2Pages` | `POST /wp/v2/pages` | `wordpress <profile> api pages-create` | write | contract | generated |  |
| `getWpV2PagesById` | `GET /wp/v2/pages/{id}` | `wordpress <profile> api pages-get` | read | — | generated |  |
| `postWpV2PagesById` | `POST /wp/v2/pages/{id}` | `wordpress <profile> api pages-update` | write | contract | generated |  |
| `deleteWpV2PagesById` | `DELETE /wp/v2/pages/{id}` | `wordpress <profile> api pages-delete` | destructive | — | generated |  |
| `getWpV2PagesByIdAutosaves` | `GET /wp/v2/pages/{id}/autosaves` | `wordpress <profile> api pages-autosaves-list` | read | — | generated |  |
| `postWpV2PagesByIdAutosaves` | `POST /wp/v2/pages/{id}/autosaves` | `wordpress <profile> api pages-autosaves-create` | write | contract | generated |  |
| `getWpV2PagesByParentAutosavesById` | `GET /wp/v2/pages/{parent}/autosaves/{id}` | `wordpress <profile> api pages-autosaves-get` | read | — | generated |  |
| `getWpV2PagesByParentRevisions` | `GET /wp/v2/pages/{parent}/revisions` | `wordpress <profile> api pages-revisions-list` | read | — | generated |  |
| `getWpV2PagesByParentRevisionsById` | `GET /wp/v2/pages/{parent}/revisions/{id}` | `wordpress <profile> api pages-revisions-get` | read | — | generated |  |
| `deleteWpV2PagesByParentRevisionsById` | `DELETE /wp/v2/pages/{parent}/revisions/{id}` | `wordpress <profile> api pages-revisions-delete` | destructive | — | generated |  |
| `getWpV2PatternDirectoryPatterns` | `GET /wp/v2/pattern-directory/patterns` | `wordpress <profile> api pattern-directory-patterns-list` | read | — | generated |  |
| `getWpV2Plugins` | `GET /wp/v2/plugins` | `wordpress <profile> api plugins-list` | read | — | generated |  |
| `postWpV2Plugins` | `POST /wp/v2/plugins` | `wordpress <profile> api plugins-create` | write | contract | generated |  |
| `getWpV2Posts` | `GET /wp/v2/posts` | `wordpress <profile> api posts-list` | read | — | generated |  |
| `postWpV2Posts` | `POST /wp/v2/posts` | `wordpress <profile> api posts-create` | write | contract | generated |  |
| `getWpV2PostsById` | `GET /wp/v2/posts/{id}` | `wordpress <profile> api posts-get` | read | — | generated |  |
| `postWpV2PostsById` | `POST /wp/v2/posts/{id}` | `wordpress <profile> api posts-update` | write | contract | generated |  |
| `deleteWpV2PostsById` | `DELETE /wp/v2/posts/{id}` | `wordpress <profile> api posts-delete` | destructive | — | generated |  |
| `getWpV2PostsByIdAutosaves` | `GET /wp/v2/posts/{id}/autosaves` | `wordpress <profile> api posts-autosaves-list` | read | — | generated |  |
| `postWpV2PostsByIdAutosaves` | `POST /wp/v2/posts/{id}/autosaves` | `wordpress <profile> api posts-autosaves-create` | write | contract | generated |  |
| `getWpV2PostsByParentAutosavesById` | `GET /wp/v2/posts/{parent}/autosaves/{id}` | `wordpress <profile> api posts-autosaves-get` | read | — | generated |  |
| `getWpV2PostsByParentRevisions` | `GET /wp/v2/posts/{parent}/revisions` | `wordpress <profile> api posts-revisions-list` | read | — | generated |  |
| `getWpV2PostsByParentRevisionsById` | `GET /wp/v2/posts/{parent}/revisions/{id}` | `wordpress <profile> api posts-revisions-get` | read | — | generated |  |
| `deleteWpV2PostsByParentRevisionsById` | `DELETE /wp/v2/posts/{parent}/revisions/{id}` | `wordpress <profile> api posts-revisions-delete` | destructive | — | generated |  |
| `getWpV2Search` | `GET /wp/v2/search` | `wordpress <profile> api search-list` | read | — | generated |  |
| `getWpV2Settings` | `GET /wp/v2/settings` | `wordpress <profile> api settings-list` | read | — | generated |  |
| `postWpV2Settings` | `POST /wp/v2/settings` | `wordpress <profile> api settings-create` | write | contract | generated |  |
| `getWpV2Sidebars` | `GET /wp/v2/sidebars` | `wordpress <profile> api sidebars-list` | read | — | generated |  |
| `getWpV2SidebarsById` | `GET /wp/v2/sidebars/{id}` | `wordpress <profile> api sidebars-get` | read | — | generated |  |
| `postWpV2SidebarsById` | `POST /wp/v2/sidebars/{id}` | `wordpress <profile> api sidebars-update` | write | contract | generated |  |
| `getWpV2Statuses` | `GET /wp/v2/statuses` | `wordpress <profile> api statuses-list` | read | — | generated |  |
| `getWpV2StatusesByStatus` | `GET /wp/v2/statuses/{status}` | `wordpress <profile> api statuses-get` | read | — | generated |  |
| `getWpV2Tags` | `GET /wp/v2/tags` | `wordpress <profile> api tags-list` | read | — | generated |  |
| `postWpV2Tags` | `POST /wp/v2/tags` | `wordpress <profile> api tags-create` | write | contract | generated |  |
| `getWpV2TagsById` | `GET /wp/v2/tags/{id}` | `wordpress <profile> api tags-get` | read | — | generated |  |
| `postWpV2TagsById` | `POST /wp/v2/tags/{id}` | `wordpress <profile> api tags-update` | write | contract | generated |  |
| `deleteWpV2TagsById` | `DELETE /wp/v2/tags/{id}` | `wordpress <profile> api tags-delete` | destructive | — | generated |  |
| `getWpV2Taxonomies` | `GET /wp/v2/taxonomies` | `wordpress <profile> api taxonomies-list` | read | — | generated |  |
| `getWpV2TaxonomiesByTaxonomy` | `GET /wp/v2/taxonomies/{taxonomy}` | `wordpress <profile> api taxonomies-get` | read | — | generated |  |
| `getWpV2TemplateParts` | `GET /wp/v2/template-parts` | `wordpress <profile> api template-parts-list` | read | — | generated |  |
| `postWpV2TemplateParts` | `POST /wp/v2/template-parts` | `wordpress <profile> api template-parts-create` | write | contract | generated |  |
| `getWpV2TemplatePartsLookup` | `GET /wp/v2/template-parts/lookup` | `wordpress <profile> api template-parts-lookup-list` | read | — | generated |  |
| `getWpV2Templates` | `GET /wp/v2/templates` | `wordpress <profile> api templates-list` | read | — | generated |  |
| `postWpV2Templates` | `POST /wp/v2/templates` | `wordpress <profile> api templates-create` | write | contract | generated |  |
| `getWpV2TemplatesLookup` | `GET /wp/v2/templates/lookup` | `wordpress <profile> api templates-lookup-list` | read | — | generated |  |
| `getWpV2Themes` | `GET /wp/v2/themes` | `wordpress <profile> api themes-list` | read | — | generated |  |
| `getWpV2Types` | `GET /wp/v2/types` | `wordpress <profile> api types-list` | read | — | generated |  |
| `getWpV2TypesByType` | `GET /wp/v2/types/{type}` | `wordpress <profile> api types-get` | read | — | generated |  |
| `getWpV2Users` | `GET /wp/v2/users` | `wordpress <profile> api users-list` | read | — | generated |  |
| `postWpV2Users` | `POST /wp/v2/users` | `wordpress <profile> api users-create` | write | contract | generated |  |
| `getWpV2UsersById` | `GET /wp/v2/users/{id}` | `wordpress <profile> api users-get` | read | — | generated |  |
| `postWpV2UsersById` | `POST /wp/v2/users/{id}` | `wordpress <profile> api users-update` | write | contract | generated |  |
| `deleteWpV2UsersById` | `DELETE /wp/v2/users/{id}` | `wordpress <profile> api users-delete` | destructive | — | generated |  |
| `getWpV2UsersByUserIdApplicationPasswords` | `GET /wp/v2/users/{user_id}/application-passwords` | `wordpress <profile> api users-application-passwords-list` | read | — | generated |  |
| `postWpV2UsersByUserIdApplicationPasswords` | `POST /wp/v2/users/{user_id}/application-passwords` | `wordpress <profile> api users-application-passwords-create` | write | contract | generated |  |
| `deleteWpV2UsersByUserIdApplicationPasswords` | `DELETE /wp/v2/users/{user_id}/application-passwords` | `wordpress <profile> api users-application-passwords-delete-all` | destructive | — | generated |  |
| `getWpV2UsersByUserIdApplicationPasswordsByUuid` | `GET /wp/v2/users/{user_id}/application-passwords/{uuid}` | `wordpress <profile> api users-application-passwords-get` | read | — | generated |  |
| `postWpV2UsersByUserIdApplicationPasswordsByUuid` | `POST /wp/v2/users/{user_id}/application-passwords/{uuid}` | `wordpress <profile> api users-application-passwords-update` | write | contract | generated |  |
| `deleteWpV2UsersByUserIdApplicationPasswordsByUuid` | `DELETE /wp/v2/users/{user_id}/application-passwords/{uuid}` | `wordpress <profile> api users-application-passwords-delete` | destructive | — | generated |  |
| `getWpV2UsersByUserIdApplicationPasswordsIntrospect` | `GET /wp/v2/users/{user_id}/application-passwords/introspect` | `wordpress <profile> api users-application-passwords-introspect-list` | read | — | generated |  |
| `getWpV2UsersMe` | `GET /wp/v2/users/me` | `wordpress <profile> api users-me-get` | read | — | generated |  |
| `postWpV2UsersMe` | `POST /wp/v2/users/me` | `wordpress <profile> api users-me-create` | write | contract | generated |  |
| `deleteWpV2UsersMe` | `DELETE /wp/v2/users/me` | `wordpress <profile> api users-me-delete` | destructive | — | generated |  |
| `getWpV2WidgetTypes` | `GET /wp/v2/widget-types` | `wordpress <profile> api widget-types-list` | read | — | generated |  |
| `getWpV2WidgetTypesById` | `GET /wp/v2/widget-types/{id}` | `wordpress <profile> api widget-types-get` | read | — | generated |  |
| `postWpV2WidgetTypesByIdEncode` | `POST /wp/v2/widget-types/{id}/encode` | `wordpress <profile> api widget-types-encode` | write | contract | generated |  |
| `postWpV2WidgetTypesByIdRender` | `POST /wp/v2/widget-types/{id}/render` | `wordpress <profile> api widget-types-render` | write | contract | generated |  |
| `getWpV2Widgets` | `GET /wp/v2/widgets` | `wordpress <profile> api widgets-list` | read | — | generated |  |
| `postWpV2Widgets` | `POST /wp/v2/widgets` | `wordpress <profile> api widgets-create` | write | contract | generated |  |
| `getWpV2WidgetsById` | `GET /wp/v2/widgets/{id}` | `wordpress <profile> api widgets-get` | read | — | generated |  |
| `postWpV2WidgetsById` | `POST /wp/v2/widgets/{id}` | `wordpress <profile> api widgets-update` | write | contract | generated |  |
| `deleteWpV2WidgetsById` | `DELETE /wp/v2/widgets/{id}` | `wordpress <profile> api widgets-delete` | destructive | — | generated |  |
| `getWpV2WpPatternCategory` | `GET /wp/v2/wp_pattern_category` | `wordpress <profile> api wp-pattern-category-list` | read | — | generated |  |
| `postWpV2WpPatternCategory` | `POST /wp/v2/wp_pattern_category` | `wordpress <profile> api wp-pattern-category-create` | write | contract | generated |  |
| `getWpV2WpPatternCategoryById` | `GET /wp/v2/wp_pattern_category/{id}` | `wordpress <profile> api wp-pattern-category-get` | read | — | generated |  |
| `postWpV2WpPatternCategoryById` | `POST /wp/v2/wp_pattern_category/{id}` | `wordpress <profile> api wp-pattern-category-update` | write | contract | generated |  |
| `deleteWpV2WpPatternCategoryById` | `DELETE /wp/v2/wp_pattern_category/{id}` | `wordpress <profile> api wp-pattern-category-delete` | destructive | — | generated |  |

## Pagination

| Operation | Style | Request | Answer | Source |
|---|---|---|---|---|
| `getWpV2BlockDirectorySearch` | page | query `page`, query `per_page` | pages header `x-wp-totalpages` | override: WordPress counts pages from 1 and gives their number in X-WP-TotalPages |
| `getWpV2Blocks` | page | query `page`, query `per_page` | pages header `x-wp-totalpages` | override: WordPress counts pages from 1 and gives their number in X-WP-TotalPages |
| `getWpV2BlocksByParentRevisions` | page | query `page`, query `per_page` | pages header `x-wp-totalpages` | override: WordPress counts pages from 1 and gives their number in X-WP-TotalPages |
| `getWpV2Categories` | page | query `page`, query `per_page` | pages header `x-wp-totalpages` | override: WordPress counts pages from 1 and gives their number in X-WP-TotalPages |
| `getWpV2Comments` | page | query `page`, query `per_page` | pages header `x-wp-totalpages` | override: WordPress counts pages from 1 and gives their number in X-WP-TotalPages |
| `getWpV2FontCollections` | page | query `page`, query `per_page` | pages header `x-wp-totalpages` | override: WordPress counts pages from 1 and gives their number in X-WP-TotalPages |
| `getWpV2FontFamilies` | page | query `page`, query `per_page` | pages header `x-wp-totalpages` | override: WordPress counts pages from 1 and gives their number in X-WP-TotalPages |
| `getWpV2FontFamiliesByFontFamilyIdFontFaces` | page | query `page`, query `per_page` | pages header `x-wp-totalpages` | override: WordPress counts pages from 1 and gives their number in X-WP-TotalPages |
| `getWpV2GlobalStylesByParentRevisions` | page | query `page`, query `per_page` | pages header `x-wp-totalpages` | override: WordPress counts pages from 1 and gives their number in X-WP-TotalPages |
| `getWpV2Media` | page | query `page`, query `per_page` | pages header `x-wp-totalpages` | override: WordPress counts pages from 1 and gives their number in X-WP-TotalPages |
| `getWpV2MenuItems` | page | query `page`, query `per_page` | pages header `x-wp-totalpages` | override: WordPress counts pages from 1 and gives their number in X-WP-TotalPages |
| `getWpV2Menus` | page | query `page`, query `per_page` | pages header `x-wp-totalpages` | override: WordPress counts pages from 1 and gives their number in X-WP-TotalPages |
| `getWpV2Navigation` | page | query `page`, query `per_page` | pages header `x-wp-totalpages` | override: WordPress counts pages from 1 and gives their number in X-WP-TotalPages |
| `getWpV2NavigationByParentRevisions` | page | query `page`, query `per_page` | pages header `x-wp-totalpages` | override: WordPress counts pages from 1 and gives their number in X-WP-TotalPages |
| `getWpV2Pages` | page | query `page`, query `per_page` | pages header `x-wp-totalpages` | override: WordPress counts pages from 1 and gives their number in X-WP-TotalPages |
| `getWpV2PagesByParentRevisions` | page | query `page`, query `per_page` | pages header `x-wp-totalpages` | override: WordPress counts pages from 1 and gives their number in X-WP-TotalPages |
| `getWpV2PatternDirectoryPatterns` | page | query `page`, query `per_page` | pages header `x-wp-totalpages` | override: WordPress counts pages from 1 and gives their number in X-WP-TotalPages |
| `getWpV2Posts` | page | query `page`, query `per_page` | pages header `x-wp-totalpages` | override: WordPress counts pages from 1 and gives their number in X-WP-TotalPages |
| `getWpV2PostsByParentRevisions` | page | query `page`, query `per_page` | pages header `x-wp-totalpages` | override: WordPress counts pages from 1 and gives their number in X-WP-TotalPages |
| `getWpV2Search` | page | query `page`, query `per_page` | pages header `x-wp-totalpages` | override: WordPress counts pages from 1 and gives their number in X-WP-TotalPages |
| `getWpV2Tags` | page | query `page`, query `per_page` | pages header `x-wp-totalpages` | override: WordPress counts pages from 1 and gives their number in X-WP-TotalPages |
| `getWpV2Users` | page | query `page`, query `per_page` | pages header `x-wp-totalpages` | override: WordPress counts pages from 1 and gives their number in X-WP-TotalPages |
| `getWpV2WpPatternCategory` | page | query `page`, query `per_page` | pages header `x-wp-totalpages` | override: WordPress counts pages from 1 and gives their number in X-WP-TotalPages |

## Permission keys

| Operation | Key | When |
|---|---|---|
| `postWpV2Blocks` | `blocks.publish` | `status` is publish or future or body `date` is set or body `date_gmt` is set or body `password` is set, unless the call sets `status` to draft or pending or private |
| `postWpV2BlocksById` | `blocks.publish` | `status` is publish or future or body `date` is set or body `date_gmt` is set or body `password` is set, unless the call sets `status` to draft or pending or private |
| `deleteWpV2BlocksById` | `blocks.delete` | always |
| `deleteWpV2BlocksById` | `blocks.delete.force` | query `force` is true |
| `postWpV2BlocksByIdAutosaves` | `blocks.publish` | `status` is publish or future or body `date` is set or body `date_gmt` is set or body `password` is set, unless the call sets `status` to draft or pending or private |
| `deleteWpV2BlocksByParentRevisionsById` | `blocks.delete` | always |
| `deleteWpV2BlocksByParentRevisionsById` | `blocks.delete.force` | query `force` is true |
| `deleteWpV2CategoriesById` | `categories.delete` | always |
| `deleteWpV2CategoriesById` | `categories.delete.force` | query `force` is true |
| `deleteWpV2CommentsById` | `comments.delete` | always |
| `deleteWpV2CommentsById` | `comments.delete.force` | query `force` is true |
| `deleteWpV2FontFamiliesByFontFamilyIdFontFacesById` | `font-families.delete` | always |
| `deleteWpV2FontFamiliesByFontFamilyIdFontFacesById` | `font-families.delete.force` | query `force` is true |
| `deleteWpV2FontFamiliesById` | `font-families.delete` | always |
| `deleteWpV2FontFamiliesById` | `font-families.delete.force` | query `force` is true |
| `postWpV2Media` | `media.publish` | `status` is publish or future or body `date` is set or body `date_gmt` is set, unless the call sets `status` to draft or pending or private |
| `postWpV2MediaById` | `media.publish` | `status` is publish or future or body `date` is set or body `date_gmt` is set, unless the call sets `status` to draft or pending or private |
| `deleteWpV2MediaById` | `media.delete` | always |
| `deleteWpV2MediaById` | `media.delete.force` | query `force` is true |
| `postWpV2MenuItems` | `menu-items.publish` | always |
| `postWpV2MenuItemsById` | `menu-items.publish` | `status` is publish or future |
| `deleteWpV2MenuItemsById` | `menu-items.delete` | always |
| `deleteWpV2MenuItemsById` | `menu-items.delete.force` | query `force` is true |
| `postWpV2MenuItemsByIdAutosaves` | `menu-items.publish` | `status` is publish or future |
| `deleteWpV2MenusById` | `menus.delete` | always |
| `deleteWpV2MenusById` | `menus.delete.force` | query `force` is true |
| `postWpV2Navigation` | `navigation.publish` | `status` is publish or future or body `date` is set or body `date_gmt` is set or body `password` is set, unless the call sets `status` to draft or pending or private |
| `postWpV2NavigationById` | `navigation.publish` | `status` is publish or future or body `date` is set or body `date_gmt` is set or body `password` is set, unless the call sets `status` to draft or pending or private |
| `deleteWpV2NavigationById` | `navigation.delete` | always |
| `deleteWpV2NavigationById` | `navigation.delete.force` | query `force` is true |
| `postWpV2NavigationByIdAutosaves` | `navigation.publish` | `status` is publish or future or body `date` is set or body `date_gmt` is set or body `password` is set, unless the call sets `status` to draft or pending or private |
| `deleteWpV2NavigationByParentRevisionsById` | `navigation.delete` | always |
| `deleteWpV2NavigationByParentRevisionsById` | `navigation.delete.force` | query `force` is true |
| `postWpV2Pages` | `pages.publish` | `status` is publish or future or body `date` is set or body `date_gmt` is set or body `password` is set, unless the call sets `status` to draft or pending or private |
| `postWpV2PagesById` | `pages.publish` | `status` is publish or future or body `date` is set or body `date_gmt` is set or body `password` is set, unless the call sets `status` to draft or pending or private |
| `deleteWpV2PagesById` | `pages.delete` | always |
| `deleteWpV2PagesById` | `pages.delete.force` | query `force` is true |
| `postWpV2PagesByIdAutosaves` | `pages.publish` | `status` is publish or future or body `date` is set or body `date_gmt` is set or body `password` is set, unless the call sets `status` to draft or pending or private |
| `deleteWpV2PagesByParentRevisionsById` | `pages.delete` | always |
| `deleteWpV2PagesByParentRevisionsById` | `pages.delete.force` | query `force` is true |
| `postWpV2Posts` | `posts.publish` | `status` is publish or future or body `date` is set or body `date_gmt` is set or body `password` is set, unless the call sets `status` to draft or pending or private |
| `postWpV2PostsById` | `posts.publish` | `status` is publish or future or body `date` is set or body `date_gmt` is set or body `password` is set, unless the call sets `status` to draft or pending or private |
| `deleteWpV2PostsById` | `posts.delete` | always |
| `deleteWpV2PostsById` | `posts.delete.force` | query `force` is true |
| `postWpV2PostsByIdAutosaves` | `posts.publish` | `status` is publish or future or body `date` is set or body `date_gmt` is set or body `password` is set, unless the call sets `status` to draft or pending or private |
| `deleteWpV2PostsByParentRevisionsById` | `posts.delete` | always |
| `deleteWpV2PostsByParentRevisionsById` | `posts.delete.force` | query `force` is true |
| `deleteWpV2TagsById` | `tags.delete` | always |
| `deleteWpV2TagsById` | `tags.delete.force` | query `force` is true |
| `postWpV2TemplateParts` | `template-parts.publish` | always |
| `postWpV2Templates` | `templates.publish` | always |
| `deleteWpV2UsersById` | `users.delete` | always |
| `deleteWpV2UsersById` | `users.delete.force` | query `force` is true |
| `deleteWpV2UsersByUserIdApplicationPasswords` | `users.delete` | always |
| `deleteWpV2UsersByUserIdApplicationPasswordsByUuid` | `users.delete` | always |
| `deleteWpV2UsersMe` | `users.delete` | always |
| `deleteWpV2UsersMe` | `users.delete.force` | query `force` is true |
| `deleteWpV2WidgetsById` | `widgets.delete` | always |
| `deleteWpV2WidgetsById` | `widgets.delete.force` | query `force` is true |
| `deleteWpV2WpPatternCategoryById` | `wp_pattern_category.delete` | always |
| `deleteWpV2WpPatternCategoryById` | `wp_pattern_category.delete.force` | query `force` is true |

## Routes left out

- `/wp/v2/block-renderer/(?P<name>[a-z0-9-]+/[a-z0-9-]+)`: left out, as its value may hold a slash, which no path segment carries
- `/wp/v2/blocks/(?P<id>[\d]+)`: PUT, PATCH left out, as POST does the same
- `/wp/v2/categories/(?P<id>[\d]+)`: PUT, PATCH left out, as POST does the same
- `/wp/v2/comments/(?P<id>[\d]+)`: PUT, PATCH left out, as POST does the same
- `/wp/v2/font-collections/(?P<slug>[\/\w-]+)`: left out, as its value may hold a slash, which no path segment carries
- `/wp/v2/font-families/(?P<id>[\d]+)`: PUT, PATCH left out, as POST does the same
- `/wp/v2/global-styles/(?P<id>[\/\d+]+)`: left out, as its value may hold a slash, which no path segment carries
- `/wp/v2/global-styles/themes/(?P<stylesheet>[\/\s%\w\.\(\)\[\]\@_\-]+)/variations`: left out, as its value may hold a slash, which no path segment carries
- `/wp/v2/global-styles/themes/(?P<stylesheet>[^\/:<>\*\?"\|]+(?:\/[^\/:<>\*\?"\|]+)?)`: left out, as its value may hold a slash, which no path segment carries
- `/wp/v2/media/(?P<id>[\d]+)`: PUT, PATCH left out, as POST does the same
- `/wp/v2/menu-items/(?P<id>[\d]+)`: PUT, PATCH left out, as POST does the same
- `/wp/v2/menus/(?P<id>[\d]+)`: PUT, PATCH left out, as POST does the same
- `/wp/v2/navigation/(?P<id>[\d]+)`: PUT, PATCH left out, as POST does the same
- `/wp/v2/pages/(?P<id>[\d]+)`: PUT, PATCH left out, as POST does the same
- `/wp/v2/plugins/(?P<plugin>[^.\/]+(?:\/[^.\/]+)?)`: left out, as its value may hold a slash, which no path segment carries
- `/wp/v2/posts/(?P<id>[\d]+)`: PUT, PATCH left out, as POST does the same
- `/wp/v2/settings`: PUT, PATCH left out, as POST does the same
- `/wp/v2/sidebars/(?P<id>[\w-]+)`: PUT, PATCH left out, as POST does the same
- `/wp/v2/tags/(?P<id>[\d]+)`: PUT, PATCH left out, as POST does the same
- `/wp/v2/template-parts/(?P<id>([^\/:<>\*\?"\|]+(?:\/[^\/:<>\*\?"\|]+)?)[\/\w%-]+)`: left out, as its value may hold a slash, which no path segment carries
- `/wp/v2/template-parts/(?P<id>([^\/:<>\*\?"\|]+(?:\/[^\/:<>\*\?"\|]+)?)[\/\w%-]+)/autosaves`: left out, as its value may hold a slash, which no path segment carries
- `/wp/v2/template-parts/(?P<parent>([^\/:<>\*\?"\|]+(?:\/[^\/:<>\*\?"\|]+)?)[\/\w%-]+)/autosaves/(?P<id>[\d]+)`: left out, as its value may hold a slash, which no path segment carries
- `/wp/v2/template-parts/(?P<parent>([^\/:<>\*\?"\|]+(?:\/[^\/:<>\*\?"\|]+)?)[\/\w%-]+)/revisions`: left out, as its value may hold a slash, which no path segment carries
- `/wp/v2/template-parts/(?P<parent>([^\/:<>\*\?"\|]+(?:\/[^\/:<>\*\?"\|]+)?)[\/\w%-]+)/revisions/(?P<id>[\d]+)`: left out, as its value may hold a slash, which no path segment carries
- `/wp/v2/templates/(?P<id>([^\/:<>\*\?"\|]+(?:\/[^\/:<>\*\?"\|]+)?)[\/\w%-]+)`: left out, as its value may hold a slash, which no path segment carries
- `/wp/v2/templates/(?P<id>([^\/:<>\*\?"\|]+(?:\/[^\/:<>\*\?"\|]+)?)[\/\w%-]+)/autosaves`: left out, as its value may hold a slash, which no path segment carries
- `/wp/v2/templates/(?P<parent>([^\/:<>\*\?"\|]+(?:\/[^\/:<>\*\?"\|]+)?)[\/\w%-]+)/autosaves/(?P<id>[\d]+)`: left out, as its value may hold a slash, which no path segment carries
- `/wp/v2/templates/(?P<parent>([^\/:<>\*\?"\|]+(?:\/[^\/:<>\*\?"\|]+)?)[\/\w%-]+)/revisions`: left out, as its value may hold a slash, which no path segment carries
- `/wp/v2/templates/(?P<parent>([^\/:<>\*\?"\|]+(?:\/[^\/:<>\*\?"\|]+)?)[\/\w%-]+)/revisions/(?P<id>[\d]+)`: left out, as its value may hold a slash, which no path segment carries
- `/wp/v2/themes/(?P<stylesheet>[^\/:<>\*\?"\|]+(?:\/[^\/:<>\*\?"\|]+)?)`: left out, as its value may hold a slash, which no path segment carries
- `/wp/v2/users/(?P<id>[\d]+)`: PUT, PATCH left out, as POST does the same
- `/wp/v2/users/(?P<user_id>(?:[\d]+|me))/application-passwords/(?P<uuid>[\w\-]+)`: PUT, PATCH left out, as POST does the same
- `/wp/v2/users/me`: PUT, PATCH left out, as POST does the same
- `/wp/v2/widgets/(?P<id>[\w\-]+)`: PUT, PATCH left out, as POST does the same
- `/wp/v2/wp_pattern_category/(?P<id>[\d]+)`: PUT, PATCH left out, as POST does the same
- routes outside a namespace: not offered, 2 routes
- `oembed/1.0`: not offered, 3 routes
- `wp-abilities/v1`: not offered, 6 routes
- `wp-block-editor/v1`: not offered, 4 routes
- `wp-site-health/v1`: not offered, 8 routes

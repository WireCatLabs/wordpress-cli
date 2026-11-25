import { join } from "node:path"
import { type ApiModel, adaptOpenApi, type ModelOverride, readWpJson, wpJsonToOpenApi } from "@wirecat/cli-base/codegen"

// The WordPress namespaces the CLI offers. A plugin's namespace belongs to the sites that run the plugin;
// batch/v1 is never offered, as one batch call runs other routes' writes past their own keys.
const NAMESPACES = ["wp/v2"]

/**
 * The index as committed; readWpJson refuses one whose hash no longer matches provenance.json. The routes left out,
 * and why, become the coverage page's notes; the overrides say how WordPress pages a list.
 */
export const specModel = async (
  root: string,
): Promise<{ model: ApiModel; notes: string[]; overrides: Record<string, ModelOverride> }> => {
  const { document, omissions, overrides } = wpJsonToOpenApi(readWpJson(join(root, "spec/wordpress")), {
    namespaces: NAMESPACES,
  })
  return { model: adaptOpenApi(document), notes: omissions, overrides }
}

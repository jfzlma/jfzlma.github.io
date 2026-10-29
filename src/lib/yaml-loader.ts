import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import type { Loader } from "astro/loaders";
import { parse } from "yaml";

/**
 * Loads a single YAML document as one entry with id "main".
 * Unlike Astro's built-in `file()` loader, a missing file or a YAML syntax
 * error throws, so `npm run build` fails instead of rendering empty sections.
 */
export function yamlDocument(path: string): Loader {
  return {
    name: "yaml-document",
    load: async ({ config, store, parseData, watcher }) => {
      const url = new URL(path, config.root);
      const filePath = fileURLToPath(url);
      const sync = async () => {
        let raw: string;
        try {
          raw = await readFile(url, "utf-8");
        } catch {
          throw new Error(`Content file not found: ${path}`);
        }
        let data: unknown;
        try {
          data = parse(raw);
        } catch (error) {
          throw new Error(`Invalid YAML in ${path}:\n${(error as Error).message}`);
        }
        const id = "main";
        const parsed = await parseData({ id, data: data as Record<string, unknown>, filePath });
        store.clear();
        store.set({ id, data: parsed, filePath: path });
      };
      await sync();
      watcher?.add(filePath);
      watcher?.on("change", (changed) => {
        if (changed === filePath) sync().catch((error) => console.error(error));
      });
    },
  };
}

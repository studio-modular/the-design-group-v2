import * as migration_20250404_103452_initial from "./20250404_103452_initial";
import * as migration_20250404_103603_added_seo from "./20250404_103603_added_seo";

export const migrations = [
  {
    down: migration_20250404_103452_initial.down,
    name: "20250404_103452_initial",
    up: migration_20250404_103452_initial.up,
  },
  {
    down: migration_20250404_103603_added_seo.down,
    name: "20250404_103603_added_seo",
    up: migration_20250404_103603_added_seo.up,
  },
];

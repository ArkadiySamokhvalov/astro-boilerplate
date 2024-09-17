// @ts-check
import { defineConfig } from "astro/config";

import purgecss from "astro-purgecss";
import Compress from "@playform/compress";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon({
      iconDir: "src/assets/icons",
    }),
    purgecss({
      variables: true,

      // for Astro view transitions
      keyframes: false,

      // for Astro view transitions
      safelist: {
        greedy: [
          /*astro*/
        ],
      },

      // for SSR
      content: [
        process.cwd() + "/src/**/*.{astro,vue,jsx,tsx,css}", // Watching astro and vue sources
      ],
    }),
    Compress({
      // CSS: false,
      // HTML: false,
      Image: false,
      // JavaScript: false,
      SVG: false,
    }),
  ],
});

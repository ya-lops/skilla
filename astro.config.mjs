// @ts-check
import { defineConfig, fontProviders } from "astro/config";
// import node from "@astrojs/node";

import tailwindcss from "@tailwindcss/vite";

// import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  output: "static",
  
  // adapter: node({
  //   mode: "standalone",
  // }),

  compressHTML: false,

  security: {
    checkOrigin: false,
  },

  prefetch: true,

  vite: {
    optimizeDeps: {
      force: true,
    },

    build: {
      cssCodeSplit: true,
    },

    css: {
      devSourcemap: false,
    },

    plugins: [tailwindcss()],
  },

  devToolbar: {
    enabled: false,
  },
});

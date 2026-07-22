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

  fonts: [
    {
      provider: fontProviders.google(),
      name: "Mulish",
      cssVariable: "--site-font-base",
      subsets: ["latin", "cyrillic"],
      weights: [400, 500, 600],
      styles: ["normal"],
      fallbacks: [
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "sans-serif",
      ],
    },

    {
      provider: fontProviders.google(),
      name: "Manrope",
      cssVariable: "--site-font-heading",
      subsets: ["latin", "cyrillic"],
      weights: [500, 600, 700],
      styles: ["normal"],
      fallbacks: [
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "sans-serif",
      ],
    },
  ],
});

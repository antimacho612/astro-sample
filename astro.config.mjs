import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Astroサンプル",

      tableOfContents: {
        maxHeadingLevel: 6,
      },
      sidebar: [
        {
          label: "はじめに",
          link: "/",
        },
        {
          label: "コンポーネント",
          autogenerate: { directory: "components" },
        },
        {
          label: "メモ",
          autogenerate: { directory: "memos" },
        },
      ],
      customCss: ["./src/styles/custom.css"],
    }),
    mdx(),
  ],
});

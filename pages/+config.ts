import vikeReact from "vike-react/config";
import type { Config } from "vike/types";
import Layout from "../layouts/LayoutDefault.js";

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
  prerender: true,
  // https://vike.dev/Layout
  Layout,

  title:
    "VargTech • Outils web industriels & MVP rapides — Expert freelance Go/React",
  description:
    "Développeur freelance Go/React spécialisé dans les outils web industriels sur mesure, MVP rapides et automatisation des processus métier. Expert technique pour PME et startups. Remote France + local possible.",
  image: "https://vargtech.fr/og/og-image-1200x630.jpg",

  trailingSlash: true,

  extends: vikeReact,
} satisfies Config;

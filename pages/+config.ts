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
    "VargTech • Applications web sur mesure — Développeur freelance Go/React",
  description:
    "J'aide PME et startups avec des applications web sur mesure : automatisation des processus, centralisation des données, MVP SaaS. Remote partout en France, rencontres possibles en local. Un projet ? Parlons‑en !",
  image: "https://vargtech.fr/og/og-image-1200x630.jpg",

  trailingSlash: true,

  extends: vikeReact,
} satisfies Config;

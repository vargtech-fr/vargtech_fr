import vikeReact from "vike-react/config";
import type { Config } from "vike/types";
import Layout from "../layouts/LayoutDefault.js";

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
  prerender: true,
  // https://vike.dev/Layout
  Layout,

  // https://vike.dev/head-tags
  title: "VargTech",
  description: "Le web au service des pro",

  extends: vikeReact,
} satisfies Config;

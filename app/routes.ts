import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("pages/Home/index.tsx"),
  route("/templates/:id", "pages/TemplateSettings/index.tsx"),
] satisfies RouteConfig;

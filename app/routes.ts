import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("no-cache", "routes/no-cache.tsx"),
  route("max-age", "routes/max-age.tsx"),
  route("s-max-age", "routes/s-max-age.tsx"),
  route("swr", "routes/swr.tsx"),
] satisfies RouteConfig;

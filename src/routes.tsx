import { createBrowserRouter, type RouteObject } from "react-router";

const modules = import.meta.glob<{ default: RouteObject; isLayout?: boolean }>(
  "./pages/**/route.{ts,tsx,js,jsx}",
  {
    eager: true,
  }
);

const normalizePath = (filePath: string) =>
  filePath
    .replace("./pages", "")
    .replace(/\/route\.(ts|tsx|js|jsx)$/, "")
    .replace(/\/index$/, "")
    .toLowerCase();

const getRoutes = (): RouteObject[] => {
  const routeMap = new Map<string, { route: RouteObject; isLayout: boolean }>();

  for (const path in modules) {
    const mod = modules[path];
    const cleanPath = normalizePath(path);
    routeMap.set(cleanPath, {
      route: { ...mod.default, children: [] } as RouteObject,
      isLayout: mod.isLayout ?? false,
    });
  }

  const rootRoutes: RouteObject[] = [];

  for (const [key, { route }] of routeMap.entries()) {
    if (key === "") {
      rootRoutes.push(route);
      continue;
    }
    const parentPath = key.split("/").slice(0, -1).join("/");
    const parentRoute = routeMap.get(parentPath);
    if (parentRoute && parentRoute.isLayout) {
      parentRoute.route.children!.push(route);
    } else {
      rootRoutes.push(route);
    }
  }
  return rootRoutes;
};

export const router = createBrowserRouter(getRoutes());

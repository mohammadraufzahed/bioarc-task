import type { RouteObject } from "react-router";
import CategoriesPage from "./page";

export default {
    path: "categories",
    Component: CategoriesPage.WithContext,
} satisfies RouteObject;

import MainLayout from "@/layouts/MainLayout";
import { type RouteObject } from "react-router";

export const isLayout = true;

export default {
  path: "/",
  Component: MainLayout,
} satisfies RouteObject;

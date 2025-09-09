import Navbar from "@/components/Navbar";
import { css } from "@/styled-system/css";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div
      className={css({
        width: "100%",
        minHeight: "screen",
        display: "flex",
        flexDir: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: {
          base: "16px",
          lg: "26px",
        },
        height: "max-content",
      })}
    >
      <Navbar />

      <Outlet />
    </div>
  );
}

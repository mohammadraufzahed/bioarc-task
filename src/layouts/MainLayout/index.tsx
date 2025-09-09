import Navbar from "@/components/Navbar";
import { css } from "@/styled-system/css";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div
      className={css({
        width: "100%",
        height: "max-content",
        minHeight: "screen",
        display: "flex",
        flexDir: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: {
          base: "16px",
          lg: "26px",
        },
      })}
    >
      <Navbar />

      <div
        className={css({
          width: "100%",
          flexGrow: 1,
          flexShrink: 0,
          px: "25px",
          pb: "26px",
          display: "flex",
          flexDir: "column",
          alignItems: "center",
          justifyContent: "flex-start",
        })}
      >
        <Outlet />
      </div>
    </div>
  );
}

import Navbar from "@/components/Navbar";
import { css } from "@/styled-system/css";

export default function MainLayout({ children }: React.PropsWithChildren) {
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

      {children}
    </div>
  );
}

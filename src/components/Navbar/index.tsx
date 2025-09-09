import { css } from "@/styled-system/css";
import { DesktopNav, MobileNavbar } from "./components";
import { NavbarContextProvider } from "./context";

export default function Navbar() {
  return (
    <NavbarContextProvider>
      <div
        className={css({
          width: "100%",
          height: "max-content",
          padding: {
            base: "24px 12px",
            sm: "15px  24px",
          },
          backgroundColor: "#F6F8FC",
          boxShadow: "0px 4px 6px 0px #D1D3DA40",
          border: "1px solid #EBF1FA",
          display: "flex",
          flexDir: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "8px",
        })}
      >
        <MobileNavbar />
        <DesktopNav />
      </div>
    </NavbarContextProvider>
  );
}

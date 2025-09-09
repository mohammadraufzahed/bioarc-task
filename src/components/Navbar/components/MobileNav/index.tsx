import { css } from "@/styled-system/css";
import { HamburgerButton, MobileSidebar } from "./components";

// Images
import LogoUrl from "@/assets/logo.svg?url";

export const MobileNavbar = () => {
  return (
    <>
      <div
        className={css({
          width: { base: "100%" },
          display: "flex",
          flexDir: { base: "row" },
          alignItems: { base: "center", lg: "flex-start" },
          justifyContent: { base: "space-between" },
        })}
      >
        <img
          src={LogoUrl}
          className={css({
            width: "150px",
            height: "35px",
          })}
        />

        <HamburgerButton />
      </div>

      <MobileSidebar />
    </>
  );
};

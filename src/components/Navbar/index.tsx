import { css } from "@/styled-system/css";

// Images
import Logo from "@/assets/logo.svg?url";
import { HamburgerButton } from "./components";
import { useCallback, useState } from "react";

export default function Navbar() {
  // Stats
  const [open, setOpen] = useState(false);
  //  Callbacks
  const toggleOpen = useCallback(() => setOpen((open) => !open), []);

  return (
    <div
      className={css({
        width: "100%",
        height: "max-content",
        padding: {
          base: "24px 12px",
          sm: "24px",
        },
        backgroundColor: "#EBF1FA",
        boxShadow: "0px 4px 6px 0px #D1D3DA40",
        border: "1px solid #EBF1FA",
      })}
    >
      <div
        className={css({
          width: { base: "100%" },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        })}
      >
        <img
          src={Logo}
          className={css({
            width: "150px",
            height: "35px",
          })}
        />
        <HamburgerButton open={open} toggleOpen={toggleOpen} />
      </div>
    </div>
  );
}

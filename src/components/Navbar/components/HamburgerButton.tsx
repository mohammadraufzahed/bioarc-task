import { css } from "@/styled-system/css";
import { styled } from "@/styled-system/jsx";

const Bar = styled("div", {
  base: {
    width: "24px",
    height: "2px",
    backgroundColor: "black",
    transition: "all 200ms ease",
    transformOrigin: "center",
  },
});

interface HamburgerButtonProps {
  open: boolean;
  toggleOpen: () => void;
}

export function HamburgerButton({ open, toggleOpen }: HamburgerButtonProps) {
  return (
    <button
      onClick={toggleOpen}
      className={css({
        display: { base: "flex", md: "none" },
        flexDir: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "4px",
        p: "14px",
        border: "none",
        borderRadius: "4px",
        bg: "gray.200",
        cursor: "pointer",
      })}
    >
      <Bar
        transform={
          open
            ? "rotate(45deg) translateY(4px) translateX(4px)"
            : "rotate(0deg) translateY(0)"
        }
      />
      <Bar
        transform={
          open ? "rotate(-45deg) translateY(0px)" : "rotate(0deg) translateY(0)"
        }
      />
      <Bar opacity={open ? 0 : 1} />
    </button>
  );
}

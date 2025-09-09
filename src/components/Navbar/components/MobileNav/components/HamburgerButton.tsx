import { css } from "@/styled-system/css";
import { styled } from "@/styled-system/jsx";
import { useNavbarContext } from "../../../context";

const Bar = styled("div", {
  base: {
    width: "24px",
    height: "2px",
    backgroundColor: "black",
    transition: "all 200ms ease",
    transformOrigin: "center",
  },
});

export const HamburgerButton = () => {
  const { toggle, open } = useNavbarContext();
  return (
    <button
      onClick={toggle}
      className={css({
        display: { base: "flex", lg: "none" },
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
};

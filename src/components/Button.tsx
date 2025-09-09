import { cva } from "@/styled-system/css";
import { styled } from "@/styled-system/jsx";

const styles = cva({
  base: {
    fontFamily: "vazirmatn",
    fontWeight: 400,
    fontSize: "14px",
    p: "9px 22px",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    cursor: "pointer",
    transition: "all 200ms ease",
    _hover: {
      scale: 1.01,
    },
    _active: {
      transform: "translateY(-2px)",
    },
  },
  variants: {
    intent: {
      primary: {
        color: "#fff",
        backgroundColor: "#36459B",
      },
      secondary: {
        color: "#36459B",
        backgroundColor: "#E6ECF6",
      },
      danger: {
        color: "#fff",
        backgroundColor: "#E53935",
      },
      success: {
        color: "#fff",
        backgroundColor: "#2E7D32",
      },
      warning: {
        color: "#fff",
        backgroundColor: "#ED6C02",
      },
      info: {
        color: "#fff",
        backgroundColor: "#0288D1",
      },
      muted: {
        color: "#606367",
        backgroundColor: "#F1F3F5",
      },
      ghost: {
        color: "#36459B",
        backgroundcolor: "transparent",
      },
    },
    outline: {
      true: {
        borderWidth: "2px",
        backgroundColor: "transparent",
      },
      false: {
        borderWidth: "0px",
      },
    },
  },
  compoundVariants: [
    {
      intent: "primary",
      outline: true,
      css: {
        color: "#36459B",
        borderColor: "#36459B",
      },
    },
    {
      intent: "secondary",
      outline: true,
      css: {
        borderColor: "#36459B",
      },
    },
    {
      intent: "danger",
      outline: true,
      css: {
        color: "#E53935",
        borderColor: "#E53935",
      },
    },
    {
      intent: "success",
      outline: true,
      css: {
        color: "#2E7D32",
        borderColor: "#2E7D32",
      },
    },
    {
      intent: "warning",
      outline: true,
      css: {
        color: "#ED6C02",
        borderColor: "#ED6C02",
      },
    },
    {
      intent: "info",
      outline: true,
      css: {
        color: "#0288D1",
        borderColor: "#0288D1",
      },
    },
    {
      intent: "muted",
      outline: true,
      css: {
        borderColor: "#F1F3F5",
      },
    },
    {
      intent: "ghost",
      outline: true,
      css: {
        borderColor: "transparent",
      },
    },
  ],
  defaultVariants: {
    intent: "primary",
    outline: false,
  },
});

const Button = styled("button", styles);

export default Button;

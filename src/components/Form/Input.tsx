import { styled } from "@/styled-system/jsx";

export const Input = styled("input", {
  base: {
    height: "40px",
    padding: "13px 16px",
    borderRadius: "7px",
    outline: "none",
    color: "#424242",
    fontFamily: "vazirmatn",
    fontWeight: 400,
    fontSize: 12,
    transition: "all 100ms ease",
    _placeholder: {
      color: "#8C8C8C",
    },
    _focus: {
      borderColor: "#6A92CE",
      boxShadow: "0 0 0 2px #E2ECF9",
    },
  },
  variants: {
    outline: {
      true: {
        border: "1px solid #B2C6E3",
      },
      false: {
        border: "unset",
        boxShadow: "0px 0px 10px 0px #E2ECF9C2",
        backgroundColor: "#FFF",
      },
    },
    error: {
      true: {},
      false: {},
    },
    width: {
      fit: { width: "fit-content" },
      full: { width: "100%" },
      sm: { width: "200px" },
      md: { width: "300px" },
      lg: { width: "400px" },
    },
  },
  compoundVariants: [
    {
      error: true,
      outline: false,
      css: {
        color: "#E53935",
        boxShadow: "0 0 0 1px #E53935",
        _placeholder: {
          color: "#E53935",
        },
        _focus: {
          boxShadow: "0 0 0 2px #E53935",
        },
      },
    },
    {
      error: true,
      outline: true,
      css: {
        color: "#E53935",
        borderColor: "unset",
        boxShadow: "0 0 0 1px #E53935",
        _placeholder: {
          color: "#E53935",
        },
        _focus: {
          borderColor: "#E53935",
          boxShadow: "0 0 0 1px #E53935",
        },
      },
    },
  ],
  defaultVariants: {
    width: "full",
    outline: false,
    error: false,
  },
});

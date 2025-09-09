import { cva } from "@/styled-system/css";
import { styled } from "@/styled-system/jsx";

const styles = cva({
  base: {
    height: "40px",
    padding: "13px 16px",
    borderRadius: "7px",
    outline: "none",
    color: "#424242",
    fontFamily: "vazirmatn",
    fontWeight: 400,
    fontSize: 12,
    _placeholder: {
      color: "#8C8C8C",
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
    width: {
      fit: { width: "fit-content" },
      full: { width: "100%" },
      sm: { width: "200px" },
      md: { width: "300px" },
      lg: { width: "400px" },
    },
  },
  defaultVariants: {
    width: "full",
    outline: false,
  },
});

const Input = styled("input", styles);

export default Input;

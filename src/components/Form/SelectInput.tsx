import { styled } from "@/styled-system/jsx";

export const SelectInput = styled("select", {
  base: {
    height: "40px",
    padding: "0 16px",
    borderRadius: "7px",
    outline: "none",
    color: "#424242",
    fontFamily: "vazirmatn",
    fontWeight: 400,
    fontSize: 12,
    direction: "rtl",
    textAlign: "right",
    appearance: "none",

    backgroundImage:
      "linear-gradient(45deg, transparent 50%, #666 50%), linear-gradient(135deg, #666 50%, transparent 50%)",
    backgroundPosition: "12px center, 17px center",
    backgroundSize: "5px 5px, 5px 5px",
    backgroundRepeat: "no-repeat",
    transition: "all 100ms ease",

    _placeholder: {
      color: "#8C8C8C",
    },
    _focus: {
      borderColor: "#6A92CE",
      boxShadow: "0 0 0 2px #E2ECF9",
    },
    "& > option": {
      fontFamily: "vazirmatn",
      fontWeight: 400,
      fontSize: 12,
    },
  },
  variants: {
    outline: {
      true: {
        border: "1px solid #B2C6E3",
        backgroundColor: "transparent",
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

import { styled } from "@/styled-system/jsx";

export const Label = styled("label", {
  base: {
    fontFamily: "vazirmatn",
    fontWeight: 500,
    fontSize: "12px",
    color: "#8C8C8C",
  },
  variants: {
    required: {
      true: {
        _after: {
          content: '"*"',
          color: "#F91C1C",
        },
      },
    },
    error: {
      true: {
        color: "#F91C1C",
      },
      false: {},
    },
  },
  defaultVariants: {
    required: false,
    error: false,
  },
});

import { styled } from "@/styled-system/jsx";

export const FieldError = styled("span", {
  base: {
    color: "#E53935",
    fontSize: "10px",
    fontFamily: "vazirmatn",
    marginTop: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "4px",
    lineHeight: "1.4",
    _before: {
      content: '" "',
      width: "4px",
      height: "4px",
      backgroundColor: "#E53935",
      borderRadius: "50%",
    },
  },
});

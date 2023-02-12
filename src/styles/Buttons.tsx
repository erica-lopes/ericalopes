import { styled } from "@/styles/stitches.config";
import { colors } from "@/styles/Global";

export const Button = styled("button", {
  height: "2.75rem",
  background: "$whiteFixed",
  fontWeight: "300",
  padding: "0 1rem",
  border: "2px solid $whiteFixed",
  borderRadius: "$1",
  cursor: "pointer",
  fontSize: "1rem",
  fontFamily: "$texts",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "&:hover": {
    color: "$brand1",
  },

  variants: {
    type: {
      btLink: {
        background: "transparent",
        borderColor: "transparent",
      },
      primary: {
        background: "$brand1",
        borderColor: "transparent",
        color: "$whiteFixed",
        "&:hover": {
          borderRadius: "$3",
          color: "$brand1",
          backgroundColor: "$brand4",
          borderColor: "$brand4",
        },
      },
      icon: {
        borderColor: "transparent",
        backgroundColor: "transparent",
        "&:hover": {
          backgroundColor: "$grey5",
        },
      },
      circle: {
        borderColor: "transparent",
        color: "$whiteFixed",
        backgroundColor: "$brand1",
        borderRadius: "50%",
        padding: "0",
        width: "2.75rem",
        height: "2.75rem",
        "&:hover": {
          backgroundColor: "$brand4",
          color: "$brand1"
        },
      },
    },
    ...colors,
  },
});

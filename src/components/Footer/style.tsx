import { Button } from "@/styles/Buttons";
import { Container } from "@/styles/Global";
import { styled } from "@/styles/stitches.config";
import { colors } from "@/styles/Global";

export const Footer = styled("footer", {
  backgroundColor: "$brand1",
  padding: "2rem 0 3rem 0",
  [`& ${Container}`]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  [`& ${Button}`]: {
    transform: "translateY(-124%)",
  },
});

export const Content = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "33rem",
  "@mobile": {
    flexDirection: "column",
    gap: "2rem",
  },
});

export const Social = styled("div", {
  display: "flex",
  gap: "0.7rem",
});

export const Social_Buttons = styled("div", {
  background: "$whiteFixed",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "$brand1",

  variants: {
    type: {
      circle: {
        borderColor: "$grey5",
        backgroundColor: "$whiteFixed",
        borderRadius: "50%",
        padding: "0",
        width: "2.75rem",
        height: "2.75rem",
        "&:hover": {
          backgroundColor: "$brand4",
          color: "$brand1",
        },
      },
    },
    ...colors,
  },
});

export const Btn = styled("div", {
  height: "2.75rem",
  fontWeight: "300",
  padding: "0 1rem",
  cursor: "pointer",
  fontFamily: "$texts",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "max-content",

  variants: {
    type: {
      btLink: {
        background: "transparent",
        borderColor: "transparent",
      },
      primary: {
        background: "$brand1",
        borderColor: "$brand1",
        color: "$whiteFixed",
        "&:hover": {
          borderRadius: "$3",
          color: "$brand1",
          backgroundColor: "$brand4",
          borderColor: "$brand4",
        },
      },
      icon: {
        borderColor: "$grey5",
        backgroundColor: "transparent",
        "&:hover": {
          backgroundColor: "$grey5",
        },
      },
      circle: {
        borderColor: "$grey5",
        backgroundColor: "$whiteFixed",
        borderRadius: "50%",
        padding: "0",
        width: "2.75rem",
        height: "2.75rem",
        "&:hover": {
          backgroundColor: "$grey5",
        },
      },
    },
    ...colors,
  },
});

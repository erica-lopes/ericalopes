import { styled } from "../../styles/stitches.config";
import { keyframes } from "@stitches/react";
import { Text } from "../../styles/Text";

const scaleUp = keyframes({
  "0%": { transform: "translateY(15%)" },
  "100%": { transform: "translateY(-140%)" },
});

export const StackCard = styled("div", {
  minWidth: "10.25rem",
  maxWidth: "10.25rem",
  borderRadius: "$3",
  padding: "1rem",
  marginTop: "1.5rem",
  background: "$brand3",
  color: "$brand4",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",


  [`& ${Text}`]: {
    opacity: 0,
    position: "absolute",
    transform: "translateY(-15%)",
    background: "$brand1",
    padding: "0.4rem 1rem",
    borderRadius: "$1",
    textAlign: "center",
    fontSize: "1rem",
    fontWeight: "500",
    whiteSpace: "nowrap",
    display: "inline-block",
    verticalAlign: "middle",
    color: "brand2",


    "&:before": {
      opacity: 0,
      content: "",
      zIndex: "-1",
      bottom: "-5px",
      position: "absolute",
      width: 0,
      height: 0,
      background: "$brand1",
      borderLeft: "25px solid transparent",
      borderRight: "25px solid transparent",
      borderTop: "25px solid $whiteFixed",
      transform: "translateX(-50%)",
      left: "50%",
      right: "100%",
      
    },
  },

  "&:hover": {
    [`& ${Text}`]: {
      opacity: 1,
      color: "$brand2",
      top: 0,
      transform: "translateY(-140%)",
      animation: `${scaleUp} 300ms`,
    },
  },
});

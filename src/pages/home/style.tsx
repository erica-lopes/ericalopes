import { styled as stl } from "@/styles/stitches.config";
import styled, { keyframes } from "styled-components";
import { Flex } from "@/styles/Global";

export const Header = stl("header", {
  backgroundColor: "$brand1",
  padding: "4.5rem 0 0.1rem 0",
  "@mobile": {
    padding: "9rem 0 6rem 0",
    textAlign: "center",
  },
});

export const HeaderContent = stl("div", {
  maxWidth: "100%",
  marginTop: "0.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
});

export const Banner = stl("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "5rem",
  boxShadow: "inset 0px -7px 5px -8px rgba(0,0,0,0.3)",
  backgroundColor: "$grey7",
});

export const Static = stl("div", {
  display: "flex",
});

export const Div = stl("div", {
  maxWidth: "300px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  visibility: "visible",
  "@mobile": {
    maxWidth: "100px",
    visibility: "hidden",
  },
});

export const Dinamic = stl("div", {
  display: "flex",
  overflow: "hidden",
  minWidth: "200px",
  gap: "2rem",
  position: "sticky",
  top: "10rem",
});

export const DinamicDiv = stl("div", {
  height: "70px",
});

const slideTransition = keyframes`
  100%
  {
    top: -460px;
  }
`;

const slideTyping = keyframes`
  40%, 60%
  {
    left: 100%;
  }
  100% {
    left: 0;
  }
`;

export const DinamicList = styled.li`
  list-style: none;
  color: white;
  font-size: 30px;
  position: relative;
  top: 0;
  font-family: Homemade Apple;
  animation: ${slideTransition} 13s steps(7) infinite;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    background: brand1;
    border-left: 2px solid brand1;
    animation: ${slideTyping} 6s steps(40) infinite;
  }
`;

export const AboutMe = stl("section", {
  display: "flex",
  backgroundColor: "$brand1",
  padding: "4rem 0 4rem 0",
  flexDirection: "column",
  textAlign: "justify",
  overflowWrap: "break-word",
});

export const StackSection = stl("section", {
  backgroundColor: "$brand4",
  padding: "4rem 0 2rem 0",
});

export const StackCards = stl("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
  padding: "3rem 0",
  gap: "2rem",

  "@mobile": {
    display: "flex",
    marginInline: "-1rem",
    paddingInline: "1rem",
    overflow: "auto",
  },
});

export const ProjectsArea = stl("section", {
  padding: "4rem 0 8rem 0",
  background: "$brand3",
  "@mobile": {
    flexDirection: "column",
    justifyContent: "center",
  },
});

export const ProjectsAreaSocialMediaMessage = stl("aside", {
  width: "32%",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  position: "sticky",
  top: "10rem",

  "@mobile": {
    width: "100%",
    position: "static",
    order: "2",
    marginTop: "5rem",
  },
});

export const ProjectsAreaContent = stl("div", {
  width: "60%",
  paddingLeft: "4rem",
  gap: "5rem",
  "@mobile": {
    width: "100%",
    paddingLeft: "0",
  },
});

export const ProjectAreaWrapperColumns = stl(Flex, {
  position: "relative",
  alignItems: "flex-start",
  "@mobile": {
    flexDirection: "column",
  },
});

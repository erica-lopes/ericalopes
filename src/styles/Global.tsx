import { createTheme, globalCss, styled } from "@stitches/react";
import { ReactNode } from "react";

interface GlobalStyleProps {
  children: ReactNode;
}

export const Container = styled("div", {
  maxWidth: "$container",
  margin: "0 auto",
  padding: "0 5rem",
});

export const Flex = styled("div", {
  display: "flex",
  gap: "$1",
});

export const colors = {
  color: {
    brand1: {
      color: "$brand1",
    },
    brand3: {
      color: "$brand3",
    },
    brand4: {
      color: "$brand4",
    },
    grey1: {
      color: "$grey1",
    },
    grey2: {
      color: "$grey2",
    },
    grey3: {
      color: "$grey3",
    },
    grey4: {
      color: "$grey4",
    },
    grey5: {
      color: "$grey5",
    },
    grey6: {
      color: "$grey6",
    },
    grey7: {
      color: "$grey7",
    },
    white: {
      color: "$whiteFixed"
    },
  },
};

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    fontFamily: "'Inter', sans-serif",
    boxSizing: "border-box",
  },
  html: {
    scrollBehavior: "smooth",
  },
  a: { textDecoration: "none" },
});

export const GlobalStyle: React.FC<GlobalStyleProps> = ({ children }) => {
  const theme = createTheme({
    colors: {
      brand1: "#f26278",
      brand2: "#dcc9c5",
      brand3: "#bcbcb4",
      brand4: "#f9f4df",

      grey1: "#212529",
      grey2: "#4E4B48",
      grey3: "#CED3D7",
      grey4: "#F1F3F5",
      grey5: "#F8F9FA",
      grey6: "#DEE0FB",
      grey7: "#FFFFFF",

      whiteFixed: "#FFFFFF",
      mode: "#bcbcb4",
    },
    sizes: {
      container: "75rem",
    },
    space: {
      1: "0.5rem",
      2: "1rem",
      3: "2rem",
    },
    fonts: {
      titles: '"Lexend", sans-serif;',
      texts: '"Inter", sans-serif',
    },
    fontSizes: {
      title1: "2.75rem",
      title2: "1.75rem",
      title3: "1.50rem",
      title4: "1.25rem",
      text1: "1rem",
      text2: "0.875rem",

      // Mobile
      title1Mobile: "$title2",
      title2Mobile: "$title3",
    },
    lineHeights: {
      title1: "3.8rem",
      title2: "2.75rem",
      title3: "2.5rem",
      title4: "1.25rem",
      text1: "1.75rem",
      text2: "1.75rem",

      // Mobile
      title1Mobile: "$title2",
      title2Mobile: "$title3",
    },

    radii: {
      1: "0.5rem",
      2: "0.25rem",
      3: "2rem 2rem 0 2rem",
      4: "6rem",
    },
  });

  globalStyles();

  const App = styled("div", {
    minHeight: "100vh",
  });

  return <App className={theme}>{children}</App>;
};

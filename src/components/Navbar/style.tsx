import { styled } from "../../styles/stitches.config";
import { Flex, Container } from "../../styles/Global";

export const Navbar = styled("nav", {
  background: "$mode",
  position: "fixed",
  inset: 0,
  bottom: "auto",
  padding: "1rem 0",
  width: "100%",
  zIndex: "99999",
  boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.3) ",

  [`& ${Container}`]: {
    display: "flex",
    justifyContent: "space-between",
    "@mobile": {
      flexDirection: "column",
    },
  },
});

export const LogoTipo = styled(Flex, {
  marginLeft: "1rem",
  alignItems: "center",
});

export const LogoTipoText = styled("span", {
  fontSize: "1",
  fontWeight: 200,
  color: "$grey7",
  fontFamily: '"Homemade Apple"',
});

export const NavbarLinks = styled(Flex, {
  "@mobile": {
    color: "$white",
    marginTop: "$3",
    flexDirection: "column",
    alignItems: "flex-start",
    "& a": {
      width: "100%",
      justifyContent: "flex-start",
      paddingLeft: 0,
    },
  },
});

export const NavbarMobileArea = styled("div", {
  display: "flex",
  justifyContent: "space-between",
});

import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";
import { Footer as FooterWrapper } from "./style";
import { FaAngleUp } from "react-icons/fa";
import { Content, Social, Social_Buttons, Btn } from "./style";
import { userData } from "@/utils/userData";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export const Footer = (): JSX.Element => {
  return (
    <FooterWrapper id="contact">
      <Container>
        <Button
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          aria-label="Voltar para o topo do site"
          type="circle"
        >
          <FaAngleUp color="$brand1"/>
        </Button>

        <Content>
          <Text type="body1" color="grey5">
            &copy;2023 Erica Lopes
          </Text>

          <Social>
            <Social_Buttons
              className="whatsapp"
              type="circle"
              as="a"
              target="_blank"
              href={`https://api.whatsapp.com/send?phone=+55+${userData.whatsappNumber}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`}
            >
              <FaWhatsapp color="$brand1" size="20" />
            </Social_Buttons>

            <Social_Buttons
              className="linkedin"
              type="circle"
              as="a"
              target="_blank"
              href={`https://linkedin.com/in/${userData.linkedinUser}`}
            >
              <FaLinkedinIn color="$brand1" />
            </Social_Buttons>

            <Social_Buttons
              className="github"
              type="circle"
              as="a"
              target="_blank"
              href={`https://github.com/${userData.githubUser}`}
            >
              <FaGithub color="$brand1" />
            </Social_Buttons>

            <Social_Buttons
              className="email"
              type="circle"
              as="a"
              target="_blank"
              href={`mailto=${userData.emailUser}`}
              onClick={() =>
                (window.location.href = "mailto:ericalopes@outlook.com")
              }
            >
              <MdEmail color="$brand1" />
            </Social_Buttons>

            <Btn
              type="primary"
              target="_blank"
              as="a"
              href={`https://github.com/erica-lopes/ericalopes`}
            >
              Source Code
            </Btn>
          </Social>
        </Content>
      </Container>
    </FooterWrapper>
  );
};

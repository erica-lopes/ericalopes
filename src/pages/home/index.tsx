// Styles
import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

// Page Style
import {
  Header,
  HeaderContent,
  Banner,
  Static,
  Div,
  Dinamic,
  DinamicDiv,
  DinamicList,
  StackSection,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectsAreaContent,
  ProjectAreaWrapperColumns,
  AboutMe,
} from "./style";

export const Home = (): JSX.Element => {
  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
            <Text as="h1" type="body2" color="grey7">
              Conheça neste ambiente, criado especialmente para você, todos os
              meus projetos, tecnologias e desenvolvimento de habilidades.{" "}
            </Text>
          </HeaderContent>
        </Container>
      </Header>

      <Banner>
        <Container>
          <Static>
            <Div>
              <Text type="heading1" color="grey2">
                designer{" "}
                <Text as="h4" type="body2" color="grey1">
                  Uma designer gráfico, buscando aperfeiçoamento para UI/UX
                  design...
                </Text>
              </Text>
            </Div>

            <img width="600px"src="https://i.ibb.co/ZWJDdYn/banner.png" alt="banner"/>

            <Div>
              <Text type="heading1" color="grey2">
                &lt; coder &gt;
                <Text as="h4" type="body2" color="grey1">
                  ...que virou desenvolvedora Full Stack na busca de criar
                  códigos limpos e eficientes...
                </Text>
              </Text>
            </Div>
          </Static>
        </Container>
      </Banner>

      <AboutMe id="about">
        <Container>
          <Text as="h4" type="heading1" color="white">
            sobre
          </Text>
          <br />
          <Text as="p" type="body1" color="white">
            Olá! Meu nome é Erica e sou designer e desenvolvedora web full
            stack. Por 8 anos trabalhei na área do design, mas ao buscar por
            atualização profissional acabei me encantando com a área de
            desenvolvimento web e assim resolvi efetuar uma transição de
            carreira.
          </Text>
          <Text as="p" type="body1" color="white">
            Ainda tenho um longo caminho para me tornar a profissional que
            desejo e essa tem sido uma jornada desafiadora, buscar uma escrita
            limpa e acessível, um código humano; gosto de experimentar a web
            como um meio criativo, sou apaixonada pelo aspecto visual dos
            projetos e com a interface, animações e experiência que o usuário
            pode ter, gosto dos detalhes. Sou organizada e responsável, pra mim
            um ambiente colaborativo e positivo é extremamente importante.
          </Text>
          <Text as="p" type="body1" color="white">
            Se talvez essa “coisa de internet” sair de moda um dia, você me
            contrará vivendo em um sítio, com uma vista verde incrível, cuidando
            de meus animais, plantas e vivendo de forma sustentável. Mas por
            hora resido no tranquilo interior paulista, com meu marido, filho e
            quatro cachorros (todos adotados) e que ama …
          </Text>

          <Dinamic>
            <DinamicDiv>
              <ul>
                <DinamicList>...chuva</DinamicList>
                <DinamicList>...viagens</DinamicList>
                <DinamicList>...filmes antigos</DinamicList>
                <DinamicList>...videos de decoração</DinamicList>
                <DinamicList>...e culinária coreana</DinamicList>
                <DinamicList>...anos 80 e o rock trash 🤘</DinamicList>
                <DinamicList>...e também o pop dos anos 90 🙃</DinamicList>
              </ul>
            </DinamicDiv>
          </Dinamic>
        </Container>
      </AboutMe>

      <StackSection id="techs">
        <Container>
          <Text as="h4" type="heading1" color="brand1">
            habilidades e ferramentas
          </Text>
          <Text as="p" type="body2" color="grey2">
            tecnologias que uso para dar vida aos projetos.
          </Text>
          <StackCards>
            {stackData.map((stack, index) => (
              <Stack key={index} title={stack.title} icon={stack.img} />
            ))}
          </StackCards>
        </Container>
      </StackSection>
      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaContent>
              <Text as="h4" type="heading1" color="brand1">
                projetos
              </Text>
              <Text as="p" type="body2" color="grey2">
                uma seleção de coisas que eu construí.
              </Text>
              <Project />
            </ProjectsAreaContent>

            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey1">
                Vamos trocar uma ideia?
              </Text>
              <Text as="p" type="body1" color="grey2">
                No linkedIn sempre estou compartilhando meus processos diários
                para desenvolver esses projetos.
              </Text>
              <Button
                type="primary"
                target="_blank"
                as="a"
                href={`https://www.linkedin.com/in/${userData.linkedinUser}`}
              >
                Acessar perfil no LinkedIn
              </Button>

              <Button
                type="primary"
                target="_blank"
                as="a"
                href={`https://drive.google.com/file/d/1kzyGx4q6TFrP8vhegwMwJsENhr9xi9Xu/view`}
              >
                Faça o download do meu CV
              </Button>
            </ProjectsAreaSocialMediaMessage>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
    </main>
  );
};

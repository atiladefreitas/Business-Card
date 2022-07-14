import {
  Container,
  Wrapper,
  Image,
  IconsWrapper,
  MainTitle,
  Title,
  Subtitle,
} from "./style";
import photo from "../assets/photo.jpeg";
import email from "../assets/badges/E-mail.png";
import linkedin from "../assets/badges/Linkedin.png";
import github from "../assets/badges/Github.png";
import telegram from "../assets/badges/Telegram.png";

function Page(): JSX.Element {
  return (
    <Container>
      <Wrapper>
        <Image>
          <img
            src={photo}
            alt={"Foto linda"}
            style={{
              width: "100%",
            }}
          />
        </Image>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.8rem",
            margin: "2rem",
          }}
        >
          <MainTitle> Átila de Freitas </MainTitle>
          <Title>Mid-level Frontend Developer</Title>
          <Subtitle>ReactJS & React Native | TypeScript | NodeJS</Subtitle>
        </div>
        <IconsWrapper>
          <a href="mailto:contact@atiladefreitas.co" target="_blank">
            <img src={email} alt={"email"} />
          </a>
          <a href="https://www.linkedin.com/in/atilafreitas" target="_blank">
            <img src={linkedin} alt={"linkedin"} />
          </a>
          <a href="https://github.com/atiladefreitas" target="_blank">
            <img src={github} alt={"email"} />
          </a>
          <a href="https://t.me/atilajcfreitas" target="_blank">
            <img src={telegram} alt={"email"} />
          </a>
        </IconsWrapper>
      </Wrapper>
    </Container>
  );
}

export { Page };

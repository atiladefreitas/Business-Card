import { Container, Wrapper } from "./style";

function About(): JSX.Element {
  return (
    <Container>
      <Wrapper>
        <h1>About me</h1>
        <p>
          I'm 24yo from the northeast of Brazil, and I'm a Fullstack Javascript
          Developer. From the time I was a child I've been interested in
          technology.
          <br />
          <br />
          My first contact with a computer happened when I was 4 years old - it
          was my father's 2mb ram machine. Since then I became more and more
          interested in technology. In 2018 I joined the Physics Bachelor at the
          Federal University of Rio Grande do Norte (UFRN) where my contact with
          new technologies and science became even more intense and it was at
          UFRN that I actually started to program. There I was able to learn
          C++, Python and Fortran. I started to study the area of Quantum
          Physics called Density Functional Theory (DFT) using ab-initio
          Crystal17 software for calculations.
          <br />
          <br />
          Since the beginning of 2021 I have been studying programming in a
          self-taught way focused on Fullstack Development and Cyber Security.
        </p>
      </Wrapper>
    </Container>
  );
}

export { About };

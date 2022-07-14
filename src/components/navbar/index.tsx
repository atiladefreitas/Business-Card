import React from "react";
import { Container } from "./style";

function Navbar(): JSX.Element {
  return (
    <Container>
      <h1
        onClick={() => {
          console.log("hello");
        }}
      >
        Home
      </h1>
      <h1
        onClick={() => {
          console.log("hello");
        }}
      >
        About
      </h1>
    </Container>
  );
}

export { Navbar };

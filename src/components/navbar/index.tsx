import React from "react";
import { Container } from "./style";

import { useNavigate } from "react-router-dom";

function Navbar(): JSX.Element {
  const navigate = useNavigate();

  return (
    <Container>
      <h1
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </h1>
      <h1
        onClick={() => {
          navigate("/about");
        }}
      >
        About
      </h1>
    </Container>
  );
}

export { Navbar };

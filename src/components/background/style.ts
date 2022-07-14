import styled from "styled-components";
import texture from "../../assets/texture.png";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${texture});
  background-color: #1b1b1b;
`;

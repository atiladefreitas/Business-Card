import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: end;
  justify-content: center;
  position: absolute;
  color: #e0d4c6;
  gap: 1rem;

  & h1 {
    font-family: "Ubuntu", sans-serif;
    cursor: pointer;
    :hover {
      color: #5c7b9c;
    }
  }
`;

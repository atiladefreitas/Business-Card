import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: end;
  justify-content: center;
  position: absolute;
  color: #f8f7ff;
  gap: 1rem;

  padding-bottom: 55rem;

  @media screen and (max-width: 460px) {
    padding-bottom: 48rem;
  }

  & h1 {
    font-family: "Ubuntu", sans-serif;
    cursor: pointer;
    font-weight: normal;
    :hover {
      color: #5c7b9c;
    }
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  max-width: 50rem;
  max-height: 35rem;
  width: 90%;
  height: 50%;
  display: flex;
  border-radius: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(5px);
  color: white;

  @media screen and (max-width: 460px) {
    height: 80%;
    max-height: 50rem;
  }
`;

export const Wrapper = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & h1 {
    font-family: "Ubuntu", sans-serif;
    font-size: 30px;
    color: #f8f7ff;
    margin: 0;

    @media screen and (max-width: 460px) {
      font-size: 24px;
    }
  }

  & p {
    font-family: "Ubuntu", sans-serif;
    font-size: 18px;
    color: #f8f7ff;
    margin: 0;

    @media screen and (max-width: 460px) {
      font-size: 16px;
    }
  }
`;

import styled from "styled-components";
import texture from "../assets/texture.png";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${texture});
  background-color: #1b1b1b;
`;

export const Wrapper = styled.div`
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
    height: 100%;
    max-height: 50rem;
  }
`;

export const Image = styled.div`
  overflow: hidden;
  width: 12rem;
  height: 12rem;
  display: flex;
  border-radius: 10rem;

  & img {
    object-fit: cover;
    width: 100%;
    min-height: 100%;
  }
`;
export const IconsWrapper = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  & img {
    width: 10rem;

    :hover {
      width: 11rem;
      height: auto;
      -webkit-transition: 0.3s ease-in-out;
      transition: 0.3s ease-in-out;
    }
  }

  @media screen and (max-width: 460px) {
    flex-direction: column;
    height: 15rem;
  }
`;

export const MainTitle = styled.h1`
  font-family: "Ubuntu", sans-serif;
  font-size: 32px;
  color: #f8f7ff;
  margin: 0;

  @media screen and (max-width: 460px) {
    font-size: 30px;
  }
`;

export const Title = styled.p`
  font-family: "Ubuntu", sans-serif;
  font-size: 24px;
  color: #e0d4c6;
  margin: 0;
  @media screen and (max-width: 460px) {
    font-size: 20px;
  }
`;

export const Subtitle = styled.p`
  font-family: "Ubuntu", sans-serif;
  font-size: 18px;
  color: #5c7b9c;
  margin: 0;
  @media screen and (max-width: 460px) {
    font-size: 14px;
  }
`;

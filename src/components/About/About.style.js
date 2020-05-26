import styled from "styled-components";

export const AboutContainer = styled.div`
  border: 2px solid green;
  display: flex;
  flex-direction: column;
  width: 100vw;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const AboutText = styled.div`
  border: 2px solid green;
  width: 90%;
  margin: 5px auto;
  text-align: justify;
`;

export const AboutImg = styled.div`
  border: 2px solid green;
  width: 90%;
  margin: 5px auto;

  img {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    img {
      width: 70%;
    }
`;

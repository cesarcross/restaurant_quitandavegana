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

  p {
    font-size: 1.3rem;
  }

  @media screen and (min-width: 768px) {
    width: 70%;
    padding: 10px;

    p {
      font-size: 1.6rem;
    }
  }
`;

export const AboutImg = styled.div`
  border: 2px solid red;
  width: 90%;
  margin: 5px auto;

  img {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 70%;
    padding: 10px;
  }
`;

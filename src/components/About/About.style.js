import styled from "styled-components";

export const AboutContainer = styled.div`
  /* border: 2px solid green; */
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const AboutText = styled.div`
  /* border: 2px solid green; */
  width: 90%;
  margin: 5px auto;
  text-align: justify;

  h3 {
    font-size: 1.2rem;
    margin: 15px 0;
  }

  @media screen and (min-width: 768px) {
    width: 50%;
    padding: 10px;

    h3 {
      font-size: 2rem;
    }

    p {
      font-size: 1.5rem;
    }
  }

  @media screen and (min-width: 992px) {
    h3 {
      font-size: 1.5rem;
      margin: auto 50px;
    }

    p {
      font-size: 1rem;
      margin: 40px 50px auto;
    }
  }

  @media screen and (min-width: 1200px) {
    width: 60%;
  }
`;

export const AboutImg = styled.div`
  /* border: 2px solid red; */
  width: 90%;
  margin: 5px auto;

  img {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 50%;
    padding: 10px;
  }

  @media screen and (min-width: 1200px) {
    width: 40%;
  }
`;

import styled from "styled-components";

export const TeamContainer = styled.div`
  border: 2px solid green;
  display: flex;
  flex-direction: column;
  background: #fed34a;

  h3 {
    text-align: center;
    margin: 10px auto;
    font-size: 1.2rem;
  }
`;

export const TeamCards = styled.div`
  border: 2px solid red;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const TeamPerson = styled.div`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px auto;
  margin-top: auto;

  img {
    width: 90vw;
    margin-top: 10px;
  }

  h2 {
    font-size: 1.2rem;
  }

  p {
    font-size: 1.2rem;
  }

  @media screen and (min-width: 768px) {
    img {
      width: 70%;
    }
  }
`;

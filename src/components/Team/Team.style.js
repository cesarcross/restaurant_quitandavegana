import styled from "styled-components";

export const TeamContainer = styled.div`
  border: 2px solid green;
  background: #fed34a;
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

  img {
    width: 90vw;
  }

  h2,
  p {
  }

  @media screen and (min-width: 768px) {
    img {
      width: 70%;
    }
  }
`;

import styled from "styled-components";

export const TeamContainer = styled.div`
  border: 2px solid green;
  display: flex;
  flex-direction: column;

  h3 {
    text-align: center;
    margin: 10px auto;
    font-size: 1.2rem;
  }

  @media screen and (min-width: 768px) {
    h3 {
      font-size: 2rem;
    }
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
  border: 10px solid;
  border-color: ${({ bgcolor }) => (bgcolor ? `${bgcolor}` : "white")};
  ${"" /* background: ${({ bgcolor }) => (bgcolor ? `${bgcolor}` : "white")}; */}
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px auto;
  border-radius: 3px;
  ${"" /* display: block; */}
  width: min-content;

  img {
    width: 90%;
  }

  h3,
  p {
    font-size: 1.2rem;
  }

  @media screen and (min-width: 768px) {
    img {
      width: 70%;
    }

    h3,
    p {
      font-size: 1.5rem;
    }
  }
`;

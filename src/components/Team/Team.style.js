import styled from "styled-components";

export const TeamContainer = styled.div`
  /* border: 2px solid green; */
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background: #b8d94f;

  h3 {
    text-align: center;
    margin: 20px 10px auto;
    font-size: 1.2rem;
    font-weight: 500;
  }

  @media screen and (min-width: 768px) {
    h3 {
      font-size: 2rem;
    }
  }
`;

export const TeamCards = styled.div`
  /* border: 2px solid red; */
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 20px 0;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 992px) {
    max-width: 992px;
    margin: 20px auto;
  }
`;

export const TeamPerson = styled.div`
  border: 10px solid;
  border-radius: 3px;
  border-color: ${({ bgcolor }) => bgcolor};
  background: ${({ bgcolor }) => bgcolor};
  color: ${({ txtcolor }) => txtcolor};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px auto;
  padding: 0;
  width: min-content;

  img {
    width: 250px;
  }

  p {
    margin: 0;
  }

  h3,
  p {
    font-size: 1.2rem;
  }

  @media screen and (min-width: 768px) {
    img {
      width: 330px;
    }

    h3,
    p {
      font-size: 1.5rem;
    }
  }

  @media screen and (min-width: 992px) {
    margin-right: ${({ mright }) => (mright ? "100px" : "")};
  }
`;

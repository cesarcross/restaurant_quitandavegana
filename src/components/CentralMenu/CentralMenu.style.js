import styled from "styled-components";

export const CentralMenuContainer = styled.div`
  border: 2px solid green;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const CentralMenuCards = styled.ul`
  border: 2px solid red;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

export const CentralMenuItem = styled.li`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;

  img {
    width: 100%;
  }

  h2,
  p {
  }
`;

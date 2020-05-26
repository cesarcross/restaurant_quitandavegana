import styled from "styled-components";

export const CentralMenuContainer = styled.div`
  border: 2px solid green;
  display: flex;
  flex-direction: column;

  h2 {
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const CentralMenuBtnDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CentralMenuButton = styled.button`
  border: 2px solid green;
  width: 40%;
  margin: 2px;
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

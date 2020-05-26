import styled from "styled-components";

export const CentralMenuContainer = styled.div`
  border: 2px solid green;
  display: flex;
  flex-direction: column;
  margin: 20px auto;

  h2 {
    margin: 0 auto;
  }
`;

export const CentralMenuBtnDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const CentralMenuButton = styled.button`
  border: 2px solid green;
  width: 40%;
  margin: 2px;
  outline: none;
  font-size: 1.2rem;
  border-radius: 2px;

  &:focus {
    outline: 0;
    background: red;
  }

  @media screen and (min-width: 768px) {
    width: 20%;
    padding: 5px;
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
  margin: 10px auto;

  h3 {
    text-align: center;
  }

  p {
    font-size: 1.5rem;
  }

  img {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;

    h3 {
      margin-left: 20px;
    }

    p {
      font-size: 2rem;
      margin-left: auto;
      margin-right: 20px;
    }

    img {
      width: 30%;
    }
  }
`;

import styled from "styled-components";

export const AboutContainer = styled.div`
  border: 2px solid green;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const AboutText = styled.div`
  border: 2px solid green;
`;

export const AboutImg = styled.div`
  border: 2px solid green;

  img {
    width: 100%;
  }
`;

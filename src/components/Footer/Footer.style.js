import styled from "styled-components";

import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

export const FooterContainer = styled.div`
  border: 2px solid green;
  background: #fed34a;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterLogo = styled.div`
  border: 2px solid red;
  display: flex;
  justify-content: center;

  img {
    width: 50%;
  }
`;

export const FooterAddress = styled.div`
  border: 2px solid red;

  p {
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    font-size: 1.5rem;

    p {
      margin-top: 10px;
      margin-bottom: 0;
    }

    p:first-of-type {
      margin-right: 5px;
    }

    p:last-of-type {
      margin: 5px auto;
    }
  }
`;

export const FooterSocial = styled.div`
  border: 2px solid red;
`;

export const FooterFacebook = styled(FaFacebookSquare)`
  backgrond: #3eed17;
  font-size: 50px;
`;

export const FooterInstagram = styled(FaInstagram)`
  background: #fed34a;
  font-size: 50px;
`;

export const FooterCaravan = styled.div`
  border: 2px solid red;

  a {
    font-weight: bold;
    text-decoration: none;
  }

  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

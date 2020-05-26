import styled from "styled-components";

import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

export const FooterContainer = styled.div`
  border: 2px solid green;
  backgrond: #fed34a;
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
`;

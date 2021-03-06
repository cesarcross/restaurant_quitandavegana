import styled from "styled-components";

import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

export const FooterContainer = styled.div`
  /* border: 2px solid green; */
  background: #fed34a;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterLogo = styled.div`
  /* border: 2px solid red; */
  display: flex;
  justify-content: center;

  img {
    margin: 20px auto;
    width: 50%;
  }

  @media screen and (min-width: 1200px) {
    img {
      width: 25%;
    }
  }
`;

export const FooterAddress = styled.div`
  /* border: 2px solid red; */

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

  @media screen and (min-width: 1200px) {
    p,
    p:first-of-type,
    p:last-of-type {
      font-size: 1rem;
      margin: 0 2px;
    }
  }
`;

export const FooterSocial = styled.div`
  /* border: 2px solid red; */
`;

export const FooterFacebook = styled(FaFacebookSquare)`
  font-size: 50px;
  color: darkslategray;
  margin: auto 5px 10px;
`;

export const FooterInstagram = styled(FaInstagram)`
  font-size: 50px;
  color: darkslategray;
  margin: auto 5px 10px;
`;

export const FooterCaravan = styled.div`
  /* border: 2px solid red; */

  a {
    font-weight: bold;
    text-decoration: none;
    color: #36383b;

    &:hover {
      color: #666060;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }

  @media screen and (min-width: 1200px) {
    font-size: 1rem;
    margin: 2px;
  }
`;

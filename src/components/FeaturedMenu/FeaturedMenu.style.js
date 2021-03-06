import styled from "styled-components";

import { FaWhatsapp } from "react-icons/fa";

export const FeaturedMenuContainer = styled.div`
  /* border: 2px solid green; */
  display: flex;
  flex-direction: column;
  background: #513a31;

  h3 {
    font-size: 1.2rem;
    text-align: center;
    /* margin-top: 20px; */
    margin: 15px auto;
    color: #fff;
  }

  img {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    h3 {
      font-size: 1.7rem;
    }
  }
`;

export const FeaturedDelivery = styled.a`
  margin: 0 auto;
`;

export const FeaturedMenuIfood = styled.button`
  border: none;
  background: #ea1e2c;
  color: #fff;
  width: 170px;
  height: 40px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 220px;
  }

  &:hover {
    background: #f25d46;
  }

  img {
    width: 50px;
  }
`;

export const FeaturedMenuWhatsapp = styled.button`
  border: none;
  background: #04e676;
  color: #fff;
  width: 170px;
  height: 40px;
  margin: 5px auto 15px;
  font-weight: bold;

  @media screen and (min-width: 768px) {
    width: 220px;
  }

  &:hover {
    background: #9aef99;
  }
`;

export const MenuWhatsapp = styled(FaWhatsapp)`
  color: #fff;
`;

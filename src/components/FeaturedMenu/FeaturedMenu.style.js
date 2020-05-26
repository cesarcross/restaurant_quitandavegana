import styled from "styled-components";

import { FaWhatsapp } from "react-icons/fa";

export const FeaturedMenuContainer = styled.div`
  border: 2px solid green;
  display: flex;
  flex-direction: column;
  background: #bac64a;
  img {
    width: 100%;
  }
`;

export const FeaturedMenuWhatsapp = styled.button`
  border: none;
  background: #04e676;
  color: #fff;
  width: 40%;
  height: 40px;
  margin: 0 auto 5px;
  font-weight: bold;

  &:hover {
    background: #9aef99;
  }
`;

export const MenuWhatsapp = styled(FaWhatsapp)`
  color: #fff;
`;

export const FeaturedMenuIfood = styled.button`
  border: none;
  background: #ea1e2c;
  color: #fff;
  width: 40%;
  height: 40px;
  margin: 0 auto;

  &:hover {
    background: #f25d46;
  }

  img {
    width: 50px;
  }
`;

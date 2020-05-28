import React from "react";
import { Element } from "react-scroll";

import {
  FeaturedMenuContainer,
  FeaturedMenuWhatsapp,
  MenuWhatsapp,
  FeaturedMenuIfood,
} from "./FeaturedMenu.style";

import featuredBanner from "../../assets/images/featured.png";
import ifood from "../../assets/images/ifood-logo.png";

const FeaturedMenu = () => (
  <Element id="home" name="home">
    <FeaturedMenuContainer>
      <img src={featuredBanner} alt="Logo" />
      <h3>Faça seu pedido!</h3>
      <FeaturedMenuIfood>
        <img src={ifood} alt="" />
      </FeaturedMenuIfood>
      <FeaturedMenuWhatsapp>
        Whatsapp <MenuWhatsapp />
      </FeaturedMenuWhatsapp>
    </FeaturedMenuContainer>
  </Element>
);

export default FeaturedMenu;

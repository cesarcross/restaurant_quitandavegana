import React from "react";
import { Element } from "react-scroll";

import {
  FeaturedMenuContainer,
  FeaturedMenuWhatsapp,
  MenuWhatsapp,
  FeaturedDelivery,
  FeaturedMenuIfood,
} from "./FeaturedMenu.style";

import featuredBanner from "../../assets/images/featured_banner.png";
import ifood from "../../assets/images/ifood-logo.png";

const FeaturedMenu = () => (
  <Element id="home" name="home">
    <FeaturedMenuContainer>
      <img src={featuredBanner} alt="Logo" />
      <h3>Faça seu pedido!</h3>
      <FeaturedDelivery
        href="http://www.ifood.com.br"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FeaturedMenuIfood>
          <img src={ifood} alt="" />
        </FeaturedMenuIfood>
      </FeaturedDelivery>
      <FeaturedDelivery
        href="https://web.whatsapp.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FeaturedMenuWhatsapp>
          Whatsapp <MenuWhatsapp />
        </FeaturedMenuWhatsapp>
      </FeaturedDelivery>
    </FeaturedMenuContainer>
  </Element>
);

export default FeaturedMenu;

import React from "react";

import {
  FeaturedMenuContainer,
  FeaturedMenuWhatsapp,
  MenuWhatsapp,
  FeaturedMenuIfood,
} from "./FeaturedMenu.style";

import featuredBanner from "../../assets/images/featured.png";
import ifood from "../../assets/images/ifood-logo.png";

const FeaturedMenu = () => {
  return (
    <FeaturedMenuContainer>
      <img src={featuredBanner} alt="Logo" />
      Peça por:
      <FeaturedMenuIfood>
        <img src={ifood} alt="" />
      </FeaturedMenuIfood>
      <FeaturedMenuWhatsapp>
        Whatsapp <MenuWhatsapp />
      </FeaturedMenuWhatsapp>
    </FeaturedMenuContainer>
  );
};

export default FeaturedMenu;

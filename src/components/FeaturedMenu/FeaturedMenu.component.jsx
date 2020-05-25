import React from "react";

import {
  FeaturedMenuContainer,
  FeaturedMenuWhatsapp,
  FeaturedMenuIfood,
} from "./FeaturedMenu.style";

import featuredBanner from "../../assets/images/featured.png";

const FeaturedMenu = () => {
  return (
    <FeaturedMenuContainer>
      <img src={featuredBanner} alt="Logo" />
      <FeaturedMenuIfood>Peça pelo iFood</FeaturedMenuIfood>
      <FeaturedMenuWhatsapp>Peça pelo Whatsapp</FeaturedMenuWhatsapp>
    </FeaturedMenuContainer>
  );
};

export default FeaturedMenu;

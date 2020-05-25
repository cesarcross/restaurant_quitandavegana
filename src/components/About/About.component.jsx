import React from "react";

import { AboutContainer, AboutText, AboutImg } from "./About.style";

import aboutPic from "../../assets/images/about.png";

const About = () => {
  return (
    <AboutContainer>
      <AboutText>
        Este restaurante foi criado em 1817 com o intuito de reunir diversas
        tribos para conhecer e aproveitar alimentos da terra feitos de maneira
        artesanal e uma variedade de cores
      </AboutText>
      <AboutImg>
        <img src={aboutPic} alt="Restaurante" />
      </AboutImg>
    </AboutContainer>
  );
};

export default About;

import React from "react";

import {
  FooterContainer,
  FooterLogo,
  FooterAddress,
  FooterSocial,
  FooterCaravan,
  FooterFacebook,
  FooterInstagram,
} from "./Footer.style";

import Logo from "../../assets/images/featured.png";

const Footer = () => (
  <FooterContainer>
    <FooterLogo>
      <img src={Logo} alt="Logo" />
    </FooterLogo>
    <FooterAddress>
      <p>Endereço: Rua Amazonia, 2021, Belo Horizonte, MG 55030-756</p>
      <p>Telefone: +55 31 8888-8888</p>
    </FooterAddress>
    <FooterSocial>
      <a
        href="https://www.facebook.com"
        alt="Facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FooterFacebook />
      </a>
      <a
        href="https://www.instagram.com"
        alt="Instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FooterInstagram />
      </a>
    </FooterSocial>
    <FooterCaravan>
      <p>
        Site desenvolvido por{" "}
        <a
          href="https://www.codecaravan.com.br"
          alt="Code Caravan"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code Caravan
        </a>
      </p>
    </FooterCaravan>
  </FooterContainer>
);

export default Footer;

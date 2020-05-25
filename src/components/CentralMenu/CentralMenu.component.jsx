import React from "react";

import {
  CentralMenuContainer,
  CentralMenuCards,
  CentralMenuItem,
} from "./CentralMenu.style";

import pratos from "../../assets/images/pratos.png";
import frutas from "../../assets/images/frutas.png";
import sobremesa from "../../assets/images/sobremesa.png";
import bebida from "../../assets/images/bebida.png";

const CentralMenu = () => {
  return (
    <CentralMenuContainer>
      CARDAPIO IRRESISTIVEL PRATOS | FRUTAS | SOBREMESAS | BEBIDAS
      <CentralMenuCards>
        <CentralMenuItem>
          <img src={pratos} alt="pratos" />
          <h3>Tacos</h3>
          <p>R$ 15,00</p>
        </CentralMenuItem>
        <CentralMenuItem>
          <img src={frutas} alt="frutas" />
          <h3>Tacos</h3>
          <p>R$ 15,00</p>
        </CentralMenuItem>
        <CentralMenuItem>
          <img src={sobremesa} alt="sobremesa" />
          <h3>Tacos</h3>
          <p>R$ 15,00</p>
        </CentralMenuItem>
        <CentralMenuItem>
          <img src={bebida} alt="bebida" />
          <h3>Tacos</h3>
          <p>R$ 15,00</p>
        </CentralMenuItem>
      </CentralMenuCards>
    </CentralMenuContainer>
  );
};

export default CentralMenu;

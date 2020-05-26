import React, { useState } from "react";

import {
  CentralMenuContainer,
  CentralMenuBtnDiv,
  CentralMenuButton,
  CentralMenuCards,
  CentralMenuItem,
} from "./CentralMenu.style";

import { menuArray, menuCategories } from "./CentralMenuArray";

// import pratos from "../../assets/images/pratos.png";
// import frutas from "../../assets/images/frutas.png";
// import sobremesa from "../../assets/images/sobremesa.png";
// import bebida from "../../assets/images/bebida.png";

const CentralMenu = () => {
  const [categoryState, setCategoryState] = useState(menuCategories[0]);

  return (
    <CentralMenuContainer>
      <h2>CARDAPIO</h2>
      <CentralMenuBtnDiv>
        <CentralMenuButton onClick={() => setCategoryState(menuCategories[0])}>
          PRATOS
        </CentralMenuButton>
        <CentralMenuButton onClick={() => setCategoryState(menuCategories[1])}>
          SALADAS
        </CentralMenuButton>
        <CentralMenuButton onClick={() => setCategoryState(menuCategories[2])}>
          SOBREMESAS
        </CentralMenuButton>
        <CentralMenuButton onClick={() => setCategoryState(menuCategories[3])}>
          BEBIDAS
        </CentralMenuButton>
      </CentralMenuBtnDiv>
      <CentralMenuCards>
        {menuArray.map(({ id, image, category, name, price }) => {
          if (category === categoryState) {
            return (
              <CentralMenuItem key={id}>
                <img src={image} alt="" />
                <h3>{name}</h3>
                <p>{price}</p>
              </CentralMenuItem>
            );
          }
          return "";
        })}
        {/* <CentralMenu{I}tem>
          <{i}mg src={pratos} alt="pratos" />
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
        </CentralMenuItem> */}
      </CentralMenuCards>
    </CentralMenuContainer>
  );
};

export default CentralMenu;

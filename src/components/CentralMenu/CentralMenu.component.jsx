import React, { useState } from "react";
import { Element } from "react-scroll";

import {
  CentralMenuContainer,
  CentralMenuBtnDiv,
  CentralMenuButton,
  CentralMenuCards,
  CentralMenuItem,
} from "./CentralMenu.style";

import { menuArray, menuCategories } from "./CentralMenuArray";

const CentralMenu = () => {
  const [categoryState, setCategoryState] = useState(menuCategories[0]);

  return (
    <>
      <Element id="cardapio" name="cardapio">
        <CentralMenuContainer>
          <h3>Cardápio</h3>
          <CentralMenuBtnDiv>
            <CentralMenuButton
              onClick={() => setCategoryState(menuCategories[0])}
            >
              Pratos
            </CentralMenuButton>
            <CentralMenuButton
              onClick={() => setCategoryState(menuCategories[1])}
            >
              Saladas
            </CentralMenuButton>
            <CentralMenuButton
              onClick={() => setCategoryState(menuCategories[2])}
            >
              Sobremesas
            </CentralMenuButton>
            <CentralMenuButton
              onClick={() => setCategoryState(menuCategories[3])}
            >
              Bebidas
            </CentralMenuButton>
          </CentralMenuBtnDiv>
          <CentralMenuCards>
            {menuArray.map(
              ({ id, image, category, name, price, description }) => {
                if (category === categoryState) {
                  return (
                    <CentralMenuItem key={id}>
                      <img src={image} alt="" />
                      <h3>
                        {name}
                        <p>{description}</p>
                      </h3>
                      <p>R$ {price}</p>
                    </CentralMenuItem>
                  );
                }
                return "";
              }
            )}
          </CentralMenuCards>
        </CentralMenuContainer>
      </Element>
    </>
  );
};

export default CentralMenu;

import React from "react";
import { Element } from "react-scroll";

import { TeamContainer, TeamCards, TeamPerson } from "./Team.style";

import Edu from "../../assets/images/edu.png";
import Bela from "../../assets/images/bela.png";

const Team = () => (
  <Element id="equipe" name="equipe">
    <TeamContainer>
      <h3>Nossa Equipe</h3>
      <TeamCards>
        <TeamPerson bgcolor="#b8d94f">
          <img src={Edu} alt="Eduardo" />
          <h3>JORGE</h3>
          <p>Cozinheiro</p>
        </TeamPerson>
        <TeamPerson bgcolor="#FED34A">
          <img src={Bela} alt="Bela" />
          <h3>BELA</h3>
          <p>Cozinheira</p>
        </TeamPerson>
        <TeamPerson bgcolor="#FED34A">
          <img src={Bela} alt="Bela" />
          <h3>BELA</h3>
          <p>Cozinheira</p>
        </TeamPerson>
      </TeamCards>
    </TeamContainer>
  </Element>
);

export default Team;

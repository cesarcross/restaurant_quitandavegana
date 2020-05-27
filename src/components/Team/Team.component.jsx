import React from "react";

import { TeamContainer, TeamCards, TeamPerson } from "./Team.style";

import Edu from "../../assets/images/edu.png";
import Bela from "../../assets/images/bela.png";

const Team = () => (
  <TeamContainer>
    <h3>Nossa Equipe</h3>
    <TeamCards>
      <TeamPerson>
        <img src={Edu} alt="Eduardo" />
        <h3>Jorge</h3>
        <p>Cozinheiro</p>
      </TeamPerson>
      <TeamPerson>
        <img src={Bela} alt="Bela" />
        <h3>Bela</h3>
        <p>Cozinheira</p>
      </TeamPerson>
    </TeamCards>
  </TeamContainer>
);

export default Team;

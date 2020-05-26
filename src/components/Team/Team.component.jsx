import React from "react";

import { TeamContainer, TeamCards, TeamPerson } from "./Team.style";

import Edu from "../../assets/images/edu.png";
import Bela from "../../assets/images/bela.png";

const Team = () => (
  <TeamContainer>
    <TeamCards>
      <TeamPerson>
        <img src={Edu} alt="Eduardo" />
        <h2>Jorge</h2>
        <p>Cozinheiro</p>
      </TeamPerson>
      <TeamPerson>
        <img src={Bela} alt="Bela" />
        <h2>Bela</h2>
        <p>Cozinheira</p>
      </TeamPerson>
    </TeamCards>
  </TeamContainer>
);

export default Team;

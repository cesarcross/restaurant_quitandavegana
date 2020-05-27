import React from "react";
import { Element } from "react-scroll";

import { AboutContainer, AboutText, AboutImg } from "./About.style";

import aboutPic from "../../assets/images/about.png";

const About = () => (
  <Element id="sobre" name="sobre">
    <AboutContainer>
      <AboutText>
        <h3>Nossa História</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          debitis assumenda tempora dolorem ipsum est dolores eos consequatur
          repellendus. Ipsam ipsa laudantium culpa repudiandae debitis quo eos
          tempore cum! Culpa molestias magnam voluptatem placeat quo minus a
          accusamus soluta dolores quaerat eaque velit quam temporibus aliquid
          explicabo laboriosam at error ducimus dolorum tempora odit commodi,
          distinctio fugit fuga. Incidunt velit officia pariatur quo suscipit
          obcaecati distinctio illum sapiente voluptatem totam commodi, ipsum
          explicabo aut quaerat, qui consequuntur dolore hic ipsa officiis.
          Repellat impedit consequatur commodi minima in incidunt et cumque esse
          minus sequi veritatis, ex perferendis porro culpa autem veniam.
        </p>
      </AboutText>
      <AboutImg>
        <img src={aboutPic} alt="Restaurante" />
      </AboutImg>
    </AboutContainer>
  </Element>
);

export default About;

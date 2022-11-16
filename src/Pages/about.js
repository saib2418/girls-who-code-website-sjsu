/** @jsxImportSource @emotion/react */
import styled, { css } from "styled-components";
import React from "react";
import "./pages.css";
import { hover } from "@testing-library/user-event/dist/hover";

const Title = styled.h1`
  color: white;
  padding: 30px;
  margin: 30px;
`;

const AboutContent = styled.p`
  font-size: 18px;
`;
function About() {
  return (
    <div className="about-content">
      <Title id="about">
        {" "}
        about girls who code
        <AboutContent>
          <br></br>
          GWC @ SJSU is dedicated to fostering a supportive network for women in
          tech.
          <br></br> We are coders and engineers - of all genders - who support
          the female presence <br></br>
          in computing. We run events, from tech talks to socials, and provide
          opportunities <br></br>
          for female engineers to connect and succeed.
        </AboutContent>
      </Title>
    </div>
  );
}

export default About;

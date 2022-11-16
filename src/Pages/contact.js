import styled, { css } from "styled-components";
import React from "react";
import "./pages.css";

function Contact() {
  const Title = styled.h1`
    color: white;
    padding: 20px;
    margin: 20px;
  `;
  return (
    <div className="contact-content">
      <Title id="contact">contact</Title>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"></link>

      <div class="main">
        <ul>
          <a href="https://www.instagram.com/gwcsjsu" target="_blank">
            <li>
              <i class="fab fa-instagram"></i>
            </li>
          </a>

          <a href="https://discord.gg/6zCCwucmZd" target="_blank">
            <li>
              <i class="fab fa-discord"></i>
            </li>
          </a>

          <a
            href="https://open.spotify.com/show/4m0PYMgE0wYpZGb8TLRieZ?si=5127912e1f9043af"
            target="_blank">
            <li>
              <i class="fab fa-spotify"></i>
            </li>
          </a>

          <a href="https://www.linkedin.com/in/gwc-sjsu/" target="_blank">
            <li>
              <i class="fab fa-linkedin"></i>
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}
export default Contact;

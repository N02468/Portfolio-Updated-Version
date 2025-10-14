// components/Footer.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
const lightSpeedIn = keyframes`
  from {
    transform: translate3d(100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }

  60% {
    transform: skewX(20deg);
    opacity: 1;
  }

  80% {
    transform: skewX(-5deg);
    opacity: 1;
  }

  to {
    transform: none;
    opacity: 1;
  }
`;
const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: #fff;
  padding: 40px 50px;
  margin-top: 80px;
  bottom: 0; 
  height: 50vh; 
  width: 100%;
  text-align: center;

  animation: ${lightSpeedIn} 1s ease-out both;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    height: auto;
  }
`;

const CopyrightText = styled.div`
  font-size: 14px;
`;

const AboutUs = styled.div`
  font-size: 14px;
  text-align: right;

  @media (max-width: 768px) {
    text-align: center;
    margin-top: 20px;
  }
`;
const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
  
  i {
    font-size: 24px;
    color: white;
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
      color: #1da1f2; /* Change to a specific color on hover */
      transform: scale(1.2); /* Slight zoom on hover */
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Footer = () => {
  return (
    <FooterContainer id="footer">
      <CopyrightText>&copy; 2025 My Portfolio</CopyrightText>
      <AboutUs>
        <p><strong style={{"color":"white","font-family":"Comic-Neue,cursive","font-weight":"bolder"}}>About Us</strong></p>
        <p style={{"color":"white","font-family":"Comic-Neue,cursive","font-weight":"bolder"}}>We create amazing web experiences for our users.</p>
        <hr />
        <SocialIcons>
          <i className="ri-facebook-circle-fill"></i>
          <i className="ri-instagram-fill"></i>
          <i className="ri-linkedin-box-fill"></i>
          <i className="ri-twitter-fill"></i>
        </SocialIcons>
      </AboutUs>
    </FooterContainer>
  );
};

export default Footer;






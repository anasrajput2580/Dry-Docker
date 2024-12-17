import React from "react";
import styled from "styled-components";
// Styled components for the design
const CTASection = styled.div`
  background-color: #274340; /* Dark green background */
  color: #ffffff; /* White text color */
  padding: 40px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack items vertically on smaller screens */
    text-align: center;
  }
`;

const CTAText = styled.div`
  max-width: 600px; /* Limit text width */
  font-family: "Barlow Condensed", sans-serif;

  h2 {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    line-height: 1.5;
    margin: 0;
  }
`;

const CTAButton = styled.a`
  background-color: #ffffff; /* White button background */
  color: #274340; /* Dark green text */
  padding: 10px 20px;
  border-radius: 8px;
  font-family: "Barlow Condensed", sans-serif;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f8cf40; /* Hover color (gold) */
    color: #274340;
  }

  @media (max-width: 768px) {
    margin-top: 20px; /* Add spacing on smaller screens */
  }
`;

const CTAAbout = () => {
  return (
    <CTASection>
      <CTAText>
        <h2>Craving something delicious?</h2>
        <p>
        Dry Dock Bistro is here to bring fresh, flavorful dishes made with passion. 
        Let us make your next meal or event special!
        </p>
      </CTAText>
      <CTAButton href="/contact-us">Contact Us Today</CTAButton>
    </CTASection>
  );
};

export default CTAAbout;

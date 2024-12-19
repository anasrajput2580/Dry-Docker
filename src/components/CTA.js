import React from "react";
import "./CTA.css";
import styled from "styled-components";

// Styled components for the design
const CTASection = styled.div`
  background-color: #274340; /* Dark green background */
  color: #ffffff; /* White text color */
   padding: 10px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -30px;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack items vertically on smaller screens */
    text-align: center;
    padding: 20px 10px; /* Adjust padding for smaller screens */
  }

  @media (max-width: 480px) {
    padding: 15px 5px; /* More compact on smaller devices */
  }
`;

const CTAText = styled.div`
  max-width: 600px; /* Limit text width */
  font-family: "Inria Serif", serif;

  h2 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    margin-left: 280px;

    @media (max-width: 768px) {
      font-size: 12px; /* Adjusted for tablets */
      margin-left: 0; /* Center align text */
    }

    @media (max-width: 480px) {
      font-size: 13px; /* Smaller font for mobile */
    }
  }

  p {
    font-size: 12px;
    line-height: 1.5;
    margin: 0;
    margin-left: 280px;

    @media (max-width: 768px) {
      font-size: 9px; /* Slightly smaller on tablets */
      margin-left: 0; /* Center align text */
    }

    @media (max-width: 480px) {
      font-size: 8.5px; /* More compact on smaller devices */
    }
  }
`;

const CTAButton = styled.a`
  background-color: #ffffff; /* White button background */
  color: #274340; /* Dark green text */
  padding: 10px 20px;
  border-radius: 8px;
  font-family: "Inria Serif", serif;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s;
  margin-right: 360px;

  &:hover {
    background-color: #f8cf40; /* Hover color (gold) */
    color: #274340;
  }

  @media (max-width: 768px) {
    margin-top: 20px; /* Add spacing on smaller screens */
    margin-right: 0; /* Center align button */
    padding: 8px 16px; /* Adjust padding for tablets */
  }

  @media (max-width: 480px) {
    font-size: 9px; /* Slightly smaller font */
    padding: 6px 12px; /* Compact button size for mobile */
  }
`;

const CTA = () => {
  return (
    <CTASection>
      <CTAText>
        <h2>Bring the Bistro to Your Next Event</h2>
        <p>
          From intimate gatherings to corporate events, our catering menu is made to
          delight with fresh flavors and customizable options.
        </p>
      </CTAText>
      <CTAButton href="/catering">View Our Catering</CTAButton>
    </CTASection>
  );
};

export default CTA;

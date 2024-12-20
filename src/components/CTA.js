import React from "react"; 
import "./CTA.css";
import styled from "styled-components";
const CTASection = styled.div`
  background-color: #274340; /* Dark green background */
  color: #ffffff; /* White text color */
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px; /* Add gap between content and button */
  margin-top: -30px;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack items vertically on smaller screens */
    text-align: center;
    gap: 15px; /* Increase spacing between text and button */
    padding: 15px 10px; /* Adjust padding for smaller screens */
  }

  @media (max-width: 480px) {
    padding: 15px 5px; /* Compact padding for smaller devices */
    gap: 10px; /* Ensure consistent spacing */
  }

  @media (min-width: 1200px) {
    /* Increased padding for larger screens */
    gap: -20px; /* Increased gap for better spacing */
    padding-left: 220px;
    padding-right:350px;
    
  }
`;

const CTAText = styled.div`
  max-width: 800px; /* Increased max-width for larger screens */
  font-family: "Inria Serif", serif;

  h2 {
    font-size: 24px; /* Larger font for headings */
    font-weight: bold;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 16px; /* Adjusted for tablets */
      margin-left: 0; /* Center align text */
    }

    @media (max-width: 480px) {
      font-size: 14px; /* Smaller font for mobile */
    }

    @media (min-width: 1200px) {
      font-size: 28px; /* Even larger font for large screens */
    }
  }

  p {
    font-size: 14px;
    line-height: 1.5;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 12px; /* Slightly smaller on tablets */
    }

    @media (max-width: 480px) {
      font-size: 11px; /* Compact for smaller devices */
    }

    @media (min-width: 1200px) {
      font-size: 16px; /* Larger font for larger screens */
    }
  }
`;

const CTAButton = styled.a`
  background-color: #ffffff; /* White button background */
  color: #274340; /* Dark green text */
  padding: 10px 20px; /* Adjusted padding for larger screens */
  border-radius: 8px;
  font-family: "Inria Serif", serif;
  font-size: 13px; /* Slightly larger font */
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s;
  align-self: center; /* Ensure proper alignment */

  &:hover {
    background-color: #f8cf40; /* Hover color (gold) */
    color: #274340;
  }

  @media (max-width: 768px) {
    margin-top: 10px; /* Reduced margin for smaller screens */
    padding: 8px 12px; /* Adjust padding for tablets */
  }

  @media (max-width: 480px) {
    font-size: 12px; /* Slightly smaller font */
    padding: 6px 10px; /* Compact button size for mobile */
  }

  @media (min-width: 1200px) {
    font-size: 18px; /* Larger font size for buttons */
    padding: 12px 24px; /* More spacious button for larger screens */
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

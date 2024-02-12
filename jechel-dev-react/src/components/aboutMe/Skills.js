import React, { useEffect } from 'react';
import { Stack } from '@mui/material';
// import './Skills.css'; // Import your CSS file

const Skills = () => {
  useEffect(() => {
    const cloudElement = document.querySelector('.cloud');
    if (cloudElement) {
      const cloudWidth = cloudElement.offsetWidth;

      // Generate the CSS animation dynamically
      const moveAnimation = `
        @keyframes move {
          from {
            left: -${cloudWidth}px; /* Start the animation from the left side of the cloud element */
          }
          to {
            left: 100vw; /* Move the element to the right side of the viewport */
          }
        }
      `;

      // Create a style element and inject the animation style dynamically into the document's head
      const styleElement = document.createElement('style');
      styleElement.textContent = moveAnimation;
      document.head.appendChild(styleElement);
    }
  }, []); // This effect runs once after the component mounts

  return (
    <Stack>
      <div className='cloud-container'>
        <div className='cloud'> Swift SwiftUI UIKit CocoaPods fastlane Unit/UI/Snapshot Testing XCTest Firebase TestFlight Git CI/CD </div>
      </div>
    </Stack>
  );
};

export default Skills;

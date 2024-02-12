import React, { useEffect, useRef } from 'react';
import { Stack } from '@mui/material';
import appStyle from 'AppStyle';

const Skills = () => {
  const cloudRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (cloudRef.current) {
        const width = cloudRef.current.offsetWidth;
        
        const moveAnimation = `
          @keyframes move {
            from {
              left: -${width}px;
            }
            to {
              left: 100vw;
            }
          }
        `;

        const styleElement = document.createElement('style');
        styleElement.textContent = moveAnimation;
        document.head.appendChild(styleElement);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Stack>
      <div style={appStyle.skillContainer}>
        <div ref={cloudRef} style={appStyle.skill}> Swift SwiftUI UIKit CocoaPods fastlane Unit/UI/Snapshot Testing XCTest Firebase TestFlight Git CI/CD </div>
      </div>
    </Stack>
  );
};

export default Skills;

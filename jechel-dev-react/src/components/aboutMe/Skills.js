import React, { useEffect, useRef, useState } from 'react';
import { Stack } from '@mui/material';

const Skills = () => {
  const cloudRef = useRef(null);
  // const [leftPosition, setLeftPosition] = useState('-150vw'); // Default left position

  useEffect(() => {
    const handleResize = () => {
      if (cloudRef.current) {
        const width = cloudRef.current.offsetWidth;
        const newPosition = `-${width}px`; // Calculate the new left position based on the width
        
        // setLeftPosition(newPosition);
        
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
      <div className='cloud-container'>
        <div ref={cloudRef} className='cloud'> Swift SwiftUI UIKit CocoaPods fastlane Unit/UI/Snapshot Testing XCTest Firebase TestFlight Git CI/CD </div>
      </div>
    </Stack>
  );
};

export default Skills;

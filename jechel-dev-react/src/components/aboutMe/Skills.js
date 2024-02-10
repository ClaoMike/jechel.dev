import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const Skills = () => {
  const skillsIOS = ['Swift', 'SwiftUI', 'UIKit', 'CocoaPods', 'fastlane', 'Unit/UI/Snapshot Testing', 'XCTest', 'Firebase', 'TestFlight', 'Git', 'CI/CD'];
  // const skillsWEB = ['HTML', 'CSS', 'JavaScript', 'React'];
  // const gameDevSkills = ['OOP', 'Java', 'libGDX', 'C#', 'Unity 2D', 'Python', 'Phaser 3'];
  // const wordProcessingSkills = ['LATEX'];
  // const videoEditingSkills = ['Procreate','Final Cut Pro', 'GarageBand'];
  // const languages = ['English', 'Romanian'];
  // const otherSkills = ['JavaFX', 'JUnit'];

  const props = useSpring({
    from: { transform: 'translateX(-100vw)' }, // Move the text by 100% of the viewport width to the left
    to: { transform: 'translateX(100vw)' }, // Move the text by 100% of the viewport width to the right
    loop: { reverse: true }, // Reverse animation when it reaches the end
    config: { duration: 5000 }, // Adjust duration for the speed of movement
  });

  return (
    <div style={{ overflow: 'hidden', position: 'relative', width: '100%', height: '100px' }}>
      <animated.p style={{ ...props, whiteSpace: 'nowrap', position: 'absolute' }}>{skillsIOS[0]}</animated.p>
    </div>
  );
};

export default Skills;

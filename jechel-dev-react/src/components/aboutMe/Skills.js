import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const Skills = () => {
  const skillsIOS = ['Swift', 'SwiftUI', 'UIKit', 'CocoaPods', 'fastlane', 'Unit/UI/Snapshot Testing', 'XCTest', 'Firebase', 'TestFlight', 'Git', 'CI/CD'];
  const skillsWEB = ['HTML', 'CSS', 'JavaScript', 'React'];
  const gameDevSkills = ['OOP', 'Java', 'libGDX', 'C#', 'Unity 2D', 'Python', 'Phaser 3'];
  const wordProcessingSkills = ['LATEX'];
  const videoEditingSkills = ['Procreate','Final Cut Pro', 'GarageBand'];
  const languages = ['English', 'Romanian'];
  const otherSkills = ['JavaFX', 'JUnit'];

  const [initialPosition, setInitialPosition] = useState(-100);

  useEffect(() => {
    const textLength = skillsIOS.length;
    setInitialPosition(-textLength * 40); // Adjust the multiplier as needed
  }, [skillsIOS]);

  function LetterAnimation() {
    const props = useSpring({
      from: { transform: `translateX(${initialPosition}px)` },
      to: { transform: 'translateX(1200%)' },
      config: { duration: 10000 },
    });

    return (
      <div style={{ overflow: 'hidden', position: 'relative', width: '100%', height: '100px', whiteSpace: 'nowrap' }}>
        <animated.div style={props}>
          {skillsIOS}
        </animated.div>
      </div>
    );
  }

  return (
    <>
      <LetterAnimation />
    </>
  );
};

export default Skills;

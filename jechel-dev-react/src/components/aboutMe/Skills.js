import React from 'react';
import { useSpring, animated } from 'react-spring';

// const skillsWEB = ['HTML', 'CSS', 'JavaScript', 'React'];
  // const gameDevSkills = ['OOP', 'Java', 'libGDX', 'C#', 'Unity 2D', 'Python', 'Phaser 3'];
  // const wordProcessingSkills = ['LATEX'];
  // const videoEditingSkills = ['Procreate','Final Cut Pro', 'GarageBand'];
  // const languages = ['English', 'Romanian'];
  // const otherSkills = ['JavaFX', 'JUnit'];

const SkillItem = ({ skill }) => {
  const props = useSpring({
    from: { transform: 'translateX(-110vw)' },
    to: { transform: 'translateX(110vw)' },
    loop: { reverse: true },
    config: { duration: 8000 },
  });

  return (
    <animated.p style={{ ...props, margin: '0 10px', whiteSpace: 'nowrap' }}>
      {skill}
    </animated.p>
  );
};

const Skills = () => {
  const skillsIOS = [
    'Swift', 'SwiftUI', 'UIKit', 'CocoaPods', 'fastlane', 
    'Unit/UI/Snapshot Testing', 'XCTest', 'Firebase', 
    'TestFlight', 'Git', 'CI/CD'
  ];

  return (
    <div style={{ overflow: 'hidden', position: 'relative', width: '100%', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {skillsIOS.map((skill, index) => (
        <SkillItem key={index} skill={skill} />
      ))}
    </div>
  );
};

export default Skills;

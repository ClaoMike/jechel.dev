import React from 'react';
import { useSpring, animated } from 'react-spring';

import { Stack } from '@mui/material';

const AnimatedSkill = ({ skill }) => {
  const translation = 115;
  const speed = 8000;

  const props = useSpring({
    from: { transform: `translateX(-${translation}vw)` },
    to: { transform: `translateX(${translation}vw)` },
    loop: { reverse: true },
    config: { duration: speed },
  });

  return (
    <animated.p style={{ ...props, margin: '0 10px', whiteSpace: 'nowrap' }}>
      {skill}
    </animated.p>
  );
};

const Skill = ({ skillsList}) => {
  return (
    <div style={{ overflow: 'hidden', position: 'relative', width: '100%', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {skillsList.map((skill, index) => (
        <AnimatedSkill key={index} skill={skill} />
      ))}
    </div>
  );
};

const Skills = () => {
  const skill_IOS = [
    'Swift', 'SwiftUI', 'UIKit', 'CocoaPods', 'fastlane', 
    'Unit/UI/Snapshot Testing', 'XCTest', 'Firebase', 
    'TestFlight', 'Git', 'CI/CD'
  ];

  const skill_WEB = ['HTML', 'CSS', 'JavaScript', 'React'];
  const skill_GameDev = ['OOP', 'Java', 'libGDX', 'C#', 'Unity 2D', 'Python', 'Phaser 3'];
  const wordProcessingSkills = ['LATEX'];
  const videoEditingSkills = ['Procreate','Final Cut Pro', 'GarageBand'];
  const languages = ['English', 'Romanian'];
  const otherSkills = ['JavaFX', 'JUnit'];

  return (
    <Stack>
      {/* TODO: translation and speed must be calculated dynamically! */}
      <Skill skillsList={skill_IOS} /> 
    </Stack>
    
  );
};

export default Skills;

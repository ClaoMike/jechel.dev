import React from 'react';
import { useSpring, animated } from 'react-spring';
import { isMobile } from 'react-device-detect';

import { Stack } from '@mui/material';

// const skillsWEB = ['HTML', 'CSS', 'JavaScript', 'React'];
  // const gameDevSkills = ['OOP', 'Java', 'libGDX', 'C#', 'Unity 2D', 'Python', 'Phaser 3'];
  // const wordProcessingSkills = ['LATEX'];
  // const videoEditingSkills = ['Procreate','Final Cut Pro', 'GarageBand'];
  // const languages = ['English', 'Romanian'];
  // const otherSkills = ['JavaFX', 'JUnit'];

const AnimatedSkill = ({ skill, translation }) => {

  const props = useSpring({
    from: { transform: `translateX(-${isMobile ? translation[1] : translation[0]}vw)` },
    to: { transform: `translateX(${isMobile ? translation[1] : translation[0]}vw)` },
    loop: { reverse: true },
    config: { duration: 8000 },
  });

  return (
    <animated.p style={{ ...props, margin: '0 10px', whiteSpace: 'nowrap' }}>
      {skill}
    </animated.p>
  );
};

const Skill = ({ skillsList, translation }) => {
  return (
    <div style={{ overflow: 'hidden', position: 'relative', width: '100%', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {skillsList.map((skill, index) => (
        <AnimatedSkill key={index} skill={skill} translation={translation} />
      ))}
    </div>
  );
};

const Skills = () => {
  const skillsIOS = [
    'Swift', 'SwiftUI', 'UIKit', 'CocoaPods', 'fastlane', 
    'Unit/UI/Snapshot Testing', 'XCTest', 'Firebase', 
    'TestFlight', 'Git', 'CI/CD'
  ];

  return (
    <Stack>
      <Skill skillsList={skillsIOS} translation={[115, 200]}/>
    </Stack>
    
  );
};

export default Skills;

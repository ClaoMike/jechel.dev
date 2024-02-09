import { useSpring, animated } from 'react-spring';

const Skills = () => {

  function stringToArray(str) {
    return str.split('');
  }

  function LetterAnimation({ letters }) {
    const props = useSpring({
      from: { left: '-100%', width: `${200 * letters.length}%`, zIndex: 1 }, // Adjusted width
      to: { left: '100%' },
      config: { duration: 10000 },
    });
  
    return (
      <div style={{ position: 'relative', width: '100%', height: '100px', overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <animated.div style={{ ...props, position: 'absolute', top: 0, zIndex: 2 }}>
          {letters.map((letter, index) => (
            <span key={index}>{letter}</span>
          ))}
        </animated.div>
      </div>
    );
  }

  const mySkills = "Swift | SwiftUI | UIKit | CocoaPods | fastlane | Unit/UI/Snapshot Testing | XCTest | Firebase | TestFlight | Git | CI/CD | OOP | Java | libGDX | JavaFX | JUnit | C# | Unity 2D | Python | Phaser 3 | LATEX | Procreate | Final Cut Pro | GarageBand | Frontend | Backend | Full-stack | IOS Development | Game Development | Web Development | Video Editing | English, Romanian - All professional proficiency or above";
  const skillsArray = stringToArray(mySkills);
  return (
    <>
    <LetterAnimation letters={ skillsArray } />
    </>
  );
};

export default Skills;
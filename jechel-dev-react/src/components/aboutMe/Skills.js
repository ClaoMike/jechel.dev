import { useSpring, animated } from 'react-spring';

const Skills = () => {

  function LetterAnimation({ letter }) {
    const props = useSpring({
      from: { left: '-100%', position: 'absolute' },
      to: { left: '100%' },
      config: { duration: 3000 },
    });
  
    return (
      <div style={{ overflow: 'hidden', position: 'relative', width: '100%', height: '100px' }}>
        <animated.div style={props}>
          {letter}
        </animated.div>
      </div>
    );
  }

  return (
    <>
    <LetterAnimation letter="A" />
        <p>
            Swift | SwiftUI | UIKit | CocoaPods | fastlane | Unit/UI/Snapshot Testing | XCTest | Firebase | TestFlight | Git | CI/CD | OOP | Java | libGDX | JavaFX | JUnit | C# | Unity 2D | Python | Phaser 3 | LATEX | Procreate | Final Cut Pro | GarageBand | Frontend | Backend | Full-stack | IOS Development | Game Development | Web Development | Video Editing | English, Romanian - All professional proficiency or above
        </p>
    </>
  );
};

export default Skills;
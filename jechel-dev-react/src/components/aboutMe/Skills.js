import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const Skills = () => {
  const mySkills = "Swift | SwiftUI | UIKit Swift | SwiftUI | UIKitSwift | SwiftUI | UIKitSwift | SwiftUI | UIKit";
  const [initialPosition, setInitialPosition] = useState(-100);

  useEffect(() => {
    const textLength = mySkills.length;
    setInitialPosition(-textLength * 40); // Adjust the multiplier as needed
  }, [mySkills]);

  function LetterAnimation() {
    const props = useSpring({
      from: { transform: `translateX(${initialPosition}px)` },
      to: { transform: 'translateX(1200%)' },
      config: { duration: 10000 },
    });

    return (
      <div style={{ overflow: 'hidden', position: 'relative', width: '100%', height: '100px', whiteSpace: 'nowrap' }}>
        <animated.div style={props}>
          {mySkills}
        </animated.div>
      </div>
    );
  }

  return (
    <>
      <LetterAnimation />
      <p>
        Swift | SwiftUI | UIKit | CocoaPods | fastlane | Unit/UI/Snapshot Testing | XCTest | Firebase | TestFlight | Git | CI/CD | OOP | Java | libGDX | JavaFX | JUnit | C# | Unity 2D | Python | Phaser 3 | LATEX | Procreate | Final Cut Pro | GarageBand | Frontend | Backend | Full-stack | IOS Development | Game Development | Web Development | Video Editing | English, Romanian - All professional proficiency or above
      </p>
    </>
  );
};

export default Skills;

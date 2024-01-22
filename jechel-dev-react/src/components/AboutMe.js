import ExternalLink from "./ExternalLink"

const AboutMe = () => {
  return (
    <>
        <h2>About Me</h2>

        <p>Check out my &nbsp;
            <ExternalLink link='resources/Claudiu_Mihai_Jechel_Resume.pdf' text='Resume' /> | &nbsp;
            <ExternalLink link='https://github.com/ClaoMike' text='GitHub' /> | &nbsp;
            <ExternalLink link='https://www.linkedin.com/in/claudiumihaijechel/' text='LinkedIn' />
        </p>

        <h3>Skills</h3>
        <p>
            Swift | SwiftUI | UIKit | CocoaPods | fastlane | Unit/UI/Snapshot Testing | XCTest | Firebase | TestFlight | Git | CI/CD | OOP | Java | libGDX | JavaFX | JUnit | C# | Unity 2D | Python | Phaser 3 | LATEX | Procreate | Final Cut Pro | GarageBand | Frontend | Backend | Full-stack | IOS Development | Game Development | Web Development | Video Editing | English, Romanian - All professional proficiency or above
        </p>

        <h3>Work Experience</h3>
        <h2>
            IOS Software Engineer, Intern at &nbsp;
            <ExternalLink link='https://www.apadmi.com/' text='Apadmi' />
        </h2>

        <small>Manchester, UK 09/2021 - 07/2022</small>
        
        <ul>
            <li>
                Maintained, improved, and developed iOS applications, such as &nbsp;
                <ExternalLink link='https://apps.apple.com/gb/app/charles-stanley-direct/id1297304657' text='Charles Stanley Direct' />, &nbsp;
                <ExternalLink link='https://apps.apple.com/gb/app/hey-pharmacist/id1078683248' text='Hey Pharmacist' />, &nbsp;
                <ExternalLink link='https://www.apadmi.com/work/donorpath-app-nhsbt/' text='NHS DonorPath' />, &nbsp;
                <ExternalLink link='https://apps.apple.com/gb/app/dunnes-stores/id1539398657' text='Dunnes Stores' />, &nbsp;
                <ExternalLink link='https://apps.apple.com/us/app/street-news-news-that-matters/id1564937523' text='Street News: News that matters' />, &nbsp;
                and <ExternalLink link='https://apps.apple.com/us/app/wattbike-hub/id961711342?ls=1' text='Wattbike Hub' />, &nbsp;
                while driving over £11.8 million in revenue.
            </li>
            <li>Developed the &nbsp;
                <ExternalLink link='https://apps.apple.com/gb/app/ebury/id1616832949' text='Ebury IOS application' />, &nbsp; 
                helping the client expand its business to the mobile market, using Swift, UIKit, CocoaPods, XCTest, and FBSnapshotTestCase.
            </li>
            <li>Automated beta build distribution, app store deployment, and code signing with fastlane, Bitrise and TestFlight.</li>
            <li>Determined clients' preferences among three versions of the app's user interface by utilizing Firebase and A/B testing.</li>
            <li>Integrated new features, performed bug fixes, conducted code reviews, beta testing, unit/UI/snapshot testing, and held daily stand- ups with my colleagues and weekly meetings with clients using the Scrum agile framework within a continuous integration and deployment pipeline.</li>
        </ul>

        <h3>Education</h3>
        <p>
            Honours Bachelor of Science in Computer Science with Industrial Experience - &nbsp;
            <ExternalLink link='https://www.manchester.ac.uk/' text='University of Manchester' /> &nbsp;
            - Manchester, UK - 09/2019 - 07/2023
        </p>

        <h3>Academic papers</h3>
        <ul>
            <li>
                <ExternalLink link='resources/Thesis.pdf' text='How to build a video game using Procedural Content Generation?' />
            </li>
        </ul>

        <h3>Projects</h3>
        <h4>
            Spatium Explorationis
            (<ExternalLink link='https://github.com/ClaoMike/AE' text='GitHub' />)
        </h4>
        <p>
            Third-Year Project - &nbsp;
            <ExternalLink link='https://www.manchester.ac.uk/' text='University of Manchester' />
        </p>
        <ul>
            <li>Developed a top-down 2D video game using Java, libGDX, Procreate and GarageBand.</li>
            <li>The objective of the game is to play as a space-faring dog who explores Pluto and locates a broken satellite at the end of a maze. The scope of the game is to play as an explorer space dog to find the broken satellite on Pluto, located at the maze exit.</li>
            <li>Used a traditional Procedural Content Generation (PCG) technique to generate each level.</li>
        </ul>

        <h3>Qualifications</h3>
        <ul>
            <li>
                <ExternalLink link='https://www.romaniaeducation.info/Tests/The-Baccalaureate-Exam.html' text='Romanian Baccalaureate Exam' />
                : 9.78/10 - 07/2019
            </li>
            <li>
                <ExternalLink link='https://www.cambridgeenglish.org/exams-and-tests/advanced/' text='Cambridge English Level 2 Certificate in ESOL International (Advanced)' />
                : Level C1 - 07/2018
            </li>
        </ul>
</>
  )
}

export default AboutMe
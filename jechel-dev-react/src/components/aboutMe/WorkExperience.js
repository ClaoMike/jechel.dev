import appStyle from "AppStyle";
import { ExternalLink } from "Components";

const WorkExperience = () => {
  return (
    <div style={appStyle.skillsSection}>
        <h2>Work Experience</h2>
        <h3 style={appStyle.workExperienceSubsection}>
            IOS Software Engineer, Intern at <ExternalLink link='https://www.apadmi.com/' text='Apadmi' />
        </h3>

        <small>Manchester, UK | 09/2021 - 07/2022</small>
        
        <ul>
            <li>
                Maintained, improved, and developed iOS applications, such as &nbsp;
                <ExternalLink link='https://apps.apple.com/gb/app/charles-stanley-direct/id1297304657' text='Charles Stanley Direct' />, &nbsp;
                <ExternalLink link='https://apps.apple.com/gb/app/hey-pharmacist/id1078683248' text='Hey Pharmacist' />, &nbsp;
                <ExternalLink link='https://www.apadmi.com/work/donorpath-app-nhsbt/' text='NHS DonorPath' />, &nbsp;
                <ExternalLink link='https://apps.apple.com/gb/app/dunnes-stores/id1539398657' text='Dunnes Stores' />, &nbsp;
                <ExternalLink link='https://apps.apple.com/us/app/street-news-news-that-matters/id1564937523' text='Street News: News that matters' />, &nbsp;
                and <ExternalLink link='https://apps.apple.com/us/app/wattbike-hub/id961711342?ls=1' text='Wattbike Hub' />,
                while driving over £11.8 million in revenue.
            </li>
            <li>Developed the &nbsp;
                <ExternalLink link='https://apps.apple.com/gb/app/ebury/id1616832949' text='Ebury IOS application' />,
                helping the client expand its business to the mobile market, using Swift, UIKit, CocoaPods, XCTest, and FBSnapshotTestCase.
            </li>
            <li>Automated beta build distribution, app store deployment, and code signing with fastlane, Bitrise and TestFlight.</li>
            <li>Determined clients' preferences among three versions of the app's user interface by utilizing Firebase and A/B testing.</li>
            <li>Integrated new features, performed bug fixes, conducted code reviews, beta testing, unit/UI/snapshot testing, and held daily stand-ups with my colleagues and weekly meetings with clients using the Scrum agile framework within a continuous integration and deployment pipeline.</li>
        </ul>
    </div>
  );
};

export default WorkExperience;
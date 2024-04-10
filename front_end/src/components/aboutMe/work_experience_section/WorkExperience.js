import { ExternalLink, STRINGS } from "Components";
import style from "./WorkExperienceStyle";

const WorkExperience = () => {
  return (
    <div style={style.mainDiv}>
        <h2 className='section_header_text'>{STRINGS.aboutMe.workExperience.title}</h2>
        <h3 style={style.workExperienceSubsection}>
            {STRINGS.aboutMe.workExperience.job1.position} <ExternalLink link='https://www.apadmi.com/' text={STRINGS.aboutMe.workExperience.job1.company} />
        </h3>

        <small>{STRINGS.aboutMe.workExperience.job1.location + STRINGS.EMPTY_SPACE + STRINGS.VERTICAL_SEPARATOR + STRINGS.EMPTY_SPACE + STRINGS.aboutMe.workExperience.job1.date}</small>
        
        <ul>
            <li>
                {STRINGS.aboutMe.workExperience.job1.description.line1} &nbsp;
                <ExternalLink link='https://apps.apple.com/gb/app/charles-stanley-direct/id1297304657' text={STRINGS.aboutMe.workExperience.job1.description.app1} />, &nbsp;
                <ExternalLink link='https://apps.apple.com/gb/app/hey-pharmacist/id1078683248' text={STRINGS.aboutMe.workExperience.job1.description.app2} />, &nbsp;
                <ExternalLink link='https://www.apadmi.com/work/donorpath-app-nhsbt/' text={STRINGS.aboutMe.workExperience.job1.description.app3} />, &nbsp;
                <ExternalLink link='https://apps.apple.com/gb/app/dunnes-stores/id1539398657' text={STRINGS.aboutMe.workExperience.job1.description.app4} />, &nbsp;
                <ExternalLink link='https://apps.apple.com/us/app/street-news-news-that-matters/id1564937523' text={STRINGS.aboutMe.workExperience.job1.description.app5} />, &nbsp;
                {STRINGS.AND_SMALL + STRINGS.EMPTY_SPACE}<ExternalLink link='https://apps.apple.com/us/app/wattbike-hub/id961711342?ls=1' text={STRINGS.aboutMe.workExperience.job1.description.app6} />,
                {STRINGS.aboutMe.workExperience.job1.description.line2}
            </li>
            <li>{STRINGS.aboutMe.workExperience.job1.description.line3 + STRINGS.EMPTY_SPACE}
                <ExternalLink link='https://apps.apple.com/gb/app/ebury/id1616832949' text={STRINGS.aboutMe.workExperience.job1.description.app7} />,
                {STRINGS.aboutMe.workExperience.job1.description.line4}
            </li>
            <li>{STRINGS.aboutMe.workExperience.job1.description.line5}</li>
            <li>{STRINGS.aboutMe.workExperience.job1.description.line6}</li>
            <li>{STRINGS.aboutMe.workExperience.job1.description.line7}</li>
        </ul>
    </div>
  );
};

export default WorkExperience;
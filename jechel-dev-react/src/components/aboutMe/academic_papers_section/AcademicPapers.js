import { ExternalLink, STRINGS } from "Components";
import style from "./AcademicPapersStyle";

const AcademicPapers = () => {
  return (
    <div style={style}>
        <h2>{STRINGS.aboutMe.academicPapers.title}</h2>
        <ul>
            <li>
                <ExternalLink link='resources/Thesis.pdf' text={STRINGS.aboutMe.academicPapers.paper1} />
            </li>
        </ul>
    </div>
  );
};

export default AcademicPapers;
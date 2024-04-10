import { ExternalLink, STRINGS, SectionHeader } from "Components";
import style from "./AcademicPapersStyle";

const AcademicPapers = () => {
  return (
    <div style={style}>
      <SectionHeader text={STRINGS.aboutMe.academicPapers.title} />
        <ul>
            <li>
                <ExternalLink link='resources/Thesis.pdf' text={STRINGS.aboutMe.academicPapers.paper1} />
            </li>
        </ul>
    </div>
  );
};

export default AcademicPapers;
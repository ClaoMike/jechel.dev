import { ExternalLink, STRINGS, SectionHeader } from "Components";
import style from "./AcademicPapersStyle";
import SectionAccordion from "../section_accordion/SectionAccordion";

const AcademicPapers = () => {
  return (
    <SectionAccordion
      header={
        <SectionHeader text={STRINGS.aboutMe.academicPapers.title} />
      }
      content={
        <>
          <h3>{STRINGS.aboutMe.education.ed1.title}</h3>
          <ul>
            <li>
                <ExternalLink link='resources/Thesis.pdf' text={STRINGS.aboutMe.academicPapers.paper1} />
            </li>
        </ul>
        </>
      }
    />
  );
};

export default AcademicPapers;
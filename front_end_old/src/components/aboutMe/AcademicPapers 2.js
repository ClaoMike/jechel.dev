import { ExternalLink, STRINGS, SectionHeader, SectionAccordion } from "Components";

const AcademicPapers = () => {
  return (
    <SectionAccordion
      header={
        <SectionHeader text={STRINGS.aboutMe.academicPapers.title} />
      }
      content={
        <ul>
          <li>
            <ExternalLink link='resources/Thesis.pdf' text={STRINGS.aboutMe.academicPapers.paper1} />
          </li>
        </ul>
      }
    />
  );
};

export default AcademicPapers;
import { Qualifcation, STRINGS, SectionHeader } from "Components";
import style from "./QualificationsStyle";
import SectionAccordion from "components/aboutMe/section_accordion/SectionAccordion";

const Qualifications = () => {
  return (
    <SectionAccordion
    header={
      <SectionHeader text={STRINGS.aboutMe.qualifications.title} />
    }
    content={
      <ul>
        <li>
          <Qualifcation
            link={'https://www.romaniaeducation.info/Tests/The-Baccalaureate-Exam.html'}
            text={STRINGS.aboutMe.qualifications.qualification1.title}
            date={STRINGS.aboutMe.qualifications.qualification1.date}
            grade={STRINGS.aboutMe.qualifications.qualification1.grade}
            />
        </li>
        <li>
          <Qualifcation
            link={'https://www.cambridgeenglish.org/exams-and-tests/advanced/'}
            text={STRINGS.aboutMe.qualifications.qualification2.title}
            date={STRINGS.aboutMe.qualifications.qualification2.date}
            grade={STRINGS.aboutMe.qualifications.qualification2.grade}
          />
        </li>
      </ul>
    }
  />
  );
};

export default Qualifications;
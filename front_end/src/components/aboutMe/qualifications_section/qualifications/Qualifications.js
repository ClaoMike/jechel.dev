import { Qualifcation, STRINGS, SectionHeader } from "Components";
import style from "./QualificationsStyle";

const Qualifications = () => {
  return (
    <div style={style}>
      <SectionHeader text={STRINGS.aboutMe.qualifications.title} />
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
    </div>
  );
};

export default Qualifications;
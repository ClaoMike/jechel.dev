import { AcademicPapers, Qualifications, Projects, Education, WorkExperience, Skills, AboutMeHeader } from "Components";

const AboutMe = () => {
  return (
    <>
        <AboutMeHeader />
        <Skills />
        <WorkExperience />
        <Education />
        <AcademicPapers />
        <Projects />
        <Qualifications />
    </>
  );
};

export default AboutMe;
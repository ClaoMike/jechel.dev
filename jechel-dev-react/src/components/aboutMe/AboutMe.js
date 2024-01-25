import AcademicPapers from "./AcademicPapers"
import Qualifications from "./Qualifications"
import Projects from "./Projects"
import Education from "./Education"
import WorkExperience from "./WorkExperience"
import Skills from "./Skills"
import AboutMeHeader from "./AboutMeHeader"

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
  )
}

export default AboutMe
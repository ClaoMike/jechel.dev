import appStyle from "AppStyle";
import { ExternalLink } from "Components";
import { Stack } from "@mui/material";
import Qualifcation from "./Qualifcation";

const Qualifications = () => {
  return (
    <div style={appStyle.skillsSection}>
      <h2>Qualifications</h2>
      <ul>
        <li>
          <Qualifcation
            link={'https://www.romaniaeducation.info/Tests/The-Baccalaureate-Exam.html'}
            text={'Romanian Baccalaureate Exam'}
            date={'07/2019'}
            grade={'Grade: 9.78/10'}
            />
        </li>
        <li>
          <Qualifcation
            link={'https://www.cambridgeenglish.org/exams-and-tests/advanced/'}
            text={'Cambridge English Level 2 Certificate in ESOL International (Advanced)'}
            date={'07/2018'}
            grade={'Level: C1'}
          />
        </li>
      </ul>
    </div>
  );
};

export default Qualifications;
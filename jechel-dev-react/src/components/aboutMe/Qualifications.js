import appStyle from "AppStyle";
import { ExternalLink } from "Components";
import { Stack } from "@mui/material";

const Qualifications = () => {
  return (
    <div style={appStyle.skillsSection}>
      <h2>Qualifications</h2>
      <ul>
        <li>
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={0.5}
          >
            <ExternalLink link='https://www.romaniaeducation.info/Tests/The-Baccalaureate-Exam.html' text='Romanian Baccalaureate Exam' />
            <small>07/2019</small>
            <ul>
            <li>Grade: 9.78/10</li>
          </ul>
          </Stack>
        </li>
        <li>
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={0.5}
          >
            <ExternalLink link='https://www.cambridgeenglish.org/exams-and-tests/advanced/' text='Cambridge English Level 2 Certificate in ESOL International (Advanced)' />
            <small>07/2018</small>
          </Stack>
          <ul>
            <li>Level: C1</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Qualifications;
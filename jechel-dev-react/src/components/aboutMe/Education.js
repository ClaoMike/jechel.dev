import appStyle from "AppStyle";
import { ExternalLink } from "Components";

import { Stack } from "@mui/material";

const Education = () => {
  return (
    <div style={appStyle.skillsSection}>
        <h2>Education</h2>
        <h3>Honours Bachelor of Science in Computer Science with Industrial Experience</h3>
        <ul>
          <li>
            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={0.5}
            >
              <ExternalLink link='https://www.manchester.ac.uk/' text='University of Manchester' />
              <small>Manchester, UK | 09/2019 - 07/2023</small>
            </Stack>
          </li>
        </ul>
    </div>
  );
};

export default Education;
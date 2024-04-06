import { ExternalLink, STRINGS } from "Components";
import { Stack } from "@mui/material";
import style from "./EducationStyle";

const Education = () => {
  return (
    <div style={style}>
        <h2>{STRINGS.aboutMe.education.title}</h2>
        <h3>{STRINGS.aboutMe.education.ed1.title}</h3>
        <ul>
          <li>
            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={0.5}
            >
              <ExternalLink link='https://www.manchester.ac.uk/' text='University of Manchester' />
              <small>{STRINGS.aboutMe.education.ed1.location + STRINGS.EMPTY_SPACE + STRINGS.VERTICAL_SEPARATOR + STRINGS.EMPTY_SPACE + STRINGS.aboutMe.education.ed1.date}</small>
            </Stack>
          </li>
        </ul>
    </div>
  );
};

export default Education;
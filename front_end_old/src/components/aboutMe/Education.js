import { ExternalLink, STRINGS, SectionHeader, SectionAccordion } from "Components";
import { Stack } from "@mui/material";

const Education = () => {
  return (
    <SectionAccordion
      header={
        <SectionHeader text={STRINGS.aboutMe.education.title} />
      }
      content={
        <>
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
        </>
      }
    />
  );
};

export default Education;
import { Stack } from '@mui/material';
import { ExternalLinkWithIcon, ResumeIcon, GithubIcon, LinkedinIcon, STRINGS } from "Components";
import style from "./AboutMeHeaderStyle";

const AboutMeHeader = () => {
  return (
    <>
      <Stack direction="column" justifyContent="center" alignItems="center" spacing={2} style={style.headerConfig}>
        <img src='resources/me.JPEG' alt='Me' style={style.photo}/>

        <Stack direction="row" justifyContent="center" alignItems="center" spacing={0}>
          <ExternalLinkWithIcon link='resources/Claudiu_Mihai_Jechel_Resume.pdf' text={STRINGS.aboutMe.socialMedia.resume} icon={<ResumeIcon />}/> &nbsp; 
          <ExternalLinkWithIcon link='https://github.com/ClaoMike' text={STRINGS.GITHUB} icon={<GithubIcon />} /> &nbsp; 
          <ExternalLinkWithIcon link='https://www.linkedin.com/in/claudiumihaijechel/' text={STRINGS.aboutMe.socialMedia.linkedIn} icon={<LinkedinIcon />} />
        </Stack>

      </Stack>
    </>
  );
};

export default AboutMeHeader;
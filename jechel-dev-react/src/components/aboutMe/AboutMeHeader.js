import { ExternalLinkWithIcon } from "Components";
import { Stack } from '@mui/material';
import { ResumeIcon, GithubIcon, LinkedinIcon } from "Components";
import appStyle from "AppStyle";

const AboutMeHeader = () => {
  return (
    <>
    <Stack direction="column" justifyContent="center" alignItems="center" spacing={2} style={appStyle.headerConfig}>
      <img src='resources/me.JPEG' alt='Me' style={appStyle.mePhoto}/>

      <Stack direction="row" justifyContent="center" alignItems="center" spacing={0}>
        <ExternalLinkWithIcon link='resources/Claudiu_Mihai_Jechel_Resume.pdf' text='Resume' icon={<ResumeIcon />}/> &nbsp; 
        <ExternalLinkWithIcon link='https://github.com/ClaoMike' text='GitHub' icon={<GithubIcon />} /> &nbsp; 
        <ExternalLinkWithIcon link='https://www.linkedin.com/in/claudiumihaijechel/' text='LinkedIn' icon={<LinkedinIcon />} />
      </Stack>

      </Stack>
    </>
  );
};

export default AboutMeHeader;
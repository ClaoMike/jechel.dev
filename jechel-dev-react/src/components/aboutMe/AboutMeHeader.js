import { ExternalLink } from "Components";
import { Stack } from '@mui/material';
import { ResumeIcon, GithubIcon, LinkedinIcon } from "Components";

const AboutMeHeader = () => {
  return (
    <>
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={0}>
        <ExternalLink link='resources/Claudiu_Mihai_Jechel_Resume.pdf' text='Resume' icon={<ResumeIcon />}/> &nbsp; 
        <ExternalLink link='https://github.com/ClaoMike' text='GitHub' icon={<GithubIcon />} /> &nbsp; 
        <ExternalLink link='https://www.linkedin.com/in/claudiumihaijechel/' text='LinkedIn' icon={<LinkedinIcon />} />
      </Stack>
    </>
  );
};

export default AboutMeHeader;
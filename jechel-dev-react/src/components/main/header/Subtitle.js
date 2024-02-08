import { Container, Box, Stack } from '@mui/material';
import { SubtitleIcon, DLSwitch } from 'Components';
import appStyle from "AppStyle";

const Subtitle = ({theme, setTheme}) => {
  return (
    <Container>
      <Box sx={appStyle.horizontalCenterStyle}>
        <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">            
          <SubtitleIcon/>
          <p>Software Engineer</p>
          <DLSwitch theme={theme} setTheme={setTheme} className="press-pointer"/>
        </Stack>
      </Box>
    </Container>
  );
};

export default Subtitle;
import { Container, Box, Stack } from '@mui/material';

import SubtitleIcon from '../../icons/SubtitleIcon';
import DLSwitch from "./DLSwitch";

import appStyle from '../../../AppStyle';

const Subtitle = () => {
  return (
    <Container>
      <Box sx={appStyle.horizontalCenterStyle}>
        <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">            
          <SubtitleIcon/>
          <p>Software Engineer</p>
          <DLSwitch />
        </Stack>
      </Box>
    </Container>
  );
};

export default Subtitle;
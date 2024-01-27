import { Container, Box } from '@mui/material';

import SubtitleIcon from '../../icons/SubtitleIcon';

import appStyle from '../../../AppStyle';

const Subtitle = () => {
  return (
    <Container>
      <Box sx={appStyle.horizontalCenterStyle}>
        <p><SubtitleIcon/> Software Engineer</p>
      </Box>
    </Container>
  );
};

export default Subtitle;
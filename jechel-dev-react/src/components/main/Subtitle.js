import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import SubtitleIcon from '../icons/SubtitleIcon';

import appStyle from '../../AppStyle';

const Subtitle = () => {
  return (
    <Container>
      <Box sx={appStyle.horizontalCenterStyle}>
        <p><SubtitleIcon/> Software Engineer</p>
      </Box>
    </Container>
  )
}

export default Subtitle
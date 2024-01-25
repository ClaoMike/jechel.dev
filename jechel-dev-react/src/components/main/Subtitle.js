import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import mainStyles from './mainStyles';
import SubtitleIcon from '../icons/SubtitleIcon';

const Subtitle = () => {
  return (
    <Container>
      <Box sx={mainStyles.horizontalCenterStyle}>
        <p><SubtitleIcon/> Software Engineer</p>
      </Box>
    </Container>
  )
}

export default Subtitle
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import mainStyles from './mainStyles';
import { FaTerminal } from 'react-icons/fa';

const Subtitle = () => {
  return (
    <Container>
      <Box sx={mainStyles.horizontalCenterStyle}>
        <p><FaTerminal/> Software Engineer</p>
      </Box>
    </Container>
  )
}

export default Subtitle
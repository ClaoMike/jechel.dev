import { Link } from 'react-router-dom'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import mainStyles from './mainStyles';
import { Stack } from '@mui/material';

const NavigationBar = () => {
  return (
    <Container>
      <Box sx={mainStyles.horizontalCenterStyle}>
        <nav>
          <Stack direction="row" spacing={3}>
            <Link to='/' style={mainStyles.linkStyle}>Latest</Link>
            <Link to='/moto' style={mainStyles.linkStyle}>Moto</Link>
            <Link to='/aboutMe' style={mainStyles.linkStyle}>About Me</Link>
          </Stack>

          {/* <Link to='/mobileApps' style={{ marginRight: '10px' }}>Mobile Apps</Link>
          <Link to='/videoGames' style={{ marginRight: '10px' }}>Video Games</Link>
          <Link to='/movies' style={{ marginRight: '10px' }}>Movies</Link>
          <Link to='/contact' style={{ marginRight: '10px' }}>Contact</Link> */}
        </nav>
      </Box>
    </Container>
    
  )
}

export default NavigationBar
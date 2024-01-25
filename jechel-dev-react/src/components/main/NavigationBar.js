import { Link } from 'react-router-dom'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import horizontalCenterStyle from './mainStyles';

const NavigationBar = () => {
  return (
    <Container>
      <Box sx={horizontalCenterStyle}>
        <nav>
          <Link to='/' style={{ marginRight: '10px' }}>Latest</Link>
          <Link to='/moto' style={{ marginRight: '10px' }}>Moto</Link>
          <Link to='/aboutMe' style={{ marginRight: '10px' }}>About Me</Link>

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
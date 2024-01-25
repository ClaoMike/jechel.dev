import { Link, useLocation } from 'react-router-dom'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import mainStyles from './mainStyles';
import { Stack } from '@mui/material';

const NavigationBar = () => {

  const location = useLocation();

  const navLinkStyle = {
    ...mainStyles.linkStyle,
    position: 'relative',
    textDecoration: 'none',
    color: 'inherit', // Ensure the link text color is inherited from the parent
  };

  const activeLinkStyle = {
    borderBottom: '2px solid #000', // Solid line for the selected link
  };

  return (
    <Container>
      <Box sx={mainStyles.horizontalCenterStyle}>
        <nav>

          <Stack direction="row" spacing={3}>
            <Link to='/' style={{ ...navLinkStyle, ...(location.pathname === '/' && activeLinkStyle) }}>Latest</Link>
            <Link to='/moto' style={{ ...navLinkStyle, ...(location.pathname === '/moto' && activeLinkStyle) }}>Moto</Link>
            <Link to='/aboutMe' style={{ ...navLinkStyle, ...(location.pathname === '/aboutMe' && activeLinkStyle) }}>About Me</Link>
          </Stack>
          {/* Mobile Apps Video Games Movies Contact */}
        </nav>
      </Box>
    </Container>
    
  )
}

export default NavigationBar
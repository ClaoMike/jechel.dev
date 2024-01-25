import { Link, useLocation } from 'react-router-dom'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import mainStyles from './mainStyles';
import { Stack } from '@mui/material';
import FlameIcon from './FlameIcon';
import MotoIcon from './MotoIcon';
import AboutMeIcon from './AboutMeIcon';

const NavigationBar = () => {

  const location = useLocation();

  const navLinkStyle = {
    ...mainStyles.linkStyle,
    position: 'relative',
    textDecoration: 'none', // no border below the links
    // color: 'inherit',
  };

  const activeLinkStyle = {
    borderBottom: '2px solid #000',
  };

  return (
    <Container sx={mainStyles.navigationContainer}>
      <Box sx={mainStyles.horizontalCenterStyle}>
        <nav>

          <Stack direction="row" spacing={3}>
            <Link to='/' style={{ ...navLinkStyle, ...(location.pathname === '/' && activeLinkStyle) }}>Latest <FlameIcon/></Link>
            <Link to='/moto' style={{ ...navLinkStyle, ...(location.pathname === '/moto' && activeLinkStyle) }}>Moto <MotoIcon/></Link>
            <Link to='/aboutMe' style={{ ...navLinkStyle, ...(location.pathname === '/aboutMe' && activeLinkStyle) }}>About Me <AboutMeIcon/></Link>
          </Stack>
          {/* Mobile Apps Video Games Movies Contact */}
        </nav>
      </Box>
    </Container>
    
  )
}

export default NavigationBar
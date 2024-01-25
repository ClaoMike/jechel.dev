import { Link, useLocation } from 'react-router-dom'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import mainStyles from './mainStyles';
import { Stack } from '@mui/material';
import { FaHotjar, FaMotorcycle, FaCodeBranch } from 'react-icons/fa';

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
            <Link to='/' style={{ ...navLinkStyle, ...(location.pathname === '/' && activeLinkStyle) }}>Latest <FaHotjar style={mainStyles.iconStyle}/></Link>
            <Link to='/moto' style={{ ...navLinkStyle, ...(location.pathname === '/moto' && activeLinkStyle) }}>Moto <FaMotorcycle style={mainStyles.iconStyle}/></Link>
            <Link to='/aboutMe' style={{ ...navLinkStyle, ...(location.pathname === '/aboutMe' && activeLinkStyle) }}>About Me <FaCodeBranch style={mainStyles.iconStyle}/></Link>
          </Stack>
          {/* Mobile Apps Video Games Movies Contact */}
        </nav>
      </Box>
    </Container>
    
  )
}

export default NavigationBar
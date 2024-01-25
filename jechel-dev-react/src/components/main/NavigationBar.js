// import { useLo } from 'react-router-dom'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import FlameIcon from '../icons/FlameIcon';
import MotoIcon from '../icons/MotoIcon';
import AboutMeIcon from '../icons/AboutMeIcon';
import NavigationItem from './NavigationItem';

import mainStyles from './mainStyles';

const NavigationBar = () => {
  return (
    <Container sx={mainStyles.navigationContainer}>
      <Box sx={mainStyles.horizontalCenterStyle}>
        <nav>

          <Stack direction="row" spacing={3}>            
            <NavigationItem link={'/'} text={'Latest'} icon={<FlameIcon/>}/>
            <NavigationItem link={'/moto'} text={'Moto'} icon={<MotoIcon/>}/>
            <NavigationItem link={'/aboutMe'} text={'About Me'} icon={<AboutMeIcon/>}/>
          </Stack>
          {/* Mobile Apps Video Games Movies Contact */}
        </nav>
      </Box>
    </Container>
    
  )
}

export default NavigationBar
import { Container, Box } from '@mui/material';

import { Stack } from '@mui/material';

import FlameIcon from '../../icons/FlameIcon';
import MotoIcon from '../../icons/MotoIcon';
import AboutMeIcon from '../../icons/AboutMeIcon';
import NavigationItem from './NavigationItem';

import appStyle from '../../../AppStyle';

const NavigationBar = () => {

  return (
    <Container sx={appStyle.navigationContainer} className={'sticky-component'} maxWidth={false} >
      <Box sx={appStyle.horizontalCenterStyle}>
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
  );
};

export default NavigationBar;
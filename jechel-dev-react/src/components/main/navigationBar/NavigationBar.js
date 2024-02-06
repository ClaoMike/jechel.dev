import { Box } from '@mui/material';

import { Stack } from '@mui/material';

import FlameIcon from '../../icons/FlameIcon';
import MotoIcon from '../../icons/MotoIcon';
import AboutMeIcon from '../../icons/AboutMeIcon';
import NavigationItem from './NavigationItem';

import appStyle from '../../../AppStyle';

const NavigationBar = () => {

  return (
    <Stack direction="column" style={appStyle.navigationStack}>

      <Box sx={appStyle.navigationBox} className='navigation-bar-background'/ >
      
      <nav style={appStyle.nav} className={'navigation-bar-background'}>
        <Stack direction="row" spacing={3} >            
          <NavigationItem link={'/'} text={'Latest'} icon={<FlameIcon/>}/>
          <NavigationItem link={'/moto'} text={'Moto'} icon={<MotoIcon/>}/>
          <NavigationItem link={'/aboutMe'} text={'About Me'} icon={<AboutMeIcon/>}/>
        </Stack>
      </nav>
      
      <Box sx={appStyle.navigationBox} className='navigation-bar-bottom-background'/>
    
    </Stack>
  );
};

export default NavigationBar;
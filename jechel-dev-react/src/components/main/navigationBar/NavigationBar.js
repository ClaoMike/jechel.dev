import { Box, Stack } from '@mui/material';

import NavigationItem from './NavigationItem';
import { FlameIcon, MotoIcon, AboutMeIcon } from 'Components';

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
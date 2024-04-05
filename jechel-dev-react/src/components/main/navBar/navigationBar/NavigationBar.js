import { Box, Stack } from '@mui/material';
import { FlameIcon, MotoIcon, AboutMeIcon, NavigationItem } from 'Components';
import style from './NavigationBarStyle';

const NavigationBar = () => {

  return (
    <Stack direction="column" style={style.itemsStack}>

      <Box sx={style.box} className='navigation-bar-background'/ >
      
      <nav style={style.nav} className={'navigation-bar-background'}>
        <Stack direction="row" spacing={3} >            
          <NavigationItem link={'/'} text={'Latest'} icon={<FlameIcon/>}/>
          <NavigationItem link={'/moto'} text={'Moto'} icon={<MotoIcon/>}/>
          <NavigationItem link={'/aboutMe'} text={'About Me'} icon={<AboutMeIcon/>}/>
        </Stack>
      </nav>
      
      <Box sx={style.box} className='navigation-bar-bottom-background'/>
    
    </Stack>
  );
};

export default NavigationBar;
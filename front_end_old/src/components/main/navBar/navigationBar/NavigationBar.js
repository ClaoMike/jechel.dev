import { Box, Stack } from '@mui/material';
import { FlameIcon, MotoIcon, AboutMeIcon, NavigationItem, STRINGS } from 'Components';
import style from './NavigationBarStyle';

const NavigationBar = () => {

  return (
    <Stack direction="column" style={style.itemsStack}>

      <Box sx={style.box} className='navigation-bar-background'/ >
      
      <nav style={style.nav} className={'navigation-bar-background'}>
        <Stack direction="row" spacing={3} >            
          <NavigationItem link={'/'} text={STRINGS.navigation.item1} icon={<FlameIcon/>}/>
          <NavigationItem link={'/moto'} text={STRINGS.navigation.item2} icon={<MotoIcon/>}/>
          <NavigationItem link={'/aboutMe'} text={STRINGS.navigation.item3} icon={<AboutMeIcon/>}/>
        </Stack>
      </nav>
      
      <Box sx={style.box} className='navigation-bar-bottom-background'/>
    
    </Stack>
  );
};

export default NavigationBar;
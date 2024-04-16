import { Container, Box, Stack } from '@mui/material';
import { SubtitleIcon, DLSwitch, STRINGS } from 'Components';
import style from './SubtitleStyle';

const Subtitle = ({theme, setTheme}) => {
  return (
    <Container>
      <Box sx={style}>
        <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">            
          <SubtitleIcon/>
          <p>{STRINGS.main.subtitle}</p>
          <DLSwitch theme={theme} setTheme={setTheme} className="press-pointer"/>
        </Stack>
      </Box>
    </Container>
  );
};

export default Subtitle;
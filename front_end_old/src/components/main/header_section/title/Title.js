import { Container, Box } from '@mui/material';
import style from './TitleStyle';
import {STRINGS} from 'Components';

const CenteredHeading = () => {
  return (
    <Container>
      <Box sx={style.centerH}>
        <h1 style={style.responsiveFont}>{STRINGS.main.title}</h1>
      </Box>
    </Container>
  );
};

export default CenteredHeading;

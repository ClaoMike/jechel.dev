import { Container, Box } from '@mui/material';
import style from './TitleStyle';

const CenteredHeading = () => {
  return (
    <Container>
      <Box sx={style.centerH}>
        <h1 style={style.responsiveFont}>Claudiu Mihai Jechel</h1>
      </Box>
    </Container>
  );
};

export default CenteredHeading;

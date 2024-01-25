import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import mainStyles from './mainStyles';

const CenteredHeading = () => {

  return (
    <Container>
      <Box sx={mainStyles.horizontalCenterStyle}>
        <h1 style={mainStyles.responsiveTitle}>Claudiu Mihai Jechel</h1>
      </Box>
    </Container>
  );
};

export default CenteredHeading;

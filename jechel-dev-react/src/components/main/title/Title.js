import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import horizontalCenterStyle from '../mainStyles';

const CenteredHeading = () => {
  return (
    <Container>
      <Box sx={horizontalCenterStyle}>
        <h1>Claudiu Mihai Jechel</h1>
      </Box>
    </Container>
  );
};

export default CenteredHeading;

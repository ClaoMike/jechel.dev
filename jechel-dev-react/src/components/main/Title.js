import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const CenteredHeading = () => {
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1>Claudiu Mihai Jechel</h1>
      </Box>
    </Container>
  );
};

export default CenteredHeading;

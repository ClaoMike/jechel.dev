import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const Subtitle = () => {
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
        <p>Software Engineer</p>
      </Box>
    </Container>
  )
}

export default Subtitle
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import appStyle from '../../../AppStyle';

const CenteredHeading = () => {

  return (
    <Container>
      <Box sx={appStyle.horizontalCenterStyle}>
        <h1 style={appStyle.responsiveTitle}>Claudiu Mihai Jechel</h1>
      </Box>
    </Container>
  );
};

export default CenteredHeading;

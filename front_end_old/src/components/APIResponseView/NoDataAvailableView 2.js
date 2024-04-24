import React from 'react';
import Box from '@mui/material/Box';
import { STRINGS } from 'Components';

const NoDataAvailableView = () => {
  return (
    <Box sx={{ width: '100%' }}>
        <p>{STRINGS.API.no_data_message}</p>
    </Box>
  )
}

export default NoDataAvailableView
import React from 'react'
import Box from '@mui/material/Box';
import { STRINGS } from 'Components';

const ErrorDataView = ({ message }) => {
  return (
    <Box sx={{ width: '100%' }}>
        <p>{STRINGS.API.error}{message}</p>
    </Box>
  )
}

export default ErrorDataView
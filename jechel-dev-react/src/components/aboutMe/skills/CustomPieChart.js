import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import { isMobile } from 'react-device-detect';
import { Stack } from '@mui/material';

const CustomPieChart = ({ category, data }) => {
  return (
    // Set better colours so that they are visible on both modes
    // Assign random Colours
    // Maybe animate if it's not too difficult
    <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1} 
    >
        <p> {category} </p>
        <PieChart 
        data={data} 
        lineWidth={15} 
        rounded 
        animate
        animationDuration='1000'
        style={{ 
            width: isMobile ? '120px' : '300px',
            overflow: 'visible',
        }} 
        label={({ dataEntry }) => dataEntry.title}
        labelStyle={(index) => ({
          fill: data[index].color,
          fontSize: '5px',
          fontFamily: 'sans-serif',
        })}
        radius={30}
        labelPosition={data.length == 1 ? 0 : 110}
      />
    </Stack>
    
  )
}

export default CustomPieChart
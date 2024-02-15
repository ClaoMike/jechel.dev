import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import { Stack } from '@mui/material';
import appStyle from 'AppStyle';

const CustomPieChart = ({ category, data }) => {
    const lineWidth = 15;
    const animationDuration = '1000';
    const radius = 20;
    const labelPosition = 120;

    return (
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={1} 
        >
            <p> {category} </p>
            <PieChart 
                data={data} 
                lineWidth={lineWidth} 
                rounded 
                animate
                animationDuration={animationDuration}
                style={appStyle.pieChart} 
                label={({ dataEntry }) => dataEntry.title}
                labelStyle={(index) => ({
                    ...appStyle.pieChartLabel,
                    fill: data[index].color,
                })}
                radius={radius}
                labelPosition={data.length === 1 ? 0 : labelPosition}
            />
        </Stack>
    )
}

export default CustomPieChart
import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import { Stack } from '@mui/material';
import appStyle from 'AppStyle';

const CustomPieChart = ({ category, data }) => {
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
                lineWidth={15} 
                rounded 
                animate
                animationDuration='1000'
                style={appStyle.pieChart} 
                label={({ dataEntry }) => dataEntry.title}
                labelStyle={(index) => ({
                    ...appStyle.pieChartLabel,
                    fill: data[index].color,
                })}
                radius={30}
                labelPosition={data.length === 1 ? 0 : 110}
            />
        </Stack>
    )
}

export default CustomPieChart
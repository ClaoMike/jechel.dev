import React, { useRef, useEffect, useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { Stack } from '@mui/material';
import appStyle from 'AppStyle';

const CustomPieChart = ({ category, data }) => {
    const lineWidth = 15;
    const animationDuration = '1000';
    const radius = 30;
    const labelPosition = 120;
    const parentRef = useRef(null);
    const [parentWidth, setParentWidth] = useState(0);

    useEffect(() => {
        // Access the clientWidth of the parent element using the ref
        if (parentRef.current) {
            setParentWidth(parentRef.current.clientWidth);
        }
    }, []);

    return (
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={1}
        >
            <p>{category}</p>
            <div ref={parentRef} style={{ position: 'relative' }}>
                <PieChart
                    data={data}
                    lineWidth={lineWidth}
                    rounded
                    animate
                    animationDuration={animationDuration}
                    style={appStyle.pieChart}
                    label={({ x, y, dx, dy, dataEntry }) => (
                        <text
                            x={x}
                            y={y}
                            dx={dx}
                            dy={dy}
                            dominantBaseline="central"
                            textAnchor="middle"
                            style={{
                                fontSize: '5px',
                                fill: dataEntry.color,
                            }}
                        >
                            {(/\s/.test(dataEntry.title) && dataEntry.title.length > 8) ? (
                                <>
                                    {dataEntry.title.split(/\s+/).map((substring, index) => (
                                        <tspan key={index} x={x} y={y} dx={dx} dy={dy + index * 5} textAnchor="end">{substring}</tspan>
                                    ))}
                                </>
                            ) : (
                                <tspan
                                    x={x}
                                    y={y}
                                    dx={dx}
                                    dy={dy}
                                    textAnchor={dx < 0 ?  'end' : 'start'}
                                >
                                    {dataEntry.title}
                                </tspan>
                            )}
                        </text>
                    )}
                    radius={radius}
                    labelPosition={data.length === 1 ? 0 : labelPosition}
                />
            </div>
        </Stack>
    );
};

export default CustomPieChart;

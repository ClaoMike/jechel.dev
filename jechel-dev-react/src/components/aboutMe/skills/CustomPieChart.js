import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';

const CustomPieChart = ({ data }) => {
  return (
    <PieChart 
        data={data} 
        lineWidth={15} 
        rounded 
        style={{ 
            width: '300px',
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
  )
}

export default CustomPieChart
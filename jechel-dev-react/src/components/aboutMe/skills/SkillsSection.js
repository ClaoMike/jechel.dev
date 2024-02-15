import * as React from 'react';
import { Stack } from '@mui/material';
import { PieChart } from 'react-minimal-pie-chart';

const SkillsSection = () => {

  const data_IOS = [
    { title: 'Swift', value: 9, color: '#8E7AB5' },
    { title: 'SwiftUI', value: 9, color: '#B784B7' },
    { title: 'UIKit', value: 9, color: '#E493B3' },
    { title: 'CocoaPods', value: 9, color: '#EEA5A6' },

    { title: 'fastlane', value: 9, color: '#EC8F5E' },
    { title: 'Unit/UI/Snapshot Testing', value: 9, color: '#F3B664' },
    { title: 'XCTest', value: 9, color: '#F1EB90' },
    { title: 'Firebase', value: 9, color: '#9FBB73' },

    { title: 'TestFlight', value: 9, color: '#004225' },
    { title: 'git', value: 9, color: '#F5F5DC' },
    { title: 'CI/CD', value: 10, color: '#FFB000' },
  ];

  const data_WEB = [
    { title: 'HTML', value: 25, color: '#8E7AB5' },
    { title: 'CSS', value: 25, color: '#B784B7' },
    { title: 'JavaScript', value: 25, color: '#E493B3' },
    { title: 'React', value: 25, color: '#EEA5A6' },
  ];

  const data_GAMEDEV = [
    { title: 'OOP', value: 14, color: '#8E7AB5' },
    { title: 'Java', value: 14, color: '#B784B7' },
    { title: 'libGDX', value: 14, color: '#E493B3' },
    { title: 'C#', value: 14, color: '#EEA5A6' },

    { title: 'Unity 2D', value: 14, color: '#EC8F5E' },
    { title: 'Python', value: 14, color: '#F3B664' },
    { title: 'Phaser 3', value: 16, color: '#F1EB90' },
  ];

  const data_WORDPROCESSING = [
    { title: 'LATEX', value: 100, color: '#8E7AB5' },
  ];

  const data_VIDEOEDITING = [
    { title: 'Procreate', value: 33, color: '#8E7AB5' },
    { title: 'Final Cut Pro', value: 33, color: '#B784B7' },
    { title: 'GarageBand', value: 34, color: '#E493B3' }
  ];

  const defaultLabelStyle = {
    fontSize: '5px',
    fontFamily: 'sans-serif',
  };

  return (
    <Stack>

      <PieChart 
        data={data_IOS} 
        lineWidth={15} 
        rounded 
        style={{ height: '500px' }} 
        label={({ dataEntry }) => dataEntry.title}
        

        labelStyle={(index) => ({
          fill: data_IOS[index].color,
          fontSize: '5px',
          fontFamily: 'sans-serif',
        })}
        radius={42}
        labelPosition={110}
      />

    <PieChart 
        data={data_WEB} 
        lineWidth={15} 
        rounded 
        style={{ height: '500px' }} 
        label={({ dataEntry }) => dataEntry.title}
        

        labelStyle={(index) => ({
          fill: data_WEB[index].color,
          fontSize: '5px',
          fontFamily: 'sans-serif',
        })}
        radius={42}
        labelPosition={110}
      />

    </Stack>
    
  );
};

export default SkillsSection;

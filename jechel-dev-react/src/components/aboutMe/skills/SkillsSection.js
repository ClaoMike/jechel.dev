import * as React from 'react';
import { Stack } from '@mui/material';
import CustomPieChart from './CustomPieChart';
import skills from './Skills';
import appStyle from 'AppStyle';

const SkillsSection = () => {  
  return (
    <Stack direction="row" spacing={2} justifyContent="space-evenly" alignItems="center" flexWrap="wrap" className='skills_section' >
      <CustomPieChart category={'IOS'} data={skills.data_IOS} />
      <CustomPieChart category={'Web'} data={skills.data_WEB} />
      <CustomPieChart category={'Game Development'} data={skills.data_GAMEDEV} />
      <CustomPieChart category={'Word Processing'} data={skills.data_WORDPROCESSING} />
      <CustomPieChart category={'Video Editing'} data={skills.data_VIDEOEDITING} />
    </Stack>
    
  );
};

export default SkillsSection;

import * as React from 'react';
import { Stack } from '@mui/material';
import CustomPieChart from './CustomPieChart';
import skills from './Skills';
import appStyle from 'AppStyle';

const SkillsSection = () => {  
  return (
    <Stack direction="row" spacing={2} justifyContent="space-evenly" alignItems="center" flexWrap="wrap" className='skills_section' >
      <CustomPieChart data={skills.data_IOS} />
      <CustomPieChart data={skills.data_WEB} />
      <CustomPieChart data={skills.data_GAMEDEV} />
      <CustomPieChart data={skills.data_WORDPROCESSING} />
      <CustomPieChart data={skills.data_VIDEOEDITING} />
    </Stack>
    
  );
};

export default SkillsSection;

import * as React from 'react';
import { Stack } from '@mui/material';
import CustomPieChart from './CustomPieChart';
import skills from './Skills';

const SkillsSection = () => {  
  return (
    <Stack direction="row"  >
      <CustomPieChart data={skills.data_IOS} />
      <CustomPieChart data={skills.data_WEB} />
      <CustomPieChart data={skills.data_GAMEDEV} />
      <CustomPieChart data={skills.data_WORDPROCESSING} />
      <CustomPieChart data={skills.data_VIDEOEDITING} />
    </Stack>
    
  );
};

export default SkillsSection;

import * as React from 'react';
import { Stack } from '@mui/material';
import style from './SkillsSectionStyle';
import { CustomPieChart, Skill, mockData} from "Components";

const SkillsSection = () => {  
  const skills = [];
  mockData.aboutMe.skills.forEach(skill => {
    skills.push(new Skill(skill.ID, skill.title, skill.skills));
  });

  return (
    <Stack 
      direction="row" 
      spacing={2} 
      justifyContent="space-evenly" 
      alignItems="center" 
      flexWrap="wrap"
      style={style}
    >
      {skills.map((skill) => (
        <CustomPieChart key={skill.ID} category={skill.title} data={skill.pieChartData} />
      ))}
    </Stack>
    
  );
};

export default SkillsSection;

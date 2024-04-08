import * as React from 'react';
import { Stack } from '@mui/material';
import style from './SkillsSectionStyle';
import { CustomPieChart} from "Components";
import { useSelector } from 'react-redux';
import { useEffect} from 'react';

import APIService from 'API/APIService';

const SkillsSection = () => {  
  const { loading, error, skills } = useSelector((state) => state.skills);

  useEffect(() => {
    APIService.getInstance().fetchSkills();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!skills || skills.length === 0) return <div>No skills found</div>;

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

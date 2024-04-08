import * as React from 'react';
import { Stack } from '@mui/material';
import style from './SkillsSectionStyle';
import { CustomPieChart} from "Components";

import { useEffect, useState } from 'react';

import APIService from 'API/APIService';

const SkillsSection = () => {  
  const [loading, setLoading] = useState(APIService.getInstance().getLoading());
  const [error, setError] = useState(APIService.getInstance().getError());
  const [skills, setSkills] = useState(APIService.getInstance().getSkills());

  useEffect(() => {
    const fetchData = async () => {
      try {
        await APIService.getInstance().fetchSkills();
        setLoading(APIService.getInstance().getLoading());
        setError(APIService.getInstance().getError());
        setSkills(APIService.getInstance().getSkills());
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
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

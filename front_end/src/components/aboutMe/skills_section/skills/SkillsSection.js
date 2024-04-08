import * as React from 'react';
import { Stack } from '@mui/material';
import style from './SkillsSectionStyle';
import { CustomPieChart, Skill} from "Components";
import URLGenerator from 'API/URLGenerator';


import { useEffect, useState } from 'react';
import axios from 'axios';

const SkillsSection = () => {  
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(URLGenerator.generateDevelopmentEndpointURL_Skills());
        setSkills(response.data.map(skill => new Skill(skill.id, skill.name, skill.skills)));
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
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

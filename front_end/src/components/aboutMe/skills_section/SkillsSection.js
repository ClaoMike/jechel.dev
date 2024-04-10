import * as React from 'react';
import { Stack } from '@mui/material';
import { CustomPieChart, SectionHeader, STRINGS, SectionAccordion } from "Components";
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
    <SectionAccordion 
      header={
        <SectionHeader text={STRINGS.aboutMe.skills.title}/>
      }
      content={
        <Stack 
          direction="row"
          spacing={2}
          justifyContent="space-evenly"
          alignItems="center"
          flexWrap="wrap"
        >
          {skills.map((skill) => (
            <CustomPieChart key={skill.id} category={skill.name} skills={skill.skills} />
          ))}
        </Stack>
      }
    >
    </SectionAccordion>
  );
};

export default SkillsSection;

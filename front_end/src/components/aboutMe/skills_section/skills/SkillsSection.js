import * as React from 'react';
import { Stack } from '@mui/material';
import style from './SkillsSectionStyle';
import { CustomPieChart} from "Components";
import { useSelector } from 'react-redux';
import { useEffect} from 'react';

import APIService from 'API/APIService';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SectionAccordion from 'components/aboutMe/section_accordion/SectionAccordion';

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
        <h2 style={{ textDecoration: 'underline' }} className='episode-text-font episode-text-colour'>Skills</h2>
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
            <CustomPieChart key={skill.ID} category={skill.title} data={skill.pieChartData} />
          ))}
        </Stack>
      }
    >
    </SectionAccordion>
  );
};

export default SkillsSection;

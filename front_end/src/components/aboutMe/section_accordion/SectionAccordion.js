import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import style from './SectionAccordionStyle';
import { Box, Stack } from '@mui/material';

const SectionAccordion = ({header, content}) => {
  return (
    <Accordion defaultExpanded style={style.accordion} >
      
      <Stack direction="column" style={style.accordion_summary_stack}>

        <div className='accordion_summary_div'>
          <AccordionSummary 
            style={style.accordion_summary}
            className='accordion_summary' 
            expandIcon={<ExpandMoreIcon className='episode-text-font episode-text-colour' />}
          >
            {header}
          </AccordionSummary>
        </div>

        <Box sx={style.box} className='navigation-bar-bottom-background'/>

      </Stack>
      
      <AccordionDetails>
        {content}
      </AccordionDetails>

    </Accordion>
  )
}

export default SectionAccordion
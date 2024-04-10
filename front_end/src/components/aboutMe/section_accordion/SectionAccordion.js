import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import style from './SectionAccordionStyle';

const SectionAccordion = ({header, content}) => {
  return (
    <Accordion defaultExpanded style={style}>

      <AccordionSummary 
        className='accordion_summary' 
        expandIcon={<ExpandMoreIcon className='episode-text-font episode-text-colour' />}
        style={{ position: 'sticky', top: 30, zIndex: 999 }}
      >
        {header}
      </AccordionSummary>
        
      <AccordionDetails>
        {content}
      </AccordionDetails>

    </Accordion>
  )
}

export default SectionAccordion
import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import style from './SectionAccordionStyle';

import { isMobile } from 'react-device-detect';

const SectionAccordion = ({header, content}) => {
  return (
    <Accordion defaultExpanded style={style}>

      <div style={{ backgroundColor: 'black', paddingLeft: '20%',paddingRight: '20%', marginLeft: '-20%', marginRight: '-20%', position: 'sticky', top: isMobile ? '3%' : '7%', zIndex: 999}}>
        <AccordionSummary 
          className='accordion_summary' 
          expandIcon={<ExpandMoreIcon className='episode-text-font episode-text-colour' />}
        >
        {header}
      </AccordionSummary>
        
      </div>
      
      <AccordionDetails>
        {content}
      </AccordionDetails>

    </Accordion>
  )
}

export default SectionAccordion
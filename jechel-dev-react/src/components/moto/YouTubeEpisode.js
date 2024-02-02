import YouTubeImage from '../common/YouTubeImage';

import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';

import appStyle from '../../AppStyle';

const YouTubeEpisode = ({ videoInstance }) => {
  return (
    <Accordion>

      <AccordionSummary>
        <YouTubeImage style={appStyle.imageContainerStyleYouTubeEpisode} imageUrl={videoInstance.imageUrl} altDescription={videoInstance.altDescription} />
      </AccordionSummary>
      
      <AccordionDetails>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </AccordionDetails>
    
    </Accordion>
  )
}

export default YouTubeEpisode
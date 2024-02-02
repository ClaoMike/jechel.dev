import YouTubeImage from '../common/YouTubeImage';
import YouTubeTitle from '../common/YouTubeTitle';

import { Stack } from '@mui/material';

import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';

import appStyle from '../../AppStyle';

const YouTubeEpisode = ({ videoInstance }) => {
  return (
    <Accordion>

      <AccordionSummary>
        <Stack spacing={2} direction="row">
          <YouTubeImage style={appStyle.imageContainerStyleYouTubeEpisode} imageUrl={videoInstance.imageUrl} altDescription={videoInstance.altDescription} />
          <YouTubeTitle title={videoInstance.title} />
        </Stack>
        
      </AccordionSummary>
      
      <AccordionDetails>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </AccordionDetails>
    
    </Accordion>
  )
}

export default YouTubeEpisode
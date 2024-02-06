import YouTubeImage from '../common/YouTubeImage';
import YouTubeTitle from '../common/YouTubeTitle';
import YouTubeLocation from '../common/YouTubeLocation';
import YouTubeDescription from '../common/YouTubeDescription';
import YouTubeRedirectLink from '../common/YouTubeRedirectLink';

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
        <Stack spacing={2} direction="column">
          <YouTubeLocation location={videoInstance.location}/>
          <YouTubeDescription description={videoInstance.description}/>
          <YouTubeRedirectLink link={videoInstance.youTubeLink}/>
        </Stack>
      </AccordionDetails>
    
    </Accordion>
  )
}

export default YouTubeEpisode
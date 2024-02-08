import { YouTubeImage, YouTubeTitle, YouTubeLocation, YouTubeRedirectLink, YouTubeDescription } from 'Components';
import { Stack } from '@mui/material';

import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';

import appStyle from '../../AppStyle';

const YouTubeEpisode = ({ videoInstance, index, setIndex }) => {
  return (
    <Accordion
      expanded={index === videoInstance.ID}
      onChange={(event, expanded) => {
        setIndex(expanded ? videoInstance.ID : null);
      }}
    >

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
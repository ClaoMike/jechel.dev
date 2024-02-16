import { Accordion, AccordionItemState, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import { Stack } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import { YouTubeImage, YouTubeTitle, YouTubeLocation, YouTubeRedirectLink, YouTubeDescription, ExternalLinkWithIcon, YouTubeIcon } from 'Components';
import appStyle from "AppStyle";
import videoInstances from 'components/common/YouTubeVideos';

const Moto = () => {  
  return (
    <>
      <div style={appStyle.youTubeEpisodes}>
        <p >Watch me riding my motorcycle through Europe on <ExternalLinkWithIcon link='https://www.youtube.com/channel/UCUQwqa2uppSN0OTQbbHpAtA' text='YouTube' icon={<YouTubeIcon/>}/></p>
      </div>
      
      <Accordion allowZeroExpanded style={appStyle.accordion} preExpanded={[videoInstances[0].ID]}>
        {videoInstances.map((videoInstance) => (
    
          <AccordionItem uuid={videoInstance.ID} key={videoInstance.ID} style={appStyle.accordionItem}>
        
            <AccordionItemHeading>
              <AccordionItemButton>
                
                <Stack spacing={2} direction="row" justifyContent="space-between" alignItems="center">
                  <Stack spacing={2} direction="row" alignItems="center">
                    <YouTubeImage style={appStyle.imageContainerStyleYouTubeEpisode} imageUrl={videoInstance.imageUrl} altDescription={videoInstance.altDescription} />
                    <YouTubeTitle title={videoInstance.title} />
                  </Stack>
                  
                  <AccordionItemState>
                    {({ expanded }) => (expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
                  </AccordionItemState>
                  
                </Stack>
                
              </AccordionItemButton>
            </AccordionItemHeading>
            
            <AccordionItemPanel>
              <Stack spacing={2} direction="column">
                <YouTubeLocation location={videoInstance.location}/>
                <YouTubeDescription description={videoInstance.description}/>
                <YouTubeRedirectLink link={videoInstance.youTubeLink}/>
              </Stack>
            </AccordionItemPanel>
      
          </AccordionItem>
        ))}
      </Accordion>

    </>
  );
};

export default Moto;
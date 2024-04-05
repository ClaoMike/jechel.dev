import {Accordion, AccordionItemState, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel} from 'react-accessible-accordion';
import {Stack} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import {mockData, YouTubeImage, YouTubeTitle, YouTubeLocation, YouTubeRedirectLink, YouTubeDescription, ExternalLinkWithIcon, YouTubeIcon, YouTubeVideo} from 'Components';
import style from './MotoStyle';

const Moto = () => {  

  const videos = [];
  mockData.moto.forEach(videoJSON => {
    videos.push(
      new YouTubeVideo(
        videoJSON.ID, 
        videoJSON.link, 
        videoJSON.title, 
        videoJSON.location, 
        videoJSON.description, 
        videoJSON.imageURL)
    );
  });

  return (
    <>
      <div style={style.title}>
        <p >Watch me riding my motorcycle through Europe on <ExternalLinkWithIcon link='https://www.youtube.com/channel/UCUQwqa2uppSN0OTQbbHpAtA' text='YouTube' icon={<YouTubeIcon/>}/></p>
      </div>
      
      <Accordion allowZeroExpanded style={style.accordion} preExpanded={[videos[0].ID]}>
        {videos.map((videoInstance) => (
    
          <AccordionItem uuid={videoInstance.ID} key={videoInstance.ID} style={style.accordionItem}>
        
            <AccordionItemHeading>
              <AccordionItemButton>
                
                <Stack spacing={2} direction="row" justifyContent="space-between" alignItems="center">
                  <Stack spacing={2} direction="row" alignItems="center">
                    <YouTubeImage style={style.image} imageUrl={videoInstance.imageURL} altDescription={videoInstance.description} />
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
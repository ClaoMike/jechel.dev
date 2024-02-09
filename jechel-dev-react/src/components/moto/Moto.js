import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import { Stack } from '@mui/material';

import { YouTubeImage, YouTubeTitle, YouTubeLocation, YouTubeRedirectLink, YouTubeDescription, ExternalLink, YouTubeVideo, YouTubeIcon } from 'Components';
import appStyle from "AppStyle";

const Moto = () => {

  // WIL BE REPLACED ONCE CONNECTED TO THE API; WORKS FOR NOW
  const episode_7_imageUrl = 'https://img.youtube.com/vi/i6CfPYxzAFM/0.jpg';
  const episode_7_altDescription = 'Description of the image';
  const episode_7_title = 'Episode 7';
  const episode_7_location = 'Germany';
  const episode_7_description = 'Blasting on the highway on my way from Manchester, UK to Bucharest, Romania';
  const episode_7_youTubeLink = 'https://www.youtube.com/watch?v=i6CfPYxzAFM&t=902s';

  const episode_6_imageUrl = 'https://img.youtube.com/vi/B5IOy-K5SxU/0.jpg';
  const episode_6_altDescription = 'Blasting through Louches';
  const episode_6_title = 'Episode 6';
  const episode_6_location = 'Louches, France';
  const episode_6_description = 'Blasting through Louches';
  const episode_6_youTubeLink = 'https://www.youtube.com/watch?v=B5IOy-K5SxU&t=762s';

  const episode_5_imageUrl = 'https://img.youtube.com/vi/tOOPo1DSvDw/0.jpg';
  const episode_5_altDescription = 'Leaving Manchester, on my way to Bucharest';
  const episode_5_title = 'Episode 5';
  const episode_5_location = 'Manchester, UK';
  const episode_5_description = 'Leaving Manchester, on my way to Bucharest';
  const episode_5_youTubeLink = 'https://www.youtube.com/watch?v=tOOPo1DSvDw&t=914s';

  const episode_4_imageUrl = 'https://img.youtube.com/vi/b6zmadoD7JA/0.jpg';
  const episode_4_altDescription = 'Blasting through Glossop';
  const episode_4_title = 'Episode 4';
  const episode_4_location = 'Glossop, UK';
  const episode_4_description = 'Blasting through Glossop';
  const episode_4_youTubeLink = 'https://www.youtube.com/watch?v=b6zmadoD7JA&t=11s';

  const episode_3_imageUrl = 'https://img.youtube.com/vi/ajYExKvoLKE/0.jpg';
  const episode_3_altDescription = 'Blasting through Wigan';
  const episode_3_title = 'Episode 3';
  const episode_3_location = 'Wigan, UK';
  const episode_3_description = 'Blasting through Wigan';
  const episode_3_youTubeLink = 'https://www.youtube.com/watch?v=ajYExKvoLKE&t=10s';

  const episode_2_imageUrl = 'https://img.youtube.com/vi/zdXuifpi4Nw/0.jpg';
  const episode_2_altDescription = 'Blasting through Wigan';
  const episode_2_title = 'Episode 2';
  const episode_2_location = 'Wigan, UK';
  const episode_2_description = 'Blasting through Wigan';
  const episode_2_youTubeLink = 'https://www.youtube.com/watch?v=zdXuifpi4Nw&t=23s';

  const episode_1_imageUrl = 'https://img.youtube.com/vi/A5Eph62uQ38/0.jpg';
  const episode_1_altDescription = 'Blasting through Manchester';
  const episode_1_title = 'Episode 1';
  const episode_1_location = 'Manchester, UK';
  const episode_1_description = 'Blasting through Manchester';
  const episode_1_youTubeLink = 'https://www.youtube.com/watch?v=A5Eph62uQ38&t=5s';

  const episode_trailer_imageUrl = 'https://img.youtube.com/vi/-dgtesVWdpc/0.jpg';
  const episode_trailer_altDescription = 'A short preview of the best moto riding series on YouTube.';
  const episode_trailer_title = 'Trailer';
  const episode_trailer_location = 'Europe';
  const episode_trailer_description = 'A short preview of the best moto riding series on YouTube';
  const episode_trailer_youTubeLink = 'https://www.youtube.com/watch?v=-dgtesVWdpc';

  const videoInstances = [];

  const videoInstance_trailer = new YouTubeVideo(0, episode_trailer_imageUrl, episode_trailer_altDescription, episode_trailer_title, episode_trailer_location, episode_trailer_description, episode_trailer_youTubeLink);
  const videoInstance_1 = new YouTubeVideo(1, episode_1_imageUrl, episode_1_altDescription, episode_1_title, episode_1_location, episode_1_description, episode_1_youTubeLink);
  const videoInstance_2 = new YouTubeVideo(2, episode_2_imageUrl, episode_2_altDescription, episode_2_title, episode_2_location, episode_2_description, episode_2_youTubeLink);
  const videoInstance_3 = new YouTubeVideo(3, episode_3_imageUrl, episode_3_altDescription, episode_3_title, episode_3_location, episode_3_description, episode_3_youTubeLink);
  const videoInstance_4 = new YouTubeVideo(4, episode_4_imageUrl, episode_4_altDescription, episode_4_title, episode_4_location, episode_4_description, episode_4_youTubeLink);
  const videoInstance_5 = new YouTubeVideo(5, episode_5_imageUrl, episode_5_altDescription, episode_5_title, episode_5_location, episode_5_description, episode_5_youTubeLink);
  const videoInstance_6 = new YouTubeVideo(6, episode_6_imageUrl, episode_6_altDescription, episode_6_title, episode_6_location, episode_6_description, episode_6_youTubeLink);
  const videoInstance_7 = new YouTubeVideo(7, episode_7_imageUrl, episode_7_altDescription, episode_7_title, episode_7_location, episode_7_description, episode_7_youTubeLink);

  videoInstances.push(videoInstance_trailer);
  videoInstances.push(videoInstance_7);
  videoInstances.push(videoInstance_6);
  videoInstances.push(videoInstance_5);
  videoInstances.push(videoInstance_4);
  videoInstances.push(videoInstance_3);
  videoInstances.push(videoInstance_2);
  videoInstances.push(videoInstance_1);
  
  return (
    <>
      <div style={appStyle.youTubeEpisodes}>
        <p >Watch me riding my motorcycle through Europe on <ExternalLink link='https://www.youtube.com/channel/UCUQwqa2uppSN0OTQbbHpAtA' text='YouTube' icon={<YouTubeIcon/>}/></p>
      </div>
      
      <Accordion allowZeroExpanded style={appStyle.accordion} preExpanded={[videoInstances[0].ID]}>
        {videoInstances.map((videoInstance) => (
    
          <AccordionItem uuid={videoInstance.ID} key={videoInstance.ID} style={appStyle.accordionItem}>
        
            <AccordionItemHeading>
              <AccordionItemButton>
                <Stack spacing={2} direction="row" alignItems="center">
                  <YouTubeImage style={appStyle.imageContainerStyleYouTubeEpisode} imageUrl={videoInstance.imageUrl} altDescription={videoInstance.altDescription} />
                  <YouTubeTitle title={videoInstance.title} />
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
import { useState } from 'react';
import AccordionGroup from '@mui/joy/AccordionGroup';
import { YouTubeEpisode } from "Components";
import appStyle from "AppStyle";

const YouTubeEpisodes = ({ videoInstances }) => {
  const [index, setIndex] = useState(0);

  return (
    <AccordionGroup sx={ appStyle.youTubeEpisodes } transition="0.2s ease" >
        {videoInstances.map( (videoInstance) => (
            <YouTubeEpisode key={videoInstance.ID} videoInstance={videoInstance} index={index} setIndex={setIndex} />
        ))}
    </AccordionGroup>
  )
}

export default YouTubeEpisodes
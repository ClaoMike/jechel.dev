import YouTubeEpisode from "./YouTubeEpisode";

import AccordionGroup from '@mui/joy/AccordionGroup';

import appStyle from "../../AppStyle";

import { useState } from 'react';

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
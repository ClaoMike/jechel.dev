import YouTubeEpisode from "./YouTubeEpisode";
import AccordionGroup from '@mui/joy/AccordionGroup';
import appStyle from "../../AppStyle";

const YouTubeEpisodes = ({ videoInstances }) => {
  return (
    <AccordionGroup sx={ appStyle.youTubeEpisodes }>
        {videoInstances.map( (videoInstance) => (
            <YouTubeEpisode key={videoInstance.ID} videoInstance={videoInstance}/>
        ))}
    </AccordionGroup>
  )
}

export default YouTubeEpisodes
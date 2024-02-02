import YouTubeEpisode from "./YouTubeEpisode";
import AccordionGroup from '@mui/joy/AccordionGroup';

const YouTubeEpisodes = ({ videoInstances }) => {
  return (
    <AccordionGroup sx={{ maxWidth: 400 }}>
        {videoInstances.map( (videoInstance) => (
            <YouTubeEpisode key={videoInstance.ID} videoInstance={videoInstance}/>
        ))}
    </AccordionGroup>
  )
}

export default YouTubeEpisodes
import { YouTubeDescriptionIcon } from "Components";

const YouTubeDescription = ({description}) => {
  return (
    <p className='episode-text-font episode-text-colour'><YouTubeDescriptionIcon/> {description}</p>
  )
}

export default YouTubeDescription
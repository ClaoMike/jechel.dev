import { PinPointIcon } from "Components";

const YouTubeLocation = ({location}) => {
  return (
    <p className='episode-text-font episode-text-colour'><PinPointIcon/> {location}</p>
  )
}

export default YouTubeLocation
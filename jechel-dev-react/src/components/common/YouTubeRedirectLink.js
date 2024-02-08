import { ExternalLink } from "Components";
import YouTubeIcon from '../icons/YouTubeIcon';

const YouTubeRedirectLink = ({link}) => {
  return (
    <ExternalLink link={link} text={'Watch it on YouTube'} icon={<YouTubeIcon/>} />
  )
}

export default YouTubeRedirectLink
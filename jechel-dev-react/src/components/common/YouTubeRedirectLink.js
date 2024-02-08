import { ExternalLink, YouTubeIcon } from "Components";

const YouTubeRedirectLink = ({link}) => {
  return (
    <ExternalLink link={link} text={'Watch it on YouTube'} icon={<YouTubeIcon/>} />
  )
}

export default YouTubeRedirectLink
import { ExternalLinkWithIcon, YouTubeIcon } from "Components";

const YouTubeRedirectLink = ({link}) => {
  return (
    <ExternalLinkWithIcon link={link} text={'Watch it on YouTube'} icon={<YouTubeIcon/>} />
  )
}

export default YouTubeRedirectLink
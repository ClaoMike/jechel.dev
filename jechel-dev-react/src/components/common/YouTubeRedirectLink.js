import { ExternalLinkWithIcon, YouTubeIcon , STRINGS} from "Components";

const YouTubeRedirectLink = ({link}) => {
  return (
    <ExternalLinkWithIcon link={link} text={STRINGS.latest.video.visitYouTube} icon={<YouTubeIcon/>} />
  )
}

export default YouTubeRedirectLink
import { ExternalLinkWithIcon, YouTubeIcon , STRINGS} from "Components";

const YouTubeRedirectLink = ({link}) => {
  return (
    <ExternalLinkWithIcon link={link} text={STRINGS.REDIRECT_TO_YOUTUBE} icon={<YouTubeIcon/>} />
  )
}

export default YouTubeRedirectLink
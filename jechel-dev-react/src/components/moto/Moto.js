import YouTubeVideo from "../common/YouTubeVideo"
import ExternalLink from "../common/ExternalLink"

const Moto = () => {
  return (
    <>
        <h2>Moto</h2>
        <p>Go check out my <ExternalLink link='https://www.youtube.com/channel/UCUQwqa2uppSN0OTQbbHpAtA' text='YouTube channel' /></p>
        <p>Watch me riding my motorcycle through Europe!</p>

        <h3>Latest video</h3>
        <YouTubeVideo link='https://www.youtube.com/embed/i6CfPYxzAFM?si=QgQfUI5fVQCtJXEK' />
    </>
  )
}

export default Moto
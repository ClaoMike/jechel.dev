import PropTypes from 'prop-types'
import iframeStyle from './YouTubeVideoStyle'

const YouTubeVideo = ({ link }) => {
  return (
    <>
    <iframe 
      style={iframeStyle}
      src={link} 
      title="YouTube video player" 
      allow="web-share" 
      allowFullScreen>

      </iframe>
    </>
  )
}

YouTubeVideo.propTypes = {
  link: PropTypes.string.isRequired
}

export default YouTubeVideo
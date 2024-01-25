import PropTypes from 'prop-types'

const YouTubeVideo = ({ link }) => {
  return (
    <>
    <iframe 
      width="560" 
      height="315" 
      src={link} 
      title="YouTube video player" 
      frameBorder="0" 
      allow="web-share" 
      allowFullScreen></iframe>
    </>
  )
}

YouTubeVideo.propTypes = {
  link: PropTypes.string.isRequired
}

export default YouTubeVideo
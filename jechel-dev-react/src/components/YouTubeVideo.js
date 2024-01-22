import PropTypes from 'prop-types'

const YouTubeVideo = ({ link }) => {
  return (
    <>
    <iframe width="560" height="315" src={link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </>
  )
}

YouTubeVideo.propTypes = {
  title: PropTypes.string.isRequired
}

export default YouTubeVideo
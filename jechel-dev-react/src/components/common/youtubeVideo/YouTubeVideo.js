import PropTypes from 'prop-types'
import iframeStyle from './YouTubeVideoStyle'
import { Stack } from '@mui/material'

const YouTubeVideo = ({ link }) => {
  const imageUrl = 'https://img.youtube.com/vi/i6CfPYxzAFM/0.jpg'
  const altDescription = 'Description of the image'
  const title = 'Episode 7'
  const location = 'Germany'
  const description = 'Blasting on the highway on my way from Manchester, UK to Bucharest, Romania'

  return (
    <>
      <Stack spacing={2} direction="row">
        <img src={imageUrl} alt={altDescription} />
          <Stack spacing={2} direction="column">
            <h3>{title}</h3>
            <p><strong>Location: </strong>{location}</p>
            <p>{description}</p>
          </Stack>
      </Stack>
    </>
  )
}

YouTubeVideo.propTypes = {
  link: PropTypes.string.isRequired
}

export default YouTubeVideo
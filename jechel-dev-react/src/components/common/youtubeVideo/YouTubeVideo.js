import PropTypes from 'prop-types'
import iframeStyle from './YouTubeVideoStyle'
import { Stack } from '@mui/material'
import { isMobile } from 'react-device-detect';
import { Paper } from '@mui/material';
import ExternalLink from '../ExternalLink'

const YouTubeVideo = ({ link }) => {
  const imageUrl = 'https://img.youtube.com/vi/i6CfPYxzAFM/0.jpg'
  const altDescription = 'Description of the image'
  const title = 'Episode 7'
  const location = 'Germany'
  const description = 'Blasting on the highway on my way from Manchester, UK to Bucharest, Romania'
  const youTubeLink = 'https://www.youtube.com/watch?v=i6CfPYxzAFM&t=902s'

  const paperStyle = {
    backgroundColor: 'yellow',
    borderRadius: '10px', // Adjust the value as needed for rounded borders
    width: '80%', // Default width is 80% of the screen width
    maxWidth: '1000px', // Maximum width is 1000px
    margin: '0 auto', // Center the Paper horizontally
    padding: '20px', // Add padding as needed
  };

  const imgContainerStyle = {
    width: '100%', // Full width initially
    maxWidth: isMobile ? '80%' : '40%', // Adjusted width based on device
    margin: isMobile ? '0 auto' : '0', // Center the image horizontally on mobile
    overflow: 'hidden', // Ensures the rounded corners are visible
  };

  const roundedImageStyle = {
    width: '100%', // Full width initially
    height: 'auto', // Maintain the original aspect ratio
    borderRadius: '10px', // Adjust the value as needed for rounded corners
  };

  return (
    <>
      <Paper style={paperStyle}>
        <Stack spacing={2} direction={isMobile ? 'column' : 'row'}>
          <div style={imgContainerStyle}>
            <img src={imageUrl} alt={altDescription} style={roundedImageStyle} />
          </div>
            <Stack spacing={2} direction="column">
              <h3>{title}</h3>
              <p><strong>Location: </strong>{location}</p>
              <p>{description}</p>
              <ExternalLink link={youTubeLink} text={'Watch it on YouTube'} />
            </Stack>
        </Stack>
      </Paper>
    </>
  )
}

YouTubeVideo.propTypes = {
  link: PropTypes.string.isRequired
}

export default YouTubeVideo
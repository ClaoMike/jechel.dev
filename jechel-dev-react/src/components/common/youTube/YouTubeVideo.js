import PropTypes from 'prop-types'
import { Stack, Paper } from '@mui/material'
import { isMobile } from 'react-device-detect';
import ExternalLink from '../ExternalLink'
import EpisodeIcon from '../../icons/EpisodeIcon';
import PinPointIcon from '../../icons/PinPointIcon'
import TextIcon from '../../icons/TextIcon';
import YouTubeIcon from '../../icons/YouTubeIcon';

import latestStyles from './youTubeStyles'

const YouTubeVideo = ({ link }) => {
  const imageUrl = 'https://img.youtube.com/vi/i6CfPYxzAFM/0.jpg'
  const altDescription = 'Description of the image'
  const title = 'Episode 7'
  const location = 'Germany'
  const description = 'Blasting on the highway on my way from Manchester, UK to Bucharest, Romania'
  const youTubeLink = 'https://www.youtube.com/watch?v=i6CfPYxzAFM&t=902s'

  return (
    <>
      <Paper style={latestStyles.paperStyle}>
        <Stack spacing={2} direction={isMobile ? 'column' : 'row'}>
          <div style={latestStyles.imgContainerStyle}>
            <img src={imageUrl} alt={altDescription} style={latestStyles.roundedImageStyle} />
          </div>
            <Stack spacing={2} direction="column">
              <h3><EpisodeIcon/> {title}</h3>
              <p><PinPointIcon/> {location}</p>
              <p><TextIcon/> {description}</p>
              <ExternalLink link={youTubeLink} text={'Watch it on YouTube'} icon={<YouTubeIcon/>} />
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
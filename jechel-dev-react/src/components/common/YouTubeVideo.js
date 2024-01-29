import PropTypes from 'prop-types';
import { Stack } from '@mui/material';
import { isMobile } from 'react-device-detect';

import ExternalLink from './ExternalLink';
import EpisodeIcon from '../icons/EpisodeIcon';
import PinPointIcon from '../icons/PinPointIcon'
import TextIcon from '../icons/YouTubeDescriptionIcon';
import YouTubeIcon from '../icons/YouTubeIcon';

import appStyle from '../../AppStyle';

const YouTubeVideo = ({ link }) => {
  const imageUrl = 'https://img.youtube.com/vi/i6CfPYxzAFM/0.jpg';
  const altDescription = 'Description of the image';
  const title = 'Episode 7';
  const location = 'Germany';
  const description = 'Blasting on the highway on my way from Manchester, UK to Bucharest, Romania';
  const youTubeLink = 'https://www.youtube.com/watch?v=i6CfPYxzAFM&t=902s';

  return (
    <>
        <Stack spacing={2} direction={isMobile ? 'column' : 'row'} className='youtube-container' style={appStyle.paperStyle}>
          <div style={appStyle.imgContainerStyle}>
            <img src={imageUrl} alt={altDescription} style={appStyle.roundedImageStyle} />
          </div>
            <Stack spacing={2} direction="column">
              <h3><EpisodeIcon/> {title}</h3>
              <p><PinPointIcon/> {location}</p>
              <p><TextIcon/> {description}</p>
              <ExternalLink link={youTubeLink} text={'Watch it on YouTube'} icon={<YouTubeIcon/>} />
            </Stack>
        </Stack>
    </>
  );
};

YouTubeVideo.propTypes = {
  link: PropTypes.string.isRequired
};

export default YouTubeVideo;
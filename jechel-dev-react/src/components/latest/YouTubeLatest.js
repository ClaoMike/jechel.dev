import PropTypes from 'prop-types';
import { Stack } from '@mui/material';
import { isMobile } from 'react-device-detect';

import ExternalLink from '../common/ExternalLink';
import YouTubeIcon from '../icons/YouTubeIcon';
import YouTubeImage from '../common/YouTubeImage';
import YouTubeTitle from '../common/YouTubeTitle';
import YouTubeLocation from '../common/YouTubeLocation';
import YouTubeDescription from '../common/YouTubeDescription';

import appStyle from '../../AppStyle';

const YouTubeLatest = ({ link }) => {
  const imageUrl = 'https://img.youtube.com/vi/i6CfPYxzAFM/0.jpg';
  const altDescription = 'Description of the image';
  const title = 'Episode 7';
  const location = 'Germany';
  const description = 'Blasting on the highway on my way from Manchester, UK to Bucharest, Romania';
  const youTubeLink = 'https://www.youtube.com/watch?v=i6CfPYxzAFM&t=902s';

  return (
    <>
        <Stack spacing={2} direction={isMobile ? 'column' : 'row'} className='youtube-container' style={appStyle.paperStyle}>
          
          <YouTubeImage style={appStyle.imageContainerStyleLatest} imageUrl={imageUrl} altDescription={altDescription} />
          
          <Stack spacing={2} direction="column">
            <YouTubeTitle title={title} />
            <YouTubeLocation location={location}/>
            <YouTubeDescription description={description}/>
            <ExternalLink link={youTubeLink} text={'Watch it on YouTube'} icon={<YouTubeIcon/>} />
          </Stack>
        
        </Stack>
    </>
  );
};

YouTubeLatest.propTypes = {
  link: PropTypes.string.isRequired
};

export default YouTubeLatest;
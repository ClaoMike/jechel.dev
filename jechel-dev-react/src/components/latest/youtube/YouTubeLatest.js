import PropTypes from 'prop-types';
import { Stack } from '@mui/material';
import { isMobile } from 'react-device-detect';
import { YouTubeImage, YouTubeTitle, YouTubeLocation, YouTubeDescription, YouTubeRedirectLink } from 'Components';
import style from './YouTubeLatestStyle';

const YouTubeLatest = ({ video }) => {
  return (
    <>
        <Stack spacing={2} direction={isMobile ? 'column' : 'row'} className='youtube-container' style={style.mainStack}>
          
          <YouTubeImage style={style.image} imageUrl={video.imageURL} altDescription={video.description} />
          
          <Stack spacing={2} direction="column">
            <YouTubeTitle title={video.title} />
            <YouTubeLocation location={video.location}/>
            <YouTubeDescription description={video.description}/>
            <YouTubeRedirectLink link={video.link}/>
          </Stack>
        
        </Stack>
    </>
  );
};

YouTubeLatest.propTypes = {
  link: PropTypes.string.isRequired
};

export default YouTubeLatest;
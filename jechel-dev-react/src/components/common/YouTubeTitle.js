import EpisodeIcon from '../icons/EpisodeIcon';

const YouTubeTitle = ({ title }) => {
  return (
    <h3 className='episode-text-font episode-text-colour'><EpisodeIcon/> {title}</h3>
  )
}

export default YouTubeTitle
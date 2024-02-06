import TextIcon from '../icons/YouTubeDescriptionIcon';

const YouTubeDescription = ({description}) => {
  return (
    <p className='episode-text-font episode-text-colour'><TextIcon/> {description}</p>
  )
}

export default YouTubeDescription
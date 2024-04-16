import sstyle from "./YouTubeImageStyle";

const YouTubeImage = ({style, imageUrl, altDescription}) => {
  return (
    <div style={style}>
      <img src={imageUrl} alt={altDescription} style={sstyle}/>
    </div>
  )
}

export default YouTubeImage
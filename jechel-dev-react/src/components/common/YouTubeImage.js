import appStyle from "AppStyle";

const YouTubeImage = ({style, imageUrl, altDescription}) => {
  return (
    <div style={style}>
            <img src={imageUrl} alt={altDescription} style={appStyle.roundedImageStyle} />
    </div>
  )
}

export default YouTubeImage
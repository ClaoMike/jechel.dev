import ExternalLink from "../common/ExternalLink";
import YouTubeEpisodes from "./YouTubeEpisodes";
import YouTubeVideo from "../common/YouTubeVideo";
import appStyle from "../../AppStyle";

const Moto = () => {
  const imageUrl = 'https://img.youtube.com/vi/i6CfPYxzAFM/0.jpg';
  const altDescription = 'Description of the image';
  const title = 'Episode 7';
  const location = 'Germany';
  const description = 'Blasting on the highway on my way from Manchester, UK to Bucharest, Romania';
  const youTubeLink = 'https://www.youtube.com/watch?v=i6CfPYxzAFM&t=902s';

  const videoInstances = [];

  for (let i = 0; i < 8; i++) {
    const videoInstance = new YouTubeVideo(i+1, imageUrl, altDescription, title, location, description, youTubeLink);
    videoInstances.push(videoInstance);
  }

  return (
    <>
      <div style={appStyle.youTubeEpisodes}>
        <p >Watch me riding my motorcycle through Europe on <ExternalLink link='https://www.youtube.com/channel/UCUQwqa2uppSN0OTQbbHpAtA' text='YouTube' /></p>
      </div>
      <YouTubeEpisodes videoInstances={videoInstances}/>
    </>
  );
};

export default Moto;
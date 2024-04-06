import { YouTubeLatest, mockData } from "Components";

const Latest = () => {
  return (
    <>
      {mockData.latest.type === 'video' && (
        <YouTubeLatest video={mockData.latest.data} />
        )
      }
        </>
  );
};

export default Latest;
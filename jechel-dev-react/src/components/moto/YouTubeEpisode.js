import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';
import appStyle from '../../AppStyle';

const YouTubeEpisode = ({ videoInstance }) => {
  return (
    <Accordion>

      <AccordionSummary>
        <div style={appStyle.imgContainerStyle}>
            <img src={videoInstance.imageUrl} alt={videoInstance.altDescription} style={appStyle.roundedImageStyle} />
        </div>
      </AccordionSummary>
      
      <AccordionDetails>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </AccordionDetails>
    
    </Accordion>
  )
}

export default YouTubeEpisode
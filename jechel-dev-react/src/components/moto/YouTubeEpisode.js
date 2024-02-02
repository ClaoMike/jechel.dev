import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';

const YouTubeEpisode = ({ videoInstances }) => {
  return (
    <Accordion>
      <AccordionSummary>First accordion</AccordionSummary>
      <AccordionDetails>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </AccordionDetails>
    </Accordion>
  )
}

export default YouTubeEpisode
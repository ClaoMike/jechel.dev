import { SpatiumExplorationis, STRINGS, SectionHeader } from "Components";
import style from "./ProjectsStyle";
import SectionAccordion from "components/aboutMe/section_accordion/SectionAccordion";

const Projects = () => {
  return (
    <SectionAccordion
    header={
      <SectionHeader text={STRINGS.aboutMe.projects.title} />
    }
    content={
      <SpatiumExplorationis/>
    }
  />
  );
};

export default Projects;
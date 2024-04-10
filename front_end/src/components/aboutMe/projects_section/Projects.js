import { SpatiumExplorationis, STRINGS, SectionHeader, SectionAccordion } from "Components";

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
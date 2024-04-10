import { SpatiumExplorationis, STRINGS, SectionHeader } from "Components";
import style from "./ProjectsStyle";

const Projects = () => {
  return (
    <div style={style}>
      <SectionHeader text={STRINGS.aboutMe.projects.title} />
        <SpatiumExplorationis/>
    </div>
  );
};

export default Projects;
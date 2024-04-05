import { SpatiumExplorationis, STRINGS } from "Components";
import style from "./ProjectsStyle";

const Projects = () => {
  return (
    <div style={style}>
        <h2>{STRINGS.aboutMe.projects.title}</h2>
        <SpatiumExplorationis/>
    </div>
  );
};

export default Projects;
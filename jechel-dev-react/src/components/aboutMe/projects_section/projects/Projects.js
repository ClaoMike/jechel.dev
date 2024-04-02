import { SpatiumExplorationis, JechelDev } from "Components";
import style from "./ProjectsStyle";

const Projects = () => {
  return (
    <div style={style}>
        <h2>Projects</h2>
        <JechelDev/>
        <SpatiumExplorationis/>
    </div>
  );
};

export default Projects;
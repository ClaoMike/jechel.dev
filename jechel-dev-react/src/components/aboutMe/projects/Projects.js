import appStyle from "AppStyle";
import SpatiumExplorationis from "./SpatiumExplorationis";
import JechelDev from "./JechelDev";

const Projects = () => {
  return (
    <div style={appStyle.skillsSection}>
        <h2>Projects</h2>
        <JechelDev/>
        <SpatiumExplorationis/>
    </div>
  );
};

export default Projects;
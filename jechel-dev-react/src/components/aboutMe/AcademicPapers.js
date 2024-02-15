import appStyle from "AppStyle";
import { ExternalLink } from "Components";

const AcademicPapers = () => {
  return (
    <div style={appStyle.skillsSection}>
        <h2>Academic papers</h2>
        <ul>
            <li>
                <ExternalLink link='resources/Thesis.pdf' text='How to build a video game using Procedural Content Generation?' />
            </li>
        </ul>
    </div>
  );
};

export default AcademicPapers;
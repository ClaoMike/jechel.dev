import { ExternalLink } from "Components";
import style from "./AcademicPapersStyle";

const AcademicPapers = () => {
  return (
    <div style={style}>
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
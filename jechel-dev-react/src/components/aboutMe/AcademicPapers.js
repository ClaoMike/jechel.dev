import { ExternalLink } from "Components";

const AcademicPapers = () => {
  return (
    <>
        <h3>Academic papers</h3>
        <ul>
            <li>
                <ExternalLink link='resources/Thesis.pdf' text='How to build a video game using Procedural Content Generation?' />
            </li>
        </ul>
    </>
  );
};

export default AcademicPapers;
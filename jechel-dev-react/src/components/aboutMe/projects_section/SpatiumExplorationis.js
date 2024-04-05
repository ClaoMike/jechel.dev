import { ExternalLink, GithubIcon, ExternalLinkWithIcon, STRINGS } from "Components";

const SpatiumExplorationis = () => {
  return (
    <div>
        <h3>
            {STRINGS.aboutMe.projects.project1.title}
            (<ExternalLinkWithIcon link='https://github.com/ClaoMike/AE' text={STRINGS.GITHUB} icon={<GithubIcon />} />)
        </h3>
        <ul>
          <li>{STRINGS.aboutMe.projects.project1.line1 + STRINGS.EMPTY_SPACE}<ExternalLink link='https://www.manchester.ac.uk/' text={STRINGS.UNIVERSITY_OF_MANCHESTER} />{STRINGS.DOT}</li>
          <li>{STRINGS.aboutMe.projects.project1.line2 + STRINGS.EMPTY_SPACE}<ExternalLink link='resources/Thesis.pdf' text={STRINGS.aboutMe.academicPapers.paper1} />{STRINGS.DOT}</li>
          <li>{STRINGS.aboutMe.projects.project1.line3}</li>
          <li>{STRINGS.aboutMe.projects.project1.line4}</li>
          <li>{STRINGS.aboutMe.projects.project1.line5}</li>
        </ul>
    </div>
  )
}

export default SpatiumExplorationis
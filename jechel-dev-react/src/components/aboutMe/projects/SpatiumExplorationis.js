import { ExternalLink, GithubIcon, ExternalLinkWithIcon } from "Components";

const SpatiumExplorationis = () => {
  return (
    <div>
        <h3>
            Spatium Explorationis
            (<ExternalLinkWithIcon link='https://github.com/ClaoMike/AE' text='GitHub' icon={<GithubIcon />} />)
        </h3>
        <ul>
          <li>This was my third-year project I built during my studies at the <ExternalLink link='https://www.manchester.ac.uk/' text='University of Manchester' />.</li>
          <li>Served as the foundation for my <ExternalLink link='resources/Thesis.pdf' text='How to build a video game using Procedural Content Generation?' /> paper.</li>
          <li>Developed a top-down 2D video game using Java, libGDX, Procreate and GarageBand.</li>
          <li>The objective of the game is to play as a space-faring dog who explores Pluto and locates a broken satellite at the end of a maze. The scope of the game is to play as an explorer space dog to find the broken satellite on Pluto, located at the maze exit.</li>
          <li>Used a traditional Procedural Content Generation (PCG) technique to generate each level.</li>
        </ul>
    </div>
  )
}

export default SpatiumExplorationis
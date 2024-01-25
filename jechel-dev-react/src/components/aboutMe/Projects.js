import ExternalLink from "../common/ExternalLink"

const Projects = () => {
  return (
    <>
        <h3>Projects</h3>
        <h4>
            Spatium Explorationis
            (<ExternalLink link='https://github.com/ClaoMike/AE' text='GitHub' />)
        </h4>
        <p>
            Third-Year Project - &nbsp;
            <ExternalLink link='https://www.manchester.ac.uk/' text='University of Manchester' />
        </p>
        <ul>
            <li>Developed a top-down 2D video game using Java, libGDX, Procreate and GarageBand.</li>
            <li>The objective of the game is to play as a space-faring dog who explores Pluto and locates a broken satellite at the end of a maze. The scope of the game is to play as an explorer space dog to find the broken satellite on Pluto, located at the maze exit.</li>
            <li>Used a traditional Procedural Content Generation (PCG) technique to generate each level.</li>
        </ul>
    </>
  )
}

export default Projects
import { GithubIcon, ExternalLinkWithIcon } from "Components";

const JechelDev = () => {
  return (
    <div>
        <h3>
            jechel.dev
            (<ExternalLinkWithIcon link='https://github.com/ClaoMike/jechel.dev' text='GitHub' icon={<GithubIcon />} />)
        </h3>
        <ul>
          <li>This is my personal website, the very same your are admiring right now.</li>
          <li>I have created this for showing my past, current and future work. Enjoy :)</li>
          <li>It is built with React, JavaScript, HTML and CSS.</li>
        </ul>
    </div>
  )
}

export default JechelDev
import ExternalLink from "../common/ExternalLink"

const AboutMeHeader = () => {
  return (
    <>
        <h2>About Me</h2>

        <p>Check out my &nbsp;
            <ExternalLink link='resources/Claudiu_Mihai_Jechel_Resume.pdf' text='Resume' /> | &nbsp;
            <ExternalLink link='https://github.com/ClaoMike' text='GitHub' /> | &nbsp;
            <ExternalLink link='https://www.linkedin.com/in/claudiumihaijechel/' text='LinkedIn' />
        </p>
    </>
  )
}

export default AboutMeHeader
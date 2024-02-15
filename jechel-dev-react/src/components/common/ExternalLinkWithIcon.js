import PropTypes from 'prop-types'

const ExternalLinkWithIcon = ({link, text, icon}) => {
  return (
    <>
        <a 
          href={link}
          className='episode-text-font'
          target="_blank" 
          rel="noopener noreferrer" 
          >{text} {icon}
        </a>
    </>
  )
}

ExternalLinkWithIcon.propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }
  

export default ExternalLinkWithIcon
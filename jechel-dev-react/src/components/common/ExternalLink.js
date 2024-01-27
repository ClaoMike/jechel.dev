import PropTypes from 'prop-types'

const ExternalLink = ({link, text, icon}) => {
  return (
    <>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          >{text} {icon}
        </a>
    </>
  )
}

ExternalLink.propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }
  

export default ExternalLink
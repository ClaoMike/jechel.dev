import PropTypes from 'prop-types'
import mainStyles from '../main/mainStyles'

const ExternalLink = ({link, text}) => {
  return (
    <>
        <a href={link} target="_blank" rel="noopener noreferrer" style={mainStyles.linkStyle}>{text}</a>
    </>
  )
}

ExternalLink.propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }
  

export default ExternalLink
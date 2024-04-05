import PropTypes from 'prop-types'

const ExternalLink = ({link, text}) => {
  return (
    <>
        <a 
          href={link}
          className='episode-text-font'
          target="_blank" 
          rel="noopener noreferrer" 
          >{text}
        </a>
    </>
  )
}

export default ExternalLink
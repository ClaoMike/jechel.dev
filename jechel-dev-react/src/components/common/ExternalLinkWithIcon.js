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
  

export default ExternalLinkWithIcon
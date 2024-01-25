import React from 'react'

const NavigationItem = ({ link, icon}) => {
  return (
    <>
        <Link to={link} style={{ ...navLinkStyle, ...(location.pathname === '/' && activeLinkStyle) }}>Latest <FaHotjar style={mainStyles.iconStyle}/></Link>
    </>
  )
}

export default NavigationItem
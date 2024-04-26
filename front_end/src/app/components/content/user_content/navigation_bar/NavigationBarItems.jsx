import React from 'react'
import CustomTab from '@components/content/user_content/navigation_bar/components/tabs/CustomTab'
import paths from '@paths/paths'
import LatestIcon from '@/icons/LatestIcon'
import MotoIcon from '@/icons/MotoIcon'
import AboutMeIcon from '@/icons/AboutMeIcon'


const NavigationBarItems = (props) => {
  return (
    <>
        <CustomTab path={paths.home.path} label='Latest' icon={<LatestIcon />} />
        <CustomTab path={paths.moto.path} label='Moto' icon={<MotoIcon />} />
        <CustomTab path={paths.about_me.path} label='About Me' icon={<AboutMeIcon />} />
    </>
  )
}

export default NavigationBarItems
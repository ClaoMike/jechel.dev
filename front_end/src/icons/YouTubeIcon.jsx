import React from 'react'
import CustomFaIcon from './blueprints/CustomFaIcon'
import { FaYoutube } from 'react-icons/fa';

const YouTubeIcon = () => {
    const configuration = {
        icon: FaYoutube,
        variant: 'css',
        boxSize: 7,
    }

    return (
        <CustomFaIcon configuration={configuration}/>
    )
}

export default YouTubeIcon
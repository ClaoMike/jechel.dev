import React from 'react'
import { FaUserNinja  } from 'react-icons/fa';
import CustomFaIcon from '@icons/blueprints/CustomFaIcon';

const AboutMeIcon = () => {
    const configuration = {
        icon: FaUserNinja,
        name: 'SubtitleIcon',
        boxSize: 5,
        marginBottom: '-5px'
    }
    
    return (
        <CustomFaIcon configuration={configuration}/>
    )
}

export default AboutMeIcon
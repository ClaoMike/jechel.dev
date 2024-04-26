import React from 'react'
import { FaFire } from 'react-icons/fa';
import CustomFaIcon from '@icons/blueprints/CustomFaIcon';

const LatestIcon = () => {
    const configuration = {
        icon: FaFire,
        name: 'SubtitleIcon',
        boxSize: 5,
        marginBottom: '-5px'
    }

    return (
        <CustomFaIcon configuration={configuration}/>
    )
}

export default LatestIcon
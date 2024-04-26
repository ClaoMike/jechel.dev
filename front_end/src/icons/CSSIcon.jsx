import React from 'react'
import CustomFaIcon from './blueprints/CustomFaIcon'
import { FaCss3 } from 'react-icons/fa';

const CSSIcon = () => {
    const configuration = {
        icon: FaCss3,
        variant: 'moto',
        boxSize: 7,
    }

    return (
        <CustomFaIcon configuration={configuration}/>
    )
}

export default CSSIcon
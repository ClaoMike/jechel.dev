import React from 'react'
import CustomFaIcon from './blueprints/CustomFaIcon'
import { FaJs } from 'react-icons/fa';

const JSIcon = () => {
    const configuration = {
        icon: FaJs,
        variant: 'moto',
        boxSize: 7,
    }
    
    return (
        <CustomFaIcon configuration={configuration}/>
    )
}

export default JSIcon
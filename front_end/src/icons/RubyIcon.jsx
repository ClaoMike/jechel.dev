import React from 'react'
import CustomFaIcon from './blueprints/CustomFaIcon'
import { FaGem } from 'react-icons/fa';

const RubyIcon = () => {
    const configuration = {
        icon: FaGem,
        variant: 'moto',
        boxSize: 7,
    }

    return (
        <CustomFaIcon configuration={configuration}/>
    )
}

export default RubyIcon
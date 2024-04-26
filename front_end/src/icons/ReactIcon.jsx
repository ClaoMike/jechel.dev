import React from 'react'
import CustomFaIcon from './blueprints/CustomFaIcon'
import { FaReact } from 'react-icons/fa';

const ReactIcon = () => {
    const configuration = {
        icon: FaReact,
        variant: 'react',
        boxSize: 7,
    }

    return (
        <CustomFaIcon configuration={configuration}/>
    )
}

export default ReactIcon
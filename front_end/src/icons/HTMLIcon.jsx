import React from 'react'
import CustomFaIcon from './blueprints/CustomFaIcon'
import { FaHtml5 } from 'react-icons/fa';

const HTMLIcon = () => {
    const configuration = {
        icon: FaHtml5,
        variant: 'html',
        boxSize: 7,
    }

    return (
        <CustomFaIcon configuration={configuration}/>
    )
}

export default HTMLIcon
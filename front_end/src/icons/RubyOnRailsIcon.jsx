import React from 'react'
import CustomFaIcon from './blueprints/CustomFaIcon'
import { FaRoad } from 'react-icons/fa';

const RubyOnRailsIcon = () => {
    const configuration = {
        icon: FaRoad,
        variant: 'rails',
        boxSize: 7,
    }

    return (
        <CustomFaIcon configuration={configuration}/>
    )
}

export default RubyOnRailsIcon
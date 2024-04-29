import React from 'react'
import CustomFaIcon from './blueprints/CustomFaIcon'
import { FaMapMarker } from 'react-icons/fa';

const LocationIcon = () => {
    const configuration = {
        icon: FaMapMarker,
        variant: 'location',
        boxSize: 7,
    }

    return (
        <CustomFaIcon configuration={configuration}/>
    )
}

export default LocationIcon
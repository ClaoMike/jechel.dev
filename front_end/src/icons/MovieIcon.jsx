import React from 'react'
import CustomFaIcon from './blueprints/CustomFaIcon'
import { FaVideo } from 'react-icons/fa';

const MovieIcon = () => {
    const configuration = {
        icon: FaVideo,
        variant: 'youtube',
        boxSize: 7,
    }

    return (
        <CustomFaIcon configuration={configuration} />
    )
}

export default MovieIcon
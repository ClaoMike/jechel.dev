import React from 'react'
import { FaMotorcycle } from 'react-icons/fa';
import CustomFaIcon from '@icons/blueprints/CustomFaIcon';

const MotoIcon = () => {
    const configuration = {
        icon: FaMotorcycle,
        variant: 'moto',
        boxSize: 5,
        marginBottom: '-5px'
    }
    
    return (
        <CustomFaIcon configuration={configuration}/>
    )
}

export default MotoIcon
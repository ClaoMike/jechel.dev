import React from 'react'
import { FaBars } from 'react-icons/fa';
import CustomFaIcon from '@icons/blueprints/CustomFaIcon';

const MenuIcon = () => {
    const configuration = {
        icon: FaBars,
        variant: 'menu',
        boxSize: 7,
        marginBottom: '0px'
    }

    return (
        <CustomFaIcon configuration={configuration}/>
    )
}

export default MenuIcon
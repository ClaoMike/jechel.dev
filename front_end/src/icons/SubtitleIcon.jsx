import React from 'react';
import { FaTerminal } from 'react-icons/fa';
import CustomFaIcon from '@icons/blueprints/CustomFaIcon';

const SubtitleIcon = () => {
    const configuration = {
        icon: FaTerminal,
        name: 'SubtitleIcon',
        boxSize: 7,
        marginBottom: '0px'
    }
    
    return (
        <CustomFaIcon configuration={configuration}/>
    )
}

export default SubtitleIcon;

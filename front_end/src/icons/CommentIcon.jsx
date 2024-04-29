import React from 'react'
import CustomFaIcon from './blueprints/CustomFaIcon'
import { FaComment } from 'react-icons/fa';

const CommentIcon = () => {
    const configuration = {
        icon: FaComment,
        variant: 'css',
        boxSize: 7,
    }

    return (
        <CustomFaIcon configuration={configuration}/>
    )
}

export default CommentIcon
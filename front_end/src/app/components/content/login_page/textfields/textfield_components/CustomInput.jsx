import React from 'react'
import { Input } from '@chakra-ui/react';

const CustomInput = ({type, value, onChange, placeholder}) => {
    return (
        <Input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={"Enter your " + placeholder}
        />
    )
}

export default CustomInput
import React from 'react'
import { useSelector } from 'react-redux';
import { Button } from '@chakra-ui/react';


const SubmitButton = ({ handleSubmit }) => {
    const allowSubmit = useSelector((state) => state.login.allowSubmit);
    
    return (
        <Button type="submit" isDisabled={!allowSubmit} onClick={handleSubmit}>
            Submit
        </Button>
    )
}

export default SubmitButton
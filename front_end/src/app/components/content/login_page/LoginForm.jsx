import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Stack } from '@chakra-ui/react';

import SubmitButton from '@components/content/login_page/SubmitButton';
import UsernameTextfield from '@components/content/login_page/textfields/UsernameTextfield';
import PasswordTextfield from '@components/content/login_page/textfields/PasswordTextfield';

const LoginForm = () => {
    const username = useSelector((state) => state.login.username);
    const password = useSelector((state) => state.login.password);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("submitted");
    };

    useEffect(() => {
        console.log('Username:', username);
        console.log('Password:', password);
    }, [username, password]);


    return (
        <form onSubmit={handleSubmit}>
            <Stack spacing={4}>

                <UsernameTextfield />
                <PasswordTextfield />
                <SubmitButton handleSubmit={handleSubmit}/>

            </Stack>
        </form>
    )
}

export default LoginForm
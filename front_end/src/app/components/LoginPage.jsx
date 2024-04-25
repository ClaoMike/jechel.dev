import React, { useEffect } from 'react';
import { FormControl, FormLabel, Input, Button, Stack } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCredentials } from '../../states_management/slices/loginSlice'

const LoginPage = () => {
    const username = useSelector((state) => state.login.username);
    const password = useSelector((state) => state.login.password);
    const allowSubmit = useSelector((state) => state.login.allowSubmit);

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        // event.preventDefault();
        // dispatch(updateCredentials({username, password}));
    };

    const handleUsernameChange = (event) => {
        dispatch(updateCredentials({
            username: event.target.value
        }));
    };

    const handlePasswordChange = (event) => {
        dispatch(updateCredentials({
            password: event.target.value
        }));
    };

    // useEffect(() => {
    //     console.log('Username:', username);
    //     console.log('Password:', password);
    //     console.log('Submit: ' + allowSubmit)
    // }, [username, password]);


    return (
        <form onSubmit={handleSubmit}>
            <Stack spacing={4}>

                <FormControl id="username">
                    <FormLabel>Username</FormLabel>
                    <Input
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                        placeholder="Enter your username"
                    />
                </FormControl>

                <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Enter your password"
                    />
                </FormControl>

                <Button type="submit" colorScheme="blue" isDisabled={!allowSubmit}>
                    Submit
                </Button>

            </Stack>
        </form>
    )
}

export default LoginPage
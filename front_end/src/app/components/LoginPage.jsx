import React, { useState } from 'react';
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Stack,
} from '@chakra-ui/react';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Stack spacing={4}>

                <FormControl id="username">
                    <FormLabel>Username</FormLabel>
                    <Input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
                    />
                </FormControl>

                <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                    />
                </FormControl>

                <Button type="submit" colorScheme="blue">
                    Submit
                </Button>

            </Stack>
        </form>
    )
}

export default LoginPage
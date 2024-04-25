import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { updateCredentials } from '@slices/loginSlice';

import CustomFormControl from '@components/content/login_page/textfields/textfield_components/CustomFormControl'

const UsernameTextfield = () => {
    const username = useSelector((state) => state.login.username);
    const dispatch = useDispatch();

    const handleUsernameChange = (event) => {
        dispatch(updateCredentials({
            username: event.target.value
        }));
    };

    return (
        <CustomFormControl 
            id="username"
            placeholder="Username"
            type="text"
            value={username}
            onChange={handleUsernameChange}
        />
    )
}

export default UsernameTextfield
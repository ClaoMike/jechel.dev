import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { updateCredentials } from '../../../../../states_management/slices/loginSlice';

import CustomFormControl from './textfield_components/CustomFormControl'

const PasswordTextfield = () => {
    const password = useSelector((state) => state.login.password);
    const dispatch = useDispatch();

    const handlePasswordChange = (event) => {
        dispatch(updateCredentials({
            password: event.target.value
        }));
    };

    return (
        <CustomFormControl 
            id="password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
        />
    )
}

export default PasswordTextfield
import React from 'react';
import { Header } from "Components";
import { useState } from 'react';

import LoginForm from './login_form/LoginForm';


const LoginPage = () => {
    const [theme, setTheme] = useState('');

    return (
        <div className="App" data-theme={theme}>
            <Header theme={theme} setTheme={setTheme} />
            <LoginForm />
        </div>
  )
}

export default LoginPage
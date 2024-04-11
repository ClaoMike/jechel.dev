import React from 'react';
import { Header, LoginForm } from "Components";
import { useState } from 'react';

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
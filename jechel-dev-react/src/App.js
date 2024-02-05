import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/main/header/Header";
import NavigationBar from "./components/main/navigationBar/NavigationBar";
import Latest from "./components/latest/Latest";
import Moto from "./components/moto/Moto";
import AboutMe from "./components/aboutMe/AboutMe";

import { useEffect, useState } from 'react';

import useLocalStorage from 'use-local-storage';

import Switch from "react-switch";
import NewDLSwitch from "./components/main/header/NewDLSwitch";

function App() {
  const [theme, setTheme] = useState('');
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(defaultDark ? 'dark' : 'light');
      setChecked(defaultDark);
    }
  }, []);

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    window.localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
    setChecked(!checked);
  };

  return (
    <Router>
      <div className="App" data-theme={theme}>
        <Header />
        <Switch onChange={switchTheme} checked={checked} />
        {/* <NewDLSwitch /> */}
        <NavigationBar />


        <Routes>
          <Route path='/' element={<Latest />} />
          <Route path='/moto' element={<Moto />} />
          <Route path='/aboutMe' element={<AboutMe />} />
        </Routes>

      </div>
    </Router>
  );
};

export default App;

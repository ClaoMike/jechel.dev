import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/main/header/Header";
import NavigationBar from "./components/main/navigationBar/NavigationBar";
import Latest from "./components/latest/Latest";
import Moto from "./components/moto/Moto";
import AboutMe from "./components/aboutMe/AboutMe";

import useLocalStorage from 'use-local-storage';
import DLSwitch from "./components/main/header/DLSwitch";

function App() {

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light' )

  return (
    <Router>
      <div className="App" data-theme={theme}>
        <Header />
        <NavigationBar />

        <DLSwitch />

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

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "components/main/header/Header";
import NavigationBar from "components/main/navigationBar/NavigationBar";
import Latest from "components/latest/Latest";
import Moto from "components/moto/Moto";
import AboutMe from "components/aboutMe/AboutMe";

import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('');

  return (
    <Router>
      <div className="App" data-theme={theme}>
        <Header theme={theme} setTheme={setTheme} />
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

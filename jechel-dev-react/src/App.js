import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import Header from "./components/main/Header";
import NavigationBar from "./components/main/NavigationBar";
import Latest from "./components/latest/Latest";
import Moto from "./components/moto/Moto";
import AboutMe from "./components/aboutMe/AboutMe";

import main from './AppStyle';

import { useStat, useEffect } from 'react';

function App() {

  useEffect(() => {
    // Apply styles to the body element
    Object.keys(main).forEach((style) => {
        document.body.style[style] = main[style];
    });

    // Cleanup function to remove styles when the component unmounts
    return () => {
        Object.keys(main).forEach((style) => {
            document.body.style[style] = '';
        });
    };
}, []); // Run once when the component mounts

  return (
    <Router>
      <div>
        <Header />
        <NavigationBar />

        <Routes>
          <Route path='/' element={<Latest />} />
          <Route path='/moto' element={<Moto />} />
          <Route path='/aboutMe' element={<AboutMe />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;

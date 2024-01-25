import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import Header from "./components/main/Header";
import NavigationBar from "./components/main/NavigationBar";
import Latest from "./components/latest/Latest";
import Moto from "./components/moto/Moto";
import AboutMe from "./components/aboutMe/AboutMe";

import main from './AppStyle';

function App() {

  return (
    <Router>
      <div style={main}>
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

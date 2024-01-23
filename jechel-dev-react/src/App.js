import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import Latest from "./components/Latest";
import Moto from "./components/Moto";
import AboutMe from "./components/AboutMe";

function App() {
  const style = {
    fontFamily: 'Courier New, monospace',
  };

  return (
    <Router>
      <div className="App" style={style}>
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

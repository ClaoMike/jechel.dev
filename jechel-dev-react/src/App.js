import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import { Header, NavigationBar, Latest, Moto, AboutMe } from "Components";
import VersionSection from "components/main/VersionSection";

function App() {
  const [theme, setTheme] = useState('');

  return (
    <Router>
      <div className="App" data-theme={theme}>

        <Header theme={theme} setTheme={setTheme} />
        <NavigationBar />

        <div className="article">
          <Routes>
            <Route path='/' element={<Latest />} />
            <Route path='/moto' element={<Moto />} />
            <Route path='/aboutMe' element={<AboutMe />} />
          </Routes>
        </div>
        
        <VersionSection />
        
      </div>
    </Router>
  );
};

export default App;

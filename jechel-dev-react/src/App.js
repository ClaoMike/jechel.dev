import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import { Header, NavigationBar, Latest, Moto, AboutMe } from "Components";

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

import { Route, Routes } from "react-router-dom";
import { useState } from 'react';
import { Header, NavigationBar, Latest, Moto, AboutMe, VersionSection } from "Components";

const UserPage = () => {
  const [theme, setTheme] = useState('');
  
  return (  
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
  )
}

export default UserPage
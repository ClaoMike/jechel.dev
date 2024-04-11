import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserPage, LoginPage } from "Components";

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/*' element={<UserPage />} />
      <Route path='/admin' element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;

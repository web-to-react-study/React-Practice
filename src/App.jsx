import SignUpPage from './page/SignUpPage';
import LoginPage from './page/LoginPage';
import MainPage from './page/MainPage';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return(<BrowserRouter>
  <HelmetProvider>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  </HelmetProvider>
  </BrowserRouter>) 
}

export default App;

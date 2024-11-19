import {Route, Routes } from 'react-router-dom';
import SignUpPage from './page/SignUpPage';
import MainPage from './page/MainPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
}

export default App;

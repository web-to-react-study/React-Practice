import { Route, Routes } from 'react-router-dom';
import SignUpPage from './page/SignUpPage';
import Webtoon from './page/Webtoon';



function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUpPage />} />
      <Route path="/webtoon" element={<Webtoon />} />

  
    </Routes>
  );
}

export default App;

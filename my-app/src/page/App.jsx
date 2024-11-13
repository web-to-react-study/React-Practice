import { Helmet, HelmetProvider } from "react-helmet-async";
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import SignUpPage from './SignUpPage';
import LoginPage from './LoginPage';

function App() {
  return (
    <BrowserRouter>
    <HelmetProvider>
      <Routes>
          <Route path="/" element={<SignUpPage/>}></Route>
          <Route path="/signup" element={<SignUpPage/>}></Route>
          <Route path="/login" element={<LoginPage/>}></Route>
        </Routes>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;

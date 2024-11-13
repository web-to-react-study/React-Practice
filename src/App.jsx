import { HelmetProvider } from 'react-helmet-async';
import SignUpPage from './page/SignUpPage';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <HelmetProvider>
    <Routes>
      {/*<Route path="/" element={<HomePage />} />*/}
      <Route path="/signup" element={<SignUpPage />} />
      {/*<Route path="/login" element={<ControlledPage />} />*/}
    </Routes>
    </HelmetProvider>
  )
  
}

export default App;

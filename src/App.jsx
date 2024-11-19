import { Routes, Route, Link } from 'react-router-dom';
import SignUpPage from './page/SignUpPage';
import WebtoonPage from './page/WebtoonPage';

function App() {
  return (
    <div>
      <nav>
        <Link to="/signup">
          <button>SignUp Page</button>
        </Link>
        <Link to="/webtoon">
          <button>Webtoon Page</button>
        </Link>
      </nav>

      <Routes>
        <Route path="/" />
        <Route path="/webtoon" element={<WebtoonPage/>} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
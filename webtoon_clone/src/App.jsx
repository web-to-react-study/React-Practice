import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import ThumbnailPage from "./pages/thumbnail_page";
import LandingPage from "./pages/LandingPage";
import { HelmetProvider } from "react-helmet-async";
import SearchPage from "./pages/SearchPage";

function App() {
	return (
		<main>
			<HelmetProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<LandingPage />} />
						<Route path="/signup" element={<SignUpPage />} />
						<Route path="/main" element={<ThumbnailPage />} />
						<Route path="/search" element={<SearchPage />} />
					</Routes>
				</BrowserRouter>
			</HelmetProvider>
		</main>
	);
}

export default App;

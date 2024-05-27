import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import { useTheme } from "./context/ThemeContext";
import Home from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const { theme } = useTheme();

  return (
    <Router>
      <div
        className="pb-80"
        style={{ background: theme.background, color: theme.color }}
      >
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:name" element={<DetailsPage />} />
          <Route path="/notfound" element={<NotFoundPage />} />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

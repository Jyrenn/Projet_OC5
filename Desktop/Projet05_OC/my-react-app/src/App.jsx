import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import Header from "./components/header";
import Footer from "./components/footer";
import "./App.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

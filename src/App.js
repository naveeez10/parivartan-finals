import "./App.css";
import Navbar from "./components/Navbar.js";
import Marketplace from "./components/Marketplace";
import Profile from "./components/Profile";
import SellNFT from "./components/SellNFT";
import NFTPage from "./components/NFTpage";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Marketplace />} />
          <Route path="/nftPage" element={<NFTPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sellNFT" element={<SellNFT />} />
          <Route path="/chat" element={<Chatbot />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import GameDetail from "./pages/GameDetail";
import Games from "./pages/Games";
import Home from "./pages/Home";
// import cuyLogo from './assets/logo.svg'
// import './App.css'

function App() {
  let [pHide, setPHide] = useState(false);

  return (
    // <div className="App">
    // <div>
    //     <a href="https://youtube.com/deaafrizal" target="_blank">
    //     <img src={cuyLogo} className="logo cuy" alt="Cuy logo" />
    //     </a>
    // </div>
    // <h1 className="text-blue-400">REACTVITE PACK</h1>
    // <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //     realtime click {count}
    //     </button>
    // </div>
    // <p className="read-the-docs">
    //     how to run this pack: npm i & npm run dev on your terminal.
    // </p>
    // </div>
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games/detail" element={<GameDetail />} />
        <Route path="/games/:category" element={<Games />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

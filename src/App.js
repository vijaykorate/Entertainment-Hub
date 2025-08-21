import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Web from "./pages/Web";
import South from "./pages/South";
import Anime from "./pages/Anime";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/web" element={<Web />} />
            <Route path="/south" element={<South />} />
            <Route path="/anime" element={<Anime />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

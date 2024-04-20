import React from "react";
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import NotFound from "./Pages/NotFound/NotFound"; // Importe o componente NotFound
import MainPage from "./Pages/MainPage/MainPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;

// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

const About = () => <h2>About Page</h2>;
const Contact = () => <h2>Contact Page</h2>;
const Service = () => <h2>Service</h2>;

function App() {
  return (
    <Router>
      <div className="bg-black">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/warranty" element={<Contact />} />
          <Route path="/service" element={<Service />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

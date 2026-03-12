import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Cases from './pages/Cases';
import Blog from './pages/Blog';
import BookCall from './pages/BookCall';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen selection:bg-bison-blue selection:text-bison-dark flex flex-col md:cursor-none">
        <CustomCursor />
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/om-os" element={<About />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/book-et-opkald" element={<BookCall />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

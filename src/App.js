import React from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';




function App () {
  return (
   <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="*" element={<Home/>}/>
          </Routes>
          
        </main>
        <Footer />
      </div>
   </Router>
  );
}

export default App;

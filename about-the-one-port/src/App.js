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
            <Route path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/portfolio" component={Portfolio}/>
          </Routes>
          
        </main>
        <Footer />
      </div>
   </Router>
  );
}

export default App;

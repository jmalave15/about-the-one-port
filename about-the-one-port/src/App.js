import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';

//import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Navigation></Navigation>    
      <main>
        <About></About>
        <Portfolio></Portfolio>

        <Resume></Resume>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;

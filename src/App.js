import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Feature from './components/Feature/Feature';
import Brand from './components/Brand/Brand';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import AgeVerification from './components/AgeVerification/AgeVerification';
import About from './pages/About/About';
import Products from './pages/Products/Products';
import Contact from './pages/Contact/Contact';
import './App.css';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAgeVerified, setIsAgeVerified] = useState(false);

  return (
    <Router>
      <div className="App">
        {!isAgeVerified && (
          <AgeVerification onVerify={() => setIsAgeVerified(true)} />
        )}
        <Header onCartClick={() => setIsCartOpen(!isCartOpen)} />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <Feature />
              <Brand />
            </main>
          } />
          <Route path="/gioi-thieu" element={<About />} />
          <Route path="/san-pham" element={<Products />} />
          <Route path="/lien-he" element={<Contact />} />
        </Routes>
        <Footer />
        {isCartOpen && <Cart onClose={() => setIsCartOpen(false)} />}
      </div>
    </Router>
  );
}

export default App;
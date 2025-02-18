import React, { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Feature from './components/Feature/Feature';
import Brand from './components/Brand/Brand';
import Cart from './components/Cart/Cart';
import AgeVerification from './components/AgeVerification/AgeVerification';
import './App.css';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAgeVerified, setIsAgeVerified] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="App">
      {!isAgeVerified && (
        <AgeVerification onVerify={() => setIsAgeVerified(true)} />
      )}
      <Header onCartClick={toggleCart} />
      <main>
        <Hero />
        <Feature />
        <Brand />
      </main>
      {isCartOpen && <Cart onClose={() => setIsCartOpen(false)} />}
    </div>
  );
}

export default App;

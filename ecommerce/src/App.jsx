import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Routing from './routing/Routing';
import Footer from './pages/Footer';

function App() {
  return (
    <>
    <div >
      <Navbar />
      <Routing/>
      <Footer />
      
    </div>
    </>
  );
}

export default App;

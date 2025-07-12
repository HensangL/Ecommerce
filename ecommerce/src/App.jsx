import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Routing from './routing/Routing';

function App() {
  return (
    <>
    <div className='bg-amber-200'>
      <Navbar />
      <Routing/>
    </div>
    </>
  );
}

export default App;

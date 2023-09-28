import React from 'react';

import './App.css';
import Cards from './components/cards';
import Image from './components/image';
import Navbar from './components/navbar';


function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
   <Image></Image>
   <Cards></Cards>

    </div>
  );
}
export default App;

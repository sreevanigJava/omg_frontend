import React from 'react';

import './App.css';
import Navbar from './components/Navbar/navbar';
import Header1 from './components/header1';
import Header2 from './components/header2';
import Header3 from './components/header3';

function App() {
  return (
    <div className="App">
   <Navbar></Navbar>
   <Header1></Header1>
   <Header2></Header2>
   <Header3></Header3>
    </div>
  );
}

export default App;

import React from 'react';
import Header from './components/Header';
import './App.css';

import logo from "./shared/images/logo.png";


function App() {
  return (
    <div className="App">
      <Header logo={logo} />
    </div>
  );
}

export default App;

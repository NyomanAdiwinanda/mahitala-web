import React from 'react';
import Header from './components/Header/Header';
import Featured from './components/Featured/Featured';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header-section">
        <Header />
      </div>
      <div className="main-section">
        <div className="featured-section">
          <Featured />
        </div>
      </div>
    </div>
  );
}

export default App;
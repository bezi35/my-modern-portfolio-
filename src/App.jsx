import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.css';

function App() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`app-root ${isDark ? 'dark-theme' : 'light-theme'}`}>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <Hero />
    </div>
  );
}

export default App;
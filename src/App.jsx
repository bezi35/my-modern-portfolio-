import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Mail, Download, Code, Sparkles } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
function App() {


  return (
    <div className="app-container">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
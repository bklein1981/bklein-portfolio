import { useState } from 'react'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import './custom.css';

function App() {

  return (
    <>
      <div>
        <Header />
      </div>
      <div className='content'>
        <Card />
        {/* Placeholder div for the fixed footer */}
        <div className="footer-placeholder"></div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default App

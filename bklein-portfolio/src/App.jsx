import { useState } from 'react'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
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
        <Content />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default App

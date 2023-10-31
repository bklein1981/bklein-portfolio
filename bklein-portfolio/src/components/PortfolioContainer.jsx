import { useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import AboutMe from './Pages/AboutMe';
import ContactMe from './Pages/ContactMe';
import Portfolio from './Pages/Portfolio';
import Resume from './Pages/Resume';


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'ContactMe') {
      return <ContactMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
  }
  
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <div>
        <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
      <div className='content'>
        {renderPage()}
        {/* Placeholder div for the fixed footer */}
        <div className="footer-placeholder"></div>
      </div>
      <div>
        <Footer />
      </div>
    </>

  )
}
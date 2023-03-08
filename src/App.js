import React, { useState } from 'react';
import './App.css';
import NavbarLanding from './components/nav';
import LandingPage from './pages/Landing';
import AboutUsPage from "./pages/AboutUsPage";
import CateringPage from "./pages/CateringPage";
import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPage";
import ReviewsPage from './pages/ReviewsPage';
import Footer from './components/footer';

function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const renderPage = () => {
    if (currentPage === "Home") {
      return <LandingPage currentPage={currentPage} handlePageChange={handlePageChange} />;
    }
    if (currentPage === "About") {
      return <AboutUsPage handlePageChange={handlePageChange} />;
    }
    if (currentPage === "Catering") {
      return <CateringPage handlePageChange={handlePageChange} />;
    }
    if (currentPage === "Contact") {
      return <ContactPage handlePageChange={handlePageChange} />;
    }
    if (currentPage === "Gallery") {
      return <GalleryPage handlePageChange={handlePageChange} />;
    }
    if (currentPage === "Reviews") {
      return <ReviewsPage handlePageChange={handlePageChange} />;
    }
  };

  return (
    <>
      <NavbarLanding currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </>
  );
}

export default App;

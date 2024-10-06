import React from 'react';
import '../css/Indexing.css'; // Importing CSS for styling
import Header from '../components/header';
import Footer from '../components/footer';

const logos = [
  { id: 1, src: '/images/1.png', alt: 'Logo 1', name: 'World Cat' },
  { id: 2, src: '/images/2.png', alt: 'Logo 2', name: 'Google Scholar' },
  { id: 3, src: '/images/3.png', alt: 'Logo 3', name: 'CiteFactor' },
  { id: 4, src: '/images/4.png', alt: 'Logo 4', name: 'Index Copernicus' },
  { id: 5, src: '/images/5.png', alt: 'Logo 5', name: 'International Scientific Indexing' },
  { id: 6, src: '/images/6.jpg', alt: 'Logo 6', name: 'DRJI' },
  { id: 7, src: '/images/7.png', alt: 'Logo 7', name: 'Root Indexing' },
  { id: 8, src: '/images/8.png', alt: 'Logo 8', name: 'Scientific Journal Imapct Factor' },

  // Add more logos as needed
];

const Indexing = () => {
  return (
    <>
      <Header />
      <div className="indexing-page">
        <h1>Indexing Partners</h1>
        <div className="logo-grid">
          {logos.map((logo) => (
            <div className="logo-item" key={logo.id}>
              <img src={logo.src} alt={logo.alt} />
              {/* <p>{logo.name}</p> */}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Indexing;

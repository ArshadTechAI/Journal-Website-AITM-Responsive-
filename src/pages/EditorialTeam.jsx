import React from 'react';
import '../css/EditorialPage.css';
import Header from '../components/header';
import Footer from '../components/footer';

const EditorialTeam = () => {
  return (
    <>
      <Header />
      <div className="editorial-page">
      <div style={{height: '30px'}}></div>
        <h1>Editorial Team</h1>
        <div className="editorial-content">
          <p>
            Welcome to the editorial page of our IJESTM. Our team is committed to providing well-researched and insightful content across various fields, including health, education, environment, and development. We collaborate with experts and field practitioners to bring forth articles that contribute to the global exchange of knowledge and best practices.
          </p>
          <p>
            We invite contributions from researchers, field practitioners, and writers who are passionate about making a difference. Whether you are interested in submitting articles, writing editorials, or contributing to our commentary section, we encourage you to join us in our mission to promote meaningful change through knowledge sharing.
          </p>
        </div>

        {/* Join Us Section */}
        <div className="join-us-section">
          <h2>Join Us</h2>
          <p>
            If you are passionate about contributing to our journal, we’d love to hear from you! Whether you want to write articles, assist in peer reviews, or contribute to editorial tasks, we welcome experts from diverse fields to join our team. Become a part of our mission to promote knowledge sharing and field-based activities.
          </p>
          <button className="join-us-button">Join Our Team</button>
        </div>
      </div>
      <div style={{height: '30px'}}></div>
      <Footer />
    </>
  );
}

export default EditorialTeam;

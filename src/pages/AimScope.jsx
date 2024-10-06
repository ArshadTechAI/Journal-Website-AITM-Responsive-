import React from 'react';
import Header from '../components/header';
import { Button } from 'react-bootstrap';
import Footer from '../components/footer';

const AimScope = () => {
  return (
    <>
      <Header />
      <div className="aim-scope-page" style={{ padding: '20px' }}>
      <div style={{height: '30px'}}></div>
        <h1>Our Aim & Scope</h1>
        <p>
          Welcome to Field ACTions Science Reports (FACTS Reports), an international, peer-reviewed journal committed to promoting field-based activities in both developing and developed countries.
          Created in 2007, FACTS Reports provides an open-access platform for the expression and exchange of ideas in a wide range of fields such as economy, development, urban services, health, education, environment, and agriculture.
        </p>

        <section className="donation-section">
          <h2>Support Field-Based Action Through FACTS Reports</h2>
          <p>
            Your contributions to the <strong>Field ACTions Science Reports (FACTS Reports)</strong> help promote the sharing of valuable field-based experiences from projects across health, development, environment, education, and more.
            By supporting us, you enable the dissemination of best practices and innovative solutions to global challenges, contributing to meaningful change in both developing and developed countries.
            Help us continue to be an open-access platform for both readers and authors by donating today.
          </p>

          {/* <h3>How to Donate</h3>
          <p>
            Consider sponsoring a specific field or issue—such as health systems, rural development, or environmental protection—where your contributions will directly support the publication of critical insights from the field.
          </p>

          <Button>Donate</Button> */}
        </section>
        <div style={{height: '30px'}}></div>
      </div>
      <Footer />
    </>
  );
}

export default AimScope;

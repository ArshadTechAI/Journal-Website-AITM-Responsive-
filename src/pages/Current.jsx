import React, { useState, useEffect } from 'react';
import { db } from "../backend/firebase";
import { collection, getDocs, doc, getDoc, query } from "firebase/firestore/lite";
import { Button, Col, Container, Row } from 'react-bootstrap';
import Header from '../components/header';
import Footer from '../components/footer';


function Current() {

  // for current volume and issue
  const [currentData, setCurrentData] = useState(null);

  let volume = '';
  let issue = '';

  useEffect(() => {
      const fetchData = async () => {
      // Fetch current document
      const currentDoc = await getDoc(doc(db, 'Current', 'current'));
      const currentData = currentDoc.data();
      volume = currentData.volume;
      issue = currentData.issue;
      // console.log(currentData);
      setCurrentData(currentData);
      };
      fetchData();
  }, []);

  const formatDateRange = (issueId) => {
      const dateRanges = {
      'Issue1': 'January-March 2024',
      'Issue2': 'April-June 2024',
      'Issue3': 'July-September 2024',
      'Issue4': 'Octorber-December 2024',
      // Add more mappings here
      };
      return dateRanges[issueId] || 'Unknown Date Range';
  };



  return (
    <>
      <Header/>


      <div style={{height: '30px'}}></div>
      <center>
        <h1>
        Current
        </h1>
      </center>
      <div style={{height: '30px'}}></div>
      <Container fluid
        className='container'
        style={{
          backgroundColor: '#EFEFEF',
          // backgroundImage: isSmallScreen ? 'none' : 'url(images/bulb_bg.png)',
          backgroundImage: 'url(images/bulb_bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: 'auto',
          height: '500px',
          padding: '20px',
          // margin: '0px 50px',
          borderRadius: '12px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center', // Center horizontally
          textAlign: 'center' // Center text
        }}
      >
        <h1 style={{ color: 'white' }}><b>Current Issue</b></h1>
        <h3 style={{ color: 'white' }}>Volume {currentData != null ? currentData.volume : ''}, Issue {currentData != null ? currentData.issue : ''}</h3>
        <h3 style={{ color: 'white' }}>{currentData != null ? formatDateRange('Issue' + currentData.issue) : ''}</h3>

        <hr style={{ width: '50%', margin: '50px 0', borderColor: 'white' }} />

        <Button
          style={{
            backgroundColor: '#0085FF',
            padding: '10px 30px',
            borderRadius: '50px',
            border: '1px solid white',
            cursor: 'pointer',
            color: 'white' // Button text color
          }}
        >
          Submit Paper
        </Button>
      </Container>
      <div style={{height: '30px'}}></div>

      <Footer/>
    </>
  )
}

export default Current
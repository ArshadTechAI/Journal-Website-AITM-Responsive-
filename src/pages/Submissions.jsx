// // import React from 'react'

// // function Submissions() {
// //   return (
// //     <div>Submissions</div>
// //   )
// // }

// // export default Submissions


// import React, { useState } from 'react';
// import { Form, Button, Container, Row, Col } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../css/Submissions.css'; // Custom CSS for the red border
// import Footer from '../components/footer';
// import Header from '../components/header';

// const Submissions = () => {
//   const [acceptedTerms, setAcceptedTerms] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!acceptedTerms) {
//       alert("Please accept the terms and conditions before submitting.");
//       return;
//     }
//     // Handle the form submission logic here
//   };

//   return (
//     <>
//     <Header/>
//     <Container className="mt-4">
//       <h1>Research Paper Submission</h1>
//       <p className="instructions">
//         We recommend reading the <a href="#">publication guidelines/process</a>, 
//         <a href="#"> Fees & Payment</a>, and <a href="#">FAQs</a> before submitting your research paper. <br />
//         Kindly fill all the details properly as certificates will be generated based on the information provided below. <br />
//         Fields marked with a red left border are mandatory. Ensure your email and mobile number are functioning, as all communication will be done via these details.
//       </p>
//       <Form onSubmit={handleSubmit}>

//         {/* Paper Details */}
//         <h3>Paper Details</h3>
//         <Row>
//           <Col md={6}>
//             <Form.Group controlId="title" className="required-field">
//               <Form.Label>Title</Form.Label>
//               <Form.Control type="text" placeholder="Enter paper title" required />
//             </Form.Group>
//           </Col>
//           <Col md={6}>
//             <Form.Group controlId="keywords" className="required-field">
//               <Form.Label>Keywords</Form.Label>
//               <Form.Control type="text" placeholder="Enter keywords" required />
//             </Form.Group>
//           </Col>
//         </Row>

//         <Form.Group controlId="abstract" className="required-field">
//           <Form.Label>Abstract</Form.Label>
//           <Form.Control as="textarea" rows={3} placeholder="Enter abstract" required />
//         </Form.Group>

//         <Form.Group controlId="researchArea" className="required-field">
//           <Form.Label>Research Area</Form.Label>
//           <Form.Control type="text" placeholder="Enter research area" required />
//         </Form.Group>

//         <Form.Group controlId="researchPaper" className="required-field">
//           <Form.Label>Research Paper (File Upload)</Form.Label>
//           <Form.Control type="file" required />
//         </Form.Group>

//         <Form.Group controlId="messageToEditor">
//           <Form.Label>Message to Editor (Optional)</Form.Label>
//           <Form.Control as="textarea" rows={3} placeholder="Write a message (optional)" />
//         </Form.Group>

//         {/* Author Details */}
//         <h3>Author Details</h3>
//         {[...Array(5)].map((_, i) => (
//           <Row key={i} className="mb-3">
//             <Col md={6}>
//               <Form.Group controlId={`authorName${i + 1}`} className={i === 0 ? 'required-field' : ''}>
//                 <Form.Label>Author {i + 1} Name</Form.Label>
//                 <Form.Control type="text" placeholder="Enter author name" required={i === 0} />
//               </Form.Group>
//             </Col>
//             <Col md={6}>
//               <Form.Group controlId={`authorDesignation${i + 1}`}>
//                 <Form.Label>Designation</Form.Label>
//                 <Form.Control type="text" placeholder="Enter designation" />
//               </Form.Group>
//             </Col>
//             <Col md={6}>
//               <Form.Group controlId={`authorOrganization${i + 1}`}>
//                 <Form.Label>Organization</Form.Label>
//                 <Form.Control type="text" placeholder="Enter organization" />
//               </Form.Group>
//             </Col>
//             <Col md={6}>
//               <Form.Group controlId={`authorEmail${i + 1}`}>
//                 <Form.Label>Email</Form.Label>
//                 <Form.Control type="email" placeholder="Enter email" />
//               </Form.Group>
//             </Col>
//             <Col md={6}>
//               <Form.Group controlId={`authorPhone${i + 1}`}>
//                 <Form.Label>Phone</Form.Label>
//                 <Form.Control type="tel" placeholder="Enter phone number" />
//               </Form.Group>
//             </Col>
//           </Row>
//         ))}

//         {/* Contact Address */}
//         <h3>Contact Address</h3>
//         <Row>
//           <Col md={6}>
//             <Form.Group controlId="country" className="required-field">
//               <Form.Label>Country</Form.Label>
//               <Form.Control type="text" placeholder="Enter country" required />
//             </Form.Group>
//           </Col>
//           <Col md={6}>
//             <Form.Group controlId="state" className="required-field">
//               <Form.Label>State</Form.Label>
//               <Form.Control type="text" placeholder="Enter state" required />
//             </Form.Group>
//           </Col>
//         </Row>
//         <Row>
//           <Col md={6}>
//             <Form.Group controlId="district" className="required-field">
//               <Form.Label>District</Form.Label>
//               <Form.Control type="text" placeholder="Enter district" required />
//             </Form.Group>
//           </Col>
//           <Col md={6}>
//             <Form.Group controlId="postalCode" className="required-field">
//               <Form.Label>Postal Code</Form.Label>
//               <Form.Control type="text" placeholder="Enter postal code" required />
//             </Form.Group>
//           </Col>
//         </Row>

//         {/* Referral ID */}
//         <Form.Group controlId="referralId">
//           <Form.Label>Referral ID (Optional)</Form.Label>
//           <Form.Control type="text" placeholder="Enter referral ID" />
//         </Form.Group>

//         {/* Terms & Conditions */}
//         <Form.Group controlId="terms" className="required-field">
//           <Form.Check 
//             type="checkbox" 
//             label="I accept the terms and conditions" 
//             required 
//             checked={acceptedTerms}
//             onChange={() => setAcceptedTerms(!acceptedTerms)}
//           />
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Submit Paper
//         </Button>
//       </Form>
//     </Container>
//     <Footer/>
//     </>
//   );
// };

// export default Submissions;

// import React, { useState } from 'react';
// import { Form, Button, Container, Row, Col, Accordion, Card } from 'react-bootstrap';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// import '../css/Submissions.css';

// const Submissions = () => {
//   const [acceptedTerms, setAcceptedTerms] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!acceptedTerms) {
//       alert("Please accept the terms and conditions before submitting.");
//       return;
//     }
//     // Handle the form submission logic here
//   };

//   return (
//     <Container className="mt-4">
//       <h1>Research Paper Submission</h1>
//       <p className="instructions">
//         We recommend reading the <a href="#">publication guidelines/process</a>, 
//         <a href="#"> Fees & Payment</a>, and <a href="#">FAQs</a> before submitting your research paper. <br />
//         Kindly fill all the details properly as certificates will be generated based on the information provided below. <br />
//         Fields marked with a red left border are mandatory. Ensure your email and mobile number are functioning, as all communication will be done via these details.
//       </p>
//       <Form onSubmit={handleSubmit}>

//         {/* Paper Details */}
//         <h3>Paper Details</h3>
//         <Row>
//           <Col md={6}>
//             <Form.Group controlId="title" className="required-field">
//               <Form.Label>Title</Form.Label>
//               <Form.Control type="text" placeholder="Enter paper title" required />
//             </Form.Group>
//           </Col>
//           <Col md={6}>
//             <Form.Group controlId="keywords" className="required-field">
//               <Form.Label>Keywords</Form.Label>
//               <Form.Control type="text" placeholder="Enter keywords" required />
//             </Form.Group>
//           </Col>
//         </Row>

//         <Form.Group controlId="abstract" className="required-field">
//           <Form.Label>Abstract</Form.Label>
//           <Form.Control as="textarea" rows={3} placeholder="Enter abstract" required />
//         </Form.Group>

//         <Form.Group controlId="researchArea" className="required-field">
//           <Form.Label>Research Area</Form.Label>
//           <Form.Control type="text" placeholder="Enter research area" required />
//         </Form.Group>

//         <Form.Group controlId="researchPaper" className="required-field">
//           <Form.Label>Research Paper (File Upload)</Form.Label>
//           <Form.Control type="file" required />
//         </Form.Group>

//         <Form.Group controlId="messageToEditor">
//           <Form.Label>Message to Editor (Optional)</Form.Label>
//           <Form.Control as="textarea" rows={3} placeholder="Write a message (optional)" />
//         </Form.Group>

//         {/* Author Details - Accordion Dropdowns */}
//         <h3>Author Details</h3>
//         <Accordion>
//           {[...Array(5)].map((_, i) => (
//             <Card key={i}>
//               <Accordion.Toggle as={Card.Header} eventKey={String(i)}>
//                 Author {i + 1} Details
//               </Accordion.Toggle>
//               <Accordion.Collapse eventKey={String(i)}>
//                 <Card.Body>
//                   <Row className="mb-3">
//                     <Col md={6}>
//                       <Form.Group controlId={`authorName${i + 1}`} className={i === 0 ? 'required-field' : ''}>
//                         <Form.Label>Author {i + 1} Name</Form.Label>
//                         <Form.Control type="text" placeholder="Enter author name" required={i === 0} />
//                       </Form.Group>
//                     </Col>
//                     <Col md={6}>
//                       <Form.Group controlId={`authorDesignation${i + 1}`}>
//                         <Form.Label>Designation</Form.Label>
//                         <Form.Control type="text" placeholder="Enter designation" />
//                       </Form.Group>
//                     </Col>
//                     <Col md={6}>
//                       <Form.Group controlId={`authorOrganization${i + 1}`}>
//                         <Form.Label>Organization</Form.Label>
//                         <Form.Control type="text" placeholder="Enter organization" />
//                       </Form.Group>
//                     </Col>
//                     <Col md={6}>
//                       <Form.Group controlId={`authorEmail${i + 1}`}>
//                         <Form.Label>Email</Form.Label>
//                         <Form.Control type="email" placeholder="Enter email" />
//                       </Form.Group>
//                     </Col>
//                     <Col md={6}>
//                       <Form.Group controlId={`authorPhone${i + 1}`}>
//                         <Form.Label>Phone</Form.Label>
//                         <Form.Control type="tel" placeholder="Enter phone number" />
//                       </Form.Group>
//                     </Col>
//                   </Row>
//                 </Card.Body>
//               </Accordion.Collapse>
//             </Card>
//           ))}
//         </Accordion>

//         {/* Contact Address */}
//         <h3>Contact Address</h3>
//         <Row>
//           <Col md={6}>
//             <Form.Group controlId="country" className="required-field">
//               <Form.Label>Country</Form.Label>
//               <Form.Control type="text" placeholder="Enter country" required />
//             </Form.Group>
//           </Col>
//           <Col md={6}>
//             <Form.Group controlId="state" className="required-field">
//               <Form.Label>State</Form.Label>
//               <Form.Control type="text" placeholder="Enter state" required />
//             </Form.Group>
//           </Col>
//         </Row>
//         <Row>
//           <Col md={6}>
//             <Form.Group controlId="district" className="required-field">
//               <Form.Label>District</Form.Label>
//               <Form.Control type="text" placeholder="Enter district" required />
//             </Form.Group>
//           </Col>
//           <Col md={6}>
//             <Form.Group controlId="postalCode" className="required-field">
//               <Form.Label>Postal Code</Form.Label>
//               <Form.Control type="text" placeholder="Enter postal code" required />
//             </Form.Group>
//           </Col>
//         </Row>

//         {/* Referral ID */}
//         <Form.Group controlId="referralId">
//           <Form.Label>Referral ID (Optional)</Form.Label>
//           <Form.Control type="text" placeholder="Enter referral ID" />
//         </Form.Group>

//         {/* Terms & Conditions */}
//         <Form.Group controlId="terms" className="required-field">
//           <Form.Check 
//             type="checkbox" 
//             label="I accept the terms and conditions" 
//             required 
//             checked={acceptedTerms}
//             onChange={() => setAcceptedTerms(!acceptedTerms)}
//           />
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Submit Paper
//         </Button>
//       </Form>
//     </Container>
//   );
// };

// export default Submissions;



// import React, { useState } from 'react';
// import { Form, Button, Container, Row, Col, Accordion, Card } from 'react-bootstrap';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// import '../css/Submissions.css';

// export const Submissions = () => {
//   const [acceptedTerms, setAcceptedTerms] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!acceptedTerms) {
//       alert("Please accept the terms and conditions before submitting.");
//       return;
//     }
//     // Proceed with submission if terms are accepted
//     console.log("Form submitted successfully!");
//   };

//   return (
//     <Container className="mt-4">
//       <h1>Research Paper Submission</h1>
//       <p className="instructions">
//         We recommend reading the <a href="#">publication guidelines/process</a>, 
//         <a href="#"> Fees & Payment</a>, and <a href="#">FAQs</a> before submitting your research paper. <br />
//         Fields marked with a red left border are mandatory. Ensure your email and mobile number are functioning, as all communication will be done via these details.
//       </p>
//       <Form onSubmit={handleSubmit}>
//         {/* Paper Details */}
//         <h3>Paper Details</h3>
//         <Row>
//           <Col md={6}>
//             <Form.Group controlId="title" className="required-field">
//               <Form.Label>Title</Form.Label>
//               <Form.Control type="text" placeholder="Enter paper title" required />
//             </Form.Group>
//           </Col>
//           <Col md={6}>
//             <Form.Group controlId="keywords" className="required-field">
//               <Form.Label>Keywords</Form.Label>
//               <Form.Control type="text" placeholder="Enter keywords" required />
//             </Form.Group>
//           </Col>
//         </Row>

//         <Form.Group controlId="abstract" className="required-field">
//           <Form.Label>Abstract</Form.Label>
//           <Form.Control as="textarea" rows={3} placeholder="Enter abstract" required />
//         </Form.Group>

//         <Form.Group controlId="researchArea" className="required-field">
//           <Form.Label>Research Area</Form.Label>
//           <Form.Control type="text" placeholder="Enter research area" required />
//         </Form.Group>

//         <Form.Group controlId="researchPaper" className="required-field">
//           <Form.Label>Research Paper (File Upload)</Form.Label>
//           <Form.Control type="file" required />
//         </Form.Group>

//         <Form.Group controlId="messageToEditor">
//           <Form.Label>Message to Editor (Optional)</Form.Label>
//           <Form.Control as="textarea" rows={3} placeholder="Write a message (optional)" />
//         </Form.Group>

//         {/* Author Details */}
//         <h3>Author Details</h3>
//         <Accordion>
//           {[...Array(5)].map((_, i) => (
//             <Card key={i}>
//               <Accordion.Toggle as={Card.Header} eventKey={String(i)}>
//                 Author {i + 1} Details
//               </Accordion.Toggle>
//               <Accordion.Collapse eventKey={String(i)}>
//                 <Card.Body>
//                   <Row className="mb-3">
//                     <Col md={6}>
//                       <Form.Group controlId={`authorName${i + 1}`} className={i === 0 ? 'required-field' : ''}>
//                         <Form.Label>Author {i + 1} Name</Form.Label>
//                         <Form.Control type="text" placeholder="Enter author name" required={i === 0} />
//                       </Form.Group>
//                     </Col>
//                     <Col md={6}>
//                       <Form.Group controlId={`authorDesignation${i + 1}`}>
//                         <Form.Label>Designation</Form.Label>
//                         <Form.Control type="text" placeholder="Enter designation" />
//                       </Form.Group>
//                     </Col>
//                     <Col md={6}>
//                       <Form.Group controlId={`authorOrganization${i + 1}`}>
//                         <Form.Label>Organization</Form.Label>
//                         <Form.Control type="text" placeholder="Enter organization" />
//                       </Form.Group>
//                     </Col>
//                     <Col md={6}>
//                       <Form.Group controlId={`authorEmail${i + 1}`}>
//                         <Form.Label>Email</Form.Label>
//                         <Form.Control type="email" placeholder="Enter email" />
//                       </Form.Group>
//                     </Col>
//                     <Col md={6}>
//                       <Form.Group controlId={`authorPhone${i + 1}`}>
//                         <Form.Label>Phone</Form.Label>
//                         <Form.Control type="tel" placeholder="Enter phone number" />
//                       </Form.Group>
//                     </Col>
//                   </Row>
//                 </Card.Body>
//               </Accordion.Collapse>
//             </Card>
//           ))}
//         </Accordion>

//         {/* Contact Address */}
//         <h3>Contact Address</h3>
//         <Row>
//           <Col md={6}>
//             <Form.Group controlId="country" className="required-field">
//               <Form.Label>Country</Form.Label>
//               <Form.Control type="text" placeholder="Enter country" required />
//             </Form.Group>
//           </Col>
//           <Col md={6}>
//             <Form.Group controlId="state" className="required-field">
//               <Form.Label>State</Form.Label>
//               <Form.Control type="text" placeholder="Enter state" required />
//             </Form.Group>
//           </Col>
//         </Row>
//         <Row>
//           <Col md={6}>
//             <Form.Group controlId="district" className="required-field">
//               <Form.Label>District</Form.Label>
//               <Form.Control type="text" placeholder="Enter district" required />
//             </Form.Group>
//           </Col>
//           <Col md={6}>
//             <Form.Group controlId="postalCode" className="required-field">
//               <Form.Label>Postal Code</Form.Label>
//               <Form.Control type="text" placeholder="Enter postal code" required />
//             </Form.Group>
//           </Col>
//         </Row>

//         {/* Referral ID */}
//         <Form.Group controlId="referralId">
//           <Form.Label>Referral ID (Optional)</Form.Label>
//           <Form.Control type="text" placeholder="Enter referral ID" />
//         </Form.Group>

//         {/* Terms & Conditions */}
//         <Form.Group controlId="terms" className="required-field">
//           <Form.Check 
//             type="checkbox" 
//             label="I accept the terms and conditions" 
//             required 
//             checked={acceptedTerms}
//             onChange={() => setAcceptedTerms(!acceptedTerms)}
//           />
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Submit Paper
//         </Button>
//       </Form>
//     </Container>
//   );
// };

// export default Submissions;





import React, { useEffect, useState } from "react";
// import Header from '../components/NewCustomComponents/Header'
import { db, storage, } from '../backend/firebase'; // Adjust the import path as necessary
import { getFirestore, collection, addDoc, serverTimestamp, doc, getDoc } from "firebase/firestore/lite";
import { ref, uploadBytes, getDownloadURL } from "@firebase/storage";
import Header from "../components/header";

import '../css/Submissions.css';
import Footer from "../components/footer";
import { Button } from "react-bootstrap";

function Submissions() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

    const [areas, setAreas] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedResearchArea, setSelectedResearchArea] = useState('');

  const handleSelectionChange = (event) => {
    setSelectedResearchArea(event.target.value);
  };

  const [formData, setFormData] = useState({
    title: '',
    abstract: '',
    keywords: '',
    researchArea: '',
    message: '',
    author: {
      name: '',
      designation: '',
      organization: '',
      email: '',
      mobile: ''
    },
    file: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name in formData.author) {
      setFormData({ ...formData, author: { ...formData.author, [name]: value } });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleAuthorChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      author: {
        ...prevData.author,
        [name]: value
      }
    }));
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };


const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.file) {
      alert('Please upload a file');
      return;
    }

    if(!formData.researchArea){
        alert('Please select a research area');
        return;
    }

    // Start loading (Show Circular Progress)
    setLoading(true);

    try {
      // Split keywords into an array
      const keywordsArray = formData.keywords.split(',').map(keyword => keyword.trim());

        const authorArray = [
        ...Array.from(document.querySelectorAll('.custom-table tbody tr'))
        //   .slice(1) // Skip the first row as it's already included
          .map((row) => ({
            name: row.querySelector('.name-input').value.trim(),
            designation: row.querySelector('.designation-input').value.trim(),
            organization: row.querySelector('.organization-input').value.trim(),
            email: row.querySelector('.email-input').value.trim(),
            mobile: row.querySelector('.mobile-input').value.trim(),
          }))
          .filter((author) => 
            author.name && author.designation && author.organization && author.email && author.mobile
          ), // Filter out authors with any empty fields
      ];
      console.log(authorArray);

        const country = document.querySelector('input[name="country"]').value.trim();
        const state = document.querySelector('input[name="state"]').value.trim();
        const city = document.querySelector('input[name="city"]').value.trim();
        const postalCode = document.querySelector('input[name="postal_code"]').value.trim();
        const author_address = [{
            'country': country,
            'state': state,
            'city': city,
            'postal_code': postalCode,
        }]
        const reviewer_referral_id = document.querySelector('input[name="reviewerReferralId"]').value.trim();



      // Fetch the current volume and issue
      const currentDoc = await getDoc(doc(db, 'Current', 'current'));
      if (!currentDoc.exists()) {
        throw new Error('Current document does not exist');
      }
      const currentData = currentDoc.data();
      const volumeId = `Volume${currentData.volume}`;
      const issueId = `Issue${currentData.issue}`;

      // Create a storage reference with the timestamped file name
      const timestamp = Date.now();
      const storageRef = ref(storage, `papers/${timestamp}_${formData.file.name}`);

      // Upload the file
      await uploadBytes(storageRef, formData.file);
  
      // Get the file URL
      const fileURL = await getDownloadURL(storageRef);

      // Add form data to Firestore
      const paperData = {
        title: formData.title,
        abstract: formData.abstract,
        keywords: keywordsArray, // Save the array of keywords
        researchArea: formData.researchArea,
        message: formData.message,
        authors: authorArray, // Save the array of authors
        fileURL: fileURL,
        status: 'pending',
        timestamp: serverTimestamp(),
        authorAddress: author_address,
        reviewerReferralId: reviewer_referral_id
      };

      // Add the document to PapersQueueCollection
      const papersQueueCollectionRef = collection(db, 'PapersQueueCollection');
      await addDoc(papersQueueCollectionRef, paperData);

      alert('Journal submitted successfully!');

      // Reset form data
      setFormData({
        title: '',
        abstract: '',
        keywords: '',
        researchArea: '',
        message: '',
        author: {
          name: '',
          designation: '',
          organization: '',
          email: '',
          mobile: ''
        },
        file: null
      });
    } catch (error) {
      console.error("Error submitting journal: ", error);
      alert('Error submitting journal: ' + error.message);
    } finally {
      // Stop loading (Hide Circular Progress)
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchAreas = async () => {
      try {
        const docRef = doc(db, "Research_Areas", "research_areas");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setAreas(docSnap.data().areas);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAreas();
  }, []);



    return (
      <>
        <Header/>
        <>
            {loading && (
                <div className="loading-overlay">
                    <div className="loading-indicator">
                    <div className="spinner"></div>
                    </div>
                </div>
            )}

            {/* <Header/> */}
            <center style={{marginTop: '20px', marginBottom: '20px'}}>
                <h2>Submit Research Paper</h2>
            </center>
            <hr />

            <h3><b>Important Instructions</b></h3>

            {/* <form onSubmit={handleSubmit}> */}
            <form>

            <ul>
                <li>
                    We recommend to read the publication guidelines/process, Fees & Payment and FAQs before submitting your research paper.
                </li>
                <li>
                    Kindly fill all the details properly as certificate will be generated on the basis of the information provided as under.            
                </li>
                <li>
                    All input fields marked with red left border are mandatory, they must be filled in.            
                </li>
                <li>
                    It is important that you provide functioning email address and functioning mobile number of the first author correctly because all communication will occur on those email address and/or mobile number.            
                </li>
                <li>
                    Details of the paper (Title, Abstract, Keywords, Author Name(s), Designation(s), Organization Name(s)) must be same as mentioned in the research paper which you are submitting.            
                </li>
                <li>
                    Please write Abstract in Sentence case, email address in lower case and all other fields in Title Case (Capitalize first character of each words). It's better NOT to write in UPPER CASE.            
                </li>
            </ul>

            <center>
                <h3 className='text_with_background'>Please fill in the details of the research paper.</h3>
            </center>
            <div className='input_contianer'>
                <div className='row_input_component'>
                    <label htmlFor="title">Title:</label>
                    <input className='red_border_input' placeholder='Please write in title case (Not in CAPITAL CASE)' type="text" id="title" name="title" required 
                    onChange={handleInputChange}/>
                </div>
                <div className='row_input_component'>
                    <label htmlFor="abstract">Abstract:</label>
                    <input className='red_border_input' placeholder='Short background information about the research' type="text" id="abstract" name="abstract" required 
                    onChange={handleInputChange}/>
                </div>
                <div className='row_input_component'>
                    <label htmlFor="keywords">Keywords:</label>
                    <input className='red_border_input' placeholder='Comma spearted list (ex: lorem, epusm, endor...)' type="text" id="keywords" name="keywords" required 
                    onChange={handleInputChange}/>
                </div>
                <div className='row_input_component'>
                    <label htmlFor="paper">Select Research Area:</label>
                    <select
                        name="researchArea"
                        value={formData.researchArea}
                        onChange={handleInputChange}
                        className="red_border_input"
                        >
                        <option value="" disabled>Select Research Area</option>
                        {areas.map((area, index) => (
                            <option key={index} value={area}>
                            {area}
                            </option>
                        ))}
                    </select>
                </div>
                
                <div className='row_input_component' >
                    <label htmlFor="paper">Select Research Paper:</label>
                    <div style={{width: '80%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <input className='red_border_input' type="file" id="paper" name="paper" accept=".pdf,.doc,.docx,.txt" required
                            style={{ width: '49%', padding: '10px'}}
                            onChange={handleFileChange}
                        />
                        <p style={{ width: '49%', textWrap: 'wrap', fontSize: '14px', marginTop: '2px'}}>(.docx or .doc (Microsoft Office Word) or .odt (Open Document Text) file only) (Please format the document in single column layout, not in 2 columns.)</p>

                    </div>
                    
                </div>


                <div className='row_input_component'>
                    <label htmlFor="message">Message to Editor or Reviewer:</label>
                    <input className='red_border_input not_required_field' placeholder='Enter your message here...' type="text" id="message" name="message" onChange={handleInputChange}/>
                </div>
            </div>

            <center>        
                <h3 className='text_with_background'>Authors' Details</h3>
                <p>Don't write Dr. Prof. Mr. Mrs. Miss etc. salutations before authors' names, these will be removed, these are against international standard.</p>
            </center>
            

            {/* <table className="custom-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Organization</th>
                        <th>Email Address</th>
                        <th>Mobile Number</th>
                    </tr>
                </thead>
                <tbody>
                       <tr>
                            <td>1.</td>
                            <td><input type="text" placeholder="In title case" className="table-input name-input required_field" required/></td>
                            <td><input type="text" placeholder="In title case" className="table-input designation-input required_field" required/></td>
                            <td><input type="text" placeholder="In title case" className="table-input organization-input required_field" required /></td>
                            <td><input type="email" placeholder="e.g. example@example.com" className="table-input email-input required_field" required /></td>
                            <td><input type="text" placeholder="+91 0000000000" className="table-input mobile-input required_field" required /></td>
                       </tr>
                    {Array.from({ length: 4 }, (_, index) => (
                    <tr key={index}>
                        <td>{index + 2}.</td>
                        <td><input type="text" placeholder="In title case" className="table-input name-input" /></td>
                        <td><input type="text" placeholder="In title case" className="table-input designation-input" /></td>
                        <td><input type="text" placeholder="In title case" className="table-input organization-input" /></td>
                        <td><input type="email" placeholder="e.g. example@example.com" className="table-input email-input" /></td>
                        <td><input type="text" placeholder="+91 0000000000" className="table-input mobile-input" /></td>
                    </tr>
                    ))}
                </tbody>
            </table> */}
            <table className="custom-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Organization</th>
                <th>Email Address</th>
                <th>Mobile Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="#">1.</td>
                <td data-label="Name">
                  <input type="text" placeholder="In title case" className="table-input name-input required_field" required />
                </td>
                <td data-label="Designation">
                  <input type="text" placeholder="In title case" className="table-input designation-input required_field" required />
                </td>
                <td data-label="Organization">
                  <input type="text" placeholder="In title case" className="table-input organization-input required_field" required />
                </td>
                <td data-label="Email Address">
                  <input type="email" placeholder="e.g. example@example.com" className="table-input email-input required_field" required />
                </td>
                <td data-label="Mobile Number">
                  <input type="text" placeholder="+91 0000000000" className="table-input mobile-input required_field" required />
                </td>
              </tr>
              {Array.from({ length: 4 }, (_, index) => (
                <tr key={index}>
                  <td data-label="#">{index + 2}.</td>
                  <td data-label="Name">
                    <input type="text" placeholder="In title case" className="table-input name-input" />
                  </td>
                  <td data-label="Designation">
                    <input type="text" placeholder="In title case" className="table-input designation-input" />
                  </td>
                  <td data-label="Organization">
                    <input type="text" placeholder="In title case" className="table-input organization-input" />
                  </td>
                  <td data-label="Email Address">
                    <input type="email" placeholder="e.g. example@example.com" className="table-input email-input" />
                  </td>
                  <td data-label="Mobile Number">
                    <input type="text" placeholder="+91 0000000000" className="table-input mobile-input" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>


            <center><p>Are there more authors? Don't worry; just write the five authors' names and we will add other author(s) from your uploaded research paper's file.</p></center>


            <center>        
                <h3 className='text_with_background'>Address for Communication</h3>
            </center>


            <div style={{alignItems: 'center', justifyContent: 'space-between'}}>
                <div className='column_input_component'>
                    <label htmlFor="title">Country:</label>
                    <input className='small_input' type="text" placeholder='Enter Country Name' id="country" name="country" required/>
                </div>

                <div className='column_input_component'>
                    <label htmlFor="title">State:</label>
                    <input className='small_input' type="text" placeholder='Enter State Name' id="state" name="state" required/>
                </div>

                <div className='column_input_component'>
                    <label htmlFor="title">City/District:</label>
                    <input className='small_input' type="text" placeholder='Enter City name' id="city" name="city" required/>
                </div>

                <div className='column_input_component'>
                    <label htmlFor="title">Postal code:</label>
                    <input className='small_input' type="text" placeholder='Enter Postal Code' id="postal_code" name="postal_code" required/>
                </div>
            </div>

            <center>
                    <div className='column_input_component' style={{ width: '40%', display: 'flex', flexDirection: 'column'}}>
                        <label htmlFor="title">Reviewer Referral Id :</label>
                        <input className='small_input not_required_field' type="text" placeholder='Enter reviewer referral Id ' id="reviewerReferralId" name="reviewerReferralId"/>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <input type="checkbox" name="privacy_policy" value="privacy_policy" required/>
                        <div style={{ width: '10px'}}></div>
                        <label htmlFor="privacy_policy">I agree with the <span><a href="#">journal/website's policies</a></span> </label>
                    </div>

                    <div style={{ height: '20px'}}></div>

                    <div style={{ display: 'flex', width: '20%', alignItems: 'center', justifyContent: 'center'}}>
                        {/* <button type="submit" className="submit_button">Submit</button> */}
                        <Button onClick={handleSubmit}>Submit</Button>
                    </div>
                    <div style={{marginBottom: '50px'}}></div>
            </center>
          </form>

          
        </>
        <Footer/>
      </>
    )
}

export default Submissions;
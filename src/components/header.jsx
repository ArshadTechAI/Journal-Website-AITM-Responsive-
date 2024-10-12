// // import React from 'react'
// // import './header.css'

// // function Header() {
// //   return (
// //     <div className='header'>
// //         <div className="header_container">
// //             <div className="logo_container">
// //                 <img src="/images/logo_new.png" alt="logo" />
// //             </div>
// //             <div className="title_container">
// //                 <h1 className='title'>International Journal of Engineering, Science Technology and Management</h1>
// //                 <p className='subtitle'>A Widely Indexed Open Access Peer Reveiwed Multidisceplinary Internation Journal</p>
// //             </div>
// //         </div>

// //         <div className="marquee_text">
// //             <marquee behavior="scroll" direction="left">
// //                 Call for paper Volume 6 Issue 3 May-2024 * Submit your research
// //             </marquee>
// //         </div>

// //         <div className="nav_links">
// //             <ul>
// //                 <li><a href="#">Home</a></li>
// //                 <li><a href="#">Aim & Scope</a></li>
// //                 <li><a href="#">Editorial Team</a></li>
// //                 <li><a href="#">Submissions</a></li>
// //                 <li><a href="#">Current</a></li>
// //                 <li><a href="#">Archives</a></li>
// //                 <li><a href="#">Indexing</a></li>
// //                 <li><a href="#">Publication Ethics</a></li>
// //                 <li><a href="#">Contact Us</a></li>
// //             </ul>
// //         </div>
// //     </div>
// //   )
// // }

// // export default Header






// import React from 'react';
// import { useState } from 'react';
// import { Navbar, Nav, Container, Button, Image, NavDropdown } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';


// function Header() {
//     const [expanded, setExpanded] = useState(false);

//     const isSmallScreen = window.innerWidth < 768; // Example for small screens (less than 768px wide)

//   return (
//     <div>
//       {/* Main Navbar
//       <Navbar expand="lg" style={{ backgroundColor: '#', padding: '20px 0' }}>
//         <Container fluid className="d-flex align-items-center justify-content-between">
//           <Navbar.Brand href="#" className="d-flex align-items-center">
//             <Image
//               src="images/logo_new.png" // Replace with your logo URL
//               alt="Logo"
//               style={{ width: '200px', height: 'auto', marginRight: '15px' }}
//             />
//           </Navbar.Brand>

//           <div className="mx-auto text-center">
//             <h3 className="d-none d-md-block" style={{ lineHeight: 2, margin: 0, fontWeight: 'bold', color: '#003366' }}>
//               International Journal of Engineering, Science Technology and Management
//             </h3>
//             <h6 className="d-none d-md-block" style={{ lineHeight: 2, margin: 0, color: '#555' }}>
//               A Widely Indexed Open Access Peer Reviewed Multidisciplinary International Journal
//             </h6>
//           </div>

//           <Navbar.Toggle
//             aria-controls="basic-navbar-nav"
//             className="d-md-none"
//             style={{ backgroundColor: '#003366', borderColor: '#003366' }}
//           />
//         </Container>

//         <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center d-none d-md-flex">
//           <Nav className="text-center">
//             <Button className="mx-2" href="#" style={{ backgroundColor: '#003366', borderColor: '#003366' }}>Home</Button>
//             <Button className="mx-2" href="#" style={{ backgroundColor: '#003366', borderColor: '#003366' }}>Aim & Scope</Button>
//             <Button className="mx-2" href="#" style={{ backgroundColor: '#003366', borderColor: '#003366' }}>Editorial Team</Button>
//             <Button className="mx-2" href="#" style={{ backgroundColor: '#003366', borderColor: '#003366' }}>Submissions</Button>
//             <Button className="mx-2" href="#" style={{ backgroundColor: '#003366', borderColor: '#003366' }}>Current</Button>
//             <Button className="mx-2" href="#" style={{ backgroundColor: '#003366', borderColor: '#003366' }}>Archives</Button>
//             <Button className="mx-2" href="#" style={{ backgroundColor: '#003366', borderColor: '#003366' }}>Indexing</Button>
//             <Button className="mx-2" href="#" style={{ backgroundColor: '#003366', borderColor: '#003366' }}>Publication Ethics</Button>
//             <Button className="mx-2" href="#" style={{ backgroundColor: '#003366', borderColor: '#003366' }}>Contact Us</Button>
//           </Nav>
//         </Navbar.Collapse>

//         <Navbar.Collapse id="basic-navbar-nav" className="d-md-none">
//           <NavDropdown title="Menu" id="nav-dropdown" className="ml-auto">
//             <NavDropdown.Item href="#">Home</NavDropdown.Item>
//             <NavDropdown.Item href="#">Aim & Scope</NavDropdown.Item>
//             <NavDropdown.Item href="#">Editorial Team</NavDropdown.Item>
//             <NavDropdown.Item href="#">Submissions</NavDropdown.Item>
//             <NavDropdown.Item href="#">Current</NavDropdown.Item>
//             <NavDropdown.Item href="#">Archives</NavDropdown.Item>
//             <NavDropdown.Item href="#">Indexing</NavDropdown.Item>
//             <NavDropdown.Item href="#">Publication Ethics</NavDropdown.Item>
//             <NavDropdown.Item href="#">Contact Us</NavDropdown.Item>
//           </NavDropdown>
//         </Navbar.Collapse>
//       </Navbar>

//       <Container fluid style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px', backgroundColor: '#D9E3F0'}}>
//         Call for paper Volume 6 Issue 3 May-2024 * Submit your research
//       </Container>
//     </div> */}
//     <div>
//        <Navbar expand="lg" style={{ backgroundColor: '#', padding: '20px 0' }}>
//         <Container fluid className='d-flex align-items-center justify-content-center md-fluid'>
//            <Navbar.Brand href="#" className="align-items-center">
//              <Image 
//                src="images/logo_new.png"  Replace with your logo URL
//                alt="Logo"
//                style={{ width: '200px', height: 'auto', marginRight: '15px' }}
//              />
//            </Navbar.Brand>

//            <div className="mx-auto text-center d-none d-md-block">
//              <h3 className='d-none d-md-block' style={{lineHeight: 2, margin: 0, fontWeight: 'bold', color: '#003366' }}>
//                International Journal of Engineering, Science Technology and Management
//              </h3>
//              <h6 className='d-none d-md-block' style={{lineHeight: 2,  margin: 0, color: '#555' }}>
//                A Widely Indexed Open Access Peer Reviewed Multidisciplinary International Journal
//              </h6>
//            </div>
//          </Container>
//        </Navbar>

//        <Container fluid style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px', backgroundColor: '#D9E3F0'}}>
//          Call for paper Volume 6 Issue 3 May-2024 * Submit your research
//          </Container>
//        <Container
//          fluid
//          className="d-flex justify-content-center mt-2"
//          style={{
//            padding: '10px',
//          }}
//        >
        
//          <Nav> 
//            {['Home', 'Aim & Scope', 'Editorial Team', 'Submissions', 'Current', 'Archives', 'Indexing', 'Publication Ethics', 'Contact Us'].map((link, index) => (
//             <Button
//               key={index}
//               href={`#${link.replace(/\s/g, '').toLowerCase()}`}
//               style={linkStyle}
//               className="mx-2"
//             >
//               {link}
//             </Button>

            
//           ))}

//             <Button style={{ marginLeft: '10px', backgroundColor: '#003366', borderColor:'#003366'}}>Home</Button>
//             <Button style={{ marginLeft: '10px', backgroundColor: '#003366', borderColor:'#003366'}}>Aim & Scope</Button>
//             <Button style={{ marginLeft: '10px', backgroundColor: '#003366', borderColor:'#003366'}}>Editorial Team</Button>
//             <Button style={{ marginLeft: '10px', backgroundColor: '#003366', borderColor:'#003366'}}>Submissions</Button>
//             <Button style={{ marginLeft: '10px', backgroundColor: '#003366', borderColor:'#003366'}}>Current</Button>
//             <Button style={{ marginLeft: '10px', backgroundColor: '#003366', borderColor:'#003366'}}>Archives</Button>
//             <Button style={{ marginLeft: '10px', backgroundColor: '#003366', borderColor:'#003366'}}>Indexing</Button>
//             <Button style={{ marginLeft: '10px', backgroundColor: '#003366', borderColor:'#003366'}}>Publication Ethics</Button>
//             <Button style={{ marginLeft: '10px', backgroundColor: '#003366', borderColor:'#003366'}}>Contact Us</Button>

//         </Nav>
//       </Container>
//     </div>
//     </div>
//   );
// }

// // Style for the individual links
// const linkStyle = {
//   backgroundColor: '#003366', // Dark blue background
//   color: 'white',
//   padding: '10px 15px',
//   borderRadius: '8px',
//   border: 'none',
//   fontWeight: 'bold',
// };

// export default Header;





// // import React from 'react';
// // import { Navbar, Nav, Container, NavDropdown, Row, Col } from 'react-bootstrap';
// // import './header.css'

// // function Header() {
// //   return (
// //     <>
// //     {/* // <Navbar bg="light" expand="lg">
// //     //   <Container>
// //     //     <Navbar.Brand href="/">
// //     //       <img
// //     //         src="/images/logo_new.png" // Replace with your logo path
// //     //         alt="IJESTM Logo"
// //     //         width="40"
// //     //         height="40"
// //     //         className="d-inline-block align-top"
// //     //       />
// //     //       {' '}
// //     //     </Navbar.Brand>
// //     //     <h1 className='title'>International Journal of Engineering, Science Technology and Management</h1>
// //     //     <p className='subtitle'>A Widely Indexed Open Access Peer Reveiwed Multidisceplinary Internation Journal</p>
// //     //   </Container>

// //     //   <Container>
        
// //     //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
// //     //     <Navbar.Collapse id="basic-navbar-nav">
// //     //       <Nav className="ms-auto">
// //     //         <Nav.Link href="/">Home</Nav.Link>
// //     //         <Nav.Link href="/aim-scope">Aim & Scope</Nav.Link>
// //     //         <Nav.Link href="/editorial-team">Editorial Team</Nav.Link>
// //     //         <Nav.Link href="/submissions">Submissions</Nav.Link>
// //     //         <Nav.Link href="/current">Current</Nav.Link>
// //     //         <Nav.Link href="/archives">Archives</Nav.Link>
// //     //         <Nav.Link href="/indexing">Indexing</Nav.Link>
// //     //         <Nav.Link href="/publication-ethics">Publication Ethics</Nav.Link>
// //     //         <Nav.Link href="/contact-us">Contact Us</Nav.Link>
            
// //     //       </Nav>
// //     //     </Navbar.Collapse>
// //     //   </Container>
// //     // </Navbar> */}
// //     {/* First Container - Logo, Title, and Subtitle */}
// //     {/* <div className="header-top">
// //     <Container>
// //       <Navbar.Brand href="/">
// //         <img
// //           src="/images/logo_new.png" // Replace with your logo path
// //           alt="IJESTM Logo"
// //           width="40"
// //           height="40"
// //           className="d-inline-block align-top"
// //         />
// //       </Navbar.Brand>
// //       <div className="header-text">
// //         <h1 className="title">International Journal of Engineering, Science Technology and Management</h1>
// //         <p className="subtitle">A Widely Indexed Open Access Peer Reviewed Multidisciplinary International Journal</p>
// //       </div>
// //     </Container>
// //   </div> */}

// //   {/* Second Container - Navigation Menu */}
// //   {/* <div className="header-bottom">
// //     <Container>
// //       <Navbar bg="light" expand="lg">
// //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
// //         <Navbar.Collapse id="basic-navbar-nav">
// //           <Nav className="ms-auto">
// //             <Nav.Link href="/">Home</Nav.Link>
// //             <Nav.Link href="/aim-scope">Aim & Scope</Nav.Link>
// //             <Nav.Link href="/editorial-team">Editorial Team</Nav.Link>
// //             <Nav.Link href="/submissions">Submissions</Nav.Link>
// //             <Nav.Link href="/current">Current</Nav.Link>
// //             <Nav.Link href="/archives">Archives</Nav.Link>
// //             <Nav.Link href="/indexing">Indexing</Nav.Link>
// //             <Nav.Link href="/publication-ethics">Publication Ethics</Nav.Link>
// //             <Nav.Link href="/contact-us">Contact Us</Nav.Link>
// //           </Nav>
// //         </Navbar.Collapse>
// //       </Navbar>
// //     </Container>
// //   </div> */}


// //     {/* First Container - Logo on the left, Title and Subtitle on the right */}
// //     {/* <div className="header-top">
// //         <Container>
// //           <Row className="d-flex align-items-center justify-conent-spacebetween">
// //             <Col xs="auto">
// //               <Navbar.Brand href="/">
// //                 <img
// //                   src="/images/logo_new.png" // Replace with your logo path
// //                   alt="IJESTM Logo"
// //                   width="200"
// //                 //   height="200"
// //                   className="d-inline-block align-top"
// //                 />
// //               </Navbar.Brand>
// //             </Col>
// //             <Col>
// //               <div className="header-text">
// //                 <h1 className="title">International Journal of Engineering, Science Technology and Management</h1>
// //                 <p className="subtitle">A Widely Indexed Open Access Peer Reviewed Multidisciplinary International Journal</p>
// //               </div>
// //             </Col>
// //           </Row>
// //         </Container>
// //       </div> */}

// //       {/* Second Container - Centered Navigation Menu */}
// //       {/* <div className="header-bottom">
// //         <Container>
// //           <Navbar bg="light" expand="lg" className="d-flex justify-content-center align-items-center">
// //             <Navbar.Toggle aria-controls="basic-navbar-nav" />
// //             <Navbar.Collapse id="basic-navbar-nav">
// //               <Nav>
// //                 <Nav.Link className='nav-link' href="/">Home</Nav.Link>
// //                 <Nav.Link className='nav-link' href="/aim-scope">Aim & Scope</Nav.Link>
// //                 <Nav.Link className='nav-link' href="/editorial-team">Editorial Team</Nav.Link>
// //                 <Nav.Link className='nav-link' href="/submissions">Submissions</Nav.Link>
// //                 <Nav.Link className='nav-link' href="/current">Current</Nav.Link>
// //                 <Nav.Link className='nav-link' href="/archives">Archives</Nav.Link>
// //                 <Nav.Link className='nav-link' href="/indexing">Indexing</Nav.Link>
// //                 <Nav.Link className='nav-link' href="/publication-ethics">Publication Ethics</Nav.Link>
// //                 <Nav.Link className='nav-link' href="/contact-us">Contact Us</Nav.Link>
// //               </Nav>
// //             </Navbar.Collapse>
// //           </Navbar>
// //         </Container>
// //       </div> */}

// //   </>
// //   );
// // }

// // const linkStyle = {
// //     color: 'white',
// //     padding: '10px 20px',
// //     backgroundColor: '#006FCC', // Button background color
// //     borderRadius: '10px',
// //     margin: '0 10px',
// //     textDecoration: 'none',
// //     fontWeight: 'bold'
// //   };

// // export default Header;


import React, { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 980);

  useEffect(() => {
    const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 980);
    };

    window.addEventListener('resize', handleResize);
    return () => {
        window.removeEventListener('resize', handleResize); // Cleanup listener on component unmount
    };
  }, []);

  if (isSmallScreen) {
    return (
      <Navbar style={{display: 'flex', flexDirection: 'column'}} expand="lg" className="bg-body-tertiary">
      <Container style={{display: 'flex',}}>
        <Navbar.Brand href="#home">
          
        <img
          src="/images/logo_new.png" // Replace with your logo path
          alt="IJESTM Logo"
          width="200"
          className="d-inline-block align-top"
        />
        </Navbar.Brand>
        
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link style={{ backgroundColor: '#003366', color: 'white', border: '1px solid white', borderRadius: isSmallScreen ? '0px' : '8px', padding: '10px'}} href="/">Home</Nav.Link>
              <Nav.Link style={{ backgroundColor: '#003366', color: 'white', border: '1px solid white', borderRadius: isSmallScreen ? '0px' : '8px', padding: '10px'}} href="/aim-scope">Aim & Scope</Nav.Link>
              <Nav.Link style={{ backgroundColor: '#003366', color: 'white', border: '1px solid white', borderRadius: isSmallScreen ? '0px' : '8px', padding: '10px'}} href="/editorial-team">Editorial Team</Nav.Link>
              <Nav.Link style={{ backgroundColor: '#003366', color: 'white', border: '1px solid white', borderRadius: isSmallScreen ? '0px' : '8px', padding: '10px'}} href="/submissions">Submissions</Nav.Link>
              <Nav.Link style={{ backgroundColor: '#003366', color: 'white', border: '1px solid white', borderRadius: isSmallScreen ? '0px' : '8px', padding: '10px'}} href="/current">Current</Nav.Link>
              <Nav.Link style={{ backgroundColor: '#003366', color: 'white', border: '1px solid white', borderRadius: isSmallScreen ? '0px' : '8px', padding: '10px'}} href="/archives">Archives</Nav.Link>
              <Nav.Link style={{ backgroundColor: '#003366', color: 'white', border: '1px solid white', borderRadius: isSmallScreen ? '0px' : '8px', padding: '10px'}} href="/indexing">Indexing</Nav.Link>
              <Nav.Link style={{ backgroundColor: '#003366', color: 'white', border: '1px solid white', borderRadius: isSmallScreen ? '0px' : '8px', padding: '10px'}} href="/publication-ethics">Publication Ethics</Nav.Link>
              <Nav.Link style={{ backgroundColor: '#003366', color: 'white', border: '1px solid white', borderRadius: isSmallScreen ? '0px' : '8px', padding: '10px'}} href="/contact-us">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse> 
      </Container>
    </Navbar>
    );
  }
  return (
    <Navbar style={{display: 'flex', flexDirection: 'column'}} expand="lg" className="bg-body-tertiary">
      <Container style={{display: 'flex',}}>
        <Navbar.Brand href="#home">
          
        <img
          src="/images/logo_new.png" // Replace with your logo path
          alt="IJESTM Logo"
          width="200"
          // height="40"
          className="d-inline-block align-top"
        />
        </Navbar.Brand>
        
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link style={{ backgroundColor: '#003366', color: 'white', border: '1px solid white', borderRadius: isSmallScreen ? '0px' : '8px', padding: '10px'}} href="/">Home</Nav.Link>
              <Nav.Link style={{ backgroundColor: '#003366', color: 'white', border: '1px solid white', borderRadius: isSmallScreen ? '0px' : '8px', padding: '10px'}} href="/aim-scope">Aim & Scope</Nav.Link>
              <Nav.Link style={{ backgroundColor: '#003366', color: 'white', border: '1px solid white', borderRadius: isSmallScreen ? '0px' : '8px', padding: '10px'}} href="/editorial-team">Editorial Team</Nav.Link>
              <Nav.Link style={{ backgroundColor: '#003366', color: 'white', border: '1px solid white', borderRadius: isSmallScreen ? '0px' : '8px', padding: '10px'}} href="/submissions">Submissions</Nav.Link>
              <Nav.Link style={{ backgroundColor: '#003366', color: 'white', border: '1px solid white', borderRadius: isSmallScreen ? '0px' : '8px', padding: '10px'}} href="/current">Current</Nav.Link>
              <Nav.Link style={{ backgroundColor: '#003366', color: 'white', border: '1px solid white', borderRadius: isSmallScreen ? '0px' : '8px', padding: '10px'}} href="/archives">Archives</Nav.Link>
              <Nav.Link style={{ backgroundColor: '#003366', color: 'white', border: '1px solid white', borderRadius: isSmallScreen ? '0px' : '8px', padding: '10px'}} href="/indexing">Indexing</Nav.Link>
              <Nav.Link style={{ backgroundColor: '#003366', color: 'white', border: '1px solid white', borderRadius: isSmallScreen ? '0px' : '8px', padding: '10px'}} href="/publication-ethics">Publication Ethics</Nav.Link>
              <Nav.Link style={{ backgroundColor: '#003366', color: 'white', border: '1px solid white', borderRadius: isSmallScreen ? '0px' : '8px', padding: '10px'}} href="/contact-us">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>  */}
        
        <h1  style={{ textAlign: 'center', fontSize: '33px'}}>International Journal of Engineering, Science, Technology <br /> and Manangement</h1>
      </Container>

      <hr style={{color: 'gray'}}/>
      <div style={{height: '10px'}}></div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* <Nav className="me-auto" style={{display: 'flex',alignItems: 'center', justifyContent: 'space-evenly'}}> */}
          <Nav className="me-auto" style={{display: 'flex',alignItems: 'center', justifyContent: 'space-evenly'}}>
            <Nav.Link style={{ backgroundColor: '#003366', color: 'white', border: '1px solid white', marginLeft: isSmallScreen ? '0px' : '10px', borderRadius: isSmallScreen ? '0px' : '8px', padding: '10px'}} href="/">Home</Nav.Link>
            <Nav.Link style={{ backgroundColor: '#003366', color: 'white', border: '1px solid white', marginLeft: isSmallScreen ? '0px' : '10px', borderRadius: isSmallScreen ? '0px' : '8px', padding: '10px'}} href="/aim-scope">Aim & Scope</Nav.Link>
            <Nav.Link style={{ backgroundColor: '#003366', color: 'white', border: '1px solid white', marginLeft: isSmallScreen ? '0px' : '10px', borderRadius: isSmallScreen ? '0px' : '8px', padding: '10px'}} href="/editorial-team">Editorial Team</Nav.Link>
            <Nav.Link style={{ backgroundColor: '#003366', color: 'white', border: '1px solid white', marginLeft: isSmallScreen ? '0px' : '10px', borderRadius: isSmallScreen ? '0px' : '8px', padding: '10px'}} href="/submissions">Submissions</Nav.Link>
            <Nav.Link style={{ backgroundColor: '#003366', color: 'white', border: '1px solid white', marginLeft: isSmallScreen ? '0px' : '10px', borderRadius: isSmallScreen ? '0px' : '8px', padding: '10px'}} href="/current">Current</Nav.Link>
            <Nav.Link style={{ backgroundColor: '#003366', color: 'white', border: '1px solid white', marginLeft: isSmallScreen ? '0px' : '10px', borderRadius: isSmallScreen ? '0px' : '8px', padding: '10px'}} href="/archives">Archives</Nav.Link>
            <Nav.Link style={{ backgroundColor: '#003366', color: 'white', border: '1px solid white', marginLeft: isSmallScreen ? '0px' : '10px', borderRadius: isSmallScreen ? '0px' : '8px', padding: '10px'}} href="/indexing">Indexing</Nav.Link>
            <Nav.Link style={{ backgroundColor: '#003366', color: 'white', border: '1px solid white', marginLeft: isSmallScreen ? '0px' : '10px', borderRadius: isSmallScreen ? '0px' : '8px', padding: '10px'}} href="/publication-ethics">Publication Ethics</Nav.Link>
            <Nav.Link style={{ backgroundColor: '#003366', color: 'white', border: '1px solid white', marginLeft: isSmallScreen ? '0px' : '10px', borderRadius: isSmallScreen ? '0px' : '8px', padding: '10px'}} href="/contact-us">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
// // import logo from './logo.svg';
// import './App.css';
// import Index from './pages';
// import { useEffect } from "react";
// import {
//   Routes,
//   Route,
//   useNavigationType,
//   useLocation,
// } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';


// function App() {
//   // const action = useNavigationType();
//   // const location = useLocation();
//   // const pathname = location.pathname;

//   // useEffect(() => {
//   //   if (action !== "POP") {
//   //     window.scrollTo(0, 0);
//   //   }
//   // }, [action, pathname]);

//   // useEffect(() => {
//   //   let title = "";
//   //   let metaDescription = "";

//   //   switch (pathname) {
//   //     case "/":
//   //       title = "";
//   //       metaDescription = "";
//   //       break;
//   //     case "/publications-page":
//   //       title = "";
//   //       metaDescription = "";
//   //       break;
//   //     case "/contact-us-page":
//   //       title = "";
//   //       metaDescription = "";
//   //       break;
//   //     case "/submit-paper-page":
//   //       title = "";
//   //       metaDescription = "";
//   //       break;
//   //     case "/home-page":
//   //       title = "";
//   //       metaDescription = "";
//   //       break;
//   //   }

//   //   if (title) {
//   //     document.title = title;
//   //   }

//   //   if (metaDescription) {
//   //     const metaDescriptionTag = document.querySelector(
//   //       'head > meta[name="description"]'
//   //     );     
//   //     if (metaDescriptionTag) {         
//   //           metaDescriptionTag.content = metaDescription;       
//   //       }
//   //   }              
//   // }, [pathname]);
//   return (
//     // <div className="App">
//     //   {/* <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header> */}
//       <Index/>
//     // </div>
//     // <Routes>
//     //   <Route path="/" element={<Index />} />  
//     //   <Route path="/publications-page" element={<Index />} />
//     //   <Route path="/contact-us-page" element={<Index />} />
//     //   <Route path="/submit-paper-page" element={<Index />} />
//     //   <Route path="/submit-paper-page-new" element={<Index />} />
//     //   <Route path="/current" element={<Index />} />

//     //   <Route path="/paper-detail-page" element={<Index />} />
//     //   <Route path="/aim-scope-page" element={<Index/>} />
//     //   <Route path="/editorial-team-page" element={<Index />} />

//     //   <Route path="/admin-panel" element={<Index />} />
      
//     // </Routes>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import BasicExample from './BasicExample'; // Import the Navbar component
import Home from './pages/index';
import AimScope from './pages/AimScope';
import EditorialTeam from './pages/EditorialTeam';
// import Submissions from './pages/Submissions';
import Submissions from './pages/Submissions';
import Current from './pages/Current';
import Archives from './pages/Archives';
import Indexing from './pages/Indexing';
import PublicationEthics from './pages/PublicationEthics';
import ContactUs from './pages/ContactUs';
import Header from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import PaperDetailPage from './pages/PaperDetailPage';



function App() {
  return (
    <Router>
      <div>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aim-scope" element={<AimScope />} />
          <Route path="/editorial-team" element={<EditorialTeam />} />
          <Route path="/submissions" element={<Submissions />} />
          <Route path="/current" element={<Current />} />
          <Route path="/archives" element={<Archives />} />
          <Route path="/indexing" element={<Indexing />} />
          <Route path="/publication-ethics" element={<PublicationEthics />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/paper-detail-page" element={<PaperDetailPage />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;

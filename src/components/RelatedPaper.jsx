// import React, { useEffect, useState } from "react";
// import { useNavigate } from 'react-router-dom';
// import { db } from "../backend/firebase";
// import { collection, getDocs } from "firebase/firestore/lite";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
// import styles from "./FrameComponent3.module.css";

// const RelatedPapersComponent = ({paper, className = "" }) => {
//   const [relatedPapers, setRelatedPapers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [currentTitle, setCurrentTitle] = useState("");  // local state for title
//   const [currentKeywords, setCurrentKeywords] = useState("");  // local state for keywords
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchRelatedPapers = async () => {
//       try {
//         setLoading(true);
//         const papersData = [];
//         const volumesCollectionRef = collection(db, "PapersCollection");
//         const volumesSnapshot = await getDocs(volumesCollectionRef);
  
//         setCurrentTitle(paper.title);
//         setCurrentKeywords(paper.keywords);
  
//         await Promise.all(
//           volumesSnapshot.docs.map(async (volumeDoc) => {
//             const volumeId = volumeDoc.id;
//             const issues = ["Issue1", "Issue2", "Issue3", "Issue4"];
  
//             await Promise.all(
//               issues.map(async (issue) => {
//                 const issueRef = collection(db, "PapersCollection", volumeId, issue);
//                 const issueSnapshot = await getDocs(issueRef);
  
//                 issueSnapshot.forEach((paperDoc) => {
//                   const paperData = paperDoc.data();
//                   const paperId = paperDoc.id;
  
//                   const currentKeywordsArray = currentKeywords.split(',')
//                     .map(keyword => keyword.trim().toLowerCase());
//                   const paperDataKeywordsLower = (paperData.keywords || "").toLowerCase();
//                   const keywordMatches = currentKeywordsArray.some(keyword => paperDataKeywordsLower.includes(keyword));
  
//                   if (keywordMatches && paperId !== paper.id) {
//                     papersData.push({
//                       ...paperData,
//                       id: paperId
//                     });
//                   }
//                 });
//               })
//             );
//           })
//         );
  
//         setRelatedPapers(papersData);
//       } catch (error) {
//         console.error("Error fetching related papers: ", error);
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     fetchRelatedPapers();
//   }, [currentTitle, currentKeywords, paper]);
  

//   const handlePaperClick = (paper) => {
//     navigate('/paper-detail-page', { state: { paper } });
//   }

//   return (
//     <section style={{ width: '100%' , display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} className={[styles.relatedPapersSection, className].join(" ")}>
//         <h3>{relatedPapers.length > 0 && !loading ? 'You may also like these articles' : ''}</h3>

//       <div style={{
//           display: relatedPapers.length > 0 ? "grid" : "flex",
//           gridTemplateColumns: "repeat(2, 1fr)",
//           gap: "30px",
//         }}>
//         {loading ? <center>Loading...</center> : ""}
//         {relatedPapers.length > 0 && !loading ? (
//           relatedPapers.map((paper) => (
            
//             <div
//               key={paper.id}
//               onClick={() => {
//                 handlePaperClick(paper)
//             }} 
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.boxShadow = '0px 0px 8px grey';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.boxShadow = '0px 0px 6px lightGrey';
//               }}
//               style={{
//                 cursor: 'pointer',
//                 boxShadow: '0px 0px 6px lightGrey',
//                 borderTop: '4px solid #003366',
//                 marginBottom: '16px',
//                 borderRadius: '4px',
//                 padding: '16px',
//                 transition: 'width 0.3s ease, height 0.3s ease',
//               }}
//             >
//               <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//                 <a
//                   style={{
//                     fontFamily: 'Metrophobic, Forum, Helvetica, Ubuntu, Arial, sans-serif',
//                     fontSize: '25px',
//                     display: '-webkit-box',
//                     WebkitBoxOrient: 'vertical',
//                     WebkitLineClamp: 2,
//                     overflow: 'hidden',
//                     textOverflow: 'ellipsis',
//                     lineHeight: '1.2em',
//                     maxHeight: '2.4em'
//                   }}
//                   href={paper.fileURL}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   {paper.title}
//                 </a>
//               </div>
//               <div style={{ height: '20px' }}></div>
//               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                 <div>
//                   <div style={{ display: 'flex', alignItems: 'center' }}>
//                     <b style={{ fontSize: '16px', marginRight: '5px' }}>Author(s):</b>
//                     <b style={{ fontSize: '16px', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
//                       Dr. {paper.author.name}
//                     </b>
//                   </div>
//                   <div><b style={{ fontSize: '16px' }}>Country:</b> <b style={{ fontSize: '16px' }}>India</b></div>
//                   <div><b style={{ fontSize: '16px' }}>Research Area:</b> <b style={{ fontSize: '16px' }}>{paper.researchArea}</b></div>
//                 </div>
//                 <span style={{ width: '25%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="pdf-link">
//                   <a href={paper.fileURL} style={{ backgroundColor: '#D9E3F0', borderRadius: '4px', padding: '8px 16px', textDecoration: 'none', color: 'black', fontSize: '12px' }} target="_blank" rel="noopener noreferrer">
//                     <FontAwesomeIcon icon={faFilePdf} color='red' />
//                     &nbsp;View PDF
//                   </a>
//                 </span>
//               </div>
//               <div style={{ height: '10px' }}></div>
//               <hr style={{ width: '50%' }} />
//               <div style={{ height: '10px' }}></div>
//             </div>
//           ))
//         ) : (
//           !loading && 'No related papers found'
//         )}
        
//       </div>
//       <div style={{ height: '50px'}}></div>
//     </section>
//   );
// };

// export default RelatedPapersComponent;

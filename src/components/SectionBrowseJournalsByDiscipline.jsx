// import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
// import { useNavigate } from 'react-router-dom';
// import { db } from '../backend/firebase'; 
// import { collection, getDocs, doc, getDoc, query } from "firebase/firestore/lite";
// // import styles from "./FrameComponent3.module.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

// const SectionBrowseJournalsByDiscipline = ({ className = "" }) => {
//   const [areas, setAreas] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [loading2, setLoading2] = useState(false); // Change default to false
//   // const [loading3, setLoading3] = useState(true); 

//   const [papers, setPapers] = useState([]);

//   const [paperId, setPaperId] = useState([]);

//   const [selectedArea, setSelectedArea] = useState('');
//   const navigate = useNavigate();


//   useEffect(() => {
//     const fetchAreas = async () => {
//       try {
//         const docRef = doc(db, "Research_Areas", "research_areas");
//         const docSnap = await getDoc(docRef);
//         if (docSnap.exists()) {
//           setAreas(docSnap.data().areas);
//         } else {
//           console.log("No such document!");
//         }
//       } catch (error) {
//         console.error("Error fetching document: ", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAreas();
//   }, []);

//   const fetchPapersByArea = async (area) => {
//     try {
//       setLoading2(true);
//       const papersData = [];
//       const volumesCollectionRef = collection(db, "PapersCollection");
//       const volumesSnapshot = await getDocs(volumesCollectionRef);

//       // Use Promise.all to wait for all issue fetches to complete
//       await Promise.all(
//         volumesSnapshot.docs.map(async (volumeDoc) => {
//           const volumeId = volumeDoc.id;
//           const issues = ["Issue1", "Issue2", "Issue3", "Issue4"];

//           // await Promise.all(
//           //   issues.map(async (issue) => {
//           //     const issueRef = collection(db, "PapersCollection", volumeId, issue);
//           //     const issueSnapshot = await getDocs(issueRef);
              
//           //     issueSnapshot.forEach((paperDoc) => {
//           //       const paperData = paperDoc.data();
//           //       if (paperData.researchArea === area) {
//           //         papersData.push({ id: paperDoc.id, ...paperData });
//           //       }
//           //     });
//           //   })
//           // );
//           await Promise.all(
//             issues.map(async (issue) => {
//               const issueRef = collection(db, "PapersCollection", volumeId, issue);
//               // const q = query(issueRef, limit(8));

//               // const issueSnapshot = await getDocs(q);
//               const issueSnapshot = await getDocs(issueRef);
              
//               issueSnapshot.forEach((paperDoc) => {
//                 const paperData = paperDoc.data();
//                 const paperId = paperDoc.id; // Get the ID of the current document
          
//                 // Only add if the research area matches
//                 if (paperData.researchArea === area) {
//                   console.log(paperId)
//                   papersData.push({
//                     ...paperData,             // Spread the existing paper data
//                     id: paperId               // Add the document ID
//                   });
//                 }
//               });
//             })
//           );
//         })
//       );

//       setPapers(papersData.slice(0, 8));
//       setSelectedArea(area);
//     } catch (error) {
//       console.error("Error fetching papers: ", error);
//     } finally {
//       setLoading2(false);
//     }
//   };

  

//   const handlePaperClick = (paper) => {
//     console.log('clicked')
//     console.log(paperId);
//     navigate('/paper-detail-page', { state: { paper } })
//   }

//   return (
//     <section style={{ width: '100%' }} className={{}}>
//       <div style={{ width: '80%' }} className={{}}>
//         <div className={{}}>
//           <div className={{}} />
//         </div>
//         <div className={{}}>
//           <div className={{}}>
//             {/* <h1 className={styles.browseJournalsBy}>
//               Browse journals by discipline
//             </h1> */}
//             <h2>Browse journals by discipline</h2>
//           </div>
//           <div
//             className={{}}
//             style={{
//               width: "100%",
//               display: "flex",
//               alignItems: "center",
//               flexWrap: "wrap",
//             }}
//           >
//             {loading ? <center>Loading...</center> : ""}
//             {areas.map((area, index) => (
//               <div
//                 key={index}
//                 className="cardsContainer"
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.width = "210px";
//                   e.currentTarget.style.height = "110px";
//                   e.currentTarget.style.boxShadow = "0px 0px 8px grey";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.width = "200px";
//                   e.currentTarget.style.height = "100px";
//                   e.currentTarget.style.boxShadow = "0px 0px 6px lightGrey";
//                 }}
//                 onClick={() => fetchPapersByArea(area)}
//                 style={{
//                   cursor: "pointer",
//                   boxShadow: "0px 0px 6px lightGrey",
//                   borderTop: "4px solid #003366",
//                   width: "200px",
//                   height: "100px",
//                   borderRadius: "2px",
//                   transition: "width 0.3s ease, height 0.3s ease",
//                 }}
//               >
//                 <div style={{ padding: "10px" }} />
//                 <div>
//                   <p>{area}</p>
//                   <hr style={{ width: "60%" }} />
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
//             <h2>{selectedArea ? `Papers in ${selectedArea}` : !loading ? "Select a discipline to see papers" : ""}</h2>
//             <div style={{
//                 display: papers.length > 2 ? "grid" : "block",
//                 gridTemplateColumns: "repeat(2, 1fr)",
//                 gap: "30px",
//               }}>
//               {loading2 ? <center>Loading...</center> : ""}
//               {papers.length > 0 && !loading2 ? (
//                 papers.map((paper) => (
//                   <div
//                     key={paper.id}
//                     onClick={() => handlePaperClick(paper)} // Update to handle click
//                     onMouseEnter={(e) => {
//                       e.currentTarget.style.boxShadow = '0px 0px 8px grey';
//                     }}
//                     onMouseLeave={(e) => {
//                       e.currentTarget.style.boxShadow = '0px 0px 6px lightGrey';
//                     }}
//                     style={{
//                       cursor: 'pointer',
//                       boxShadow: '0px 0px 6px lightGrey',
//                       borderTop: '4px solid #003366',
//                       marginBottom: '16px',
//                       borderRadius: '4px',
//                       padding: '16px',
//                       transition: 'width 0.3s ease, height 0.3s ease',
//                     }}
//                   >
//                     <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//                       <p
//                         style={{
//                           fontFamily: 'Metrophobic, Forum, Helvetica, Ubuntu, Arial, sans-serif',
//                           fontSize: '25px',
//                           display: '-webkit-box',
//                           WebkitBoxOrient: 'vertical',
//                           WebkitLineClamp: 2,
//                           overflow: 'hidden',
//                           textOverflow: 'ellipsis',
//                           lineHeight: '1.2em',
//                           maxHeight: '2.4em'
//                         }}
//                         // href={paper.fileURL}
//                         // target="_blank"
//                         // rel="noopener noreferrer"
//                       >
//                         {paper.title}
//                       </p>
//                     </div>
//                     <div style={{ height: '20px' }}></div>
//                     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                       <div>
//                         <div style={{ display: 'flex', alignItems: 'center' }}>
//                           <b style={{ fontSize: '16px', marginRight: '5px' }}>Author(s):</b>
//                           <b style={{ fontSize: '16px', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
//                             {/* Dr. {paper.author.name} */}
//                             {/* <div><b>Author(s):</b> */}
//                             {paper.authors.map((author, index) => (
//                                   <span> Dr. {author.name}, </span>
//                             ))}
//                             {/* </b> */}
//                       {/* </div> */}
//                           </b>
//                         </div>
//                         <div><b style={{ fontSize: '16px' }}>Country:</b> <b style={{ fontSize: '16px' }}>India</b></div>
//                         <div><b style={{ fontSize: '16px' }}>Research Area:</b> <b style={{ fontSize: '16px' }}>{paper.researchArea}</b></div>
//                       </div>
//                       {/* <span style={{ width: '25%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="pdf-link">
//                         <a href={paper.fileURL} style={{ backgroundColor: '#D9E3F0', borderRadius: '4px', padding: '8px 16px', textDecoration: 'none', color: 'black', fontSize: '12px' }} target="_blank" rel="noopener noreferrer">
//                           <FontAwesomeIcon icon={faFilePdf} color='red' />
//                           &nbsp;View PDF
//                         </a>
//                       </span> */}
//                       <span 
//                       onMouseEnter={(e) => {
//                         e.currentTarget.style.border = '1px solid lightGrey';
//                       }} 
//                       onMouseLeave={(e) => {
//                         e.currentTarget.style.border = 'none';
//                       }}
//                       onClick={(e) =>{
//                           e.stopPropagation(); // Prevents the parent div's onClick from being triggered
//                           window.open(paper.fileURL, '_blank', 'noopener,noreferrer');
//                       }}
//                       style={{
//                         backgroundColor: '#D9E3F0',
//                         borderRadius: '4px', 
//                         padding: '8px 16px', 
//                         textDecoration: 'none', 
//                         color: 'black',
//                         fontSize: '14px'
//                       }}
//                       className="pdf-lin">
//                       <p
//                       // href={paper.fileURL} 
//                       // style={{ backgroundColor: '#D9E3F0', borderRadius: '4px', padding: '8px 16px', textDecoration: 'none', color: 'black'}} 
//                       style={{ fontSize: '12px', fontWeight: 'bold'}}
//                       target="_blank" rel="noopener noreferrer">
//                         <FontAwesomeIcon icon={faFilePdf} color='red'/>
//                         &nbsp;View PDF
//                       </p>
//                     </span>
//                     </div>
//                     <div style={{ height: '10px' }}></div>
//                     <hr style={{ width: '50%' }} />
//                     <div style={{ height: '10px' }}></div>
//                   </div>
//                 ))
//               ) : (
//                 !loading2 && selectedArea ? 'No papers found' : ''
//               )}
//             </div>
//           </div>
//         </div>
//         <div className={{}}>
//           <div className={{}} />
//         </div>
//       </div>
//     </section>
//   );
// };

// SectionBrowseJournalsByDiscipline.propTypes = {
//   className: PropTypes.string,
// };

// export default SectionBrowseJournalsByDiscipline;
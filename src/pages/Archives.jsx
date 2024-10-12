import React, { useEffect, useState } from 'react';
import { collection, getDocs, doc, getDoc } from "firebase/firestore/lite";
import { db } from "../backend/firebase"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header';
import '../css/Archives.css';
import AuthorsDesk from '../components/AuthorsDesk';

const ArchivesPage = () => {
  const [volumes, setVolumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);


  const [currentData, setCurrentData] = useState(null);
  const [papers, setPapers] = useState([]);

  const [selectedPapers, setSelectedPapers] = useState([]);
  const [selectedVolumeId, setSelectedVolumeId] = useState('');
  const [selectedIssueId, setSelectedIssueId] = useState('');
  const [expandedPapers, setExpandedPapers] = useState({});

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
  
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup listener on component unmount
    };
  }, []);

  useEffect(() => {
    const fetchDataCurrent = async () => {
      try {
        // Fetch current document
        const currentDoc = await getDoc(doc(db, 'Current', 'current'));
        const currentData = currentDoc.data();
        setCurrentData(currentData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchDataCurrent();
  }, []);

  const volume = currentData?.volume || '1'; // Use default values if needed
  const issue = currentData?.issue || '1'; // Us

  const generateIssueList = (currentVolume, currentIssue) => {
    const currentYear = new Date().getFullYear();

    const issues = ['Issue1', 'Issue2', 'Issue3', 'Issue4']; // Example issues
    const dateRanges = [`January-March ${currentYear}`, `April-June ${currentYear}`, `July-September ${currentYear}`, `October-December ${currentYear}`]; // Example date ranges
  
    const issueList = [];
  
    for (let volume = 1; volume <= currentVolume; volume++) {
      for (let issue = 1; issue <= (volume === currentVolume ? currentIssue : issues.length); issue++) {
        issueList.push({
          issueId: issues[issue - 1], // -1 because array is 0-indexed
          dateRange: dateRanges[issue - 1] // -1 because array is 0-indexed
        });
      }
    }
  
    return issueList;
  };

  const issuesList = generateIssueList(volume, issue);

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      // Fetch volumes collection
      const volumesCollectionRef = collection(db, 'PapersCollection');
      const volumesSnapshot = await getDocs(volumesCollectionRef);

      const volumesData = await Promise.all(volumesSnapshot.docs.map(async (volumeDoc) => {
        const volumeId = volumeDoc.id;

        // Fetch issues for each volume
        const issuesData = await fetchIssues(volumeId);

        return {
          volumeId,
          issues: issuesData
        };
      }));

      setVolumes(volumesData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const fetchIssues = async (volumeId) => {
    try {
      const issuesData = [];
      const volumeRef = doc(db, 'PapersCollection', volumeId);
      const issueNames = ['Issue1', 'Issue2', 'Issue3', 'Issue4']; // List of issue names

      for (const issueName of issueNames) {
        const papersData = await fetchPapers(volumeId, issueName);
        issuesData.push({
          issueId: issueName,
          papers: papersData
        });
      }

      return issuesData;
    } catch (error) {
      console.error(`Error fetching issues for volume ${volumeId}: `, error);
      return [];
    }
  };

  const fetchPapers = async (volumeId, issueId) => {
    try {
      const papersData = [];
      const issueRef = collection(db, 'PapersCollection', volumeId, issueId);
      const papersSnapshot = await getDocs(issueRef);

      papersSnapshot.forEach((paperDoc) => {
        papersData.push({ id: paperDoc.id, ...paperDoc.data() });
      });

      return papersData;
    } catch (error) {
      console.error(`Error fetching papers for issue ${issueId} in volume ${volumeId}: `, error);
      return [];
    }
  };

  const handleIssueClick = async (volumeId, issueId) => {
    try {
      const papersData = await fetchPapers(volumeId, issueId);
      setSelectedPapers(papersData);
      setSelectedVolumeId(volumeId);
      setSelectedIssueId(issueId);
    } catch (error) {
      console.error(`Error fetching papers for issue ${issueId} in volume ${volumeId}: `, error);
    }
  };

  useEffect(() => {
    // Ensure currentData is not null or undefined and contains volume and issue
    if (currentData && currentData.volume && currentData.issue) {
      const fetchPapersOnLoad = async () => {
        try {
          const latestIssuePaperData = await fetchPapers("Volume" + currentData.volume, "Issue" + currentData.issue);
          setPapers(latestIssuePaperData);
        } catch (error) {
          console.error(`Error fetching papers for issue ${currentData.issue} in volume ${currentData.volume}: `, error);
        }
      };
  
      fetchPapersOnLoad();
    }
  }, [currentData]);
  


  
  const formatDateRange = (issueId) => {
    const dateRanges = {
      'Issue1': 'January-March 2024',
      'Issue2': 'April-June 2024',
      'Issue3': 'July-September 2024',
      'Issue4': 'October-December 2024',
      // Add more mappings here
    };
    return dateRanges[issueId] || 'Unknown Date Range';
  };

  const toggleExpand = (id) => {
    setExpandedPapers((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const renderAbstract = (abstract, id) => {
    const maxLines = 4;
    const lines = abstract.split('\n');
    const isExpanded = expandedPapers[id];

    return (
      <div>
        {lines.slice(0, isExpanded ? lines.length : maxLines).map((line, index) => (
          <p key={index}>{line}</p>
        ))}
        {lines.length > maxLines && (
          <button onClick={() => toggleExpand(id)}>
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>
        )}
      </div>
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        <Header />
        <center style={{ backgroundColor: '#D9E3F0' }}>
          <h1 style={{ paddingTop: '8px', paddingBottom: '8px' }}>Publications</h1>
        </center>
        <center>Loading...</center>
      </div>
    );
  }

  const handlePaperClick = (paper) => {
    navigate('/paper-detail-page', { state: { paper } })
  }

  const volumeNumber = currentData.volume;
  const issueNumber = currentData.issue;

  const getDateRange = (issueNumber) => {
    const dateRanges = [
      'January-March 2024', 
      'April-June 2024', 
      'July-September 2024', 
      'October-December 2024'
    ];
    return dateRanges[(issueNumber - 1) % 4] || 'Unknown Date Range';
  };

    return (
      <div>
        <Header />
        <center style={{ backgroundColor: '#D9E3F0' }}>
          <h1 style={{ paddingTop: '8px', paddingBottom: '8px' }}>Archives</h1>
        </center>
        
        <div style={{width: '100%', display: 'flex', alignItems: 'start', justifyContent: 'space-evenly'}}>
          {/* <img style={{ height: '350px'}} src="images/Frame 22.png" alt="" /> */}
          {!isSmallScreen && (
            <>
              <img style={{ height: '350px' }} src="images/Frame 22.png" alt="" />
            </>
        )}

        <center>
          {(() => {
            const items = [];
            
            for (let volume = volumeNumber; volume >= 1; volume--) {
              const maxIssues = volume == volumeNumber ? issueNumber : 4;
              
              for (let issue = maxIssues; issue >= 1; issue--) {
                items.push(
                  <div key={`${volume}-${issue}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                    <a 
                      href='#papers-index' 
                      onClick={() => handleIssueClick(volume, `Issue${issue}`)} 
                      style={{ cursor: 'pointer', color: 'blue', lineHeight: '2' }}
                    >
                      Volume {volume} Issue{issue} ({getDateRange(issue)})
                    </a>
                  </div>
                );
              }
            }
            
            return items;
          })()}
        </center>

        {!isSmallScreen && (
          <>
            <AuthorsDesk />
          </>
        )}
        </div>

        <div style={{ height: '5vh' }}></div>
        {selectedVolumeId && selectedIssueId ? (
          <div>
            <center style={{ backgroundColor: '#D9E3F0' }}>
              <h4 id="papers-index" style={{ paddingTop: '5px', paddingBottom: '5px' }}>
                {selectedVolumeId}, {selectedIssueId} ({formatDateRange(selectedIssueId)})
              </h4>
            </center>
            <div className="papers-index">
              {selectedPapers.length > 0 ? selectedPapers.map((paper) => (
                // <div className="archive-rp-info" key={paper.id} style={{ width: '50%', marginBottom: '16px', border: '1px solid gray', padding: '8px 8px 4px', borderRadius: '8px' }}>
                <div 
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0px 0px 8px grey'; //
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0px 0px 6px lightGrey';

                  }}
                  onClick={() => handlePaperClick(paper)} // Update to handle click
                  style={{
                    cursor: 'pointer', 
                    boxShadow: '0px 0px 6px lightGrey', 
                    borderTop: '4px solid #003366', 
                    width: !isSmallScreen ? '100%' : '50%', 
                    marginBottom: '16px', 
                    borderRadius: '4px', 
                    padding: '16px',
                    transition: 'width 0.3s ease, height 0.3s ease'  // Add transition for smooth animation

                  }}>

                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h4>{paper.title}</h4>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div style={{ marginRight: '5px'}}>
                    
                      <div><b>Author(s):</b>
                        {paper.authors.map((author, index) => (
                              <span> Dr. {author.name}, </span>
                        ))}
                      </div>
                      <div><b>Country:</b> India</div>
                      <div><b>Research Area:</b> {paper.researchArea}</div>
                    </div>
                    
                    <span 
                      onMouseEnter={(e) => {
                        e.currentTarget.style.border = '1px solid lightGrey';
                      }} 
                      onMouseLeave={(e) => {
                        e.currentTarget.style.border = 'none';
                      }}
                      onClick={(e) =>{
                          e.stopPropagation(); // Prevents the parent div's onClick from being triggered
                          window.open(paper.fileURL, '_blank', 'noopener,noreferrer');
                      }}
                      style={{
                        backgroundColor: '#D9E3F0',
                        borderRadius: '4px', 
                        padding: '8px 16px', 
                        textDecoration: 'none', 
                        color: 'black'
                      }}
                      className="pdf-lin">
                      <a 
                      style={{ fontSize: '12px', fontWeight: 'bold'}}
                      target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFilePdf} color='red'/>
                        &nbsp;View PDF
                      </a>
                    </span>
                  </div>
                  <div style={{height: '10px'}}></div>
                  <hr style={{ width: '50%'}} />
                  <div style={{height: '10px'}}></div>

                </div>
              ))
              :
              <center>No papers found for the selected issue.</center>
            }
            </div>
          </div>
          )
          :
          (
            <div>
              <center style={{ backgroundColor: '#D9E3F0' }}>
                <h4 id="papers-index" style={{ paddingTop: '5px', paddingBottom: '5px' }}>
                  {"Volume "+currentData.volume}, {"Issue "+currentData.issue} ({formatDateRange("Issue"+currentData.issue)})
                  {/* {console.log("Issue"+issue)} */}
                </h4>
              </center>
              <div className="papers-index" style={{ padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {papers.length > 0 ? papers.map((paper) => (
                  // <div className="archive-rp-info" key={paper.id} style={{ width: '50%', marginBottom: '16px', border: '1px solid gray', padding: '8px 8px 4px', borderRadius: '8px' }}>
                  <div 
                    onMouseEnter={(e) => {
                      // e.currentTarget.style.width = '51%';  // Increase width to 300px on hover
                      // e.currentTarget.style.height = '110px'; // Increase height to 150px on hover
                      e.currentTarget.style.boxShadow = '0px 0px 8px grey'; //
                    }}
                    onMouseLeave={(e) => {
                      // e.currentTarget.style.width = '50%';  // Reset width to 200px on mouseleave
                      // e.currentTarget.style.height = '100px'; // Reset height to 100px on mouseleave
                      e.currentTarget.style.boxShadow = '0px 0px 6px lightGrey';

                    }}
                    onClick={() => handlePaperClick(paper)} // Update to handle click
                    style={{
                      cursor: 'pointer', 
                      boxShadow: '0px 0px 6px lightGrey', 
                      borderTop: '4px solid #003366', 
                      width: '50%', 
                      marginBottom: '16px', 
                      borderRadius: '4px', 
                      padding: '16px',
                      transition: 'width 0.3s ease, height 0.3s ease'  // Add transition for smooth animation

                    }}>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      {/* <a style={{ fontFamily: 'Metrophobic, Forum, Helvetica, Ubuntu, Arial, sans-serif', fontSize: '25px' }} href={paper.fileURL} target="_blank" rel="noopener noreferrer">{paper.title}</a> */}
                      <h4>{paper.title}</h4>
                    </div>
                    {/* <div style={{height: '20px'}}></div> */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                      <div style={{ marginRight: '5px'}}>
                      
                        <div><b>Author(s):</b>
                          {paper.authors.map((author, index) => (
                                <span> Dr. {author.name}, </span>
                          ))}
                        </div>
                        <div><b>Country:</b> India</div>
                        <div><b>Research Area:</b> {paper.researchArea}</div>
                      </div>
                      
                      <span 
                        onMouseEnter={(e) => {
                          e.currentTarget.style.border = '1px solid lightGrey';
                        }} 
                        onMouseLeave={(e) => {
                          e.currentTarget.style.border = 'none';
                        }}
                        onClick={(e) =>{
                            e.stopPropagation(); // Prevents the parent div's onClick from being triggered
                            window.open(paper.fileURL, '_blank', 'noopener,noreferrer');
                        }}
                        style={{
                          backgroundColor: '#D9E3F0',
                          borderRadius: '4px', 
                          padding: '8px 16px', 
                          textDecoration: 'none', 
                          color: 'black'
                        }}
                        className="pdf-lin">
                        <a 
                        // href={paper.fileURL} 
                        // style={{ backgroundColor: '#D9E3F0', borderRadius: '4px', padding: '8px 16px', textDecoration: 'none', color: 'black'}} 
                        style={{ fontSize: '12px', fontWeight: 'bold'}}
                        target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faFilePdf} color='red'/>
                          &nbsp;View PDF
                        </a>
                      </span>
                    </div>
                    <div style={{height: '10px'}}></div>
                    <hr style={{ width: '50%'}} />
                    <div style={{height: '10px'}}></div>

                  </div>
                ))
                :
                <center>No papers found.</center>
              }
              </div>
            </div>
          )

        }
      </div>
    );
};

export default ArchivesPage;


import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { db } from "../backend/firebase";
import { collection, getDocs } from "firebase/firestore/lite";
import Header from '../components/header';
import Footer from '../components/footer';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

const PaperDetailPage = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

    // for related papers
    const [relatedPapers, setRelatedPapers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentTitle, setCurrentTitle] = useState("");  // local state for title
    const [currentKeywords, setCurrentKeywords] = useState("");  // local state for keywords
    const navigate = useNavigate();



    const location = useLocation();
    const { paper } = location.state || {};

    let formattedDate = 'Not Available';

    // Function to convert Firestore timestamp to JavaScript Date
    const convertTimestampToDate = (timestamp) => {
        if (timestamp && typeof timestamp.seconds === 'number') {
            // Create a date object from seconds and nanoseconds
            const date = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000);
            return date.toLocaleDateString(); // Format the date as needed
        }
        return 'Invalid Timestamp';
    };

    if (paper.timestamp) {
        formattedDate = convertTimestampToDate(paper.timestamp);
    }

    const authors = paper.authors.map(author => author.name).join(', ');

    const data = [
        { label: 'Author', value: authors },
        { label: 'Country', value: 'India' },
        { label: 'Abstract', value: `${paper.abstract}` },
        { label: 'Keywords', value: `${paper.keywords}` },
        { label: 'Field', value: `${paper.researchArea}` },
        { label: 'Published in', value: `Volume 6, Issue 3, May-June 2024` },
        { label: 'Published on', value: `${formattedDate}` },
        // { label: 'DOI', value: `${paper.fileURL}` },
    ];

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize); // Cleanup listener on component unmount
        };
    }, []);

    //   for related papers
    useEffect(() => {
        const fetchRelatedPapers = async () => {
            try {
                setLoading(true);
                const papersData = [];
                const volumesCollectionRef = collection(db, "PapersCollection");
                const volumesSnapshot = await getDocs(volumesCollectionRef);

                setCurrentTitle(paper.title);
                setCurrentKeywords(paper.keywords);

                await Promise.all(
                    volumesSnapshot.docs.map(async (volumeDoc) => {
                        const volumeId = volumeDoc.id;
                        const issues = ["Issue1", "Issue2", "Issue3", "Issue4"];

                        await Promise.all(
                            issues.map(async (issue) => {
                                const issueRef = collection(db, "PapersCollection", volumeId, issue);
                                const issueSnapshot = await getDocs(issueRef);

                                issueSnapshot.forEach((paperDoc) => {
                                    const paperData = paperDoc.data();
                                    const paperId = paperDoc.id;

                                    const currentKeywordsArray = currentKeywords.split(',')
                                        .map(keyword => keyword.trim().toLowerCase());
                                    const paperDataKeywordsLower = (paperData.keywords || "").toLowerCase();
                                    const keywordMatches = currentKeywordsArray.some(keyword => paperDataKeywordsLower.includes(keyword));

                                    if (keywordMatches && paperId !== paper.id) {
                                        papersData.push({
                                            ...paperData,
                                            id: paperId
                                        });
                                    }
                                });
                            })
                        );
                    })
                );

                setRelatedPapers(papersData);
            } catch (error) {
                console.error("Error fetching related papers: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRelatedPapers();
    }, [currentTitle, currentKeywords, paper]);

    const handlePaperClick = (paper) => {
        navigate('/paper-detail-page', { state: { paper } });
    }




    if (!paper) {
        return <div>Loading...</div>; // Handle loading state or no paper case
    }

    return (
        <>
            <Header />

            <div style={{ width: '100%', overflow: 'auto', marginTop: '30px', paddingLeft: isSmallScreen ? '0px' : '50px', paddingRight: isSmallScreen ? '0px' : '50px' }}>
                <h1>{paper ? paper.title : 'Loading...'}</h1>

                <table className="table" style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0 10px" }}>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td
                                    style={{
                                        width: "30%",
                                        borderRadius: "10px 0 0 10px",
                                        border: "1px solid grey",
                                        backgroundColor: "#f8f9fa",
                                        padding: "10px",
                                    }}
                                >
                                    {item.label}
                                </td>
                                <td
                                    style={{
                                        width: "70%",
                                        borderRadius: "0 10px 10px 0",
                                        border: "1px solid grey",
                                        borderLeft: 'none',
                                        backgroundColor: "#f8f9fa",
                                        padding: "10px",
                                    }}
                                >
                                    {item.value}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <center>
                    <Button>
                        <a href={paper.fileURL} target="_blank" style={{ color: 'white', textDecoration: 'none' }}>
                            <FontAwesomeIcon icon={faFilePdf} color='white' />
                            &nbsp;View/Download PDF
                        </a>
                    </Button>
                </center>

                <div style={{ height: '3vh' }}></div>
            </div>

            <hr />
            <section style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                <h3>{relatedPapers.length > 0 && !loading ? 'You may also like these articles' : ''}</h3>

                <div style={{
                    display: relatedPapers.length > 0 ? "grid" : "flex",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "30px",
                }}>
                    {loading ? <center>Loading...</center> : ""}
                    {relatedPapers.length > 0 && !loading ? (
                        relatedPapers.map((paper) => (

                            <div
                                key={paper.id}
                                onClick={() => {
                                    handlePaperClick(paper)
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.boxShadow = '0px 0px 8px grey';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.boxShadow = '0px 0px 6px lightGrey';
                                }}
                                style={{
                                    cursor: 'pointer',
                                    boxShadow: '0px 0px 6px lightGrey',
                                    borderTop: '4px solid #003366',
                                    marginBottom: '16px',
                                    borderRadius: '4px',
                                    padding: '16px',
                                    transition: 'width 0.3s ease, height 0.3s ease',
                                }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <a
                                        style={{
                                            fontFamily: 'Metrophobic, Forum, Helvetica, Ubuntu, Arial, sans-serif',
                                            fontSize: '25px',
                                            display: '-webkit-box',
                                            WebkitBoxOrient: 'vertical',
                                            WebkitLineClamp: 2,
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            lineHeight: '1.2em',
                                            maxHeight: '2.4em'
                                        }}
                                        href={paper.fileURL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {paper.title}
                                    </a>
                                </div>
                                <div style={{ height: '20px' }}></div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <b style={{ fontSize: '16px', marginRight: '5px' }}>Author(s):</b>
                                            <b style={{ fontSize: '16px', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                                Dr. {paper.author.name}
                                            </b>
                                        </div>
                                        <div><b style={{ fontSize: '16px' }}>Country:</b> <b style={{ fontSize: '16px' }}>India</b></div>
                                        <div><b style={{ fontSize: '16px' }}>Research Area:</b> <b style={{ fontSize: '16px' }}>{paper.researchArea}</b></div>
                                    </div>
                                    <span style={{ width: '25%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="pdf-link">
                                        <a href={paper.fileURL} style={{ backgroundColor: '#D9E3F0', borderRadius: '4px', padding: '8px 16px', textDecoration: 'none', color: 'black', fontSize: '12px' }} target="_blank" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon={faFilePdf} color='red' />
                                            &nbsp;View PDF
                                        </a>
                                    </span>
                                </div>
                                <div style={{ height: '10px' }}></div>
                                <hr style={{ width: '50%' }} />
                                <div style={{ height: '10px' }}></div>
                            </div>
                        ))
                    ) : (
                        !loading && 'No related papers found'
                    )}

                </div>
                <div style={{ height: '50px' }}></div>
            </section>
            <Footer />
        </>
    );
};

export default PaperDetailPage;

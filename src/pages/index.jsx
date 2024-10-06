import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { db } from "../backend/firebase";
import { collection, getDocs, doc, getDoc, query } from "firebase/firestore/lite";
import Header from '../components/header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faLanguage, faRocket, faClock, faEnvelope, faHeadset, faFilePdf } from '@fortawesome/free-solid-svg-icons';

import '../css/style.css'
import { Button, Col, Container, Row } from 'react-bootstrap';
import Footer from '../components/footer';

function Index() {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);


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

    // Browse journal by decipline
    const [areas, setAreas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loading2, setLoading2] = useState(false); // Change default to false
    const [papers, setPapers] = useState([]);
    const [paperId, setPaperId] = useState([]);
    const [selectedArea, setSelectedArea] = useState('');
    const navigate = useNavigate();

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

    const fetchPapersByArea = async (area) => {
        try {
            setLoading2(true);
            const papersData = [];
            const volumesCollectionRef = collection(db, "PapersCollection");
            const volumesSnapshot = await getDocs(volumesCollectionRef);

            // Use Promise.all to wait for all issue fetches to complete
            await Promise.all(
                volumesSnapshot.docs.map(async (volumeDoc) => {
                    const volumeId = volumeDoc.id;
                    const issues = ["Issue1", "Issue2", "Issue3", "Issue4"];

                    await Promise.all(
                        issues.map(async (issue) => {
                            const issueRef = collection(db, "PapersCollection", volumeId, issue);
                            // const q = query(issueRef, limit(8));

                            // const issueSnapshot = await getDocs(q);
                            const issueSnapshot = await getDocs(issueRef);

                            issueSnapshot.forEach((paperDoc) => {
                                const paperData = paperDoc.data();
                                const paperId = paperDoc.id; // Get the ID of the current document

                                // Only add if the research area matches
                                if (paperData.researchArea === area) {
                                    console.log(paperId)
                                    papersData.push({
                                        ...paperData,             // Spread the existing paper data
                                        id: paperId               // Add the document ID
                                    });
                                }
                            });
                        })
                    );
                })
            );

            setPapers(papersData.slice(0, 8));
            setSelectedArea(area);
        } catch (error) {
            console.error("Error fetching papers: ", error);
        } finally {
            setLoading2(false);
        }
    };

    const handlePaperClick = (paper) => {
        console.log('clicked')
        console.log(paperId);
        navigate('/paper-detail-page', { state: { paper } })
    }



    const checkScreenSize = () => {
        setIsSmallScreen(window.innerWidth <= 768);
    };

    useEffect(() => {
        window.addEventListener('resize', checkScreenSize);
        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    return (
        <>
            <Header />

            <Container fluid>
                <Row className='section1'>
                    <Col xs={12} md={9}>
                        <div className="info">
                            <h1 style={{}}>International Journal of Enginering, Science Technology and Management (IJESTM)</h1>
                            <p>
                                <span><b>International Journal of Enginerring, Science Technology and Management (IJESTM)</b></span>
                                is a leading international multi-disciplinary journal dedicated to advancing research and knowledge across various fields. With a commitment to excellence, innovation, and inclusivity, our journal serves as a platform for researchers, scholars, and professionals from diverse disciplines to share their valuable insights and discoveries. The journal accepts the original research and review articles and extended version of the conference and journal papers from Scientists, Industrialists, Academicians, Engineers and Students in all the fields of electrical and computer system designs.
                                <br />The journal has high visibility on the articles from the scientific and research communities around the world. The researchers can access the articles and utilize for the development of scientific and research proposals on engineering and technology.
                            </p>

                            <h1>Our Mission</h1>
                            <p>
                                <span><b>Foster interdisciplinary collaboration:</b></span>
                                We believe that the most groundbreaking discoveries often occur at the intersections of different disciplines. We encourage researchers to explore innovative connections between fields and promote a holistic approach to problem-solving.
                            </p>
                            <p>
                                <span><b>Disseminate high-quality research:</b></span>
                                We are committed to maintaining rigorous peer-review standards to ensure the publication of only the most credible and impactful research.
                            </p>
                            <p>
                                <span><b>Facilitate global knowledge exchange:</b></span>
                                We aim to connect researchers from around the world, fostering a global community dedicated to advancing human knowledge.
                            </p>
                        </div>
                    </Col>
                    <Col md={3} className='d-none d-md-block'>
                        <div className="author_desk_container">
                            <div className="author_desk">
                                <h1>Author Desk</h1>
                                <hr />
                                <ul>
                                    <li><a href="">Current Issue</a></li>
                                    <li><a href="">Indexing</a></li>
                                    <li><a href="">Open Access</a></li>
                                    <li><a href="">Author's Guidelines</a></li>
                                    <li><a href="">Call For Paper</a></li>
                                    <li><a href="">Online Submission</a></li>
                                    <li><a href="">Reviewer Policy</a></li>
                                    <li><a href="">Reviewer Guidelines</a></li>
                                    <li><a href="">Plagiarism Policies</a></li>
                                    <li><a href="">Withdrawal Policies</a></li>
                                </ul>


                                <button className='submit'>Submit Article</button>
                            </div>
                        </div>
                    </Col>
                </Row>

                <hr />
                <Row className='section2a'>
                    <Col xs={12} md={9}>
                        <div className="info">
                            <h1>Why Choose IJESTM?</h1>

                            <p>
                                <span><b>Peer-Reviewed Excellence:</b></span>
                                Every article submitted to [Journal Name] undergoes a rigorous peer-review process to ensure the highest quality standards.
                            </p>
                            <p>
                                <span><b>Global Reach:</b></span>
                                Our journal is read by researchers, academics, and professionals from around the world, making it an excellent platform to reach a diverse audience.
                            </p>
                            <p>
                                <span><b>Interdisciplinary Focus:</b></span>
                                IJESTM encourages cross-disciplinary collaboration, providing a unique space for innovative research.
                            </p>
                            <p>
                                <span><b>Open Access:</b></span>
                                We believe in open access to knowledge. Many of our articles are freely accessible to all, promoting the widespread dissemination of research.
                            </p>
                        </div>
                    </Col>

                    <Col md={3} className='d-none d-md-block'>
                        <div className="download_box">
                            <h1>Downloads</h1>
                            <hr />
                            <ul>
                                <li><a href="">Menuscript Template</a></li>
                                <li><a href="">Copyright Form</a></li>
                                <li><a href="">Cover Page</a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Container fluid
                    className='container'
                    style={{
                        backgroundColor: '#EFEFEF',
                        backgroundImage: isSmallScreen ? 'none' : 'url(images/image2.png)',
                        backgroundSize: 'contain', // This will make sure the image covers the entire container
                        backgroundPosition: 'right', // This centers the image
                        backgroundRepeat: 'no-repeat',
                        width: 'auto',
                        height: '300px', // Set the height to the full viewport height (optional)
                        padding: '20px',
                        borderRadius: '12px',
                        // margin: '0px 50px 0px 50px',

                    }}
                >
                    <h1><b>IJESTM</b> Open Access</h1>
                    <h3>IJESTM empowers researchers & readers through:</h3>
                    <ul>
                        <li>Open access publishing options</li>
                        <li>Open access agreements</li>
                        <li>Author support and information</li>
                    </ul>
                </Container>

                <div style={{ height: '30px' }}></div>

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
                    <h3 style={{ color: 'white' }}>{currentData != null ? formatDateRange('Issue'+currentData.issue) : ''}</h3>

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

                <hr style={{ marginTop: '50px'}}/>
                {/* Browse journals by descipline */}
                <section style={{ width: '100%' , marginTop: '30px'}}>
                    <center>
                        <div style={{ width: isSmallScreen? '100%': '90%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <h2>Browse journals by discipline</h2>
                            <div
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: 'center',
                                    flexWrap: "wrap",
                                    marginTop: '30px',
                                }}
                            >
                                {loading ? <center>Loading...</center> : ""}
                                {areas.map((area, index) => (
                                    <div
                                        key={index}
                                        // className="cardsContainer"
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.width = "210px";
                                            e.currentTarget.style.height = "110px";
                                            e.currentTarget.style.boxShadow = "0px 0px 8px grey";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.width = "200px";
                                            e.currentTarget.style.height = "100px";
                                            e.currentTarget.style.boxShadow = "0px 0px 6px lightGrey";
                                        }}
                                        onClick={() => fetchPapersByArea(area)}
                                        style={{
                                            cursor: "pointer",
                                            boxShadow: "0px 0px 6px lightGrey",
                                            borderTop: "4px solid #003366",
                                            // width: "200px",
                                            width: isSmallScreen ? "38%" : "200px", // 48% for two items in a row on small screens
                                            height: "100px",
                                            borderRadius: "2px",
                                            margin: '8px',
                                            transition: "width 0.3s ease, height 0.3s ease",
                                        }}
                                    >
                                        <div style={{ padding: "10px" }} />
                                        <div>
                                            <p>{area}</p>
                                            <hr style={{ width: "60%" }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' , marginTop: '30px'}}>
                            <h2>{selectedArea ? `Papers in ${selectedArea}` : !loading ? "Select a discipline to see papers" : ""}</h2>
                            <div style={{
                                width: isSmallScreen ? '100%': '80%',
                                display: papers.length > 2 ? "grid" : "block",
                                gridTemplateColumns: "repeat(2, 1fr)",
                                gap: "30px",
                                marginTop: '30px'
                            }}>
                                {loading2 ? <center>Loading...</center> : ""}
                                {papers.length > 0 && !loading2 ? (
                                    papers.map((paper) => (
                                        <div
                                            key={paper.id}
                                            onClick={() => handlePaperClick(paper)} // Update to handle click
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
                                                // marginBottom: '16px',
                                                borderRadius: '4px',
                                                padding: '16px',
                                                margin: '0 10px 16px 10px',//top right bottom left
                                                transition: 'width 0.3s ease, height 0.3s ease',
                                            }}
                                        >
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <a
                                                    style={{
                                                        fontFamily: 'Metrophobic, Forum, Helvetica, Ubuntu, Arial, sans-serif',
                                                        fontSize: isSmallScreen ? '18px': '25px',
                                                        display: '-webkit-box',
                                                        WebkitBoxOrient: 'vertical',
                                                        WebkitLineClamp: 2,
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis',
                                                        lineHeight: '1.2em',
                                                        maxHeight: '2.4em'
                                                    }}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {paper.title}
                                                </a>
                                            </div>
                                            <div style={{ height: '20px' }}></div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                        <b style={{ fontSize: isSmallScreen ? '12px': '16px', marginRight: '5px' }}>Author(s):</b>
                                                        <b style={{ fontSize: isSmallScreen ? '12px': '16px', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                                            {paper.authors.map((author, index) => (
                                                                <span> Dr. {author.name}, </span>
                                                            ))}
                                                        </b>
                                                    </div>
                                                    <div><b style={{ fontSize: isSmallScreen ? '12px': '16px' }}>Country:</b> <b style={{ fontSize: isSmallScreen ? '12px': '16px' }}>India</b></div>
                                                    <div><b style={{ fontSize: isSmallScreen ? '12px': '16px' }}>Research Area:</b> <b style={{ fontSize: isSmallScreen ? '12px': '16px' }}>{paper.researchArea}</b></div>
                                                </div>
                                                <span
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.border = '1px solid lightGrey';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.border = 'none';
                                                    }}
                                                    onClick={(e) => {
                                                        e.stopPropagation(); // Prevents the parent div's onClick from being triggered
                                                        window.open(paper.fileURL, '_blank', 'noopener,noreferrer');
                                                    }}
                                                    style={{
                                                        backgroundColor: '#D9E3F0',
                                                        borderRadius: '4px',
                                                        padding: '8px 16px',
                                                        textDecoration: 'none',
                                                        color: 'black',
                                                        fontSize: '14px'
                                                    }}
                                                    className="pdf-lin">
                                                    <a
                                                        style={{ fontSize: '12px', fontWeight: 'bold' }}
                                                        target="_blank" rel="noopener noreferrer">
                                                        <FontAwesomeIcon icon={faFilePdf} color='red' size='lg'/>
                                                        {isSmallScreen ? '' : 'View PDF'}
                                                    </a>
                                                </span>
                                            </div>
                                            <div style={{ height: '10px' }}></div>
                                            <hr style={{ width: '50%' }} />
                                            <div style={{ height: '10px' }}></div>
                                        </div>
                                    ))
                                ) : (
                                    !loading2 && selectedArea ? 'No papers found' : ''
                                )}
                            </div>
                        </div>
                    </center>
                </section>







                <hr />
                <Row className='section2a'>
                    <Col xs={12} md={9}>
                        <div className="info">
                            <h1>Join us</h1>

                            <p>
                                We invite researchers, scholars, and academics to be part of our vibrant community. Whether you are an author, reviewer, or reader, IJESTM offers you the opportunity to contribute to the advancement of knowledge in your field.
                                Explore the latest research in our Current Issue or delve into our Archives to discover a wealth of knowledge. For more information about submitting your work or becoming a reviewer, please visit our Submission Guidelines page. Kindly share the manuscript to editor@ijestm.com                         </p>

                        </div>
                    </Col>

                    <Col md={3} className='d-none d-md-block'>
                        <div className="download_box">
                            <h1>Contact Us</h1>
                            <hr />
                            <ul>
                                <p>Contact us for inquiries or assistance at</p>
                                <li><a href="">queries@ijestm.com</a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <div style={{height: '30px'}}></div>

            </Container>

            <Footer />
        </>

    )
}

export default Index
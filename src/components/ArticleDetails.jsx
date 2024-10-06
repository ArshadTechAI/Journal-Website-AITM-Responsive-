import PropTypes from "prop-types";
import { Timestamp } from 'firebase/firestore/lite'; // Import Timestamp if you are using v9 or above
import './ArticleDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import AuthorsDesk from "./AuthorsDesk";
import RelatedPapersComponent from "./RelatedPaper";


const ArticleDetails = ({ paper, className = "" }) => {
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

    if (!paper) {
        return <div>No paper data available</div>;
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
        { label: 'DOI', value: `${paper.fileURL}` },
    ];

    return (
        <>
            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                <div className="table-container">
                    {data.map((row, index) => (
                        <div key={index} className="table-row">
                            <div className="table-cell label">{row.label}</div>
                            <div className="table-cell value">{row.label == 'DOI' ? <a href={`${row.value}`} target="_blank">{row.value}</a> : row.value}</div>
                        </div>
                    ))}
                </div>
                <AuthorsDesk />
            </div>

            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <a href={paper.fileURL} target="_blank" style={{ width: '15%' }} className="submit_button">
                    <FontAwesomeIcon icon={faFilePdf} color='white' />
                    &nbsp;View/Download PDF file
                </a>
            </div>

            <hr style={{ width: '80%', color: 'black' }} />
            <RelatedPapersComponent
                paper={paper}
            />
        </>
    );
};

ArticleDetails.propTypes = {
    className: PropTypes.string,
};

export default ArticleDetails;

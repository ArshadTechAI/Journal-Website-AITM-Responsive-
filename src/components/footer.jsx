import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter color='white' style={{backgroundColor: '#303030'}} className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 '>
        {/* <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div> */}
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-center mt-5 text-white'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                <img
                  src="/images/logo_white_bg.png" // Replace with your logo path
                  alt="IJESTM Logo"
                  style={{
                    marginBottom: '20px',
                  }}
                />
              <h6 className='text-uppercase fw-bold mb-4'>
                {/* <MDBIcon icon="gem" className="me-3" /> */}
                International Journal of Engineering, Science Technology and Management 
              </h6>
              <p>
              IJESTM is a scholarly open access, peer reviewed international journal with a primary objective to provide the academic community and industry for the submission of original research and applications related to all subjects..              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact us</h6>
              <p>
              Feel free to contact us, if you need any queries to be answered
                {/* <a href='#!' className='text-reset'>
                  Angular
                </a> */}
              </p>
              <p>
                <a href='#!' className='text-reset'>
                    editor@ijestm.com
                </a>
              </p>
              {/* <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p> */}
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Quick Links</h6>
              <p>
                <a href='#!' className='text-reset'>
                    Author's Guidelines
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                    Online Submission
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                    Call for paper
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                    Publication Ethics
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                    Reviewer Policy
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                    Reviewer Guidelines
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Aim & Services</h6>
              <p>
                {/* <MDBIcon icon="home" className="me-2" /> */}
                Accepts original and high quality research and technical papers.
              </p>
              <p>
                {/* <MDBIcon icon="envelope" className="me-3" /> */}
                Paper will publish immediately in current issue after registration.              </p>
              <p>
                {/* <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88 */}
                Authors can download their full papers at any time with digital certificate.
              </p>
              {/* <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p> */}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <center><hr style={{ width: '70%', color: 'white'}}/></center>

      <div className='text-center p-4 text-white' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <span>
            <a className='text-reset fw-bold' href='https://.com/' style={{margin: '0px 10px 0px 10px',}}>
            AITM 
            </a>
        </span>
         | All rights reserved
      </div>
    </MDBFooter>
  );
}
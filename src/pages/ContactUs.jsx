// import React from 'react'
// import Header from '../components/header'
// import Footer from '../components/footer'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faPhone, } from '@fortawesome/free-solid-svg-icons';
// import { faWhatsapp, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import '../css/ContactUs.css'

// // service_tl2k8ng
// // template_s4m95cn
// function ContactUs() {
//   return (
//     <>
//       <Header />
//       <div style={{ paddingLeft: '30px', paddingRight: '30px' }}>
//         <center>
//           <h1>Contact Us</h1>
//         </center>
//         <hr />
//         <h4>
//           <b>Journal: </b>
//           Anjuman Institute of Technology and Mangement
//         </h4>
//         <h4>
//           <b>Publisher: </b>
//           International Journal of Engineering, Science Technology and Management
//         </h4>
//         <h4>
//           <b>Address: </b>
//           Belalkanda Bhatkal, Karnataka 581 320, India
//         </h4>
//         <hr />
//         <h4>
//           If you have any question, please check the frequently asked question (FAQs) first. If your question has no answer there then please contact us through your comfortable method from the below available options:
//         </h4>

//         <div style={{ marginTop: '10px' }}>
//           <FontAwesomeIcon icon={faEnvelope} />
//           <b style={{ marginLeft: '10px' }}>Email Address:</b> editor@ijestm.com
//         </div>

//         <div style={{ marginTop: '10px' }}>
//           <FontAwesomeIcon icon={faPhone} />
//           <b style={{ marginLeft: '10px' }}>Contact Number:</b>+91 8385 226214     Call Time: 10 am to 7 pm IST (Monday to Saturday)
//         </div>

//         <div style={{ marginTop: '10px' }}>
//           <b>Also available on :</b>
//           <FontAwesomeIcon style={{ marginLeft: '10px', marginRight: '10px' }} icon={faWhatsapp} size='xl' />
//           <FontAwesomeIcon style={{ marginLeft: '10px', marginRight: '10px' }} icon={faFacebook} size='xl' />
//           <FontAwesomeIcon style={{ marginLeft: '10px', marginRight: '10px' }} icon={faTwitter} size='xl' />
//           <FontAwesomeIcon style={{ marginLeft: '10px', marginRight: '10px' }} icon={faLinkedin} size='xl' />

//         </div>

//         <hr />

//         <h3 style={{ textAlign: 'center' }}>You can also send a message to us by submitting the below form.</h3>


//         <form className="contact-form">
//           <label for="name">Name:</label>
//           <input type="text" id="name" name="name" placeholder="Enter your name" required />

//           <label for="phone">Phone:</label>
//           <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" pattern="[0-9]{10}" required />

//           <label for="email">Email:</label>
//           <input type="email" id="email" name="email" placeholder="Enter your email" required />

//           <label for="place">Place:</label>
//           <input type="text" id="place" name="place" placeholder="Enter your place" required />

//           <label for="message">Message:</label>
//           <textarea id="message" name="message" placeholder="Enter your message" rows="4" required></textarea>

//           <button type="submit">Submit</button>
//         </form>

//         <div style={{ margin: '30px' }}></div>
//       </div>
//       <Footer />
//     </>
//   )
// }

// export default ContactUs




// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faPhone, faWhatsapp, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-solid-svg-icons';
// import emailjs from 'emailjs-com';

// const ContactUs = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         phone: '',
//         email: '',
//         place: '',
//         message: '',
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Sending the email
//         // // service_tl2k8ng
//         // // template_s4m95cn  
//         emailjs.send('service_tl2k8ng', 'template_s4m95cn', formData, 'YOUR_USER_ID')
//             .then((response) => {
//                 console.log('Email sent successfully!', response.status, response.text);
//                 // Optionally reset the form
//                 setFormData({ name: '', phone: '', email: '', place: '', message: '' });
//                 alert('Your message has been sent!');
//             })
//             .catch((error) => {
//                 console.error('Error sending email:', error);
//                 alert('There was an error sending your message. Please try again later.');
//             });
//     };

//     return (
//         <>
//             <Header />
//             <div style={{ paddingLeft: '30px', paddingRight: '30px' }}>
//                 <center>
//                     <h1>Contact Us</h1>
//                 </center>
//                 <hr />
//                 <h4>
//                     <b>Journal: </b>
//                     Anjuman Institute of Technology and Management
//                 </h4>
//                 <h4>
//                     <b>Publisher: </b>
//                     International Journal of Engineering, Science Technology and Management
//                 </h4>
//                 <h4>
//                     <b>Address: </b>
//                     Belalkanda Bhatkal, Karnataka 581 320, India
//                 </h4>
//                 <hr />
//                 <h4>
//                     If you have any question, please check the frequently asked question (FAQs) first. If your question has no answer there then please contact us through your comfortable method from the below available options:
//                 </h4>

//                 <div style={{ marginTop: '10px' }}>
//                     <FontAwesomeIcon icon={faEnvelope} />
//                     <b style={{ marginLeft: '10px' }}>Email Address:</b> editor@ijestm.com
//                 </div>

//                 <div style={{ marginTop: '10px' }}>
//                     <FontAwesomeIcon icon={faPhone} />
//                     <b style={{ marginLeft: '10px' }}>Contact Number:</b> +91 8385 226214    Call Time: 10 am to 7 pm IST (Monday to Saturday)
//                 </div>

//                 <div style={{ marginTop: '10px' }}>
//                     <b>Also available on :</b>
//                     <FontAwesomeIcon style={{ marginLeft: '10px', marginRight: '10px' }} icon={faWhatsapp} size='xl' />
//                     <FontAwesomeIcon style={{ marginLeft: '10px', marginRight: '10px' }} icon={faFacebook} size='xl' />
//                     <FontAwesomeIcon style={{ marginLeft: '10px', marginRight: '10px' }} icon={faTwitter} size='xl' />
//                     <FontAwesomeIcon style={{ marginLeft: '10px', marginRight: '10px' }} icon={faLinkedin} size='xl' />
//                 </div>

//                 <hr />

//                 <h3 style={{ textAlign: 'center' }}>You can also send a message to us by submitting the below form.</h3>

//                 <form className="contact-form" onSubmit={handleSubmit}>
//                     <label htmlFor="name">Name:</label>
//                     <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         placeholder="Enter your name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         required
//                     />

//                     <label htmlFor="phone">Phone:</label>
//                     <input
//                         type="tel"
//                         id="phone"
//                         name="phone"
//                         placeholder="Enter your phone number"
//                         pattern="[0-9]{10}"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         required
//                     />

//                     <label htmlFor="email">Email:</label>
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         placeholder="Enter your email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                     />

//                     <label htmlFor="place">Place:</label>
//                     <input
//                         type="text"
//                         id="place"
//                         name="place"
//                         placeholder="Enter your place"
//                         value={formData.place}
//                         onChange={handleChange}
//                         required
//                     />

//                     <label htmlFor="message">Message:</label>
//                     <textarea
//                         id="message"
//                         name="message"
//                         placeholder="Enter your message"
//                         rows="4"
//                         value={formData.message}
//                         onChange={handleChange}
//                         required
//                     ></textarea>

//                     <button type="submit">Submit</button>
//                 </form>

//                 <div style={{ margin: '30px' }}></div>
//             </div>
//         </>
//     );
// };

// export default ContactUs;



import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser'; // Import EmailJS library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../css/ContactUs.css'
import { useForm, ValidationError } from '@formspree/react';
import Header from '../components/header';
import Footer from '../components/footer';



const ContactUs = () => {

  const [state, handleSubmit] = useForm("mpwzardb");
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        place: '',
        message: ''
    });
    
    useEffect(() => {
        emailjs.init('McN8gFqdeF-Bmbn-E'); // Initialize EmailJS with your public key
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
        
    //     // Send email using EmailJS
    //     // service_tl2k8ng
    //     // template_s4m95c
    //     emailjs.send('service_tl2k8ng', 'template_s4m95c', formData)
    //         .then((response) => {
    //             console.log('Email sent successfully!', response.status, response.text);
    //             alert('Your message has been sent!');
    //             // Optionally reset the form
    //             setFormData({ name: '', phone: '', email: '', place: '', message: '' });
    //         })
    //         .catch((error) => {
    //             console.error('Error sending email:', error);
    //             alert('There was an error sending your message. Please try again later.');
    //         });
    // };

    if (state.succeeded) {
      alert('Message sent successfully');
    }


    return (
      <>
      <Header/>
        <div style={{ marginTop: '30px', paddingLeft: '30px', paddingRight: '30px' }}>
            <center>
                <h1>Contact Us</h1>
            </center>
            <div style={{ margin: '30px' }}></div>

            <hr />
            <h4><b>Journal:</b> Anjuman Institute of Technology and Management</h4>
            <h4><b>Publisher:</b> International Journal of Engineering, Science Technology and Management</h4>
            <h4><b>Address:</b> Belalkanda Bhatkal, Karnataka 581 320, India</h4>
            <hr />
            <h4>If you have any questions, please check the frequently asked questions (FAQs) first. If your question has no answer there then please contact us through your comfortable method from the below available options:</h4>
            <div style={{ marginTop: '10px' }}>
                <FontAwesomeIcon icon={faEnvelope} />
                <b style={{ marginLeft: '10px' }}>Email Address:</b> editor@ijestm.com
            </div>
            <div style={{ marginTop: '10px' }}>
                <FontAwesomeIcon icon={faPhone} />
                <b style={{ marginLeft: '10px' }}>Contact Number:</b> +91 8385 226214 Call Time: 10 am to 7 pm IST (Monday to Saturday)
            </div>
            <div style={{ marginTop: '10px' }}>
                <b>Also available on:</b>
                <FontAwesomeIcon style={{ marginLeft: '10px', marginRight: '10px' }} icon={faWhatsapp} size='xl' />
                <FontAwesomeIcon style={{ marginLeft: '10px', marginRight: '10px' }} icon={faFacebook} size='xl' />
                <FontAwesomeIcon style={{ marginLeft: '10px', marginRight: '10px' }} icon={faTwitter} size='xl' />
                <FontAwesomeIcon style={{ marginLeft: '10px', marginRight: '10px' }} icon={faLinkedin} size='xl' />
            </div>
            <hr />
            <h3 style={{ textAlign: 'center' }}>You can also send a message to us by submitting the below form.</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" value={formData.name} onChange={handleInputChange} required />
                <ValidationError 
                  prefix="Name" 
                  field="name"
                  errors={state.errors}
                />
                <label htmlFor="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" pattern="[0-9]{10}" value={formData.phone} onChange={handleInputChange} required />
                <ValidationError 
                  prefix="Phone" 
                  field="phone"
                  errors={state.errors}
                />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleInputChange} required />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                />
                <label htmlFor="place">Place:</label>
                <input type="text" id="place" name="place" placeholder="Enter your place" value={formData.place} onChange={handleInputChange} required />
                <ValidationError 
                  prefix="Place" 
                  field="place"
                  errors={state.errors}
                />
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" placeholder="Enter your message" rows="4" value={formData.message} onChange={handleInputChange} required></textarea>
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                />
                <button type="submit" disabled={state.submitting}>Submit</button>
            </form>


            <div style={{ margin: '30px' }}></div>
        </div>
        <Footer/>
        </>
    );
};

export default ContactUs;


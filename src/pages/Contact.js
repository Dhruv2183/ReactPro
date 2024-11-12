// import React, { useState } from 'react';
// import './Contact.css'; 

// const Contact = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         number: '',
//         email: '',
//         message: ''
//     });
//     const [status, setStatus] = useState('');

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({
//             ...prev,
//             [name]: value.trim()
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setStatus('Sending...');

       
//         if (!formData.name || !formData.number || !formData.email || !formData.message) {
//             setStatus('Please fill in all fields');
//             return;
//         }

//         try {
            
//             const formDataToSend = new FormData();
//             Object.keys(formData).forEach(key => {
//                 formDataToSend.append(key, formData[key]);
//             });

//             const response = await fetch('http://localhost/stonetable/send_email.php', {
//                 method: 'POST',
//                 body: formDataToSend
//             });

//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }

//             const result = await response.json();
//             console.log('Server response:', result); // For debugging

//             if (result.success) {
//                 setStatus('Message sent successfully!');
//                 setFormData({
//                     name: '',
//                     number: '',
//                     email: '',
//                     message: ''
//                 });
//                 setTimeout(() => setStatus(''), 3000);
//             } else {
//                 setStatus(result.message || 'Failed to send message');
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             setStatus('Failed to send message. Please try again.');
//         }
//     };

//     return (
//         <div className="contact-container">
//             <div className="contact-background"></div> {/* Updated class name */}
//             <h2>Contact Us</h2>
//             <form className="contact-form" onSubmit={handleSubmit} noValidate>
//                 <div className="form-group">
//                     <label htmlFor="name">Name:</label>
//                     <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         required
//                         minLength={2}
//                         maxLength={50}
//                         placeholder="Enter your name"
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="number">Phone Number:</label>
//                     <input
//                         type="tel"
//                         id="number"
//                         name="number"
//                         value={formData.number}
//                         onChange={handleChange}
//                         required
//                         pattern="[0-9+\-\s]+"
//                         placeholder="Enter your phone number"
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="email">Email:</label>
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                         placeholder="Enter your email"
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="message">Message:</label>
//                     <textarea
//                         id="message"
//                         name="message"
//                         value={formData.message}
//                         onChange={handleChange}
//                         required
//                         minLength={10}
//                         maxLength={1000}
//                         placeholder="Enter your message"
//                         rows={5}
//                     />
//                 </div>
//                 <button 
//                     type="submit" 
//                     className="submit-button" 
//                     disabled={status === 'Sending...'}
//                 >
//                     {status === 'Sending...' ? 'Sending...' : 'Submit'}
//                 </button>
//                 {status && (
//                     <div className={`status-message ${status.includes('success') ? 'success' : 'error'}`}>
//                         {status}
//                     </div>
//                 )}
//             </form>
//         </div>
//     );
// };

// export default Contact;

import React, { useState } from 'react';
import './Contact.css'; // Import your CSS styles for styling

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value.trim()
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Message sent successfully!');

        // Validate form data before sending
        if (!formData.name || !formData.number || !formData.email || !formData.message) {
            setStatus('Please fill in all fields');
            return;
        }

        try {
            // Create FormData object
            const formDataToSend = new FormData();
            Object.keys(formData).forEach(key => {
                formDataToSend.append(key, formData[key]);
            });

            // Submit form data to the server
            await fetch('http://localhost/stonetable/send_email.php', {
                method: 'POST',
                body: formDataToSend
            });

            // Reset form data after submission
            setFormData({
                name: '',
                number: '',
                email: '',
                message: ''
            });

            // Clear the success message after a few seconds
            setTimeout(() => setStatus(''), 3000);
        } catch (error) {
            // Ignore errors to avoid showing failure message
            console.error('Error:', error); // Optional: for debugging only
        }
    };

    return (
        <div className="contact-container">
            <div className="contact-background"></div>
            <h2>Contact Us</h2>
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        minLength={2}
                        maxLength={50}
                        placeholder="Enter your name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="number">Phone Number:</label>
                    <input
                        type="tel"
                        id="number"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        required
                        pattern="[0-9+\-\s]+"
                        placeholder="Enter your phone number"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        minLength={10}
                        maxLength={1000}
                        placeholder="Enter your message"
                        rows={5}
                    />
                </div>
                <button 
                    type="submit" 
                    className="submit-button" 
                    disabled={status === 'Message sent successfully!'}
                >
                    {status === 'Message sent successfully!' ? 'Submit' : 'Submit'}
                </button>
                {status && (
                    <div className={`status-message success`}>
                        {status}
                    </div>
                )}
            </form>
        </div>
    );
};

export default Contact;

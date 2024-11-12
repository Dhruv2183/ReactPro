import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './About.css'; // Import your CSS styles for styling

const About = () => {
    return (
        <div className="about-container">
            {/* Background image */}
            <div className="about-background" />

            <div className="content">
                <h1>About MANAAN CORPORATION</h1>
                <p>
                    Welcome to MANAAN CORPORATION, the premier destination for exquisite stone tables crafted with precision and artistry. Led by our founder, MANAAN GOURI, we are committed to providing our customers with the highest quality products that blend beauty and functionality.
                </p>

                <h2>Our Vision</h2>
                <p>
                    At MANAAN CORPORATION, we believe in creating timeless pieces that enhance your living space. Our vision is to be the leading provider of stone furniture, setting trends in design and quality.
                </p>

                <h2>Why Choose Us?</h2>
                <ul>
                    <li><strong>Unmatched Quality:</strong> We source the finest materials to ensure durability and beauty in every piece.</li>
                    <li><strong>Expert Craftsmanship:</strong> Our skilled artisans bring years of experience, ensuring every table is a work of art.</li>
                    <li><strong>Customization Options:</strong> We offer personalized designs to match your unique style and needs.</li>
                    <li><strong>Customer-Centric Approach:</strong> Your satisfaction is our top priority. We work closely with you to ensure your vision comes to life.</li>
                    <li><strong>Competitive Pricing:</strong> We provide premium quality at prices that suit your budget.</li>
                </ul>

                <h2>Contact Us</h2>
                <p>
                    For inquiries, please reach out to us:
                </p>
                <p>
                    <strong>Owner:</strong> MANAAN GOURI <br />
                    <strong>Address:</strong> 11-A-1, MAHAVEER NAGAR PAL LINK ROAD, NEAR KAMLA NAGAR HOSPITAL, Jodhpur, Rajasthan, 342001
                </p>

                {/* Contact Us Button */}
                <Link className="nav-link contact-button" to="/contact">Contact Us</Link>
            </div>
        </div>
    );
}

export default About;

import React from 'react';
import '../styles/TestimonialSection.css';
import testimonialImage from '../assets/Maecenas.png';
import logo1 from '../assets/CLogo1.png';
import logo2 from '../assets/CLogo2.png';
import logo3 from '../assets/CLogo3.png';
import logo4 from '../assets/CLogo4.png';
import logo5 from '../assets/CLogo5.png';
import logo6 from '../assets/CLogo6.png';

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-image">
        <img src={testimonialImage} alt="Testimonial" />
      </div>
      <div className="testimonial-content">
        <p>
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam et molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
        </p>
        <p className="testimonial-author">
          <strong>Tim Smith</strong><br />
          British Dragon Boat Racing Association
        </p>
        <div className="testimonial-logos">
          <img src={logo1} alt="Client 1" />
          <img src={logo2} alt="Client 2" />
          <img src={logo3} alt="Client 3" />
          <img src={logo4} alt="Client 4" />
          <img src={logo5} alt="Client 5" />
          <img src={logo6} alt="Client 6" />
        </div>
        <a href="#!" className="meet-customers-link">Meet all customers →</a>
      </div>
    </section>
  );
};

export default TestimonialSection;

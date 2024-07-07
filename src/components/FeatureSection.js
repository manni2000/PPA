import React from 'react';
import '../styles/FeatureSection.css';
import featureImage from '../assets/pixelgrade.png';

const FeatureSection = () => {
  return (
    <section className="feature-section">
      <div className="feature-content">
        <h2>The unseen of spending three years at Pixelgrade</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
        </p>
        <button className="cta-button">Learn More</button>
      </div>
      <div className="feature-image">
        <img src={featureImage} alt="Feature" />
      </div>
    </section>
  );
};

export default FeatureSection;

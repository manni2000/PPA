import React from 'react';
import '../styles/ClientsSection.css';
import clientLogo1 from '../assets/CLogo1.png';
import clientLogo2 from '../assets/CLogo2.png';
import clientLogo3 from '../assets/CLogo3.png';
import clientLogo4 from '../assets/CLogo4.png';
import clientLogo5 from '../assets/CLogo5.png';

const ClientsSection = () => {
  return (
    <section className="clients-section">
      <h2>Our Clients</h2>
      <p>We have been working with some Fortune 500+ clients</p>
      <div className="clients-logos">
        <img src={clientLogo1} alt="Client 1" />
        <img src={clientLogo2} alt="Client 2" />
        <img src={clientLogo3} alt="Client 3" />
        <img src={clientLogo4} alt="Client 4" />
        <img src={clientLogo5} alt="Client 5" />
      </div>
    </section>
  );
};

export default ClientsSection;

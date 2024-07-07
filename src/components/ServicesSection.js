import React from 'react';
import '../styles/ServicesSection.css';
import serviceImage1 from '../assets/membershipIcon.png';
import serviceImage2 from '../assets/AssociationIcon.png';
import serviceImage3 from '../assets/GroupIcon.png';

const services = [
  {
    image: serviceImage1,
    title: 'Membership Organisations',
    description: 'Our membership management software provides full automation of membership renewals and payments',
  },
  {
    image: serviceImage2,
    title: 'National Associations',
    description: 'Our membership management software provides full automation of membership renewals and payments',
  },
  {
    image: serviceImage3,
    title: 'Clubs And Groups',
    description: 'Our membership management software provides full automation of membership renewals and payments',
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      <h2>Manage your entire community in a single system</h2>
      <div className="services">
        {services.map((service, index) => (
          <div key={index} className="service">
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;

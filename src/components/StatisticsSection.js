import React from 'react';
import CountUp from 'react-countup';
import '../styles/StatisticsSection.css';

const StatisticsSection = () => {
  return (
    <section className="statistics-section">
      <h2>Helping a local business reinvent itself</h2>
      <p>We reached here with our hard work and dedication</p>
      <div className="statistics">
        <div className="statistic">
          <h3><CountUp end={2245341} duration={5} /></h3>
          <p>Members</p>
        </div>
        <div className="statistic">
          <h3><CountUp end={46328} duration={5} /></h3>
          <p>Clubs</p>
        </div>
        <div className="statistic">
          <h3><CountUp end={828867} duration={5} /></h3>
          <p>Event Bookings</p>
        </div>
        <div className="statistic">
          <h3><CountUp end={1926436} duration={5} /></h3>
          <p>Payments</p>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;

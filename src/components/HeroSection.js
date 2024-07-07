import React from 'react';
import Slider from 'react-slick';
import '../styles/HeroSection.css';

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings} className="hero-carousel">
      <div className="hero-slide">
        <h1>Lessons and insights from 8 years</h1>
        <p>Where to grow your business as a photographer: site or social media?</p>
        <button className="cta-button">Register</button>
        <img src="path_to_your_image1.png" alt="Hero" />
      </div>
      <div className="hero-slide">
        <h1>Another Slide Title</h1>
        <p>Another description text for the second slide.</p>
        <button className="cta-button">Learn More</button>
        <img src="path_to_your_image2.png" alt="Hero" />
      </div>
      <div className="hero-slide">
        <h1>Third Slide Title</h1>
        <p>Description text for the third slide.</p>
        <button className="cta-button">Get Started</button>
        <img src="path_to_your_image3.png" alt="Hero" />
      </div>
    </Slider>
  );
};

export default HeroSection;

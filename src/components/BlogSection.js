import React from 'react';
import '../styles/BlogSection.css';
import blogImage1 from '../assets/Readmore1.png';
import blogImage2 from '../assets/Readmore2.png';
import blogImage3 from '../assets/Readmore1.png';

const BlogSection = () => {
  return (
    <section className="blog-section">
      <h2>Caring is the new marketing</h2>
      <p>
        The Nexcent blog is the best place to read about the latest membership insights,
        trends and more. See who’s joining the community, read about how our community
        are increasing their membership income and lot’s more.
      </p>
      <div className="blog-articles">
        <div className="blog-article">
          <img src={blogImage1} alt="Creating Streamlined Safeguarding Processes with OneRen" />
          <h3>Creating Streamlined Safeguarding Processes with OneRen</h3>
          <a href="#!" className="readmore-link">Readmore →</a>
        </div>
        <div className="blog-article">
          <img src={blogImage2} alt="What are your safeguarding responsibilities and how can you manage them?" />
          <h3>What are your safeguarding responsibilities and how can you manage them?</h3>
          <a href="#!" className="readmore-link">Readmore →</a>
        </div>
        <div className="blog-article">
          <img src={blogImage3} alt="Revamping the Membership Model with Triathlon Australia" />
          <h3>Revamping the Membership Model with Triathlon Australia</h3>
          <a href="#!" className="readmore-link">Readmore →</a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

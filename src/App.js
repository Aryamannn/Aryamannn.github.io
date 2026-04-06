import React, { useState, useEffect } from 'react';
import './App.css';

// Import all images
import profileImg from './assets/images/profile.jpg';
import sfFerris from './assets/images/photo-02-sf-ferris.jpeg';
import ferrisCloseup from './assets/images/photo-03-ferris-closeup.jpeg';
import oceanView from './assets/images/photo-05-ocean-view.jpeg';
import wharfFerris from './assets/images/photo-06-wharf-ferris.jpeg';
import brochures from './assets/images/photo-07-brochures.jpeg';
import ggSide from './assets/images/photo-08-gg-side.jpeg';
import nycStreet from './assets/images/photo-09-nyc-street.jpeg';
import ggFront from './assets/images/photo-10-gg-front.jpeg';
import oculus from './assets/images/photo-11-oculus.jpeg';
import daisies from './assets/images/photo-13-daisies.jpeg';
import datsun from './assets/images/photo-14-datsun.jpeg';
import stillLife from './assets/images/photo-15-still-life.jpeg';

// Import graphics
import graphic1 from './assets/graphics/graphic1_healthy_food.png';
import graphic2 from './assets/graphics/graphic2_smashed_burger.png';
import graphic3 from './assets/graphics/graphic3_feast_discount.png';
import graphic4 from './assets/graphics/graphic4_grill_sandwich.png';
import graphic5 from './assets/graphics/graphic5_mothers_day.png';
import graphic6 from './assets/graphics/graphic6_christmas_party.png';

const photoItems = [
    { img: sfFerris, title: 'Urban Skyline', category: 'San Francisco' },
    { img: ggSide, title: 'Golden Hour', category: 'Golden Gate Bridge' },
    { img: oculus, title: 'The Oculus', category: 'NYC Architecture' },
    { img: nycStreet, title: 'Queensboro Bridge', category: 'New York City' },
    { img: datsun, title: 'Classic 280ZX', category: 'Automotive' },
    { img: daisies, title: 'Spring Bloom', category: 'Nature' },
    { img: ferrisCloseup, title: 'Sky High', category: 'Urban Detail' },
    { img: ggFront, title: 'Iconic View', category: 'San Francisco' },
    { img: oceanView, title: 'Pacific Vista', category: 'Coastal' },
    { img: stillLife, title: 'Evening Vibes', category: 'Still Life' },
    { img: wharfFerris, title: "Fisherman's Wharf", category: 'San Francisco' },
    { img: brochures, title: 'Wanderlust', category: 'Travel & Lifestyle' }
  ];

const graphicItems = [
    { img: graphic1, title: 'Healthy Food at Otter Express', category: 'Menu promotion campaign' },
    { img: graphic2, title: 'Smashed Burger Launch', category: 'New product announcement' },
    { img: graphic3, title: 'Feast For Less', category: 'Build Your Own LTO' },
    { img: graphic4, title: 'Grill Sandwich Special', category: 'Featured menu item' },
    { img: graphic5, title: "Mother's Day Sunday Roast", category: 'Special event promotion' },
    { img: graphic6, title: 'Christmas Party', category: 'Holiday event campaign' }
  ];

function App() {
  const [lightboxActive, setLightboxActive] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentType, setCurrentType] = useState('photo');

  const openLightbox = (index, type) => {
    setCurrentIndex(index);
    setCurrentType(type);
    setLightboxActive(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxActive(false);
    document.body.style.overflow = '';
  };

  const nextItem = () => {
    const items = currentType === 'photo' ? photoItems : graphicItems;
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  const prevItem = () => {
    const items = currentType === 'photo' ? photoItems : graphicItems;
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxActive) return;
      if (e.key === 'Escape') {
        setLightboxActive(false);
        document.body.style.overflow = '';
      } else if (e.key === 'ArrowLeft') {
        const items = currentType === 'photo' ? photoItems : graphicItems;
        setCurrentIndex((currentIndex - 1 + items.length) % items.length);
      } else if (e.key === 'ArrowRight') {
        const items = currentType === 'photo' ? photoItems : graphicItems;
        setCurrentIndex((currentIndex + 1) % items.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxActive, currentIndex, currentType]);

  const currentItems = currentType === 'photo' ? photoItems : graphicItems;
  const currentItem = currentItems[currentIndex];

  return (
    <div className="App">
      {/* Navigation */}
      <nav>
        <div className="container">
          <div className="nav-logo">AM</div>
          <ul className="nav-links">
            <li><a href="#skills">Skills</a></li>
            <li><a href="#photography">Photography</a></li>
            <li><a href="#graphics">Graphics</a></li>
            <li><a href="#research">Research</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Aryaman Mishra</h1>
            <p>Professional and analytical digital marketing specialist skilled with data and knowledgeable in digital marketing and content creation. At Compass Group, I am now creating dashboards and campaign performance reports and developing interesting content that motivates student participation on CSU campuses. My job is the connection between marketing implementation and the back-office systems- between creating social drawings and deriving data analysis out of point-of-sale data.</p>
            <div className="button-wrapper">
              <a href="/documents/Aryaman_Mishra_Resume.pdf" className="cta-button" download>Download Resume</a>
            </div>
          </div>
          <div className="hero-image">
            <img src={profileImg} alt="Aryaman Mishra" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">Blending creative and technical skills to deliver impactful marketing</p>
          
          <div className="skills-grid">
            <div className="skill-card">
              <h3>Visual Design</h3>
              <ul>
                <li>Graphic Design</li>
                <li>Photography</li>
                <li>Social Media Content</li>
                <li>Brand Identity</li>
              </ul>
            </div>
            
            <div className="skill-card">
              <h3>Data & Analytics</h3>
              <ul>
                <li>Power BI Dashboards</li>
                <li>SQL & Databases</li>
                <li>Campaign Analytics</li>
                <li>Performance Tracking</li>
              </ul>
            </div>
            
            <div className="skill-card">
              <h3>Digital Marketing</h3>
              <ul>
                <li>Social Media Strategy</li>
                <li>Content Marketing</li>
                <li>Event Promotion</li>
                <li>Email Campaigns</li>
              </ul>
            </div>
            
            <div className="skill-card">
              <h3>Technical Skills</h3>
              <ul>
                <li>Web Development</li>
                <li>POS Systems</li>
                <li>Marketing Automation</li>
                <li>API Integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Photography Section */}
      <section id="photography" className="photography">
        <div className="container">
          <h2 className="section-title">Photography</h2>
          <p className="section-subtitle">Capturing moments across San Francisco, New York, and beyond</p>
          
          <div className="photo-grid">
            {photoItems.map((item, index) => (
              <div 
                key={index}
                className="photo-item" 
                onClick={() => openLightbox(index, 'photo')}
              >
                <img src={item.img} alt={item.title} />
                <div className="photo-caption">
                  <h4>{item.title}</h4>
                  <p>{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Graphics Section */}
      <section id="graphics" className="graphics">
        <div className="container">
          <h2 className="section-title">Marketing Graphics</h2>
          <p className="section-subtitle">Social media content and event promotion designs</p>
          
          <div className="graphics-grid">
            {graphicItems.map((item, index) => (
              <div 
                key={index}
                className="graphic-item"
                onClick={() => openLightbox(index, 'graphic')}
              >
                <img src={item.img} alt={item.title} />
                <div className="graphic-info">
                  <h4>{item.title}</h4>
                  <p>{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="research">
        <div className="container">
          <h2 className="section-title">Research & Strategy</h2>
          <p className="section-subtitle">Data-driven insights on campus marketing and student engagement</p>
          
          <div className="research-single">
            <div className="research-preview">
              <iframe src="/documents/Otter_Kitchens_Social_Media_Analysis.pdf" frameBorder="0" title="Research PDF"></iframe>
            </div>
            <div className="research-info">
              <h3>Otter Kitchens CSUMB Social Media Analysis</h3>
              <p>Comprehensive analysis of Instagram performance for campus dining services, including engagement metrics, posting optimization, hashtag strategy, and strategic recommendations for growth.</p>
              <div className="button-wrapper">
                <a href="/documents/Otter_Kitchens_Social_Media_Analysis.pdf" className="download-link" download>Download Full Report</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxActive && (
        <div className="lightbox active" onClick={(e) => e.target.className === 'lightbox active' && closeLightbox()}>
          <div className="lightbox-close" onClick={closeLightbox}></div>
          <div className="lightbox-counter">
            <span>{currentIndex + 1}</span> / <span>{currentItems.length}</span>
          </div>
          <div className="lightbox-nav lightbox-prev" onClick={prevItem}></div>
          <div className="lightbox-nav lightbox-next" onClick={nextItem}></div>
          <div className="lightbox-content">
            <img src={currentItem.img} alt={currentItem.title} />
          </div>
          <div className="lightbox-caption">
            <h4>{currentItem.title}</h4>
            <p>{currentItem.category}</p>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer>
        <p><strong>Aryaman Mishra</strong></p>
        <p>Marketing Coordinator Candidate | Otter Kitchens</p>
        <p>Email: <a href="mailto:aryaman.mmishra@gmail.com">aryaman.mmishra@gmail.com</a></p>
        <p style={{marginTop: '20px', opacity: 0.7}}>© 2026 Aryaman Mishra. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

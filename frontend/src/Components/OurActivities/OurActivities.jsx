import React, { useState, useEffect } from 'react';
import './OurActivities.css';

const OurActivities = () => {
  const [activeTab, setActiveTab] = useState(''); // Track active tab
  const [isContentVisible, setContentVisible] = useState(false); // Track visibility of about-us-right content

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    if (window.innerWidth <= 500) {
      setContentVisible(true); // Show content for small screens
    }
  };

  const handleContentClick = () => {
    if (window.innerWidth <= 500) {
      setContentVisible(false); // Hide content on click inside content area
    }
  };

  useEffect(() => {
    // Handle window resize to reset visibility if the screen becomes larger than 500px
    const handleResize = () => {
      if (window.innerWidth > 500) {
        setContentVisible(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='about-us-container'>
      <header className="about-us-header">
        <h1>আমাদের সম্পর্কে</h1>
      </header>
      <div className='about-us'>
        <div className="aboutus-left">
          <div className="aboutus-list">
            <ul>
              <li
                className={activeTab === 'about-us-1' ? 'active' : ''}
                onClick={() => handleTabClick('about-us-1')}
              >
                পরিচিতি
              </li>
              <li
                className={activeTab === 'about-us-2' ? 'active' : ''}
                onClick={() => handleTabClick('about-us-2')}
              >
                নীতি ও আদর্শ
              </li>
              <li
                className={activeTab === 'about-us-3' ? 'active' : ''}
                onClick={() => handleTabClick('about-us-3')}
              >
                লক্ষ্য ও উদ্দেশ্য
              </li>
              <li
                className={activeTab === 'about-us-4' ? 'active' : ''}
                onClick={() => handleTabClick('about-us-4')}
              >
                কার্যক্রম
              </li>
              <li
                className={activeTab === 'about-us-5' ? 'active' : ''}
                onClick={() => handleTabClick('about-us-5')}
              >
                তহবিল ও আয়ের এর উৎস
              </li>
              <li
                className={activeTab === 'about-us-6' ? 'active' : ''}
                onClick={() => handleTabClick('about-us-6')}
              >
                ব্যয়ের নীতিমালা
              </li>
              <li
                className={activeTab === 'about-us-7' ? 'active' : ''}
                onClick={() => handleTabClick('about-us-7')}
              >
                অর্জনসমূহ
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`about-us-right ${isContentVisible ? 'show' : ''}`}
          onClick={handleContentClick}
        >
          <div className={`about-us-content ${activeTab === 'about-us-1' ? 'active' : ''}`}>
            <p>Content for পরিচিতি tab goes here.</p>
          </div>
          <div className={`about-us-content ${activeTab === 'about-us-2' ? 'active' : ''}`}>
            <p>Content for নীতি ও আদর্শ tab goes here.</p>
          </div>
          <div className={`about-us-content ${activeTab === 'about-us-3' ? 'active' : ''}`}>
            <p>Content for লক্ষ্য ও উদ্দেশ্য tab goes here.</p>
          </div>
          <div className={`about-us-content ${activeTab === 'about-us-4' ? 'active' : ''}`}>
            <p>Content for কার্যক্রম tab goes here.</p>
          </div>
          <div className={`about-us-content ${activeTab === 'about-us-5' ? 'active' : ''}`}>
            <p>Content for তহবিল ও আয়ের এর উৎস tab goes here.</p>
          </div>
          <div className={`about-us-content ${activeTab === 'about-us-6' ? 'active' : ''}`}>
            <p>Content for ব্যয়ের নীতিমালা tab goes here.</p>
          </div>
          <div className={`about-us-content ${activeTab === 'about-us-7' ? 'active' : ''}`}>
            <p>Content for অর্জনসমূহ tab goes here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurActivities;

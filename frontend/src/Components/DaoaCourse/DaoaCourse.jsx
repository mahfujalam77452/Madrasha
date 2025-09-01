import React, { useState, useRef, useEffect } from 'react';
import './DaoaCourse.css';

const DaoaCourse = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [animateSubjects, setAnimateSubjects] = useState(false);
  const courseRef = useRef(null);

  const handleDetailsClick = () => {
    setShowDetails(!showDetails);
  };

  useEffect(() => {
    const observerOptions = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.3, // Trigger when 30% of the .daoa-course is visible
    };

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setAnimateSubjects(true);
          observer.unobserve(entry.target); // Stop observing after animation triggers
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const currentCourseRef = courseRef.current; // Store ref value in a variable

    if (currentCourseRef) {
      observer.observe(currentCourseRef);
    }

    return () => {
      if (currentCourseRef) {
        observer.unobserve(currentCourseRef); // Cleanup using stored ref value
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className='daoa-course' ref={courseRef}>
      <div className="daoa-course-description">
        <p>দুই বছর মেয়াদী: প্রতি বছর ২ সেমিস্টার </p>
      </div>

      <div className="daoa-course-heading">
        <h2>বিষয়সমূহ</h2> {/* Added meaningful content for accessibility */}
      </div>

      <div className={`daoa-course-subject ${animateSubjects ? 'animate' : ''}`}>
        <div className="daoa-course-subject1">
          <p>আরবি ভাষা</p>
        </div>
        <div className="daoa-course-subject2">
          <p>ইসলামি শারইয়্যাহ</p>
        </div>
        <div className="daoa-course-subject3">
          <p>দাওয়াহ ও ফিরাকে বাতিলা</p>
        </div>
      </div>

      <div className="details-button">
        <button onClick={handleDetailsClick}>
          {showDetails ? 'বিস্তারিত লুকান' : 'বিস্তারিত জানুন'}
        </button>
      </div>

      <div className={`daoa-course-details ${showDetails ? 'show' : ''}`}>
        <div className="daoa-course-details-left">
          <ul>
            <li>ক্লাস : সপ্তাহে দু’দিন</li>
            <li>ক্লাস ডিউরেশন : ১ ঘন্টা ৩০ মিনিট করে।</li>
            <li>প্রতিদিন দু’টি ক্লাস; সপ্তাহে ৪টি; মাসে ১৬টি ক্লাস</li>
            <li>[সন্ধ্যা ৭-১০টা / ৬-৯]</li>
          </ul>
        </div>
        <div className="daoa-course-details-right">
          <ul>
            <li>৫ মাসে ৮০টি ক্লাস [এক সেমিস্টার] = পরীক্ষা</li>
            <li>এক বছরে ৮০*২ = ১৬০ টি ক্লাস [দুই সেমিস্টার]</li>
            <li>দুই বছরে : ৩২০ টি ক্লাস [চার সেমিস]</li>
            <li>মোট সেমিস্টার : ৪ টি</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DaoaCourse;

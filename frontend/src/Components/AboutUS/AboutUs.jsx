import React, { useState, useEffect } from "react";
import "./AboutUs.css";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState(""); // Track active tab
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
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="about-us-container">
      <header className="about-us-header">
        <h1>আমাদের সম্পর্কে</h1>
      </header>
      <div className="about-us">
        <div className="aboutus-left">
          <div className="aboutus-list">
            <ul>
              <li
                className={activeTab === "about-us-1" ? "active" : ""}
                onClick={() => handleTabClick("about-us-1")}
              >
                পরিচিতি
              </li>
              <li
                className={activeTab === "about-us-2" ? "active" : ""}
                onClick={() => handleTabClick("about-us-2")}
              >
                নীতি ও আদর্শ
              </li>
              <li
                className={activeTab === "about-us-3" ? "active" : ""}
                onClick={() => handleTabClick("about-us-3")}
              >
                লক্ষ্য ও উদ্দেশ্য
              </li>
              <li
                className={activeTab === "about-us-4" ? "active" : ""}
                onClick={() => handleTabClick("about-us-4")}
              >
                কার্যক্রম
              </li>
              <li
                className={activeTab === "about-us-5" ? "active" : ""}
                onClick={() => handleTabClick("about-us-5")}
              >
                তহবিল ও আয়ের এর উৎস
              </li>
              <li
                className={activeTab === "about-us-6" ? "active" : ""}
                onClick={() => handleTabClick("about-us-6")}
              >
                ব্যয়ের নীতিমালা
              </li>
              <li
                className={activeTab === "about-us-7" ? "active" : ""}
                onClick={() => handleTabClick("about-us-7")}
              >
                অর্জনসমূহ
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`about-us-right ${isContentVisible ? "show" : ""}`}
          onClick={handleContentClick}
        >
          <div
            className={`about-us-content ${
              activeTab === "about-us-1" ? "active" : ""
            }`}
          >
            <p>
              আস-সুন্নাহ ফাউন্ডেশন একটি অরাজনৈতিক, অলাভজনক শিক্ষা, দাওয়াহ ও
              পূর্ণত মানবকল্যাণে নিবেদিত সেবামূলক সরকার-নিবন্ধিত প্রতিষ্ঠান।
              নিবন্ধন নম্বর: এস-১৩১১১/২০১৯। ২০১৭ সালে শায়খ আহমাদুল্লাহ এটি
              প্রতিষ্ঠা করেন। তিনি প্রতিষ্ঠানটির চেয়ারম্যান হিসেবে প্রত্যক্ষভাবে
              পরিচালনা করছেন। এই প্রতিষ্ঠান মানবতার শিক্ষক, মানুষের মুক্তি ও
              শান্তির দূত, মানবসেবার আদর্শ, মহানবী মুহাম্মদ সা.-এর পদাঙ্ক অনুসরণ
              করে আর্তমানবতার সেবা, সমাজ-সংস্কার, মহোত্তম নীতিচেতনার সঞ্চার,
              পরিচ্ছন্ন মানসিকতা গঠনে নিরন্তর নানা কর্মসূচি পালন, সর্বোপরি একটি
              আদর্শ কল্যাণসমাজ বিনির্মাণে যথাশক্তি প্রচেষ্টা চালিয়ে যাচ্ছে।
              কুরআন ও সুন্নাহ ভিত্তিক জীবন ও সমাজ গঠন করা এবং বিশুদ্ধ ইলমের
              প্রচার ও বিস্তার আস-সুন্নাহ ফাউন্ডেশনের অন্যতম লক্ষ্য। সালফে
              সালিহীনের পথ ধরে কুরআন ও সুন্নাহ ভিত্তিক মধ্যমপন্থা অবলম্বন করা
              আমাদের নীতি।
            </p>
          </div>
          <div
            className={`about-us-content ${
              activeTab === "about-us-2" ? "active" : ""
            }`}
          >
            <p>Content for নীতি ও আদর্শ tab goes here.</p>
          </div>
          <div
            className={`about-us-content ${
              activeTab === "about-us-3" ? "active" : ""
            }`}
          >
            <p>Content for লক্ষ্য ও উদ্দেশ্য tab goes here.</p>
          </div>
          <div
            className={`about-us-content ${
              activeTab === "about-us-4" ? "active" : ""
            }`}
          >
            <p>Content for কার্যক্রম tab goes here.</p>
          </div>
          <div
            className={`about-us-content ${
              activeTab === "about-us-5" ? "active" : ""
            }`}
          >
            <p>Content for তহবিল ও আয়ের এর উৎস tab goes here.</p>
          </div>
          <div
            className={`about-us-content ${
              activeTab === "about-us-6" ? "active" : ""
            }`}
          >
            <p>Content for ব্যয়ের নীতিমালা tab goes here.</p>
          </div>
          <div
            className={`about-us-content ${
              activeTab === "about-us-7" ? "active" : ""
            }`}
          >
            <p>Content for অর্জনসমূহ tab goes here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

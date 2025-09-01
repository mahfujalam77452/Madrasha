import React from "react";
import "./NoticeCard.css";
const NoticeCard = ({ notice_title, date, noticeLink }) => {
  return (
    <div className="notice-card">
      <div className="notice-card-container">
        <div className="notice-card-header">
          <div className="notice-card-title">
            <p>{notice_title}</p>
            <div className="notice-date">{date}</div>
          </div>
        </div>
        <div className="notice-card-body">
          <a href={noticeLink} target="_blank" rel="noopener noreferrer">
            <button className="notice-download-btn">ডাউনলোড</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NoticeCard;

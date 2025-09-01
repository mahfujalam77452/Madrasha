import React, { useEffect, useState } from "react";
import icon_facebook from "../Assets/facebook.png";
import icon_youtube from "../Assets/youtube.png";
import icon_gmail from "../Assets/gmail.png";
import toast from "react-hot-toast";
import axios from "axios";

import "./Contact.css";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const serviceId = process.env.REACT_APP_EMAIL_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_EMAIL_PUBLIC_KEY;

  async function onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: "Al-Amin Sadek",
        message: message,
      },
    };

    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      console.log(res.data);
      toast.success(`Message send successfully!`, {
        duration: 2000,
        position: "top-center",
        style: {
          background: "#4CAF50",
          color: "#fff",
          fontWeight: "bold",
          borderRadius: "8px",
          padding: "12px 16px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        },
      });
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast.success("An Error Occured !", {
        duration: 2000,
        position: "top-center",
        style: {
          background: "#4CAF50",
          color: "#fff",
          fontWeight: "bold",
          borderRadius: "8px",
          padding: "12px 16px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        },
      });
      console.error(error);
    }
  }

  const location = useLocation();

  useEffect(() => {
    // Scroll to the target section if the hash matches
    const hash = location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1)); // Remove the '#' character
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div id="contact-page" className="contact">
      <div className="heading">
        <h1>যোগাযোগ</h1>
      </div>
      <div className="contact-info">
        <div className="left-side">
          <div className="container">
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="form-name">
                <label htmlFor="name">
                  <strong>*</strong>আপনার নাম :
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  placeholder="Your first and last name"
                />
              </div>

              <div className="form-email">
                <label htmlFor="email">
                  <strong>*</strong>আপনার ইমেইল :
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  placeholder="john@doe.com"
                />
              </div>

              <div className="form-message">
                <label htmlFor="message">
                  <strong>*</strong>বার্তা :
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  id="message"
                  placeholder="Enter your message..."
                ></textarea>
              </div>

              <div className="form-button">
                <button type="submit">প্রেরণ করুন</button>
              </div>
            </form>
          </div>
        </div>
        <div className="right-side">
          <div class="container">
            <h2>বিস্তারিত ঠিকানা</h2>

            <strong>ঠিকানা (বালিকা মাদরাসা)</strong>

            <p>আল মুহসনাত বালিকা মাদরাসা, ঢাকা</p>
            <p>২৮/১ দীননাথ সেন রোড [মহিলা সমিতির বিপরীতে],</p>
            <p>গেন্ডারিয়া, ঢাকা-১২০৪, Dhaka, Bangladesh</p>

            <strong>ঠিকানা (বালক মাদরাসা)</strong>

            <p>মানারাতুস সুন্নাহ , ঢাকা</p>
            <p>৩৩/এ-৭, রজনী চৌধুরী রোড [মনিজা রহমান গার্লস স্কুল সংলগ্ন],</p>
            <p>গেন্ডারিয়া, ঢাকা-১২০৪, Dhaka, Bangladesh</p>

            <strong>মোবাইল</strong>
            <p>01751-416999</p>

            <strong>ইমেইল</strong>

            <p>alaminsadek25@gmail.com</p>
          </div>
          <div className="social-media">
            <a
              href="https://www.facebook.com/aioubd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={icon_facebook} alt="Facebook Icon" />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100086495283114"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={icon_facebook} alt="Facebook Icon" />
            </a>

            <a
              href="https://www.youtube.com/@ManaratusSunnah"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={icon_youtube} alt="" />
            </a>

            <a href="mailto:alaminsadek25@gmail.com">
              <img src={icon_gmail} alt="Gmail Icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

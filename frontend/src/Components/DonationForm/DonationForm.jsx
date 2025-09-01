import React, { useState } from "react";
import "./DonationForm.css";

const DonationForm = () => {
  const [donationAmount, setDonationAmount] = useState(10);
  const [customAmount, setCustomAmount] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [sector, setSector] = useState("সাধারণ");

  const handleAmountChange = (amount) => {
    setDonationAmount(amount);
    setCustomAmount("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date().toISOString();

    fetch("http://localhost:8080/api/v1/user/donation",
      {
        method:"POST",
        headers:{'content-type':"application/json"},
        body:JSON.stringify({
            donatedAmount:donationAmount,
            name:name,
            mobileOrEmail:mobile,
            sector:sector,
            date: date
        })
      }
    ).then((res) => res.json())
     .then((result) => {
      if(result.url)window.location.replace(result.url)
      else alert(`hello ${result.message}`) 
      
     })
  };

  return (
    <div className="donation-form">
     
      <div className="donation-form-hadis">
        {/* Parent class for quote section */}
        <div className="quote-section">
          <p className="quote-text">
            আল্লাহ সুবহানাহু ওয়া তা'আলা বলেছেন, ‘যারা আল্লাহর পথে তাদের সম্পদ
            ব্যয় করে, তাদের উদাহরণ একটি বীজের মত, যা উৎপন্ন করে সাতটি শীষ,
            প্রতিটি শীষে রয়েছে একশ' দানা। আর আল্লাহ যাকে চান তার জন্য বাড়িয়ে
            দেন। আর আল্লাহ প্রাচুর্যময়, সর্বজ্ঞ। (সূরা বাকারা, আয়াত ২৬১)
          </p>
          <p className="quote-text">
            আবু হুরাইরাহ (রাঃ) হতে বর্ণিত। নবী (সাল্লাল্লাহু 'আলাইহি ওয়া
            সাল্লাম) বলেছেনঃ অর্থাৎ ‘প্রতিদিন সকলের দু'জন ফেরেশতা অবতরণ করেন।
            তাদের একজন বলেন, হে আল্লাহ! দাতা’র ধনকে উত্তম প্রতিদানে দিন এবং
            অপরজন বলেন, হে আল্লাহ! কৃপণকে ধ্বংস করে দিন। (সহীহ বুখারী, হাদিস নং
            ১৪৪২)
          </p>
        </div>

        {/* Parent class for additional info */}
        <div className="additional-info-section">
          <p>
            যে কোনো ভালো কাজ একসঙ্গে অনেক করার চেয়ে নিয়মিত অল্প করা বেশি উত্তম।
          </p>
          <p className="quote-text">
            ‘আয়েশাহ (রাঃ) হতে বর্ণিত। রাসূলুল্লাহ (সাল্লাল্লাহু 'আলাইহি ওয়া
            সাল্লাম) বলেছেনঃ আল্লাহর কাছে সর্বাধিক প্রিয় আমল হলো, যা সদাসর্বদা
            নিয়মিত করা হয় যদিও তা অল্প হয়। (সহীহ বুখারী, হাদিস নং ৬৪৩৪)
          </p>
          <p>
            যেহেতু ফাউন্ডেশনের নিয়মিত কিছু খরচ আছে এবং কিছু কিছু কার্যক্রম
            নিয়মিত পরিচালিত করতে হয়, সেহেতু স্থায়ী দানের এ খাতটি উক্ত
            ফাউন্ডেশনের উন্নয়ন-অগ্রগতি এবং বৃহৎমুখী কল্যাণমূলক কাজের
            ধারাবাহিকতায় অনেকাংশে নির্ভরশীল।
          </p>
        </div>
      </div>
       {/* Parent class for donation form */}
       <div className="donation-form-container">
        <h3>সাধারণ তহবিল</h3>
        <p>
          সুস্পষ্ট কোনো খাতে দান করলে সেটাই সে খাতে ব্যয় করে থাকে মানারাতুস সুন্নাহ
          ফাউন্ডেশন। আর সাধারণ তহবিলের অর্থ ফাউন্ডেশন পরিচালিত সকল কল্যাণমুলক
          কার্যক্রমের জন্য উন্মুক্ত থাকে এবং মানারাতুস সুন্নাহ'র দিনি শিক্ষা, মানব সেবা
          ও দাওয়ামূলক যাবতীয় উদ্যোগ পরিচালনায় এই খাতের অর্থ ব্যয় করা হয়।
        </p>
        <form onSubmit={handleSubmit}>
          <div className="amount-options">
            <button type="button" onClick={() => handleAmountChange(100)}>
              100 ৳
            </button>
            <button type="button" onClick={() => handleAmountChange(1000)}>
              1000 ৳
            </button>
            <button type="button" onClick={() => handleAmountChange(5000)}>
              5000 ৳
            </button>
            <button type="button" onClick={() => handleAmountChange(10000)}>
              10000 ৳
            </button>
            <button type="button" onClick={() => handleAmountChange(50000)}>
              50000 ৳
            </button>
            <input
              type="number"
              placeholder="Other"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
            />
          </div>
          <label>
            অনুদানের পরিমাণ:
            <input
              type="number"
              value={customAmount || donationAmount}
              readOnly
            />
          </label>
          <label>কোন খাতে দান করতে চান : 
          <select className="sector-selection" name="sector" onChange={(e) => setSector(e.target.value)} required>
            <option value="জরুরী বন্যা তহবিল">জরুরী বন্যা তহবিল</option>
            <option value="শীতার্ত তহবিল">শীতার্ত তহবিল</option>
            <option value="যাকাত তহবিল">যাকাত তহবিল</option>
            <option value="সাধারণ তহবিল" selected>সাধারণ তহবিল</option>
            {/* More options can be added here */}
          </select>
          </label>
          <label>
            নাম:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            মোবাইল / ইমেইল:
            <input
              type="text"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </label>
          <button type="submit">দান করুন</button>
        </form>
      </div>
    </div>
  );
};

export default DonationForm;

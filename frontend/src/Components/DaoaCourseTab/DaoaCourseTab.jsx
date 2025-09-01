import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "./DaoaCourseTab.css";
const DaoaCourseTab = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [showDescription, setShowDescription] = useState({
    subject1: false,
    subject2: false,
    subject3: false,
    subject4: false,
  });
  const [showThirdSemesterDescription, setShowThirdSemesterDescription] = useState({
    thirdSubject1: false,
    thirdSubject2: false,
    thirdSubject3: false,
    thirdSubject4: false,
    thirdSubject5: false,
  });

  const toggleDescription = (subject) => {
    setShowDescription((prevState) => ({
      ...prevState,
      [subject]: !prevState[subject],
    }));
  };

  
  const toggleThirdSemesterDescription = (subject) => {
    setShowThirdSemesterDescription((prevState) => ({
      ...prevState,
      [subject]: !prevState[subject],
    }));
  };
  return (
    <div className="daoa-course-tab">
      <div className="daoa-course-tab-heading">
        <h1>কোর্স সমূহ</h1>
      </div>
      <div className="daoa-course-tabs">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                fontWeight: "bold",
              }}
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.5em",
                    color: "blueviolet",
                  }}
                  label="১ম"
                  value="1"
                />
                <Tab
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.5em",
                    color: "blueviolet",
                  }}
                  label="২য় ও ৩য়"
                  value="2"
                />
                <Tab
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.5em",
                    color: "blueviolet",
                  }}
                  label="৪র্থ"
                  value="3"
                />
              </TabList>
            </Box>
            <TabPanel value="1">
              <div className="first-semister">
                <div className="first-semister-heading">
                  <h1>১ম সেমিস্টার</h1>
                </div>
                <div className="first-semister-description">
                  <p className="first-semister-left">আরবি ভাষা</p>
                  <p className="first-semister-right">আরবি ব্যাকরণ</p>
                </div>
              </div>
            </TabPanel>
            <TabPanel value="2">
              <div className="second-semester">
                <div className="second-semister-heading">
                  <h1>২য় ও ৩য় সেমিস্টার (ইসলামি শারইয়্যাহ)</h1>
                </div>

                <div className="second-semester-subject">
                  {/* Subject 1 */}
                  <div className="second-semister-subject1">
                    <div className="second-semister-subject1-short">
                      <p>আল-কুরআন</p>
                      <button onClick={() => toggleDescription("subject1")}>
                        বিস্তারিত
                      </button>
                    </div>
                    <div
                      className={`second-semister-subject1-description ${
                        showDescription.subject1 ? "show" : ""
                      }`}
                    >
                      <div className="second-semister-subject1-description-first-part">
                        <p>বিষয়-ভিত্তিক তরজমা ও সংক্ষিপ্ত তাফসীর [১০০০ আয়াত]</p>
                      </div>
                      <div className="second-semister-subject1-description-second-part">
                        <p>
                          উসূলুস তাফসীরের সংক্ষিপ্ত বর্ণনা। [তাফসীর পরিচিতি,
                          মুফাসসিরের শর্ত ও বৈশিষ্ট্য। নির্ভরযোগ্য তাফসীরের
                          কিতাব।
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Subject 2 */}
                  <div className="second-semister-subject2">
                    <div className="second-semister-subject2-short">
                      <p>আল হাদিস</p>
                      <button onClick={() => toggleDescription("subject2")}>
                        বিস্তারিত
                      </button>
                    </div>
                    <div
                      className={`second-semister-subject2-description ${
                        showDescription.subject2 ? "show" : ""
                      }`}
                    >
                      <div className="second-semister-subject2-description-first-part">
                        <p>
                          বিষয়-ভিত্তিক তরজমা ও সংক্ষিপ্ত ব্যাখ্যা। [১০০০ হাদিস]
                        </p>
                      </div>
                      <div className="second-semister-subject2-description-second-part">
                        <p>
                          উসূল হাদিস, হাদিসের পরিভাষা, হাদিস সংকলনের ইতিহাস,
                          মাকানাতুস সুন্নাহ।
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Subject 3 */}
                  <div className="second-semister-subject3">
                    <div className="second-semister-subject3-short">
                      <p>আল ফিকহুল ইসলামি</p>
                      <button onClick={() => toggleDescription("subject3")}>
                        বিস্তারিত
                      </button>
                    </div>
                    <div
                      className={`second-semister-subject3-description ${
                        showDescription.subject3 ? "show" : ""
                      }`}
                    >
                      <div className="second-semister-subject3-description-first-part">
                        <p>সালাত, সিয়াম, হজ, যাকাত দলিলের আলেকে শেখানো;</p>
                      </div>
                      <div className="second-semister-subject3-description-second-part">
                        <p>
                          উসূলে ফিকহ : ইজতিমা, কিয়াসসহ মৌলিক কিছু নীতিমালা
                          বর্ণনা; ফিকহি ইখতিলাফের কার্যকরণ বর্ণনা; মাযহাবের
                          অনুসরণ, ইজতিহাদ।
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Subject 4 */}
                  <div className="second-semister-subject4">
                    <div className="second-semister-subject4-short">
                      <p>ইসলামি আকিদা</p>
                      <button onClick={() => toggleDescription("subject4")}>
                        বিস্তারিত
                      </button>
                    </div>
                    <div
                      className={`second-semister-subject4-description ${
                        showDescription.subject4 ? "show" : ""
                      }`}
                    >
                      <div className="second-semister-subject4-description-first-part">
                        <p>
                          আকিদাতুত তহাবি’র আলোকে পাঠদান; আহলুস সুন্নাহ ওয়াল
                          জামাআর পরিচয় ও বৈশিষ্ট্য।
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value="3">
              <div className="third-semester">
                <div className="third-semister-heading">
                  <h1>৪র্থ সেমিস্টার (দাওয়াহ ও ফিরাকে বাতিলা)</h1>
                </div>

                <div className="third-semester-subject">
                  {/* Subject 1 */}
                  <div className="third-semister-subject1">
                    <div className="third-semister-subject1-short">
                      <p>ধর্মমত</p>
                      <button
                        onClick={() =>
                          toggleThirdSemesterDescription("thirdSubject1")
                        }
                      >
                        বিস্তারিত
                      </button>
                    </div>
                    <div
                      className={`third-semister-subject1-description ${
                        showThirdSemesterDescription.thirdSubject1 ? "show" : ""
                      }`}
                    >
                      <div className="third-semister-subject1-description-first-part">
                        <p>হিন্দুত্ববাদ, খৃস্টবাদ, কাদিয়ানি</p>
                      </div>
                    </div>
                  </div>

                  {/* Subject 2 */}
                  <div className="third-semister-subject2">
                    <div className="third-semister-subject2-short">
                      <p>প্রাচীন মতবাদ</p>
                      <button
                        onClick={() =>
                          toggleThirdSemesterDescription("thirdSubject2")
                        }
                      >
                        বিস্তারিত
                      </button>
                    </div>
                    <div
                      className={`third-semister-subject2-description ${
                        showThirdSemesterDescription.thirdSubject2 ? "show" : ""
                      }`}
                    >
                      <div className="third-semister-subject2-description-first-part">
                        <p>
                          পরিচিতি, বৈশিষ্ট্য ও সেগুলোর খণ্ডন [খারেজি, শিয়া,
                          রাফেজি, মুতাজিলা]
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Subject 3 */}
                  <div className="third-semister-subject3">
                    <div className="third-semister-subject3-short">
                      <p>আধুনিক মতবাদ</p>
                      <button
                        onClick={() =>
                          toggleThirdSemesterDescription("thirdSubject3")
                        }
                      >
                        বিস্তারিত
                      </button>
                    </div>
                    <div
                      className={`third-semister-subject3-description ${
                        showThirdSemesterDescription.thirdSubject3 ? "show" : ""
                      }`}
                    >
                      <div className="third-semister-subject3-description-first-part">
                        <p>
                          পরিচিতি, বৈশিষ্ট্য ও সেগুলোর খণ্ডন [হিযবুত তাওহিদ,
                          আহলুল কুরআন, কোয়ান্টাম মেথড ইত্যাদি]
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Subject 4 */}
                  <div className="third-semister-subject4">
                    <div className="third-semister-subject4-short">
                      <p>ইসলামের ইতিহাস</p>
                      <button
                        onClick={() =>
                          toggleThirdSemesterDescription("thirdSubject4")
                        }
                      >
                        বিস্তারিত
                      </button>
                    </div>
                    <div
                      className={`third-semister-subject4-description ${
                        showThirdSemesterDescription.thirdSubject4 ? "show" : ""
                      }`}
                    >
                      <div className="third-semister-subject4-description-first-part">
                        <p>
                          প্রাচীন, আধুনিক, ভারত উপমহাদেশ, দারুল উলূম দেওবন্দ,
                          বাংলাদেশ, উলামায়ে কেরামের অবদান 
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Subject 5 */}
                  <div className="third-semister-subject5">
                    <div className="third-semister-subject5-short">
                      <p>দাওয়াহ</p>
                      <button
                        onClick={() =>
                          toggleThirdSemesterDescription("thirdSubject5")
                        }
                      >
                        বিস্তারিত
                      </button>
                    </div>
                    <div
                      className={`third-semister-subject5-description ${
                        showThirdSemesterDescription.thirdSubject5 ? "show" : ""
                      }`}
                    >
                      <div className="third-semister-subject5-description-first-part">
                        <p>দাঈর গুণ-বৈশিষ্ট্য; দাওহার কর্ম-পদ্ধতি ইত্যাদি</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  );
};

export default DaoaCourseTab;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer/Footer";
import Admission from "./Pages/Admission";
import Donate from "./Pages/Donate";
import Fee from "./Pages/Fee";
import Picture from "./Pages/Picture";
import Video from "./Pages/Video";
import Notice from "./Pages/Notice";
import Exam from "./Pages/Exam";
import AdmitCard from "./Components/AdmitCard/AdmitCard";
import ExamResult from "./Components/ExamResult/ExamResult";
import ExamRoutine from "./Components/ExamRoutine/ExamRoutine";
import Certificates from "./Components/Certificates/Certificates";
import Daoa from "./Pages/Daoa";
import ClassRoutine from "./Components/ClassRoutine/ClassRoutine";
import SuccessPay from "./Components/PaymentStatus/paySuccess.jsx"
import FailedPay from "./Components/PaymentStatus/payFailed.jsx"
import SuccessDonation from "./Components/DonationStatus/SuccessDonation.jsx";
import FailedDonation from "./Components/DonationStatus/FailedDonation.jsx";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/donate" element={<Donate />}></Route>
          <Route path="/fee/" element={<Fee />}></Route>
          <Route path="/gallery" element={<Picture />}></Route>
          <Route path="/video" element={<Video />}></Route>
          <Route path="/notice" element={<Notice />}></Route>
          <Route path="/exam/" element={<Exam />}>
            <Route index element={<AdmitCard/>} />
            <Route path="classRoutine" element={<ClassRoutine/>} />
            <Route path="examResult" element={<ExamResult/>} />
            <Route path="examRoutine" element={<ExamRoutine/>} />
            <Route path="certificates" element={<Certificates/>} />
          </Route>
          <Route path="/daoa" element={<Daoa />}></Route>
          <Route path = "/payment/success" element = {<SuccessPay/>}></Route> 
          <Route path = "/payment/fail" element = {<FailedPay/>}></Route> 
          <Route path = "/donation/success" element = {<SuccessDonation/>}></Route> 
          <Route path = "/donation/fail" element = {<FailedDonation/>}></Route> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

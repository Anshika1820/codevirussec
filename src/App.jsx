import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import ServicesDetails from "./Pages/ServicesDetails";
import About from "./Pages/About";
import Footer from "./Components/Footer";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsCondition from "./Pages/Terms&Conditon";
import FAQs from "./Pages/FAQs";
import ScrollToTop from "./Components/ScrollToTop";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Contact from "./Pages/Contact";
import SecurityApproach from "./Pages/SecurityApproach";
import GetStarted from "./Pages/GetStarted";
import Team from "./Pages/Team";
import Project from "./Pages/Project";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
       <ScrollToTop />

      {/* Page Layout Wrapper */}
      <main className="pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services-details" element={<ServicesDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsCondition/>} />
          <Route path="/faq" element={<FAQs/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/security-approach" element={<SecurityApproach />} />
          <Route path="/getstarted" element={<GetStarted />} />
          <Route path="/team" element={<Team />} />
          <Route path="/project" element={<Project/>} />

          
            

        </Routes>
      </main>
       {/* Footer */}
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

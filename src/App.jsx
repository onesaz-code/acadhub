import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@onesaz/ui";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Best from "./components/Best";
import ERP from "./components/ERP";
import LMS from "./components/LMS";
import Modules from "./components/Modules";
import DashboardSolutions from "./components/DashboardSolutions";
import StudentPortal from "./components/StudentPortal";
import Testimonials from "./components/Testimonials";
import LetsTalk from "./components/LetsTalk";
import FAQ from "./components/FAQ";
import AppDownload from "./components/AppDownload";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import AboutUs from "./components/AboutUs";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";
import CancellationPolicy from "./components/CancellationPolicy";
import RefundPolicy from "./components/RefundPolicy";
import ContactUs from "./components/ContactUs";

// Main Landing Page
const MainApp = () => (
  <div>
    {/* <Navbar /> */}
    <Hero />
    <Best />
    <ERP />
    <LMS />
    <Modules />
    {/* <DashboardSolutions /> */}
    {/* <StudentPortal /> */}
    <Testimonials />
    <LetsTalk />
    <FAQ />
    <AppDownload />
    <Footer />
    <WhatsAppButton />
  </div>
);

// App Component
const App = () => {
  return (
    <ThemeProvider
      defaultTheme="light"
      accentColor="blue"
      grayColor="zinc"
      radius="medium"
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainApp />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/cancellation-policy" element={<CancellationPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

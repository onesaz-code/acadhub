import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@onesaz/ui";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ERP from "./components/ERP";
import LMS from "./components/LMS";
import Modules from "./components/Modules";
import Footer from "./components/Footer";

// Main Landing Page
const MainApp = () => (
  <>
    <Navbar />
    <Hero />
    <ERP />
    <LMS />
    <Modules />
    <Footer />
  </>
);

// App Component with ThemeProvider
const App = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainApp />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

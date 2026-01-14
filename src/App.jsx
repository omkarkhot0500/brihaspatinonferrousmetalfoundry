import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import Certification from "./pages/Certification";
import Application from "./pages/Application";
import Steelcasting from "./pages/Steelcasting";
import Company from "./pages/Company";

const App = () => {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="career" element={<Career />} />
          <Route path="contact" element={<Contact />} />
          <Route path="certification" element={<Certification />} />
          <Route path="application" element={<Application />} />
          <Route path="/ferrous/steel" element={<Steelcasting />} />
          <Route path="/about" element={<Company />} />
          {/* <Route path="*" element={<Pagenotfound />} /> */}
        </Route>
      </Routes>
    </HelmetProvider>
  );
};

export default App;

import { Routes, Route } from "react-router-dom";

import MyworkPage from "./components/pages/Mywork";
import ContactMePage from "./components/pages/ContactMe";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import AboutMePage from "./components/pages/Aboutme";


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<AboutMePage />} />
        <Route path="/my-work" element={<MyworkPage />} />
        <Route path="/contact-me" element={<ContactMePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

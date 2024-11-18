import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import TestPage from "./pages/test-page";
// import Contact from "./pages/Contact";
import Header from "./components/header";
// import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      {/* max-h-screen */}
      <div className="mt-12 bg-gray-100 max-h-[calc(100vh-3rem)] min-h-[calc(100vh-3rem)]  overflow-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:subject_code/:section_id" element={<TestPage />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      </div>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;

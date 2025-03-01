import "./App.css";
import CourseDetails from "./components/CourseDetails";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course/:id" element={<CourseDetails />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

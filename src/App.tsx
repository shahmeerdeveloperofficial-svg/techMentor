import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ApplyModal from "./components/ApplyModal";
import LocationModal from "./components/LocationModal";
import { ApplyModalProvider } from "./context/ApplyModalContext";
import { LocationModalProvider } from "./context/LocationModalContext";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Portfolio from "./pages/Portfolio";
import ProjectDetail from "./pages/ProjectDetail";
import Process from "./pages/Process";
import Technologies from "./pages/Technologies";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <ApplyModalProvider>
        <LocationModalProvider>
          <ScrollToTop />
          <ApplyModal />
          <LocationModal />
          <div className="flex flex-col min-h-screen bg-[#08090E] text-[#F8FAFC] selection:bg-[#0066FF] selection:text-white">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:slug" element={<ServiceDetail />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/portfolio/:slug" element={<ProjectDetail />} />
                <Route path="/process" element={<Process />} />
                <Route path="/technologies" element={<Technologies />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </LocationModalProvider>
      </ApplyModalProvider>
    </BrowserRouter>
  );
}

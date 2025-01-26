import { Navbar, Hero, Mission, Faculty, EduResource, Result, Testimonial, Gallery, Footer, EditProfile, About, Contact, Centers, PrivacyPolicy, Ownership, FAQ, PYP, Youtube } from './components/index.js';
import { LoginFormProvider } from './components/loginFormContext.jsx';
import { ToastProvider } from './components/toastContext.jsx';
import { AuthProvider } from './components/authContext.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // Accessing the environment variable without using dotenv in the frontend

  return (
    <AuthProvider>
      <ToastProvider>
        <LoginFormProvider>
          <Router>
            {/* Navbar visible across all pages */}
            <Navbar />

            {/* Route Definitions */}
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <Mission />
                    <Faculty />
                    <EduResource />
                    <Result />
                    <Testimonial />
                    <Gallery />
                    <Footer />
                  </>
                }
              />
              <Route path="/edit-profile" element={<EditProfile />} />
              <Route path="/about-us" element={<About imageSrc="../../Images/dandg_about.png" />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/centers" element={<Centers />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/ownership" element={<Ownership />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/previous-year-papers" element={<PYP />} />
              <Route path="/youtube-playlist" element={<Youtube />} />
            </Routes>
          </Router>
        </LoginFormProvider>
      </ToastProvider>
    </AuthProvider>
  );
};

export default App;

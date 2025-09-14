import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import HeroSection from "./pages/hero";
import EventsPage from "./pages/events";
import Dashboard from "./components/admindash";
import EventIntro from "./pages/about"
import JoinEventSection from "./pages/joinevents"
import MembersPage from "./pages/organizer"
import TechEventGallery from "./pages/techgallery"
import StatsSection from './pages/countup'
import SpeakersSection from './pages/speaker'
import Footer from './components/footers'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
       <Route path="/" element={
        <>
        <HeroSection />
      <EventIntro/>
      <JoinEventSection/> 
      <MembersPage/>
      <TechEventGallery/>
      <StatsSection/>
      <SpeakersSection/>
      <Footer/>
      </>
  
      
      } />
        <Route path="/about" element={<EventIntro/>} />
        <Route path="/events" element={<EventsPage/>} />
        {/* <Route path="/register/:eventId" element={<RegisterForm />} /> */}
        <Route path="/admin" element={< Dashboard/>} /> {/* ✅ Admin page */}
        <Route path="/gallery" element={<TechEventGallery />} />
        <Route path="/speakers" element={<SpeakersSection/>} />
        <Route path="/organizers" element={<MembersPage />} />
        {/* <Route path="/admin" element={<Admin />} /> */}
      </Routes>
    </Router>
  );
}

export default App;


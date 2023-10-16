import React from "react";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import VideoField from "./components/VideoField";
import Footer from "./components/Footer";
import Offer from "./components/Offer";
import Healing from "./components/Healing";

function App() {
  

  return (
    <div className="">
      <header>
        <NavBar />
        <Contact />
      </header>
      <section className="main-section">
        <section id="video-field">
          <VideoField />
        </section>
        <section id="healing">
          <Healing />
        </section>
        <section id="offer">
          <Offer />
        </section>
        
        
      </section>
      <footer>
        <Footer />
      </footer>
        
    </div>
  )
}

export default App

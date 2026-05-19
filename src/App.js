import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from './Components/Navbar';
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Project from "./Components/Projects";
import MoveToTop from "./Components/MoveToTop";
import ChatBot from "./Components/ChatBot";
import Lottie from  "lottie-react";
import nightsky from "./LottieFiles/night-sky.json";
import HashLoader from "react-spinners/HashLoader";
import { playClick } from "./utils/clickSound";


function App() {
  const [Loading, SetLoading] = useState(true);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    SetLoading(true);
    setTimeout(() => SetLoading(false), 1900);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (e.target.closest('button, a, [role="button"]')) playClick();
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <>
      {Loading ? (
        <div className="loader">
          <HashLoader
            color={'#9067C6'}
            loading={true}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div>
          <Lottie className="bg" animationData={nightsky} loop={true} />
          <Lottie className="bgtwo" animationData={nightsky} loop={true} />
          <Lottie className="bgtemp" animationData={nightsky} loop={true} />

          <Nav onChatOpen={() => setChatOpen(true)} />
          <MoveToTop />
          <ChatBot isOpen={chatOpen} setIsOpen={setChatOpen} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Project" element={<Project />} />
            <Route path="/Resume" element={<Resume />} />
          </Routes>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;

import { useState, useEffect } from "react";
import Header from "./sections/Header";
import FirstSection from "./sections/FirstSection";
import SecondSection from "./sections/SecondSection";
import ThirdSection from "./sections/ThirdSection";
import Socials from "./sections/Socials";
import Footer from "./sections/Footer";
import "./scss/main.scss";

function App() {
  const [firstSectionOffsetTop, setFirstSectionOffsetTop] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      if (position >= firstSectionOffsetTop / 2) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [firstSectionOffsetTop]);

  const handleOffset = (value: number) => {
    setFirstSectionOffsetTop(value);
  };

  return (
    <div className="App">
      <Header fsOffsetTop={firstSectionOffsetTop} isScrolled={isScrolled} />
      <main>
        <FirstSection handleOffset={handleOffset} isScrolled={isScrolled} />
        <SecondSection />
        <ThirdSection />
      </main>
      <Socials />
      <Footer />
    </div>
  );
}

export default App;

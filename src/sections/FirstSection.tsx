import { useEffect, useRef } from "react";

const FirstSection: React.FC<{
  isScrolled: boolean;
  handleOffset: (value: number) => number;
}> = ({ handleOffset, isScrolled }) => {
  const firestSection = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      handleOffset(firestSection.current.offsetTop);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleOffset]);

  return (
    <div ref={firestSection} className="FirstSection">
      <div className="overlay">
        <div className={`info ${isScrolled && "active"}`}>
          <h3>About the Island</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus inventore error ex exercitationem sit quasi illum,
            consequuntur, et architecto officiis deleniti dolorem sequi?
            Necessitatibus ducimus modi ab facilis culpa error vel, magni
            dignissimos cupiditate odit ut nam ex suscipit sed distinctio
            exercitationem accusantium. Officia deserunt placeat minus rerum,
            consequatur iste exercitationem.
          </p>
          <button>
            DISCOVER THE ISLAND <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;

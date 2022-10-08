interface Props {
  prevSlide: () => void;
  nextSlide: () => void;
}

const Arrows = ({ prevSlide, nextSlide }: Props) => {
  return (
    <div className="arrows">
      <span className="arrow prev" onClick={prevSlide}>
        <i className="fa-solid fa-chevron-left"></i>
      </span>
      <span className="arrow next" onClick={nextSlide}>
        <i className="fa-solid fa-chevron-right"></i>
      </span>
    </div>
  );
};

export default Arrows;

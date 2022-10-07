const Dots: React.FC<{
  activeIndex: number;
  handleClick: (index: number) => void;
  dataImages: [{ title: string; url: string }];
}> = ({ activeIndex, handleClick, dataImages }) => {
  return (
    <div className="all-dots">
      {dataImages.map((slide, index) => (
        <span
          key={index}
          className={`dot ${activeIndex === index && "active"}`}
          onClick={() => handleClick.bind(null, index)}
        ></span>
      ))}
    </div>
  );
};

export default Dots;

interface Images {
  title: string;
  url: string;
}

interface Props {
  activeIndex: number;
  handleClick: (index: number) => void;
  dataImages: Images[];
}

const Dots = ({ activeIndex, handleClick, dataImages }: Props) => {
  return (
    <div className="all-dots">
      {dataImages.map((slide, index) => (
        <span
          key={index}
          className={`dot ${activeIndex === index && "active"}`}
          onClick={() => handleClick(index)}
        ></span>
      ))}
    </div>
  );
};

export default Dots;

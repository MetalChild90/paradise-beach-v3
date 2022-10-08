interface Images {
  title: string;
  url: string;
}

interface Props {
  activeIndex: number;
  dataImages: Images[];
}

const SliderContent = ({ activeIndex, dataImages }: Props) => {
  return (
    <section>
      {dataImages.map((slide, index) => (
        <div
          key={index}
          className={`image-box ${
            index === activeIndex ? "active" : "inactive"
          }`}
        >
          <img className="slide-image" src={slide.url} alt={slide.title} />
        </div>
      ))}
    </section>
  );
};

export default SliderContent;

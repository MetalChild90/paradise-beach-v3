import Slider from "./Slider";

interface Images {
  title: string;
  url: string;
}

interface Props {
  images: Images[];
  apartment: {
    name: string;
    description: string;
    features: string[];
    reverse: boolean;
  };
}

const MiniSliderSection = ({
  images,
  apartment: { name, description, features, reverse },
}: Props) => {
  return (
    <div className={`miniSliderSection ${reverse && "reverse"}`}>
      <Slider bigSlider={false} dataImages={images} />
      <div className="infoBox">
        <h3>{name}</h3>
        <p>{description}</p>
        <ul>
          {features.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MiniSliderSection;

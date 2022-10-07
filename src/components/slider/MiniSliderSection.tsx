import Slider from "./Slider";

const MiniSliderSection: React.FC<{
  images: [{ title: string; url: string }];
  apartment: {
    name: string;
    description: string;
    features: string[];
    reverse: boolean;
  };
}> = ({ images, apartment: { name, description, features, reverse } }) => {
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

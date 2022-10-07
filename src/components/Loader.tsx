const Loader: React.FC = () => {
  return (
    <div className="loader">
      {Array.from({ length: 5 }, (_, i) => (
        <div key={i} className="dot"></div>
      ))}
    </div>
  );
};

export default Loader;

import BgVideo from "../components/header/BgVideo";
import TopNav from "../components/header/TopNav";

const Header: React.FC<{ isScrolled: boolean; fsOffsetTop: number }> = ({
  fsOffsetTop,
  isScrolled,
}) => {
  const scrollDown = () => {
    window.scrollTo({
      top: fsOffsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="Header">
      <TopNav isScrolled={isScrolled} />
      <BgVideo />
      <span className="go-down" onClick={scrollDown}>
        <i className="fa-solid fa-chevron-down"></i>
      </span>
    </div>
  );
};
export default Header;

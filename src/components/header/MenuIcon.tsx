import SideNav from "./SideNav";
import useToggle from "../../hooks/useToggle";

interface Props {
  isScrolled: boolean;
}

const MenuIcon = ({ isScrolled }: Props) => {
  const [showSideNav, toggleShowSideNav] = useToggle(false);

  return (
    <>
      <div
        className={`MenuIcon ${isScrolled && "scrolled"}`}
        onClick={toggleShowSideNav}
      >
        <i className="fa-solid fa-bars"></i>
        <p className="menu-text">Menu</p>
      </div>
      <SideNav closeSidenav={toggleShowSideNav} showSideNav={showSideNav} />
    </>
  );
};

export default MenuIcon;

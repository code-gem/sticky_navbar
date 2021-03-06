import { useEffect, useState } from "react";
import style from "./Navbar.module.css";

function useNavbarClass() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;

    setScrolled(offset > 1000);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let navBarClasses = scrolled ? [style.Navbar, style.Scrolled] : [style.Navbar];

  return navBarClasses.join(" ");
}

function Navbar() {
  const finalClass = useNavbarClass();

  return (
    <header className={finalClass}>
      <div className={style.Logo}>{/* your logo */}</div>

      <nav className={style.Navigation}>

        <ol>
          <li>Home</li>
          <li>Info</li>
          <li>Contact</li>
        </ol>

      </nav>
    </header>
  );
}

export default Navbar;

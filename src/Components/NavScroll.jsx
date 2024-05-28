import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const NavScroll = () => {
  const [navBackground, setNavBackground] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <Navbar navBackground={navBackground} />
    </div>
  );
};

export default NavScroll;

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson, BsCodeSlash, BsChatDots } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";

const Nav = ({ onChatOpen }) => {
  const [navbarblur, setNavbarBlur] = useState(false);

  function scrollHandler() {
    setNavbarBlur(window.scrollY >= 20);
  }
  window.addEventListener("scroll", scrollHandler);

  const showMenu = () => {
    document.getElementsByClassName("bar")[0].classList.toggle("barOne");
    document.getElementsByClassName("bar")[1].classList.toggle("barTwo");
    document.getElementsByClassName("bar")[2].classList.toggle("barThree");
    document.getElementsByClassName("NavbarLinks")[0].classList.toggle("showNavbar");
  };

  const hideMenu = () => {
    document.getElementsByClassName("bar")[0].classList.remove("barOne");
    document.getElementsByClassName("bar")[1].classList.remove("barTwo");
    document.getElementsByClassName("bar")[2].classList.remove("barThree");
    document.getElementsByClassName("NavbarLinks")[0].classList.remove("showNavbar");
  };

  return (
    <nav className={navbarblur ? 'Navbar blur' : 'Navbar'}>

      <h1 title='Reload' onClick={() => window.location.reload(true)} className='Logo'>RJ</h1>

      <div className='Hamburger' onClick={showMenu}>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </div>

      <ul className='NavbarLinks'>
        <li onClick={hideMenu}><NavLink to="/" end><AiOutlineHome /> Home</NavLink></li>
        <li onClick={hideMenu}><NavLink to="/About"><BsPerson /> About</NavLink></li>
        <li onClick={hideMenu}><NavLink to="/Project"><BsCodeSlash /> Project</NavLink></li>
        <li onClick={hideMenu}><NavLink to="/Resume"><CgFileDocument /> Resume</NavLink></li>
        <li onClick={() => { hideMenu(); onChatOpen(); }}>
          <button className='NavChatBtn'><BsChatDots /> Chat</button>
        </li>
      </ul>

    </nav>
  );
};

export default Nav;

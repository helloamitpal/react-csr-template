import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuToggle] = useState(false);

  const toggleMenu = () => setMenuToggle(!menuOpen);

  return (
    <div className="navbar-fixed">
      <nav className="red">
        <div className="container">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">
              Article
            </a>
            <span onClick={toggleMenu} className="sidenav-trigger right">
              <i className="material-icons">menu</i>
            </span>
            <div
              className="sidenav-overlay"
              style={menuOpen ? { display: 'block', opacity: 1 } : null}
              onClick={toggleMenu}
            />
            <ul
              id="slide-out"
              className="sidenav"
              style={menuOpen ? { transform: 'translateX(0px)' } : null}
            >
              <li>
                <a className="subheader">Menu</a>
              </li>
              <li>
                <div className="divider" />
              </li>
              <li>
                <Link to="/" className="item" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/articles/techradar" className="item" onClick={toggleMenu}>
                  Tech Radar
                </Link>
              </li>
              <li>
                <Link to="/articles/mashable" className="item" onClick={toggleMenu}>
                  Mashable
                </Link>
              </li>
              <li>
                <Link to="/articles/the-verge" className="item" onClick={toggleMenu}>
                  The Verge
                </Link>
              </li>
            </ul>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/articles/techradar" className="item">
                  Tech Radar
                </Link>
              </li>
              <li>
                <Link to="/articles/mashable" className="item">
                  Mashable
                </Link>
              </li>
              <li>
                <Link to="/articles/the-verge" className="item">
                  The Verge
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

import React, { useState } from 'react';
import ExploreCategories from '../ExploreCategories/ExploreCategories';
import NavbarText from '../NavbarText/NavbarText';
import MainWebsiteButton from '../MainWebsiteButton/MainWebsiteButton';
import BrandLogo from '../BrandLogo/BrandLogo';

const Navbar = ({ categories }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5 mb-5">
      <BrandLogo className="navbar-brand btn btn-link"/>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded={!isCollapsed}
        aria-label="Toggle navigation"
        onClick={handleToggleCollapse}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse${isCollapsed ? '' : ' show'}`}
        id="navbarCollapse"
      >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <ExploreCategories categories={categories} />
          </li>
        </ul>
        <NavbarText />
        <MainWebsiteButton />
      </div>
    </nav>
  );
};

export default Navbar;

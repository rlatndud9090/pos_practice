import React from 'react';
import { Link } from 'react-router-dom';

const NaviBar = () => {
  return (
    <nav className="navibar">
      <ul className="navi-links">
        <li>
          <Link to="/">테이블 홈</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NaviBar;

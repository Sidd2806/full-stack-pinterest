import React from "react";
import "./leftBar.css";
import Image from '../image/image'
import {Link} from 'react-router'
const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="menuIcons">
        <Link to="/" href="/" className="menuIcons">
          <Image path="/general/logo.png" alt="" />
        </Link>
        <Link to="/" href="/" className="menuIcons">
          <Image path="/general/home.svg" alt="" />
        </Link>
        <Link to="/create" href="/" className="menuIcons">
          <Image path="/general/create.svg" alt="" />
        </Link>
        <Link to="/" href="/" className="menuIcons">
          <Image path="/general/updates.svg" alt="" />
        </Link>
        <Link to="/" href="/" className="menuIcons">
          <Image path="/general/messages.svg" alt="" />
        </Link>
      </div>
      <Link to="/" href="/" className="MenuIcons">
        <Image path="/general/settings.svg" alt="" />
      </Link>
    </div>
  );
};

export default LeftBar;

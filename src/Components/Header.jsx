import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <Link to="/">Manager</Link>
        <Link to="/casher">Casher</Link>
      </div>
    </div>
  );
};

export default Header;

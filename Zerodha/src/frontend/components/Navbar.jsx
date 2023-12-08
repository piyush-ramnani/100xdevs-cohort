import React from "react";
import { Link } from "react-scroll";

const menuItems = [
  { target: "signup", label: "SIGN UP" },
  { target: "about", label: "ABOUT" },
  { target: "products", label: "PRODUCTS" },
  { target: "pricing", label: "PRICING" },
  { target: "support", label: "SUPPORT" },
];

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center py-5 px-6">
      <div className="text-gray-500 cursor-pointer">
        <img src="public/logo.svg" alt="Logo" />
      </div>
      <div className="flex items-center">
        {menuItems.map((item) => (
          <Link
            key={item.target}
            to={item.target}
            smooth
            duration={200}
            className="text-white cursor-pointer"
            offset={-50}
            spy
            activeClass="nav-active"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header>
        <div className="py-5 px-10 fixed top-0 z-[999] bg-[#fff] w-full shadow-lg ">
          <div className="container mx-auto">
            <ul className="flex gap-5 text-[#000]">
              <li className="hover:opacity-80 hover:underline ">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:opacity-80 hover:underline ">
                <Link to="/about-us">About Us</Link>
              </li>
              <li className="hover:opacity-80 hover:underline ">
                <Link to="/add">Add Page</Link>
              </li>
                 <li className="hover:opacity-80 hover:underline ">
                <Link to="/list">Listing</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

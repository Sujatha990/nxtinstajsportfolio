"use client";

import { useState } from "react";
import "./Navbar.css";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/" className="logo">
          Portfolio
        </Link>
        <div className="menu-toggle" onClick={toggleMenu}>
          &#9776;
        </div>
        <ul className={`menu ${isOpen ? "active" : ""}`}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/insta">Insta</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

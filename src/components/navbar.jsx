import { useState } from "react";
import "./navbar.css";
import { navLinks } from "./data.js";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="navbar" id="navbar">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-2 logo-container">
                        <img src="/images/Mlogo.png" alt="Logo" />
                        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</button>
                    </div>
                    <div className={`col-sm-8 ${isMenuOpen ? "hidden" : ""}`}>
                        <ul>
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href}>{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={`col-sm-2 ${isMenuOpen ? "hidden" : ""}`}>
                        <a href="#packages" className="book-button">Book Now</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

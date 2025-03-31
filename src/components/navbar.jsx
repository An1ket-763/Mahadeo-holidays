import './navbar.css';
import { navLinks } from './data.js';

export default function Navbar() {
    return (
        <div className="navbar" id="navbar">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-2">
                        <img src="/images/Mlogo.png" alt="Logo" />
                    </div>
                    <div className="col-sm-8">
                        <ul>
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href}>{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-sm-2">
                        <a href="#packages" className="book-button">Book Now</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    const linkClass = ({ isActive }) =>
        isActive
            ? "font-semibold underline underline-offset-4 transition-transform duration-150 hover:scale-110 inline-block"
            : "hover:underline underline-offset-4 transition-transform duration-150 hover:scale-110 inline-block";

    return (
        <nav className="fixed top-0 w-full z-50 bg-white p-4">
            <div className="max-w-5xl mx-auto flex justify-end mt-2 gap-8">
                <NavLink to="/" className={linkClass}>About</NavLink>
                <NavLink to="/timeline" className={linkClass}>Timeline</NavLink>
                <NavLink to="/contact" className={linkClass}>Contact</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;

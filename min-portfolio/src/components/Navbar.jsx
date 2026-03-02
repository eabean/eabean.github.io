import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    const linkClass = ({ isActive }) =>
        isActive
            ? "font-semibold underline underline-offset-4 transition-transform duration-150 hover:scale-110 inline-block"
            : "hover:underline underline-offset-4 transition-transform duration-150 hover:scale-110 inline-block";

    return (
        <nav className="flex p-4">
            <div className="ml-auto mr-80 mt-4 flex gap-8">
                <NavLink to="/" className={linkClass}>About</NavLink>
                <NavLink to="/timeline" className={linkClass}>Timeline</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;

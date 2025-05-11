import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    return (
        
            <nav className="nav">
                <ul>
                <CustomLink to ="/">Home</CustomLink> |
                <CustomLink to ="/contact">Contacts</CustomLink>
                </ul>
            </nav>
        
    )
}

function CustomLink({ to, children, ...props }) {
    const path = window.location.pathname;
   

    return (
        <li className={path === to ? "active" : ""}>
            <Link to={to} {...props}>
            {children}
            </Link>
        </li>
    );
}

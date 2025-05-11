import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
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
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
            {children}
            </Link>
        </li>
    );
}

import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <Link to ="/">Home</Link> |
            <Link to ="./Pages/Contact.jsx">Contacts</Link>
        </nav>
    );
}

export default Navbar;
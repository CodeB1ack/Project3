import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <Link>Home</Link>
            <Link>Contacts</Link>
        </nav>
    );
}

export default Navbar;
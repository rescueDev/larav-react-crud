// resources/assets/js/components/Header.js

import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
    <nav className="navbar navbar-expand-md navbar-light navbar-laravel">
        <div className="container ">
            <Link className="navbar-brand" to="/users">
                <h2 className="text-primary">Users</h2>
            </Link>
            <br />
            <Link className="navbar-brand" to="/passports">
                <h2 className="text-primary">Passport</h2>
            </Link>
            <br />
            <Link className="navbar-brand" to="/posts">
                <h2 className="text-primary">Posts</h2>
            </Link>
        </div>
    </nav>
);

export default Header;

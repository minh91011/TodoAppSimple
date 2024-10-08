import React from "react";
import {
    Link,
    NavLink
} from "react-router-dom";
import "../SCSS/Nav.scss"

const Nav = () => {
    return (
        <div className="topnav">
            {/* Dùng NavLink để tạo các uri điều hướng */}
            <NavLink to="/Tasks" activeClassName="selected">
                Manage Task
            </NavLink>
            <NavLink to="/Users" activeClassName="selected">
                Manage User
            </NavLink>
        </div>
    )
}

export default Nav;

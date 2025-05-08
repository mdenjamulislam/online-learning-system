import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { GoSun } from "react-icons/go";
import { IoMoonOutline } from "react-icons/io5";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const handleThemeToggle = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    const handleLogOut = () => {
        logOut()
            .then((result) => {
                console.log("User Sign out successfully!");
            })
            .catch((error) => {
                console.log(error.message);
            });
    };


    return (
        <nav className="bg-base-100 sticky top-0 z-50 w-full shadow-lg">
            <div className="navbar container">
                <div className="navbar-start">
                    <Link to="/" className="text-xl font-bold uppercase">
                        Dev<span className="text-accent">Skill</span>
                    </Link>
                </div>
                <div className="navbar-end gap-3">
                    <label className="swap swap-rotate btn btn-ghost btn-circle">
                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" onClick={handleThemeToggle} className="theme-controller" value="dark" />
                        <GoSun className="swap-off fill-current text-xl" />
                        <IoMoonOutline className="swap-on fill-current text-xl" />
                    </label>
                    <div className="flex items-center gap-2">
                        {user ? (
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                    <li>
                                        <Link to="/dashboard">Dashboard</Link>
                                    </li>
                                    <li>
                                        <a onClick={handleLogOut}>Logout</a>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <Link to="/login" className="btn btn-accent btn-sm lg:btn-md rounded-full px-6">
                                Join Us
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

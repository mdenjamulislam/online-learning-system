import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { GoSun } from "react-icons/go";
import { IoMoonOutline } from "react-icons/io5";

const Navbar = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const handleThemeToggle = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };
    return (
        <nav className="w-full bg-base-100 shadow-lg sticky top-0 z-50">
            <div className="container navbar">
                <div className="navbar-start">
                    <Link to="/" className="text-xl uppercase font-bold">
                        Dev<span className="text-accent">Skill</span>
                    </Link>
                </div>
                <div className="navbar-end gap-3">
                    <label className="swap swap-rotate btn btn-ghost btn-circle">
                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" onClick={handleThemeToggle} className="theme-controller" value="dark" />
                        <GoSun className="swap-off text-xl fill-current" />
                        <IoMoonOutline className="swap-on text-xl fill-current" />
                    </label>
                    <div className="flex items-center gap-2">
                        <Link to="/login" className="btn btn-accent btn-sm lg:btn-md rounded-full px-6">
                            Join Us
                        </Link>
                    </div>
                    {/* <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li>
                                <a>Settings</a>
                            </li>
                            <li>
                                <a>Logout</a>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

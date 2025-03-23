import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";

const Root = () => {
    return (
        <>
            <Navbar />
            <main className="container">
                <Outlet />
            </main>
        </>
    );
};

export default Root;

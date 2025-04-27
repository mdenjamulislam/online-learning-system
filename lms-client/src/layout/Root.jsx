import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";

const Root = () => {
    return (
        <>
            <Navbar />
            <main >
                <Outlet />
            </main>
        </>
    );
};

export default Root;

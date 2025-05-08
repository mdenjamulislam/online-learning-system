import React from "react";
import TopNav from "../components/dashboard/TopNav";
import { Outlet } from "react-router";

const Dashboard = () => {
    return (
        <div className="min-h-full">
            <TopNav />
            <main>
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <Outlet/>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;

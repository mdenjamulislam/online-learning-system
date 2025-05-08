import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, Outlet } from "react-router";

const PublicRoute = () => {
    const { user } = useContext(AuthContext);
    return user ? <Navigate to="/dashboard" replace /> : <Outlet />;
};

export default PublicRoute;

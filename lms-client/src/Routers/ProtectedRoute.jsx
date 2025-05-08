import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
    const { user } = useContext(AuthContext);

    return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;

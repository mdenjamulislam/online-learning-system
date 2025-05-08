import { Routes, Route } from "react-router";
import Root from "../layout/Root";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import CoursesList from "../pages/CoursesList/CoursesList";
import SignUp from "../pages/SignUp/SignUp";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Root />}>
                <Route index element={<Home />} />
                <Route path="dashboard" element={<Home />} />
                <Route element={<PublicRoute />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                </Route>

                <Route element={<ProtectedRoute />}>
                    <Route path="/dashboard" element={<Dashboard />}>
                        <Route index element={<CoursesList />} />
                    </Route>
                </Route>
            </Route>
        </Routes>
    );
};

export default Routers;

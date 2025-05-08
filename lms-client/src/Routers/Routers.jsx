import { Routes, Route } from "react-router";
import Root from "../layout/Root";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "../layout/Dashboard";
import AddCourse from "../components/dashboard/AddCourses";
import DashboardUI from "../pages/Dashboard/DashboardUI";
import UpdateCourse from "../components/dashboard/UpdateCourse";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Root />}>
                <Route index element={<Home />} />
                <Route element={<PublicRoute />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                </Route>
            </Route>
            <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<Dashboard />}>
                    <Route index element={<DashboardUI />} />
                    <Route path="/dashboard/add-course" element={<AddCourse />} />
                </Route>
                <Route path="/courses/:courseId" element={<UpdateCourse />} />
            </Route>
        </Routes>
    );
};

export default Routers;

import { Routes, Route } from "react-router";
import Root from "../layout/Root";
import Dashboard from "../pages/Dashboard/Dashboard";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Root />}>
                <Route index element={<Dashboard />} />
                <Route path="dashboard" element={<Dashboard />} />
            </Route>
        </Routes>
    );
};

export default Routers;

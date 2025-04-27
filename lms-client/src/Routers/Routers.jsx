import { Routes, Route } from "react-router";
import Root from "../layout/Root";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Root />}>
                <Route index element={<Home />} />
                <Route path="dashboard" element={<Home />} />
                <Route path="/login" element={<Login/>}/>
            </Route>
        </Routes>
    );
};

export default Routers;

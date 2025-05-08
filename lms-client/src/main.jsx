import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Routers from "./Routers/Routers";
import AuthProvider from "./Provider/AuthProvider";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <AuthProvider>
            <Routers />
        </AuthProvider>
    </BrowserRouter>,
);
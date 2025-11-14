import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./Footer"
import NavBar from "./NavBar"

const AppLayout = ({ isAuthenticated, username, setIsAuthenticated, setUsername }) => {
    useEffect(function() {
        if (localStorage.getItem("dark") == null) {
            localStorage.setItem("dark", "false");
        }
    }, []);

    const [darkMode, setDarkMode] = useState(localStorage.getItem("dark") == true);

    const handleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem("dark", newDarkMode ? "true": "false");
    };

    return (
        <div className={darkMode ? "dark" : ""}>
        </div>
    )

}

export default AppLayout;
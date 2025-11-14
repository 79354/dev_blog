import { BrowserRouter, Routes, Router } from "react-router-dom";
import AppLayout from "./ui_comp/AppLayout.jsx"
import { Button } from "./components/ui/button.jsx";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

const App = () => {
    return (
        <div>
            const [username, setUsername] = useState(null);
            const [isAuthenticated, setIsAuthenticated] = useState(null);

            const { data } = useQuery({
                queryKey: ["username"],
                queryFn: getUsername,
            });

            useEffect(
                function () {
                if (data) {
                    setUsername(data.username);
                    setIsAuthenticated(true);
                }
                },
                [data]
            );

            return (
                <BrowserRouter>
                    <Routes>

                    </Routes>
                </BrowserRouter>
            )

        </div>
    )
}

export default App;
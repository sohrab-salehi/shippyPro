import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./components/MainLayout";
import Airports from "./pages/Airports";
import BestFlight from "./pages/BestFlight";
import ErrorPage from "./pages/ErrorPage";
import Flights from "./pages/Flights";
import Home from "./pages/Home";

import "./App.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                element: <Home />,
                index: true,
            },
            {
                path: "/flights",
                element: <Flights />,
            },
            {
                path: "/airports",
                element: <Airports />,
            },
            {
                path: "/best-flight",
                element: <BestFlight />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;

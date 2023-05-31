import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./components/MainLayout";
import Airports from "./pages/Airports";
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
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;

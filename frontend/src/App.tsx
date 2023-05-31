import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";

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
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;

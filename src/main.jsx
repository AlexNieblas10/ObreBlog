import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Recientes } from "./pages/Recientes.jsx";
import { Ciudad } from "./pages/Ciudad.jsx";
import "./index.css";

const router = createBrowserRouter([
	{
		path: "/recientes",
		element: <Recientes />,
	},
	{
		path: "/ciudad",
		element: <Ciudad/>,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

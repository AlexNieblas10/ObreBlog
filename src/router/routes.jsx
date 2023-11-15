import { createBrowserRouter } from "react-router-dom"

import { Principal } from "../pages/Principal"
import { UserConnect } from "../pages/UserConnect"

import { Salir } from "../pages/Salir"
import { MisPosts } from "../pages/MisPosts"
import { Post } from "../pages/FullPost"
import { NotFound } from "../pages/NotFound"
import { MyAccountInformation } from "../pages/MyAccountInformation"
import { CreatePost } from "../pages/CreatePost"
import { Page } from "../components/Page"
import { Comments } from "../components/Comments"

export const routes = createBrowserRouter([
	{
		path: "/connect",
		element: <UserConnect />,
	},
	{
		path: "/",
		element: <Principal />,
		errorElement: <NotFound />,
	},
	{
		path: "/micuenta",
		element: <MyAccountInformation />,
	},
	{
		path: "/misposts",
		element: <MisPosts />,
	},
	{
		path: "/salir",
		element: <Salir />,
	},
	{
		path: "/crearpost",
		element: <CreatePost />,
	},
	{
		path: "/notfound",
		element: <NotFound />,
	},
	{
		path: "/post/:postid",
		element: <Post />,
	},
	{
		path: "/posts/:category",
		element: <Page />,
	},
	{
		path:"/comments",
		element: <Comments />
	}
])

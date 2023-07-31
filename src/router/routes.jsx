import { createBrowserRouter } from 'react-router-dom'
import { Ciudad } from '../pages/Ciudad'
import { Principal } from '../pages/Principal'
import { Recientes } from '../pages/Recientes'
import { UserConnect } from '../pages/UserConnect'
import { Tecnologia } from '../pages/Tecnologia'
import { Videojuegos } from '../pages/Videojuegos'
import { Deportes } from '../pages/Deportes'
import { Social } from '../pages/Social'
import { Salir } from '../pages/Salir'
import { MisPosts } from '../pages/MisPosts'
import { Post } from '../pages/FullPost'
import { NotFound } from '../pages/NotFound'
import { MyAccountInformation } from '../pages/MyAccountInformation'
import { CreatePost } from '../pages/CreatePost'

export const routes = createBrowserRouter([
	{
		path: '/connect',
		element: <UserConnect />,
	},
	{
		path: '/',
		element: <Principal />,
		errorElement: <NotFound />,
	},
	{
		path: '/recientes',
		element: <Recientes />,
	},
	{
		path: '/ciudad',
		element: <Ciudad />,
	},
	{
		path: '/tecnologia',
		element: <Tecnologia />,
	},
	{
		path: '/videojuegos',
		element: <Videojuegos />,
	},
	{
		path: '/deportes',
		element: <Deportes />,
	},
	{
		path: '/social',
		element: <Social />,
	},
	{
		path: '/micuenta',
		element: <MyAccountInformation />,
	},
	{
		path: '/misposts',
		element: <MisPosts />,
	},
	{
		path: '/salir',
		element: <Salir />,
	},
	{
		path: '/crearpost',
		element: <CreatePost />
	},
	{
		path: '/notfound',
		element: <NotFound />,
	},
	{
		path: '/post/:postid',
		element: <Post />,
	},
])

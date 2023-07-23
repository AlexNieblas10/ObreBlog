import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Recientes } from './pages/Recientes.jsx'
import { Ciudad } from './pages/Ciudad.jsx'
import './index.css'
import { Principal } from './pages/Principal.jsx'
import { ContextProvider } from './context/context.jsx'
import { UserConnect } from './pages/UserConnect.jsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Principal />,
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
		path: '/connect',
		element: <UserConnect />,
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<ContextProvider>
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	</ContextProvider>
)

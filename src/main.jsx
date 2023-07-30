import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ContextProvider } from './context/context.jsx'
import { routes } from './router/routes.jsx'
import './globalStyles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<ContextProvider>
		<React.StrictMode>
			<RouterProvider router={routes} />
		</React.StrictMode>
	</ContextProvider>
)

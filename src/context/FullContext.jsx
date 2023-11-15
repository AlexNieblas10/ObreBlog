import { createContext, useEffect, useState } from "react"
import { configLocal } from "../utils/urtToServerLocal"
import { config } from "../utils/urtToServer"

export const MainContext = createContext()

export function ContextProvider({ children }) {
	const [activeAccount, setActiveAccount] = useState(false)
	const [activeNavegation, setActiveNavegation] = useState(false)

	const [loggedUser, setLoggetUser] = useState(
		localStorage.getItem("wasConnected")
	)

	const serverUrl =import.meta.env.MODE === "development" ? configLocal : config
	useEffect(() => {
		if (activeAccount) {
			setActiveNavegation(false)
		}
	}, [activeAccount])

	useEffect(() => {
		if (activeNavegation) {
			setActiveAccount(false)
		}
	}, [activeNavegation])

	return (
		<MainContext.Provider
			value={{
				loggedUser,
				setLoggetUser,
				activeAccount,
				setActiveAccount,
				activeNavegation,
				setActiveNavegation,
				serverUrl,
			}}
		>
			{children}
		</MainContext.Provider>
	)
}

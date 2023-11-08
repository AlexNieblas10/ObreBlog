import { createContext, useEffect, useState } from "react"

export const MainContext = createContext()

export function ContextProvider({ children }) {
	const [activeAccount, setActiveAccount] = useState(false)
	const [activeNavegation, setActiveNavegation] = useState(false)

	const [loggedUser, setLoggetUser] = useState(
		localStorage.getItem("wasConnected")
	)

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
			}}
		>
			{children}
		</MainContext.Provider>
	)
}

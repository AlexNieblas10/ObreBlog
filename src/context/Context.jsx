import { createContext, useState } from "react";

export const MainContext = createContext();

export function ContextProvider({ children }) {
	const [loggedUser, setLoggetUser] = useState(false);

	return (
		<MainContext.Provider value={{ loggedUser, setLoggetUser }}>
			{children}
		</MainContext.Provider>
	);
}

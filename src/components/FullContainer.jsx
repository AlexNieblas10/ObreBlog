import { useContext, useEffect, } from "react";
import { MainContext } from "../context/FullContext";

export const FullContainer = ({ children }) => {

	const { setWidth } = useContext(MainContext)


	const cambioDePantalla = () => {
		setWidth(window.innerWidth)
	}

	useEffect(() => {
		window.addEventListener('resize', cambioDePantalla)
	})

	return <main>{children}</main>
}

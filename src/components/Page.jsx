import { useNavigate } from "react-router-dom"
import { CATEGORIES } from "../utils/CATEGORIES.d"
import { FullContainer } from "./FullContainer"
import { MainContainer } from "./MainContainer"
import { MyAccount } from "./MyAccount"
import { NavegationColumn } from "./NavegationColumn"
import { NavegationColumnMobile } from "./NavegationColumnMobile"
import { Title } from "./Title"
import { useEffect, useState } from "react"

export const Page = () => {
	const [loading, setLoading] = useState(true)

	const category = window.location.pathname.split("/")[2]
	const isValid = CATEGORIES.findIndex((name) => name === category)
	const navigate = useNavigate()
	useEffect(() => {
		if (isValid < 0) {
			navigate("/notfound")
		}
	})

	return (
		<>
			<FullContainer>
				<NavegationColumn />
				<NavegationColumnMobile />
				<MainContainer>
					<MyAccount />
					<Title>{CATEGORIES[isValid]}</Title>
					{loading && <h1 className="text-5xl text-black">Cargando...</h1>}
				</MainContainer>
			</FullContainer>
		</>
	)
}

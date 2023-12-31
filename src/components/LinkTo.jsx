import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MainContext } from '../context/FullContext'

export const LinkTo = ({ children, link }) => {
	const { setActiveNavegation, setActiveAccount } = useContext(MainContext)

	return (
		<Link
			onClick={() => {
				setActiveNavegation(false)
				setActiveAccount(false)
			}}
			className="w-max text-2xl transition-[color,_transform] duration-300 hover:text-green-500   hover:scale-[1.2]"
			to={link}
		>
			{children}
		</Link>
	)
}

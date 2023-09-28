export const Title = ({ children }) => {
	return (
		<div className="grid place-items-center min-h-[20vh] shadow-sm">
			<h1 className="first-letter:uppercase text-5xl text-center text-green-800">{children}</h1>
		</div>
	)
}

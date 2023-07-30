import { LinkTo } from './LinkTo'

export const NavegationColumn = () => {
	return (
		<aside className="fixed max-w-[200px] min-w-[200px] h-screen hidden md:flex flex-col items-center m-0 z-20 shadow-xl dark:shadow-white dark:text-white dark:bg-slate-800">
			<figure className="h-[20vh] box-border flex justify-center m-0 p-3 max-w-[200px]">
				<img
					className="object-contain w-[150px]"
					src="/src/assets/ObreBlog-logo.png"
					alt="Logo de ObreBlog"
				/>
			</figure>

			<ul className="box-border w-full h-[65vh] list-none p-0 m-0 text-center flex flex-col justify-center items-center gap-10 border-b-2">
				<LinkTo link={'/recientes'}>Recientes</LinkTo>
				<LinkTo link={'/ciudad'}>Ciudad</LinkTo>
				<LinkTo link={'/tecnologia'}>Tecnologia</LinkTo>
				<LinkTo link={'/videojuegos'}>Videojuegos</LinkTo>
				<LinkTo link={'/deportes'}>Deportes</LinkTo>
				<LinkTo link={'/social'}>Social</LinkTo>
			</ul>

			<footer className="h-[15vh] grid place-items-center p-2">
				<h3 className="text-center text-xl">Coopera con el proyecto</h3>

				<ul className="flex gap-2">
					<li className="w-[50%]  ">
						<a
							href=""
							className="flex justify-center hover:text-red-400 transition-colors duration-300"
						>
							<img
								className="w-[28%] object-cover"
								src="/src/assets/github_icon.png"
								alt=""
							/>
							GitHub
						</a>
					</li>
					<li className="w-[50%]  ">
						<a
							href=""
							className="flex justify-center hover:text-red-400 transition-colors duration-300"
						>
							<img className="w-[28%]" src="/src/assets/mail_icon.png" alt="" />
							Mail
						</a>
					</li>
				</ul>
			</footer>
		</aside>
	)
}

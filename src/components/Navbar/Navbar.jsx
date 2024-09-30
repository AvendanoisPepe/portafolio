import './styles.scss'
import projectNavbar from './dataNavbar'
import projectNavbarEs from './dataNavbarEs'
import { useContext, useEffect, useState } from 'react'
import LinkRoute from './LinkRoute'
import IconGit from '../../icons/IconGit'
import IconLinkedin from '../../icons/IconLinkedin'
import IconGmail from '../../icons/IconGmail'
import IconContacto from '../../icons/IconContacto'
import IconAndMe from '../../icons/IconAndMe'
import IconWork from '../../icons/IconWork'
import IconProyect from '../../icons/IconProyect'
import ContadorContext from '../../context/ContadorContext' // Importa el contexto para el tema

export default function Navbar() {
	const { theme, lenguaje, toggleTheme } = useContext(ContadorContext) // Accede al estado y la función

	// Estado para el ícono seleccionado
	const [selectedIcon, setSelectedIcon] = useState('home')
	// Mapeo de íconos para fácil acceso
	const icons = {
		home: <IconAndMe />,
		work: <IconWork />,
		proyect: <IconProyect />,
	}
	return (
		<header className="header">
			<div className="inicial">
				<h1 className="inicial__name">
					Sebastian Avendaño <br /> Gonzalez
				</h1>
				<span className="inicial__cargo">Junior Frontend Engineer</span>
				<p className="inicial__defi">
					{lenguaje === 'Español'
						? 'Bienvenido a un portafolio en proceso - Entre más diferente sea el desarrollo, más interés me genera, todo sea por la anécdota.'
						: 'Welcome to a portfolio in progress - The more different the development, the more interest it generates for me, all for the anecdote'}
				</p>
			</div>

			{/* {contenido} */}
			<ul className="pagin">
				<div className="icono">{icons[selectedIcon]}</div>
				{lenguaje === "Español" ? (
					projectNavbarEs &&
					projectNavbarEs.map((link, i) => {
						return (
							<LinkRoute
								key={i}
								link={link}
								onSelect={() => setSelectedIcon(link.icon)}
								isActive={selectedIcon === link.icon}
							/>
						)
					})
				) : (
					projectNavbar &&
					projectNavbar.map((link, i) => {
						return (
							<LinkRoute
								key={i}
								link={link}
								onSelect={() => setSelectedIcon(link.icon)}
								isActive={selectedIcon === link.icon}
							/>
						)
					})
				)}
			</ul>

			{/* {version} */}
			<div className="redes">
				<a href="https://github.com/AvendanoisPepe" target="_blac">
					<p>Git</p> <IconGit />
				</a>
				<a className="linkedin">
					<p>Linkedin</p> <IconLinkedin />
				</a>
				<a className="gmail">
					<p>Gmail</p> <IconGmail />
				</a>
				<a className="espe">
					<p>{lenguaje === 'Español' ? 'Contacto' : 'Contact'}</p>
					<IconContacto />
				</a>
			</div>
		</header>
	)
}

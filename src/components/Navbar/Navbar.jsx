import './styles.scss'
import projectNavbar from './dataNavbar'
import { useEffect, useState } from 'react'
import LinkRoute from './LinkRoute'
import IconGit from '../../icons/IconGit'
import IconLinkedin from '../../icons/IconLinkedin'
import IconGmail from '../../icons/IconGmail'
import IconContacto from '../../icons/IconContacto'
import IconAndMe from '../../icons/IconAndMe'
import IconWork from '../../icons/IconWork'
import IconProyect from '../../icons/IconProyect'
export default function Navbar() {
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
				<p className="inicial__defi">Entre mas ramdom el desarrollo mas interes me genera.</p>
			</div>

			{/* {contenido} */}
			<ul className="pagin">
				<div className="icono">{icons[selectedIcon]}</div>
				{projectNavbar &&
					projectNavbar.map((link, i) => {
						return (
							<LinkRoute
								key={i}
								link={link}
								onSelect={() => setSelectedIcon(link.icon)}
								isActive={selectedIcon === link.icon}
							/>
						)
					})}
			</ul>

			{/* {version} */}
			<div className="redes">
				<div>
					<p>Git</p> <IconGit />
				</div>
				<div>
					<p>Linkedin</p> <IconLinkedin />
				</div>
				<div>
					<p>Gmail</p> <IconGmail />
				</div>
				<div className="espe">
					<p>Contacto</p> <IconContacto />
				</div>
			</div>
		</header>
	)
}

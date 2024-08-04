import './styles.scss'
import projectNavbar from './dataNavbar'
import { useEffect, useState } from 'react'
import LinkRoute from './LinkRoute'
import IconGit from '../../icons/IconGit'
import IconLinkedin from '../../icons/IconLinkedin'
import IconGmail from '../../icons/IconGmail'
import IconContacto from '../../icons/IconContacto'

export default function Navbar() {
	return (
		<header className="header">
			{/* {cabcera buscador logo} */}
			<div className="inicial">
				<h1 className="inicial__name">
					Sebastian Avendaño <br /> Gonzalez
				</h1>
				<span className="inicial__cargo">Junior Frontend Engineer</span>
				<p className="inicial__defi">Entre mas ramdom el desarrollo mas interes me genera.</p>
			</div>

			{/* {contenido} */}
			<ul className="pagin">
				{projectNavbar &&
					projectNavbar.map((link, i) => {
						return <LinkRoute key={i} link={link} />
					})}
			</ul>

			{/* {version} */}
			<div className="redes">
				<div>
					<p>git</p> <IconGit />
				</div>
				<div>
					<p>linkedin</p> <IconLinkedin />
				</div>
				<div>
					<p>gmail</p> <IconGmail />
				</div>
				<div className="espe">
					<p>contacto</p> <IconContacto />
				</div>
			</div>
		</header>
	)
}

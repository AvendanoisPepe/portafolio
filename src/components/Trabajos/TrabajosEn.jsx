import { useContext, useState } from 'react'
import ParticlesComponent from './../particles/particles'
import ContadorContext from './../../context/ContadorContext' // Importa el contexto para el tema
import './style.scss'
export default function TrabajosEn() {
	const { theme, toggleTheme } = useContext(ContadorContext) // Accede al estado y la función

	// Define the colors based on the theme
	const particleColor = theme === 'dark' ? '#FFFFFF' : '#000000'
	const linkColor = theme === 'dark' ? '#FFFFFF' : '#000000'
	return (
		<div className="welcome">
			<ParticlesComponent id="particles" particleColor={particleColor} linkColor={linkColor} />
			<div className="contadorTrabajo">
				<a className="trabajo" href="/#/televentas">
					<div className="contexto">
						<h2>Web Training Televentas Colombia</h2>
						<p>
							He created this system with great care, since it was the first time he carried out a
							<span> project with comparative graphics</span>, in this case of two different data
							plans. As it was the first time, <span>several updates were generated</span> to
							generate the <span>best version</span>. It also includes <span>scripts</span> and
							<span>sales arguments</span>.
						</p>
					</div>
					<div className="linea"></div>
					<div className="tabs">
						<h2>2024 - Present</h2>
						<ul>
							<li>CHART.JS</li>
							<li>JAVASCRIPT</li>
							<li>REACT</li>
							<li>WEBPACK</li>
						</ul>
					</div>
				</a>
				<a className="trabajo" href="/#/claroTmk">
					<div className="tabs">
						<h2>2024 - Present</h2>
						<ul>
							<li>JSX - SASS</li>
							<li>JAVASCRIPT</li>
							<li>REACT</li>
							<li>WEBPACK</li>
						</ul>
					</div>
					<div className="linea"></div>
					<div className="contexto">
						<h2>Web Training Claro TMK</h2>
						<p>
							In this project, <span> the graphics were improved</span>, since a new system was
							generated where <span> multiple characteristics</span> of two different cell phones
							are compared and it is specified which of the two cases is better. Likewise,{' '}
							<span> different developments</span> are contemplated for the benefit of the user.
						</p>
					</div>
				</a>
				<a className="trabajo" href="/#/jetsmart">
					<div className="contexto">
						<h2>Web Training JetSmart</h2>
						<p>
							System with the objective of visualizing the greatest number of possible cases for a
							respective situation <span>(various scripts)</span>, with the same objective{' '}
							<span> several processes</span> were created, where each one fulfills the objective
							that a new person in the area <span>has an exact and detailed route</span> to solve
							the need of the moment.
						</p>
					</div>
					<div className="linea"></div>
					<div className="tabs">
						<h2>2024 - Present</h2>
						<ul>
							<li>JSX - SASS</li>
							<li>JAVASCRIPT</li>
							<li>REACT</li>
							<li>WEBPACK</li>
						</ul>
					</div>
				</a>
				<a className="trabajo" href="/#/colpatria">
					<div className="tabs">
						<h2>2022 - Present</h2>
						<ul>
							<li>HTML - SASS</li>
							<li>JAVASCRIPT</li>
							<li>SWEETALERT2</li>
							<li>JQUERY</li>
						</ul>
					</div>
					<div className="linea"></div>
					<div className="contexto">
						<h2>Web Training Colpatria</h2>
						<p>
							System generated to be a <span> large information library</span> where its main
							function is the consultation of documents and processes{' '}
							<span> (Checklist, Note Generators)</span>, with a general search engine and a menu
							designed by main sections and submenus so that the{' '}
							<span> information is well distributed</span>.
						</p>
					</div>
				</a>
			</div>
		</div>
	)
}

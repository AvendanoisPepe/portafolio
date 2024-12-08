import { useContext, useState } from 'react'
import ParticlesComponent from './../particles/particles'
import ContadorContext from './../../context/ContadorContext' // Importa el contexto para el tema
import "./style.scss"
export default function Trabajos() {
	const { theme, toggleTheme } = useContext(ContadorContext) // Accede al estado y la función

	
	// Define the colors based on the theme
	const particleColor = theme === 'dark' ? '#FFFFFF' : '#000000'
	const linkColor = theme === 'dark' ? '#FFFFFF' : '#000000'
	return (
		<div className="welcome">
			<ParticlesComponent id="particles" particleColor={particleColor} linkColor={linkColor} />
			<div className="contadorTrabajo">
				<a className="trabajo" href="https://avendanoispepe.github.io/portafolio/#/televentas">
					<div className="contexto">
						<h2>Web Training maria Colombia</h2>
						<p>
							Este sistema lo cree con mucho cariño, ya que fue la primera vez que realizó un
							<span> proyecto de gráficas comparativas</span>, en este caso de dos diferentes planos
							de datos, como era la primera vez se <span>generaron varias actualizaciones</span>{' '}
							para generar <span>la mejor versión</span>, también incluye <span>Scripts</span> y
							<span> argumentarios de ventas</span>.
						</p>
					</div>
					<div className="linea"></div>
					<div className="tabs">
						<h2>2024 - Presente</h2>
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
						<h2>2024 - Presente</h2>
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
							En este proyecto se <span>perfeccionaron las gráficas</span>, ya que se generó un
							nuevo sistema donde se comparan <span>múltiples características</span> de dos
							celulares distintos y se especifica cuál de los dos casos es mejor, de igual forma se
							contempla <span>diferentes desarrollos</span> para el beneficio del usuario.
						</p>
					</div>
				</a>
				<a className="trabajo" href="/#/jetsmart">
					<div className="contexto">
						<h2>Web Training JetSmart</h2>
						<p>
							Sistema con el objetivo de visualizar la mayor cantidad de casos posibles a una
							situación respectiva <span>(Scripts variados)</span>, con el mismo objetivo se crearon
							<span> varios procesos</span>, donde cada uno cumple el objetivo que una persona nueva
							en el área tenga una <span> ruta exacta y detallada</span> para solucionar la
							necesidad del momento.
						</p>
					</div>
					<div className="linea"></div>
					<div className="tabs">
						<h2>2024 - Presente</h2>
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
						<h2>2022 - Presente</h2>
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
							Sistema generado para ser una <span> gran biblioteca de información</span> donde su
							principal función es la consulta de documentos y procesos{' '}
							<span>(Checklist, Generadores de notas)</span>, con un buscador general y un menú
							diseñado por secciones principales y submenús para que estuviera bien{' '}
							<span>distribuida la información</span>.
						</p>
					</div>
				</a>
			</div>
		</div>
	)
}

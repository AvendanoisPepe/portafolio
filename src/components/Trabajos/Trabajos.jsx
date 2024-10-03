import { useContext, useState } from 'react'
import ParticlesComponent from './../particles/particles'
import welcomeNegro from './../../assets/images/index/welcomeNegro.png'
import welcomeBlanco from './../../assets/images/index/welcomeBlanco.png'
import objetivoNegro from './../../assets/images/index/objectBlack.png'
import objetivoWhite from './../../assets/images/index/objectWhite.png'
import gymNegro from './../../assets/images/index/gymNegro.png'
import gymBlanco from './../../assets/images/index/gymBlanco.png'
import IconCircle from '../../icons/IconCircle'
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
				<div className="trabajo">
					<div className="contexto">
						<h2>Web Training Televentas Colombia</h2>
						<p>
							Este sistema lo cree con mucho cariño ya que fue la primera vez que realice un proyecto con graficas comparativas, en este caso de dos
							difentes planes de datos, como era la primera vez se generon varias actualizaciones al mismo desarrollo para generar la mejor version, el proyecto tambien
							incluye Scripts y argumentarios de ventas.
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
				</div>
				<div className="trabajo">
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
							En este proyecto se perfeccionaron las graficas ya que se genero un nuevo sistema donde se comparan multiples caractericas de dos celulares distintos y se especifica cual de los dos casos es mejor, de igual forma se contempla diferentes desarrollos para el beneficio del usuario.
						</p>
					</div>
				</div>
				<div className="trabajo">
					<div className="contexto">
						<h2>Web Training JetSmart</h2>
						<p>
							Sistema con el objetivo de visualizar la mayor cantidad de casos posibles a una situacion respectiva (Scripts variados), con el mismo objetivo se creo el ayudante de comandos, los casos DINSIDE, Glosarios, tipificadores, donde cada uno cumple el objetivo que una persona nueva en el area tenga una ruta exacta y detallada para solucionar la necesidad del momento.
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
				</div>
				<div className="trabajo">
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
							{/* El primer proyecto grande que trabaje en la empresa actual en la que trabajo, como se estaba iniciando se genero a base de tecnologias basicas pero se busco un diseño agradable con el usuario basado en la b */}
							Sistema generado para ser una gran biblioteca de informacion donde su principal funcion es la consulta de documentos y procesos (CheckList, Generadores de notas), con un buscador general y un menu diseñado por secciones principales y submenus para que estuviera bien distribuida la informacion.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

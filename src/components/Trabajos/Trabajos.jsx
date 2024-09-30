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
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nesciunt at,
							fugiat veniam aliquam labore possimus. Officiis laudantium numquam nobis aut quia
							aliquam vitae, suscipit quisquam, accusamus maiores sequi quidem.
						</p>
					</div>
					<div className="linea"></div>
					<div className="tabs">
						<h2>2022 - Presente</h2>
						<ul>
							<li>HTML - SASS</li>
							<li>JAVASCRIPT</li>
							<li>SWEETALERT2</li>
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
						</ul>
					</div>
					<div className="linea"></div>
					<div className="contexto">
						<h2>Web Training Claro TMK</h2>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nesciunt at,
							fugiat veniam aliquam labore possimus. Officiis laudantium numquam nobis aut quia
							aliquam vitae, suscipit quisquam, accusamus maiores sequi quidem.
						</p>
					</div>
				</div>
				<div className="trabajo">
					<div className="contexto">
						<h2>Web Training JetSmart</h2>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nesciunt at,
							fugiat veniam aliquam labore possimus. Officiis laudantium numquam nobis aut quia
							aliquam vitae, suscipit quisquam, accusamus maiores sequi quidem.
						</p>
					</div>
					<div className="linea"></div>
					<div className="tabs">
						<h2>2022 - Presente</h2>
						<ul>
							<li>HTML - SASS</li>
							<li>JAVASCRIPT</li>
							<li>SWEETALERT2</li>
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
						</ul>
					</div>
					<div className="linea"></div>
					<div className="contexto">
						<h2>Web Training Colpatria</h2>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nesciunt at,
							fugiat veniam aliquam labore possimus. Officiis laudantium numquam nobis aut quia
							aliquam vitae, suscipit quisquam, accusamus maiores sequi quidem.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

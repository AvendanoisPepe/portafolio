import { useContext, useState } from 'react'
import ParticlesComponent from './../particles/particles'
import ContadorContext from './../../context/ContadorContext' // Importa el contexto para el tema
import htmlBlack from "../../assets/images/trabajos/htmlBlack.png"
import htmlWhite from "../../assets/images/trabajos/htmlWhite.png"
import sassWhite from "../../assets/images/trabajos/sassWhite.png"
import sassBlack from "../../assets/images/trabajos/sassBlack.png"
import jsWhite from "../../assets/images/trabajos/jsWhite.png"
import jsBlack from "../../assets/images/trabajos/jsBlack.png"
import swetWhite from "../../assets/images/trabajos/swetWhite.png"
import swetBlack from "../../assets/images/trabajos/swetBlack.png"
import col from "../../assets/images/trabajos/col2.png"
import layaout from "../../assets/images/trabajos/layout.png"
import './stylesTra.scss'
export default function Colpatria() {
	const { theme, toggleTheme } = useContext(ContadorContext) // Accede al estado y la función

	// Define the colors based on the theme
	const particleColor = theme === 'dark' ? '#FFFFFF' : '#000000'
	const linkColor = theme === 'dark' ? '#FFFFFF' : '#000000'
	return (
		<div className="welcome">
			<ParticlesComponent id="particles" particleColor={particleColor} linkColor={linkColor} />
			<section className="trabajos">
				<div className="header2">
					<div className="lin"></div>
					<h2>Web Training Colpatria Sac</h2>
					<div className="lin"></div>
				</div>
				<div className="linea"></div>
				<div className="footer">
					<div className="contest">
						<p>
							Sistema generado para ser una gran biblioteca de información donde su principal
							función es la consulta de documentos y procesos (Checklist, Generadores de notas,
							Macros, <br /> Tipificadores, Galerias), con un buscador general y un menú diseñado
							por secciones principales como (Personas, Empresas, Fidelizacion, Procesos Sensibles,
							Lineas Especiales, Ventas) y submenús para cada seccion previamente mencionada, en los
							cuales se dividio la informacion de forma clara.
						</p>
						<div className="ttiitt">
							<figure>
								<img src={layaout} alt="" />
							</figure>
							<h4>Interfaces</h4>
						</div>
						<div className="imagenes">
							<figure>
								<img src={col} alt="" />
							</figure>
						</div>
					</div>
					<article>
						<div className="len">
							<p>SWEETALERT2</p>
							<figure>
								<img className="sass" src={theme === 'dark' ? swetBlack : swetWhite} alt="" />
							</figure>
						</div>
						<div className="abajo"></div>
						<div className="len">
							<p className="espaci">JAVASCRIPT</p>
							<figure className="espaciabajo">
								<img src={theme === 'dark' ? jsBlack : jsWhite} alt="" />
							</figure>
						</div>
						<div className="abajo"></div>
						<div className="len">
							<p className="espaci">SASS</p>
							<figure className="espaciabajo">
								<img src={theme === 'dark' ? sassBlack : sassWhite} alt="" />
							</figure>
						</div>
						<div className="abajo"></div>
						<div className="len">
							<p className="espaci">HTML</p>
							<figure className="espaciabajo">
								<img src={theme === 'dark' ? htmlBlack : htmlWhite} alt="" />
							</figure>
						</div>
					</article>
				</div>
			</section>
		</div>
	)
}

import { useContext, useState } from 'react'
import ParticlesComponent from './../particles/particles'
import GalleryPortal from './GalleryPortal'
import ContadorContext from './../../context/ContadorContext' // Importa el contexto para el tema
import jsxBlack from '../../assets/images/trabajos/jsxBlack.png'
import jsxWhite from '../../assets/images/trabajos/jsxWhite.png'
import webWhite from '../../assets/images/trabajos/webWhite.png'
import webBlack from '../../assets/images/trabajos/webBlack.png'
import charWhite from '../../assets/images/trabajos/charWhite.png'
import charBlack from '../../assets/images/trabajos/charBlack.png'
import reactWhite from '../../assets/images/trabajos/reactWhite.png'
import reactBlack from '../../assets/images/trabajos/reactBlack.png'
import principal from '../../assets/images/trabajos/cla1.png'
import versus1 from '../../assets/images/trabajos/cla2.png'
import versus2 from '../../assets/images/trabajos/cla3.png'
import versus3 from '../../assets/images/trabajos/cla4.png'
import aplica from '../../assets/images/trabajos/cla5.png'
import argu from '../../assets/images/trabajos/cla6.png'
import argu2 from '../../assets/images/trabajos/cla7.png'

import layaout from '../../assets/images/trabajos/layout.png'
import layaoutBlack from '../../assets/images/trabajos/layoutBlack.png'
import './stylesTra.scss'
import VolverTrabajo from '../../context/VolverTrabajo'

export default function ClaroTmkEn() {
	const { theme, toggleTheme } = useContext(ContadorContext) // Accede al estado y la función
	const [selectedButton, setSelectedButton] = useState('') // Estado para almacenar el botón seleccionado
	const [isOpen, setIsOpen] = useState(false)
	// Define the colors based on the theme
	const particleColor = theme === 'dark' ? '#FFFFFF' : '#000000'
	const linkColor = theme === 'dark' ? '#FFFFFF' : '#000000'

	// Función que se ejecuta al hacer clic en un botón
	const handleButtonClick = buttonName => {
		setSelectedButton(buttonName)
		setIsOpen(true) // Abrir el popup
	}

	// Función para cerrar el popup
	const handleClosePopup = () => {
		setIsOpen(false)
	}

	// Imágenes correspondientes a cada botón
	const galleries = {
		'Home Page': [principal],
		'Versus Product': [versus1, versus2, versus3],
		'Web Applications': [aplica],
		'TYT Argument': [argu, argu2],
	}
	return (
		<div className="welcome">
			<ParticlesComponent id="particles" particleColor={particleColor} linkColor={linkColor} />
			<section className="trabajos">
				<div className="header2">
					<div className="lin"></div>
					<h2>Web Training Claro TMK</h2>
					<div className="lin"></div>
				</div>
				<div className="linea"></div>
				<div className="footer">
					<div className="contest">
						<p>
							In this project, the graphics were improved, since a new system was generated where
							multiple characteristics of two different cell phones are compared and it is specified
							which of the two cases is better. In the same way, different developments are
							contemplated, such as "Web Applications" and a "TYT Argument" distributed throughout
							the three main sections of the system.
						</p>
						<div className="ttiitt">
							<figure>
								<img src={theme === 'dark' ? layaoutBlack : layaout} alt="" />
							</figure>
							<h4>layouts</h4>
						</div>
						<div className="imagenes">
							<button onClick={() => handleButtonClick('Home Page')}>Home Page</button>
							<button onClick={() => handleButtonClick('Versus Product')}>Versus Product</button>
							<button onClick={() => handleButtonClick('Web Applications')}>
								Web Applications
							</button>
							<button onClick={() => handleButtonClick('TYT Argument')}>TYT Argument</button>
						</div>
						<div className="ttiitt">
							<figure>
								<img src={theme === 'dark' ? layaoutBlack : layaout} alt="" />
							</figure>
							<h4>layouts</h4>
						</div>
						{/* Aquí agregamos el portal para mostrar la galería */}
						{isOpen && selectedButton && (
							<GalleryPortal
								selectedButton={selectedButton}
								images={galleries[selectedButton]}
								onClose={handleClosePopup}
							/>
						)}
					</div>
					<article>
						<div className="len">
							<p>REACT</p>
							<figure className="espaciabajo">
								<img src={theme === 'dark' ? reactBlack : reactWhite} alt="" />
							</figure>
						</div>
						<div className="abajo"></div>
						<div className="len">
							<p className="espaci">CHART.JS</p>
							<figure className="espaciabajo">
								<img
									className={theme === 'dark' ? '' : 'sass'}
									src={theme === 'dark' ? charBlack : charWhite}
									alt=""
								/>
							</figure>
						</div>
						<div className="abajo"></div>
						<div className="len">
							<p className="espaci">WEBPACK</p>
							<figure className="espaciabajo">
								<img src={theme === 'dark' ? webBlack : webWhite} alt="" />
							</figure>
						</div>
						<div className="abajo"></div>
						<div className="len">
							<p className="espaci">JSX</p>
							<figure className="espaciabajo">
								<img src={theme === 'dark' ? jsxBlack : jsxWhite} alt="" />
							</figure>
						</div>
					</article>
				</div>
			</section>
			<VolverTrabajo />
		</div>
	)
}

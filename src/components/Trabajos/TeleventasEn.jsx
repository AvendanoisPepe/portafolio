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
import principal from '../../assets/images/trabajos/tel1.png'
import noticias1 from '../../assets/images/trabajos/tel2.png'
import noticias2 from '../../assets/images/trabajos/tel3.png'
import script1 from '../../assets/images/trabajos/tel4.png'
import script2 from '../../assets/images/trabajos/tel5.png'
import script3 from '../../assets/images/trabajos/tel6.png'
import argu1 from '../../assets/images/trabajos/tel7.png'
import argu2 from '../../assets/images/trabajos/tel8.png'
import argu3 from '../../assets/images/trabajos/tel9.png'
import mon1 from '../../assets/images/trabajos/tel10.png'
import mon2 from '../../assets/images/trabajos/tel11.png'
import mon3 from '../../assets/images/trabajos/tel12.png'
import mon4 from '../../assets/images/trabajos/tel13.png'
import segui1 from '../../assets/images/trabajos/tel14.png'
import segui2 from '../../assets/images/trabajos/tel15.png'
import segui3 from '../../assets/images/trabajos/tel16.png'
import segui4 from '../../assets/images/trabajos/tel17.png'


import layaout from '../../assets/images/trabajos/layout.png'
import layaoutBlack from '../../assets/images/trabajos/layoutBlack.png'
import './stylesTra.scss'
import VolverTrabajo from '../../context/VolverTrabajo'

export default function TeleventasEn() {
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
		'Movistar VS other operators': [mon1, mon2, mon3, mon4],
		'Sales Scripts': [script1, script2, script3],
		News: [noticias1, noticias2],
		'Indicator Monitoring': [segui1, segui2, segui3, segui4],
		'Sales Argument': [argu1, argu2, argu3],
	}
	return (
		<div className="welcome">
			<ParticlesComponent id="particles" particleColor={particleColor} linkColor={linkColor} />
			<section className="trabajos">
				<div className="header2">
					<div className="lin"></div>
					<h2>Web Training Televentas Colombia</h2>
					<div className="lin"></div>
				</div>
				<div className="linea"></div>
				<div className="footer">
					<div className="contest">
						<p>
							He created this system with great affection, since it was the first time he carried
							out a comparative graphics project, in this case of two different data plans. As it
							was the first time, several updates were generated to generate the best version. It
							also includes (Sales Scripts, News, Sales Argument and Indicator Tracker).
						</p>
						<div className="ttiitt">
							<figure>
								<img src={theme === 'dark' ? layaoutBlack : layaout} alt="" />
							</figure>
							<h4>layouts</h4>
						</div>
						<div className="imagenes">
							<button onClick={() => handleButtonClick('Home Page')}>Home Page</button>
							<button onClick={() => handleButtonClick('Movistar VS other operators')}>
								Movistar VS other operators
							</button>
							<button onClick={() => handleButtonClick('Sales Scripts')}>Sales Scripts</button>
							<button onClick={() => handleButtonClick('Sales Argument')}>
								Sales Argument
							</button>
							<button onClick={() => handleButtonClick('Indicator Monitoring')}>
								Indicator Monitoring
							</button>
							<button onClick={() => handleButtonClick('News')}>News</button>
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

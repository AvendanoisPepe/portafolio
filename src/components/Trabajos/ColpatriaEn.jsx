import { useContext, useState } from 'react'
import ParticlesComponent from './../particles/particles'
import GalleryPortal from './GalleryPortal'
import ContadorContext from './../../context/ContadorContext' // Importa el contexto para el tema
import htmlBlack from '../../assets/images/trabajos/htmlBlack.png'
import htmlWhite from '../../assets/images/trabajos/htmlWhite.png'
import sassWhite from '../../assets/images/trabajos/sassWhite.png'
import sassBlack from '../../assets/images/trabajos/sassBlack.png'
import jsWhite from '../../assets/images/trabajos/jsWhite.png'
import jsBlack from '../../assets/images/trabajos/jsBlack.png'
import swetWhite from '../../assets/images/trabajos/swetWhite.png'
import swetBlack from '../../assets/images/trabajos/swetBlack.png'
import col from '../../assets/images/trabajos/col2.png'
import consulta from '../../assets/images/trabajos/col1.png'
import macro1 from '../../assets/images/trabajos/col3.png'
import macro2 from '../../assets/images/trabajos/col4.png'
import gestor1 from '../../assets/images/trabajos/col5.png'
import gestor2 from '../../assets/images/trabajos/col6.png'
import gestor3 from '../../assets/images/trabajos/col7.png'
import tipi from '../../assets/images/trabajos/col8.png'

import layaout from '../../assets/images/trabajos/layout.png'
import layaoutBlack from '../../assets/images/trabajos/layoutBlack.png'
import './stylesTra.scss'
import VolverTrabajo from '../../context/VolverTrabajo'

export default function ColpatriaEn() {
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
		'Home Page': [col], // Solo una imagen
		'Documentation Consultation': [consulta], // Dos imágenes
		'Notes Manager': [gestor1, gestor2, gestor3], // Solo una imagen
		Macros: [macro1, macro2], // Dos imágenes
		Typifier: [tipi], // Solo una imagen
	}
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
							System generated to be a large information library where its main function is the
							consultation of documents and processes (Checklist, Note Generators, Macros,
							Typifiers, Galleries), with a general search engine and a menu designed by main
							sections such as (People, Companies, Loyalty, Sensitive Processes, Special Lines,
							Sales) and submenus for each previously mentioned section, in which the information
							was divided clearly.
						</p>
						<div className="ttiitt">
							<figure>
								<img src={theme === 'dark' ? layaoutBlack : layaout} alt="" />
							</figure>
							<h4>layouts</h4>
						</div>
						<div className="imagenes">
							<button onClick={() => handleButtonClick('Home Page')}>Home Page</button>
							<button onClick={() => handleButtonClick('Documentation Consultation')}>
								Documentation Consultation
							</button>
							<button onClick={() => handleButtonClick('Notes Manager')}>Notes Manager</button>
							<button onClick={() => handleButtonClick('Macros')}>Macros</button>
							<button onClick={() => handleButtonClick('Typifier')}>Typifier</button>
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
			<VolverTrabajo />
		</div>
	)
}

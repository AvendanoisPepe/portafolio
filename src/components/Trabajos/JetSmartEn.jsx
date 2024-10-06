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

export default function JetSmartEn() {
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
		'Página Inicial': [col], // Solo una imagen
		'Consulta de Documentación': [consulta], // Dos imágenes
		'Gestor de Notas': [gestor1, gestor2, gestor3], // Solo una imagen
		Macros: [macro1, macro2], // Dos imágenes
		Tipificador: [tipi], // Solo una imagen
	}
	return (
		<div className="welcome">
			<ParticlesComponent id="particles" particleColor={particleColor} linkColor={linkColor} />
			<section className="trabajos">
				<div className="header2">
					<div className="lin"></div>
					<h2>Web Training JetSmart</h2>
					<div className="lin"></div>
				</div>
				<div className="linea"></div>
				<div className="footer">
					<div className="contest">
						<p>
							Sistema generado para ser una gran biblioteca de información donde su principal
							función es la consulta de documentos y procesos (Checklist, Generadores de notas,
							Macros, Tipificadores, Galerías), con un buscador general y un menú diseñado por
							secciones principales como (Personas, Empresas, Fidelización, Procesos Sensibles,
							Líneas Especiales, Ventas) y submenús para cada sección previamente mencionada, en los
							cuales se dividió la información de forma clara.
						</p>
						<div className="ttiitt">
							<figure>
								<img src={theme === 'dark' ? layaoutBlack : layaout} alt="" />
							</figure>
							<h4>Interfaces</h4>
						</div>
						<div className="imagenes">
							<button onClick={() => handleButtonClick('Página Inicial')}>Página Inicial</button>
							<button onClick={() => handleButtonClick('Consulta de Documentación')}>
								Consulta de Documentación
							</button>
							<button onClick={() => handleButtonClick('Gestor de Notas')}>Gestor de Notas</button>
							<button onClick={() => handleButtonClick('Macros')}>Macros</button>
							<button onClick={() => handleButtonClick('Tipificador')}>Tipificador</button>
						</div>
						<div className="ttiitt">
							<figure>
								<img src={theme === 'dark' ? layaoutBlack : layaout} alt="" />
							</figure>
							<h4>Interfaces</h4>
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
		</div>
	)
}

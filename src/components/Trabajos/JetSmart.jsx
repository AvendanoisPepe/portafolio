import { useContext, useState } from 'react'
import ParticlesComponent from './../particles/particles'
import GalleryPortal from './GalleryPortal'
import ContadorContext from './../../context/ContadorContext' // Importa el contexto para el tema
import jsxBlack from '../../assets/images/trabajos/jsxBlack.png'
import jsxWhite from '../../assets/images/trabajos/jsxWhite.png'
import sassWhite from '../../assets/images/trabajos/sassWhite.png'
import sassBlack from '../../assets/images/trabajos/sassBlack.png'
import jsWhite from '../../assets/images/trabajos/jsWhite.png'
import jsBlack from '../../assets/images/trabajos/jsBlack.png'
import reactWhite from '../../assets/images/trabajos/reactWhite.png'
import reactBlack from '../../assets/images/trabajos/reactBlack.png'
import principal from '../../assets/images/trabajos/jet1.png'
import casos1 from '../../assets/images/trabajos/jet2.png'
import casos2 from '../../assets/images/trabajos/jet3.png'
import casos3 from '../../assets/images/trabajos/jet4.png'
import aplica from '../../assets/images/trabajos/jet5.png'
import ayuda1 from '../../assets/images/trabajos/jet6.png'
import ayuda2 from '../../assets/images/trabajos/jet7.png'
import ayuda3 from '../../assets/images/trabajos/jet8.png'
import glosario from '../../assets/images/trabajos/jet9.png'
import glosario2 from '../../assets/images/trabajos/jet10.png'
import script from '../../assets/images/trabajos/jet11.png'
import script2 from '../../assets/images/trabajos/jet12.png'
import script3 from '../../assets/images/trabajos/jet13.png'
import voca from '../../assets/images/trabajos/jet14.png'
import voca2 from '../../assets/images/trabajos/jet15.png'

import layaout from '../../assets/images/trabajos/layout.png'
import layaoutBlack from '../../assets/images/trabajos/layoutBlack.png'
import './stylesTra.scss'
import VolverTrabajo from '../../context/VolverTrabajo'

export default function JetSmart() {
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
		'Página Inicial': [principal],
		'Casos DINSIDE': [casos1, casos2, casos3],
		'Aplicativos webs': [aplica],
		'Ayudante de Comandos': [ayuda1, ayuda2, ayuda3],
		Glosario: [glosario, glosario2],
		Vocabulario: [voca, voca2],
		Scripts: [script, script2, script3],
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
							Sistema con el objetivo de visualizar la mayor cantidad de casos posibles a una
							situación respectiva (Scripts variados), con el mismo objetivo se crearon varios
							procesos (casos DINSIDE, Aplicativos, Ayudantes de comandos, Glosario, Vocabulario),
							donde cada uno cumple el objetivo que una persona nueva en el área tenga una ruta
							exacta y detallada para solucionar la necesidad del momento.
						</p>
						<div className="ttiitt">
							<figure>
								<img src={theme === 'dark' ? layaoutBlack : layaout} alt="" />
							</figure>
							<h4>Interfaces</h4>
						</div>
						<div className="imagenes">
							<button onClick={() => handleButtonClick('Página Inicial')}>Página Inicial</button>
							<button onClick={() => handleButtonClick('Casos DINSIDE')}>Casos DINSIDE</button>
							<button onClick={() => handleButtonClick('Aplicativos webs')}>Aplicativos webs</button>
							<button onClick={() => handleButtonClick('Ayudante de Comandos')}>
								Ayudante de Comandos
							</button>
							<button onClick={() => handleButtonClick('Glosario')}>Glosario</button>
							<button onClick={() => handleButtonClick('Vocabulario')}>Vocabulario</button>
							<button onClick={() => handleButtonClick('Scripts')}>Scripts</button>
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
							<p>REACT</p>
							<figure className="espaciabajo">
								<img src={theme === 'dark' ? reactBlack : reactWhite} alt="" />
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

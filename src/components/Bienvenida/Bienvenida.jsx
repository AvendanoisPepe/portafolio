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

export default function Bienvenida() {
	const { theme, toggleTheme } = useContext(ContadorContext) // Accede al estado y la función

	const [hoveredParagraph, setHoveredParagraph] = useState(null)
	const [fixedParagraph, setFixedParagraph] = useState(null) // Para alternar con clic

	const handleMouseEnter = index => {
		if (fixedParagraph !== index) {
			setHoveredParagraph(index)
		}
	}

	const handleMouseLeave = () => {
		if (fixedParagraph === null) {
			setHoveredParagraph(null)
		}
	}

	const handleClick = index => {
		if (fixedParagraph === index) {
			setFixedParagraph(null) // Si ya está fijo, al hacer clic lo desactiva
		} else {
			setFixedParagraph(index) // Fija el párrafo al hacer clic
		}
	}
	return (
		<div className="welcome">
			<ParticlesComponent id="particles" />
			<div className="contador">
				<div
					className="cont"
					onMouseEnter={() => handleMouseEnter(0)}
					onMouseLeave={handleMouseLeave}
					onClick={() => handleClick(0)}>
					{hoveredParagraph === 0 || fixedParagraph === 0 ? (
						<p className="transition-paragraph">
							Programar no era el plan inicial, yo deseaba ser arquitecto, mas aca estamos desde{' '}
							<span>2019 hasta la actualidad</span>, el placer que genera que el codigo este en
							verde, o solucioanr <span>errores tanto en diseño</span> como en la{' '}
							<span>parte logica</span> esta muy fuera de lo comun, al dia de hoy he creado varias
							interfaces / proyectos / noches en vela viendo videos y tutoriales para saber
							exactamente como solucionar el caso de la noche.
						</p>
					) : (
						<h1 className="mientras">
							<IconCircle /> Plan Inicial
						</h1>
					)}
					<figure>
						<img src={theme === "dark" ? welcomeNegro : welcomeBlanco} alt="" />
					</figure>
				</div>
				<div className="linea"></div>
				<div
					className="cont"
					onMouseEnter={() => handleMouseEnter(1)}
					onMouseLeave={handleMouseLeave}
					onClick={() => handleClick(1)}>
					{hoveredParagraph === 1 || fixedParagraph === 1 ? (
						<p className="transition-paragraph">
							Mi objetivo actual es crear <span>nuevas interfaces</span>,{' '}
							<span>nuevas persepciones del desarrollo</span> asi sea el minimo cambio, me emociona
							ver como se puede combinar el <span>BackEnd</span> con el <span>FrontEnd</span> para
							hacer programas tan completos en union con su <span>respectiva BD</span> y sus
							multiples testeos para comprobar la funcionalidad y dar{' '}
							<span>entregas de calidad</span>.
						</p>
					) : (
						<h1 className="mientras">
							<IconCircle /> Objetivo Actual
						</h1>
					)}
					<figure>
						<img src={theme === "dark" ? objetivoNegro : objetivoWhite} alt="" />
					</figure>
				</div>
				<div className="linea"></div>
				<div
					className="cont"
					onMouseEnter={() => handleMouseEnter(2)}
					onMouseLeave={handleMouseLeave}
					onClick={() => handleClick(2)}>
					{hoveredParagraph === 2 || fixedParagraph === 2 ? (
						<p className="transition-paragraph">
							Fuera de la silla me concentro mas en <span>actividades deportivas</span>, soy fiel
							defensor de hacer <span>fallo emocional en el gym</span>, me encanta leer, ya sean
							historias tan fantasticas como game of thrones, como crudas realidades del mundo,{' '}
							<span>me gusta tocar pasto</span> y conocer diferentes lugares e entretenimientos y
							tambien soy <span>fan del anime y el manga</span> :3
						</p>
					) : (
						<h1 className="mientras">
							<IconCircle /> Fuera de la silla
						</h1>
					)}
					<figure>
						<img src={theme === "dark" ? gymNegro : gymBlanco} alt="" />
					</figure>
				</div>
			</div>
		</div>
	)
}

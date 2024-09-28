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

export default function BienvenidaEn() {
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

	// Define the colors based on the theme
	const particleColor = theme === 'dark' ? '#FFFFFF' : '#000000'
	const linkColor = theme === 'dark' ? '#FFFFFF' : '#000000'
	return (
		<div className="welcome">
			<ParticlesComponent id="particles" particleColor={particleColor} linkColor={linkColor} />
			<div className="contador">
				<div
					className="cont"
					onMouseEnter={() => handleMouseEnter(0)}
					onMouseLeave={handleMouseLeave}
					onClick={() => handleClick(0)}>
					{hoveredParagraph === 0 || fixedParagraph === 0 ? (
						<p className="transition-paragraph">
							Programming was not the initial plan, I wanted to be an architect, but here we are
							from <span>2019 to the present</span>, the pleasure that comes from having the code in
							green, or solving <span>errors in both the design</span> and the{' '}
							<span>logical part</span> is very out of the ordinary, to this day I have created
							several interfaces / projects / sleepless nights watching videos and tutorials to know
							exactly how to solve the case of the night.
						</p>
					) : (
						<h1 className="mientras">
							<IconCircle /> Initial Plan
						</h1>
					)}
					<figure>
						<img src={theme === 'dark' ? welcomeNegro : welcomeBlanco} alt="" />
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
							My current goal is to create{' '}
							<span>new interfaces, new perceptions of development</span>, even if it is a minimal
							change. I am excited to see how the <span>BackEnd</span> can be combined with the
							<span>FrontEnd</span> to create such complete programs in conjunction with their
							<span>respective DB</span> and their multiple tests to verify functionality and
							<span>deliver quality</span>.
						</p>
					) : (
						<h1 className="mientras">
							<IconCircle /> Current objective
						</h1>
					)}
					<figure>
						<img src={theme === 'dark' ? objetivoNegro : objetivoWhite} alt="" />
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
							Outside of the chair I focus more on <span>sports activities</span>, I am a staunch
							defender of <span>making emotional failure in the gym</span>, I love to read, whether
							it be stories as fantastic as Game of Thrones, or harsh realities of the world,{' '}
							<span>I like to touch grass</span> and get to know different places, entertainment and
							<span>I am also a fan of anime and manga</span> :3
						</p>
					) : (
						<h1 className="mientras">
							<IconCircle /> Out of the chair
						</h1>
					)}
					<figure>
						<img src={theme === 'dark' ? gymNegro : gymBlanco} alt="" />
					</figure>
				</div>
			</div>
		</div>
	)
}

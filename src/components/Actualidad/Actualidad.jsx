import { useContext } from 'react'
import ParticlesComponent from './../particles/particles'
import ContadorContext from './../../context/ContadorContext' // Importa el contexto para el tema

const Actualidad = () => {
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
					<h2>Web Training Claro TMK</h2>
					<div className="lin"></div>
				</div>
			</section>
		</div>
	)
}

export default Actualidad

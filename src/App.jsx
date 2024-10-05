import '@styles/app.scss'
import { Routes, Route } from 'react-router-dom'

// import ParticlesBackground from './components/Bienvenida/ParticlesBackground'
import Navbar from './components/Navbar/Navbar'
import BienvenidaEs from './components/Bienvenida/Bienvenida'
import BienvenidaEn from './components/Bienvenida/BienvenidaEn'
import Corrector from './components/Corrector/Corrector'
import { SessionAccess } from './components/SessionAccess/SessionAccess'
// import { ContadorProvider } from './context/ContadorContext'
import CheckListBase from './components/Checklist/CheckListBase'
import Testeos from './components/Test/Testeos'
import Notas from './components/Gestor_de_Notas/Notas'
import imgBackground from './assets/images/index/fondo.jpg'
import fondoWhite from './assets/images/index/fondoWhite.jpg'
import ThemeSwitcher from './context/ThemeSwitcher'
import ThemeLenguaje from './context/ThemeLenguaje'
import { useContext, useEffect } from 'react'
import ContadorContext from './context/ContadorContext'
import Trabajos from './components/Trabajos/Trabajos'
import TrabajosEn from './components/Trabajos/TrabajosEn'
import Colpatria from './components/Trabajos/Colpatria'
const App = () => {
	const { theme, toggleTheme, lenguaje } = useContext(ContadorContext) // Accede al estado y la función
	useEffect(() => {
		// Precargar ambas imágenes
		const img1 = new Image()
		const img2 = new Image()
		img1.src = imgBackground
		img2.src = fondoWhite
	}, [])
	const style = {
		backgroundImage: `url(${theme === 'dark' ? imgBackground : fondoWhite})`,
		backgroundSize: '100%',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		transition: 'background-image 0.5s ease-in-out',
	}
	return (
		<div className={`app ${theme}`} style={style}>
			<SessionAccess campana="Nombre Campaña" segmento="Nombre Segmento" />
			<Navbar />

			<Routes>
				{lenguaje === 'Español' ? (
					<>
						<Route path="/" element={<BienvenidaEs />} />
						<Route path="/Trabajos" element={<Trabajos />} />
						<Route path="/colpatria" element={<Colpatria />} />
					</>
				) : (
					<>
						<Route path="/" element={<BienvenidaEn />} />
						<Route path="/Trabajos" element={<TrabajosEn />} />
					</>
				)}
				<Route path="/checklist" element={<CheckListBase checklist="ejemploA" />} />
				<Route path="/checklist/ejemploA" element={<CheckListBase checklist="ejemploA" />} />
				<Route path="/checklist/ejemploB" element={<CheckListBase checklist="ejemploB" />} />
				<Route path="/checklist/ejemploC" element={<CheckListBase checklist="ejemploC" />} />
				<Route path="/notas/nota_ejemplo" element={<Notas nameNote="nota_ejemplo" />} />
				<Route path="/corrector" element={<Corrector />} />
				<Route path="/testeos" element={<Testeos />} />
			</Routes>
			<ThemeSwitcher />
			<ThemeLenguaje />
		</div>
	)
}

export default App

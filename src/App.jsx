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
import ColpatriaEn from './components/Trabajos/ColpatriaEn'
import JetSmart from './components/Trabajos/JetSmart'
import JetSmartEn from './components/Trabajos/JetSmartEn'
import ClaroTmk from './components/Trabajos/ClaroTmk'
import ClaroTmkEn from './components/Trabajos/ClaroTmkEn'
import Televentas from './components/Trabajos/Televentas'
import TeleventasEn from './components/Trabajos/TeleventasEn'
import Contacto from './components/Contacto/Contacto'
import ContactoEn from './components/Contacto/ContactoEn'
import Actualidad from './components/Actualidad/Actualidad'
import ActualidadEn from './components/Actualidad/ActualidadEn'
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
		backgroundSize: 'cover',
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
						<Route path="/jetsmart" element={<JetSmart />} />
						<Route path="/claroTmk" element={<ClaroTmk />} />
						<Route path="/televentas" element={<Televentas />} />
						<Route path="/contacto" element={<Contacto />} />
						<Route path="/actualidad" element={<Actualidad />} />
					</>
				) : (
					<>
						<Route path="/" element={<BienvenidaEn />} />
						<Route path="/Trabajos" element={<TrabajosEn />} />
						<Route path="/colpatria" element={<ColpatriaEn />} />
						<Route path="/jetsmart" element={<JetSmartEn />} />
						<Route path="/claroTmk" element={<ClaroTmkEn />} />
						<Route path="/televentas" element={<TeleventasEn />} />
						<Route path="/contacto" element={<ContactoEn />} />
						<Route path="/actualidad" element={<ActualidadEn />} />
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

import '@styles/app.scss'
import { Routes, Route } from 'react-router-dom'

// import ParticlesBackground from './components/Bienvenida/ParticlesBackground'
import Navbar from './components/Navbar/Navbar'
import Bienvenida from './components/Bienvenida/Bienvenida'
import Corrector from './components/Corrector/Corrector'
import { SessionAccess } from './components/SessionAccess/SessionAccess'
// import { ContadorProvider } from './context/ContadorContext'
import CheckListBase from './components/Checklist/CheckListBase'
import Testeos from './components/Test/Testeos'
import Notas from './components/Gestor_de_Notas/Notas'
import imgBackground from './assets/images/index/fondo.jpg'
import fondoWhite from './assets/images/index/fondoWhite.jpg'
import ThemeSwitcher from './context/ThemeSwitcher' // Asegúrate de importar el componente
import { useContext, useEffect } from 'react'
import ContadorContext from './context/ContadorContext' // Importa el contexto para el tema

const App = () => {
	const { theme, toggleTheme } = useContext(ContadorContext) // Accede al estado y la función
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
				<Route path="/" element={<Bienvenida />} />
				<Route path="/checklist" element={<CheckListBase checklist="ejemploA" />} />
				<Route path="/checklist/ejemploA" element={<CheckListBase checklist="ejemploA" />} />
				<Route path="/checklist/ejemploB" element={<CheckListBase checklist="ejemploB" />} />
				<Route path="/checklist/ejemploC" element={<CheckListBase checklist="ejemploC" />} />
				<Route path="/notas/nota_ejemplo" element={<Notas nameNote="nota_ejemplo" />} />
				<Route path="/corrector" element={<Corrector />} />
				<Route path="/testeos" element={<Testeos />} />
			</Routes>
			<ThemeSwitcher />
		</div>
	)
}

export default App

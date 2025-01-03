import { createContext, useEffect, useState } from 'react'

const ContadorContext = createContext()

const ContadorProvider = ({ children }) => {
	const [contador, setContador] = useState(0)
	const [theme, setTheme] = useState('light') // Estado para manejar el tema
	const [lenguaje, setLenguaje] = useState('Español')
	// responsive
	const [menuOpen, setMenuOpen] = useState(false) // Controla el estado del menú
	const [isMobile, setIsMobile] = useState(false) // Detecta si la pantalla es menor a 1000px

	const sumar = () => {
		setContador(contador + 1)
	}

	const toggleTheme = () => {
		setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'))
	}
	const toggleLenguaje = () => {
		setLenguaje(prevLengguaje => (prevLengguaje === 'Ingles' ? 'Español' : 'Ingles'))
	}
	// Detecta cambios de tamaño de pantalla
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 1024)
			if (window.innerWidth > 1024) setMenuOpen(false) // Asegura que se cierre en pantallas grandes
		}
		handleResize()
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])
	const toggleMenu = () => {
		setMenuOpen(!menuOpen)
	}
	const data = { sumar, contador, theme, toggleTheme, lenguaje, toggleLenguaje, toggleMenu, isMobile, menuOpen } // Incluye el tema y la función para cambiarlo

	return <ContadorContext.Provider value={data}>{children}</ContadorContext.Provider>
}

export { ContadorProvider }
export default ContadorContext

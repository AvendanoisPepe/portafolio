import { createContext, useState } from 'react'

const ContadorContext = createContext()

const ContadorProvider = ({ children }) => {
	const [contador, setContador] = useState(0)
	const [theme, setTheme] = useState('light') // Estado para manejar el tema
	const [lenguaje, setLenguaje] = useState("Español")
	const sumar = () => {
		setContador(contador + 1)
	}

	const toggleTheme = () => {
		setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'))
	}
	const toggleLenguaje = () => {
		setLenguaje(prevLengguaje => (prevLengguaje === 'Ingles' ? 'Español' : "Ingles"))
	}
	const data = { sumar, contador, theme, toggleTheme, lenguaje, toggleLenguaje } // Incluye el tema y la función para cambiarlo

	return <ContadorContext.Provider value={data}>{children}</ContadorContext.Provider>
}

export { ContadorProvider }
export default ContadorContext

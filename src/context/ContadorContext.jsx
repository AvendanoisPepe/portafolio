import { createContext, useState } from 'react'

const ContadorContext = createContext()

const ContadorProvider = ({ children }) => {
	const [contador, setContador] = useState(0)
	const [theme, setTheme] = useState('dark') // Estado para manejar el tema

	const sumar = () => {
		setContador(contador + 1)
	}

	const toggleTheme = () => {
		setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'))
	}

	const data = { sumar, contador, theme, toggleTheme } // Incluye el tema y la función para cambiarlo

	return <ContadorContext.Provider value={data}>{children}</ContadorContext.Provider>
}

export { ContadorProvider }
export default ContadorContext

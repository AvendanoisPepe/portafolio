import { useContext } from 'react'
import ContadorContext from './ContadorContext' // Importa tu contexto actual
import españolWhite from './../assets/images/index/españolWhite.png' // Icono del sol
import españolBlack from './../assets/images/index/españolBlack.png' // Icono de la luna
import inglesWhite from './../assets/images/index/inglesWhite.png' // Icono del sol
import inglesBlack from './../assets/images/index/inglesBlack.png' // Icono de la luna
const ThemeLenguaje = () => {
	const { lenguaje, theme, toggleLenguaje } = useContext(ContadorContext) // Accede al estado y la función

	return (
		<div className="lenguaje">
			<button onClick={toggleLenguaje}>
				<figure className={lenguaje === 'Español' ? 'sombra' : null}>
					<img src={theme === 'dark' ? españolBlack : españolWhite} alt="Switch lenguaje" />
				</figure>
				<figure className={lenguaje === 'Ingles' ? 'luz' : null}>
					<img src={theme === 'dark' ? inglesBlack : inglesWhite} alt="Switch lenguaje" />
				</figure>
			</button>
		</div>
	)
}

export default ThemeLenguaje

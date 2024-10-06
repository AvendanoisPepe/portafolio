import { useContext } from 'react'
import ContadorContext from './ContadorContext' // Importa tu contexto actual
import volverWhite from './../assets/images/trabajos/retrocederWhite.png' // Icono del sol
import volverBlack from './../assets/images/trabajos/retrocederBlack.png' // Icono del sol

const VolverTrabajo = () => {
	const { lenguaje, theme, toggleLenguaje } = useContext(ContadorContext) // Accede al estado y la función

	return (
		<a href="/#/Trabajos" className="contendVolver">
			<figure>
				<img src={theme === 'dark' ? volverBlack : volverWhite} alt="" />
			</figure>
		</a>
	)
}

export default VolverTrabajo

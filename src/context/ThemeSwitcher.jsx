import { useContext } from 'react'
import ContadorContext from './ContadorContext' // Importa tu contexto actual
import sunIcon from './../assets/images/index/sum.png' // Icono del sol
import moonIcon from './../assets/images/index/moon.png' // Icono de la luna
import sumBlack from './../assets/images/index/sumBlack.png' // Icono del sol
import moomBlack from './../assets/images/index/moonBlack.png' // Icono de la luna
const ThemeSwitcher = () => {
	const { theme, toggleTheme } = useContext(ContadorContext) // Accede al estado y la función

	return (
		<div className="contendLuz">
			<button onClick={toggleTheme}>
				<figure className={theme === 'dark' ? 'sombra' : null}>
					<img src={theme === 'dark' ? moomBlack : moonIcon} alt="Switch theme" />
				</figure>
				<figure className={theme === 'light' ? 'luz' : null}>
					<img src={theme === 'dark' ? sumBlack : sunIcon} alt="Switch theme" />
				</figure>
			</button>
		</div>
	)
}

export default ThemeSwitcher

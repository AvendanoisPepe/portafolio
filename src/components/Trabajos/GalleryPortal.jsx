import ReactDOM from 'react-dom'
import { useContext, useState } from 'react'
import ContadorContext from './../../context/ContadorContext' // Importa el contexto para el tema
import closeDark from "../../assets/images/trabajos/closeBlack.png"
import closeWhite from '../../assets/images/trabajos/closeWhite.png'
import flecha1White from "../../assets/images/trabajos/flechaWhite.png"
import flecha2White from "../../assets/images/trabajos/flechaWhite2.png"
import flecha1Black from "../../assets/images/trabajos/flechaBlack.png"
import flecha2Black from "../../assets/images/trabajos/flechaBlack2.png"
// Componente GalleryPortal para mostrar el popup
export default function GalleryPortal({ selectedButton, images, onClose }) {
	const { theme, toggleTheme } = useContext(ContadorContext) // Accede al estado y la función
    const [currentIndex, setCurrentIndex] = useState(0)
    const goToPrevious = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
    }
    const goToNext = () => {
        setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }
	return ReactDOM.createPortal(
		<div className={`popup-overlay ${theme}`}>
			<div className="popup-content">
				<figure className="close-btn" onClick={onClose}>
					<img src={theme === 'dark' ? closeDark : closeWhite} alt="" />
				</figure>
				<div className="gallery-container">
					{images.length > 1 && (
						<>
                            <figure className="prev-btn" onClick={goToPrevious}>
                                <img src={theme === 'dark' ? flecha1Black : flecha1White} alt="" />
                            </figure>
                            <figure  className="next-btn" onClick={goToNext}>
                                <img src={theme === 'dark' ? flecha2Black : flecha2White} alt="" />
                            </figure>
						</>
					)}
					<figure>
						<figcaption>{selectedButton}</figcaption>
						<img src={images[currentIndex]} alt={`${selectedButton} ${currentIndex + 1}`} />
					</figure>
				</div>
			</div>
		</div>,
		document.body // Montamos el portal en el cuerpo del documento
	)
}

import { useContext } from "react";
import { Link } from "react-router-dom";
import ContadorContext from "../../context/ContadorContext";

export default function LinkRoute({ link, onSelect, isActive }) {
	const { lenguaje, toggleMenu, isMobile, menuOpen } = useContext(ContadorContext) // Accede al estado y la función
	return (
		<li onClick={toggleMenu} className={`sidebar__li ${isActive ? 'active' : ''}`}>
			<div className="negro"></div>
			<Link className="link" to={link.route} onClick={onSelect}>
				{link.title}
			</Link>
			<div className="negro"></div>
		</li>
	)
}

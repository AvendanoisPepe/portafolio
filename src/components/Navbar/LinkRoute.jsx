import { Link } from "react-router-dom";

export default function LinkRoute({ link, onSelect, isActive }) {
	return (
		<li className={`sidebar__li ${isActive ? 'active' : ''}`}>
			<div className="negro"></div>
			<Link className="link" to={link.route} onClick={onSelect}>
				{link.title}
			</Link>
			<div className="negro"></div>
		</li>
	)
}

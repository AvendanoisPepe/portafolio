import IconHome from "../../icons/IconHome";
import IconCircleQuestion from '../../icons/IconCircleQuestion'
import IconCheckList from '../../icons/IconCheckList'
import IconTextSlash from '../../icons/IconTextSlash'
import { useState } from "react";
import { Link } from "react-router-dom";

export default function LinkRoute({ link }) {

  const [selectIcon, setSelectIcon] = useState({
    home: <IconHome />,
    question: <IconCircleQuestion />,
    checklist: <IconCheckList />,
    textSlash: <IconTextSlash />
  }
  )
  return (
		<li className="sidebar__li">
      <div className="negro"></div>
      <Link className="link" to={link.route}>
        {/* {selectIcon[link.icon]} */}
        {link.title}
      </Link>
      <div className="negro"></div>
		</li>
	)
}

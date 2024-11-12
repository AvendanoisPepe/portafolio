import { useContext } from 'react'
import ParticlesComponent from './../particles/particles'
import ContadorContext from './../../context/ContadorContext' // Importa el contexto para el tema
import imgHarry from './../../assets/images/actualidad/harry.png'
import './style.scss'
// lenguajes
import htmlBlack from './../../assets/images/trabajos/htmlBlack.png'
import htmlWhite from './../../assets/images/trabajos/htmlWhite.png'
import cssBlack from './../../assets/images/actualidad/cssBlack.png'
import cssWhite from './../../assets/images/actualidad/cssWhite.png'
import jsWhite from './../../assets/images/trabajos/jsWhite.png'
import jsBlack from './../../assets/images/trabajos/jsBlack.png'
import sqlWhite from './../../assets/images/actualidad/sqlWhite.png'
import sqlBlack from './../../assets/images/actualidad/sqlBlack.png'
import mysqlWhite from './../../assets/images/actualidad/mysqlWhite.png'
import mysqlBlack from './../../assets/images/actualidad/mysqlBlack.png'
import angularWhite from './../../assets/images/actualidad/angularWhite.png'
import angularBlack from './../../assets/images/actualidad/angularBlack.png'
import phpWhite from './../../assets/images/actualidad/phpWhte.png'
import phpBlack from './../../assets/images/actualidad/phpBlack.png'
import javaWhite from './../../assets/images/actualidad/javaWhite.png'
import javaBlack from './../../assets/images/actualidad/javaBlack.png'
import mongoWhite from './../../assets/images/actualidad/mongoWhite.png'
import mongoBlack from './../../assets/images/actualidad/mongoBlack.png'
import reactWhite from './../../assets/images/trabajos/reactWhite.png'
import reactBlack from './../../assets/images/trabajos/reactBlack.png'
import webpackWhite from './../../assets/images/trabajos/webWhite.png'
import webpackBlack from './../../assets/images/trabajos/webBlack.png'
import nodeWhite from './../../assets/images/actualidad/nodeWhite.png'
import nodeBlack from './../../assets/images/actualidad/nodeBlack.png'
import sassWhite from './../../assets/images/trabajos/sassWhite.png'
import sassBlack from './../../assets/images/trabajos/sassBlack.png'
import nextWhite from './../../assets/images/actualidad/nextWhite.png'
import nextBlack from './../../assets/images/actualidad/nextBlack.jpg'
// lenguajes
const ActualidadEn = () => {
	const { theme, toggleTheme } = useContext(ContadorContext) // Accede al estado y la función
	// Define the colors based on the theme
	const particleColor = theme === 'dark' ? '#FFFFFF' : '#000000'
	const linkColor = theme === 'dark' ? '#FFFFFF' : '#000000'
	return (
		<div className="welcome">
			<ParticlesComponent id="particles" particleColor={particleColor} linkColor={linkColor} />
			<section className="actua">
				<div className="header2">
					<h2>My portfolio</h2>
				</div>
				<div className="parte1">
					<p className="pInicial">
						My intention with the portfolio is to reflect a bit of my history and present, from how
						I started until how I got here, without being explicit about the story.
					</p>
					<div className="conmbi">
						<p className="pInicial2">
							Currently, I work in a company called "Atento" in which I have the position of content
							developer where I am in charge of developing processes such as note managers,
							information management based on localbase, Json, Arrays, Checklist, more aesthetic
							things such as information libraries, whether PDFs or images, scripts, a new
							development is sought based on the need.
						</p>
						<figure>
							<img src={imgHarry} alt="" />
						</figure>
					</div>
				</div>
				<div className="historia">
					<div className="futuro">
						<h6>Next goal</h6>
						<div className="objetivo">
							<p>NEXT JS</p>
							<figure>
								<img src={nextWhite} alt="" />
							</figure>
						</div>
					</div>
					<div className="linea"></div>
					<div className="trabajo">
						<h6>Labor studies</h6>
						<div className="objetivo">
							<p>REACT</p>
							<figure>
								<img src={theme === 'dark' ? reactBlack : reactWhite} alt="" />
							</figure>
						</div>
						<div className="objetivo">
							<p>SASS</p>
							<figure>
								<img src={theme === 'dark' ? sassBlack : sassWhite} alt="" />
							</figure>
						</div>
						<div className="objetivo">
							<p>NODE JS</p>
							<figure>
								<img
									style={{ width: '80%' }}
									src={theme === 'dark' ? nodeBlack : nodeWhite}
									alt=""
								/>
							</figure>
						</div>
						<div className="objetivo">
							<p>WEBPACK</p>
							<figure>
								<img src={theme === 'dark' ? webpackBlack : webpackWhite} alt="" />
							</figure>
						</div>
					</div>
					<div className="linea"></div>
					<div className="estudios">
						<h6>Professional studies</h6>
						<div className="objetivo">
							<p>PHP</p>
							<figure>
								<img style={{ width: '60%' }} src={theme === 'dark' ? phpBlack : phpWhite} alt="" />
							</figure>
						</div>
						<div className="objetivo">
							<p>MYSQL</p>
							<figure>
								<img
									style={{ width: '70%' }}
									src={theme === 'dark' ? mysqlBlack : mysqlWhite}
									alt=""
								/>
							</figure>
						</div>
						<div className="objetivo">
							<p>JAVA</p>
							<figure>
								<img src={theme === 'dark' ? javaBlack : javaWhite} alt="" />
							</figure>
						</div>
						<div className="objetivo">
							<p>SQL</p>
							<figure>
								<img src={theme === 'dark' ? sqlBlack : sqlWhite} alt="" />
							</figure>
						</div>
						<div className="objetivo">
							<p>ANGULAR</p>
							<figure>
								<img
									style={{ width: theme === 'dark' ? '45%' : '55%' }}
									src={theme === 'dark' ? angularBlack : angularWhite}
									alt=""
								/>
							</figure>
						</div>
						<div className="objetivo">
							<p>MONGO DB</p>
							<figure>
								<img src={theme === 'dark' ? mongoBlack : mongoWhite} alt="" />
							</figure>
						</div>
					</div>
					<div className="linea"></div>
					<div className="inicio">
						<h6>First studies</h6>
						<div className="objetivo especial">
							<p>HTML 5</p>
							<figure>
								<img src={theme === 'dark' ? htmlBlack : htmlWhite} alt="" />
							</figure>
						</div>
						<div className="objetivo">
							<p>CSS</p>
							<figure>
								<img src={theme === 'dark' ? cssBlack : cssWhite} alt="" />
							</figure>
						</div>
						<div className="objetivo">
							<p>JS</p>
							<figure>
								<img src={theme === 'dark' ? jsBlack : jsWhite} alt="" />
							</figure>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default ActualidadEn

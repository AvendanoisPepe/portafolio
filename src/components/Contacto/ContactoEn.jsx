import './styles.scss'
import ContadorContext from './../../context/ContadorContext' // Importa el contexto para el tema
import ParticlesComponent from './../particles/particles'
import { useContext, useState } from 'react'
import IconName from '../../icons/iconName'
import IconError from '../../icons/IconError'
import IconSucces from '../../icons/IconSucces'
import IconGmail from '../../icons/IconGmail'
import IconMenus from '../../icons/IconMenus'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'

const ContactoEn = () => {
	const { theme, toggleTheme } = useContext(ContadorContext) // Accede al estado y la función

	// Define the colors based on the theme
	const particleColor = theme === 'dark' ? '#FFFFFF' : '#000000'
	const linkColor = theme === 'dark' ? '#FFFFFF' : '#000000'

	// Estados de cada campo para el color de validación
	const [nombreCompleto, setNombreCompleto] = useState('')
	const [correo, setCorreo] = useState('')
	const [asunto, setAsunto] = useState('')
	const [mensaje, setMensaje] = useState('')

	const [validaciones, setValidaciones] = useState({
		nombreCompleto: null,
		correo: null,
		asunto: null,
		mensaje: null,
	})
	const validacionesP = () => {
		const newValidaciones = {
			nombreCompleto: nombreCompleto.length > 0,
			correo: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo),
			asunto: asunto.length > 0,
			mensaje: mensaje.length > 0,
		}
		setValidaciones(newValidaciones)
		return Object.values(newValidaciones).every(Boolean) // Retorna true si todas las validaciones son correctas
	}
	const envioCorreo = e => {
		e.preventDefault()

		if (validacionesP()) {
			emailjs.sendForm('service_p0isud6', 'template_juwo9it', e.target, 'BSr2O9OTJrxx6wDbI').then(
				result => {
					Swal.fire({
						icon: 'success',
						title: 'Mail sent successfully',
					})
				},
				error => {
					Swal.fire({
						icon: 'error',
						title: 'Error sending mail:',
						text: error.text,
						heightAuto: false,
						allowOutsideClick: true,
						allowEscapeKey: true,
					})
				}
			)
		} else {
			Swal.fire({
				icon: 'error',
				title: 'Please fill in all fields correctly.',
			})
		}
	}
	const renderIcon = field => {
		if (validaciones[field] === null) {
			return <IconMenus />
		}
		return validaciones[field] ? <IconSucces /> : <IconError />
	}

	const resetForm = () => {
		setNombreCompleto('')
		setCorreo('')
		setAsunto('')
		setMensaje('')
		setValidaciones({
			nombreCompleto: null,
			correo: null,
			asunto: null,
			mensaje: null,
		})
	}
	return (
		<div className="welcome">
			<ParticlesComponent id="particles" particleColor={particleColor} linkColor={linkColor} />
			<section className="trabajos">
				<div className="header2">
					<h2 className="heaH2">Contact Form</h2>
				</div>
				<form onSubmit={envioCorreo}>
					<div className="primeroA">
						<label>
							<p>Full Names</p>
							<div className="unidad">
								<IconName />
								<input
									autoComplete="off"
									name="nombre_completo"
									type="text"
									value={nombreCompleto}
									onChange={e => setNombreCompleto(e.target.value)}
									style={{
										borderColor:
											validaciones.nombreCompleto === null
												? ''
												: validaciones.nombreCompleto
												? 'green'
												: 'red',
									}}
								/>
								{renderIcon('nombreCompleto')}
							</div>
						</label>
						<label>
							<p>Email</p>
							<div className="unidad">
								<IconGmail />
								<input
									autoComplete="off"
									name="from_email"
									type="gmail"
									value={correo}
									onChange={e => setCorreo(e.target.value)}
									style={{
										borderColor:
											validaciones.correo === null ? '' : validaciones.correo ? 'green' : 'red',
									}}
								/>
								{renderIcon('correo')}
							</div>
						</label>
					</div>
					<div className="segundoA">
						<label>
							<div className="unidad">
								<IconGmail />
								<p>Subject</p>
								<input
									autoComplete="off"
									name="asunto"
									type="text"
									value={asunto}
									onChange={e => setAsunto(e.target.value)}
									style={{
										borderColor:
											validaciones.asunto === null ? '' : validaciones.asunto ? 'green' : 'red',
									}}
								/>
								{renderIcon('asunto')}
							</div>
						</label>
						<label className="textarea">
							<p>Message / Description</p>
							<textarea
								name="mensaje"
								value={mensaje}
								onChange={e => setMensaje(e.target.value)}
								style={{
									borderColor:
										validaciones.mensaje === null ? '' : validaciones.mensaje ? 'green' : 'red',
								}}></textarea>
						</label>
					</div>
					<div className="botonazos">
						<button type="submit">Send</button>
						<button type="reset" onClick={resetForm}>
							Reset
						</button>
					</div>
				</form>
			</section>
		</div>
	)
}

export default ContactoEn

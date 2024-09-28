import Particles, { initParticlesEngine } from '@tsparticles/react'
import { useEffect, useMemo, useState } from 'react'
import { loadSlim } from '@tsparticles/slim'

const ParticlesComponent = ({ id, particleColor, linkColor }) => {
	const [init, setInit] = useState(false)

	useEffect(() => {
		initParticlesEngine(async engine => {
			await loadSlim(engine) // Cargar la versión slim de tsParticles
		}).then(() => {
			setInit(true)
		})
	}, [])

	const particlesLoaded = container => {
		console.log(container)
	}

	// Use useMemo to define the options dynamically based on the props
	const options = useMemo(
		() => ({
			background: {
				color: {
					value: '#1E2F97',
				},
			},
			fpsLimit: 120,
			interactivity: {
				events: {
					onClick: {
						enable: true,
						mode: 'push',
					},
					onHover: {
						enable: true,
						mode: 'grab',
					},
				},
				modes: {
					push: {
						distance: 300,
						duration: 15,
					},
					grab: {
						distance: 350,
					},
				},
			},
			particles: {
				color: {
					value: particleColor, // Use the particleColor prop for the color
				},
				links: {
					color: linkColor, // Use the linkColor prop for the link color
					distance: 150,
					enable: true,
					opacity: 0.3,
					width: 1,
				},
				move: {
					direction: 'none',
					enable: true,
					outModes: {
						default: 'bounce',
					},
					random: true,
					speed: 1,
					straight: false,
				},
				number: {
					density: {
						enable: true,
					},
					value: 150,
				},
				opacity: {
					value: 1.0,
				},
				shape: {
					type: 'circle',
				},
				size: {
					value: { min: 1, max: 3 },
				},
			},
			detectRetina: true,
		}),
		[particleColor, linkColor] // Dependency array to re-run if the colors change
	)

	return <Particles id={id} init={particlesLoaded} options={options} />
}

export default ParticlesComponent

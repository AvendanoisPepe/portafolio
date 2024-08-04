import React from 'react'
import { Particles } from '@tsparticles/react'
import { initPjs } from '@tsparticles/particles.js'

const ParticlesBackground = () => {
	const particlesInit = async main => {
		// Cargar la configuración de partículas
		await initPjs(main)
	}

	const particlesLoaded = container => {
		console.log(container)
	}

	return (
		<div style={{ position: 'absolute', width: '100%', height: '100%', zIndex: -1 }}>
			<Particles
				id="tsparticles"
				init={particlesInit}
				loaded={particlesLoaded}
				options={{
					particles: {
						number: {
							value: 100,
						},
						size: {
							value: 3,
						},
						move: {
							enable: true,
							speed: 1,
						},
					},
					interactivity: {
						detectsOn: 'window',
						events: {
							onhover: {
								enable: true,
								mode: 'repulse',
							},
							onclick: {
								enable: true,
								mode: 'push',
							},
						},
					},
				}}
			/>
		</div>
	)
}

export default ParticlesBackground

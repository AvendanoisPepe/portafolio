import { StrictMode } from 'react'
import App from './App.jsx'
import './styles/index.scss'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { ContadorProvider } from './context/ContadorContext.jsx'; // Aquí importas el proveedor

ReactDOM.createRoot(document.getElementById('root')).render(
	<StrictMode>
		<HashRouter>
			<ContadorProvider>
				<App />
			</ContadorProvider>
		</HashRouter>
	</StrictMode>
)

import './app/styles/index.css'
import App from './app/App.tsx'
import { createRoot } from 'react-dom/client'
import { Layout } from './app/layouts/ui/layout/index.tsx'

createRoot(document.getElementById('root')!).render(
	<Layout>
		<App />
	</Layout>
)

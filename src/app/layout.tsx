import './globals.scss'
import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
	title: 'Montoya Trading',
	description: 'Buy and order POS sytems products in the Philippines such as printers, scanners, cash drawers, monitors or screens, biometric scanners and printer consumables. Also comes in packages. Provides printer repair services.',
	viewport: 'width=device-width, initial-scale=1.0',
	openGraph: {
		title: 'Montoya Trading',
		description: 'Buy and order high-quality POS system products in the Philippines such as printers, scanners, cash drawers, monitors or screens, biometric scanners and printer consumables. Also comes in packages. Provides printer repair services.',
		url: 'https://montoya-trading-next.vercel.app/',
	}
}

export default function RootLayout({ children } : { children: React.ReactNode }) {
    return (
    	<html lang="en">
			<body>
				<NavBar />
				{ children }
				<Footer />
			</body>
      	</html>
    )
}
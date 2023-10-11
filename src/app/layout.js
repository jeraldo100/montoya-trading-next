import './globals.scss'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export const metadata = {
    title: 'Montoya Trading',
    description: 'Buy and order POS sytems products in the Philippines such as printers, scanners, cash drawers, monitors or screens, biometric scanners and printer consumables. Also comes in packages. Provides printer repair services.',
    viewport: 'width=device-width, initial-scale=1.0',
}

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
            <NavBar />
            {children}
            <Footer />
        </body>
      </html>
    )
}
import './globals.scss'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export const metadata = {
    title: 'Montoya Trading',
    description: 'Generated by create next app',
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
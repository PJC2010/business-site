import './globals.css'
import Header from '@/components/Header'; // Import the new Header
import Footer from '@/components/Footer'; 
import GoogleAnalytics from '@/components/GoogleAnalytics';  // Import the Footer

export const metadata = {
  title: 'PC | Data Analytics Services',
  description: 'Data Science and Web Development Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body className="bg-white dark:bg-neutral-950">
        <Header />
        <main>{children}</main>
        
      </body>
    </html>
  )
}
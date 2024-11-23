import './globals.css'

export const metadata = {
  title: 'PC | Data Analytics Services',
  description: 'Data Science and Web Development Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
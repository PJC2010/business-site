import './globals.css'

export const metadata = {
  title: 'Your Portfolio',
  description: 'Data Science and Web Development Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
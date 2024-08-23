import '@styles/globals.css';

export const metadata = {
  title: 'NyontekPrompt',
  description: 'Temukan dan Bagikan Prompt AI'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className='app'>{children}</main>
      </body>
    </html>
  )
}

import { Inter } from 'next/font/google'
import './style.css'

export const metadata = {
  title: 'SVG Shaders',
  description: 'Composable SVG Shaders with React',
}

const inter = Inter({
  weights: [400, 500, 600],
  styles: ['normal'],
  subsets: ['latin-ext'],
})

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <h1
          style={{
            fontSize: '1em',
          }}
        >
          Composable SVG Shaders
        </h1>
        <p>
          These “shaders” are conceptually similar to regular shader programs,
          but can be applied to HTML elements.
        </p>
        {children}
        <footer>
          <p>
            Disclaimer: This is an <strong>experimental</strong> demo based on
            SVG filters.
            <br />
            It may not work on all browsers (<strong>Chrome preferred</strong>).
          </p>
          <p>
            Created by{' '}
            <a href='https://twitter.com/shuding_' target='_blank'>
              Shu
            </a>
            , source code on{' '}
            <a href='https://github.com/shuding/svg-shaders' target='_blank'>
              GitHub
            </a>
            .
          </p>
        </footer>
      </body>
    </html>
  )
}

import { Html, Head, Main, NextScript } from 'next/document';
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Document() {
  return (
    <Html lang="fr">
      <Head />
      <body>
        <Navigation />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  )
}
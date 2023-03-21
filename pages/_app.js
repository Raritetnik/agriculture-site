import '@/styles/globals.css'
import dynamic from 'next/dynamic';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

import '@/styles/globals.css'
import { NextUIProvider } from '@nextui-org/react';
import { darkTheme } from '../themes';

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider theme={ darkTheme }>
      <Component {...pageProps} /> 
    </NextUIProvider>
  )
}

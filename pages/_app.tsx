// import '../styles/globals.css'
// import 'bootstrap/dist/css/bootstrap.css';
// import type { AppProps } from 'next/app'

// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

// export default MyApp

///////////////// MONTANDO UM LAYOUT UNICO ///////////////////

// import '../styles/globals.css'
// import 'bootstrap/dist/css/bootstrap.css';
// import type { AppProps } from 'next/app'
// import { Layout } from '../components/Layout';

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//   )
// }

// export default MyApp;


/////////////// USANDO LAYOUT POR PAGINA /////////////

import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import type { AppProps } from 'next/app'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp;

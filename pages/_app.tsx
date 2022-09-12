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

// import '../styles/globals.css'
// import 'bootstrap/dist/css/bootstrap.css';
// import type { AppProps } from 'next/app'


// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <Component {...pageProps} />
//   )
// }

// export default MyApp;

////////////// Configurando o NextAuth //////////

// import '../styles/globals.css'
// import 'bootstrap/dist/css/bootstrap.css';
// import type { AppProps } from 'next/app';
// import { SessionProvider } from 'next-auth/react';


// function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
//   return (
//     <SessionProvider session={session}>
//       <Component {...pageProps} />
//     </SessionProvider>

//   )
// }

// export default MyApp;

//////// Usando i18n para multi-linguagem 2 /////////

import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { appWithTranslation } from 'next-i18next';


function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>

  )
}

export default appWithTranslation(MyApp);

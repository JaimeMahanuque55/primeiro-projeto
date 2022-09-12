// import type { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'
// import { Layout } from '../components/Layout'
// import styles from '../styles/Home.module.css'
// import GuyImage from '../public/guy2.jpg';

// const Home: NextPage = () => {
//   return (

//     <Layout>

//       <div className={styles.container}>
//         <Head>
//           <title>Create Next App</title>
//           <meta name="description" content="Generated by create next app" />
//           <link rel="icon" href="/favicon.ico" />
//         </Head>

//         <main className={styles.main}>
//           <h1 className={styles.title}>
//             Eu sou maza e vou provar isso
//           </h1>

//           {/* <img src='/guy2.jpg' width={300} /> */}
//           <Image src={GuyImage} width={300} height={200} />

//           <p className={styles.description}>
//             You are crazey started by editing{' '}
//             <code className={styles.code}>pages/index.tsx</code>
//           </p>

//           <div className={styles.grid}>
//             <a href="https://nextjs.org/docs" className={styles.card}>
//               <h2>Documentation &rarr;</h2>
//               <p>Find in-depth information about Next.js features and API.</p>
//             </a>

//             <a href="https://nextjs.org/learn" className={styles.card}>
//               <h2>Learn &rarr;</h2>
//               <p>Learn about Next.js in an interactive course with quizzes!</p>
//             </a>

//             <a
//               href="https://github.com/vercel/next.js/tree/canary/examples"
//               className={styles.card}
//             >
//               <h2>Examples &rarr;</h2>
//               <p>Discover and deploy boilerplate example Next.js projects.</p>
//             </a>

//             <a
//               href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//               className={styles.card}
//             >
//               <h2>Deploy &rarr;</h2>
//               <p>
//                 Instantly deploy your Next.js site to a public URL with Vercel.
//               </p>
//             </a>
//           </div>
//         </main>

//         <footer className={styles.footer}>
//           <a
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Powered by{' '}
//             <span className={styles.logo}>
//               <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
//             </span>
//           </a>
//         </footer>
//       </div>
//     </Layout>
//   )
// }

// export default Home

/////////////// SEO COM NEXTJS (ESTATICO E DINAMICO) //////////////////

// import type { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'
// import { Layout } from '../components/Layout'
// import styles from '../styles/Home.module.css'
// import GuyImage from '../public/guy2.jpg';

// const Home: NextPage = () => {
//   return (

//     <Layout>

//       <div className={styles.container}>
//         <Head>
//           <link rel="icon" href="/favicon.ico" />

//           {/* <!-- Primary Meta Tags --> */}
//           <title>Este e meu site em NEXT</title>
//           <meta name="title" content="Este e meu site em NEXT" />
//           <meta name="description" content="Vamos ver para que serve essa cena que eu ainda nao tenho muito conhecimento por nao saber o seu funcionamento direito mas nao e dificil porque eu sou foda demais demais e demais" />

//           {/* <!-- Open Graph / Facebook --> */}
//           <meta property="og:type" content="website" />
//           <meta property="og:url" content="http://localhost:3000/" />
//           <meta property="og:title" content="Este e meu site em NEXT" />
//           <meta property="og:description" content="Vamos ver para que serve essa cena que eu ainda nao tenho muito conhecimento por nao saber o seu funcionamento direito mas nao e dificil porque eu sou foda demais demais e demais" />
//           <meta property="og:image" content="http://localhost:3000/guy2.jpg" />

//           {/* <!-- Twitter --> */}
//           <meta property="twitter:card" content="summary_large_image" />
//           <meta property="twitter:url" content="http://localhost:3000/" />
//           <meta property="twitter:title" content="Este e meu site em NEXT" />
//           <meta property="twitter:description" content="Vamos ver para que serve essa cena que eu ainda nao tenho muito conhecimento por nao saber o seu funcionamento direito mas nao e dificil porque eu sou foda demais demais e demais" />
//           <meta property="twitter:image" content="http://localhost:3000/guy2.jpg"></meta>

//         </Head>

//         <main className={styles.main}>
//           <h1 className={styles.title}>
//             Eu sou maza e vou provar isso
//           </h1>

//           {/* <img src='/guy2.jpg' width={300} /> */}
//           <Image src={GuyImage} width={300} height={200} />

//           <p className={styles.description}>
//             You are crazey started by editing{' '}
//             <code className={styles.code}>pages/index.tsx</code>
//           </p>

//           <div className={styles.grid}>
//             <a href="https://nextjs.org/docs" className={styles.card}>
//               <h2>Documentation &rarr;</h2>
//               <p>Find in-depth information about Next.js features and API.</p>
//             </a>

//             <a href="https://nextjs.org/learn" className={styles.card}>
//               <h2>Learn &rarr;</h2>
//               <p>Learn about Next.js in an interactive course with quizzes!</p>
//             </a>

//             <a
//               href="https://github.com/vercel/next.js/tree/canary/examples"
//               className={styles.card}
//             >
//               <h2>Examples &rarr;</h2>
//               <p>Discover and deploy boilerplate example Next.js projects.</p>
//             </a>

//             <a
//               href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//               className={styles.card}
//             >
//               <h2>Deploy &rarr;</h2>
//               <p>
//                 Instantly deploy your Next.js site to a public URL with Vercel.
//               </p>
//             </a>
//           </div>
//         </main>

//         <footer className={styles.footer}>
//           <a
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Powered by{' '}
//             <span className={styles.logo}>
//               <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
//             </span>
//           </a>
//         </footer>
//       </div>
//     </Layout>
//   )
// }

// export default Home;

//////////// LOGIN: Usando o CredentialsProvider //////////////

// import type { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'
// import { Layout } from '../components/Layout'
// import styles from '../styles/Home.module.css'
// import GuyImage from '../public/guy2.jpg';
// import { signIn, signOut, useSession } from 'next-auth/react'

// const Home: NextPage = () => {
//   const { data: session } = useSession();



//   return (

//     <Layout>

//       <div className={styles.container}>
//         <Head>
//           <link rel="icon" href="/favicon.ico" />

//           {/* <!-- Primary Meta Tags --> */}
//           <title>Este e meu site em NEXT</title>
//           <meta name="title" content="Este e meu site em NEXT" />
//           <meta name="description" content="Vamos ver para que serve essa cena que eu ainda nao tenho muito conhecimento por nao saber o seu funcionamento direito mas nao e dificil porque eu sou foda demais demais e demais" />

//           {/* <!-- Open Graph / Facebook --> */}
//           <meta property="og:type" content="website" />
//           <meta property="og:url" content="http://localhost:3000/" />
//           <meta property="og:title" content="Este e meu site em NEXT" />
//           <meta property="og:description" content="Vamos ver para que serve essa cena que eu ainda nao tenho muito conhecimento por nao saber o seu funcionamento direito mas nao e dificil porque eu sou foda demais demais e demais" />
//           <meta property="og:image" content="http://localhost:3000/guy2.jpg" />

//           {/* <!-- Twitter --> */}
//           <meta property="twitter:card" content="summary_large_image" />
//           <meta property="twitter:url" content="http://localhost:3000/" />
//           <meta property="twitter:title" content="Este e meu site em NEXT" />
//           <meta property="twitter:description" content="Vamos ver para que serve essa cena que eu ainda nao tenho muito conhecimento por nao saber o seu funcionamento direito mas nao e dificil porque eu sou foda demais demais e demais" />
//           <meta property="twitter:image" content="http://localhost:3000/guy2.jpg"></meta>

//         </Head>

//         <main className={styles.main}>

//           {!session &&
//             <button onClick={() => signIn()}>Fazer Login</button>
//           }
//           {session &&
//             <>
//               Ola {session.user?.name}.
//               <button onClick={() => signOut()}>Sair</button>
//             </>
//           }

//           <h1 className={styles.title}>
//             Eu sou maza e vou provar isso
//           </h1>

//           {/* <img src='/guy2.jpg' width={300} /> */}
//           <Image src={GuyImage} width={300} height={200} />

//           <p className={styles.description}>
//             You are crazey started by editing{' '}
//             <code className={styles.code}>pages/index.tsx</code>
//           </p>

//           <div className={styles.grid}>
//             <a href="https://nextjs.org/docs" className={styles.card}>
//               <h2>Documentation &rarr;</h2>
//               <p>Find in-depth information about Next.js features and API.</p>
//             </a>

//             <a href="https://nextjs.org/learn" className={styles.card}>
//               <h2>Learn &rarr;</h2>
//               <p>Learn about Next.js in an interactive course with quizzes!</p>
//             </a>

//             <a
//               href="https://github.com/vercel/next.js/tree/canary/examples"
//               className={styles.card}
//             >
//               <h2>Examples &rarr;</h2>
//               <p>Discover and deploy boilerplate example Next.js projects.</p>
//             </a>

//             <a
//               href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//               className={styles.card}
//             >
//               <h2>Deploy &rarr;</h2>
//               <p>
//                 Instantly deploy your Next.js site to a public URL with Vercel.
//               </p>
//             </a>
//           </div>
//         </main>

//         <footer className={styles.footer}>
//           <a
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Powered by{' '}
//             <span className={styles.logo}>
//               <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
//             </span>
//           </a>
//         </footer>
//       </div>
//     </Layout>
//   )
// }

// export default Home;

////////////// Login: Resolvendo problema dos dados 1 ///////////////


// import type { NextPage } from 'next';
// import Head from 'next/head';
// import Image from 'next/image';
// import { Layout } from '../components/Layout';
// import styles from '../styles/Home.module.css';
// import GuyImage from '../public/guy2.jpg';
// import { signIn, signOut, useSession } from 'next-auth/react';
// import { useRouter } from 'next/router';

// const Home: NextPage = () => {
//   const { data: session } = useSession();

//   const router = useRouter();

//   if (session) {
//     console.log('user', session.user);
//   }



//   return (

//     <Layout>

//       <div className={styles.container}>
//         <Head>
//           <link rel="icon" href="/favicon.ico" />

//           {/* <!-- Primary Meta Tags --> */}
//           <title>Este e meu site em NEXT</title>
//           <meta name="title" content="Este e meu site em NEXT" />
//           <meta name="description" content="Vamos ver para que serve essa cena que eu ainda nao tenho muito conhecimento por nao saber o seu funcionamento direito mas nao e dificil porque eu sou foda demais demais e demais" />

//           {/* <!-- Open Graph / Facebook --> */}
//           <meta property="og:type" content="website" />
//           <meta property="og:url" content="http://localhost:3000/" />
//           <meta property="og:title" content="Este e meu site em NEXT" />
//           <meta property="og:description" content="Vamos ver para que serve essa cena que eu ainda nao tenho muito conhecimento por nao saber o seu funcionamento direito mas nao e dificil porque eu sou foda demais demais e demais" />
//           <meta property="og:image" content="http://localhost:3000/guy2.jpg" />

//           {/* <!-- Twitter --> */}
//           <meta property="twitter:card" content="summary_large_image" />
//           <meta property="twitter:url" content="http://localhost:3000/" />
//           <meta property="twitter:title" content="Este e meu site em NEXT" />
//           <meta property="twitter:description" content="Vamos ver para que serve essa cena que eu ainda nao tenho muito conhecimento por nao saber o seu funcionamento direito mas nao e dificil porque eu sou foda demais demais e demais" />
//           <meta property="twitter:image" content="http://localhost:3000/guy2.jpg"></meta>

//         </Head>

//         <main className={styles.main}>

//           Linguagem escolhiada: {router.locale}



//           {!session &&
//             <button onClick={() => signIn()}>Fazer Login</button>
//           }
//           {session &&
//             <>
//               Ola {session.user?.name}.
//               <button onClick={() => signOut()}>Sair</button>
//             </>
//           }

//           <h1 className={styles.title}>
//             Eu sou maza e vou provar isso
//           </h1>

//           {/* <img src='/guy2.jpg' width={300} /> */}
//           <Image src={GuyImage} width={300} height={200} />

//           <p className={styles.description}>
//             You are crazey started by editing{' '}
//             <code className={styles.code}>pages/index.tsx</code>
//           </p>

//           <div className={styles.grid}>
//             <a href="https://nextjs.org/docs" className={styles.card}>
//               <h2>Documentation &rarr;</h2>
//               <p>Find in-depth information about Next.js features and API.</p>
//             </a>

//             <a href="https://nextjs.org/learn" className={styles.card}>
//               <h2>Learn &rarr;</h2>
//               <p>Learn about Next.js in an interactive course with quizzes!</p>
//             </a>

//             <a
//               href="https://github.com/vercel/next.js/tree/canary/examples"
//               className={styles.card}
//             >
//               <h2>Examples &rarr;</h2>
//               <p>Discover and deploy boilerplate example Next.js projects.</p>
//             </a>

//             <a
//               href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//               className={styles.card}
//             >
//               <h2>Deploy &rarr;</h2>
//               <p>
//                 Instantly deploy your Next.js site to a public URL with Vercel.
//               </p>
//             </a>
//           </div>
//         </main>

//         <footer className={styles.footer}>
//           <a
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Powered by{' '}
//             <span className={styles.logo}>
//               <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
//             </span>
//           </a>
//         </footer>
//       </div>
//     </Layout>
//   )
// }

// export default Home;

//////////// Como mudar o Locale corretamente ////////////


// import type { NextPage } from 'next';
// import Head from 'next/head';
// import Image from 'next/image';
// import { Layout } from '../components/Layout';
// import styles from '../styles/Home.module.css';
// import GuyImage from '../public/guy2.jpg';
// import { signIn, signOut, useSession } from 'next-auth/react';

// const Home: NextPage = () => {
//   const { data: session } = useSession();

//   if (session) {
//     console.log('user', session.user);
//   }



//   return (

//     <Layout>

//       <div className={styles.container}>
//         <Head>
//           <link rel="icon" href="/favicon.ico" />

//           {/* <!-- Primary Meta Tags --> */}
//           <title>Este e meu site em NEXT</title>
//           <meta name="title" content="Este e meu site em NEXT" />
//           <meta name="description" content="Vamos ver para que serve essa cena que eu ainda nao tenho muito conhecimento por nao saber o seu funcionamento direito mas nao e dificil porque eu sou foda demais demais e demais" />

//           {/* <!-- Open Graph / Facebook --> */}
//           <meta property="og:type" content="website" />
//           <meta property="og:url" content="http://localhost:3000/" />
//           <meta property="og:title" content="Este e meu site em NEXT" />
//           <meta property="og:description" content="Vamos ver para que serve essa cena que eu ainda nao tenho muito conhecimento por nao saber o seu funcionamento direito mas nao e dificil porque eu sou foda demais demais e demais" />
//           <meta property="og:image" content="http://localhost:3000/guy2.jpg" />

//           {/* <!-- Twitter --> */}
//           <meta property="twitter:card" content="summary_large_image" />
//           <meta property="twitter:url" content="http://localhost:3000/" />
//           <meta property="twitter:title" content="Este e meu site em NEXT" />
//           <meta property="twitter:description" content="Vamos ver para que serve essa cena que eu ainda nao tenho muito conhecimento por nao saber o seu funcionamento direito mas nao e dificil porque eu sou foda demais demais e demais" />
//           <meta property="twitter:image" content="http://localhost:3000/guy2.jpg"></meta>

//         </Head>

//         <main className={styles.main}>



//           {!session &&
//             <button onClick={() => signIn()}>Fazer Login</button>
//           }
//           {session &&
//             <>
//               Ola {session.user?.name}.
//               <button onClick={() => signOut()}>Sair</button>
//             </>
//           }

//           <h1 className={styles.title}>
//             Eu sou maza e vou provar isso
//           </h1>

//           {/* <img src='/guy2.jpg' width={300} /> */}
//           <Image src={GuyImage} width={300} height={200} />

//           <p className={styles.description}>
//             You are crazey started by editing{' '}
//             <code className={styles.code}>pages/index.tsx</code>
//           </p>

//           <div className={styles.grid}>
//             <a href="https://nextjs.org/docs" className={styles.card}>
//               <h2>Documentation &rarr;</h2>
//               <p>Find in-depth information about Next.js features and API.</p>
//             </a>

//             <a href="https://nextjs.org/learn" className={styles.card}>
//               <h2>Learn &rarr;</h2>
//               <p>Learn about Next.js in an interactive course with quizzes!</p>
//             </a>

//             <a
//               href="https://github.com/vercel/next.js/tree/canary/examples"
//               className={styles.card}
//             >
//               <h2>Examples &rarr;</h2>
//               <p>Discover and deploy boilerplate example Next.js projects.</p>
//             </a>

//             <a
//               href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//               className={styles.card}
//             >
//               <h2>Deploy &rarr;</h2>
//               <p>
//                 Instantly deploy your Next.js site to a public URL with Vercel.
//               </p>
//             </a>
//           </div>
//         </main>

//         <footer className={styles.footer}>
//           <a
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Powered by{' '}
//             <span className={styles.logo}>
//               <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
//             </span>
//           </a>
//         </footer>
//       </div>
//     </Layout>
//   )
// }

// export default Home;

///////// Usando i18n para multi-linguagem 2 //////////////

import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Layout } from '../components/Layout';
import styles from '../styles/Home.module.css';
import GuyImage from '../public/guy2.jpg';
import { signIn, signOut, useSession } from 'next-auth/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';


const Home: NextPage = () => {
  const { data: session } = useSession();

  const { t } = useTranslation('common');



  if (session) {
    console.log('user', session.user);
  }



  return (

    <Layout>

      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />

          {/* <!-- Primary Meta Tags --> */}
          <title>Este e meu site em NEXT</title>
          <meta name="title" content="Este e meu site em NEXT" />
          <meta name="description" content="Vamos ver para que serve essa cena que eu ainda nao tenho muito conhecimento por nao saber o seu funcionamento direito mas nao e dificil porque eu sou foda demais demais e demais" />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://localhost:3000/" />
          <meta property="og:title" content="Este e meu site em NEXT" />
          <meta property="og:description" content="Vamos ver para que serve essa cena que eu ainda nao tenho muito conhecimento por nao saber o seu funcionamento direito mas nao e dificil porque eu sou foda demais demais e demais" />
          <meta property="og:image" content="http://localhost:3000/guy2.jpg" />

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="http://localhost:3000/" />
          <meta property="twitter:title" content="Este e meu site em NEXT" />
          <meta property="twitter:description" content="Vamos ver para que serve essa cena que eu ainda nao tenho muito conhecimento por nao saber o seu funcionamento direito mas nao e dificil porque eu sou foda demais demais e demais" />
          <meta property="twitter:image" content="http://localhost:3000/guy2.jpg"></meta>

        </Head>

        <main className={styles.main}>



          {!session &&
            <button onClick={() => signIn()}>Fazer Login</button>
          }
          {session &&
            <>
              Ola {session.user?.name}.
              <button onClick={() => signOut()}>Sair</button>
            </>
          }

          <h1 className={styles.title}>
            {t('welcome')}
          </h1>

          {/* <img src='/guy2.jpg' width={300} /> */}
          <Image src={GuyImage} width={300} height={200} />

          <p className={styles.description}>
            You are crazey started by editing{' '}
            <code className={styles.code}>pages/index.tsx</code>
          </p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Learn &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/canary/examples"
              className={styles.card}
            >
              <h2>Examples &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h2>Deploy &rarr;</h2>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common']))
    }
  }
}

export default Home;
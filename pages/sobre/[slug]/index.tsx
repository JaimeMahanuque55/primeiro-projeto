////////////////// Paginas Dinamicas //////////////////
// import { useRouter } from 'next/router';

// const SobreItem = () => {
//   const router = useRouter();
//   const { slug } = router.query;
//   // const slug = router.query.slug;

//   return (
//     <div>Pagina de {slug}.</div>
//   )
// }

// export default SobreItem;

////////////////// USANDO O HOOK useRouter /////////////////

import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Layout } from '../../../components/Layout';

const SobreItem = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Eventos e tem que ser dentro do useEffect
  useEffect(() => {

    // router.events.on('routeChangeStart')// Antes de mudar de rota
    // router.events.on('routeChangeComplete')// Depois de mudar de rota

    const handleRouteChange = (url: string) => {
      console.log(`Indo para ${url}`)
    }

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange); // Tem que retornar off depois de mudar de rota
    }
  }, [])

  return (
    <Layout>
      <div>
        <Head>
          <title>Sobre {slug}</title>
        </Head>
        <h1>Pagina de {slug}.</h1>

        <p>Pathname: {router.pathname}</p>

        <p>isFallback: {router.isFallback.toString()}</p>

        <button onClick={() => {
          // router.push('/sobre/pedro') // cria um historico
          // router.replace('/sobre/pedro') // substitue a pagina
          router.push({
            pathname: '/sobre/[slug]',
            query: { slug: 'pedro' }
          });
        }}>Ir para pagina de Pedro</button>
      </div>
    </Layout>
  )
}

export default SobreItem;
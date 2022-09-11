import Head from "next/head";
import { Layout } from "../components/Layout";

const Custom404 = () => {

  return (
    <Layout>
      <div>
        <Head>
          <title>Pagina nao encontrada</title>
        </Head>
        <h1>404</h1>
        <p>Pagina noa encontrada</p>
      </div>
    </Layout>
  )
}

export default Custom404;
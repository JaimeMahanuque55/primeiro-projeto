import Head from "next/head";
import { Layout } from "../components/Layout";

const Custom500 = () => {

  return (
    <Layout>
      <div>
        <Head>
          <title>Erro interno do Servidor</title>
        </Head>
        <h1>500</h1>
        <p>Erro interno do Servidor</p>
      </div>
    </Layout>
  )
}

export default Custom500;
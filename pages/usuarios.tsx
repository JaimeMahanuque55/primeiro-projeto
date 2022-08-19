/////////////// USANDO A API DO PROPRIO PROJECTO //////////////

import Head from "next/head";
import { Layout } from "../components/Layout";
import styles from '../styles/Usuarios.module.css';

const Usuarios = () => {

  return (
    <Layout>
      <div>
        <Head>
          <title>Usuarios</title>
        </Head>
        <h1>Pagina Usuarios</h1>


      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  // DRY = Dont Repeat Yourself
  // const req = await fetch('/api/users'); Nao pode se fazer assim as requisicoes

  return {
    pros: {

    }
  }
}


export default Usuarios;
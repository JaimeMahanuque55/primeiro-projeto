/////////////// USANDO A API DO PROPRIO PROJECTO //////////////

// import Head from "next/head";
// import { Layout } from "../components/Layout";
// import styles from '../styles/Usuarios.module.css';

// const Usuarios = () => {

//   return (
//     <Layout>
//       <div>
//         <Head>
//           <title>Usuarios</title>
//         </Head>
//         <h1>Pagina Usuarios</h1>


//       </div>
//     </Layout>
//   );
// }

// export const getServerSideProps = async () => {
//   // DRY = Dont Repeat Yourself
//   // const req = await fetch('/api/users'); Nao pode se fazer assim as requisicoes

//   return {
//     pros: {

//     }
//   }
// }


// export default Usuarios;

///////////////// APLICANDO O CONCEITO DRY NA API /////////////

import Head from "next/head";
import { Layout } from "../components/Layout";
import styles from '../styles/Usuarios.module.css';
import api from "../libs/api";
import { User } from "../types/User";

type Props = {
  users: User[];
}

const Usuarios = ({ users }: Props) => {

  return (
    <Layout>
      <div>
        <Head>
          <title>Usuarios</title>
        </Head>
        <h1>Pagina Usuarios</h1>
        <ul>
          {users.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>



      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  // DRY = Dont Repeat Yourself

  const users = await api.getAllUsers(0);
  return {
    props: {
      users
    }
  }
}


export default Usuarios;
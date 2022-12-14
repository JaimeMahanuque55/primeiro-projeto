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

// import Head from "next/head";
// import { Layout } from "../components/Layout";
// import styles from '../styles/Usuarios.module.css';
// import api from "../libs/api";
// import { User } from "../types/User";

// type Props = {
//   users: User[];
// }

// const Usuarios = ({ users }: Props) => {

//   return (
//     <Layout>
//       <div>
//         <Head>
//           <title>Usuarios</title>
//         </Head>
//         <h1>Pagina Usuarios</h1>
//         <ul>
//           {users.map((item, index) => (
//             <li key={index}>{item.name}</li>
//           ))}
//         </ul>



//       </div>
//     </Layout>
//   );
// }

// export const getServerSideProps = async () => {
//   // DRY = Dont Repeat Yourself

//   const users = await api.getAllUsers(0);
//   return {
//     props: {
//       users
//     }
//   }
// }


// export default Usuarios;

////////// Usando a api no server-side ///////////////

// import Head from "next/head";
// import { Layout } from "../components/Layout";
// import styles from '../styles/Usuarios.module.css';
// import api from "../libs/api";
// import { User } from "../types/User";

// type Props = {
//   users: User[];
// }

// const Usuarios = ({ users }: Props) => {

//   return (
//     <Layout>
//       <div>
//         <Head>
//           <title>Usuarios</title>
//         </Head>
//         <h1>Pagina Usuarios</h1>
//         <ul>
//           {users.map((item, index) => (
//             <li key={index}>{item.name}</li>
//           ))}
//         </ul>



//       </div>
//     </Layout>
//   );
// }

// export const getServerSideProps = async () => {
//   // DRY = Dont Repeat Yourself

//   const users = await api.getAllUsers(0);

//   const req = await fetch('https://jsonplaceholder.typicode.com/todos'); // quando quer usar uma api externa no server-side

//   return {
//     props: {
//       users
//     }
//   }
// }


// export default Usuarios;

// ///////////// Usando a API no Client-Side 1 /////////////

// // No client-side so posso fazer requisicoes com o endereco dessa api mesmo que a api seja propria

// import Head from "next/head";
// import { Layout } from "../components/Layout";
// import styles from '../styles/Usuarios.module.css';
// import api from "../libs/api";
// import { User } from "../types/User";
// import { useState } from "react";

// type Props = {
//   users: User[];
// }

// const Usuarios = ({ users }: Props) => {

//   const [showMore, setShowMore] = useState(true);
//   const [loading, setLoading] = useState(false);
//   const [pageCount, setPageCount] = useState(1);
//   const [userList, setUserList] = useState<User[]>(users);

//   const handleLoadMore = async () => {

//     if (!loading) {
//       setLoading(true)
//       const req = await fetch(`/api/users?page=${pageCount + 1}`);
//       const json = await req.json();
//       if (json.status) {
//         if (json.users.length === 0) {
//           setShowMore(false);
//         }
//         setUserList([...userList, ...json.users]);
//       }
//       setLoading(false);
//       setPageCount(pageCount + 1);
//     }
//   }

//   return (
//     <Layout>
//       <div>
//         <Head>
//           <title>Usuarios</title>
//         </Head>
//         <h1>Pagina Usuarios</h1>
//         <ul>
//           {userList.map((item, index) => (
//             <li key={index}>{item.name}</li>
//           ))}
//         </ul>
//         {showMore &&
//           <button onClick={handleLoadMore}>Carregar mais</button>
//         }

//       </div>
//     </Layout>
//   );
// }

// export const getServerSideProps = async () => {
//   // DRY = Dont Repeat Yourself

//   const users = await api.getAllUsers(0);


//   return {
//     props: {
//       users
//     }
//   }
// }


// export default Usuarios;

///////////// Usando a API no Client-Side 2 /////////////

// No client-side so posso fazer requisicoes com o endereco dessa api mesmo que a api seja propria

// import Head from "next/head";
// import { Layout } from "../../components/Layout";
// import styles from '../styles/Usuarios.module.css';
// import api from "../../libs/api";
// import { User } from "../../types/User";
// import { useState } from "react";
// import Link from "next/link";

// type Props = {
//   users: User[];
// }

// const Usuarios = ({ users }: Props) => {

//   const [showMore, setShowMore] = useState(true);
//   const [loading, setLoading] = useState(false);
//   const [pageCount, setPageCount] = useState(1);
//   const [userList, setUserList] = useState<User[]>(users);

//   const handleLoadMore = async () => {

//     if (!loading) {
//       setLoading(true)
//       const req = await fetch(`/api/users?page=${pageCount + 1}`);
//       const json = await req.json();
//       if (json.status) {
//         if (json.users.length === 0) {
//           setShowMore(false);
//         }
//         setUserList([...userList, ...json.users]);
//       }
//       setLoading(false);
//       setPageCount(pageCount + 1);
//     }
//   }

//   return (
//     <Layout>
//       <div>
//         <Head>
//           <title>Usuarios</title>
//         </Head>
//         <h1>Pagina Usuarios</h1>

//         <Link href={`/usuarios/novo`}>Novo Usuario</Link>

//         <ul>
//           {userList.map((item, index) => (
//             <li key={index}>{item.name}</li>
//           ))}
//         </ul>
//         {showMore &&
//           <button onClick={handleLoadMore}>Carregar mais</button>
//         }

//       </div>
//     </Layout>
//   );
// }

// export const getServerSideProps = async () => {
//   // DRY = Dont Repeat Yourself

//   const users = await api.getAllUsers(0);


//   return {
//     props: {
//       users
//     }
//   }
// }


// export default Usuarios;

///////////// Usando o Axios no NextJs /////////////

// No client-side so posso fazer requisicoes com o endereco dessa api mesmo que a api seja propria

// import Head from "next/head";
// import { Layout } from "../../components/Layout";
// import styles from '../styles/Usuarios.module.css';
// import api from "../../libs/api";
// import { User } from "../../types/User";
// import { useState } from "react";
// import Link from "next/link";
// import axios from "axios";

// type Props = {
//   users: User[];
// }

// const Usuarios = ({ users }: Props) => {

//   const [showMore, setShowMore] = useState(true);
//   const [loading, setLoading] = useState(false);
//   const [pageCount, setPageCount] = useState(1);
//   const [userList, setUserList] = useState<User[]>(users);

//   const handleLoadMore = async () => {

//     if (!loading) {
//       setLoading(true)
//       const json = await axios.get(`/api/users?page=${pageCount + 1}`);
//       if (json.data.status) {
//         if (json.data.users.length === 0) {
//           setShowMore(false);
//         }
//         setUserList([...userList, ...json.data.users]);
//       }
//       setLoading(false);
//       setPageCount(pageCount + 1);
//     }
//   }

//   return (
//     <Layout>
//       <div>
//         <Head>
//           <title>Usuarios</title>
//         </Head>
//         <h1>Pagina Usuarios</h1>

//         <Link href={`/usuarios/novo`}>Novo Usuario</Link>

//         <ul>
//           {userList.map((item, index) => (
//             <li key={index}>{item.name}</li>
//           ))}
//         </ul>
//         {showMore &&
//           <button onClick={handleLoadMore}>Carregar mais</button>
//         }

//       </div>
//     </Layout>
//   );
// }

// export const getServerSideProps = async () => {
//   // DRY = Dont Repeat Yourself

//   const users = await api.getAllUsers(0);


//   return {
//     props: {
//       users
//     }
//   }
// }

// export default Usuarios;

////////////// Login: Paginas privadas (via client-side) //////////

// import Head from "next/head";
// import { Layout } from "../../components/Layout";
// import styles from '../styles/Usuarios.module.css';
// import api from "../../libs/api";
// import { User } from "../../types/User";
// import { useState } from "react";
// import Link from "next/link";
// import axios from "axios";
// import { useSession } from "next-auth/react";

// type Props = {
//   users: User[];
// }

// const Usuarios = ({ users }: Props) => {
//   const { data: session, status: sessionStatus } = useSession();



//   const [showMore, setShowMore] = useState(true);
//   const [loading, setLoading] = useState(false);
//   const [pageCount, setPageCount] = useState(1);
//   const [userList, setUserList] = useState<User[]>(users);

//   const handleLoadMore = async () => {

//     if (!loading) {
//       setLoading(true)
//       const json = await axios.get(`/api/users?page=${pageCount + 1}`);
//       if (json.data.status) {
//         if (json.data.users.length === 0) {
//           setShowMore(false);
//         }
//         setUserList([...userList, ...json.data.users]);
//       }
//       setLoading(false);
//       setPageCount(pageCount + 1);
//     }
//   }

//   return (
//     <Layout>
//       <div>
//         <Head>
//           <title>Usuarios</title>
//         </Head>

//         {sessionStatus === 'loading' &&
//           <div>Carregando...</div>
//         }
//         {sessionStatus === 'unauthenticated' &&
//           <div>Voce nao tem permissao para acessar este conteudo</div>
//         }
//         {sessionStatus === 'authenticated' &&
//           <>
//             <h1>Pagina Usuarios</h1>

//             <Link href={`/usuarios/novo`}>Novo Usuario</Link>

//             <ul>
//               {userList.map((item, index) => (
//                 <li key={index}>{item.name}</li>
//               ))}
//             </ul>
//             {showMore &&
//               <button onClick={handleLoadMore}>Carregar mais</button>
//             }
//           </>
//         }




//       </div>
//     </Layout>
//   );
// }

// export const getServerSideProps = async () => {
//   // DRY = Dont Repeat Yourself

//   const users = await api.getAllUsers(0);


//   return {
//     props: {
//       users
//     }
//   }
// }

// export default Usuarios;

//////////// Login: Paginas privadas (via server-side) //////////

import Head from "next/head";
import { Layout } from "../../components/Layout";
import styles from '../styles/Usuarios.module.css';
import api from "../../libs/api";
import { User } from "../../types/User";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { GetServerSideProps } from "next";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import { AuthUser } from "../../types/AuthUser";

type Props = {
  users: User[];
  loggedUser: AuthUser;
}

const Usuarios = ({ users, loggedUser }: Props) => {


  const [showMore, setShowMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState(1);
  const [userList, setUserList] = useState<User[]>(users);

  const handleLoadMore = async () => {

    if (!loading) {
      setLoading(true)
      const json = await axios.get(`/api/users?page=${pageCount + 1}`);
      if (json.data.status) {
        if (json.data.users.length === 0) {
          setShowMore(false);
        }
        setUserList([...userList, ...json.data.users]);
      }
      setLoading(false);
      setPageCount(pageCount + 1);
    }
  }

  return (
    <Layout>
      <div>
        <Head>
          <title>Usuarios</title>
        </Head>

        <h1>Pagina Usuarios</h1>
        <div>Ola {loggedUser.name}. (Tipo: {loggedUser.role})</div>

        <Link href={`/usuarios/novo`}>Novo Usuario</Link>

        <ul>
          {userList.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
        {showMore &&
          <button onClick={handleLoadMore}>Carregar mais</button>
        }
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await unstable_getServerSession(
    context.req, context.res, authOptions
  );
  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: true
      }
    }
  }

  const users = await api.getAllUsers(0);


  return {
    props: {
      loggedUser: session.user,
      users
    }
  }
}

export default Usuarios;
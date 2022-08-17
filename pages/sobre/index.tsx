
////////////////////// NAVEGANDO ENTRE PAGINAS NO NEXTJS ////////////////

// import Link from "next/link";

// const Sobre = () => {

//   return (
//     <div>
//       <h1>Pagina sobre</h1>
//       <ul>
//         <li><a href="/sobre/jaime">Jaime</a></li>
//         <li><a href="/sobre/joao">Joao</a></li>
//       </ul>

//     </div>
//   )
// }

// export default Sobre;

////////////// NAVEGANDO ENTRE PAGINAS USANDO LINK //////////////

// import Link from "next/link";

// const Sobre = () => {

//   return (
//     <div>
//       <h1>Pagina sobre</h1>
//       <ul>
//         <li><Link href="/sobre/jaime"><a>Pagina Jaime</a></Link></li>
//         <li><Link href="/sobre/joao"><a>Pagina Joao</a></Link></li>
//       </ul>

//     </div>
//   )
// }

// export default Sobre;

////////////////// FUNCIONAMENTO DE CLIENT E SERVER NO NEXTJS //////////////////////

// import Link from "next/link";
// import { useState } from "react";

// const Sobre = () => {
//   const [contador, setContador] = useState(25);

//   const handleContadorBtn = () => {
//     setContador(contador + 1);
//   }

//   return (
//     <div>
//       <h1>Pagina sobre ({contador})</h1>

//       <ul>
//         <li><Link href="/sobre/jaime"><a>Pagina Jaime</a></Link></li>
//         <li><Link href="/sobre/joao"><a>Pagina Joao</a></Link></li>
//       </ul>

//       <button onClick={handleContadorBtn}>Aumentar</button>
//     </div>
//   )
// }

// export default Sobre;


/////////////// VARIAVEIS DE AMBIENTE NO NEXTJS //////////////////////

// import Link from "next/link";
// import { useState } from "react";

// type Props = {
//   nome: string;
// }



// const Sobre = ({ nome }: Props) => {
//   const [contador, setContador] = useState(25);

//   const handleContadorBtn = () => {
//     setContador(contador + 1);
//   }

//   return (
//     <div>
//       <h1>Pagina sobre ({contador})</h1>

//       {/* Meu nome e {process.env.NEXT_PUBLIC_APELIDO} */}
//       Meu nome e {nome}
//       <ul>
//         <li><Link href="/sobre/jaime"><a>Pagina Jaime</a></Link></li>
//         <li><Link href="/sobre/joao"><a>Pagina Joao</a></Link></li>
//       </ul>

//       <button onClick={handleContadorBtn}>Aumentar</button>
//     </div>
//   )
// }

// export const getStaticProps = () => {

//   return {
//     props: {
//       nome: process.env.NOME
//     }
//   }
// }
// export default Sobre;

/////////////// SCRIPTS EXTERNOS NO NEXTJS /////////////////

// import Link from "next/link";
// import { useState } from "react";
// import Script from 'next/script';

// type Props = {
//   nome: string;
// }



// const Sobre = ({ nome }: Props) => {
//   const [contador, setContador] = useState(25);

//   const handleContadorBtn = () => {
//     setContador(contador + 1);
//   }

//   return (
//     <div>
//       <h1>Pagina sobre ({contador})</h1>

//       Meu nome e {nome}
//       <ul>
//         <li><Link href="/sobre/jaime"><a>Pagina Jaime</a></Link></li>
//         <li><Link href="/sobre/joao"><a>Pagina Joao</a></Link></li>
//       </ul>

//       <button onClick={handleContadorBtn}>Aumentar</button>

//       {/* <script src="https://google-analytics.com/analytics.js"></script>  Funciona mas voce nao tem controle do scipt*/}

//       {/* <Script
//         src="https://google-analytics.com/analytics.js"
//         strategy="afterInteractive"
//         onLoad={()=>{}}
//       /> */}

//       {/* Quando quiser rodar uma linha de codigos que pegou de algum lugar*/}
//       <Script strategy="afterInteractive">
//         {`window.alert('Carreguei!')`}
//       </Script>

//     </div>
//   )
// }

// export const getStaticProps = () => {

//   return {
//     props: {
//       nome: process.env.NOME
//     }
//   }
// }
// export default Sobre;

///////////////////// USANDO O HOOK useRouter ///////////////////

// import Link from "next/link";
// import { useState } from "react";
// import Script from 'next/script';

// type Props = {
//   nome: string;
// }



// const Sobre = ({ nome }: Props) => {
//   const [contador, setContador] = useState(25);

//   const handleContadorBtn = () => {
//     setContador(contador + 1);
//   }

//   return (
//     <div>
//       <h1>Pagina sobre ({contador})</h1>

//       Meu nome e {nome}
//       <ul>
//         <li><Link href="/sobre/jaime"><a>Pagina Jaime</a></Link></li>
//         <li><Link href="/sobre/joao"><a>Pagina Joao</a></Link></li>
//       </ul>

//       <button onClick={handleContadorBtn}>Aumentar</button>

//     </div>
//   )
// }

// export const getStaticProps = () => {

//   return {
//     props: {
//       nome: process.env.NOME
//     }
//   }
// }
// export default Sobre;

/////////////// USANDO O COMPONENTE LINK ////////////////////

// import Link from "next/link";
// import { useState } from "react";

// type Props = {
//   nome: string;
// }


// const Sobre = ({ nome }: Props) => {
//   const [contador, setContador] = useState(25);

//   const handleContadorBtn = () => {
//     setContador(contador + 1);
//   }

//   return (
//     <div>
//       <h1>Pagina sobre ({contador})</h1>

//       Meu nome e {nome}
//       <ul>
//         <li><Link
//           href={{
//             pathname: '/sobre/[slug]',
//             query: { slug: 'Jaime' }
//           }}
//           replace
//           scroll={false}
//         >Pagina Jaime</Link></li>
//         <li><Link href="/sobre/joao" passHref><a>Pagina Joao</a> </Link></li>
//       </ul>

//       <button onClick={handleContadorBtn}>Aumentar</button>

//     </div>
//   )
// }
// export const getStaticProps = () => {

//   return {
//     props: {
//       nome: process.env.NOME
//     }
//   }
// }
// export default Sobre;

//////////// ESTILIZACAO GLOBAL NO NEXTJS //////////////////

// import Link from "next/link";
// import { useState } from "react";

// type Props = {
//   nome: string;
// }


// const Sobre = ({ nome }: Props) => {
//   const [contador, setContador] = useState(25);

//   const handleContadorBtn = () => {
//     setContador(contador + 1);
//   }

//   return (
//     <div>
//       <h1 className="red">Pagina sobre ({contador})</h1>

//       Meu nome e {nome}
//       <ul>
//         <li><Link
//           href={{
//             pathname: '/sobre/[slug]',
//             query: { slug: 'Jaime' }
//           }}
//           replace
//           scroll={false}
//         >Pagina Jaime</Link></li>
//         <li><Link href="/sobre/joao">Pagina Joao</Link></li>
//       </ul>

//       <button onClick={handleContadorBtn} className="btn btn-primary">Aumentar</button>

//     </div>
//   )
// }
// export const getStaticProps = () => {

//   return {
//     props: {
//       nome: process.env.NOME
//     }
//   }
// }
// export default Sobre;


////////////// USANDO CSS MODULES NO NEXT ///////////////

// import Link from "next/link";
// import { useState } from "react";
// import { MyButton } from '../../components/MyButton';
// import styles from '../../styles/Sobre.module.css';




// type Props = {
//   nome: string;
// }


// const Sobre = ({ nome }: Props) => {
//   const [contador, setContador] = useState(25);

//   const handleContadorBtn = () => {
//     setContador(contador + 1);
//   }

//   return (
//     <div>
//       <h1 className={styles.sobreTitle}>Pagina sobre ({contador})</h1>

//       Meu nome e {nome}
//       <ul>
//         <li><Link
//           href={{
//             pathname: '/sobre/[slug]',
//             query: { slug: 'Jaime' }
//           }}
//           replace
//           scroll={false}
//         >Pagina Jaime</Link></li>
//         <li><Link href="/sobre/joao">Pagina Joao</Link></li>
//       </ul>

//       <MyButton label="Aumentar" onClick={handleContadorBtn} />

//     </div>
//   )
// }
// export const getStaticProps = () => {

//   return {
//     props: {
//       nome: process.env.NOME
//     }
//   }
// }
// export default Sobre;


////////////////// USANDO CSS-IN-JS NO NEXTJS /////////////////

// import Link from "next/link";
// import { useState } from "react";
// import { MyButton } from '../../components/MyButton';
// import styles from '../../styles/Sobre.module.css';




// type Props = {
//   nome: string;
// }


// const Sobre = ({ nome }: Props) => {
//   const [contador, setContador] = useState(15);

//   const handleContadorBtn = () => {
//     setContador(contador + 1);
//   }

//   return (
//     <div>
//       <h1 className={styles.sobreTitle}>Pagina sobre ({contador})</h1>

//       Meu nome e {nome}
//       {/* <ul style={{ color: '#f00', backgroundColor: (contador < 25 ? '#0f0' : '#F00'), fontSize: 40 }}> */}
//       <ul className="lista">
//         <li><Link
//           href={{
//             pathname: '/sobre/[slug]',
//             query: { slug: 'Jaime' }
//           }}
//           replace
//           scroll={false}
//         >Pagina Jaime</Link></li>
//         <li><Link href="/sobre/joao">Pagina Joao</Link></li>
//       </ul>

//       <MyButton label="Aumentar" onClick={handleContadorBtn} />


//       {/* Quando usamos o global o css pega em todo lugar que o componente for utilizado */}
//       <style global jsx>
//         {`

//         body {
//           background-color: #000;
//           color: #FFF;
//         }
//         .lista {
//           background-color: blue;
//           color: white;
//         }
//         .lista li {
//           color: white;
//           font-size: 40px
//         }
//       `}
//       </style>
//     </div>
//   )
// }
// export const getStaticProps = () => {

//   return {
//     props: {
//       nome: process.env.NOME
//     }
//   }
// }
// export default Sobre;


/////////////// MONTANDO LAYOUT UNICO //////////////////

// import Link from "next/link";
// import { useState } from "react";
// import { Layout } from "../../components/Layout";
// import { MyButton } from '../../components/MyButton';
// import styles from '../../styles/Sobre.module.css';




// type Props = {
//   nome: string;
// }


// const Sobre = ({ nome }: Props) => {
//   const [contador, setContador] = useState(15);

//   const handleContadorBtn = () => {
//     setContador(contador + 1);
//   }

//   return (

//     <Layout>
//       <div>
//         <h1 className={styles.sobreTitle}>Pagina sobre ({contador})</h1>

//         Meu nome e {nome}
//         <ul className="lista">
//           <li><Link
//             href={{
//               pathname: '/sobre/[slug]',
//               query: { slug: 'Jaime' }
//             }}
//             replace
//             scroll={false}
//           >Pagina Jaime</Link></li>
//           <li><Link href="/sobre/joao">Pagina Joao</Link></li>
//           <li><Link href="/exemplo">Pagina exemplo</Link></li>
//         </ul>

//         <MyButton label="Aumentar" onClick={handleContadorBtn} />

//         <style jsx>
//           {`
//         .lista {
//           background-color: blue;
//           color: white;
//         }
//         .lista li {
//           color: white;
//           font-size: 40px
//         }
//       `}
//         </style>
//       </div>
//     </Layout>
//   )
// }
// export const getStaticProps = () => {

//   return {
//     props: {
//       nome: process.env.NOME
//     }
//   }
// }
// export default Sobre;

//////////////// USANDO NEXT/HEAD //////////////

import Link from "next/link";
import Head from 'next/head';
import { useState } from "react";
import { Layout } from "../../components/Layout";
import { MyButton } from '../../components/MyButton';
import styles from '../../styles/Sobre.module.css';




type Props = {
  nome: string;
}


const Sobre = ({ nome }: Props) => {
  const [contador, setContador] = useState(15);

  const handleContadorBtn = () => {
    setContador(contador + 1);
  }

  return (

    <Layout>
      <div>
        <Head>
          <title>Sobre</title>
        </Head>
        <h1 className={styles.sobreTitle}>Pagina sobre ({contador})</h1>

        Meu nome e {nome}
        <ul className="lista">
          <li><Link
            href={{
              pathname: '/sobre/[slug]',
              query: { slug: 'Jaime' }
            }}
            replace
            scroll={false}
          >Pagina Jaime</Link></li>
          <li><Link href="/sobre/joao">Pagina Joao</Link></li>
          <li><Link href="/exemplo">Pagina exemplo</Link></li>
        </ul>

        <MyButton label="Aumentar" onClick={handleContadorBtn} />

        <style jsx>
          {`
        .lista {
          background-color: blue;
          color: white;
        }
        .lista li {
          color: white;
          font-size: 40px
        }
      `}
        </style>
      </div>
    </Layout>
  )
}
export const getStaticProps = () => {

  return {
    props: {
      nome: process.env.NOME
    }
  }
}
export default Sobre;
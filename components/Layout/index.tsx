//////////////// MONTANDO UM LAYOUT UNICO //////////////////

// import { ReactElement } from 'react';
// import styles from './Layout.module.css';

// type Props = {
//   children: ReactElement;
// }

// export const Layout = ({ children }: Props) => {

//   return (

//     <div className={styles.container}>
//       <header className={styles.header}>
//         <h1>Meu Projecto</h1>
//       </header>
//       <main>{children}</main>
//       <footer className={styles.footer}>Todos os direitos reservados.</footer>
//     </div>
//   );
// }

///////////////// CRIANDO MENU DE NAVEGACAO //////////////////////
// import { ReactElement } from 'react';
// import NavBar from '../NavBar';
// import styles from './Layout.module.css';

// type Props = {
//   children: ReactElement;
// }

// export const Layout = ({ children }: Props) => {

//   return (

//     <div className={styles.container}>
//       <header className={styles.header}>
//         <h1>Meu Projecto 2.0</h1>
//       </header>

//       <NavBar />

//       <main>{children}</main>
//       <footer className={styles.footer}>Todos os direitos reservados.</footer>
//     </div>
//   );
// }
////////////// Como mudar o Locale corretamente /////////////


// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import { ReactElement } from 'react';
// import NavBar from '../NavBar';
// import styles from './Layout.module.css';

// type Props = {
//   children: ReactElement;
// }

// export const Layout = ({ children }: Props) => {
//   const router = useRouter();

//   // router.push('/sobre', '/sobre', { locale: 'pt' }) //Forma mais recomendada
//   // router.push('/pt/sobre'); // Forma mais facil

//   return (

//     <div className={styles.container}>
//       <header className={styles.header}>
//         <h1>Meu Projecto 2.0</h1>

//         <ul>
//           {router.locales?.map((item, index) => (
//             <li key={index}>
//               <Link
//                 href={'/'}
//                 locale={item}
//               >{item}</Link>
//             </li>
//           ))}
//         </ul>

//         Linguagem escolhida: {router.locale}

//       </header>

//       <NavBar />

//       <main>{children}</main>
//       <footer className={styles.footer}>Todos os direitos reservados.</footer>
//     </div>
//   );
// }

/////////////// Usando mais de um NS no i18n 1 //////////

import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import NavBar from '../NavBar';
import styles from './Layout.module.css';

type Props = {
  children: ReactElement;
}

export const Layout = ({ children }: Props) => {
  const router = useRouter();
  const { t } = useTranslation('common');

  return (

    <div className={styles.container}>
      <header className={styles.header}>
        <h1>{t('title')}</h1>

        <ul>
          {router.locales?.map((item, index) => (
            <li key={index}>
              <Link
                href={'/'}
                locale={item}
              >{item}</Link>
            </li>
          ))}
        </ul>
        {t('choosen_language', { lng: router.locale })}

      </header>

      <NavBar />

      <main>{children}</main>
      <footer className={styles.footer}>{t('footer.rights')}</footer>
    </div>
  );
}
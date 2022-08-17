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
import { ReactElement } from 'react';
import NavBar from '../NavBar';
import styles from './Layout.module.css';

type Props = {
  children: ReactElement;
}

export const Layout = ({ children }: Props) => {

  return (

    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Meu Projecto 2.0</h1>
      </header>

      <NavBar />

      <main>{children}</main>
      <footer className={styles.footer}>Todos os direitos reservados.</footer>
    </div>
  );
}
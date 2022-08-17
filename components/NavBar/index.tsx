////////////// CRIANDO MENU DE NAVEGACAO 1 A 3 DE 4 ///////////////

// import Link from 'next/link';
// import React from 'react';
// import { useRouter } from 'next/router';
// import { navigationLinks } from '../../utils/data';
// import styles from './NavBar.module.css';

// const NavBar = () => {
//   const router = useRouter();

//   const verifyActiveLink = (loopPath: string) => {
//     if (loopPath === '/' && router.pathname !== '/') return null
//     if (router.pathname.indexOf(loopPath) === 0) {
//       return (styles.linkActive);
//     }

//     return null;
//   }



//   return (
//     <ul className={styles.container}>
//       {navigationLinks.map((link, index) => (
//         // <li key={index} className={styles.linkItem}>
//         // <li key={index} className={router.pathname === link.path ? styles.linkActive : styles.linkItem}>
//         // <li key={index} className={[styles.linkItem, styles.linkActive].join(' ')}> // Para juntar duas classes
//         // <li key={index} className={[
//         //   styles.linkItem,
//         //   router.pathname === link.path ? styles.linkActive : null].join(' ')}>
//         //   <Link href={link.path}>{link.label}</Link>
//         // </li>

//         // A home continua marcada
//         // <li key={index} className={[
//         //   styles.linkItem,
//         //   router.pathname.indexOf(link.path) === 0 ? styles.linkActive : null].join(' ')}>
//         //   <Link href={link.path}>{link.label}</Link>
//         // </li>

//         <li key={index} className={[
//           styles.linkItem,
//           verifyActiveLink(link.path)

//         ].join(' ')}>
//           <Link href={link.path}>{link.label}</Link>
//         </li>
//       ))}
//     </ul>
//   )
// }

// export default NavBar;

////////////// CRIANDO MENU DE NAVEGACAO 4 DE 4 ///////////////

import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import { navigationLinks } from '../../utils/data';
import styles from './NavBar.module.css';

const NavBar = () => {
  const router = useRouter();

  return (
    <ul className={styles.container}>
      {navigationLinks.map((link, index) => (
        <li key={index} className={[
          styles.linkItem,
          link.path.includes(router.pathname) ? styles.linkActive : null
        ].join(' ')}>
          <Link href={link.path[0]}>{link.label}</Link>
        </li>
      ))}
    </ul>
  )
}

export default NavBar;
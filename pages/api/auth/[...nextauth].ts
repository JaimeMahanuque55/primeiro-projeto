/////////// Configurando o NextAuth //////////////

// import NextAuth, { NextAuthOptions } from 'next-auth';


// export const authOptions: NextAuthOptions = {
//   secret: process.env.NEXTAUTH_SECRET,
//   providers: []
// }

// export default NextAuth(authOptions);

/////////// LOGIN: Usando o CredentialsProvider /////////////////

// import NextAuth, { NextAuthOptions } from 'next-auth';
// import CredentialsProvider from 'next-auth/providers/credentials';


// export const authOptions: NextAuthOptions = {
//   secret: process.env.NEXTAUTH_SECRET,
//   providers: [
//     CredentialsProvider({
//       id: 'credentials', // pode usar o nome que quiser
//       credentials: {
//         email: { label: 'E-mail', type: 'text' },
//         password: { label: 'Senha', type: 'password' }
//       },
//       authorize: async (credentials, req) => { // funcao responsavel por autorizar o login
//         if (credentials?.email === 'james@gmail.com') {
//           const user = {
//             id: 123,
//             name: 'James',
//             email: 'james@gmail.com',
//             role: 'USER'
//           }
//           return user;
//         }
//         return null;
//       }
//     })
//   ]
// }

// export default NextAuth(authOptions);

///////////// LOGIN: Autorizando via Prisma ////////////////

// import NextAuth, { NextAuthOptions } from 'next-auth';
// import CredentialsProvider from 'next-auth/providers/credentials';
// import api from '../../../libs/api';


// export const authOptions: NextAuthOptions = {
//   secret: process.env.NEXTAUTH_SECRET,
//   providers: [
//     CredentialsProvider({
//       id: 'credentials', // pode usar o nome que quiser
//       credentials: {
//         email: { label: 'E-mail', type: 'text' },
//         password: { label: 'Senha', type: 'password' }
//       },
//       authorize: async (credentials, req) => { // funcao responsavel por autorizar o login
//         if (credentials && credentials.email && credentials.password) {
//           const user = await api.getUserFromEmail(credentials.email);
//           if (user) {

//             return {
//               id: user.id,
//               name: user.name,
//               email: user.email,
//               role: user.role
//             }
//           }
//         }

//         return null;
//       }
//     })
//   ]
// }

// export default NextAuth(authOptions);

/////////// Login: Resolvendo problema dos dados 2 ////////////


import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import api from '../../../libs/api';
import { AuthUser } from '../../../types/AuthUser';


export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      id: 'credentials', // pode usar o nome que quiser
      credentials: {
        email: { label: 'E-mail', type: 'text' },
        password: { label: 'Senha', type: 'password' }
      },
      authorize: async (credentials, req) => { // funcao responsavel por autorizar o login
        if (credentials && credentials.email && credentials.password) {
          const user = await api.getUserFromEmail(credentials.email);
          if (user) {

            return {
              id: user.id,
              name: user.name,
              email: user.email,
              role: user.role
            }
          }
        }

        return null;
      }
    })
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = user;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        session.user = token.user as AuthUser;
      }
      return session;
    }
  }
}

export default NextAuth(authOptions);
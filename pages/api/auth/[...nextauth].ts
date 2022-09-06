/////////// Configurando o NextAuth //////////////

// import NextAuth, { NextAuthOptions } from 'next-auth';


// export const authOptions: NextAuthOptions = {
//   secret: process.env.NEXTAUTH_SECRET,
//   providers: []
// }

// export default NextAuth(authOptions);

/////////// LOGIN: Usando o CredentialsProvider /////////////////

import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';


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
        if (credentials?.email === 'james@gmail.com') {
          const user = {
            id: 123,
            name: 'James',
            email: 'james@gmail.com',
            role: 'USER'
          }
          return user;
        }
        return null;
      }
    })
  ]
}

export default NextAuth(authOptions);
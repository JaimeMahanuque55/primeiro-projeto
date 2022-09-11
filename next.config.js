// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   images: {
//     domains: ['www.google.com.br']
//   },
  
// }

// module.exports = nextConfig

///////////// Lidando com CORS no NextJS ////////////////

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   images: {
//     domains: ['www.google.com.br']
//   },
//   headers: async () => {
//     return [
//       {
//         // source: '/api/:path*', // Libera todos os endpoints da api
//         // source: '/api/users',
//         source: '/api/:path*',
//         headers: [
//           {key: 'Access-Control-Allow-Origin', value: '*' }, // colocando o * no value libera acesso da api para todos sites da internet
//           // { key: 'Access-Control-Allow-Methods', value: 'GET, POST, PUT, DELETE' } // Libera os methods que podem ser acessados
//           { key: 'Access-Control-Allow-Methods', value: '*' } // Libera os methods que podem ser acessados
//         ]
//       },
//       // {
//       //   source: '/api/ping',
//       //   headers: [
//       //     { key: '', value: '' }
//       //   ]
//       // }
      
//     ]
//   }
  
// }

// module.exports = nextConfig

/////////// Como criar rotas internacionais ///////////

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.google.com.br']
  },
  headers: async () => {
    return [
      {
        source: '/api/:path*',
        headers: [
          {key: 'Access-Control-Allow-Origin', value: '*' }, // colocando o * no value libera acesso da api para todos sites da internet
          { key: 'Access-Control-Allow-Methods', value: '*' } // Libera os methods que podem ser acessados
        ]
      }
    ];
  },
  i18n: {
    locales: ['en', 'pt'],
    defaultLocale: 'en',
    localeDetection: false
    // Para dominios diferentes
    // domains: [
    //   { domain: 'meusite.com', defaultLocale: 'en' },
    //   { domain: 'meusite.com.br', defaultLocale: 'pt' },
    //   { domain: 'meusite.fr', defaultLocale: 'fr' }
    // ]
  }
  
}

module.exports = nextConfig
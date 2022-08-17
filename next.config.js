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
        // source: '/api/:path*', // Libera todos os endpoints da api
        // source: '/api/users',
        source: '/api/:path*',
        headers: [
          {key: 'Access-Control-Allow-Origin', value: '*' }, // colocando o * no value libera acesso da api para todos sites da internet
          // { key: 'Access-Control-Allow-Methods', value: 'GET, POST, PUT, DELETE' } // Libera os methods que podem ser acessados
          { key: 'Access-Control-Allow-Methods', value: '*' } // Libera os methods que podem ser acessados
        ]
      },
      // {
      //   source: '/api/ping',
      //   headers: [
      //     { key: '', value: '' }
      //   ]
      // }
      
    ]
  }
  
}

module.exports = nextConfig
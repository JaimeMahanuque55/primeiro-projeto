/////////////////// ENTENDENDO STATICPATHS NA PRATICA ////////////////
// import { GetStaticProps } from "next";
// import { ParsedUrlQuery } from "querystring";
// import { Layout } from "../../components/Layout";
// import { Post } from "../../types/Post";

// type Props = {
//   post: Post
// }

// const BlogItem = ({ post }: Props) => {

//   return (
//     <Layout>
//       <div>
//         <h1>Blog</h1>
//         <h2>{post.title}</h2>
//         <p>{post.body}</p>
//       </div>
//     </Layout>
//   )
// }


// export default BlogItem;

// export const getStaticPaths = async () => {
//   const req = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const posts: Post[] = await req.json();
//   const paths = posts.map(post => ({
//     params: {
//       id: post.id.toString()
//     }
//   }));

//   return {
//     paths,
//     fallback: false //Manda para pagina not Found
//     // fallback: true
//     // fallback: 'blocking'
//   }
// }

// interface IParams extends ParsedUrlQuery {
//   id: string
// }
// export const getStaticProps: GetStaticProps = async (context) => {
//   const { id } = context.params as IParams;
//   const req = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//   const post = await req.json();

//   return {
//     props: {
//       post: post
//     }
//   }
// }

///////////////// SEO com o NextJS (estático e dinâmico) /////////////////

// import { GetStaticProps } from "next";
// import Head from "next/head";
// import { ParsedUrlQuery } from "querystring";
// import { Layout } from "../../components/Layout";
// import { Post } from "../../types/Post";

// type Props = {
//   post: Post
// }

// const BlogItem = ({ post }: Props) => {

//   return (
//     <Layout>

//       <div>
//         <Head>
//           {/* <!-- Primary Meta Tags --> */}
//           <title>{post.title}</title>
//           <meta name="title" content={post.title} />
//           <meta name="description" content={post.body} />

//           {/* <!-- Open Graph / Facebook --> */}
//           <meta property="og:type" content="website" />
//           <meta property="og:url" content={`http://localhost:3000/blog/${post.id}`} />
//           <meta property="og:title" content={post.title} />
//           <meta property="og:description" content={post.body} />
//           <meta property="og:image" content="http://localhost:3000/guy2.jpg" />

//           {/* <!-- Twitter --> */}
//           <meta property="twitter:card" content="summary_large_image" />
//           <meta property="twitter:url" content={`http://localhost:3000/blog/${post.id}`} />
//           <meta property="twitter:title" content={post.title} />
//           <meta property="twitter:description" content={post.body} />
//           <meta property="twitter:image" content="http://localhost:3000/guy2.jpg"></meta>

//         </Head>
//         <h1>Blog</h1>
//         <h2>{post.title}</h2>
//         <p>{post.body}</p>
//       </div>
//     </Layout>
//   )
// }


// export default BlogItem;

// export const getStaticPaths = async () => {
//   const req = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const posts: Post[] = await req.json();
//   const paths = posts.map(post => ({
//     params: {
//       id: post.id.toString()
//     }
//   }));

//   return {
//     paths,
//     fallback: false //Manda para pagina not Found
//     // fallback: true
//     // fallback: 'blocking'
//   }
// }

// interface IParams extends ParsedUrlQuery {
//   id: string
// }
// export const getStaticProps: GetStaticProps = async (context) => {
//   const { id } = context.params as IParams;
//   const req = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//   const post = await req.json();

//   return {
//     props: {
//       post: post
//     }
//   }
// }

/////////////// Usando Locale no SSG ////////////

import { GetStaticProps } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import { Layout } from "../../components/Layout";
import { Post } from "../../types/Post";

type Props = {
  post: Post
}

const BlogItem = ({ post }: Props) => {

  return (
    <Layout>

      <div>
        <Head>
          {/* <!-- Primary Meta Tags --> */}
          <title>{post.title}</title>
          <meta name="title" content={post.title} />
          <meta name="description" content={post.body} />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content={`http://localhost:3000/blog/${post.id}`} />
          <meta property="og:title" content={post.title} />
          <meta property="og:description" content={post.body} />
          <meta property="og:image" content="http://localhost:3000/guy2.jpg" />

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={`http://localhost:3000/blog/${post.id}`} />
          <meta property="twitter:title" content={post.title} />
          <meta property="twitter:description" content={post.body} />
          <meta property="twitter:image" content="http://localhost:3000/guy2.jpg"></meta>

        </Head>
        <h1>Blog</h1>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </Layout>
  )
}


export default BlogItem;

type IPath = {
  params: {
    id: string;
  },
  locale: string;
  // locale: 'en' | 'pt';
}

export const getStaticPaths = async () => {
  const req = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await req.json();
  let paths: IPath[] = [];
  posts.map(post => {
    paths.push({
      params: {
        id: post.id.toString()
      },
      locale: 'en'
    });
    paths.push({
      params: {
        id: post.id.toString()
      },
      locale: 'pt'
    });

  })

  return {
    paths,
    fallback: false //Manda para pagina not Found
    // fallback: true
    // fallback: 'blocking'
  }
}

interface IParams extends ParsedUrlQuery {
  id: string
}
export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams;
  const { locale } = context;


  const req = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}?language=${locale}`);
  const post = await req.json();

  return {
    props: {
      post: post
    }
  }
}
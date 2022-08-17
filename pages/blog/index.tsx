////////// Entendendo o SSG //////////
// import { Post } from '../../types/Post';

// type Props = {
//   name: string;
//   posts: Post[];
// }

// const Blog = ({ name, posts }: Props) => {
//   return (
//     <div>
//       <h1>Blog</h1>
//       <h2>Blog de {name}</h2>

//       <ul>
//         {posts.map((post, index) => (
//           <li key={index}>{post.title}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export const getStaticProps = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const posts: Post[] = await res.json();


//   return {
//     props: {
//       name: 'Jaime',
//       posts: posts
//     },
//     revalidate: 7200
//   }
// }

// export default Blog;

///////////// ENTENDENDO STATICPATHS NA PRATICA ///////////////////
import Link from 'next/link';
import { Layout } from '../../components/Layout';
import { Post } from '../../types/Post';

type Props = {
  name: string;
  posts: Post[];
}

const Blog = ({ name, posts }: Props) => {
  return (
    <Layout>
      <div>
        <h1>Blog</h1>
        <h2>Blog de {name}</h2>

        <ul>
          {posts.map((post, index) => (
            <li key={index}><Link href={`/blog/${post.id}`}><a>{post.title}</a></Link></li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const req = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await req.json();


  return {
    props: {
      name: 'Jaime',
      posts: posts
    },
    revalidate: 7200
  }
}

export default Blog;
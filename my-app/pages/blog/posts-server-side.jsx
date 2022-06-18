import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import styles from "../../styles/Home.module.scss";
import endpoints from "../../lib/endpoints";

// This function gets called at build time
export async function getServerSideProps({ req, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const result = await fetch(endpoints.posts);
  const posts = await result.json();

  return {
    props: {
      posts,
    },
  };
}

export default function ServerSideHome({ posts }) {
  let renderedPosts;
  if (!posts) {
    renderedPosts = <div> not posts found</div>;
  } else {
    renderedPosts = (
      <ul className={styles.grid}>
        {posts.map((post, i) => (
          <li className={styles.card} key={i}>
            <span>{post.title}</span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <Layout>
      <Head>
        <title>server-side gen posts</title>
      </Head>

      <h1 className={styles.title}>Server Side Posts</h1>
      {renderedPosts}
    </Layout>
  );
}

import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import styles from "../styles/Home.module.scss";
import endpoints from "../lib/endpoints";

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch(endpoints.posts);
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  let renderedPosts;
  if (!posts) {
    renderedPosts = <div> not posts found</div>;
  } else {
    renderedPosts = (
      <ul className={styles.grid}>
        {posts.map((post, i) => (
          <li className={styles.card} key={i}>
            <Link href={`/blog/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <Layout>
      <Head>
        <title>statically gen posts</title>
      </Head>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      {renderedPosts}
    </Layout>
  );
}

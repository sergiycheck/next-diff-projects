import Head from "next/head";
import Layout from "../../../components/layout";
import endpoints from "../../../lib/endpoints";

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch(endpoints.posts);
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: `${post.id}` },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`${endpoints.posts}/${params.id}`);
  const post = await res.json();

  // Pass post data to the page via props
  return { props: { post } };
}

function Post({ post }) {
  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </Layout>
  );
}

export default Post;

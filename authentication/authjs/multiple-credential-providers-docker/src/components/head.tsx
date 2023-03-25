import Head from "next/head";

export function SharedHead() {
  return (
    <>
      <Head>
        <title>Movies app</title>
        <meta name="description" content="Movies manage app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}

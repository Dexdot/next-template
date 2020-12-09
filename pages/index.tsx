import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home(): JSX.Element {
  const title = 'Home';

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <h1>This is H1</h1>

      <Link href="/what">
        <a href="/what">Go to what page</a>
      </Link>
    </>
  );
}

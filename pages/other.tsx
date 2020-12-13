import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useSelector } from 'react-redux';

export default function Other(): JSX.Element {
  const example = useSelector((s) => s.example);

  console.log(example);

  return (
    <>
      <Head>
        <title>Other</title>
      </Head>

      <h2>This is H2</h2>

      <Link href="/">
        <a href="/">Go to home page</a>
      </Link>
    </>
  );
}

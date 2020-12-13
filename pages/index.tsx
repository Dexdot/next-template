import React from 'react';
import Link from 'next/link';
import { Head } from '@/components/Head';
import { useDispatch } from 'react-redux';
import { setExample } from '@/store/example';

export default function Home(): JSX.Element {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(
      setExample([
        { exampleField: '1' },
        { exampleField: '2' },
        { exampleField: '3' }
      ])
    );
  };

  return (
    <>
      <Head title="Home page" />
      <h1>This is H1</h1>
      <Link href="/other">
        <a href="/other">Go to other page</a>
      </Link>
      <button type="button" onClick={onClick}>
        Dispatch
      </button>
    </>
  );
}

import React, { useState } from 'react';
import Link from 'next/link';

export default function What(): JSX.Element {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button
        type="button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me
      </button>

      <br />
      <br />

      <Link href="/">
        <a href="/">Go to home page</a>
      </Link>
    </div>
  );
}

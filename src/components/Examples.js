import React from 'react';
import { Link } from 'react-router';

export default (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=NewYork'>New York, NY</Link>
        </li>
        <li>
          <Link to='/?location=Copenhagen'>Copenhagen, Denmark</Link>
        </li>
      </ol>
    </div>
  );
}

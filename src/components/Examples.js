import React from 'react';
import { Link } from 'react-router';

export default (props) => {
  return (
    <div>
      <h2 className="text-center">Examples</h2>
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

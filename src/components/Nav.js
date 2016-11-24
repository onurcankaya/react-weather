import React from 'react';
import { Link, IndexLink } from 'react-router';

export default (props) => {
  return (
    <div>
      <h3>Nav component</h3>
      <IndexLink to='/' activeClassName='active' activeStyle={{ fontWeight: 'bold' }}>Get Weather</IndexLink>
      <Link to='about' activeClassName='active' activeStyle={{ fontWeight: 'bold' }}>About</Link>
      <Link to='examples' activeClassName='active' activeStyle={{ fontWeight: 'bold' }}>Examples</Link>
    </div>
  );
}

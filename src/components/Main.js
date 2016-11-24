import React from 'react';
import Nav from './Nav';
import Weather from './Weather';

export default (props) => {
  return (
    <div>
      <Nav />
      <h1>Main Component!</h1>
      {props.children}
    </div>
  );
};

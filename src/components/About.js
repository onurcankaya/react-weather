import React from 'react';

export default (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a weather application built using React and Open Weather Map API</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a>
        </li>
        <li>
          <a href="http://opeweathermap.org">Open Weather Map</a>
        </li>
      </ul>
    </div>
  );
};
